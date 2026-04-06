'use client';

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { AccountabilityData, RoleActionPath } from '@/types/accountability';
import { ACTION_ROLE_LABELS } from '@/types/accountability';

/* ================================================================
   PDF STYLES
   ================================================================ */

const colors = {
  black: '#0a0a0a',
  darkGray: '#1a1a1a',
  midGray: '#2a2a2a',
  textPrimary: '#e4e4e7',
  textSecondary: '#a1a1aa',
  textMuted: '#71717a',
  blood: '#d64545',
  bloodDark: '#6b1515',
  bloodLight: '#ef4444',
  white: '#ffffff',
};

const s = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    padding: 40,
    paddingBottom: 50,
    fontFamily: 'Courier',
    color: colors.textPrimary,
  },
  /* Header */
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.blood,
  },
  headerLeft: { flex: 1 },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blood,
    letterSpacing: 4,
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 9,
    color: colors.textMuted,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  headerRole: {
    fontSize: 11,
    color: colors.textSecondary,
    letterSpacing: 1,
    marginTop: 4,
  },
  seal: { width: 64, height: 64 },
  /* Watermark */
  watermark: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  watermarkImage: {
    width: 280,
    height: 280,
    opacity: 0.06,
  },
  /* Classification banner */
  classificationBanner: {
    backgroundColor: colors.bloodDark,
    padding: 6,
    marginBottom: 20,
    textAlign: 'center',
  },
  classificationText: {
    fontSize: 8,
    color: colors.blood,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  /* Sections */
  sectionContainer: { marginBottom: 16 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: `${colors.blood}60`,
  },
  sectionNumber: {
    fontSize: 7,
    color: colors.blood,
    letterSpacing: 2,
    marginRight: 8,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  /* Body text */
  bodyText: {
    fontSize: 9,
    color: colors.textSecondary,
    lineHeight: 1.6,
    marginBottom: 8,
  },
  boldText: {
    fontSize: 9,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  /* Steps */
  stepContainer: {
    marginBottom: 12,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftColor: colors.blood,
  },
  stepNumber: {
    fontSize: 8,
    color: colors.blood,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 2,
  },
  stepTitle: {
    fontSize: 10,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 8,
    color: colors.textSecondary,
    lineHeight: 1.6,
    marginBottom: 4,
  },
  stepMeta: {
    fontSize: 7,
    color: colors.textMuted,
    marginTop: 2,
  },
  /* Template text */
  templateContainer: {
    backgroundColor: colors.darkGray,
    padding: 10,
    marginTop: 6,
    marginBottom: 6,
    borderLeftWidth: 2,
    borderLeftColor: `${colors.blood}80`,
  },
  templateLabel: {
    fontSize: 7,
    color: colors.blood,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  templateText: {
    fontSize: 7,
    color: colors.textSecondary,
    lineHeight: 1.7,
  },
  /* Legal citation */
  legalCitation: {
    fontSize: 7,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginTop: 2,
  },
  /* Bullets */
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 4,
  },
  bulletDot: {
    fontSize: 8,
    color: colors.blood,
    marginRight: 6,
    lineHeight: 1.6,
  },
  bulletText: {
    fontSize: 8,
    color: colors.textSecondary,
    lineHeight: 1.6,
    flex: 1,
  },
  /* Grid rows */
  gridRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: `${colors.white}10`,
    paddingVertical: 4,
  },
  gridLabel: {
    fontSize: 7,
    color: colors.textMuted,
    width: 100,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  gridValue: {
    fontSize: 8,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: 1.5,
  },
  /* Mechanism card */
  mechCard: {
    backgroundColor: colors.darkGray,
    padding: 8,
    marginBottom: 6,
  },
  mechName: {
    fontSize: 9,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  mechStatute: {
    fontSize: 7,
    color: colors.blood,
    marginBottom: 3,
  },
  mechDesc: {
    fontSize: 7,
    color: colors.textSecondary,
    lineHeight: 1.5,
  },
  mechBadge: {
    fontSize: 6,
    color: colors.bloodLight,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 3,
  },
  /* Wealth trace */
  wealthCard: {
    backgroundColor: colors.darkGray,
    padding: 8,
    marginBottom: 6,
  },
  wealthName: {
    fontSize: 9,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  wealthValue: {
    fontSize: 8,
    color: colors.blood,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  /* Footer */
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: `${colors.white}10`,
  },
  footerText: {
    fontSize: 6,
    color: colors.textMuted,
    letterSpacing: 1,
  },
  pageNumber: {
    fontSize: 6,
    color: colors.textMuted,
  },
  /* Divider */
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: `${colors.blood}30`,
    marginVertical: 12,
  },
  /* Success criteria */
  successItem: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 4,
  },
  successCheck: {
    fontSize: 8,
    color: colors.blood,
    marginRight: 6,
  },
  successText: {
    fontSize: 8,
    color: colors.textSecondary,
    lineHeight: 1.5,
    flex: 1,
  },
  /* Target card */
  targetCard: {
    backgroundColor: colors.darkGray,
    padding: 10,
    marginBottom: 10,
  },
  targetName: {
    fontSize: 11,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  targetRole: {
    fontSize: 7,
    color: colors.blood,
    marginBottom: 4,
  },
  targetStatus: {
    fontSize: 8,
    color: colors.textSecondary,
    lineHeight: 1.5,
    marginBottom: 6,
  },
  /* Applicability badge */
  applicabilityBadge: {
    fontSize: 6,
    color: colors.blood,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderWidth: 0.5,
    borderColor: `${colors.blood}40`,
  },
  /* Sub-label */
  subLabel: {
    fontSize: 7,
    color: colors.blood,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 3,
    marginTop: 6,
  },
  /* Authority card */
  authorityCard: {
    backgroundColor: colors.darkGray,
    padding: 8,
    marginBottom: 8,
  },
});


/* ================================================================
   PDF DOCUMENT
   ================================================================ */

interface AccountabilityPDFProps {
  data: AccountabilityData;
  rolePath: RoleActionPath;
  investigationTitle: string;
  sealDataUri: string;
}

export default function AccountabilityPDF({
  data,
  rolePath,
  investigationTitle,
  sealDataUri,
}: AccountabilityPDFProps) {
  const roleLabel = ACTION_ROLE_LABELS[rolePath.role];
  const generatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const relevantMechanisms = data.legalMechanisms.filter(m =>
    rolePath.relevantMechanisms.includes(m.name)
  );
  const additionalMechanisms = data.legalMechanisms.filter(m =>
    !rolePath.relevantMechanisms.includes(m.name)
  );

  const applicabilityLabel: Record<string, string> = {
    directly_applicable: 'DIRECTLY APPLICABLE',
    potentially_applicable: 'POTENTIALLY APPLICABLE',
    requires_new_action: 'REQUIRES NEW ACTION',
  };

  return (
    <Document>
      {/* ============ PAGE 1: COVER ============ */}
      <Page size="A4" style={s.page}>
        <Watermark sealDataUri={sealDataUri} />
        <View style={s.classificationBanner}>
          <Text style={s.classificationText}>
            ACCOUNTABILITY DOSSIER | {roleLabel.toUpperCase()} | CONFIDENTIAL
          </Text>
        </View>

        <View style={s.headerContainer}>
          <View style={s.headerLeft}>
            <Text style={s.headerTitle}>ARKHIVE</Text>
            <Text style={s.headerSubtitle}>Accountability | Transparency | Truth</Text>
            <Text style={s.headerRole}>Prepared for: {roleLabel}</Text>
            <Text style={{ ...s.stepMeta, marginTop: 4 }}>Generated: {generatedDate}</Text>
          </View>
          {sealDataUri && <Image src={sealDataUri} style={s.seal} />}
        </View>

        <View style={s.sectionContainer}>
          <Text style={{ ...s.sectionTitle, fontSize: 14, marginBottom: 8 }}>
            {investigationTitle}
          </Text>
          <Text style={{ ...s.bodyText, fontSize: 8 }}>
            Court-Ready Accountability Dossier | {data.primaryTargets.length} Targets | {data.legalMechanisms.length} Legal Mechanisms | {data.wealthTrace.length} Wealth Traces | {data.authoritiesWithPower.length} Authorities | {rolePath.steps.length} Action Steps
          </Text>
        </View>

        <View style={s.divider} />

        <Text style={{ ...s.bodyText, fontSize: 8, textAlign: 'center', color: colors.blood, fontWeight: 'bold' }}>
          This document contains every accountability target, every legal mechanism,
          every wealth trace, and every action step necessary to pursue full accountability.
          Nothing has been omitted. Nothing has been summarized. This is the complete record.
        </Text>

        <PageFooter generatedDate={generatedDate} />
      </Page>

      {/* ============ PAGE: WHAT HAPPENED ============ */}
      <Page size="A4" style={s.page}>
        <Watermark sealDataUri={sealDataUri} />
        <View style={s.classificationBanner}>
          <Text style={s.classificationText}>
            CRIME SUMMARY | THE FACTS
          </Text>
        </View>

        <Section number="01" title="What Happened">
          <Text style={s.bodyText}>{data.crimeSummary}</Text>
        </Section>

        <Section number="02" title="Scale of Harm">
          <View style={s.gridRow}>
            <Text style={s.gridLabel}>Total Harm</Text>
            <Text style={s.gridValue}>{data.totalHarm}</Text>
          </View>
          <View style={s.gridRow}>
            <Text style={s.gridLabel}>Victims</Text>
            <Text style={s.gridValue}>{data.victimsAffected}</Text>
          </View>
        </Section>

        <Section number="03" title={`Your Role: ${roleLabel}`}>
          <Text style={s.bodyText}>{rolePath.overview}</Text>
          <View style={{ ...s.bulletRow, marginTop: 4 }}>
            <Text style={s.bulletDot}>■</Text>
            <Text style={s.bulletText}>Urgency Level: {rolePath.urgency.toUpperCase()}</Text>
          </View>
          <View style={s.bulletRow}>
            <Text style={s.bulletDot}>■</Text>
            <Text style={s.bulletText}>Total Steps: {rolePath.steps.length}</Text>
          </View>
          <View style={s.bulletRow}>
            <Text style={s.bulletDot}>■</Text>
            <Text style={s.bulletText}>Relevant Mechanisms: {rolePath.relevantMechanisms.join(', ')}</Text>
          </View>
        </Section>

        <PageFooter generatedDate={generatedDate} />
      </Page>

      {/* ============ PAGES: PRIMARY ACCOUNTABILITY TARGETS ============ */}
      <Page size="A4" style={s.page}>
        <Watermark sealDataUri={sealDataUri} />
        <View style={s.classificationBanner}>
          <Text style={s.classificationText}>
            PRIMARY TARGETS | {data.primaryTargets.length} INDIVIDUALS AND ENTITIES
          </Text>
        </View>

        <Section number="04" title="Primary Accountability Targets">
          {data.primaryTargets.map((target, idx) => (
            <View key={idx} style={s.targetCard} wrap={false}>
              <Text style={s.targetName}>{target.name}</Text>
              <Text style={s.targetRole}>{target.role}</Text>

              <Text style={s.subLabel}>Current Status</Text>
              <Text style={s.targetStatus}>{target.currentStatus}</Text>

              <Text style={s.subLabel}>Accountability Path</Text>
              <Text style={{ ...s.bodyText, fontSize: 8, marginBottom: 4 }}>
                {target.accountabilityPath}
              </Text>

              {target.obstacles.length > 0 && (
                <>
                  <Text style={s.subLabel}>Obstacles to Accountability</Text>
                  {target.obstacles.map((obs, oi) => (
                    <View key={oi} style={s.bulletRow}>
                      <Text style={s.bulletDot}>▸</Text>
                      <Text style={s.bulletText}>{obs}</Text>
                    </View>
                  ))}
                </>
              )}
            </View>
          ))}
        </Section>

        <PageFooter generatedDate={generatedDate} />
      </Page>

      {/* ============ PAGES: ACTION STEPS ============ */}
      <Page size="A4" style={s.page}>
        <Watermark sealDataUri={sealDataUri} />
        <View style={s.classificationBanner}>
          <Text style={s.classificationText}>
            ACTION STEPS | {roleLabel.toUpperCase()} | {rolePath.steps.length} STEPS
          </Text>
        </View>

        <Section number="05" title="Step-by-Step Action Plan">
          {rolePath.steps.map((step) => (
            <View key={step.step} style={s.stepContainer}>
              <View wrap={false}>
                <Text style={s.stepNumber}>STEP {String(step.step).padStart(2, '0')}</Text>
                <Text style={s.stepTitle}>{step.title}</Text>
                <Text style={s.stepDescription}>{step.description}</Text>

                {step.filingTarget && (
                  <View style={s.bulletRow}>
                    <Text style={s.bulletDot}>▸</Text>
                    <Text style={s.bulletText}>File with: {step.filingTarget}</Text>
                  </View>
                )}

                {step.requirements && step.requirements.map((req, ri) => (
                  <View key={ri} style={s.bulletRow}>
                    <Text style={s.bulletDot}>▸</Text>
                    <Text style={s.bulletText}>{req}</Text>
                  </View>
                ))}

                {step.legalBasis && step.legalBasis.length > 0 && (
                  <Text style={s.legalCitation}>
                    Legal basis: {step.legalBasis.join('; ')}
                  </Text>
                )}

                {step.estimatedTime && (
                  <Text style={s.stepMeta}>Estimated time: {step.estimatedTime}</Text>
                )}
              </View>

              {/* Template text flows across pages */}
              {step.templateText && (
                <View style={s.templateContainer}>
                  <Text style={s.templateLabel}>Template | Copy and Customize</Text>
                  <Text style={s.templateText}>{step.templateText}</Text>
                </View>
              )}
            </View>
          ))}
        </Section>

        <PageFooter generatedDate={generatedDate} />
      </Page>

      {/* ============ PAGES: LEGAL MECHANISMS (RELEVANT) ============ */}
      <Page size="A4" style={s.page}>
        <Watermark sealDataUri={sealDataUri} />
        <View style={s.classificationBanner}>
          <Text style={s.classificationText}>
            LEGAL MECHANISMS | ROLE-RELEVANT | {relevantMechanisms.length} MECHANISMS
          </Text>
        </View>

        <Section number="06" title="Legal Mechanisms for Your Role">
          {relevantMechanisms.map((mech, idx) => (
            <View key={idx} style={s.mechCard} wrap={false}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <Text style={s.mechName}>{mech.name}</Text>
                <Text style={s.applicabilityBadge}>
                  {applicabilityLabel[mech.applicability] || mech.applicability}
                </Text>
              </View>
              <Text style={s.mechStatute}>{mech.statute}</Text>
              <Text style={s.mechDesc}>{mech.description}</Text>

              <View style={{ flexDirection: 'row', marginTop: 4, gap: 12 }}>
                <Text style={s.mechBadge}>
                  SOL: {mech.hasStatuteOfLimitations ? mech.limitationPeriod || 'Yes' : 'NONE'}
                </Text>
                <Text style={s.mechBadge}>
                  Reaches Heirs: {mech.reachesHeirs ? 'YES' : 'NO'}
                </Text>
              </View>

              {mech.authorizedActors && mech.authorizedActors.length > 0 && (
                <>
                  <Text style={{ ...s.subLabel, marginTop: 4, fontSize: 6 }}>Authorized Actors</Text>
                  {mech.authorizedActors.map((actor, ai) => (
                    <View key={ai} style={s.bulletRow}>
                      <Text style={s.bulletDot}>▸</Text>
                      <Text style={s.bulletText}>{actor}</Text>
                    </View>
                  ))}
                </>
              )}

              {mech.notes && (
                <Text style={{ ...s.mechDesc, marginTop: 4, fontStyle: 'italic' }}>
                  Case Note: {mech.notes}
                </Text>
              )}
            </View>
          ))}
        </Section>

        <PageFooter generatedDate={generatedDate} />
      </Page>

      {/* ============ PAGES: LEGAL MECHANISMS (ADDITIONAL) ============ */}
      {additionalMechanisms.length > 0 && (
        <Page size="A4" style={s.page}>
          <Watermark sealDataUri={sealDataUri} />
          <View style={s.classificationBanner}>
            <Text style={s.classificationText}>
              LEGAL MECHANISMS | ADDITIONAL REFERENCE | {additionalMechanisms.length} MECHANISMS
            </Text>
          </View>

          <Section number="07" title="Additional Legal Mechanisms">
            {additionalMechanisms.map((mech, idx) => (
              <View key={idx} style={s.mechCard} wrap={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <Text style={s.mechName}>{mech.name}</Text>
                  <Text style={s.applicabilityBadge}>
                    {applicabilityLabel[mech.applicability] || mech.applicability}
                  </Text>
                </View>
                <Text style={s.mechStatute}>{mech.statute}</Text>
                <Text style={s.mechDesc}>{mech.description}</Text>

                <View style={{ flexDirection: 'row', marginTop: 4, gap: 12 }}>
                  <Text style={s.mechBadge}>
                    SOL: {mech.hasStatuteOfLimitations ? mech.limitationPeriod || 'Yes' : 'NONE'}
                  </Text>
                  <Text style={s.mechBadge}>
                    Reaches Heirs: {mech.reachesHeirs ? 'YES' : 'NO'}
                  </Text>
                </View>

                {mech.authorizedActors && mech.authorizedActors.length > 0 && (
                  <>
                    <Text style={{ ...s.subLabel, marginTop: 4, fontSize: 6 }}>Authorized Actors</Text>
                    {mech.authorizedActors.map((actor, ai) => (
                      <View key={ai} style={s.bulletRow}>
                        <Text style={s.bulletDot}>▸</Text>
                        <Text style={s.bulletText}>{actor}</Text>
                      </View>
                    ))}
                  </>
                )}

                {mech.notes && (
                  <Text style={{ ...s.mechDesc, marginTop: 4, fontStyle: 'italic' }}>
                    Case Note: {mech.notes}
                  </Text>
                )}
              </View>
            ))}
          </Section>

          <PageFooter generatedDate={generatedDate} />
        </Page>
      )}

      {/* ============ PAGE: WEALTH TRACE ============ */}
      <Page size="A4" style={s.page}>
        <Watermark sealDataUri={sealDataUri} />
        <View style={s.classificationBanner}>
          <Text style={s.classificationText}>
            WEALTH TRACE | {data.wealthTrace.length} ASSET HOLDERS
          </Text>
        </View>

        <Section number="08" title="Where the Money Is Now">
          {data.wealthTrace.map((entry, idx) => (
            <View key={idx} style={s.wealthCard} wrap={false}>
              <Text style={s.wealthName}>{entry.name}</Text>
              {entry.estimatedValue && (
                <Text style={s.wealthValue}>{entry.estimatedValue}</Text>
              )}
              <View style={s.gridRow}>
                <Text style={s.gridLabel}>Relationship</Text>
                <Text style={s.gridValue}>{entry.relationship}</Text>
              </View>
              <View style={s.gridRow}>
                <Text style={s.gridLabel}>Transfer</Text>
                <Text style={s.gridValue}>{entry.transferMethod}</Text>
              </View>
              {entry.legalEntities && entry.legalEntities.length > 0 && (
                <View style={s.gridRow}>
                  <Text style={s.gridLabel}>Entities</Text>
                  <Text style={s.gridValue}>{entry.legalEntities.join(', ')}</Text>
                </View>
              )}
              <View style={s.gridRow}>
                <Text style={s.gridLabel}>Recovery</Text>
                <Text style={s.gridValue}>{entry.recoveryMechanisms.join(', ')}</Text>
              </View>
            </View>
          ))}
        </Section>

        <PageFooter generatedDate={generatedDate} />
      </Page>

      {/* ============ PAGE: AUTHORITIES ============ */}
      <Page size="A4" style={s.page}>
        <Watermark sealDataUri={sealDataUri} />
        <View style={s.classificationBanner}>
          <Text style={s.classificationText}>
            AUTHORITIES | {data.authoritiesWithPower.length} OFFICIALS WITH POWER TO ACT
          </Text>
        </View>

        <Section number="09" title="Authorities With Power to Act">
          {data.authoritiesWithPower.map((auth, idx) => (
            <View key={idx} style={s.authorityCard} wrap={false}>
              <Text style={{ ...s.boldText, fontSize: 10, color: colors.white }}>{auth.name}</Text>
              <Text style={{ ...s.stepMeta, marginBottom: 4 }}>{auth.title} | {auth.jurisdiction}</Text>
              <Text style={s.subLabel}>Powers</Text>
              {auth.powers.map((power, pi) => (
                <View key={pi} style={s.bulletRow}>
                  <Text style={s.bulletDot}>▸</Text>
                  <Text style={s.bulletText}>{power}</Text>
                </View>
              ))}
              {auth.contactMethod && (
                <>
                  <Text style={{ ...s.subLabel, marginTop: 4 }}>Contact</Text>
                  <Text style={{ ...s.bodyText, fontSize: 7 }}>{auth.contactMethod}</Text>
                </>
              )}
            </View>
          ))}
        </Section>

        <PageFooter generatedDate={generatedDate} />
      </Page>

      {/* ============ PAGE: SUCCESS CRITERIA & CLOSING ============ */}
      <Page size="A4" style={s.page}>
        <Watermark sealDataUri={sealDataUri} />
        <View style={s.classificationBanner}>
          <Text style={s.classificationText}>
            SUCCESS CRITERIA | WHAT JUSTICE LOOKS LIKE
          </Text>
        </View>

        <Section number="10" title="What Success Looks Like">
          {data.successCriteria.map((criterion, idx) => (
            <View key={idx} style={s.successItem}>
              <Text style={s.successCheck}>■</Text>
              <Text style={s.successText}>{criterion}</Text>
            </View>
          ))}
        </Section>

        <View style={s.divider} />

        <View style={s.sectionContainer}>
          <Text style={{ ...s.bodyText, textAlign: 'center', marginTop: 12 }}>
            This document was generated by ArkHive, an investigative journalism platform
            dedicated to accountability, transparency, and truth. The information contained
            herein is compiled from public records, court documents, and verified sources.
          </Text>
          <Text style={{ ...s.bodyText, textAlign: 'center', fontWeight: 'bold', color: colors.blood, marginTop: 8 }}>
            Criminal wealth cannot be legitimized through the passage of time,
            philanthropic rebranding, or transfer to the next generation.
          </Text>
          <Text style={{ ...s.bodyText, textAlign: 'center', fontWeight: 'bold', color: colors.blood, marginTop: 4 }}>
            Every name is here. Every mechanism is here. Everything you need is in this document.
          </Text>
          <Text style={{ ...s.stepMeta, textAlign: 'center', marginTop: 12 }}>
            arkhive.live | EST. 2025
          </Text>
        </View>

        <PageFooter generatedDate={generatedDate} />
      </Page>
    </Document>
  );
}

/* ================================================================
   HELPER COMPONENTS
   ================================================================ */

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <View style={s.sectionContainer} minPresenceAhead={20}>
      <View style={s.sectionHeader}>
        <Text style={s.sectionNumber}>{number}</Text>
        <Text style={s.sectionTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

function PageFooter({ generatedDate }: { generatedDate: string }) {
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerText}>ARKHIVE | ACCOUNTABILITY DOSSIER</Text>
      <Text style={s.footerText}>{generatedDate}</Text>
      <Text style={s.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function Watermark({ sealDataUri }: { sealDataUri: string }) {
  if (!sealDataUri) return null;
  return (
    <View style={s.watermark} fixed>
      <Image src={sealDataUri} style={s.watermarkImage} />
    </View>
  );
}
