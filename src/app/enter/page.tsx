'use client';

import { useRouter } from 'next/navigation';
import BloodSumerianRain from '@/components/effects/BloodSumerianRain';
import { motion } from 'framer-motion';

export default function EnterPage() {
 const router = useRouter();

 return (
 <div className="min-h-screen flex flex-col items-center justify-center bg-black text-zinc-200 relative overflow-hidden">
 <BloodSumerianRain />

 <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  className="z-10 flex flex-col items-center text-center px-6"
 >
  <motion.h1
   initial={{ opacity: 0, letterSpacing: '0.5em' }}
   animate={{ opacity: 1, letterSpacing: '0.3em' }}
   transition={{ duration: 2, ease: 'easeOut' }}
   className="text-5xl sm:text-7xl font-black text-blood-500 tracking-[0.3em] mb-4"
  >
   ARKHIVE
  </motion.h1>

  <motion.div
   initial={{ scaleX: 0 }}
   animate={{ scaleX: 1 }}
   transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
   className="w-48 h-px bg-blood-600 mb-6"
  />

  <motion.p
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 1, delay: 1 }}
   className="text-sm sm:text-base text-zinc-400 max-w-md mb-10 leading-relaxed"
  >
   Investigative documentation platform. Political corruption, financial crimes,
   and institutional accountability; through court records, primary sources,
   and verified evidence.
  </motion.p>

  <motion.button
   initial={{ opacity: 0, scale: 0.9 }}
   animate={{ opacity: 1, scale: 1 }}
   transition={{ duration: 0.6, delay: 1.5 }}
   whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,85,184,0.4)' }}
   whileTap={{ scale: 0.97 }}
   onClick={() => router.push('/')}
   className="px-10 py-3 border border-blood-600 text-blood-400 font-semibold tracking-widest uppercase text-sm hover:bg-blood-900/40 hover:text-blood-300 transition-colors duration-300"
  >
   Enter the Archive
  </motion.button>

  <motion.p
   initial={{ opacity: 0 }}
   animate={{ opacity: 0.3 }}
   transition={{ duration: 1, delay: 2.5 }}
   className="mt-8 text-xs text-zinc-600"
  >
   The truth does not require your belief.
  </motion.p>
 </motion.div>
 </div>
 );
}

