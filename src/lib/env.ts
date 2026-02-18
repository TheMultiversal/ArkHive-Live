/**
 * Environment variable validation with Zod
 * Ensures all required environment variables are set at build/runtime
 */

import { z } from 'zod';

// ============================================================
// Server Environment Schema (only accessible on server)
// ============================================================

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  
  // Database
  DATABASE_URL: z.string().url().optional(),
  
  // Authentication
  NEXTAUTH_SECRET: z.string().min(1).optional(),
  NEXTAUTH_URL: z.string().url().optional(),
  
  // External APIs
  OPENAI_API_KEY: z.string().startsWith('sk-').optional(),
  
  // Storage
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  AWS_REGION: z.string().optional(),
  AWS_S3_BUCKET: z.string().optional(),
  
  // Email
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_FROM: z.string().email().optional(),
  
  // Rate Limiting
  RATE_LIMIT_MAX: z.coerce.number().default(100),
  RATE_LIMIT_WINDOW: z.coerce.number().default(60),
});

// ============================================================
// Client Environment Schema (exposed to browser)
// ============================================================

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_API_URL: z.string().default('/api'),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
  NEXT_PUBLIC_ENABLE_EXPERIMENTAL: z.coerce.boolean().default(false),
  NEXT_PUBLIC_MAINTENANCE_MODE: z.coerce.boolean().default(false),
});

// ============================================================
// Validation Functions
// ============================================================

export type ServerEnv = z.infer<typeof serverEnvSchema>;
export type ClientEnv = z.infer<typeof clientEnvSchema>;

/**
 * Validates and returns server environment variables
 * Only call this on the server side
 */
export function getServerEnv(): ServerEnv {
  const parsed = serverEnvSchema.safeParse(process.env);
  
  if (!parsed.success) {
    console.error('❌ Invalid server environment variables:');
    console.error(parsed.error.flatten().fieldErrors);
    throw new Error('Invalid server environment variables');
  }
  
  return parsed.data;
}

/**
 * Validates and returns client environment variables
 * Safe to call on both client and server
 */
export function getClientEnv(): ClientEnv {
  const clientEnv = {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    NEXT_PUBLIC_ENABLE_EXPERIMENTAL: process.env.NEXT_PUBLIC_ENABLE_EXPERIMENTAL,
    NEXT_PUBLIC_MAINTENANCE_MODE: process.env.NEXT_PUBLIC_MAINTENANCE_MODE,
  };
  
  const parsed = clientEnvSchema.safeParse(clientEnv);
  
  if (!parsed.success) {
    console.error('❌ Invalid client environment variables:');
    console.error(parsed.error.flatten().fieldErrors);
    throw new Error('Invalid client environment variables');
  }
  
  return parsed.data;
}

// ============================================================
// Convenience exports
// ============================================================

/**
 * Get the site URL with trailing slash removed
 */
export function getSiteUrl(): string {
  const env = getClientEnv();
  return env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
}

/**
 * Get the API base URL
 */
export function getApiUrl(): string {
  return getClientEnv().NEXT_PUBLIC_API_URL;
}

/**
 * Check if we're in production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Check if we're in development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * Check if experimental features are enabled
 */
export function isExperimentalEnabled(): boolean {
  return getClientEnv().NEXT_PUBLIC_ENABLE_EXPERIMENTAL;
}

/**
 * Check if maintenance mode is enabled
 */
export function isMaintenanceMode(): boolean {
  return getClientEnv().NEXT_PUBLIC_MAINTENANCE_MODE;
}
