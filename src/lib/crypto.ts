// ============================================================
// Crypto Utility
// Encryption, hashing, and security-related functions
// ============================================================

// ============================================================
// Types
// ============================================================

export interface EncryptedData {
  ciphertext: string;
  iv: string;
  salt?: string;
}

export interface HashOptions {
  algorithm?: 'SHA-256' | 'SHA-384' | 'SHA-512';
  encoding?: 'hex' | 'base64';
}

// ============================================================
// Hash Functions
// ============================================================

/**
 * Hash a string using Web Crypto API
 */
export async function hash(
  data: string,
  options: HashOptions = {}
): Promise<string> {
  const { algorithm = 'SHA-256', encoding = 'hex' } = options;

  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest(algorithm, dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  if (encoding === 'base64') {
    return btoa(String.fromCharCode(...hashArray));
  }

  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Hash a file
 */
export async function hashFile(
  file: File,
  options: HashOptions = {}
): Promise<string> {
  const { algorithm = 'SHA-256', encoding = 'hex' } = options;

  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest(algorithm, buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  if (encoding === 'base64') {
    return btoa(String.fromCharCode(...hashArray));
  }

  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Create HMAC signature
 */
export async function hmac(
  key: string,
  data: string,
  options: HashOptions = {}
): Promise<string> {
  const { algorithm = 'SHA-256', encoding = 'hex' } = options;

  const encoder = new TextEncoder();
  const keyBuffer = encoder.encode(key);
  const dataBuffer = encoder.encode(data);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    { name: 'HMAC', hash: algorithm },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, dataBuffer);
  const signatureArray = Array.from(new Uint8Array(signature));

  if (encoding === 'base64') {
    return btoa(String.fromCharCode(...signatureArray));
  }

  return signatureArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

// ============================================================
// Random Generation
// ============================================================

/**
 * Generate cryptographically secure random bytes
 */
export function randomBytes(length: number): Uint8Array<ArrayBuffer> {
  return crypto.getRandomValues(new Uint8Array(length)) as Uint8Array<ArrayBuffer>;
}

/**
 * Generate a random hex string
 */
export function randomHex(length: number): string {
  const bytes = randomBytes(Math.ceil(length / 2));
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, length);
}

/**
 * Generate a random UUID v4
 */
export function uuid(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // Fallback for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Generate a secure random token
 */
export function generateToken(length = 32): string {
  return randomHex(length);
}

/**
 * Generate a secure random password
 */
export function generatePassword(
  length = 16,
  options: {
    uppercase?: boolean;
    lowercase?: boolean;
    numbers?: boolean;
    symbols?: boolean;
  } = {}
): string {
  const {
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = true,
  } = options;

  let charset = '';
  if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers) charset += '0123456789';
  if (symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (!charset) charset = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const bytes = randomBytes(length);
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset[bytes[i] % charset.length];
  }

  return password;
}

// ============================================================
// Encryption (AES-GCM)
// ============================================================

/**
 * Derive a key from password using PBKDF2
 */
async function deriveKey(
  password: string,
  salt: Uint8Array<ArrayBuffer>
): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt data with password
 */
export async function encrypt(
  data: string,
  password: string
): Promise<EncryptedData> {
  const encoder = new TextEncoder();
  const salt = randomBytes(16);
  const iv = randomBytes(12);
  const key = await deriveKey(password, salt);

  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(data)
  );

  return {
    ciphertext: btoa(String.fromCharCode(...new Uint8Array(ciphertext))),
    iv: btoa(String.fromCharCode(...iv)),
    salt: btoa(String.fromCharCode(...salt)),
  };
}

/**
 * Decrypt data with password
 */
export async function decrypt(
  encrypted: EncryptedData,
  password: string
): Promise<string> {
  const decoder = new TextDecoder();
  const ciphertext = Uint8Array.from(atob(encrypted.ciphertext), (c) =>
    c.charCodeAt(0)
  );
  const iv = Uint8Array.from(atob(encrypted.iv), (c) => c.charCodeAt(0));
  const salt = Uint8Array.from(atob(encrypted.salt || ''), (c) =>
    c.charCodeAt(0)
  );

  const key = await deriveKey(password, salt);

  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    ciphertext
  );

  return decoder.decode(plaintext);
}

// ============================================================
// Base64 Utilities
// ============================================================

/**
 * Encode string to base64
 */
export function base64Encode(data: string): string {
  return btoa(unescape(encodeURIComponent(data)));
}

/**
 * Decode base64 string
 */
export function base64Decode(data: string): string {
  return decodeURIComponent(escape(atob(data)));
}

/**
 * Encode to URL-safe base64
 */
export function base64UrlEncode(data: string): string {
  return base64Encode(data)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Decode URL-safe base64
 */
export function base64UrlDecode(data: string): string {
  let base64 = data.replace(/-/g, '+').replace(/_/g, '/');
  const padding = base64.length % 4;
  if (padding) {
    base64 += '='.repeat(4 - padding);
  }
  return base64Decode(base64);
}

// ============================================================
// Comparison Utilities
// ============================================================

/**
 * Constant-time string comparison (prevents timing attacks)
 */
export function secureCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

// ============================================================
// Fingerprint
// ============================================================

/**
 * Generate a simple browser fingerprint
 */
export async function generateFingerprint(): Promise<string> {
  const components: string[] = [];

  // User agent
  components.push(navigator.userAgent);

  // Screen
  components.push(`${screen.width}x${screen.height}x${screen.colorDepth}`);

  // Timezone
  components.push(Intl.DateTimeFormat().resolvedOptions().timeZone);

  // Language
  components.push(navigator.language);

  // Platform
  components.push(navigator.platform);

  // Plugins count
  components.push(String(navigator.plugins?.length || 0));

  // Canvas fingerprint
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = "14px 'Arial'";
      ctx.fillText('ArkHive fingerprint', 2, 2);
      components.push(canvas.toDataURL());
    }
  } catch {
    // Canvas blocked
  }

  // WebGL
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        components.push(gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL));
        components.push(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
      }
    }
  } catch {
    // WebGL blocked
  }

  return hash(components.join('|'));
}
