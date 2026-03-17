import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

// ============================================================
// Types
// ============================================================

interface Tag {
 id: string;
 name: string;
 slug: string;
 color: string;
 description: string;
 category: 'investigation' | 'entity' | 'document' | 'general';
 usageCount: number;
 createdAt: Date;
 updatedAt: Date;
 createdBy: string;
}

// ============================================================
// Mock Data Store
// ============================================================

const tagsStore: Tag[] = [
 {
 id: 'tag_1',
 name: 'Government',
 slug: 'government',
 color: '#b80000',
 description: 'Items related to government agencies',
 category: 'general',
 usageCount: 456,
 createdAt: new Date('2023-06-15'),
 updatedAt: new Date('2024-01-10'),
 createdBy: 'user_1',
 },
 {
 id: 'tag_2',
 name: 'Financial Crime',
 slug: 'financial-crime',
 color: '#f59e0b',
 description: 'Money laundering and fraud',
 category: 'investigation',
 usageCount: 312,
 createdAt: new Date('2023-07-20'),
 updatedAt: new Date('2024-01-08'),
 createdBy: 'user_1',
 },
];

// ============================================================
// Helper Functions
// ============================================================

function slugify(text: string): string {
 return text
 .toLowerCase()
 .replace(/[^\w\s-]/g, '')
 .replace(/[\s_-]+/g, '-')
 .replace(/^-+|-+$/g, '');
}

// ============================================================
// GET /api/tags - Get all tags
// ============================================================

export async function GET() {
 try {
 const tags = [...tagsStore];

 // Sort by name ascending (default)
 tags.sort((a, b) => a.name.localeCompare(b.name));

 return NextResponse.json({
 data: tags,
 total: tags.length,
 });
 } catch (error) {
 console.error('Tags GET error:', error);
 return NextResponse.json(
 { error: 'Failed to fetch tags' },
 { status: 500 }
 );
 }
}

// ============================================================
// POST /api/tags - Create a new tag
// ============================================================

export async function POST(request: Request) {
 try {
 const body = await request.json();

 // Validate required fields
 if (!body.name) {
 return NextResponse.json(
 { error: 'Tag name is required' },
 { status: 400 }
 );
 }

 // Check for duplicate slug
 const slug = slugify(body.name);
 if (tagsStore.some(t => t.slug === slug)) {
 return NextResponse.json(
 { error: 'A tag with this name already exists' },
 { status: 409 }
 );
 }

 const tag: Tag = {
 id: `tag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
 name: body.name,
 slug,
 color: body.color || '#6b7280',
 description: body.description || '',
 category: body.category || 'general',
 usageCount: 0,
 createdAt: new Date(),
 updatedAt: new Date(),
 createdBy: body.userId || 'anonymous',
 };

 tagsStore.push(tag);

 return NextResponse.json(tag, { status: 201 });
 } catch (error) {
 console.error('Tags POST error:', error);
 return NextResponse.json(
 { error: 'Failed to create tag' },
 { status: 500 }
 );
 }
}

// ============================================================
// PATCH /api/tags - Update a tag
// ============================================================

export async function PATCH(request: Request) {
 try {
 const { searchParams } = new URL(request.url);
 const tagId = searchParams.get('id');
 const body = await request.json();

 if (!tagId) {
 return NextResponse.json(
 { error: 'Tag ID is required' },
 { status: 400 }
 );
 }

 const tagIndex = tagsStore.findIndex(t => t.id === tagId);
 if (tagIndex === -1) {
 return NextResponse.json(
 { error: 'Tag not found' },
 { status: 404 }
 );
 }

 const updatedTag: Tag = {
 ...tagsStore[tagIndex],
 ...body,
 slug: body.name ? slugify(body.name) : tagsStore[tagIndex].slug,
 updatedAt: new Date(),
 };

 tagsStore[tagIndex] = updatedTag;

 return NextResponse.json(updatedTag);
 } catch (error) {
 console.error('Tags PATCH error:', error);
 return NextResponse.json(
 { error: 'Failed to update tag' },
 { status: 500 }
 );
 }
}

// ============================================================
// DELETE /api/tags - Delete a tag
// ============================================================

export async function DELETE(request: Request) {
 try {
 const { searchParams } = new URL(request.url);
 const tagId = searchParams.get('id');

 if (!tagId) {
 return NextResponse.json(
 { error: 'Tag ID is required' },
 { status: 400 }
 );
 }

 const tagIndex = tagsStore.findIndex(t => t.id === tagId);
 if (tagIndex === -1) {
 return NextResponse.json(
 { error: 'Tag not found' },
 { status: 404 }
 );
 }

 const deletedTag = tagsStore.splice(tagIndex, 1)[0];

 return NextResponse.json({ success: true, deleted: deletedTag });
 } catch (error) {
 console.error('Tags DELETE error:', error);
 return NextResponse.json(
 { error: 'Failed to delete tag' },
 { status: 500 }
 );
 }
}
