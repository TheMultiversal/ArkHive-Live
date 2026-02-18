/**
 * AspectRatio Component
 * Maintains consistent width-to-height ratio
 */

'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  /** Aspect ratio as number (width/height) or string like "16/9" */
  ratio?: number | string;
  children?: ReactNode;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, children, className, style, ...props }, ref) => {
    // Parse ratio
    let paddingBottom: string;
    if (typeof ratio === 'string') {
      const [width, height] = ratio.split('/').map(Number);
      paddingBottom = `${(height / width) * 100}%`;
    } else {
      paddingBottom = `${(1 / ratio) * 100}%`;
    }

    return (
      <div
        ref={ref}
        className={cn('relative w-full', className)}
        style={{ paddingBottom, ...style }}
        {...props}
      >
        <div className="absolute inset-0">{children}</div>
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';

// Common ratio presets
export const AspectRatio16x9 = forwardRef<
  HTMLDivElement,
  Omit<AspectRatioProps, 'ratio'>
>((props, ref) => <AspectRatio ref={ref} ratio={16 / 9} {...props} />);
AspectRatio16x9.displayName = 'AspectRatio16x9';

export const AspectRatio4x3 = forwardRef<
  HTMLDivElement,
  Omit<AspectRatioProps, 'ratio'>
>((props, ref) => <AspectRatio ref={ref} ratio={4 / 3} {...props} />);
AspectRatio4x3.displayName = 'AspectRatio4x3';

export const AspectRatioSquare = forwardRef<
  HTMLDivElement,
  Omit<AspectRatioProps, 'ratio'>
>((props, ref) => <AspectRatio ref={ref} ratio={1} {...props} />);
AspectRatioSquare.displayName = 'AspectRatioSquare';

export default AspectRatio;
