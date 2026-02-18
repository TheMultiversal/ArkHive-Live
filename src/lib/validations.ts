import { z } from 'zod';

// ============================================================
// Common Schemas
// ============================================================

export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(20),
});

export const dateRangeSchema = z.object({
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
}).refine(
  (data: { from?: string; to?: string }) => {
    if (data.from && data.to) {
      return new Date(data.from) <= new Date(data.to);
    }
    return true;
  },
  { message: 'Start date must be before or equal to end date' }
);

// ============================================================
// User Schemas
// ============================================================

export const userProfileSchema = z.object({
  displayName: z.string()
    .min(2, 'Display name must be at least 2 characters')
    .max(50, 'Display name must be less than 50 characters')
    .regex(/^[a-zA-Z0-9_\-\s]+$/, 'Display name can only contain letters, numbers, underscores, hyphens, and spaces'),
  email: z.string()
    .email('Invalid email address')
    .optional(),
  bio: z.string()
    .max(500, 'Bio must be less than 500 characters')
    .optional(),
  timezone: z.string().optional(),
  pgpPublicKey: z.string()
    .optional()
    .refine(
      (key: string | undefined) => {
        if (!key) return true;
        return key.includes('-----BEGIN PGP PUBLIC KEY BLOCK-----') ||
               key.includes('-----BEGIN PGP PUBLIC KEY-----');
      },
      { message: 'Invalid PGP public key format' }
    ),
});

export const passwordChangeSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string()
    .min(12, 'Password must be at least 12 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),
  confirmPassword: z.string(),
}).refine(
  (data: { newPassword: string; confirmPassword: string }) => data.newPassword === data.confirmPassword,
  { message: 'Passwords do not match', path: ['confirmPassword'] }
);

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional().default(false),
});

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(12, 'Password must be at least 12 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),
  displayName: z.string()
    .min(2, 'Display name must be at least 2 characters')
    .max(50, 'Display name must be less than 50 characters'),
  acceptTerms: z.literal(true).refine(
    (val) => val === true,
    { message: 'You must accept the terms of service' }
  ),
});

// ============================================================
// Investigation Schemas
// ============================================================

export const severitySchema = z.enum(['critical', 'high', 'medium', 'low']);

export const investigationStatusSchema = z.enum(['active', 'pending', 'completed', 'archived']);

export const investigationSchema = z.object({
  title: z.string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  description: z.string()
    .min(20, 'Description must be at least 20 characters')
    .max(5000, 'Description must be less than 5000 characters'),
  severity: severitySchema,
  status: investigationStatusSchema.optional().default('pending'),
  tags: z.array(z.string().max(30)).max(10, 'Maximum 10 tags allowed').optional(),
  affiliatedEntities: z.array(z.string()).optional(),
});

export const investigationUpdateSchema = investigationSchema.partial();

// ============================================================
// Entity Schemas
// ============================================================

export const entityTypeSchema = z.enum(['agency', 'corporation', 'individual', 'organization']);

export const riskLevelSchema = z.enum(['critical', 'high', 'medium', 'low']);

export const entitySchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(200, 'Name must be less than 200 characters'),
  type: entityTypeSchema,
  description: z.string()
    .max(2000, 'Description must be less than 2000 characters')
    .optional(),
  riskLevel: riskLevelSchema.optional(),
  aliases: z.array(z.string().max(100)).max(20).optional(),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
  tags: z.array(z.string().max(30)).max(10).optional(),
});

export const affiliationSchema = z.object({
  fromEntityId: z.string().min(1, 'Source entity is required'),
  toEntityId: z.string().min(1, 'Target entity is required'),
  relationshipType: z.string()
    .min(1, 'Relationship type is required')
    .max(100, 'Relationship type must be less than 100 characters'),
  strength: z.number().int().min(1).max(10).optional(),
  description: z.string().max(1000).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
}).refine(
  (data: { fromEntityId: string; toEntityId: string }) => data.fromEntityId !== data.toEntityId,
  { message: 'Entity cannot be affiliated with itself' }
);

// ============================================================
// Document Schemas
// ============================================================

export const documentTypeSchema = z.enum(['pdf', 'image', 'archive', 'text']);

export const classificationSchema = z.enum(['public', 'restricted', 'sensitive']);

export const documentUploadSchema = z.object({
  title: z.string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  description: z.string()
    .max(2000, 'Description must be less than 2000 characters')
    .optional(),
  classification: classificationSchema,
  category: z.string().min(1, 'Category is required'),
  investigationId: z.string().optional(),
  tags: z.array(z.string().max(30)).max(20).optional(),
});

export const documentMetadataSchema = z.object({
  filename: z.string().min(1),
  mimeType: z.string().min(1),
  size: z.number().int().positive().max(100 * 1024 * 1024, 'File size must be less than 100MB'),
});

// ============================================================
// Workspace Schemas
// ============================================================

export const workspaceRoleSchema = z.enum(['owner', 'admin', 'editor', 'viewer']);

export const workspaceSchema = z.object({
  name: z.string()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name must be less than 100 characters'),
  description: z.string()
    .max(1000, 'Description must be less than 1000 characters')
    .optional(),
  isPrivate: z.boolean().default(true),
  investigationId: z.string().optional(),
});

export const workspaceInviteSchema = z.object({
  email: z.string().email('Invalid email address'),
  role: workspaceRoleSchema.exclude(['owner']),
  message: z.string().max(500).optional(),
});

export const workspaceMessageSchema = z.object({
  content: z.string()
    .min(1, 'Message cannot be empty')
    .max(5000, 'Message must be less than 5000 characters'),
  attachments: z.array(z.string()).max(5).optional(),
});

// ============================================================
// Contact & Submission Schemas
// ============================================================

export const contactInquiryTypeSchema = z.enum([
  'general',
  'tip',
  'collaboration',
  'media',
  'legal',
  'technical'
]);

export const contactFormSchema = z.object({
  type: contactInquiryTypeSchema,
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .optional(),
  email: z.string().email('Invalid email address').optional(),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z.string()
    .min(20, 'Message must be at least 20 characters')
    .max(10000, 'Message must be less than 10000 characters'),
  isAnonymous: z.boolean().default(false),
  usePgp: z.boolean().default(false),
  pgpPublicKey: z.string().optional(),
});

export const tipSubmissionSchema = z.object({
  category: z.enum([
    'corporate',
    'government',
    'health',
    'environmental',
    'financial',
    'other'
  ]),
  title: z.string()
    .min(10, 'Title must be at least 10 characters')
    .max(200, 'Title must be less than 200 characters'),
  description: z.string()
    .min(50, 'Description must be at least 50 characters')
    .max(20000, 'Description must be less than 20000 characters'),
  hasDocuments: z.boolean().default(false),
  canFollowUp: z.boolean().default(false),
  contactMethod: z.enum(['none', 'email', 'securedrop', 'signal']).optional(),
  contactInfo: z.string().max(200).optional(),
});

// ============================================================
// Search Schemas
// ============================================================

export const searchQuerySchema = z.object({
  q: z.string().max(200).optional(),
  type: z.enum(['all', 'investigation', 'entity', 'document']).default('all'),
  severity: severitySchema.optional(),
  category: z.string().optional(),
  dateFrom: z.string().datetime().optional(),
  dateTo: z.string().datetime().optional(),
  sortBy: z.enum(['relevance', 'date', 'title']).default('relevance'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  ...paginationSchema.shape,
});

// ============================================================
// Type Exports
// ============================================================

export type Pagination = z.infer<typeof paginationSchema>;
export type DateRange = z.infer<typeof dateRangeSchema>;
export type UserProfile = z.infer<typeof userProfileSchema>;
export type PasswordChange = z.infer<typeof passwordChangeSchema>;
export type Login = z.infer<typeof loginSchema>;
export type Register = z.infer<typeof registerSchema>;
export type Severity = z.infer<typeof severitySchema>;
export type InvestigationStatus = z.infer<typeof investigationStatusSchema>;
export type Investigation = z.infer<typeof investigationSchema>;
export type EntityType = z.infer<typeof entityTypeSchema>;
export type RiskLevel = z.infer<typeof riskLevelSchema>;
export type Entity = z.infer<typeof entitySchema>;
export type Affiliation = z.infer<typeof affiliationSchema>;
export type DocumentType = z.infer<typeof documentTypeSchema>;
export type Classification = z.infer<typeof classificationSchema>;
export type DocumentUpload = z.infer<typeof documentUploadSchema>;
export type DocumentMetadata = z.infer<typeof documentMetadataSchema>;
export type WorkspaceRole = z.infer<typeof workspaceRoleSchema>;
export type Workspace = z.infer<typeof workspaceSchema>;
export type WorkspaceInvite = z.infer<typeof workspaceInviteSchema>;
export type WorkspaceMessage = z.infer<typeof workspaceMessageSchema>;
export type ContactInquiryType = z.infer<typeof contactInquiryTypeSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type TipSubmission = z.infer<typeof tipSubmissionSchema>;
export type SearchQuery = z.infer<typeof searchQuerySchema>;
