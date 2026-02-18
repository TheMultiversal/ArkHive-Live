import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import React from 'react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));

// Mock Next.js image
vi.mock('next/image', () => ({
  default: function MockImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return React.createElement('img', { ...props, alt: props.alt || '' });
  },
}));

// Mock Next.js link
vi.mock('next/link', () => ({
  default: function MockLink({ children, href, ...props }: { children: React.ReactNode; href: string }) {
    return React.createElement('a', { href, ...props }, children);
  },
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: { children: React.ReactNode }) => <span {...props}>{children}</span>,
    button: ({ children, ...props }: { children: React.ReactNode }) => <button {...props}>{children}</button>,
    a: ({ children, ...props }: { children: React.ReactNode }) => <a {...props}>{children}</a>,
    ul: ({ children, ...props }: { children: React.ReactNode }) => <ul {...props}>{children}</ul>,
    li: ({ children, ...props }: { children: React.ReactNode }) => <li {...props}>{children}</li>,
    p: ({ children, ...props }: { children: React.ReactNode }) => <p {...props}>{children}</p>,
    h1: ({ children, ...props }: { children: React.ReactNode }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: { children: React.ReactNode }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: { children: React.ReactNode }) => <h3 {...props}>{children}</h3>,
    section: ({ children, ...props }: { children: React.ReactNode }) => <section {...props}>{children}</section>,
    article: ({ children, ...props }: { children: React.ReactNode }) => <article {...props}>{children}</article>,
    nav: ({ children, ...props }: { children: React.ReactNode }) => <nav {...props}>{children}</nav>,
    header: ({ children, ...props }: { children: React.ReactNode }) => <header {...props}>{children}</header>,
    footer: ({ children, ...props }: { children: React.ReactNode }) => <footer {...props}>{children}</footer>,
    main: ({ children, ...props }: { children: React.ReactNode }) => <main {...props}>{children}</main>,
    aside: ({ children, ...props }: { children: React.ReactNode }) => <aside {...props}>{children}</aside>,
    form: ({ children, ...props }: { children: React.ReactNode }) => <form {...props}>{children}</form>,
    input: (props: React.InputHTMLAttributes<HTMLInputElement>) => <input {...props} />,
    textarea: (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea {...props} />,
    select: ({ children, ...props }: { children: React.ReactNode }) => <select {...props}>{children}</select>,
    svg: ({ children, ...props }: { children: React.ReactNode }) => <svg {...props}>{children}</svg>,
    path: (props: React.SVGProps<SVGPathElement>) => <path {...props} />,
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt || ''} />,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useAnimation: () => ({
    start: vi.fn(),
    stop: vi.fn(),
    set: vi.fn(),
  }),
  useMotionValue: (initial: number) => ({
    get: () => initial,
    set: vi.fn(),
    onChange: vi.fn(),
  }),
  useSpring: (initial: number) => ({
    get: () => initial,
    set: vi.fn(),
  }),
  useTransform: (value: unknown, input: number[], output: number[]) => ({
    get: () => output[0],
  }),
  useInView: () => true,
  useScroll: () => ({
    scrollY: { get: () => 0 },
    scrollX: { get: () => 0 },
    scrollYProgress: { get: () => 0 },
    scrollXProgress: { get: () => 0 },
  }),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

// Mock ResizeObserver
class MockResizeObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: MockResizeObserver,
});

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock sessionStorage
Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock,
});

// Mock clipboard API
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: vi.fn().mockResolvedValue(undefined),
    readText: vi.fn().mockResolvedValue(''),
  },
  writable: true,
});
