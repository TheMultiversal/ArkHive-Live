/**
 * VisuallyHidden Component
 * Hides content visually while keeping it accessible to screen readers
 */

'use client';

import { forwardRef, type HTMLAttributes } from 'react';

interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** If true, becomes visible on focus */
  focusable?: boolean;
}

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ children, focusable = false, ...props }, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
          ...(focusable
            ? {
                ':focus': {
                  position: 'static',
                  width: 'auto',
                  height: 'auto',
                  padding: 'inherit',
                  margin: 'inherit',
                  overflow: 'visible',
                  clip: 'auto',
                  whiteSpace: 'normal',
                },
              }
            : {}),
        }}
        className={focusable ? 'focus:sr-only-focusable' : ''}
      >
        {children}
      </span>
    );
  }
);

VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
