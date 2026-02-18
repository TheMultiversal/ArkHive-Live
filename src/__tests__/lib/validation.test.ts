import { describe, it, expect } from 'vitest';
import { rules, validateField } from '@/lib/validation';

describe('validation rules', () => {
  describe('required', () => {
    it('should fail for empty string', () => {
      const rule = rules.required();
      expect(rule.validate('')).toBe(false);
    });

    it('should fail for whitespace only', () => {
      const rule = rules.required();
      expect(rule.validate('   ')).toBe(false);
    });

    it('should pass for non-empty string', () => {
      const rule = rules.required();
      expect(rule.validate('hello')).toBe(true);
    });

    it('should use custom message', () => {
      const rule = rules.required('Custom message');
      expect(rule.message).toBe('Custom message');
    });
  });

  describe('minLength', () => {
    it('should fail for short string', () => {
      const rule = rules.minLength(5);
      expect(rule.validate('hi')).toBe(false);
    });

    it('should pass for exact length', () => {
      const rule = rules.minLength(5);
      expect(rule.validate('hello')).toBe(true);
    });

    it('should pass for longer string', () => {
      const rule = rules.minLength(5);
      expect(rule.validate('hello world')).toBe(true);
    });

    it('should use default message', () => {
      const rule = rules.minLength(5);
      expect(rule.message).toBe('Must be at least 5 characters');
    });

    it('should use custom message', () => {
      const rule = rules.minLength(5, 'Too short!');
      expect(rule.message).toBe('Too short!');
    });
  });

  describe('maxLength', () => {
    it('should pass for short string', () => {
      const rule = rules.maxLength(10);
      expect(rule.validate('hello')).toBe(true);
    });

    it('should pass for exact length', () => {
      const rule = rules.maxLength(5);
      expect(rule.validate('hello')).toBe(true);
    });

    it('should fail for longer string', () => {
      const rule = rules.maxLength(5);
      expect(rule.validate('hello world')).toBe(false);
    });
  });

  describe('email', () => {
    it('should pass for valid email', () => {
      const rule = rules.email();
      expect(rule.validate('test@example.com')).toBe(true);
    });

    it('should fail for invalid email', () => {
      const rule = rules.email();
      expect(rule.validate('notanemail')).toBe(false);
    });

    it('should fail for email without @', () => {
      const rule = rules.email();
      expect(rule.validate('test.example.com')).toBe(false);
    });

    it('should fail for email without domain', () => {
      const rule = rules.email();
      expect(rule.validate('test@')).toBe(false);
    });

    it('should pass for empty (let required handle it)', () => {
      const rule = rules.email();
      expect(rule.validate('')).toBe(true);
    });

    it('should pass for complex valid email', () => {
      const rule = rules.email();
      expect(rule.validate('user.name+tag@sub.domain.com')).toBe(true);
    });
  });

  describe('url', () => {
    it('should pass for valid http URL', () => {
      const rule = rules.url();
      expect(rule.validate('http://example.com')).toBe(true);
    });

    it('should pass for valid https URL', () => {
      const rule = rules.url();
      expect(rule.validate('https://example.com')).toBe(true);
    });

    it('should fail for invalid URL', () => {
      const rule = rules.url();
      expect(rule.validate('not-a-url')).toBe(false);
    });

    it('should pass for empty (let required handle it)', () => {
      const rule = rules.url();
      expect(rule.validate('')).toBe(true);
    });

    it('should pass for URL with path', () => {
      const rule = rules.url();
      expect(rule.validate('https://example.com/path/to/page')).toBe(true);
    });

    it('should pass for URL with query params', () => {
      const rule = rules.url();
      expect(rule.validate('https://example.com?foo=bar')).toBe(true);
    });
  });

  describe('pattern', () => {
    it('should pass for matching pattern', () => {
      const rule = rules.pattern(/^[a-z]+$/, 'Only lowercase letters');
      expect(rule.validate('hello')).toBe(true);
    });

    it('should fail for non-matching pattern', () => {
      const rule = rules.pattern(/^[a-z]+$/, 'Only lowercase letters');
      expect(rule.validate('Hello123')).toBe(false);
    });

    it('should pass for empty (let required handle it)', () => {
      const rule = rules.pattern(/^[a-z]+$/, 'Only lowercase letters');
      expect(rule.validate('')).toBe(true);
    });
  });

  describe('numeric', () => {
    it('should pass for integer', () => {
      const rule = rules.numeric();
      expect(rule.validate('123')).toBe(true);
    });

    it('should pass for decimal', () => {
      const rule = rules.numeric();
      expect(rule.validate('123.45')).toBe(true);
    });

    it('should pass for negative number', () => {
      const rule = rules.numeric();
      expect(rule.validate('-123')).toBe(true);
    });

    it('should fail for non-numeric', () => {
      const rule = rules.numeric();
      expect(rule.validate('abc')).toBe(false);
    });

    it('should pass for empty', () => {
      const rule = rules.numeric();
      expect(rule.validate('')).toBe(true);
    });
  });

  describe('min', () => {
    it('should pass for value equal to min', () => {
      const rule = rules.min(5);
      expect(rule.validate('5')).toBe(true);
    });

    it('should pass for value greater than min', () => {
      const rule = rules.min(5);
      expect(rule.validate('10')).toBe(true);
    });

    it('should fail for value less than min', () => {
      const rule = rules.min(5);
      expect(rule.validate('3')).toBe(false);
    });
  });

  describe('max', () => {
    it('should pass for value equal to max', () => {
      const rule = rules.max(10);
      expect(rule.validate('10')).toBe(true);
    });

    it('should pass for value less than max', () => {
      const rule = rules.max(10);
      expect(rule.validate('5')).toBe(true);
    });

    it('should fail for value greater than max', () => {
      const rule = rules.max(10);
      expect(rule.validate('15')).toBe(false);
    });
  });

  describe('matches', () => {
    it('should pass for matching values', () => {
      const rule = rules.matches('password123');
      expect(rule.validate('password123')).toBe(true);
    });

    it('should fail for non-matching values', () => {
      const rule = rules.matches('password123');
      expect(rule.validate('different')).toBe(false);
    });
  });

  describe('oneOf', () => {
    it('should pass for value in options', () => {
      const rule = rules.oneOf(['apple', 'banana', 'cherry']);
      expect(rule.validate('banana')).toBe(true);
    });

    it('should fail for value not in options', () => {
      const rule = rules.oneOf(['apple', 'banana', 'cherry']);
      // Cast to any to test invalid input
      expect(rule.validate('orange' as 'apple')).toBe(false);
    });
  });
});

describe('validateField', () => {
  it('should return empty array for valid value', () => {
    const errors = validateField('test@example.com', [rules.required(), rules.email()]);
    expect(errors).toEqual([]);
  });

  it('should return errors for invalid value', () => {
    const errors = validateField('', [rules.required(), rules.email()]);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toBe('This field is required');
  });

  it('should return multiple errors', () => {
    const errors = validateField('ab', [
      rules.required(),
      rules.minLength(5),
      rules.pattern(/^[A-Z]/, 'Must start with uppercase'),
    ]);
    expect(errors).toHaveLength(2);
  });
});
