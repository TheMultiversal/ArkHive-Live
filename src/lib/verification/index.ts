// Verification utilities for the ArkHive verify API
// URL validation and archive checking

export async function checkUrl(url: string): Promise<{ status: number; accessible: boolean; redirected: boolean; finalUrl: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, { method: 'HEAD', signal: controller.signal, redirect: 'follow' });
    clearTimeout(timeout);
    return {
      status: res.status,
      accessible: res.ok,
      redirected: res.redirected,
      finalUrl: res.url,
    };
  } catch {
    return { status: 0, accessible: false, redirected: false, finalUrl: url };
  }
}

export async function checkWaybackArchive(url: string): Promise<string | null> {
  try {
    const res = await fetch(`https://archive.org/wayback/available?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    return data?.archived_snapshots?.closest?.url || null;
  } catch {
    return null;
  }
}

export async function requestWaybackArchive(url: string): Promise<string | null> {
  try {
    await fetch(`https://web.archive.org/save/${url}`, { method: 'GET' });
    return `https://web.archive.org/web/${url}`;
  } catch {
    return null;
  }
}

export async function verifyContent(url: string, claims: string[]): Promise<{ url: string; claimsChecked: number; verified: boolean }> {
  return { url, claimsChecked: claims.length, verified: false };
}

export function validateCaseNumber(value: string): boolean {
  return /^\d{1,2}[-:]\d{2}[-:](?:cv|cr|mc|mj|po|ml)[-:]\d{3,6}/.test(value);
}

export function validatePubMedId(value: string): boolean {
  return /^\d{7,8}$/.test(value);
}

export function validateDoi(value: string): boolean {
  return /^10\.\d{4,}\//.test(value);
}

export function validatePatentNumber(value: string): boolean {
  return /^US\d{7,}/.test(value) || /^[A-Z]{2}\d{6,}/.test(value);
}
