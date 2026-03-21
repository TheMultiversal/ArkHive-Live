"use client";

import { useState, useCallback } from "react";
import { Hash, Shield, Link2, Clock, CheckCircle, AlertTriangle, Copy, Check, ExternalLink, Fingerprint, Database } from "lucide-react";

/**
 * Blockchain Hash Verification System
 * Immutable hash recording for evidence integrity
 */

export type HashAlgorithm = "sha256" | "sha512" | "sha3-256" | "blake2b";

export interface HashRecord {
  id: string;
  hash: string;
  algorithm: HashAlgorithm;
  timestamp: string;
  blockNumber?: number;
  transactionId?: string;
  evidenceId: string;
  evidenceType: string;
  verified: boolean;
  verificationNetwork?: "ethereum" | "polygon" | "arweave" | "internal";
}

export interface VerificationResult {
  isValid: boolean;
  recordedHash: string;
  currentHash: string;
  timestamp: string;
  blockNumber?: number;
  discrepancy?: string;
}

/**
 * Generate SHA-256 hash of content (browser-native)
 */
export async function generateSHA256(content: string | ArrayBuffer): Promise<string> {
  const data = typeof content === "string" 
    ? new TextEncoder().encode(content) 
    : new Uint8Array(content);
  
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Generate hash from file
 */
export async function generateFileHash(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  return generateSHA256(buffer);
}

/**
 * Format hash for display (truncated with tooltip)
 */
export function formatHash(hash: string, length: number = 16): string {
  if (hash.length <= length * 2) return hash;
  return `${hash.substring(0, length)}...${hash.substring(hash.length - length)}`;
}

/**
 * Hash Display Component
 */
interface HashDisplayProps {
  hash: string;
  algorithm?: HashAlgorithm;
  showCopy?: boolean;
  showFull?: boolean;
  className?: string;
}

export function HashDisplay({ 
  hash, 
  algorithm = "sha256", 
  showCopy = true,
  showFull = false,
  className = "" 
}: HashDisplayProps) {
  const [copied, setCopied] = useState(false);

  const copyHash = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Hash className="w-3 h-3 text-zinc-600 flex-shrink-0" />
      <code 
        className="text-[10px] font-mono text-zinc-400 truncate"
        title={hash}
      >
        {showFull ? hash : formatHash(hash)}
      </code>
      <span className="text-[8px] text-zinc-600 uppercase">
        {algorithm}
      </span>
      {showCopy && (
        <button
          onClick={copyHash}
          className="p-1 text-zinc-600 hover:text-white transition-colors"
          title="Copy full hash"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
        </button>
      )}
    </div>
  );
}

/**
 * Hash Record Card
 */
interface HashRecordCardProps {
  record: HashRecord;
  onVerify?: () => void;
  className?: string;
}

export function HashRecordCard({ record, onVerify, className = "" }: HashRecordCardProps) {
  const networkLabels = {
    ethereum: "Ethereum",
    polygon: "Polygon",
    arweave: "Arweave",
    internal: "ArkHive Ledger",
  };

  return (
    <div className={`bg-zinc-950 border border-zinc-800 ${className}`}>
      <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Fingerprint className="w-4 h-4 text-zinc-300" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">Hash Record</span>
        </div>
        {record.verified && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-900/50 border border-emerald-700 text-emerald-400 text-[9px] font-bold uppercase tracking-wider">
            <CheckCircle className="w-2.5 h-2.5" />
            Verified
          </span>
        )}
      </div>

      <div className="p-4 space-y-3">
        {/* Hash */}
        <div>
          <span className="text-[10px] text-zinc-500 block mb-1">Content Hash</span>
          <HashDisplay hash={record.hash} algorithm={record.algorithm} />
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-start gap-2">
            <Clock className="w-3 h-3 text-zinc-600 mt-0.5" />
            <div>
              <span className="text-zinc-500 block">Recorded</span>
              <span className="text-zinc-300">{record.timestamp}</span>
            </div>
          </div>
          
          {record.verificationNetwork && (
            <div className="flex items-start gap-2">
              <Database className="w-3 h-3 text-zinc-600 mt-0.5" />
              <div>
                <span className="text-zinc-500 block">Network</span>
                <span className="text-zinc-300">{networkLabels[record.verificationNetwork]}</span>
              </div>
            </div>
          )}

          {record.blockNumber && (
            <div className="flex items-start gap-2">
              <Link2 className="w-3 h-3 text-zinc-600 mt-0.5" />
              <div>
                <span className="text-zinc-500 block">Block</span>
                <span className="text-zinc-300 font-mono">#{record.blockNumber}</span>
              </div>
            </div>
          )}

          {record.transactionId && (
            <div className="flex items-start gap-2">
              <ExternalLink className="w-3 h-3 text-zinc-600 mt-0.5" />
              <div>
                <span className="text-zinc-500 block">Transaction</span>
                <code className="text-zinc-300 font-mono text-[10px]">
                  {formatHash(record.transactionId, 8)}
                </code>
              </div>
            </div>
          )}
        </div>

        {/* Verify Button */}
        {onVerify && (
          <button
            onClick={onVerify}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 text-[10px] font-bold uppercase tracking-wider transition-colors"
          >
            <Shield className="w-3 h-3" />
            Verify Integrity
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Verification Result Display
 */
interface VerificationResultDisplayProps {
  result: VerificationResult;
  className?: string;
}

export function VerificationResultDisplay({ result, className = "" }: VerificationResultDisplayProps) {
  return (
    <div className={`bg-zinc-950 border ${result.isValid ? "border-emerald-900/50" : "border-red-900/50"} ${className}`}>
      {/* Status Banner */}
      <div className={`px-4 py-3 ${result.isValid ? "bg-emerald-950/50" : "bg-red-950/50"} border-b ${result.isValid ? "border-emerald-900/50" : "border-red-900/50"}`}>
        <div className="flex items-center gap-2">
          {result.isValid ? (
            <>
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-bold text-emerald-400">Integrity Verified</span>
            </>
          ) : (
            <>
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-sm font-bold text-red-400">Integrity Compromised</span>
            </>
          )}
        </div>
        {result.discrepancy && (
          <p className="text-xs text-red-300 mt-1">{result.discrepancy}</p>
        )}
      </div>

      <div className="p-4 space-y-3">
        {/* Hash Comparison */}
        <div>
          <span className="text-[10px] text-zinc-500 block mb-2">Hash Comparison</span>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-black/30 border border-zinc-800">
              <span className="text-[10px] text-zinc-500 w-16">Recorded:</span>
              <code className="text-[10px] font-mono text-zinc-400 truncate flex-1">
                {result.recordedHash}
              </code>
            </div>
            <div className={`flex items-center gap-2 p-2 border ${result.isValid ? "bg-emerald-950/20 border-emerald-800" : "bg-red-950/20 border-red-800"}`}>
              <span className="text-[10px] text-zinc-500 w-16">Current:</span>
              <code className={`text-[10px] font-mono truncate flex-1 ${result.isValid ? "text-emerald-400" : "text-red-400"}`}>
                {result.currentHash}
              </code>
            </div>
          </div>
        </div>

        {/* Timestamp */}
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Clock className="w-3 h-3" />
          <span>Verified against record from {result.timestamp}</span>
          {result.blockNumber && (
            <span className="text-zinc-600">• Block #{result.blockNumber}</span>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Hash Verification Hook
 */
interface UseHashVerificationResult {
  verifyHash: (content: string | ArrayBuffer, expectedHash: string) => Promise<boolean>;
  generateHash: (content: string | ArrayBuffer) => Promise<string>;
  isVerifying: boolean;
}

export function useHashVerification(): UseHashVerificationResult {
  const [isVerifying, setIsVerifying] = useState(false);

  const generateHash = useCallback(async (content: string | ArrayBuffer): Promise<string> => {
    return generateSHA256(content);
  }, []);

  const verifyHash = useCallback(async (
    content: string | ArrayBuffer, 
    expectedHash: string
  ): Promise<boolean> => {
    setIsVerifying(true);
    try {
      const computedHash = await generateSHA256(content);
      return computedHash.toLowerCase() === expectedHash.toLowerCase();
    } finally {
      setIsVerifying(false);
    }
  }, []);

  return {
    verifyHash,
    generateHash,
    isVerifying,
  };
}

/**
 * Hash Chain Display
 * Shows a chain of hashes for evidence provenance
 */
interface HashChainProps {
  records: HashRecord[];
  className?: string;
}

export function HashChain({ records, className = "" }: HashChainProps) {
  const sortedRecords = [...records].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  return (
    <div className={`bg-zinc-950 border border-zinc-800 ${className}`}>
      <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center gap-2">
        <Link2 className="w-4 h-4 text-zinc-300" />
        <span className="text-xs font-bold text-white uppercase tracking-wider">Hash Chain</span>
        <span className="text-[10px] text-zinc-500 ml-auto">{records.length} records</span>
      </div>

      <div className="p-4">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-px bg-zinc-800" />

          <div className="space-y-4">
            {sortedRecords.map((record, index) => (
              <div key={record.id} className="relative flex items-start gap-3 pl-6">
                {/* Node */}
                <div className={`absolute left-0 w-[14px] h-[14px] rounded-full border-2 ${
                  record.verified 
                    ? "bg-emerald-950 border-emerald-600" 
                    : "bg-zinc-900 border-zinc-600"
                }`}>
                  {record.verified && (
                    <CheckCircle className="w-2 h-2 text-emerald-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-[10px] font-mono text-zinc-400">
                      {formatHash(record.hash, 12)}
                    </code>
                    <span className="text-[8px] text-zinc-600 uppercase">
                      {record.algorithm}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500">
                    {record.timestamp}
                    {record.blockNumber && ` • Block #${record.blockNumber}`}
                  </p>
                </div>

                {/* Index */}
                <span className="text-[10px] text-zinc-700 font-mono">
                  #{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HashRecordCard;
