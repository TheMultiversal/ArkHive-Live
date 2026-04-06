'use client';

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { AccountabilityData, RoleActionPath } from '@/types/accountability';
import { ACTION_ROLE_LABELS } from '@/types/accountability';

/* ================================================================
   COLORS — Blood-red palette throughout. No green anywhere.
   ================================================================ */

const c = {
  black: '#0a0a0a',
  dark: '#1a1a1a',
  mid: '#2a2a2a',
  text: '#e4e4e7',
  sub: '#a1a1aa',
  muted: '#71717a',
  blood: '#d64545',
  bloodDk: '#6b1515',
  bloodLt: '#ef4444',
  white: '#ffffff',
};

/* ================================================================
   STATUS COLORS — All red spectrum. NO green.
   ================================================================ */

const statusColor: Record<string, string> = {
  convicted: '#ef4444', incarcerated: '#dc2626', indicted: '#b91c1c',
  charged: '#991b1b', pending: '#7f1d1d', settled: '#71717a',
  acquitted: '#6b2121', pardoned: '#9f1239', appealing: '#be123c',
  released: '#881337',
};

/* ================================================================
   STYLES
   ================================================================ */

const s = StyleSheet.create({
  page: { backgroundColor: c.black, padding: 40, paddingBottom: 50, fontFamily: 'Courier', color: c.text },
  // Watermark
  wm: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', zIndex: 0 },
  wmImg: { width: 300, height: 300, opacity: 0.08 },
  // Banner
  banner: { backgroundColor: c.bloodDk, padding: 6, marginBottom: 16, textAlign: 'center' },
  bannerText: { fontSize: 7, color: c.blood, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'bold' },
  // Header
  hdr: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: c.blood },
  hdrLeft: { flex: 1 },
  hdrTitle: { fontSize: 18, fontWeight: 'bold', color: c.blood, letterSpacing: 4, marginBottom: 4 },
  hdrSub: { fontSize: 8, color: c.muted, letterSpacing: 2, textTransform: 'uppercase' },
  hdrRole: { fontSize: 10, color: c.sub, letterSpacing: 1, marginTop: 4 },
  seal: { width: 60, height: 60 },
  // Section
  sec: { marginBottom: 14 },
  secHdr: { flexDirection: 'row', alignItems: 'center', marginBottom: 6, paddingBottom: 3, borderBottomWidth: 0.5, borderBottomColor: `${c.blood}60` },
  secNum: { fontSize: 7, color: c.blood, letterSpacing: 2, marginRight: 8, fontWeight: 'bold' },
  secTitle: { fontSize: 11, color: c.white, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase' },
  // Text
  body: { fontSize: 8, color: c.sub, lineHeight: 1.6, marginBottom: 6 },
  bold: { fontSize: 8, color: c.text, fontWeight: 'bold' },
  label: { fontSize: 6, color: c.blood, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2, marginTop: 4 },
  // Card
  card: { backgroundColor: c.dark, padding: 8, marginBottom: 6 },
  cardTitle: { fontSize: 9, color: c.white, fontWeight: 'bold', marginBottom: 2 },
  cardSub: { fontSize: 7, color: c.blood, marginBottom: 3 },
  cardBody: { fontSize: 7, color: c.sub, lineHeight: 1.5 },
  // Grid row
  row: { flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: `${c.white}10`, paddingVertical: 3 },
  rowLabel: { fontSize: 6, color: c.muted, width: 80, textTransform: 'uppercase', letterSpacing: 1 },
  rowVal: { fontSize: 7, color: c.sub, flex: 1, lineHeight: 1.5 },
  // Bullet
  bRow: { flexDirection: 'row', marginBottom: 2, paddingLeft: 4 },
  bDot: { fontSize: 7, color: c.blood, marginRight: 5, lineHeight: 1.5 },
  bTxt: { fontSize: 7, color: c.sub, lineHeight: 1.5, flex: 1 },
  // Step
  step: { marginBottom: 10, paddingLeft: 10, borderLeftWidth: 2, borderLeftColor: c.blood },
  stepNum: { fontSize: 7, color: c.blood, fontWeight: 'bold', letterSpacing: 2, marginBottom: 2 },
  stepTitle: { fontSize: 9, color: c.white, fontWeight: 'bold', marginBottom: 3 },
  stepDesc: { fontSize: 7, color: c.sub, lineHeight: 1.6, marginBottom: 3 },
  stepMeta: { fontSize: 6, color: c.muted, marginTop: 2 },
  // Template
  tmpl: { backgroundColor: c.dark, padding: 8, marginTop: 4, marginBottom: 4, borderLeftWidth: 2, borderLeftColor: `${c.blood}80` },
  tmplLabel: { fontSize: 6, color: c.blood, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'bold', marginBottom: 3 },
  tmplText: { fontSize: 6, color: c.sub, lineHeight: 1.7 },
  // Legal citation
  cite: { fontSize: 6, color: c.muted, fontStyle: 'italic', marginTop: 2 },
  // Badge
  badge: { fontSize: 5, color: c.bloodLt, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 'bold', marginTop: 2 },
  appBadge: { fontSize: 5, color: c.blood, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase', paddingHorizontal: 3, paddingVertical: 1, borderWidth: 0.5, borderColor: `${c.blood}40` },
  // Status badge
  statusBadge: { fontSize: 6, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase', paddingHorizontal: 4, paddingVertical: 2 },
  // Success
  successRow: { flexDirection: 'row', marginBottom: 3, paddingLeft: 4 },
  successCheck: { fontSize: 7, color: c.blood, marginRight: 5 },
  successText: { fontSize: 7, color: c.sub, lineHeight: 1.5, flex: 1 },
  // Money row
  moneyCard: { backgroundColor: c.dark, padding: 6, marginBottom: 4, flexDirection: 'row', flexWrap: 'wrap' },
  // Divider
  div: { borderBottomWidth: 0.5, borderBottomColor: `${c.blood}30`, marginVertical: 10 },
  // Footer
  footer: { position: 'absolute', bottom: 18, left: 40, right: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 6, borderTopWidth: 0.5, borderTopColor: `${c.white}10` },
  footerText: { fontSize: 5, color: c.muted, letterSpacing: 1 },
  pageNum: { fontSize: 5, color: c.muted },
  // Timeline row
  tlRow: { flexDirection: 'row', marginBottom: 3, paddingBottom: 3, borderBottomWidth: 0.5, borderBottomColor: `${c.white}06` },
  tlDate: { fontSize: 6, color: c.blood, width: 65, fontWeight: 'bold' },
  tlEvent: { fontSize: 7, color: c.sub, flex: 1, lineHeight: 1.5 },
  tlType: { fontSize: 5, color: c.muted, width: 45, textAlign: 'right', textTransform: 'uppercase', letterSpacing: 1 },
  // Entity row
  entityCard: { backgroundColor: c.dark, padding: 6, marginBottom: 4 },
  entityType: { fontSize: 5, color: c.blood, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 'bold' },
  entityName: { fontSize: 8, color: c.white, fontWeight: 'bold', marginTop: 1, marginBottom: 2 },
  entityRel: { fontSize: 6, color: c.sub, lineHeight: 1.4 },
  // Statute row
  statuteCard: { backgroundColor: c.dark, padding: 6, marginBottom: 4 },
  statuteCode: { fontSize: 8, color: c.blood, fontWeight: 'bold', marginBottom: 2 },
  statuteDesc: { fontSize: 7, color: c.sub, lineHeight: 1.5 },
  // Source row
  sourceRow: { flexDirection: 'row', marginBottom: 3, paddingBottom: 3, borderBottomWidth: 0.5, borderBottomColor: `${c.white}06` },
  sourceNum: { fontSize: 6, color: c.blood, width: 20, fontWeight: 'bold' },
  sourceTitle: { fontSize: 7, color: c.sub, flex: 1, lineHeight: 1.5 },
  sourceType: { fontSize: 5, color: c.muted, width: 50, textAlign: 'right', textTransform: 'uppercase', letterSpacing: 1 },
});


/* ================================================================
   HELPER COMPONENTS
   ================================================================ */

function Wm({ uri }: { uri: string }) {
  if (!uri) return null;
  return <View style={s.wm} fixed><Image src={uri} style={s.wmImg} /></View>;
}

function Ft({ date }: { date: string }) {
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerText}>ARKHIVE | ACCOUNTABILITY DOSSIER</Text>
      <Text style={s.footerText}>{date}</Text>
      <Text style={s.pageNum} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function Sec({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <View style={s.sec} minPresenceAhead={20}>
      <View style={s.secHdr}>
        <Text style={s.secNum}>{n}</Text>
        <Text style={s.secTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}


/* ================================================================
   APPLICABILITY LABEL MAP
   ================================================================ */

const appLabel: Record<string, string> = {
  directly_applicable: 'DIRECTLY APPLICABLE',
  potentially_applicable: 'POTENTIALLY APPLICABLE',
  requires_new_action: 'REQUIRES NEW ACTION',
};


/* ================================================================
   PDF DOCUMENT
   ================================================================ */

interface AccountabilityPDFProps {
  data: AccountabilityData;
  rolePath: RoleActionPath;
  investigationTitle: string;
  sealDataUri: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  investigation?: any;
}

export default function AccountabilityPDF({
  data,
  rolePath,
  investigationTitle,
  sealDataUri,
  investigation,
}: AccountabilityPDFProps) {
  const roleLabel = ACTION_ROLE_LABELS[rolePath.role];
  const genDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Investigation data (may be undefined if not passed)
  const defendants = investigation?.defendants || [];
  const timeline = investigation?.timeline || [];
  const moneyTrail = investigation?.moneyTrail || [];
  const statutes = investigation?.statutes || [];
  const affiliations = investigation?.affiliations || [];
  const sources = investigation?.sources || [];
  const content = investigation?.content || [];
  const tags = investigation?.tags || [];
  const subtitle = investigation?.subtitle || '';
  const severity = investigation?.severity || 'medium';
  const category = investigation?.category || '';
  const summary = investigation?.summary || '';
  const eventOriginDate = investigation?.eventOriginDate || '';
  const lastActivityDate = investigation?.lastActivityDate || '';

  // Filter content to remove accountability engine section
  const mainContent = content.filter((p: string) => !p.startsWith('WHAT YOU CAN DO'));

  // Mechanism splits
  const relMechs = data.legalMechanisms.filter(m => rolePath.relevantMechanisms.includes(m.name));
  const addMechs = data.legalMechanisms.filter(m => !rolePath.relevantMechanisms.includes(m.name));

  // Group affiliations by type
  const entGroups: Record<string, Array<{ name: string; type: string; relationship: string }>> = {};
  affiliations.forEach((a: { name: string; type: string; relationship: string }) => {
    const t = a.type || 'other';
    if (!entGroups[t]) entGroups[t] = [];
    entGroups[t].push(a);
  });

  // Total stats
  const totalDefendants = defendants.length;
  const totalTransactions = moneyTrail.length;
  const totalEvents = timeline.length;
  const totalStatutes = statutes.length;
  const totalEntities = affiliations.length;
  const totalSources = sources.length;
  const totalTargets = data.primaryTargets.length;
  const totalMechanisms = data.legalMechanisms.length;
  const totalWealth = data.wealthTrace.length;
  const totalAuthorities = data.authoritiesWithPower.length;
  const totalSteps = rolePath.steps.length;
  const totalCriteria = data.successCriteria.length;

  return (
    <Document>
      {/* ============================================================
          PAGE 1: COVER
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            COURT-READY ACCOUNTABILITY DOSSIER | {roleLabel.toUpperCase()} | CONFIDENTIAL
          </Text>
        </View>

        <View style={s.hdr}>
          <View style={s.hdrLeft}>
            <Text style={s.hdrTitle}>ARKHIVE</Text>
            <Text style={s.hdrSub}>Accountability | Transparency | Truth</Text>
            <Text style={s.hdrRole}>Prepared for: {roleLabel}</Text>
            <Text style={{ ...s.stepMeta, marginTop: 4 }}>Generated: {genDate}</Text>
          </View>
          {sealDataUri && <Image src={sealDataUri} style={s.seal} />}
        </View>

        <View style={s.sec}>
          <Text style={{ ...s.secTitle, fontSize: 13, marginBottom: 6 }}>
            {investigationTitle}
          </Text>
          {subtitle ? <Text style={{ ...s.body, fontStyle: 'italic', marginBottom: 4 }}>{subtitle}</Text> : null}
          <Text style={{ ...s.body, fontSize: 7 }}>
            Severity: {severity.toUpperCase()} | Category: {category}
            {eventOriginDate ? ` | Origin: ${eventOriginDate}` : ''}
            {lastActivityDate ? ` | Last Activity: ${lastActivityDate}` : ''}
          </Text>
        </View>

        <View style={s.div} />

        {/* Stats grid */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12 }}>
          {[
            { n: totalDefendants, l: 'Defendants' },
            { n: totalTargets, l: 'Targets' },
            { n: totalMechanisms, l: 'Legal Mechanisms' },
            { n: totalStatutes, l: 'Statutes' },
            { n: totalTransactions, l: 'Money Trails' },
            { n: totalEntities, l: 'Entities' },
            { n: totalEvents, l: 'Timeline Events' },
            { n: totalWealth, l: 'Wealth Traces' },
            { n: totalAuthorities, l: 'Authorities' },
            { n: totalSteps, l: 'Action Steps' },
            { n: totalSources, l: 'Sources' },
            { n: totalCriteria, l: 'Success Criteria' },
          ].map((stat, idx) => (
            <View key={idx} style={{ width: '25%', padding: 4, marginBottom: 4 }}>
              <Text style={{ fontSize: 14, color: c.blood, fontWeight: 'bold' }}>{stat.n}</Text>
              <Text style={{ fontSize: 5, color: c.muted, textTransform: 'uppercase', letterSpacing: 1 }}>{stat.l}</Text>
            </View>
          ))}
        </View>

        {tags.length > 0 && (
          <Text style={{ fontSize: 6, color: c.muted, lineHeight: 1.6 }}>
            Tags: {tags.join(' | ')}
          </Text>
        )}

        <View style={s.div} />

        <Text style={{ ...s.body, fontSize: 7, textAlign: 'center', color: c.blood, fontWeight: 'bold' }}>
          This document contains every defendant, every transaction, every statute, every entity,
          every timeline event, every accountability target, every legal mechanism, every action step,
          and every source. Nothing has been omitted. This is the complete record.
        </Text>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          PAGE: EXECUTIVE SUMMARY
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>CRIME SUMMARY | EXECUTIVE BRIEF</Text>
        </View>

        <Sec n="01" title="What Happened">
          <Text style={s.body}>{data.crimeSummary}</Text>
        </Sec>

        <Sec n="02" title="Scale of Harm">
          <View style={s.row}>
            <Text style={s.rowLabel}>Total Harm</Text>
            <Text style={s.rowVal}>{data.totalHarm}</Text>
          </View>
          <View style={s.row}>
            <Text style={s.rowLabel}>Victims</Text>
            <Text style={s.rowVal}>{data.victimsAffected}</Text>
          </View>
        </Sec>

        {summary ? (
          <Sec n="03" title="Investigation Summary">
            <Text style={s.body}>{summary}</Text>
          </Sec>
        ) : null}

        <Sec n="04" title={`Your Role: ${roleLabel}`}>
          <Text style={s.body}>{rolePath.overview}</Text>
          <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>Urgency: {rolePath.urgency.toUpperCase()}</Text></View>
          <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>Action Steps: {rolePath.steps.length}</Text></View>
          <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>Relevant Mechanisms: {rolePath.relevantMechanisms.join(', ')}</Text></View>
        </Sec>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          PAGE: FULL NARRATIVE
          ============================================================ */}
      {mainContent.length > 0 && (
        <Page size="A4" style={s.page}>
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>INVESTIGATION NARRATIVE | FULL TEXT</Text>
          </View>

          <Sec n="05" title="Full Investigation Narrative">
            {mainContent.map((para: string, idx: number) => (
              <Text key={idx} style={{ ...s.body, marginBottom: 8 }}>{para}</Text>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          PAGE: DEFENDANTS REGISTER
          ============================================================ */}
      {defendants.length > 0 && (
        <Page size="A4" style={s.page}>
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>
              DEFENDANTS REGISTER | {defendants.length} NAMED PARTIES
            </Text>
          </View>

          <Sec n="06" title="All Named Defendants">
            {defendants.map((d: {
              name: string; role: string; status: string;
              charges?: string[]; sentence?: string; fine?: string;
              restitution?: string; indictmentDate?: string; convictionDate?: string;
              releaseDate?: string; pardonDate?: string; pardonedBy?: string;
              appealStatus?: string; notes?: string;
            }, idx: number) => (
              <View key={idx} style={s.card} wrap={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <Text style={s.cardTitle}>{d.name}</Text>
                  <Text style={{ ...s.statusBadge, color: statusColor[d.status] || c.blood }}>
                    {d.status.toUpperCase()}
                  </Text>
                </View>
                <Text style={s.cardSub}>{d.role}</Text>

                {d.charges && d.charges.length > 0 && (
                  <View style={s.row}>
                    <Text style={s.rowLabel}>Charges</Text>
                    <Text style={s.rowVal}>{d.charges.join('; ')}</Text>
                  </View>
                )}
                {d.sentence && (
                  <View style={s.row}>
                    <Text style={s.rowLabel}>Sentence</Text>
                    <Text style={s.rowVal}>{d.sentence}</Text>
                  </View>
                )}
                {d.fine && (
                  <View style={s.row}>
                    <Text style={s.rowLabel}>Fine</Text>
                    <Text style={s.rowVal}>{d.fine}</Text>
                  </View>
                )}
                {d.restitution && (
                  <View style={s.row}>
                    <Text style={s.rowLabel}>Restitution</Text>
                    <Text style={s.rowVal}>{d.restitution}</Text>
                  </View>
                )}
                {d.indictmentDate && (
                  <View style={s.row}>
                    <Text style={s.rowLabel}>Indicted</Text>
                    <Text style={s.rowVal}>{d.indictmentDate}</Text>
                  </View>
                )}
                {d.convictionDate && (
                  <View style={s.row}>
                    <Text style={s.rowLabel}>Convicted</Text>
                    <Text style={s.rowVal}>{d.convictionDate}</Text>
                  </View>
                )}
                {d.releaseDate && (
                  <View style={s.row}>
                    <Text style={s.rowLabel}>Released</Text>
                    <Text style={s.rowVal}>{d.releaseDate}</Text>
                  </View>
                )}
                {d.pardonDate && (
                  <View style={s.row}>
                    <Text style={s.rowLabel}>Pardoned</Text>
                    <Text style={s.rowVal}>{d.pardonDate}{d.pardonedBy ? ` (by ${d.pardonedBy})` : ''}</Text>
                  </View>
                )}
                {d.appealStatus && (
                  <View style={s.row}>
                    <Text style={s.rowLabel}>Appeal</Text>
                    <Text style={s.rowVal}>{d.appealStatus.toUpperCase()}</Text>
                  </View>
                )}
                {d.notes && (
                  <Text style={{ ...s.cardBody, marginTop: 3, fontStyle: 'italic' }}>{d.notes}</Text>
                )}
              </View>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          PAGE: TIMELINE
          ============================================================ */}
      {timeline.length > 0 && (
        <Page size="A4" style={s.page}>
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>
              CHRONOLOGICAL TIMELINE | {timeline.length} EVENTS
            </Text>
          </View>

          <Sec n="07" title="Timeline of Events">
            {timeline.map((evt: { date: string; event: string; type?: string }, idx: number) => (
              <View key={idx} style={s.tlRow} wrap={false}>
                <Text style={s.tlDate}>{evt.date}</Text>
                <Text style={s.tlEvent}>{evt.event}</Text>
                {evt.type && <Text style={s.tlType}>{evt.type}</Text>}
              </View>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          PAGE: MONEY TRAIL
          ============================================================ */}
      {moneyTrail.length > 0 && (
        <Page size="A4" style={s.page}>
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>
              FINANCIAL TRAIL | {moneyTrail.length} DOCUMENTED TRANSACTIONS
            </Text>
          </View>

          <Sec n="08" title="Money Trail">
            {moneyTrail.map((tx: {
              date: string; from: string; to: string;
              amount: string; purpose: string; documented: boolean;
            }, idx: number) => (
              <View key={idx} style={s.card} wrap={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                  <Text style={{ fontSize: 7, color: c.blood, fontWeight: 'bold' }}>{tx.date}</Text>
                  <Text style={{ fontSize: 8, color: c.bloodLt, fontWeight: 'bold' }}>{tx.amount}</Text>
                </View>
                <Text style={{ fontSize: 7, color: c.white, marginBottom: 2 }}>
                  {tx.from} → {tx.to}
                </Text>
                <Text style={s.cardBody}>{tx.purpose}</Text>
                <Text style={{ ...s.badge, color: tx.documented ? c.blood : c.muted }}>
                  {tx.documented ? '■ DOCUMENTED' : '□ UNVERIFIED'}
                </Text>
              </View>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          PAGE: ENTITY NETWORK
          ============================================================ */}
      {affiliations.length > 0 && (
        <Page size="A4" style={s.page}>
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>
              ENTITY NETWORK | {affiliations.length} CONNECTED ENTITIES
            </Text>
          </View>

          <Sec n="09" title="All Connected Entities">
            {Object.entries(entGroups).map(([type, entities]) => (
              <View key={type} style={{ marginBottom: 8 }}>
                <Text style={{ ...s.label, fontSize: 7, marginBottom: 4, marginTop: 6 }}>
                  {type.toUpperCase()}S ({entities.length})
                </Text>
                {entities.map((ent: { name: string; type: string; relationship: string }, idx: number) => (
                  <View key={idx} style={s.entityCard} wrap={false}>
                    <Text style={s.entityType}>{ent.type}</Text>
                    <Text style={s.entityName}>{ent.name}</Text>
                    <Text style={s.entityRel}>{ent.relationship}</Text>
                  </View>
                ))}
              </View>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          PAGE: APPLICABLE STATUTES
          ============================================================ */}
      {statutes.length > 0 && (
        <Page size="A4" style={s.page}>
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>
              APPLICABLE STATUTES | {statutes.length} LAWS VIOLATED
            </Text>
          </View>

          <Sec n="10" title="Statutes and Legal Authorities">
            {statutes.map((st: { code: string; description?: string }, idx: number) => (
              <View key={idx} style={s.statuteCard} wrap={false}>
                <Text style={s.statuteCode}>{st.code}</Text>
                {st.description && <Text style={s.statuteDesc}>{st.description}</Text>}
              </View>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          PAGE: PRIMARY ACCOUNTABILITY TARGETS
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            PRIMARY TARGETS | {data.primaryTargets.length} INDIVIDUALS AND ENTITIES
          </Text>
        </View>

        <Sec n="11" title="Primary Accountability Targets">
          {data.primaryTargets.map((target, idx) => (
            <View key={idx} style={s.card} wrap={false}>
              <Text style={{ ...s.cardTitle, fontSize: 10 }}>{target.name}</Text>
              <Text style={s.cardSub}>{target.role}</Text>

              <Text style={s.label}>Current Status</Text>
              <Text style={{ ...s.body, fontSize: 7, marginBottom: 4 }}>{target.currentStatus}</Text>

              <Text style={s.label}>Accountability Path</Text>
              <Text style={{ ...s.body, fontSize: 7, marginBottom: 4 }}>{target.accountabilityPath}</Text>

              {target.obstacles.length > 0 && (
                <>
                  <Text style={s.label}>Obstacles</Text>
                  {target.obstacles.map((obs, oi) => (
                    <View key={oi} style={s.bRow}>
                      <Text style={s.bDot}>▸</Text>
                      <Text style={s.bTxt}>{obs}</Text>
                    </View>
                  ))}
                </>
              )}
            </View>
          ))}
        </Sec>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          PAGE: ACTION STEPS
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            ACTION STEPS | {roleLabel.toUpperCase()} | {rolePath.steps.length} STEPS
          </Text>
        </View>

        <Sec n="12" title="Step-by-Step Action Plan">
          {rolePath.steps.map((step) => (
            <View key={step.step} style={s.step}>
              <View wrap={false}>
                <Text style={s.stepNum}>STEP {String(step.step).padStart(2, '0')}</Text>
                <Text style={s.stepTitle}>{step.title}</Text>
                <Text style={s.stepDesc}>{step.description}</Text>

                {step.filingTarget && (
                  <View style={s.bRow}>
                    <Text style={s.bDot}>▸</Text>
                    <Text style={s.bTxt}>File with: {step.filingTarget}</Text>
                  </View>
                )}
                {step.requirements?.map((req, ri) => (
                  <View key={ri} style={s.bRow}>
                    <Text style={s.bDot}>▸</Text>
                    <Text style={s.bTxt}>{req}</Text>
                  </View>
                ))}
                {step.legalBasis && step.legalBasis.length > 0 && (
                  <Text style={s.cite}>Legal basis: {step.legalBasis.join('; ')}</Text>
                )}
                {step.estimatedTime && (
                  <Text style={s.stepMeta}>Estimated time: {step.estimatedTime}</Text>
                )}
              </View>

              {step.templateText && (
                <View style={s.tmpl}>
                  <Text style={s.tmplLabel}>Template | Copy and Customize</Text>
                  <Text style={s.tmplText}>{step.templateText}</Text>
                </View>
              )}
            </View>
          ))}
        </Sec>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          PAGE: LEGAL MECHANISMS (RELEVANT)
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            LEGAL MECHANISMS | ROLE-RELEVANT | {relMechs.length} MECHANISMS
          </Text>
        </View>

        <Sec n="13" title="Legal Mechanisms for Your Role">
          {relMechs.map((mech, idx) => (
            <View key={idx} style={s.card} wrap={false}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                <Text style={s.cardTitle}>{mech.name}</Text>
                <Text style={s.appBadge}>{appLabel[mech.applicability] || mech.applicability}</Text>
              </View>
              <Text style={s.cardSub}>{mech.statute}</Text>
              <Text style={s.cardBody}>{mech.description}</Text>

              <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <Text style={s.badge}>SOL: {mech.hasStatuteOfLimitations ? mech.limitationPeriod || 'Yes' : 'NONE'}</Text>
                <Text style={{ ...s.badge, marginLeft: 12 }}>Reaches Heirs: {mech.reachesHeirs ? 'YES' : 'NO'}</Text>
              </View>

              {mech.authorizedActors?.length > 0 && (
                <>
                  <Text style={{ ...s.label, fontSize: 5 }}>Authorized Actors</Text>
                  {mech.authorizedActors.map((actor, ai) => (
                    <View key={ai} style={s.bRow}>
                      <Text style={s.bDot}>▸</Text>
                      <Text style={s.bTxt}>{actor}</Text>
                    </View>
                  ))}
                </>
              )}
              {mech.notes && (
                <Text style={{ ...s.cardBody, marginTop: 3, fontStyle: 'italic' }}>Case Note: {mech.notes}</Text>
              )}
            </View>
          ))}
        </Sec>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          PAGE: LEGAL MECHANISMS (ADDITIONAL)
          ============================================================ */}
      {addMechs.length > 0 && (
        <Page size="A4" style={s.page}>
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>
              LEGAL MECHANISMS | ADDITIONAL REFERENCE | {addMechs.length} MECHANISMS
            </Text>
          </View>

          <Sec n="14" title="Additional Legal Mechanisms">
            {addMechs.map((mech, idx) => (
              <View key={idx} style={s.card} wrap={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                  <Text style={s.cardTitle}>{mech.name}</Text>
                  <Text style={s.appBadge}>{appLabel[mech.applicability] || mech.applicability}</Text>
                </View>
                <Text style={s.cardSub}>{mech.statute}</Text>
                <Text style={s.cardBody}>{mech.description}</Text>

                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                  <Text style={s.badge}>SOL: {mech.hasStatuteOfLimitations ? mech.limitationPeriod || 'Yes' : 'NONE'}</Text>
                  <Text style={{ ...s.badge, marginLeft: 12 }}>Reaches Heirs: {mech.reachesHeirs ? 'YES' : 'NO'}</Text>
                </View>

                {mech.authorizedActors?.length > 0 && (
                  <>
                    <Text style={{ ...s.label, fontSize: 5 }}>Authorized Actors</Text>
                    {mech.authorizedActors.map((actor, ai) => (
                      <View key={ai} style={s.bRow}>
                        <Text style={s.bDot}>▸</Text>
                        <Text style={s.bTxt}>{actor}</Text>
                      </View>
                    ))}
                  </>
                )}
                {mech.notes && (
                  <Text style={{ ...s.cardBody, marginTop: 3, fontStyle: 'italic' }}>Case Note: {mech.notes}</Text>
                )}
              </View>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          PAGE: WEALTH TRACE
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            WEALTH TRACE | {data.wealthTrace.length} ASSET HOLDERS
          </Text>
        </View>

        <Sec n="15" title="Where the Money Is Now">
          {data.wealthTrace.map((entry, idx) => (
            <View key={idx} style={s.card} wrap={false}>
              <Text style={{ ...s.cardTitle, fontSize: 9 }}>{entry.name}</Text>
              {entry.estimatedValue && (
                <Text style={{ fontSize: 8, color: c.blood, fontWeight: 'bold', marginBottom: 3 }}>{entry.estimatedValue}</Text>
              )}
              <View style={s.row}>
                <Text style={s.rowLabel}>Relationship</Text>
                <Text style={s.rowVal}>{entry.relationship}</Text>
              </View>
              <View style={s.row}>
                <Text style={s.rowLabel}>Transfer</Text>
                <Text style={s.rowVal}>{entry.transferMethod}</Text>
              </View>
              {entry.legalEntities && entry.legalEntities.length > 0 && (
                <View style={s.row}>
                  <Text style={s.rowLabel}>Entities</Text>
                  <Text style={s.rowVal}>{entry.legalEntities.join(', ')}</Text>
                </View>
              )}
              <View style={s.row}>
                <Text style={s.rowLabel}>Recovery</Text>
                <Text style={s.rowVal}>{entry.recoveryMechanisms.join(', ')}</Text>
              </View>
            </View>
          ))}
        </Sec>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          PAGE: AUTHORITIES
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            AUTHORITIES | {data.authoritiesWithPower.length} OFFICIALS WITH POWER TO ACT
          </Text>
        </View>

        <Sec n="16" title="Authorities With Power to Act">
          {data.authoritiesWithPower.map((auth, idx) => (
            <View key={idx} style={s.card} wrap={false}>
              <Text style={{ ...s.bold, fontSize: 9, color: c.white }}>{auth.name}</Text>
              <Text style={{ ...s.stepMeta, marginBottom: 3 }}>{auth.title} | {auth.jurisdiction}</Text>
              <Text style={s.label}>Powers</Text>
              {auth.powers.map((power, pi) => (
                <View key={pi} style={s.bRow}>
                  <Text style={s.bDot}>▸</Text>
                  <Text style={s.bTxt}>{power}</Text>
                </View>
              ))}
              {auth.contactMethod && (
                <>
                  <Text style={{ ...s.label, marginTop: 3 }}>Contact</Text>
                  <Text style={{ ...s.body, fontSize: 6 }}>{auth.contactMethod}</Text>
                </>
              )}
            </View>
          ))}
        </Sec>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          PAGE: SOURCES & EVIDENCE
          ============================================================ */}
      {sources.length > 0 && (
        <Page size="A4" style={s.page}>
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>
              SOURCES & CITATIONS | {sources.length} REFERENCES
            </Text>
          </View>

          <Sec n="17" title="Evidentiary Sources">
            {sources.map((src: { title: string; url: string; type: string }, idx: number) => (
              <View key={idx} style={s.sourceRow} wrap={false}>
                <Text style={s.sourceNum}>[{idx + 1}]</Text>
                <Text style={s.sourceTitle}>{src.title}{src.url ? `  |  ${src.url}` : ''}</Text>
                <Text style={s.sourceType}>{src.type}</Text>
              </View>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          PAGE: SUCCESS CRITERIA & CLOSING
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>SUCCESS CRITERIA | WHAT JUSTICE LOOKS LIKE</Text>
        </View>

        <Sec n="18" title="What Success Looks Like">
          {data.successCriteria.map((criterion, idx) => (
            <View key={idx} style={s.successRow}>
              <Text style={s.successCheck}>■</Text>
              <Text style={s.successText}>{criterion}</Text>
            </View>
          ))}
        </Sec>

        <View style={s.div} />

        <View style={s.sec}>
          <Text style={{ ...s.body, textAlign: 'center', marginTop: 8 }}>
            This dossier was generated by ArkHive, an investigative journalism platform
            dedicated to accountability, transparency, and truth. The information contained
            herein is compiled from public records, court documents, and verified sources.
          </Text>
          <Text style={{ ...s.body, textAlign: 'center', fontWeight: 'bold', color: c.blood, marginTop: 6 }}>
            Criminal wealth cannot be legitimized through the passage of time,
            philanthropic rebranding, or transfer to the next generation.
          </Text>
          <Text style={{ ...s.body, textAlign: 'center', fontWeight: 'bold', color: c.blood, marginTop: 4 }}>
            Every name is here. Every dollar is traced. Every mechanism is documented.
            Every step is laid out. This is the complete record. Use it.
          </Text>
          <Text style={{ ...s.stepMeta, textAlign: 'center', marginTop: 10 }}>
            arkhive.live | In God We Trust | EST. 2025
          </Text>
        </View>

        <Ft date={genDate} />
      </Page>
    </Document>
  );
}
