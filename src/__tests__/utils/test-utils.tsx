import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// ============================================================
// Custom Providers Wrapper
// ============================================================

interface ProvidersProps {
  children: React.ReactNode;
}

function AllProviders({ children }: ProvidersProps) {
  return <>{children}</>;
}

// ============================================================
// Custom Render Function
// ============================================================

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  wrapper?: React.ComponentType<{ children: React.ReactNode }>;
}

function customRender(
  ui: ReactElement,
  options?: CustomRenderOptions
): RenderResult & { user: ReturnType<typeof userEvent.setup> } {
  const user = userEvent.setup();
  const { wrapper: Wrapper = AllProviders, ...restOptions } = options || {};
  
  return {
    user,
    ...render(ui, { wrapper: Wrapper, ...restOptions }),
  };
}

// ============================================================
// Mock Data Factories
// ============================================================

export function createMockInvestigation(overrides = {}) {
  return {
    id: 'inv-1',
    slug: 'test-investigation',
    title: 'Test Investigation',
    subtitle: 'A test investigation subtitle',
    summary: 'This is a test investigation summary.',
    content: ['Paragraph 1', 'Paragraph 2'],
    category: 'Government Oversight',
    severity: 'high' as const,
    date: '2024-01-15',
    lastUpdated: '2024-01-20',
    entityCount: 5,
    imageUrl: '/images/test.jpg',
    tags: ['corruption', 'fraud'],
    sources: [],
    affiliations: [],
    ...overrides,
  };
}

export function createMockEntity(overrides = {}) {
  return {
    id: 'ent-1',
    slug: 'test-entity',
    name: 'Test Entity',
    type: 'corporation' as const,
    description: 'A test entity description.',
    role: 'Primary Subject',
    investigationCount: 3,
    riskLevel: 'high' as const,
    imageUrl: '/images/entity.jpg',
    details: {},
    affiliations: [],
    investigations: ['inv-1'],
    ...overrides,
  };
}

export function createMockUser(overrides = {}) {
  return {
    id: 'user-1',
    email: 'test@example.com',
    name: 'Test User',
    role: 'editor' as const,
    avatar: '/images/avatar.jpg',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-15',
    ...overrides,
  };
}

export function createMockWorkspace(overrides = {}) {
  return {
    id: 'ws-1',
    name: 'Test Workspace',
    description: 'A test workspace description.',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
    ownerId: 'user-1',
    members: [],
    investigations: [],
    documents: [],
    isPublic: false,
    ...overrides,
  };
}

export function createMockDocument(overrides = {}) {
  return {
    id: 'doc-1',
    title: 'Test Document',
    type: 'pdf' as const,
    url: '/documents/test.pdf',
    size: 1024000,
    uploadedAt: '2024-01-10',
    uploadedBy: 'user-1',
    ...overrides,
  };
}

export function createMockNotification(overrides = {}) {
  return {
    id: 'notif-1',
    type: 'info' as const,
    title: 'Test Notification',
    message: 'This is a test notification.',
    read: false,
    createdAt: '2024-01-15T10:30:00Z',
    ...overrides,
  };
}

export function createMockComment(overrides = {}) {
  return {
    id: 'comment-1',
    content: 'This is a test comment.',
    authorId: 'user-1',
    authorName: 'Test User',
    authorAvatar: '/images/avatar.jpg',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    ...overrides,
  };
}

// ============================================================
// Utility Functions
// ============================================================

export function waitForLoadingToFinish() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

export function mockApiResponse<T>(data: T, delay = 0) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}

export function mockApiError(message: string, status = 500) {
  return Promise.reject(new Error(message));
}

// ============================================================
// Re-export Testing Library Utilities
// ============================================================

export * from '@testing-library/react';
export { userEvent };
export { customRender as render };
