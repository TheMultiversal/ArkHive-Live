/**
 * Portal Component
 * Renders children into a different part of the DOM
 */

'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  /** Container element or selector */
  container?: Element | string | null;
  /** Whether to render the portal */
  enabled?: boolean;
}

export function Portal({
  children,
  container,
  enabled = true,
}: PortalProps): ReactNode {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !enabled) {
    return null;
  }

  // Resolve container
  let targetContainer: Element | null = null;

  if (container === null) {
    return children;
  } else if (typeof container === 'string') {
    targetContainer = document.querySelector(container);
  } else if (container instanceof Element) {
    targetContainer = container;
  } else {
    targetContainer = document.body;
  }

  if (!targetContainer) {
    return null;
  }

  return createPortal(children, targetContainer);
}

export default Portal;
