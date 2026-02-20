'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BloodSumerianRain from '@/components/effects/BloodSumerianRain';

export default function EnterPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push('/');
        return;
      }
      const body = await res.json().catch(() => null);
      setError(body?.message || 'Invalid password');
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-zinc-200 relative overflow-hidden">
      <BloodSumerianRain />

      <form onSubmit={onSubmit} className="w-full max-w-sm p-8 bg-zinc-900/85 border border-zinc-800 backdrop-blur-sm z-10">
        <h1 className="text-2xl font-bold mb-4">Enter site password</h1>
        <p className="text-sm text-zinc-400 mb-4">This site is password protected — enter the password to continue.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 bg-zinc-800 border border-zinc-700 text-white"
          placeholder="Password"
          autoFocus
        />
        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blood-500 text-white font-semibold"
            disabled={loading}
          >
            {loading ? 'Checking…' : 'Enter'}
          </button>
          <button
            type="button"
            className="px-3 py-2 border border-zinc-700 text-zinc-300"
            onClick={() => { setPassword(''); setError(''); }}
          >
            Reset
          </button>
        </div>
        {error && <p className="mt-3 text-red-400">{error}</p>}
        <p className="mt-4 text-xs text-zinc-500">Tip: set SITE_PASSWORD in your environment to change the password.</p>
      </form>
    </div>
  );
}
