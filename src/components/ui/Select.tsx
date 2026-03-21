'use client';

import { forwardRef, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
 value: string;
 label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
 label?: string;
 error?: string;
 hint?: string;
 options: SelectOption[];
 placeholder?: string;
}

/**
 * Styled select component
 */
const Select = forwardRef<HTMLSelectElement, SelectProps>(
 ({ label, error, hint, options, placeholder, className, id, ...props }, ref) => {
 const selectId = id || props.name;

 return (
 <div className="space-y-2">
 {label && (
 <label
 htmlFor={selectId}
 className="block text-sm font-bold glass-text uppercase tracking-wider"
 >
 {label}
 {props.required && <span className="text-zinc-500 ml-1">*</span>}
 </label>
 )}
 <select
 ref={ref}
 id={selectId}
 className={cn(
 'w-full px-4 py-3 bg-black border-2 text-white',
 'focus:outline-none transition-colors',
 error
 ? 'border-zinc-700 focus:border-zinc-600'
 : 'border-[rgba(255,255,255,0.15)] focus:border-zinc-700',
 className
 )}
 aria-invalid={error ? 'true' : undefined}
 aria-describedby={
 error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
 }
 {...props}
 >
 {placeholder && (
 <option value=""disabled>
 {placeholder}
 </option>
 )}
 {options.map((option) => (
 <option key={option.value} value={option.value}>
 {option.label}
 </option>
 ))}
 </select>
 {hint && !error && (
 <p id={`${selectId}-hint`} className="text-xs text-zinc-600">
 {hint}
 </p>
 )}
 {error && (
 <p id={`${selectId}-error`} className="text-xs text-zinc-300"role="alert">
 {error}
 </p>
 )}
 </div>
 );
 }
);

Select.displayName = 'Select';

export default Select;
