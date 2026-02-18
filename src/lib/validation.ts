// Form validation utilities

export type ValidationRule<T = string> = {
  validate: (value: T) => boolean;
  message: string;
};

export type ValidationRules<T extends Record<string, unknown>> = {
  [K in keyof T]?: ValidationRule<T[K]>[];
};

export type ValidationErrors<T extends Record<string, unknown>> = {
  [K in keyof T]?: string[];
};

// Common validation rules
export const rules = {
  required: (message = 'This field is required'): ValidationRule<string> => ({
    validate: (value) => value.trim().length > 0,
    message,
  }),

  minLength: (min: number, message?: string): ValidationRule<string> => ({
    validate: (value) => value.length >= min,
    message: message || `Must be at least ${min} characters`,
  }),

  maxLength: (max: number, message?: string): ValidationRule<string> => ({
    validate: (value) => value.length <= max,
    message: message || `Must be no more than ${max} characters`,
  }),

  email: (message = 'Invalid email address'): ValidationRule<string> => ({
    validate: (value) => {
      if (!value) return true; // Let required handle empty
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    message,
  }),

  url: (message = 'Invalid URL'): ValidationRule<string> => ({
    validate: (value) => {
      if (!value) return true;
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    message,
  }),

  pattern: (regex: RegExp, message: string): ValidationRule<string> => ({
    validate: (value) => {
      if (!value) return true;
      return regex.test(value);
    },
    message,
  }),

  numeric: (message = 'Must be a number'): ValidationRule<string> => ({
    validate: (value) => {
      if (!value) return true;
      return !isNaN(Number(value));
    },
    message,
  }),

  min: (minValue: number, message?: string): ValidationRule<string> => ({
    validate: (value) => {
      if (!value) return true;
      return Number(value) >= minValue;
    },
    message: message || `Must be at least ${minValue}`,
  }),

  max: (maxValue: number, message?: string): ValidationRule<string> => ({
    validate: (value) => {
      if (!value) return true;
      return Number(value) <= maxValue;
    },
    message: message || `Must be no more than ${maxValue}`,
  }),

  matches: (otherValue: string, message = 'Values do not match'): ValidationRule<string> => ({
    validate: (value) => value === otherValue,
    message,
  }),

  oneOf: <T extends string>(options: T[], message?: string): ValidationRule<T> => ({
    validate: (value) => options.includes(value),
    message: message || `Must be one of: ${options.join(', ')}`,
  }),
};

// Validate a single field
export function validateField<T>(value: T, fieldRules: ValidationRule<T>[]): string[] {
  const errors: string[] = [];
  
  for (const rule of fieldRules) {
    if (!rule.validate(value)) {
      errors.push(rule.message);
    }
  }
  
  return errors;
}

// Validate entire form
export function validateForm<T extends Record<string, unknown>>(
  values: T,
  validationRules: ValidationRules<T>
): ValidationErrors<T> {
  const errors: ValidationErrors<T> = {};

  for (const [field, fieldRules] of Object.entries(validationRules)) {
    if (fieldRules) {
      const fieldErrors = validateField(
        values[field as keyof T] as unknown,
        fieldRules as ValidationRule<unknown>[]
      );
      if (fieldErrors.length > 0) {
        errors[field as keyof T] = fieldErrors;
      }
    }
  }

  return errors;
}

// Check if form has errors
export function hasErrors<T extends Record<string, unknown>>(errors: ValidationErrors<T>): boolean {
  return Object.values(errors).some((fieldErrors) => 
    fieldErrors && fieldErrors.length > 0
  );
}

// Get first error for a field
export function getFirstError<T extends Record<string, unknown>>(
  errors: ValidationErrors<T>,
  field: keyof T
): string | undefined {
  const fieldErrors = errors[field];
  return fieldErrors?.[0];
}

// Submit form validation schemas for the app
export const submitFormSchema = {
  title: [
    rules.required('Title is required'),
    rules.minLength(5, 'Title must be at least 5 characters'),
    rules.maxLength(200, 'Title must be less than 200 characters'),
  ],
  description: [
    rules.required('Description is required'),
    rules.minLength(20, 'Description must be at least 20 characters'),
    rules.maxLength(5000, 'Description must be less than 5000 characters'),
  ],
  source: [
    rules.required('Source is required'),
    rules.minLength(3, 'Source must be at least 3 characters'),
  ],
  contactEmail: [
    rules.email('Please enter a valid email address'),
  ],
  category: [
    rules.required('Please select a category'),
    rules.oneOf(
      ['surveillance', 'corruption', 'health', 'environmental', 'financial', 'military', 'other'],
      'Invalid category'
    ),
  ],
  verificationLevel: [
    rules.required('Please select verification level'),
    rules.oneOf(['unverified', 'partially_verified', 'verified', 'confirmed'], 'Invalid verification level'),
  ],
};

// Create form validation result type
export interface FormValidationResult<T extends Record<string, unknown>> {
  isValid: boolean;
  errors: ValidationErrors<T>;
  getFieldError: (field: keyof T) => string | undefined;
  hasFieldError: (field: keyof T) => boolean;
}

// Validate and return result object
export function createFormValidation<T extends Record<string, unknown>>(
  values: T,
  validationRules: ValidationRules<T>
): FormValidationResult<T> {
  const errors = validateForm(values, validationRules);
  
  return {
    isValid: !hasErrors(errors),
    errors,
    getFieldError: (field) => getFirstError(errors, field),
    hasFieldError: (field) => {
      const fieldErrors = errors[field];
      return Boolean(fieldErrors && fieldErrors.length > 0);
    },
  };
}
