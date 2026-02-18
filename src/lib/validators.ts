// ============================================================
// Validators Utility
// Comprehensive validation functions
// ============================================================

// ============================================================
// Types
// ============================================================

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export interface PasswordStrength {
  score: number; // 0-4
  level: 'weak' | 'fair' | 'good' | 'strong' | 'very-strong';
  feedback: string[];
}

// ============================================================
// String Validators
// ============================================================

/**
 * Check if value is empty (null, undefined, or empty string)
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/**
 * Check if string is not empty
 */
export function isRequired(value: string | null | undefined): ValidationResult {
  if (isEmpty(value)) {
    return { valid: false, error: 'This field is required' };
  }
  return { valid: true };
}

/**
 * Check minimum length
 */
export function minLength(value: string, min: number): ValidationResult {
  if (value.length < min) {
    return { valid: false, error: `Must be at least ${min} characters` };
  }
  return { valid: true };
}

/**
 * Check maximum length
 */
export function maxLength(value: string, max: number): ValidationResult {
  if (value.length > max) {
    return { valid: false, error: `Must be at most ${max} characters` };
  }
  return { valid: true };
}

/**
 * Check exact length
 */
export function exactLength(value: string, length: number): ValidationResult {
  if (value.length !== length) {
    return { valid: false, error: `Must be exactly ${length} characters` };
  }
  return { valid: true };
}

/**
 * Check if matches pattern
 */
export function matches(value: string, pattern: RegExp, errorMessage?: string): ValidationResult {
  if (!pattern.test(value)) {
    return { valid: false, error: errorMessage || 'Invalid format' };
  }
  return { valid: true };
}

// ============================================================
// Email Validators
// ============================================================

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validate email address
 */
export function isEmail(value: string): ValidationResult {
  if (!EMAIL_REGEX.test(value)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }
  return { valid: true };
}

// ============================================================
// URL Validators
// ============================================================

/**
 * Validate URL
 */
export function isUrl(value: string, requireProtocol = true): ValidationResult {
  try {
    const url = new URL(requireProtocol ? value : `https://${value}`);
    if (requireProtocol && !['http:', 'https:'].includes(url.protocol)) {
      return { valid: false, error: 'URL must use http or https protocol' };
    }
    return { valid: true };
  } catch {
    return { valid: false, error: 'Please enter a valid URL' };
  }
}

// ============================================================
// Number Validators
// ============================================================

/**
 * Check if value is a valid number
 */
export function isNumber(value: unknown): ValidationResult {
  if (typeof value === 'number' && !isNaN(value)) {
    return { valid: true };
  }
  if (typeof value === 'string' && !isNaN(Number(value))) {
    return { valid: true };
  }
  return { valid: false, error: 'Please enter a valid number' };
}

/**
 * Check if number is within range
 */
export function inRange(value: number, min: number, max: number): ValidationResult {
  if (value < min || value > max) {
    return { valid: false, error: `Must be between ${min} and ${max}` };
  }
  return { valid: true };
}

/**
 * Check minimum value
 */
export function minValue(value: number, min: number): ValidationResult {
  if (value < min) {
    return { valid: false, error: `Must be at least ${min}` };
  }
  return { valid: true };
}

/**
 * Check maximum value
 */
export function maxValue(value: number, max: number): ValidationResult {
  if (value > max) {
    return { valid: false, error: `Must be at most ${max}` };
  }
  return { valid: true };
}

/**
 * Check if integer
 */
export function isInteger(value: number): ValidationResult {
  if (!Number.isInteger(value)) {
    return { valid: false, error: 'Must be a whole number' };
  }
  return { valid: true };
}

/**
 * Check if positive number
 */
export function isPositive(value: number): ValidationResult {
  if (value <= 0) {
    return { valid: false, error: 'Must be a positive number' };
  }
  return { valid: true };
}

// ============================================================
// Password Validators
// ============================================================

/**
 * Check password strength
 */
export function checkPasswordStrength(password: string): PasswordStrength {
  const feedback: string[] = [];
  let score = 0;

  // Length checks
  if (password.length >= 8) score++;
  else feedback.push('Use at least 8 characters');

  if (password.length >= 12) score++;

  // Character variety
  if (/[a-z]/.test(password)) score += 0.5;
  else feedback.push('Add lowercase letters');

  if (/[A-Z]/.test(password)) score += 0.5;
  else feedback.push('Add uppercase letters');

  if (/\d/.test(password)) score += 0.5;
  else feedback.push('Add numbers');

  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 0.5;
  else feedback.push('Add special characters');

  // Penalize common patterns
  if (/^[a-zA-Z]+$/.test(password)) {
    score -= 0.5;
    feedback.push('Avoid using only letters');
  }
  if (/^[0-9]+$/.test(password)) {
    score -= 0.5;
    feedback.push('Avoid using only numbers');
  }
  if (/(.)\1{2,}/.test(password)) {
    score -= 0.5;
    feedback.push('Avoid repeated characters');
  }

  // Common passwords check
  const commonPasswords = ['password', '123456', 'qwerty', 'admin', 'letmein'];
  if (commonPasswords.some((p) => password.toLowerCase().includes(p))) {
    score = 0;
    feedback.push('Avoid common passwords');
  }

  const normalizedScore = Math.max(0, Math.min(4, Math.round(score)));
  const levels: PasswordStrength['level'][] = ['weak', 'fair', 'good', 'strong', 'very-strong'];

  return {
    score: normalizedScore,
    level: levels[normalizedScore],
    feedback,
  };
}

/**
 * Validate password meets requirements
 */
export function isValidPassword(
  password: string,
  options: {
    minLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
    requireSpecial?: boolean;
  } = {}
): ValidationResult {
  const {
    minLength: min = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumber = true,
    requireSpecial = false,
  } = options;

  const errors: string[] = [];

  if (password.length < min) {
    errors.push(`at least ${min} characters`);
  }
  if (requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('an uppercase letter');
  }
  if (requireLowercase && !/[a-z]/.test(password)) {
    errors.push('a lowercase letter');
  }
  if (requireNumber && !/\d/.test(password)) {
    errors.push('a number');
  }
  if (requireSpecial && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('a special character');
  }

  if (errors.length > 0) {
    return {
      valid: false,
      error: `Password must contain ${errors.join(', ')}`,
    };
  }
  return { valid: true };
}

// ============================================================
// Date Validators
// ============================================================

/**
 * Check if valid date
 */
export function isValidDate(value: unknown): ValidationResult {
  const date = value instanceof Date ? value : new Date(value as string);
  if (isNaN(date.getTime())) {
    return { valid: false, error: 'Please enter a valid date' };
  }
  return { valid: true };
}

/**
 * Check if date is in the past
 */
export function isPastDate(date: Date): ValidationResult {
  if (date >= new Date()) {
    return { valid: false, error: 'Date must be in the past' };
  }
  return { valid: true };
}

/**
 * Check if date is in the future
 */
export function isFutureDate(date: Date): ValidationResult {
  if (date <= new Date()) {
    return { valid: false, error: 'Date must be in the future' };
  }
  return { valid: true };
}

/**
 * Check if date is within range
 */
export function isDateInRange(date: Date, min: Date, max: Date): ValidationResult {
  if (date < min || date > max) {
    return {
      valid: false,
      error: `Date must be between ${min.toLocaleDateString()} and ${max.toLocaleDateString()}`,
    };
  }
  return { valid: true };
}

// ============================================================
// Phone Validators
// ============================================================

const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

/**
 * Validate phone number
 */
export function isPhone(value: string): ValidationResult {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length < 10 || cleaned.length > 15) {
    return { valid: false, error: 'Please enter a valid phone number' };
  }
  return { valid: true };
}

// ============================================================
// Credit Card Validators
// ============================================================

/**
 * Validate credit card number using Luhn algorithm
 */
export function isCreditCard(value: string): ValidationResult {
  const cleaned = value.replace(/\D/g, '');

  if (cleaned.length < 13 || cleaned.length > 19) {
    return { valid: false, error: 'Invalid card number length' };
  }

  // Luhn algorithm
  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  if (sum % 10 !== 0) {
    return { valid: false, error: 'Invalid card number' };
  }
  return { valid: true };
}

/**
 * Detect credit card type
 */
export function detectCardType(number: string): string {
  const cleaned = number.replace(/\D/g, '');

  if (/^4/.test(cleaned)) return 'visa';
  if (/^5[1-5]/.test(cleaned)) return 'mastercard';
  if (/^3[47]/.test(cleaned)) return 'amex';
  if (/^6(?:011|5)/.test(cleaned)) return 'discover';
  if (/^(?:2131|1800|35)/.test(cleaned)) return 'jcb';

  return 'unknown';
}

// ============================================================
// File Validators
// ============================================================

/**
 * Validate file type
 */
export function isValidFileType(file: File, allowedTypes: string[]): ValidationResult {
  const fileType = file.type || '';
  const extension = file.name.split('.').pop()?.toLowerCase() || '';

  const isAllowed = allowedTypes.some((type) => {
    if (type.startsWith('.')) {
      return extension === type.slice(1);
    }
    if (type.endsWith('/*')) {
      return fileType.startsWith(type.slice(0, -1));
    }
    return fileType === type;
  });

  if (!isAllowed) {
    return {
      valid: false,
      error: `File type not allowed. Accepted: ${allowedTypes.join(', ')}`,
    };
  }
  return { valid: true };
}

/**
 * Validate file size
 */
export function isValidFileSize(file: File, maxSizeBytes: number): ValidationResult {
  if (file.size > maxSizeBytes) {
    const maxSizeMB = (maxSizeBytes / 1024 / 1024).toFixed(2);
    return {
      valid: false,
      error: `File is too large. Maximum size: ${maxSizeMB} MB`,
    };
  }
  return { valid: true };
}

// ============================================================
// Composite Validators
// ============================================================

/**
 * Run multiple validators and return all errors
 */
export function validate(
  value: unknown,
  validators: Array<(value: unknown) => ValidationResult>
): ValidationResult & { errors: string[] } {
  const errors: string[] = [];

  for (const validator of validators) {
    const result = validator(value);
    if (!result.valid && result.error) {
      errors.push(result.error);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    error: errors[0],
  };
}
