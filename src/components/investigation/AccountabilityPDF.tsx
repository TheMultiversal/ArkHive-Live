'use client';

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { AccountabilityData, RoleActionPath } from '@/types/accountability';
import { ACTION_ROLE_LABELS } from '@/types/accountability';

/* ================================================================
   COLORS — Print-friendly: black text on white, blood-red accents.
   No green anywhere.
   ================================================================ */
const c = {
  white: '#ffffff', paper: '#f9f9f9', light: '#f0f0f0',
  text: '#1a1a1a', sub: '#333333', muted: '#666666',
  blood: '#b91c1c', bloodDk: '#7f1d1d', bloodLt: '#dc2626',
  black: '#000000',
};

const statusColor: Record<string, string> = {
  convicted: '#b91c1c', incarcerated: '#991b1b', indicted: '#7f1d1d',
  charged: '#6b1515', pending: '#881337', settled: '#666666',
  acquitted: '#a16207', pardoned: '#9f1239', appealing: '#be123c',
  released: '#92400e',
};

/* ================================================================
   STYLES — Clean print-friendly legal document
   ================================================================ */
const s = StyleSheet.create({
  page: { backgroundColor: c.white, padding: 40, paddingBottom: 55, fontFamily: 'Courier', color: c.text },
  wm: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', zIndex: 0 },
  wmImg: { width: 300, height: 300, opacity: 0.06 },
  banner: { backgroundColor: c.bloodDk, padding: 6, marginBottom: 14, textAlign: 'center' },
  bannerText: { fontSize: 7, color: c.white, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'bold' },
  hdr: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, paddingBottom: 10, borderBottomWidth: 1.5, borderBottomColor: c.blood },
  hdrLeft: { flex: 1 },
  hdrTitle: { fontSize: 18, fontWeight: 'bold', color: c.blood, letterSpacing: 4, marginBottom: 4 },
  hdrSub: { fontSize: 8, color: c.muted, letterSpacing: 2, textTransform: 'uppercase' },
  hdrRole: { fontSize: 10, color: c.sub, letterSpacing: 1, marginTop: 4 },
  seal: { width: 60, height: 60 },
  sec: { marginBottom: 12 },
  secHdr: { flexDirection: 'row', alignItems: 'center', marginBottom: 5, paddingBottom: 3, borderBottomWidth: 1, borderBottomColor: c.blood },
  secNum: { fontSize: 7, color: c.blood, letterSpacing: 2, marginRight: 8, fontWeight: 'bold' },
  secTitle: { fontSize: 11, color: c.black, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase' },
  body: { fontSize: 8, color: c.sub, lineHeight: 1.6, marginBottom: 5 },
  bold: { fontSize: 8, color: c.text, fontWeight: 'bold' },
  label: { fontSize: 6, color: c.blood, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2, marginTop: 4 },
  card: { backgroundColor: c.paper, padding: 8, marginBottom: 5, borderWidth: 0.5, borderColor: '#e0e0e0' },
  cardTitle: { fontSize: 9, color: c.black, fontWeight: 'bold', marginBottom: 2 },
  cardSub: { fontSize: 7, color: c.blood, marginBottom: 3 },
  cardBody: { fontSize: 7, color: c.sub, lineHeight: 1.5 },
  row: { flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0', paddingVertical: 2 },
  rowLabel: { fontSize: 6, color: c.muted, width: 80, textTransform: 'uppercase', letterSpacing: 1 },
  rowVal: { fontSize: 7, color: c.sub, flex: 1, lineHeight: 1.5 },
  bRow: { flexDirection: 'row', marginBottom: 2, paddingLeft: 4 },
  bDot: { fontSize: 7, color: c.blood, marginRight: 5, lineHeight: 1.5 },
  bTxt: { fontSize: 7, color: c.sub, lineHeight: 1.5, flex: 1 },
  step: { marginBottom: 8, paddingLeft: 10, borderLeftWidth: 2, borderLeftColor: c.blood },
  stepNum: { fontSize: 7, color: c.blood, fontWeight: 'bold', letterSpacing: 2, marginBottom: 2 },
  stepTitle: { fontSize: 9, color: c.black, fontWeight: 'bold', marginBottom: 3 },
  stepDesc: { fontSize: 7, color: c.sub, lineHeight: 1.6, marginBottom: 3 },
  stepMeta: { fontSize: 6, color: c.muted, marginTop: 2 },
  tmpl: { backgroundColor: c.paper, padding: 8, marginTop: 4, marginBottom: 4, borderLeftWidth: 2, borderLeftColor: c.blood, borderWidth: 0.5, borderColor: '#e0e0e0' },
  tmplLabel: { fontSize: 6, color: c.blood, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'bold', marginBottom: 3 },
  tmplText: { fontSize: 6, color: c.sub, lineHeight: 1.7 },
  cite: { fontSize: 6, color: c.muted, fontStyle: 'italic', marginTop: 2 },
  badge: { fontSize: 5, color: c.blood, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 'bold', marginTop: 2 },
  appBadge: { fontSize: 5, color: c.blood, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase', paddingHorizontal: 3, paddingVertical: 1, borderWidth: 0.5, borderColor: `${c.blood}60` },
  statusBadge: { fontSize: 6, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase', paddingHorizontal: 4, paddingVertical: 2 },
  tlRow: { flexDirection: 'row', marginBottom: 3, paddingBottom: 3, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' },
  tlDate: { fontSize: 6, color: c.blood, width: 65, fontWeight: 'bold' },
  tlEvent: { fontSize: 7, color: c.sub, flex: 1, lineHeight: 1.5 },
  tlType: { fontSize: 5, color: c.muted, width: 45, textAlign: 'right', textTransform: 'uppercase', letterSpacing: 1 },
  entityCard: { backgroundColor: c.paper, padding: 6, marginBottom: 4, borderWidth: 0.5, borderColor: '#e0e0e0' },
  entityType: { fontSize: 5, color: c.blood, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 'bold' },
  entityName: { fontSize: 8, color: c.black, fontWeight: 'bold', marginTop: 1, marginBottom: 2 },
  entityRel: { fontSize: 6, color: c.sub, lineHeight: 1.4 },
  statuteCard: { backgroundColor: c.paper, padding: 6, marginBottom: 4, borderWidth: 0.5, borderColor: '#e0e0e0' },
  statuteCode: { fontSize: 8, color: c.blood, fontWeight: 'bold', marginBottom: 2 },
  statuteDesc: { fontSize: 7, color: c.sub, lineHeight: 1.5 },
  sourceRow: { flexDirection: 'row', marginBottom: 3, paddingBottom: 3, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' },
  sourceNum: { fontSize: 6, color: c.blood, width: 20, fontWeight: 'bold' },
  sourceTitle: { fontSize: 7, color: c.sub, flex: 1, lineHeight: 1.5 },
  sourceType: { fontSize: 5, color: c.muted, width: 50, textAlign: 'right', textTransform: 'uppercase', letterSpacing: 1 },
  div: { borderBottomWidth: 0.5, borderBottomColor: '#d0d0d0', marginVertical: 8 },
  footer: { position: 'absolute', bottom: 16, left: 40, right: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5, borderTopWidth: 0.5, borderTopColor: '#d0d0d0' },
  footerText: { fontSize: 5, color: c.muted, letterSpacing: 1 },
  pageNum: { fontSize: 5, color: c.muted },
  // Classification header
  classHdr: { position: 'absolute', top: 8, left: 0, right: 0, textAlign: 'center' },
  classText: { fontSize: 5, color: c.blood, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'bold' },
  // TOC
  tocRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' },
  tocNum: { fontSize: 7, color: c.blood, width: 24, fontWeight: 'bold' },
  tocTitle: { fontSize: 8, color: c.sub, flex: 1 },
  tocDots: { fontSize: 7, color: c.muted, flex: 1, textAlign: 'right' },
});


/* ================================================================
   HELPER COMPONENTS
   ================================================================ */

function Wm({ uri }: { uri: string }) {
  if (!uri) return null;
  return <View style={s.wm} fixed><Image src={uri} style={s.wmImg} /></View>;
}

function Cls() {
  return (
    <View style={s.classHdr} fixed>
      <Text style={s.classText}>CONFIDENTIAL | FOR OFFICIAL USE | ACCOUNTABILITY DOSSIER</Text>
    </View>
  );
}

function Ft({ date }: { date: string }) {
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerText}>ARKHIVE | ACCOUNTABILITY DOSSIER | EST. 2009</Text>
      <Text style={s.footerText}>{date}</Text>
      <Text style={s.pageNum} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function Sec({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <View style={s.sec} minPresenceAhead={30}>
      <View style={s.secHdr} wrap={false}>
        <Text style={s.secNum}>{n}</Text>
        <Text style={s.secTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

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
  data, rolePath, investigationTitle, sealDataUri, investigation,
}: AccountabilityPDFProps) {
  const roleLabel = ACTION_ROLE_LABELS[rolePath.role];
  const genDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Investigation data
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

  const mainContent = content.filter((p: string) => !p.startsWith('WHAT YOU CAN DO'));

  const relMechs = data.legalMechanisms.filter(m => rolePath.relevantMechanisms.includes(m.name));
  const addMechs = data.legalMechanisms.filter(m => !rolePath.relevantMechanisms.includes(m.name));

  // Group affiliations by type
  const entGroups: Record<string, Array<{ name: string; type: string; relationship: string }>> = {};
  affiliations.forEach((a: { name: string; type: string; relationship: string }) => {
    const t = a.type || 'other';
    if (!entGroups[t]) entGroups[t] = [];
    entGroups[t].push(a);
  });

  // Stats
  const stats = [
    { n: defendants.length, l: 'Defendants' },
    { n: data.primaryTargets.length, l: 'Primary Targets' },
    { n: data.legalMechanisms.length, l: 'Legal Mechanisms' },
    { n: statutes.length, l: 'Statutes Violated' },
    { n: moneyTrail.length, l: 'Money Trails' },
    { n: affiliations.length, l: 'Entities' },
    { n: timeline.length, l: 'Timeline Events' },
    { n: data.wealthTrace.length, l: 'Wealth Traces' },
    { n: data.authoritiesWithPower.length, l: 'Authorities' },
    { n: rolePath.steps.length, l: 'Action Steps' },
    { n: sources.length, l: 'Sources' },
    { n: data.successCriteria.length, l: 'Success Criteria' },
  ];

  // Build combined targets list: primary targets + all defendants (deduplicated)
  const primaryNames = new Set(data.primaryTargets.map(t => t.name.toLowerCase()));
  const additionalDefendants = defendants.filter(
    (d: { name: string }) => !primaryNames.has(d.name.toLowerCase())
  );

  // TOC entries
  const tocEntries = [
    { n: '01', title: 'EXECUTIVE SUMMARY' },
    { n: '02', title: 'FULL INVESTIGATION NARRATIVE' },
    { n: '03', title: 'PRIMARY ACCOUNTABILITY TARGETS' },
    { n: '04', title: 'ALL NAMED DEFENDANTS' },
    { n: '05', title: 'CHRONOLOGICAL TIMELINE' },
    { n: '06', title: 'FINANCIAL TRAIL (MONEY TRAIL)' },
    { n: '07', title: 'ENTITY NETWORK' },
    { n: '08', title: 'APPLICABLE STATUTES' },
    { n: '09', title: 'STEP-BY-STEP ACTION PLAN' },
    { n: '10', title: 'LEGAL MECHANISMS (ROLE-RELEVANT)' },
    { n: '11', title: 'LEGAL MECHANISMS (ADDITIONAL)' },
    { n: '12', title: 'WEALTH TRACE' },
    { n: '13', title: 'AUTHORITIES WITH POWER TO ACT' },
    { n: '14', title: 'SOURCES & CITATIONS' },
    { n: '15', title: 'SUCCESS CRITERIA' },
    { n: '16', title: 'DOCUMENT CERTIFICATION' },
  ];

  return (
    <Document>
      {/* ============================================================
          COVER PAGE
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            COURT-READY ACCOUNTABILITY DOSSIER | {roleLabel.toUpperCase()} | CONFIDENTIAL
          </Text>
        </View>

        <View style={s.hdr}>
          <View style={s.hdrLeft}>
            <Text style={s.hdrTitle}>ARKHIVE</Text>
            <Text style={s.hdrSub}>Accountability | Transparency | Truth | Est. 2009</Text>
            <Text style={s.hdrRole}>Prepared for: {roleLabel}</Text>
            <Text style={{ ...s.stepMeta, marginTop: 4 }}>Generated: {genDate}</Text>
            <Text style={{ ...s.stepMeta, marginTop: 2 }}>Classification: CONFIDENTIAL / FOR OFFICIAL USE</Text>
          </View>
          {sealDataUri && <Image src={sealDataUri} style={s.seal} />}
        </View>

        <View style={s.sec}>
          <Text style={{ ...s.secTitle, fontSize: 13, marginBottom: 5 }}>{investigationTitle}</Text>
          {subtitle ? <Text style={{ ...s.body, fontStyle: 'italic', marginBottom: 4 }}>{subtitle}</Text> : null}
          <Text style={{ ...s.body, fontSize: 7 }}>
            Severity: {severity.toUpperCase()} | Category: {category}
            {eventOriginDate ? ` | Origin: ${eventOriginDate}` : ''}
            {lastActivityDate ? ` | Last Activity: ${lastActivityDate}` : ''}
          </Text>
        </View>

        <View style={s.div} />

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
          {stats.map((stat, idx) => (
            <View key={idx} style={{ width: '25%', padding: 4, marginBottom: 3 }}>
              <Text style={{ fontSize: 14, color: c.blood, fontWeight: 'bold' }}>{stat.n}</Text>
              <Text style={{ fontSize: 5, color: c.muted, textTransform: 'uppercase', letterSpacing: 1 }}>{stat.l}</Text>
            </View>
          ))}
        </View>

        {tags.length > 0 && (
          <Text style={{ fontSize: 6, color: c.muted, lineHeight: 1.6 }}>Tags: {tags.join(' | ')}</Text>
        )}

        <View style={s.div} />

        <Text style={{ ...s.body, fontSize: 7, textAlign: 'center', color: c.blood, fontWeight: 'bold' }}>
          This dossier contains every defendant, every transaction, every statute, every entity,
          every timeline event, every accountability target, every legal mechanism, every family
          connection, every action step, and every source. Nothing has been omitted.
        </Text>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          TABLE OF CONTENTS
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>TABLE OF CONTENTS</Text>
        </View>

        <View style={s.sec}>
          {tocEntries.map((entry, idx) => (
            <View key={idx} style={s.tocRow}>
              <Text style={s.tocNum}>{entry.n}</Text>
              <Text style={s.tocTitle}>{entry.title}</Text>
            </View>
          ))}
        </View>

        <View style={s.div} />

        <View style={{ marginTop: 10 }} wrap={false}>
          <Text style={s.label}>DOCUMENT SCOPE</Text>
          <Text style={{ ...s.body, fontSize: 7, marginTop: 4 }}>
            This document is a comprehensive accountability dossier compiled from public records,
            court documents, SEC filings, congressional testimony, FOIA documents, and investigative
            journalism. It includes {defendants.length} named defendants with full conviction records,
            {' '}{data.primaryTargets.length} primary accountability targets with detailed paths to justice,
            {' '}{timeline.length} chronological events, {moneyTrail.length} documented financial transactions,
            {' '}{affiliations.length} connected entities, {statutes.length} applicable statutes,
            {' '}{data.legalMechanisms.length} legal mechanisms, {data.wealthTrace.length} wealth traces,
            {' '}{data.authoritiesWithPower.length} authorities with power to act, and {sources.length} evidentiary sources.
          </Text>
        </View>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          01: EXECUTIVE SUMMARY
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>SECTION 01 | EXECUTIVE SUMMARY</Text>
        </View>

        <Sec n="01" title="What Happened">
          <Text style={s.body}>{data.crimeSummary}</Text>
        </Sec>

        <Sec n="01.1" title="Scale of Harm">
          <View style={s.row} wrap={false}>
            <Text style={s.rowLabel}>Total Harm</Text>
            <Text style={s.rowVal}>{data.totalHarm}</Text>
          </View>
          <View style={s.row} wrap={false}>
            <Text style={s.rowLabel}>Victims</Text>
            <Text style={s.rowVal}>{data.victimsAffected}</Text>
          </View>
        </Sec>

        {summary ? (
          <Sec n="01.2" title="Investigation Summary">
            <Text style={s.body}>{summary}</Text>
          </Sec>
        ) : null}

        <Sec n="01.3" title={`Your Role: ${roleLabel}`}>
          <Text style={s.body}>{rolePath.overview}</Text>
          <View style={s.bRow} wrap={false}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>Urgency: {rolePath.urgency.toUpperCase()}</Text></View>
          <View style={s.bRow} wrap={false}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>Action Steps: {rolePath.steps.length}</Text></View>
          <View style={s.bRow} wrap={false}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>Relevant Mechanisms: {rolePath.relevantMechanisms.join(', ')}</Text></View>
        </Sec>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          02: FULL NARRATIVE
          ============================================================ */}
      {mainContent.length > 0 && (
        <Page size="A4" style={s.page}>
          <Cls />
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>SECTION 02 | INVESTIGATION NARRATIVE</Text>
          </View>

          <Sec n="02" title="Full Investigation Narrative">
            {mainContent.map((para: string, idx: number) => (
              <View key={idx} wrap={false} style={{ marginBottom: 8 }}>
                <Text style={s.body}>{para}</Text>
              </View>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          03: PRIMARY ACCOUNTABILITY TARGETS (all 9+)
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            SECTION 03 | PRIMARY TARGETS | {data.primaryTargets.length} INDIVIDUALS AND ENTITIES
          </Text>
        </View>

        <Sec n="03" title="Primary Accountability Targets">
          {data.primaryTargets.map((target, idx) => (
            <View key={idx} style={s.card} wrap={false}>
              <Text style={{ ...s.cardTitle, fontSize: 10 }}>{target.name}</Text>
              <Text style={s.cardSub}>{target.role}</Text>

              <Text style={s.label}>Current Status</Text>
              <Text style={{ ...s.body, fontSize: 7, marginBottom: 3 }}>{target.currentStatus}</Text>

              <Text style={s.label}>Accountability Path</Text>
              <Text style={{ ...s.body, fontSize: 7, marginBottom: 3 }}>{target.accountabilityPath}</Text>

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
          04: ALL DEFENDANTS (full register)
          ============================================================ */}
      {defendants.length > 0 && (
        <Page size="A4" style={s.page}>
          <Cls />
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>
              SECTION 04 | DEFENDANTS REGISTER | {defendants.length} NAMED PARTIES
            </Text>
          </View>

          <Sec n="04" title="All Named Defendants">
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
                  <View style={s.row}><Text style={s.rowLabel}>Charges</Text><Text style={s.rowVal}>{d.charges.join('; ')}</Text></View>
                )}
                {d.sentence && (
                  <View style={s.row}><Text style={s.rowLabel}>Sentence</Text><Text style={s.rowVal}>{d.sentence}</Text></View>
                )}
                {d.fine && (
                  <View style={s.row}><Text style={s.rowLabel}>Fine</Text><Text style={s.rowVal}>{d.fine}</Text></View>
                )}
                {d.restitution && (
                  <View style={s.row}><Text style={s.rowLabel}>Restitution</Text><Text style={s.rowVal}>{d.restitution}</Text></View>
                )}
                {d.indictmentDate && (
                  <View style={s.row}><Text style={s.rowLabel}>Indicted</Text><Text style={s.rowVal}>{d.indictmentDate}</Text></View>
                )}
                {d.convictionDate && (
                  <View style={s.row}><Text style={s.rowLabel}>Convicted</Text><Text style={s.rowVal}>{d.convictionDate}</Text></View>
                )}
                {d.releaseDate && (
                  <View style={s.row}><Text style={s.rowLabel}>Released</Text><Text style={s.rowVal}>{d.releaseDate}</Text></View>
                )}
                {d.pardonDate && (
                  <View style={s.row}><Text style={s.rowLabel}>Pardoned</Text><Text style={s.rowVal}>{d.pardonDate}{d.pardonedBy ? ` (by ${d.pardonedBy})` : ''}</Text></View>
                )}
                {d.appealStatus && (
                  <View style={s.row}><Text style={s.rowLabel}>Appeal</Text><Text style={s.rowVal}>{d.appealStatus.toUpperCase()}</Text></View>
                )}
                {d.notes && (
                  <Text style={{ ...s.cardBody, marginTop: 3, fontStyle: 'italic' }}>{d.notes}</Text>
                )}
              </View>
            ))}
          </Sec>

          {/* Cross-reference: defendants that are also primary targets */}
          <View wrap={false} style={{ marginTop: 6 }}>
            <Text style={s.label}>CROSS-REFERENCE: DEFENDANTS WHO ARE PRIMARY ACCOUNTABILITY TARGETS</Text>
            {data.primaryTargets.map((t, i) => (
              <View key={i} style={s.bRow}>
                <Text style={s.bDot}>▸</Text>
                <Text style={s.bTxt}>{t.name}</Text>
              </View>
            ))}
          </View>

          {/* Family members referenced */}
          <View wrap={false} style={{ marginTop: 8 }}>
            <Text style={s.label}>FAMILY MEMBERS AND BENEFICIARIES IDENTIFIED IN RECORD</Text>
            {data.wealthTrace.map((w, i) => (
              <View key={i} style={s.bRow}>
                <Text style={s.bDot}>▸</Text>
                <Text style={s.bTxt}>{w.name} ({w.relationship})</Text>
              </View>
            ))}
          </View>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          05: TIMELINE
          ============================================================ */}
      {timeline.length > 0 && (
        <Page size="A4" style={s.page}>
          <Cls />
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>SECTION 05 | TIMELINE | {timeline.length} EVENTS</Text>
          </View>

          <Sec n="05" title="Chronological Timeline">
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
          06: MONEY TRAIL
          ============================================================ */}
      {moneyTrail.length > 0 && (
        <Page size="A4" style={s.page}>
          <Cls />
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>SECTION 06 | FINANCIAL TRAIL | {moneyTrail.length} TRANSACTIONS</Text>
          </View>

          <Sec n="06" title="Money Trail">
            {moneyTrail.map((tx: {
              date: string; from: string; to: string;
              amount: string; purpose: string; documented: boolean;
            }, idx: number) => (
              <View key={idx} style={s.card} wrap={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                  <Text style={{ fontSize: 7, color: c.blood, fontWeight: 'bold' }}>{tx.date}</Text>
                  <Text style={{ fontSize: 8, color: c.bloodLt, fontWeight: 'bold' }}>{tx.amount}</Text>
                </View>
                <Text style={{ fontSize: 7, color: c.text, marginBottom: 2 }}>
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
          07: ENTITY NETWORK
          ============================================================ */}
      {affiliations.length > 0 && (
        <Page size="A4" style={s.page}>
          <Cls />
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>SECTION 07 | ENTITY NETWORK | {affiliations.length} ENTITIES</Text>
          </View>

          <Sec n="07" title="All Connected Entities">
            {Object.entries(entGroups).map(([type, entities]) => (
              <View key={type} style={{ marginBottom: 6 }}>
                <Text style={{ ...s.label, fontSize: 7, marginBottom: 3, marginTop: 5 }}>
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
          08: STATUTES
          ============================================================ */}
      {statutes.length > 0 && (
        <Page size="A4" style={s.page}>
          <Cls />
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>SECTION 08 | STATUTES | {statutes.length} LAWS VIOLATED</Text>
          </View>

          <Sec n="08" title="Applicable Statutes and Legal Authorities">
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
          09: ACTION STEPS
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>SECTION 09 | ACTION PLAN | {roleLabel.toUpperCase()} | {rolePath.steps.length} STEPS</Text>
        </View>

        <Sec n="09" title="Step-by-Step Action Plan">
          {rolePath.steps.map((step) => (
            <View key={step.step} style={s.step} wrap={false}>
              <Text style={s.stepNum}>STEP {String(step.step).padStart(2, '0')}</Text>
              <Text style={s.stepTitle}>{step.title}</Text>
              <Text style={s.stepDesc}>{step.description}</Text>

              {step.filingTarget && (
                <View style={s.bRow}><Text style={s.bDot}>▸</Text><Text style={s.bTxt}>File with: {step.filingTarget}</Text></View>
              )}
              {step.requirements?.map((req, ri) => (
                <View key={ri} style={s.bRow}><Text style={s.bDot}>▸</Text><Text style={s.bTxt}>{req}</Text></View>
              ))}
              {step.legalBasis && step.legalBasis.length > 0 && (
                <Text style={s.cite}>Legal basis: {step.legalBasis.join('; ')}</Text>
              )}
              {step.estimatedTime && <Text style={s.stepMeta}>Estimated time: {step.estimatedTime}</Text>}

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
          10: LEGAL MECHANISMS (RELEVANT)
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>SECTION 10 | LEGAL MECHANISMS | ROLE-RELEVANT | {relMechs.length}</Text>
        </View>

        <Sec n="10" title="Legal Mechanisms for Your Role">
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
                    <View key={ai} style={s.bRow}><Text style={s.bDot}>▸</Text><Text style={s.bTxt}>{actor}</Text></View>
                  ))}
                </>
              )}
              {mech.notes && <Text style={{ ...s.cardBody, marginTop: 3, fontStyle: 'italic' }}>Case Note: {mech.notes}</Text>}
            </View>
          ))}
        </Sec>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          11: LEGAL MECHANISMS (ADDITIONAL)
          ============================================================ */}
      {addMechs.length > 0 && (
        <Page size="A4" style={s.page}>
          <Cls />
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>SECTION 11 | LEGAL MECHANISMS | ADDITIONAL | {addMechs.length}</Text>
          </View>

          <Sec n="11" title="Additional Legal Mechanisms">
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
                      <View key={ai} style={s.bRow}><Text style={s.bDot}>▸</Text><Text style={s.bTxt}>{actor}</Text></View>
                    ))}
                  </>
                )}
                {mech.notes && <Text style={{ ...s.cardBody, marginTop: 3, fontStyle: 'italic' }}>Case Note: {mech.notes}</Text>}
              </View>
            ))}
          </Sec>

          <Ft date={genDate} />
        </Page>
      )}

      {/* ============================================================
          12: WEALTH TRACE
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>SECTION 12 | WEALTH TRACE | {data.wealthTrace.length} ASSET HOLDERS</Text>
        </View>

        <Sec n="12" title="Where the Money Is Now">
          {data.wealthTrace.map((entry, idx) => (
            <View key={idx} style={s.card} wrap={false}>
              <Text style={{ ...s.cardTitle, fontSize: 9 }}>{entry.name}</Text>
              {entry.estimatedValue && (
                <Text style={{ fontSize: 8, color: c.blood, fontWeight: 'bold', marginBottom: 3 }}>{entry.estimatedValue}</Text>
              )}
              <View style={s.row}><Text style={s.rowLabel}>Relationship</Text><Text style={s.rowVal}>{entry.relationship}</Text></View>
              <View style={s.row}><Text style={s.rowLabel}>Transfer</Text><Text style={s.rowVal}>{entry.transferMethod}</Text></View>
              {entry.legalEntities && entry.legalEntities.length > 0 && (
                <View style={s.row}><Text style={s.rowLabel}>Entities</Text><Text style={s.rowVal}>{entry.legalEntities.join(', ')}</Text></View>
              )}
              <View style={s.row}><Text style={s.rowLabel}>Recovery</Text><Text style={s.rowVal}>{entry.recoveryMechanisms.join(', ')}</Text></View>
            </View>
          ))}
        </Sec>

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          13: AUTHORITIES
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>SECTION 13 | AUTHORITIES | {data.authoritiesWithPower.length} OFFICIALS</Text>
        </View>

        <Sec n="13" title="Authorities With Power to Act">
          {data.authoritiesWithPower.map((auth, idx) => (
            <View key={idx} style={s.card} wrap={false}>
              <Text style={{ ...s.bold, fontSize: 9, color: c.black }}>{auth.name}</Text>
              <Text style={{ ...s.stepMeta, marginBottom: 3 }}>{auth.title} | {auth.jurisdiction}</Text>
              <Text style={s.label}>Powers</Text>
              {auth.powers.map((power, pi) => (
                <View key={pi} style={s.bRow}><Text style={s.bDot}>▸</Text><Text style={s.bTxt}>{power}</Text></View>
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
          14: SOURCES
          ============================================================ */}
      {sources.length > 0 && (
        <Page size="A4" style={s.page}>
          <Cls />
          <Wm uri={sealDataUri} />
          <View style={s.banner}>
            <Text style={s.bannerText}>SECTION 14 | SOURCES | {sources.length} REFERENCES</Text>
          </View>

          <Sec n="14" title="Evidentiary Sources">
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
          15: SUCCESS CRITERIA
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>SECTION 15 | SUCCESS CRITERIA</Text>
        </View>

        <Sec n="15" title="What Justice Looks Like">
          {data.successCriteria.map((criterion, idx) => (
            <View key={idx} style={{ ...s.bRow, marginBottom: 3 }} wrap={false}>
              <Text style={{ ...s.bDot, color: c.blood }}>■</Text>
              <Text style={{ ...s.bTxt, fontSize: 8 }}>{criterion}</Text>
            </View>
          ))}
        </Sec>

        <View style={s.div} />

        {/* Comprehensive defendant-to-target cross-reference */}
        {additionalDefendants.length > 0 && (
          <Sec n="15.1" title="Defendants Not Yet Primary Targets">
            <Text style={{ ...s.body, fontSize: 7, marginBottom: 6 }}>
              The following {additionalDefendants.length} defendants are documented in the record but are not
              currently designated as primary accountability targets. Each warrants further investigation
              for potential accountability action.
            </Text>
            {additionalDefendants.map((d: { name: string; role: string; status: string }, idx: number) => (
              <View key={idx} style={s.bRow} wrap={false}>
                <Text style={s.bDot}>▸</Text>
                <Text style={s.bTxt}>{d.name} ({d.status}) ; {d.role}</Text>
              </View>
            ))}
          </Sec>
        )}

        <Ft date={genDate} />
      </Page>

      {/* ============================================================
          16: CERTIFICATION & CLOSING
          ============================================================ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>SECTION 16 | DOCUMENT CERTIFICATION</Text>
        </View>

        <Sec n="16" title="Certification of Completeness">
          <View wrap={false} style={{ marginBottom: 10 }}>
            <Text style={s.body}>
              This dossier was compiled by ArkHive, an investigative journalism and accountability
              platform established in 2009, dedicated to accountability, transparency, and truth.
              The information contained herein is compiled from public records, court documents,
              SEC enforcement actions, congressional testimony, FOIA documents, and verified
              investigative journalism sources.
            </Text>
          </View>

          <View wrap={false} style={{ marginBottom: 10 }}>
            <Text style={s.label}>DOCUMENT CONTENTS CERTIFICATION</Text>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{defendants.length} defendants with full conviction records, charges, sentences, fines, and pardon status</Text></View>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{data.primaryTargets.length} primary accountability targets with paths to justice and obstacle analysis</Text></View>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{timeline.length} chronological events documenting the full scope of criminal activity</Text></View>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{moneyTrail.length} documented financial transactions tracing the flow of criminal proceeds</Text></View>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{affiliations.length} connected entities including agencies, corporations, and individuals</Text></View>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{statutes.length} applicable statutes and legal authorities</Text></View>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{data.legalMechanisms.length} legal mechanisms with statute of limitations and heir-reachability analysis</Text></View>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{data.wealthTrace.length} wealth trace entries with recovery mechanism recommendations</Text></View>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{data.authoritiesWithPower.length} authorities identified with specific powers and jurisdiction</Text></View>
            <View style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{sources.length} evidentiary sources with citations</Text></View>
          </View>
        </Sec>

        <View style={s.div} />

        <View wrap={false}>
          <Text style={{ ...s.body, textAlign: 'center', fontWeight: 'bold', color: c.blood, marginTop: 6 }}>
            Criminal wealth cannot be legitimized through the passage of time,
            philanthropic rebranding, or transfer to the next generation.
          </Text>
          <Text style={{ ...s.body, textAlign: 'center', fontWeight: 'bold', color: c.blood, marginTop: 4 }}>
            Every name is here. Every dollar is traced. Every mechanism is documented.
            Every step is laid out. This is the complete record. Use it.
          </Text>
        </View>

        <View style={s.div} />

        <View wrap={false} style={{ marginTop: 8, padding: 10, backgroundColor: c.paper, borderWidth: 0.5, borderColor: '#e0e0e0' }}>
          <Text style={{ fontSize: 6, color: c.muted, textAlign: 'center', marginBottom: 4 }}>
            DOCUMENT CONTROL
          </Text>
          <View style={{ ...s.row, borderBottomColor: '#e0e0e0' }}>
            <Text style={s.rowLabel}>Platform</Text>
            <Text style={s.rowVal}>ArkHive (arkhive.live)</Text>
          </View>
          <View style={{ ...s.row, borderBottomColor: '#e0e0e0' }}>
            <Text style={s.rowLabel}>Established</Text>
            <Text style={s.rowVal}>2009</Text>
          </View>
          <View style={{ ...s.row, borderBottomColor: '#e0e0e0' }}>
            <Text style={s.rowLabel}>Generated</Text>
            <Text style={s.rowVal}>{genDate}</Text>
          </View>
          <View style={{ ...s.row, borderBottomColor: '#e0e0e0' }}>
            <Text style={s.rowLabel}>Role</Text>
            <Text style={s.rowVal}>{roleLabel}</Text>
          </View>
          <View style={{ ...s.row, borderBottomColor: '#e0e0e0' }}>
            <Text style={s.rowLabel}>Investigation</Text>
            <Text style={s.rowVal}>{investigationTitle}</Text>
          </View>
          <View style={s.row}>
            <Text style={s.rowLabel}>Classification</Text>
            <Text style={s.rowVal}>CONFIDENTIAL / FOR OFFICIAL USE</Text>
          </View>
        </View>

        <Text style={{ ...s.stepMeta, textAlign: 'center', marginTop: 12 }}>
          arkhive.live | In God We Trust | EST. 2009
        </Text>

        <Ft date={genDate} />
      </Page>
    </Document>
  );
}
