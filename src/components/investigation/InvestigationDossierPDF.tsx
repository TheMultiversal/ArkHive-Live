'use client';

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { InvestigationData, Defendant, TimelineEvent, MoneyTransaction, InvestigationAffiliation, InvestigationSource } from '@/data/investigations/types';

/* ================================================================
   COLORS — Print-friendly: black text on white, no color accents.
   ================================================================ */
const c = {
  white: '#ffffff', paper: '#f9f9f9', light: '#f0f0f0',
  text: '#1a1a1a', sub: '#333333', muted: '#666666',
  blood: '#000000', bloodDk: '#1a1a1a', bloodLt: '#333333',
  black: '#000000',
};

const statusColor: Record<string, string> = {
  convicted: '#000000', incarcerated: '#000000', indicted: '#1a1a1a',
  charged: '#1a1a1a', pending: '#333333', settled: '#666666',
  acquitted: '#555555', pardoned: '#333333', appealing: '#444444',
  released: '#555555',
};

/* ================================================================
   STYLES
   ================================================================ */
const s = StyleSheet.create({
  page: { backgroundColor: c.white, padding: 42, paddingTop: 48, paddingBottom: 70, fontFamily: 'Courier', color: c.text },
  wm: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', zIndex: 0 },
  wmImg: { width: 400, height: 400, opacity: 0.08 },
  banner: { backgroundColor: c.black, padding: 8, marginBottom: 14, textAlign: 'center', borderWidth: 1.5, borderColor: c.black },
  bannerText: { fontSize: 7.5, color: c.white, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 'bold' },
  hdr: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: c.blood },
  hdrLeft: { flex: 1 },
  hdrTitle: { fontSize: 20, fontWeight: 'bold', color: c.blood, letterSpacing: 5, marginBottom: 4 },
  hdrSub: { fontSize: 8, color: c.muted, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'bold' },
  seal: { width: 60, height: 60 },
  sec: { marginBottom: 12 },
  secHdr: { flexDirection: 'row', alignItems: 'center', marginBottom: 6, paddingBottom: 4, borderBottomWidth: 1.5, borderBottomColor: c.blood },
  secNum: { fontSize: 7, color: c.blood, letterSpacing: 2, marginRight: 8, fontWeight: 'bold' },
  secTitle: { fontSize: 11, color: c.black, fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' },
  body: { fontSize: 8.5, color: c.text, fontWeight: 'bold', lineHeight: 1.7, marginBottom: 5 },
  bold: { fontSize: 9, color: c.black, fontWeight: 'bold' },
  label: { fontSize: 6.5, color: c.blood, fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 2, marginTop: 4 },
  card: { backgroundColor: c.paper, padding: 8, marginBottom: 5, borderWidth: 0.75, borderColor: '#d0d0d0' },
  cardTitle: { fontSize: 10, color: c.black, fontWeight: 'bold', marginBottom: 2 },
  cardSub: { fontSize: 7.5, color: c.blood, fontWeight: 'bold', marginBottom: 3 },
  cardBody: { fontSize: 7.5, color: c.text, fontWeight: 'bold', lineHeight: 1.6 },
  row: { flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0', paddingVertical: 2 },
  rowLabel: { fontSize: 6.5, color: c.muted, fontWeight: 'bold', width: 80, textTransform: 'uppercase', letterSpacing: 1 },
  rowVal: { fontSize: 7.5, color: c.text, fontWeight: 'bold', flex: 1, lineHeight: 1.6 },
  bRow: { flexDirection: 'row', marginBottom: 2, paddingLeft: 4 },
  bDot: { fontSize: 7.5, color: c.blood, fontWeight: 'bold', marginRight: 5, lineHeight: 1.6 },
  bTxt: { fontSize: 7.5, color: c.text, fontWeight: 'bold', lineHeight: 1.6, flex: 1 },
  statusBadge: { fontSize: 6.5, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase', paddingHorizontal: 4, paddingVertical: 2 },
  tlRow: { flexDirection: 'row', marginBottom: 3, paddingBottom: 3, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' },
  tlDate: { fontSize: 6.5, color: c.blood, width: 65, fontWeight: 'bold' },
  tlEvent: { fontSize: 7.5, color: c.text, fontWeight: 'bold', flex: 1, lineHeight: 1.6 },
  tlType: { fontSize: 5.5, color: c.muted, fontWeight: 'bold', width: 45, textAlign: 'right', textTransform: 'uppercase', letterSpacing: 1 },
  entityCard: { backgroundColor: c.paper, padding: 6, marginBottom: 4, borderWidth: 0.75, borderColor: '#d0d0d0' },
  entityType: { fontSize: 5.5, color: c.blood, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 'bold' },
  entityName: { fontSize: 9, color: c.black, fontWeight: 'bold', marginTop: 1, marginBottom: 2 },
  entityRel: { fontSize: 7, color: c.text, fontWeight: 'bold', lineHeight: 1.5 },
  statuteCard: { backgroundColor: c.paper, padding: 6, marginBottom: 4, borderWidth: 0.75, borderColor: '#d0d0d0' },
  statuteCode: { fontSize: 9, color: c.blood, fontWeight: 'bold', marginBottom: 2 },
  statuteDesc: { fontSize: 7.5, color: c.text, fontWeight: 'bold', lineHeight: 1.6 },
  sourceRow: { flexDirection: 'row', marginBottom: 3, paddingBottom: 3, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' },
  sourceNum: { fontSize: 6.5, color: c.blood, width: 20, fontWeight: 'bold' },
  sourceTitle: { fontSize: 7.5, color: c.text, fontWeight: 'bold', flex: 1, lineHeight: 1.6 },
  sourceType: { fontSize: 5.5, color: c.muted, fontWeight: 'bold', width: 50, textAlign: 'right', textTransform: 'uppercase', letterSpacing: 1 },
  div: { borderBottomWidth: 1, borderBottomColor: c.black, marginVertical: 10, opacity: 0.25 },
  footer: { position: 'absolute', bottom: 32, left: 42, right: 42, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5, borderTopWidth: 0.75, borderTopColor: '#a0a0a0' },
  footerText: { fontSize: 5.5, color: c.muted, fontWeight: 'bold', letterSpacing: 1 },
  pageNum: { fontSize: 5.5, color: c.muted, fontWeight: 'bold' },
  classHdr: { position: 'absolute', top: 28, left: 0, right: 0, textAlign: 'center' },
  classText: { fontSize: 5, color: c.blood, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'bold' },
  tocRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' },
  tocNum: { fontSize: 7.5, color: c.blood, width: 24, fontWeight: 'bold' },
  tocTitle: { fontSize: 8.5, color: c.text, fontWeight: 'bold', flex: 1 },
});


/* ================================================================
   HELPER COMPONENTS
   ================================================================ */

function Wm({ uri }: { uri: string }) {
  if (!uri) return null;
  return <View style={s.wm} fixed><Image src={uri} style={s.wmImg} /></View>;
}

function Cls() {
  const bk = '#000000';
  return (
    <>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} fixed>
        <View style={{ position: 'absolute', top: 6, left: 6, right: 6, bottom: 6, borderWidth: 2.5, borderColor: bk }} />
        <View style={{ position: 'absolute', top: 16, left: 16, right: 16, bottom: 16, borderWidth: 0.75, borderColor: bk }} />
        {/* Corner L-brackets */}
        <View style={{ position: 'absolute', top: 2, left: 2, width: 20, height: 0, borderTopWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', top: 2, left: 2, width: 0, height: 20, borderLeftWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', top: 2, right: 2, width: 20, height: 0, borderTopWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', top: 2, right: 2, width: 0, height: 20, borderRightWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', bottom: 2, left: 2, width: 20, height: 0, borderBottomWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', bottom: 2, left: 2, width: 0, height: 20, borderLeftWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', bottom: 2, right: 2, width: 20, height: 0, borderBottomWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', bottom: 2, right: 2, width: 0, height: 20, borderRightWidth: 3, borderColor: bk }} />
        {/* Corner squares */}
        <View style={{ position: 'absolute', top: 13, left: 13, width: 6, height: 6, backgroundColor: bk }} />
        <View style={{ position: 'absolute', top: 13, right: 13, width: 6, height: 6, backgroundColor: bk }} />
        <View style={{ position: 'absolute', bottom: 13, left: 13, width: 6, height: 6, backgroundColor: bk }} />
        <View style={{ position: 'absolute', bottom: 13, right: 13, width: 6, height: 6, backgroundColor: bk }} />
        {/* Side midpoint diamonds */}
        <View style={{ position: 'absolute', top: 2, left: '50%', marginLeft: -5, width: 10, height: 10, backgroundColor: bk, transform: 'rotate(45deg)' }} />
        <View style={{ position: 'absolute', top: 4, left: '50%', marginLeft: -3, width: 6, height: 6, backgroundColor: '#ffffff', transform: 'rotate(45deg)' }} />
        <View style={{ position: 'absolute', bottom: 2, left: '50%', marginLeft: -5, width: 10, height: 10, backgroundColor: bk, transform: 'rotate(45deg)' }} />
        <View style={{ position: 'absolute', bottom: 4, left: '50%', marginLeft: -3, width: 6, height: 6, backgroundColor: '#ffffff', transform: 'rotate(45deg)' }} />
        <View style={{ position: 'absolute', top: '50%', left: 2, marginTop: -5, width: 10, height: 10, backgroundColor: bk, transform: 'rotate(45deg)' }} />
        <View style={{ position: 'absolute', top: '50%', left: 4, marginTop: -3, width: 6, height: 6, backgroundColor: '#ffffff', transform: 'rotate(45deg)' }} />
        <View style={{ position: 'absolute', top: '50%', right: 2, marginTop: -5, width: 10, height: 10, backgroundColor: bk, transform: 'rotate(45deg)' }} />
        <View style={{ position: 'absolute', top: '50%', right: 4, marginTop: -3, width: 6, height: 6, backgroundColor: '#ffffff', transform: 'rotate(45deg)' }} />
      </View>
      <View style={s.classHdr} fixed>
        <Text style={s.classText}>CONFIDENTIAL | INVESTIGATION DOSSIER | FOR OFFICIAL USE</Text>
      </View>
    </>
  );
}

function Ft({ date }: { date: string }) {
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerText}>ARKHIVE | INVESTIGATION DOSSIER | EST. 2009</Text>
      <Text style={s.footerText}>{date}</Text>
      <Text style={s.pageNum} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function Sec({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <View style={s.sec} minPresenceAhead={120}>
      <View style={s.secHdr} wrap={false}>
        <Text style={s.secNum}>{n}</Text>
        <Text style={s.secTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}


/* ================================================================
   PDF DOCUMENT — Investigation Dossier
   ================================================================ */

interface InvestigationDossierPDFProps {
  investigation: InvestigationData;
  slug: string;
  sealDataUri: string;
}

export default function InvestigationDossierPDF({
  investigation, slug, sealDataUri,
}: InvestigationDossierPDFProps) {
  const genDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const defendants: Defendant[] = investigation.defendants || [];
  const timeline: TimelineEvent[] = investigation.timeline || [];
  const moneyTrailRaw: MoneyTransaction[] = investigation.moneyTrail || [];
  const moneyTrail = [...moneyTrailRaw].sort((a, b) => {
    const parseDate = (d: string) => {
      if (!d) return 0;
      const iso = d.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (iso) return new Date(d).getTime();
      const year = d.match(/^(\d{4})/);
      if (year) return new Date(`${year[1]}-01-01`).getTime();
      return 0;
    };
    return parseDate(a.date) - parseDate(b.date);
  });
  const statutes = investigation.statutes || [];
  const affiliations: InvestigationAffiliation[] = investigation.affiliations || [];
  const sources: InvestigationSource[] = investigation.sources || [];
  const content = investigation.content || [];
  const tags = investigation.tags || [];

  // Group affiliations by type
  const entGroups: Record<string, InvestigationAffiliation[]> = {};
  affiliations.forEach(a => {
    const t = a.type || 'other';
    if (!entGroups[t]) entGroups[t] = [];
    entGroups[t].push(a);
  });

  // Stats
  const stats = [
    { n: defendants.length, l: 'Defendants' },
    { n: statutes.length, l: 'Statutes Violated' },
    { n: moneyTrail.length, l: 'Financial Transactions' },
    { n: affiliations.length, l: 'Entities Involved' },
    { n: timeline.length, l: 'Timeline Events' },
    { n: sources.length, l: 'Sources Cited' },
  ];

  // TOC
  const tocEntries = [
    { n: '01', title: 'EXECUTIVE SUMMARY' },
    { n: '02', title: 'FULL INVESTIGATION NARRATIVE' },
    { n: '03', title: 'ALL NAMED DEFENDANTS' },
    { n: '04', title: 'CHRONOLOGICAL TIMELINE' },
    { n: '05', title: 'FINANCIAL TRAIL (MONEY TRAIL)' },
    { n: '06', title: 'ENTITY NETWORK' },
    { n: '07', title: 'APPLICABLE STATUTES' },
    { n: '08', title: 'SOURCES & CITATIONS' },
    { n: '09', title: 'LEGAL DISCLAIMER & NOTICE' },
  ];

  return (
    <Document>
      {/* ═══════ COVER PAGE ═══════ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            INVESTIGATION DOSSIER | {investigation.severity.toUpperCase()} | CONFIDENTIAL
          </Text>
        </View>

        <View style={s.hdr}>
          <View style={s.hdrLeft}>
            <Text style={s.hdrTitle}>ARKHIVE</Text>
            <Text style={s.hdrSub}>Investigation | Transparency | Truth | Est. 2009</Text>
            <Text style={{ ...s.body, marginTop: 4, fontSize: 7 }}>Generated: {genDate}</Text>
            <Text style={{ ...s.body, fontSize: 7 }}>Classification: CONFIDENTIAL / FOR OFFICIAL USE</Text>
          </View>
          {sealDataUri && <Image src={sealDataUri} style={s.seal} />}
        </View>

        <View style={s.sec}>
          <Text style={{ ...s.secTitle, fontSize: 13, marginBottom: 5 }}>{investigation.title}</Text>
          {investigation.subtitle && <Text style={{ ...s.body, fontStyle: 'italic', marginBottom: 4 }}>{investigation.subtitle}</Text>}
          <Text style={{ ...s.body, fontSize: 7 }}>
            Severity: {investigation.severity.toUpperCase()} | Category: {investigation.category}
            {investigation.eventOriginDate ? ` | Origin: ${investigation.eventOriginDate}` : ''}
            {investigation.lastActivityDate ? ` | Last Activity: ${investigation.lastActivityDate}` : ''}
          </Text>
        </View>

        <View style={s.div} />

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
          {stats.map((stat, idx) => (
            <View key={idx} style={{ width: '33.33%', padding: 4, marginBottom: 3 }}>
              <Text style={{ fontSize: 14, color: c.blood, fontWeight: 'bold' }}>{stat.n}</Text>
              <Text style={{ fontSize: 5, color: c.muted, textTransform: 'uppercase', letterSpacing: 1 }}>{stat.l}</Text>
            </View>
          ))}
        </View>

        {tags.length > 0 && (
          <Text style={{ fontSize: 6, color: c.muted, lineHeight: 1.6 }}>Tags: {tags.join(' | ')}</Text>
        )}

        <Ft date={genDate} />
      </Page>

      {/* ═══════ TABLE OF CONTENTS ═══════ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.sec}>
          <Text style={{ ...s.secTitle, fontSize: 12, marginBottom: 10 }}>TABLE OF CONTENTS</Text>
          {tocEntries.map(e => (
            <View key={e.n} style={s.tocRow}>
              <Text style={s.tocNum}>{e.n}</Text>
              <Text style={s.tocTitle}>{e.title}</Text>
            </View>
          ))}
        </View>
        <Ft date={genDate} />
      </Page>

      {/* ═══════ SEC 01: EXECUTIVE SUMMARY ═══════ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <Sec n="SECTION 01" title="EXECUTIVE SUMMARY">
          <Text style={s.body}>{investigation.summary}</Text>
          <View style={s.div} />
          <View style={s.row}>
            <Text style={s.rowLabel}>Title</Text>
            <Text style={s.rowVal}>{investigation.title}</Text>
          </View>
          <View style={s.row}>
            <Text style={s.rowLabel}>Severity</Text>
            <Text style={s.rowVal}>{investigation.severity.toUpperCase()}</Text>
          </View>
          <View style={s.row}>
            <Text style={s.rowLabel}>Category</Text>
            <Text style={s.rowVal}>{investigation.category}</Text>
          </View>
          <View style={s.row}>
            <Text style={s.rowLabel}>Date</Text>
            <Text style={s.rowVal}>{investigation.date}</Text>
          </View>
          <View style={s.row}>
            <Text style={s.rowLabel}>Defendants</Text>
            <Text style={s.rowVal}>{defendants.length} individuals tracked</Text>
          </View>
          <View style={s.row}>
            <Text style={s.rowLabel}>Entities</Text>
            <Text style={s.rowVal}>{affiliations.length} organizations/agencies linked</Text>
          </View>
        </Sec>
        <Ft date={genDate} />
      </Page>

      {/* ═══════ SEC 02: FULL NARRATIVE ═══════ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <Sec n="SECTION 02" title="FULL INVESTIGATION NARRATIVE">
          {content.map((para, i) => (
            <Text key={i} style={s.body}>{para}</Text>
          ))}
        </Sec>
        <Ft date={genDate} />
      </Page>

      {/* ═══════ SEC 03: ALL DEFENDANTS ═══════ */}
      {defendants.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n="SECTION 03" title="ALL NAMED DEFENDANTS">
            <Text style={{ ...s.body, fontSize: 7, marginBottom: 8 }}>
              {defendants.length} defendants identified and tracked in this investigation.
            </Text>
            {defendants.map((d: Defendant, i: number) => {
              const initials = d.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
              const sc = statusColor[d.status] || c.muted;
              return (
                <View key={i} style={s.card} wrap={false}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                    {d.imageUrl ? (
                      <Image src={d.imageUrl} style={{ width: 32, height: 32, marginRight: 8 }} />
                    ) : (
                      <View style={{ width: 32, height: 32, marginRight: 8, backgroundColor: c.paper, borderWidth: 0.75, borderColor: '#d0d0d0', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: c.blood, fontWeight: 'bold' }}>{initials}</Text>
                      </View>
                    )}
                    <View style={{ flex: 1 }}>
                      <Text style={s.cardTitle}>{d.name}</Text>
                      <Text style={s.cardSub}>{d.role}</Text>
                    </View>
                    <Text style={{ ...s.statusBadge, color: sc }}>{d.status.toUpperCase()}</Text>
                  </View>

                  {d.charges && d.charges.length > 0 && (
                    <>
                      <Text style={s.label}>CHARGES</Text>
                      {d.charges.map((ch, ci) => (
                        <View key={ci} style={s.bRow}>
                          <Text style={s.bDot}>■</Text>
                          <Text style={s.bTxt}>{ch}</Text>
                        </View>
                      ))}
                    </>
                  )}

                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 3 }}>
                    {d.sentence && (
                      <View style={{ width: '50%', marginBottom: 2 }}>
                        <Text style={s.label}>SENTENCE</Text>
                        <Text style={s.cardBody}>{d.sentence}</Text>
                      </View>
                    )}
                    {d.fine && (
                      <View style={{ width: '50%', marginBottom: 2 }}>
                        <Text style={s.label}>FINE</Text>
                        <Text style={s.cardBody}>{d.fine}</Text>
                      </View>
                    )}
                    {d.restitution && (
                      <View style={{ width: '50%', marginBottom: 2 }}>
                        <Text style={s.label}>RESTITUTION</Text>
                        <Text style={s.cardBody}>{d.restitution}</Text>
                      </View>
                    )}
                    {d.indictmentDate && (
                      <View style={{ width: '50%', marginBottom: 2 }}>
                        <Text style={s.label}>INDICTMENT</Text>
                        <Text style={s.cardBody}>{d.indictmentDate}</Text>
                      </View>
                    )}
                    {d.convictionDate && (
                      <View style={{ width: '50%', marginBottom: 2 }}>
                        <Text style={s.label}>CONVICTION</Text>
                        <Text style={s.cardBody}>{d.convictionDate}</Text>
                      </View>
                    )}
                    {d.releaseDate && (
                      <View style={{ width: '50%', marginBottom: 2 }}>
                        <Text style={s.label}>RELEASE</Text>
                        <Text style={s.cardBody}>{d.releaseDate}</Text>
                      </View>
                    )}
                  </View>

                  {d.notes && <Text style={{ ...s.cardBody, fontStyle: 'italic', marginTop: 3 }}>{d.notes}</Text>}
                </View>
              );
            })}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ SEC 04: TIMELINE ═══════ */}
      {timeline.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n="SECTION 04" title="CHRONOLOGICAL TIMELINE">
            <Text style={{ ...s.body, fontSize: 7, marginBottom: 8 }}>
              {timeline.length} documented events in chronological order.
            </Text>
            {timeline.map((ev: TimelineEvent, i: number) => (
              <View key={i} style={s.tlRow} wrap={false}>
                <Text style={s.tlDate}>{ev.date}</Text>
                <Text style={s.tlEvent}>{ev.event}</Text>
                {ev.type && <Text style={s.tlType}>{ev.type}</Text>}
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ SEC 05: MONEY TRAIL ═══════ */}
      {moneyTrail.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n="SECTION 05" title="FINANCIAL TRAIL (MONEY TRAIL)">
            <Text style={{ ...s.body, fontSize: 7, marginBottom: 8 }}>
              {moneyTrail.length} financial transactions documented.
            </Text>
            {moneyTrail.map((tx: MoneyTransaction, i: number) => (
              <View key={i} style={s.card} wrap={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
                  <Text style={{ ...s.bold, fontSize: 9 }}>{tx.amount}</Text>
                  <Text style={{ fontSize: 6, color: c.muted }}>{tx.date}{tx.documented ? ' | DOCUMENTED' : ''}</Text>
                </View>
                <Text style={s.cardBody}>From: {tx.from}</Text>
                <Text style={s.cardBody}>To: {tx.to}</Text>
                <Text style={{ ...s.cardBody, fontStyle: 'italic' }}>{tx.purpose}</Text>
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ SEC 06: ENTITY NETWORK ═══════ */}
      {affiliations.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n="SECTION 06" title="ENTITY NETWORK">
            <Text style={{ ...s.body, fontSize: 7, marginBottom: 8 }}>
              {affiliations.length} entities linked to this investigation.
            </Text>
            {Object.entries(entGroups).map(([type, entities]) => (
              <View key={type} style={{ marginBottom: 8 }}>
                <Text style={{ ...s.label, fontSize: 7, marginBottom: 4 }}>{type.toUpperCase()} ({entities.length})</Text>
                {entities.map((e, i) => (
                  <View key={i} style={s.entityCard} wrap={false}>
                    <Text style={s.entityType}>{e.type}</Text>
                    <Text style={s.entityName}>{e.name}</Text>
                    <Text style={s.entityRel}>{e.relationship}</Text>
                  </View>
                ))}
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ SEC 07: STATUTES ═══════ */}
      {statutes.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n="SECTION 07" title="APPLICABLE STATUTES">
            {statutes.map((st, i) => (
              <View key={i} style={s.statuteCard} wrap={false}>
                <Text style={s.statuteCode}>{st.code}</Text>
                {st.description && <Text style={s.statuteDesc}>{st.description}</Text>}
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ SEC 08: SOURCES ═══════ */}
      {sources.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n="SECTION 08" title="SOURCES & CITATIONS">
            {sources.map((src, i) => (
              <View key={i} style={s.sourceRow} wrap={false}>
                <Text style={s.sourceNum}>[{String(i + 1).padStart(2, '0')}]</Text>
                <Text style={s.sourceTitle}>{src.title}{src.url ? ` — ${src.url}` : ''}</Text>
                <Text style={s.sourceType}>{src.type}</Text>
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ SEC 09: LEGAL DISCLAIMER ═══════ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <Sec n="SECTION 09" title="LEGAL DISCLAIMER & NOTICE">
          <Text style={s.body}>
            This document has been generated by ArkHive, an investigative journalism and accountability platform.
            All information contained herein has been compiled from publicly available sources including court records,
            government filings, news reports, and academic research.
          </Text>
          <Text style={s.body}>
            This dossier is intended for informational purposes only and does not constitute legal advice.
            Individuals referenced herein are entitled to the presumption of innocence unless otherwise
            established by a court of law. Any actions taken based on the contents of this document are
            solely the responsibility of the reader.
          </Text>
          <Text style={s.body}>
            ArkHive makes no warranties, express or implied, regarding the completeness or accuracy of
            the information contained in this document. Readers are encouraged to independently verify
            all claims and consult with qualified legal counsel before taking any action.
          </Text>
          <View style={s.div} />
          <Text style={{ ...s.bold, marginBottom: 4 }}>FAIR USE NOTICE</Text>
          <Text style={s.body}>
            This document may contain copyrighted material whose use has not been specifically authorized
            by the copyright owner. ArkHive makes such material available in the interest of advancing
            public understanding of political, legal, economic, and social issues. This constitutes
            &ldquo;fair use&rdquo; under Title 17, Section 107 of the United States Code.
          </Text>
          <View style={s.div} />
          <View style={{ alignItems: 'center', paddingVertical: 10 }}>
            <Text style={{ ...s.bold, fontSize: 10, marginBottom: 3 }}>ARKHIVE</Text>
            <Text style={{ fontSize: 6, color: c.muted, letterSpacing: 2 }}>ACCOUNTABILITY | TRANSPARENCY | TRUTH</Text>
            <Text style={{ fontSize: 6, color: c.muted, marginTop: 4 }}>Document ID: INV-{slug.toUpperCase()}</Text>
            <Text style={{ fontSize: 6, color: c.muted }}>Generated: {genDate}</Text>
          </View>
        </Sec>
        <Ft date={genDate} />
      </Page>
    </Document>
  );
}
