'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pdf } from '@react-pdf/renderer';
import {
  Download, ChevronDown, ChevronRight, Users, Newspaper,
  Scale, Landmark, Shield, Briefcase, Clock, AlertTriangle,
  Eye, DollarSign, Target, CheckCircle, ExternalLink,
  FileText, Copy, Check, ArrowRight,
} from 'lucide-react';
import type { AccountabilityData, ActionRole, RoleActionPath } from '@/types/accountability';
import { ACTION_ROLE_LABELS, ACTION_ROLE_DESCRIPTIONS } from '@/types/accountability';
import { getArkHiveSealDataUri } from '@/components/ui/ArkHiveSeal';

/* ================================================================
   ROLE ICONS & COLORS
   ================================================================ */

const roleConfig: Record<ActionRole, { icon: typeof Users; color: string; glow: string }> = {
  citizen:          { icon: Users,      color: '#ef4444', glow: 'rgba(239,68,68,0.15)' },
  journalist:       { icon: Newspaper,  color: '#dc2626', glow: 'rgba(220,38,38,0.15)' },
  lawyer:           { icon: Scale,      color: '#b91c1c', glow: 'rgba(185,28,28,0.15)' },
  elected_official: { icon: Landmark,   color: '#991b1b', glow: 'rgba(153,27,27,0.15)' },
  law_enforcement:  { icon: Shield,     color: '#7f1d1d', glow: 'rgba(127,29,29,0.15)' },
  regulator:        { icon: Briefcase,  color: '#881337', glow: 'rgba(136,19,55,0.15)' },
};

const urgencyConfig: Record<string, { label: string; color: string; bg: string }> = {
  immediate: { label: 'IMMEDIATE', color: '#ef4444', bg: 'rgba(239,68,68,0.08)' },
  high:      { label: 'HIGH',      color: '#dc2626', bg: 'rgba(220,38,38,0.06)' },
  standard:  { label: 'STANDARD',  color: '#991b1b', bg: 'rgba(153,27,27,0.05)' },
};

const applicabilityLabels: Record<string, { label: string; color: string }> = {
  directly_applicable:    { label: 'DIRECTLY APPLICABLE',    color: '#ef4444' },
  potentially_applicable: { label: 'POTENTIALLY APPLICABLE', color: '#dc2626' },
  requires_new_action:    { label: 'REQUIRES NEW ACTION',    color: '#991b1b' },
};

/* ================================================================
   PROPS
   ================================================================ */

interface AccountabilityActionCenterProps {
  data: AccountabilityData;
  investigationTitle: string;
  accentColor?: string;
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export default function AccountabilityActionCenter({
  data,
  investigationTitle,
  accentColor = '#ef4444',
}: AccountabilityActionCenterProps) {
  const [activeRole, setActiveRole] = useState<ActionRole | null>(null);
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());
  const [showMechanisms, setShowMechanisms] = useState(false);
  const [showWealth, setShowWealth] = useState(false);
  const [showTargets, setShowTargets] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  const activeRolePath = data.actionPaths.find(p => p.role === activeRole) || null;

  /* ---- PDF Generation ---- */
  const handleDownloadPDF = useCallback(async (rolePath: RoleActionPath) => {
    setGenerating(true);
    try {
      // Dynamic import to avoid SSR issues
      const { default: AccountabilityPDF } = await import('./AccountabilityPDF');
      const sealUri = getArkHiveSealDataUri();

      const doc = (
        <AccountabilityPDF
          data={data}
          rolePath={rolePath}
          investigationTitle={investigationTitle}
          sealDataUri={sealUri}
        />
      );

      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ArkHive-Action-Plan-${ACTION_ROLE_LABELS[rolePath.role].replace(/\s+/g, '-')}-${data.investigationSlug}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setGenerating(false);
    }
  }, [data, investigationTitle]);

  /* ---- Copy template ---- */
  const handleCopyTemplate = useCallback((stepId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(stepId);
    setTimeout(() => setCopiedTemplate(null), 2000);
  }, []);

  /* ---- Toggle step ---- */
  const toggleStep = useCallback((stepId: string) => {
    setExpandedSteps(prev => {
      const next = new Set(prev);
      if (next.has(stepId)) next.delete(stepId);
      else next.add(stepId);
      return next;
    });
  }, []);

  return (
    <div className="space-y-3">
      {/* ============ OVERVIEW ============ */}
      <div className="space-y-2">
        {/* Crime summary */}
        <div className="p-3 bg-[rgba(255,255,255,0.02)] border border-white/[0.04]">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-3.5 h-3.5" style={{ color: accentColor }} />
            <span className="text-[8px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">
              Crime Summary
            </span>
          </div>
          <p className="text-[11px] text-zinc-300 leading-[1.7]">{data.crimeSummary}</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
          <div className="p-2.5 bg-[rgba(255,255,255,0.02)] border border-white/[0.04]">
            <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-wider block mb-1">Total Harm</span>
            <p className="text-[10px] text-zinc-300 leading-[1.6]">{data.totalHarm}</p>
          </div>
          <div className="p-2.5 bg-[rgba(255,255,255,0.02)] border border-white/[0.04]">
            <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-wider block mb-1">Victims Affected</span>
            <p className="text-[10px] text-zinc-300 leading-[1.6]">{data.victimsAffected}</p>
          </div>
        </div>
      </div>

      {/* ============ EXPANDABLE SUB-SECTIONS ============ */}
      <div className="space-y-px">
        {/* Primary Targets */}
        <ToggleSection
          title="Primary Accountability Targets"
          count={data.primaryTargets.length}
          icon={<Target className="w-3.5 h-3.5" />}
          isOpen={showTargets}
          onToggle={() => setShowTargets(!showTargets)}
          accentColor={accentColor}
        >
          <div className="space-y-2 p-3">
            {data.primaryTargets.map((target, idx) => (
              <div key={idx} className="p-3 bg-[rgba(255,255,255,0.02)] border border-white/[0.04]">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-[12px] font-bold text-white">{target.name}</span>
                </div>
                <p className="text-[9px] text-zinc-500 mb-2">{target.role}</p>
                <p className="text-[10px] text-zinc-400 leading-[1.6] mb-2">{target.currentStatus}</p>
                <p className="text-[10px] text-zinc-300 leading-[1.6] mb-2">{target.accountabilityPath}</p>
                {target.obstacles.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-white/[0.04]">
                    <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-wider block mb-1">Obstacles</span>
                    {target.obstacles.map((obs, oi) => (
                      <div key={oi} className="flex items-start gap-1.5 mb-0.5">
                        <span className="text-[8px] mt-0.5" style={{ color: accentColor }}>▸</span>
                        <span className="text-[9px] text-zinc-500">{obs}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ToggleSection>

        {/* Legal Mechanisms */}
        <ToggleSection
          title="Legal Mechanisms Available"
          count={data.legalMechanisms.length}
          icon={<Scale className="w-3.5 h-3.5" />}
          isOpen={showMechanisms}
          onToggle={() => setShowMechanisms(!showMechanisms)}
          accentColor={accentColor}
        >
          <div className="space-y-1 p-3">
            {data.legalMechanisms.map((mech, idx) => {
              const app = applicabilityLabels[mech.applicability];
              return (
                <div key={idx} className="p-2.5 bg-[rgba(255,255,255,0.02)] border border-white/[0.04]">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold text-white">{mech.name}</span>
                    <span className="text-[6px] font-mono font-bold px-1.5 py-0.5 flex-shrink-0"
                      style={{ color: app.color, border: `1px solid ${app.color}25`, background: `${app.color}08` }}>
                      {app.label}
                    </span>
                  </div>
                  <p className="text-[8px] font-mono mb-1.5" style={{ color: accentColor }}>{mech.statute}</p>
                  <p className="text-[9px] text-zinc-400 leading-[1.6] mb-2">{mech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[7px] font-mono px-1.5 py-0.5 bg-[rgba(255,255,255,0.03)] border border-white/[0.06] text-zinc-500">
                      SOL: {mech.hasStatuteOfLimitations ? (mech.limitationPeriod || 'Yes') : 'NONE'}
                    </span>
                    <span className="text-[7px] font-mono px-1.5 py-0.5 bg-[rgba(255,255,255,0.03)] border border-white/[0.06] text-zinc-500">
                      REACHES HEIRS: {mech.reachesHeirs ? 'YES' : 'NO'}
                    </span>
                  </div>
                  {mech.notes && (
                    <p className="text-[8px] text-zinc-600 italic mt-1.5 leading-[1.5]">{mech.notes}</p>
                  )}
                </div>
              );
            })}
          </div>
        </ToggleSection>

        {/* Wealth Trace */}
        <ToggleSection
          title="Wealth Trace | Where the Money Is Now"
          count={data.wealthTrace.length}
          icon={<DollarSign className="w-3.5 h-3.5" />}
          isOpen={showWealth}
          onToggle={() => setShowWealth(!showWealth)}
          accentColor={accentColor}
        >
          <div className="space-y-2 p-3">
            {data.wealthTrace.map((entry, idx) => (
              <div key={idx} className="p-2.5 bg-[rgba(255,255,255,0.02)] border border-white/[0.04]">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-[11px] font-bold text-white">{entry.name}</span>
                  {entry.estimatedValue && (
                    <span className="text-[10px] font-mono font-bold flex-shrink-0" style={{ color: accentColor }}>
                      {entry.estimatedValue}
                    </span>
                  )}
                </div>
                <p className="text-[9px] text-zinc-500 mb-1">{entry.relationship}</p>
                <p className="text-[9px] text-zinc-400 leading-[1.5] mb-1.5">{entry.transferMethod}</p>
                {entry.legalEntities && entry.legalEntities.length > 0 && (
                  <div className="mb-1.5">
                    <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-wider">Entities: </span>
                    <span className="text-[8px] text-zinc-500">{entry.legalEntities.join(', ')}</span>
                  </div>
                )}
                <div className="flex flex-wrap gap-1">
                  {entry.recoveryMechanisms.map((rm, ri) => (
                    <span key={ri} className="text-[7px] font-mono px-1.5 py-0.5 border text-zinc-500"
                      style={{ borderColor: `${accentColor}20`, background: `${accentColor}05` }}>
                      {rm}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ToggleSection>

        {/* Success Criteria */}
        <ToggleSection
          title="What Success Looks Like"
          count={data.successCriteria.length}
          icon={<CheckCircle className="w-3.5 h-3.5" />}
          isOpen={showSuccess}
          onToggle={() => setShowSuccess(!showSuccess)}
          accentColor={accentColor}
        >
          <div className="p-3 space-y-1">
            {data.successCriteria.map((criterion, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-[8px] mt-0.5" style={{ color: accentColor }}>☐</span>
                <span className="text-[9px] text-zinc-400 leading-[1.6]">{criterion}</span>
              </div>
            ))}
          </div>
        </ToggleSection>
      </div>

      {/* ============ ROLE SELECTOR ============ */}
      <div className="pt-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-5" style={{ background: `${accentColor}60` }} />
          <span className="text-[9px] font-mono font-bold text-zinc-300 uppercase tracking-[0.2em]">
            Select Your Role; Get Your Action Plan
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px">
          {(Object.keys(roleConfig) as ActionRole[]).map((role) => {
            const config = roleConfig[role];
            const Icon = config.icon;
            const isActive = activeRole === role;
            const path = data.actionPaths.find(p => p.role === role);
            const urgency = path ? urgencyConfig[path.urgency] : null;

            return (
              <button
                key={role}
                onClick={() => setActiveRole(isActive ? null : role)}
                className="group relative flex flex-col items-center gap-1.5 p-3 transition-all duration-200 border"
                style={{
                  background: isActive ? `${config.color}08` : 'rgba(255,255,255,0.01)',
                  borderColor: isActive ? `${config.color}30` : 'rgba(255,255,255,0.04)',
                }}
              >
                <Icon className="w-4 h-4 transition-colors"
                  style={{ color: isActive ? config.color : '#52525b' }} />
                <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-center"
                  style={{ color: isActive ? config.color : '#71717a' }}>
                  {ACTION_ROLE_LABELS[role]}
                </span>
                {path && (
                  <span className="text-[6px] font-mono uppercase tracking-wider"
                    style={{ color: urgency?.color || '#52525b' }}>
                    {path.steps.length} steps
                  </span>
                )}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: config.color }}
                    layoutId="role-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ============ ACTIVE ROLE DETAIL ============ */}
      <AnimatePresence mode="wait">
        {activeRole && activeRolePath && (
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border border-white/[0.06] bg-[rgba(255,255,255,0.01)]">
              {/* Role header */}
              <div className="p-3 border-b border-white/[0.04]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-white">
                      {ACTION_ROLE_LABELS[activeRole]}
                    </span>
                    {urgencyConfig[activeRolePath.urgency] && (
                      <span className="text-[7px] font-mono font-bold px-1.5 py-0.5"
                        style={{
                          color: urgencyConfig[activeRolePath.urgency].color,
                          background: urgencyConfig[activeRolePath.urgency].bg,
                          border: `1px solid ${urgencyConfig[activeRolePath.urgency].color}25`,
                        }}>
                        URGENCY: {urgencyConfig[activeRolePath.urgency].label}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleDownloadPDF(activeRolePath)}
                    disabled={generating}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-[8px] font-bold font-mono uppercase tracking-wider transition-all border"
                    style={{
                      color: generating ? '#52525b' : roleConfig[activeRole].color,
                      borderColor: generating ? 'rgba(255,255,255,0.05)' : `${roleConfig[activeRole].color}30`,
                      background: generating ? 'transparent' : `${roleConfig[activeRole].color}06`,
                    }}
                  >
                    <Download className="w-3 h-3" />
                    {generating ? 'Generating...' : 'Download PDF Action Plan'}
                  </button>
                </div>
                <p className="text-[10px] text-zinc-400 leading-[1.7]">{activeRolePath.overview}</p>
              </div>

              {/* Steps */}
              <div className="divide-y divide-white/[0.03]">
                {activeRolePath.steps.map((step) => {
                  const stepId = `${activeRole}-${step.step}`;
                  const isExpanded = expandedSteps.has(stepId);

                  return (
                    <div key={step.step} className="group">
                      {/* Step header; always visible */}
                      <button
                        onClick={() => toggleStep(stepId)}
                        className="w-full flex items-center gap-3 p-3 text-left hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                      >
                        <span className="text-[9px] font-mono font-bold w-5 flex-shrink-0"
                          style={{ color: roleConfig[activeRole].color }}>
                          {String(step.step).padStart(2, '0')}
                        </span>
                        <span className="text-[11px] text-zinc-200 font-bold flex-1">{step.title}</span>
                        {step.estimatedTime && (
                          <span className="text-[7px] font-mono text-zinc-700 hidden sm:block flex-shrink-0">
                            <Clock className="w-2.5 h-2.5 inline mr-1" />{step.estimatedTime}
                          </span>
                        )}
                        {isExpanded
                          ? <ChevronDown className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
                          : <ChevronRight className="w-3.5 h-3.5 text-zinc-700 flex-shrink-0" />}
                      </button>

                      {/* Step detail */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 pb-3 pl-11 space-y-2">
                              <p className="text-[10px] text-zinc-400 leading-[1.7]">{step.description}</p>

                              {step.filingTarget && (
                                <div className="flex items-start gap-1.5">
                                  <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: roleConfig[activeRole].color }} />
                                  <span className="text-[9px] text-zinc-500">
                                    <span className="text-zinc-600 font-bold">File with:</span> {step.filingTarget}
                                  </span>
                                </div>
                              )}

                              {step.requirements && step.requirements.length > 0 && (
                                <div>
                                  <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-wider block mb-1">Requirements</span>
                                  {step.requirements.map((req, ri) => (
                                    <div key={ri} className="flex items-start gap-1.5 mb-0.5">
                                      <span className="text-[8px] mt-0.5" style={{ color: roleConfig[activeRole].color }}>▸</span>
                                      <span className="text-[9px] text-zinc-500">{req}</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {step.legalBasis && step.legalBasis.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {step.legalBasis.map((basis, bi) => (
                                    <span key={bi} className="text-[7px] font-mono px-1.5 py-0.5 border text-zinc-600 italic"
                                      style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                                      {basis}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {step.templateText && (
                                <div className="relative mt-2 border-l-2 bg-[rgba(255,255,255,0.02)]"
                                  style={{ borderColor: `${roleConfig[activeRole].color}40` }}>
                                  <div className="flex items-center justify-between px-3 pt-2">
                                    <span className="text-[7px] font-mono font-bold uppercase tracking-wider"
                                      style={{ color: roleConfig[activeRole].color }}>
                                      Template | Copy & Customize
                                    </span>
                                    <button
                                      onClick={() => handleCopyTemplate(stepId, step.templateText!)}
                                      className="flex items-center gap-1 text-[7px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors"
                                    >
                                      {copiedTemplate === stepId
                                        ? <><Check className="w-2.5 h-2.5" /> Copied</>
                                        : <><Copy className="w-2.5 h-2.5" /> Copy</>}
                                    </button>
                                  </div>
                                  <pre className="px-3 py-2 text-[8px] text-zinc-500 leading-[1.7] whitespace-pre-wrap font-mono">
                                    {step.templateText}
                                  </pre>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Download bar at bottom */}
              <div className="p-3 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[8px] font-mono text-zinc-600">
                  {activeRolePath.steps.length} steps | All legal mechanisms included | No statute of limitations barrier
                </span>
                <button
                  onClick={() => handleDownloadPDF(activeRolePath)}
                  disabled={generating}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[8px] font-bold font-mono uppercase tracking-wider transition-all"
                  style={{
                    color: '#000',
                    background: generating ? '#52525b' : roleConfig[activeRole].color,
                  }}
                >
                  <Download className="w-3 h-3" />
                  {generating ? 'GENERATING PDF...' : 'DOWNLOAD FULL ACTION PLAN PDF'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================================================================
   TOGGLE SECTION HELPER
   ================================================================ */

function ToggleSection({
  title,
  count,
  icon,
  isOpen,
  onToggle,
  accentColor,
  children,
}: {
  title: string;
  count: number;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  accentColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-white/[0.04] bg-[rgba(255,255,255,0.01)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-2 p-2.5 text-left hover:bg-[rgba(255,255,255,0.02)] transition-colors"
      >
        <span style={{ color: isOpen ? accentColor : '#52525b' }}>{icon}</span>
        <span className="text-[10px] font-bold text-zinc-300 flex-1">{title}</span>
        <span className="text-[7px] font-mono px-1.5 py-0.5 bg-[rgba(255,255,255,0.03)] border border-white/[0.06] text-zinc-600">
          {count}
        </span>
        {isOpen
          ? <ChevronDown className="w-3.5 h-3.5 text-zinc-600" />
          : <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.03]"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
