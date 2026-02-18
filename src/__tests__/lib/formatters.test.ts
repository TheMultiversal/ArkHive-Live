import { describe, it, expect } from 'vitest';
import { formatDate, formatRelativeTime, truncateText, slugify, calculateReadingTime } from '@/lib/utils';

describe('formatDate', () => {
  it('should format ISO date string with default format', () => {
    expect(formatDate('2024-01-15')).toBe('January 15, 2024');
  });

  it('should format Date object', () => {
    const date = new Date(2024, 0, 15); // January 15, 2024
    expect(formatDate(date)).toBe('January 15, 2024');
  });

  it('should use custom format', () => {
    expect(formatDate('2024-01-15', 'MM/dd/yyyy')).toBe('01/15/2024');
  });

  it('should format with time', () => {
    expect(formatDate('2024-01-15T14:30:00', 'MMMM d, yyyy h:mm a')).toBe('January 15, 2024 2:30 PM');
  });

  it('should handle different date formats', () => {
    expect(formatDate('2024-12-25', 'EEEE, MMMM d')).toBe('Wednesday, December 25');
  });

  it('should format short date', () => {
    expect(formatDate('2024-01-15', 'MMM d')).toBe('Jan 15');
  });

  it('should format year only', () => {
    expect(formatDate('2024-06-15', 'yyyy')).toBe('2024');
  });
});

describe('formatRelativeTime', () => {
  it('should format recent date as relative', () => {
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
    expect(formatRelativeTime(fiveMinutesAgo)).toMatch(/minutes? ago/);
  });

  it('should format hours ago', () => {
    const now = new Date();
    const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
    expect(formatRelativeTime(twoHoursAgo)).toMatch(/hours? ago/);
  });

  it('should format days ago', () => {
    const now = new Date();
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
    expect(formatRelativeTime(threeDaysAgo)).toMatch(/days? ago/);
  });

  it('should handle ISO string input', () => {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
    expect(formatRelativeTime(oneHourAgo)).toMatch(/hour|minutes? ago/);
  });
});

describe('truncateText', () => {
  it('should not truncate short text', () => {
    expect(truncateText('Hello', 10)).toBe('Hello');
  });

  it('should truncate long text', () => {
    expect(truncateText('Hello World', 5)).toBe('Hello...');
  });

  it('should handle exact length', () => {
    expect(truncateText('Hello', 5)).toBe('Hello');
  });

  it('should handle empty string', () => {
    expect(truncateText('', 10)).toBe('');
  });

  it('should trim before adding ellipsis', () => {
    expect(truncateText('Hello World', 6)).toBe('Hello...');
  });

  it('should handle very short maxLength', () => {
    expect(truncateText('Hello', 2)).toBe('He...');
  });

  it('should handle single character maxLength', () => {
    expect(truncateText('Hello', 1)).toBe('H...');
  });
});

describe('slugify', () => {
  it('should convert to lowercase', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('should replace spaces with hyphens', () => {
    expect(slugify('hello world')).toBe('hello-world');
  });

  it('should remove special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('should handle multiple spaces', () => {
    expect(slugify('hello   world')).toBe('hello-world');
  });

  it('should handle leading/trailing whitespace', () => {
    expect(slugify('  hello world  ')).toBe('hello-world');
  });

  it('should handle underscores', () => {
    expect(slugify('hello_world_test')).toBe('hello-world-test');
  });

  it('should handle hyphens', () => {
    expect(slugify('hello-world')).toBe('hello-world');
  });

  it('should remove multiple consecutive hyphens', () => {
    expect(slugify('hello---world')).toBe('hello-world');
  });

  it('should handle numbers', () => {
    expect(slugify('Test 123')).toBe('test-123');
  });

  it('should handle empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('should handle unicode characters', () => {
    expect(slugify('Café Naïve')).toBe('caf-nave');
  });
});

describe('calculateReadingTime', () => {
  it('should calculate reading time for short text', () => {
    const text = 'Hello world this is a test.';
    expect(calculateReadingTime(text)).toBe(1);
  });

  it('should calculate reading time for longer text', () => {
    const words = Array(400).fill('word').join(' ');
    expect(calculateReadingTime(words)).toBe(2);
  });

  it('should round up to nearest minute', () => {
    const words = Array(201).fill('word').join(' ');
    expect(calculateReadingTime(words)).toBe(2);
  });

  it('should handle empty string', () => {
    expect(calculateReadingTime('')).toBe(1);
  });

  it('should use custom words per minute', () => {
    const words = Array(300).fill('word').join(' ');
    expect(calculateReadingTime(words, 300)).toBe(1);
  });

  it('should handle text with newlines', () => {
    const text = 'Hello\nworld\ntest';
    expect(calculateReadingTime(text)).toBe(1);
  });
});
