/**
 * Stepper Component
 * Multi-step process indicator
 */

'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Step {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
}

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of step definitions */
  steps: Step[];
  /** Current active step index (0-based) */
  currentStep: number;
  /** Callback when step is clicked */
  onStepClick?: (index: number) => void;
  /** Layout direction */
  orientation?: 'horizontal' | 'vertical';
  /** Allow clicking on completed steps */
  clickable?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      currentStep,
      onStepClick,
      orientation = 'horizontal',
      clickable = true,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const isVertical = orientation === 'vertical';

    const sizeClasses = {
      sm: { step: 'w-6 h-6 text-xs', label: 'text-xs', connector: 'h-0.5' },
      md: { step: 'w-8 h-8 text-sm', label: 'text-sm', connector: 'h-0.5' },
      lg: { step: 'w-10 h-10 text-base', label: 'text-base', connector: 'h-1' },
    };

    const sizes = sizeClasses[size];

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          isVertical ? 'flex-col' : 'flex-row items-start',
          className
        )}
        {...props}
      >
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isClickable = clickable && (isCompleted || isCurrent);

          return (
            <div
              key={step.id}
              className={cn(
                'flex',
                isVertical
                  ? 'flex-row items-start'
                  : 'flex-col items-center flex-1',
                index < steps.length - 1 && !isVertical && 'flex-1'
              )}
            >
              {/* Step indicator and connector */}
              <div
                className={cn(
                  'flex items-center',
                  isVertical ? 'flex-col' : 'flex-row w-full'
                )}
              >
                {/* Step circle */}
                <motion.button
                  type="button"
                  onClick={() => isClickable && onStepClick?.(index)}
                  disabled={!isClickable}
                  className={cn(
                    'flex items-center justify-center rounded-none border-2 transition-colors',
                    sizes.step,
                    isCompleted && 'bg-blood-500 border-blood-500 text-white',
                    isCurrent && 'border-blood-500 text-blood-500 bg-black',
                    !isCompleted &&
                      !isCurrent &&
                      'border-zinc-700 text-zinc-500 bg-black',
                    isClickable && 'cursor-pointer hover:border-blood-400',
                    !isClickable && 'cursor-default'
                  )}
                  whileHover={isClickable ? { scale: 1.05 } : {}}
                  whileTap={isClickable ? { scale: 0.95 } : {}}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : step.icon ? (
                    step.icon
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </motion.button>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'bg-zinc-700',
                      isVertical
                        ? 'w-0.5 h-8 ml-[15px] my-1'
                        : 'flex-1 mx-2',
                      sizes.connector
                    )}
                  >
                    <motion.div
                      className="h-full bg-blood-500"
                      initial={{ width: 0 }}
                      animate={{
                        width: isCompleted ? '100%' : '0%',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </div>

              {/* Step label and description */}
              <div
                className={cn(
                  isVertical ? 'ml-4 pb-8' : 'mt-2 text-center',
                  index === steps.length - 1 && isVertical && 'pb-0'
                )}
              >
                <span
                  className={cn(
                    'font-medium',
                    sizes.label,
                    isCurrent && 'text-blood-500',
                    isCompleted && 'text-zinc-300',
                    !isCompleted && !isCurrent && 'text-zinc-500'
                  )}
                >
                  {step.label}
                </span>
                {step.description && (
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';

export default Stepper;
