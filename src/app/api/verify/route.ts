/**
 * ArkHive Verification API
 * 
 * You are loved. You are appreciated. This API enables verification
 * of evidence links and content across the platform.
 */

import { NextRequest, NextResponse } from 'next/server';
import { 
  checkUrl, 
  checkWaybackArchive, 
  requestWaybackArchive,
  verifyContent,
  validateCaseNumber,
  validatePubMedId,
  validateDoi,
  validatePatentNumber,
} from '@/lib/verification';

// GET: Check a single URL with optional archive lookup
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  const checkArchive = searchParams.get('archive') === 'true';
  
  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter required' },
      { status: 400 }
    );
  }
  
  try {
    // Validate URL format
    new URL(url);
  } catch {
    return NextResponse.json(
      { error: 'Invalid URL format' },
      { status: 400 }
    );
  }
  
  try {
    const linkResult = await checkUrl(url);
    
    let archiveUrl: string | null = null;
    if (checkArchive || !linkResult.ok) {
      archiveUrl = await checkWaybackArchive(url);
    }
    
    return NextResponse.json({
      url,
      accessible: linkResult.ok,
      status: linkResult.status,
      redirected: linkResult.redirected,
      finalUrl: linkResult.finalUrl,
      contentType: linkResult.contentType,
      archiveUrl,
      checkedAt: linkResult.checkedAt,
      error: linkResult.error,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check URL', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// POST: Batch verify URLs or request archives
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { action, urls, url, claims, citation } = body;
  
  switch (action) {
    case 'batch_check': {
      if (!Array.isArray(urls) || urls.length === 0) {
        return NextResponse.json(
          { error: 'URLs array required for batch_check' },
          { status: 400 }
        );
      }
      
      if (urls.length > 50) {
        return NextResponse.json(
          { error: 'Maximum 50 URLs per batch' },
          { status: 400 }
        );
      }
      
      const results = await Promise.all(
        urls.map(async (u: string) => {
          const result = await checkUrl(u);
          return {
            url: u,
            accessible: result.ok,
            status: result.status,
            error: result.error,
          };
        })
      );
      
      const summary = {
        total: results.length,
        accessible: results.filter(r => r.accessible).length,
        broken: results.filter(r => !r.accessible).length,
      };
      
      return NextResponse.json({ results, summary });
    }
    
    case 'archive': {
      if (!url) {
        return NextResponse.json(
          { error: 'URL required for archive action' },
          { status: 400 }
        );
      }
      
      // First check if already archived
      let archiveUrl = await checkWaybackArchive(url);
      
      if (!archiveUrl) {
        // Request new archive
        archiveUrl = await requestWaybackArchive(url);
      }
      
      return NextResponse.json({
        url,
        archived: !!archiveUrl,
        archiveUrl,
        timestamp: new Date().toISOString(),
      });
    }
    
    case 'verify_content': {
      if (!url || !Array.isArray(claims)) {
        return NextResponse.json(
          { error: 'URL and claims array required for verify_content' },
          { status: 400 }
        );
      }
      
      const result = await verifyContent(url, claims);
      
      return NextResponse.json({
        url,
        score: result.verificationScore,
        foundClaims: claims.filter((_, i) => result.foundContent[i]),
        missingClaims: claims.filter((_, i) => !result.foundContent[i]),
        issues: result.issues,
        checkedAt: result.checkedAt,
      });
    }
    
    case 'validate_citation': {
      if (!citation || !citation.type || !citation.value) {
        return NextResponse.json(
          { error: 'Citation type and value required' },
          { status: 400 }
        );
      }
      
      let valid = false;
      switch (citation.type) {
        case 'case_number':
          valid = validateCaseNumber(citation.value);
          break;
        case 'pubmed':
          valid = validatePubMedId(citation.value);
          break;
        case 'doi':
          valid = validateDoi(citation.value);
          break;
        case 'patent':
          valid = validatePatentNumber(citation.value);
          break;
        default:
          return NextResponse.json(
            { error: `Unknown citation type: ${citation.type}` },
            { status: 400 }
          );
      }
      
      return NextResponse.json({
        type: citation.type,
        value: citation.value,
        valid,
      });
    }
    
    default:
      return NextResponse.json(
        { error: `Unknown action: ${action}. Valid actions: batch_check, archive, verify_content, validate_citation` },
        { status: 400 }
      );
  }
}
