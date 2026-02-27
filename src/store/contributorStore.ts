import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ContributorAccount {
  id: string;
  email: string;
  passwordHash: string;
  verified: boolean;
  createdAt: string;
}

interface ContributorState {
  accounts: ContributorAccount[];
  currentUser: ContributorAccount | null;

  // Actions
  signUp: (email: string, password: string) => { ok: boolean; error?: string };
  signIn: (email: string, password: string) => { ok: boolean; error?: string };
  signOut: () => void;
  verifyEmail: (email: string, code: string) => { ok: boolean; error?: string };
  getVerificationCode: (email: string) => string | null;
  deleteAccount: () => void;
  isSignedIn: () => boolean;
  isVerified: () => boolean;
}

// Simple hash function - NOT cryptographic, just for client-side demo
// In production, use bcrypt on a server
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return 'h_' + Math.abs(hash).toString(36) + '_' + str.length;
}

function generateId(): string {
  return 'c_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
}

// Verification codes stored in memory only (not persisted)
const verificationCodes: Record<string, string> = {};

function generateVerificationCode(email: string): string {
  const code = Math.random().toString(36).slice(2, 8).toUpperCase();
  verificationCodes[email] = code;
  return code;
}

export const useContributorStore = create<ContributorState>()(
  persist(
    (set, get) => ({
      accounts: [],
      currentUser: null,

      signUp: (email: string, password: string) => {
        const state = get();
        const normalizedEmail = email.toLowerCase().trim();

        if (!normalizedEmail || !normalizedEmail.includes('@')) {
          return { ok: false, error: 'Please enter a valid email address' };
        }
        if (password.length < 6) {
          return { ok: false, error: 'Password must be at least 6 characters' };
        }
        if (state.accounts.find(a => a.email === normalizedEmail)) {
          return { ok: false, error: 'An account with this email already exists' };
        }

        const account: ContributorAccount = {
          id: generateId(),
          email: normalizedEmail,
          passwordHash: simpleHash(password),
          verified: false,
          createdAt: new Date().toISOString(),
        };

        // Generate verification code
        const code = generateVerificationCode(normalizedEmail);
        console.log(`[ArkHive] Verification code for ${normalizedEmail}: ${code}`);

        set({
          accounts: [...state.accounts, account],
          currentUser: account,
        });

        return { ok: true };
      },

      signIn: (email: string, password: string) => {
        const state = get();
        const normalizedEmail = email.toLowerCase().trim();
        const account = state.accounts.find(a => a.email === normalizedEmail);

        if (!account) {
          return { ok: false, error: 'No account found with this email' };
        }
        if (account.passwordHash !== simpleHash(password)) {
          return { ok: false, error: 'Incorrect password' };
        }

        set({ currentUser: account });
        return { ok: true };
      },

      signOut: () => {
        set({ currentUser: null });
      },

      verifyEmail: (email: string, code: string) => {
        const state = get();
        const normalizedEmail = email.toLowerCase().trim();
        const storedCode = verificationCodes[normalizedEmail];

        if (!storedCode) {
          return { ok: false, error: 'No verification code found. Please sign up again.' };
        }
        if (storedCode !== code.toUpperCase().trim()) {
          return { ok: false, error: 'Invalid verification code' };
        }

        // Mark account as verified
        const updatedAccounts = state.accounts.map(a =>
          a.email === normalizedEmail ? { ...a, verified: true } : a
        );
        const updatedUser = state.currentUser?.email === normalizedEmail
          ? { ...state.currentUser, verified: true }
          : state.currentUser;

        delete verificationCodes[normalizedEmail];
        set({ accounts: updatedAccounts, currentUser: updatedUser });
        return { ok: true };
      },

      getVerificationCode: (email: string) => {
        return verificationCodes[email.toLowerCase().trim()] || null;
      },

      deleteAccount: () => {
        const state = get();
        if (!state.currentUser) return;
        set({
          accounts: state.accounts.filter(a => a.id !== state.currentUser?.id),
          currentUser: null,
        });
      },

      isSignedIn: () => {
        return get().currentUser !== null;
      },

      isVerified: () => {
        const user = get().currentUser;
        return user !== null && user.verified;
      },
    }),
    {
      name: 'arkhive-contributor',
      partialize: (state) => ({
        accounts: state.accounts,
        currentUser: state.currentUser,
      }),
    }
  )
);
