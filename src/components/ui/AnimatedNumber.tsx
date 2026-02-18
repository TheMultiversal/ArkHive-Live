/**
 * AnimatedNumber Component
 * Animates number changes smoothly
 */

'use client';

import { useEffect, useState, useRef, forwardRef, type HTMLAttributes } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** The number to display */
  value: number;
  /** Format function for display */
  format?: (value: number) => string;
  /** Animation duration in ms */
  duration?: number;
  /** Delay before animation starts */
  delay?: number;
  /** Spring damping (higher = less bounce) */
  damping?: number;
  /** Spring stiffness (higher = faster) */
  stiffness?: number;
}

export const AnimatedNumber = forwardRef<HTMLSpanElement, AnimatedNumberProps>(
  (
    {
      value,
      format = (n) => n.toLocaleString(),
      duration = 1000,
      delay = 0,
      damping = 20,
      stiffness = 100,
      className,
      ...props
    },
    ref
  ) => {
    const spring = useSpring(0, {
      damping,
      stiffness,
      duration: duration / 1000,
    });

    const display = useTransform(spring, (current) => format(Math.round(current)));
    const [displayValue, setDisplayValue] = useState(format(0));

    useEffect(() => {
      const timeout = setTimeout(() => {
        spring.set(value);
      }, delay);

      return () => clearTimeout(timeout);
    }, [value, spring, delay]);

    useEffect(() => {
      return display.on('change', (latest) => {
        setDisplayValue(latest);
      });
    }, [display]);

    return (
      <span ref={ref} className={cn('tabular-nums', className)} {...props}>
        {displayValue}
      </span>
    );
  }
);

AnimatedNumber.displayName = 'AnimatedNumber';

/**
 * CountUp - Simplified count up animation
 */
interface CountUpProps extends Omit<AnimatedNumberProps, 'value'> {
  /** End value */
  end: number;
  /** Start value (default: 0) */
  start?: number;
  /** Decimal places */
  decimals?: number;
  /** Prefix (e.g., "$") */
  prefix?: string;
  /** Suffix (e.g., "%") */
  suffix?: string;
}

export const CountUp = forwardRef<HTMLSpanElement, CountUpProps>(
  (
    {
      end,
      start = 0,
      decimals = 0,
      prefix = '',
      suffix = '',
      ...props
    },
    ref
  ) => {
    const format = (n: number) => {
      const formatted = n.toFixed(decimals);
      return `${prefix}${Number(formatted).toLocaleString()}${suffix}`;
    };

    return (
      <AnimatedNumber
        ref={ref}
        value={end}
        format={format}
        {...props}
      />
    );
  }
);

CountUp.displayName = 'CountUp';

/**
 * AnimatedPercentage - Animated percentage display
 */
export const AnimatedPercentage = forwardRef<
  HTMLSpanElement,
  Omit<CountUpProps, 'suffix' | 'decimals'> & { decimals?: number }
>((props, ref) => (
  <CountUp ref={ref} suffix="%" decimals={1} {...props} />
));

AnimatedPercentage.displayName = 'AnimatedPercentage';

export default AnimatedNumber;
