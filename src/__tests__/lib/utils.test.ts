import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('should merge class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    expect(cn('base', true && 'included', false && 'excluded')).toBe('base included');
  });

  it('should handle undefined and null', () => {
    expect(cn('base', undefined, null, 'end')).toBe('base end');
  });

  it('should handle arrays', () => {
    expect(cn(['foo', 'bar'])).toBe('foo bar');
  });

  it('should handle objects', () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('should handle mixed inputs', () => {
    expect(cn('base', ['array'], { object: true })).toBe('base array object');
  });

  it('should resolve Tailwind conflicts - padding', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });

  it('should resolve Tailwind conflicts - margin', () => {
    expect(cn('m-4', 'm-8')).toBe('m-8');
  });

  it('should resolve Tailwind conflicts - colors', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('should resolve Tailwind conflicts - background', () => {
    expect(cn('bg-white', 'bg-black')).toBe('bg-black');
  });

  it('should resolve Tailwind conflicts - display', () => {
    expect(cn('block', 'flex')).toBe('flex');
  });

  it('should not conflict different utilities', () => {
    expect(cn('p-4', 'm-4', 'text-red-500')).toBe('p-4 m-4 text-red-500');
  });

  it('should handle responsive variants', () => {
    expect(cn('p-2', 'md:p-4', 'lg:p-6')).toBe('p-2 md:p-4 lg:p-6');
  });

  it('should resolve responsive variant conflicts', () => {
    expect(cn('md:p-4', 'md:p-8')).toBe('md:p-8');
  });

  it('should handle state variants', () => {
    expect(cn('hover:bg-red-500', 'focus:bg-blue-500')).toBe('hover:bg-red-500 focus:bg-blue-500');
  });

  it('should resolve state variant conflicts', () => {
    expect(cn('hover:bg-red-500', 'hover:bg-blue-500')).toBe('hover:bg-blue-500');
  });

  it('should handle empty strings', () => {
    expect(cn('', 'foo', '')).toBe('foo');
  });

  it('should handle whitespace-only strings', () => {
    expect(cn('  ', 'foo', '  ')).toBe('foo');
  });

  it('should handle complex real-world scenarios', () => {
    const baseClasses = 'flex items-center p-4 bg-white rounded-lg';
    const conditionalClasses = {
      'text-red-500': true,
      'text-blue-500': false,
    };
    const overrideClasses = 'p-2 bg-black';

    expect(cn(baseClasses, conditionalClasses, overrideClasses))
      .toBe('flex items-center rounded-lg text-red-500 p-2 bg-black');
  });

  it('should handle arbitrary values', () => {
    expect(cn('p-[20px]', 'p-[30px]')).toBe('p-[30px]');
  });

  it('should handle negative values', () => {
    expect(cn('-m-4', '-m-2')).toBe('-m-2');
  });

  it('should preserve non-conflicting classes order', () => {
    const result = cn('a', 'b', 'c');
    expect(result).toBe('a b c');
  });
});
