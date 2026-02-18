import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { validateForm, ValidationRules, ValidationErrors, hasErrors } from '@/lib/validation';

export interface UseFormOptions<T extends Record<string, unknown>> {
  initialValues: T;
  validationRules?: ValidationRules<T>;
  onSubmit?: (values: T) => void | Promise<void>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export interface UseFormReturn<T extends Record<string, unknown>> {
  values: T;
  errors: ValidationErrors<T>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setFieldValue: <K extends keyof T>(field: K, value: T[K]) => void;
  setFieldError: <K extends keyof T>(field: K, error: string) => void;
  clearFieldError: <K extends keyof T>(field: K) => void;
  setValues: (values: Partial<T>) => void;
  resetForm: () => void;
  validateField: <K extends keyof T>(field: K) => string[];
  validateAllFields: () => boolean;
  getFieldError: <K extends keyof T>(field: K) => string | undefined;
  hasFieldError: <K extends keyof T>(field: K) => boolean;
  isFieldTouched: <K extends keyof T>(field: K) => boolean;
}

export function useForm<T extends Record<string, unknown>>({
  initialValues,
  validationRules = {} as ValidationRules<T>,
  onSubmit,
  validateOnChange = false,
  validateOnBlur = true,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValuesState] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors<T>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  // Validate a single field
  const validateField = useCallback(<K extends keyof T>(field: K): string[] => {
    const fieldRules = validationRules[field];
    if (!fieldRules) return [];

    const fieldErrors: string[] = [];
    for (const rule of fieldRules) {
      if (!rule.validate(values[field] as never)) {
        fieldErrors.push(rule.message);
      }
    }
    return fieldErrors;
  }, [values, validationRules]);

  // Validate all fields
  const validateAllFields = useCallback((): boolean => {
    const allErrors = validateForm(values, validationRules);
    setErrors(allErrors);
    return !hasErrors(allErrors);
  }, [values, validationRules]);

  // Check if form is valid
  const isValid = !hasErrors(errors);

  // Handle input change
  const handleChange = useCallback((
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldName = name as keyof T;
    
    // Handle checkbox
    let newValue: unknown = value;
    if (type === 'checkbox') {
      newValue = (e.target as HTMLInputElement).checked;
    }

    setValuesState(prev => ({ ...prev, [fieldName]: newValue }));
    setIsDirty(true);

    // Validate on change if enabled
    if (validateOnChange) {
      const fieldErrors = validateField(fieldName);
      setErrors(prev => ({
        ...prev,
        [fieldName]: fieldErrors.length > 0 ? fieldErrors : undefined,
      }));
    }
  }, [validateOnChange, validateField]);

  // Handle input blur
  const handleBlur = useCallback((
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    const fieldName = name as keyof T;

    setTouched(prev => ({ ...prev, [fieldName]: true }));

    // Validate on blur if enabled
    if (validateOnBlur) {
      const fieldErrors = validateField(fieldName);
      setErrors(prev => ({
        ...prev,
        [fieldName]: fieldErrors.length > 0 ? fieldErrors : undefined,
      }));
    }
  }, [validateOnBlur, validateField]);

  // Handle form submit
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key as keyof T] = true;
      return acc;
    }, {} as Partial<Record<keyof T, boolean>>);
    setTouched(allTouched);

    // Validate all fields
    const isFormValid = validateAllFields();

    if (!isFormValid) {
      return;
    }

    if (onSubmit) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [values, validateAllFields, onSubmit]);

  // Set a single field value
  const setFieldValue = useCallback(<K extends keyof T>(field: K, value: T[K]) => {
    setValuesState(prev => ({ ...prev, [field]: value }));
    setIsDirty(true);
  }, []);

  // Set a field error manually
  const setFieldError = useCallback(<K extends keyof T>(field: K, error: string) => {
    setErrors(prev => ({ ...prev, [field]: [error] }));
  }, []);

  // Clear a field error
  const clearFieldError = useCallback(<K extends keyof T>(field: K) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  // Set multiple values
  const setValues = useCallback((newValues: Partial<T>) => {
    setValuesState(prev => ({ ...prev, ...newValues }));
    setIsDirty(true);
  }, []);

  // Reset form to initial values
  const resetForm = useCallback(() => {
    setValuesState(initialValues);
    setErrors({});
    setTouched({});
    setIsDirty(false);
    setIsSubmitting(false);
  }, [initialValues]);

  // Get first error for a field
  const getFieldError = useCallback(<K extends keyof T>(field: K): string | undefined => {
    return errors[field]?.[0];
  }, [errors]);

  // Check if field has error
  const hasFieldError = useCallback(<K extends keyof T>(field: K): boolean => {
    const fieldErrors = errors[field];
    return Boolean(fieldErrors && fieldErrors.length > 0);
  }, [errors]);

  // Check if field was touched
  const isFieldTouched = useCallback(<K extends keyof T>(field: K): boolean => {
    return Boolean(touched[field]);
  }, [touched]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    clearFieldError,
    setValues,
    resetForm,
    validateField,
    validateAllFields,
    getFieldError,
    hasFieldError,
    isFieldTouched,
  };
}

export default useForm;
