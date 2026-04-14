'use client';

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { IndividualProfile } from '@/data/individuals/types';

/* ================================================================
   COLORS — Print-friendly: black text on white, no color accents.
   ================================================================ */
const c = {
  white: '#ffffff', paper: '#f9f9f9', light: '#f0f0f0',
  text: '#1a1a1a', sub: '#333333', muted: '#666666',
  blood: '#000000', bloodDk: '#1a1a1a', bloodLt: '#333333',
  black: '#000000',
};

const riskColor: Record<string, string> = {
  critical: '#000000', high: '#1a1a1a', medium: '#333333', low: '#555555',
};

const evidenceColor: Record<string, string> = {
  confirmed: '#000000', strong: '#1a1a1a', circumstantial: '#333333', alleged: '#555555',
  documented: '#000000', 'highly-probable': '#1a1a1a', probable: '#333333', speculative: '#555555',
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
  rowLabel: { fontSize: 6.5, color: c.muted, fontWeight: 'bold', width: 90, textTransform: 'uppercase', letterSpacing: 1 },
  rowVal: { fontSize: 7.5, color: c.text, fontWeight: 'bold', flex: 1, lineHeight: 1.6 },
  bRow: { flexDirection: 'row', marginBottom: 2, paddingLeft: 4 },
  bDot: { fontSize: 7.5, color: c.blood, fontWeight: 'bold', marginRight: 5, lineHeight: 1.6 },
  bTxt: { fontSize: 7.5, color: c.text, fontWeight: 'bold', lineHeight: 1.6, flex: 1 },
  statusBadge: { fontSize: 6.5, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase', paddingHorizontal: 4, paddingVertical: 2 },
  tlRow: { flexDirection: 'row', marginBottom: 3, paddingBottom: 3, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' },
  tlDate: { fontSize: 6.5, color: c.blood, width: 65, fontWeight: 'bold' },
  tlEvent: { fontSize: 7.5, color: c.text, fontWeight: 'bold', flex: 1, lineHeight: 1.6 },
  sourceRow: { flexDirection: 'row', marginBottom: 3, paddingBottom: 3, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' },
  sourceNum: { fontSize: 6.5, color: c.blood, width: 20, fontWeight: 'bold' },
  sourceTitle: { fontSize: 7.5, color: c.text, fontWeight: 'bold', flex: 1, lineHeight: 1.6 },
  div: { borderBottomWidth: 1, borderBottomColor: c.black, marginVertical: 10, opacity: 0.25 },
  footer: { position: 'absolute', bottom: 32, left: 42, right: 42, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5, borderTopWidth: 0.75, borderTopColor: '#a0a0a0' },
  footerText: { fontSize: 5.5, color: c.muted, fontWeight: 'bold', letterSpacing: 1 },
  pageNum: { fontSize: 5.5, color: c.muted, fontWeight: 'bold' },
  classHdr: { position: 'absolute', top: 28, left: 0, right: 0, textAlign: 'center' },
  classText: { fontSize: 5, color: c.blood, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'bold' },
  tocRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0' },
  tocNum: { fontSize: 7.5, color: c.blood, width: 24, fontWeight: 'bold' },
  tocTitle: { fontSize: 8.5, color: c.text, fontWeight: 'bold', flex: 1 },
  photo: { width: 56, height: 56, marginRight: 10 },
  photoBox: { width: 56, height: 56, marginRight: 10, backgroundColor: c.paper, borderWidth: 0.75, borderColor: '#d0d0d0', justifyContent: 'center', alignItems: 'center' },
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
        <View style={{ position: 'absolute', top: 2, left: 2, width: 20, height: 0, borderTopWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', top: 2, left: 2, width: 0, height: 20, borderLeftWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', top: 2, right: 2, width: 20, height: 0, borderTopWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', top: 2, right: 2, width: 0, height: 20, borderRightWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', bottom: 2, left: 2, width: 20, height: 0, borderBottomWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', bottom: 2, left: 2, width: 0, height: 20, borderLeftWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', bottom: 2, right: 2, width: 20, height: 0, borderBottomWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', bottom: 2, right: 2, width: 0, height: 20, borderRightWidth: 3, borderColor: bk }} />
        <View style={{ position: 'absolute', top: 13, left: 13, width: 6, height: 6, backgroundColor: bk }} />
        <View style={{ position: 'absolute', top: 13, right: 13, width: 6, height: 6, backgroundColor: bk }} />
        <View style={{ position: 'absolute', bottom: 13, left: 13, width: 6, height: 6, backgroundColor: bk }} />
        <View style={{ position: 'absolute', bottom: 13, right: 13, width: 6, height: 6, backgroundColor: bk }} />
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
        <Text style={s.classText}>CONFIDENTIAL | INDIVIDUAL PROFILE DOSSIER | FOR OFFICIAL USE</Text>
      </View>
    </>
  );
}

function Ft({ date }: { date: string }) {
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerText}>ARKHIVE | INDIVIDUAL DOSSIER | EST. 2009</Text>
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
   PDF DOCUMENT — Individual Profile Dossier
   ================================================================ */

interface IndividualDossierPDFProps {
  individual: IndividualProfile;
  slug: string;
  sealDataUri: string;
  photoDataUri?: string;
}

export default function IndividualDossierPDF({
  individual, slug, sealDataUri, photoDataUri,
}: IndividualDossierPDFProps) {
  const genDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const initials = individual.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const risk = individual.riskLevel || 'medium';

  // Build TOC dynamically based on available data
  const tocEntries: { n: string; title: string }[] = [];
  let secNum = 1;
  const nextSec = () => String(secNum++).padStart(2, '0');

  tocEntries.push({ n: nextSec(), title: 'SUBJECT OVERVIEW' });
  if (individual.bio || individual.description) tocEntries.push({ n: nextSec(), title: 'BIOGRAPHY & BACKGROUND' });
  if (individual.affiliations?.length) tocEntries.push({ n: nextSec(), title: 'AFFILIATIONS & ASSOCIATIONS' });
  if (individual.crimeDossier?.length) tocEntries.push({ n: nextSec(), title: 'CRIMINAL DOSSIER' });
  if (individual.charges?.length) tocEntries.push({ n: nextSec(), title: 'CHARGES & LEGAL STATUS' });
  if (individual.structuredControversies?.length) tocEntries.push({ n: nextSec(), title: 'DOCUMENTED CONTROVERSIES' });
  if (individual.conspiracies?.length) tocEntries.push({ n: nextSec(), title: 'CONSPIRACY ANALYSIS' });
  if (individual.legalActions?.length) tocEntries.push({ n: nextSec(), title: 'LEGAL ACTIONS' });
  if (individual.timeline?.length) tocEntries.push({ n: nextSec(), title: 'CHRONOLOGICAL TIMELINE' });
  if (individual.knownAssociates?.length) tocEntries.push({ n: nextSec(), title: 'KNOWN ASSOCIATES' });
  if (individual.familyMembers?.length) tocEntries.push({ n: nextSec(), title: 'FAMILY CONNECTIONS' });
  if (individual.assetFreezes?.length) tocEntries.push({ n: nextSec(), title: 'ASSET FREEZES & SEIZURES' });
  if (individual.whistleblowerTestimonies?.length) tocEntries.push({ n: nextSec(), title: 'WHISTLEBLOWER TESTIMONIES' });
  if (individual.whereIsTheMoneyNow?.length || individual.financialInfo || individual.corporateHoldings?.length) tocEntries.push({ n: nextSec(), title: 'WHERE IS THE MONEY NOW' });
  if (individual.sources?.length) tocEntries.push({ n: nextSec(), title: 'SOURCES & CITATIONS' });
  tocEntries.push({ n: nextSec(), title: 'LEGAL DISCLAIMER & NOTICE' });

  // Reset counter for actual sections
  let renderSec = 0;
  const ns = () => `SECTION ${String(++renderSec).padStart(2, '0')}`;

  // Stats for cover page
  const stats = [
    { n: individual.crimeDossier?.length || 0, l: 'Crime Categories' },
    { n: individual.charges?.length || 0, l: 'Charges Filed' },
    { n: individual.affiliations?.length || 0, l: 'Affiliations' },
    { n: individual.structuredControversies?.length || 0, l: 'Controversies' },
    { n: individual.legalActions?.length || 0, l: 'Legal Actions' },
    { n: individual.timeline?.length || 0, l: 'Timeline Events' },
    { n: individual.knownAssociates?.length || 0, l: 'Known Associates' },
    { n: individual.sources?.length || 0, l: 'Sources Cited' },
  ].filter(st => st.n > 0);

  return (
    <Document>
      {/* ═══════ COVER PAGE ═══════ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <View style={s.banner}>
          <Text style={s.bannerText}>
            INDIVIDUAL PROFILE DOSSIER | RISK LEVEL: {risk.toUpperCase()} | CONFIDENTIAL
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

        {/* Subject banner with photo or initials */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12, paddingBottom: 10, borderBottomWidth: 1.5, borderBottomColor: c.blood }}>
          {photoDataUri ? (
            <Image src={photoDataUri} style={{ width: 72, height: 72, marginRight: 12 }} />
          ) : (
            <View style={{ width: 72, height: 72, marginRight: 12, backgroundColor: c.paper, borderWidth: 0.75, borderColor: '#d0d0d0', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 22, color: c.blood, fontWeight: 'bold' }}>{initials}</Text>
            </View>
          )}
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, color: c.black, fontWeight: 'bold', letterSpacing: 2, marginBottom: 2 }}>{individual.name}</Text>
            {individual.title && <Text style={{ fontSize: 9, color: c.sub, fontWeight: 'bold' }}>{individual.title}</Text>}
            {individual.role && <Text style={{ fontSize: 8, color: c.muted, fontWeight: 'bold', marginTop: 1 }}>{individual.role}</Text>}
            <Text style={{ ...s.statusBadge, marginTop: 4, color: riskColor[risk] || c.muted }}>
              RISK: {risk.toUpperCase()}
            </Text>
          </View>
        </View>

        {stats.length > 0 && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
            {stats.map((stat, idx) => (
              <View key={idx} style={{ width: '25%', padding: 4, marginBottom: 3 }}>
                <Text style={{ fontSize: 14, color: c.blood, fontWeight: 'bold' }}>{stat.n}</Text>
                <Text style={{ fontSize: 5, color: c.muted, textTransform: 'uppercase', letterSpacing: 1 }}>{stat.l}</Text>
              </View>
            ))}
          </View>
        )}

        {individual.aliases?.length ? (
          <Text style={{ fontSize: 6, color: c.muted, lineHeight: 1.6, marginBottom: 3 }}>Aliases: {individual.aliases.join(' | ')}</Text>
        ) : null}

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

      {/* ═══════ SUBJECT OVERVIEW ═══════ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <Sec n={ns()} title="SUBJECT OVERVIEW">
          <View style={s.row}><Text style={s.rowLabel}>Name</Text><Text style={s.rowVal}>{individual.name}</Text></View>
          {individual.title && <View style={s.row}><Text style={s.rowLabel}>Title</Text><Text style={s.rowVal}>{individual.title}</Text></View>}
          {individual.role && <View style={s.row}><Text style={s.rowLabel}>Role</Text><Text style={s.rowVal}>{individual.role}</Text></View>}
          {individual.status && <View style={s.row}><Text style={s.rowLabel}>Status</Text><Text style={s.rowVal}>{individual.status}</Text></View>}
          {individual.riskLevel && <View style={s.row}><Text style={s.rowLabel}>Risk Level</Text><Text style={s.rowVal}>{individual.riskLevel.toUpperCase()}</Text></View>}
          {individual.birthDate && <View style={s.row}><Text style={s.rowLabel}>Birth Date</Text><Text style={s.rowVal}>{individual.birthDate}</Text></View>}
          {individual.birthPlace && <View style={s.row}><Text style={s.rowLabel}>Birth Place</Text><Text style={s.rowVal}>{individual.birthPlace}</Text></View>}
          {individual.deathDate && <View style={s.row}><Text style={s.rowLabel}>Death Date</Text><Text style={s.rowVal}>{individual.deathDate}</Text></View>}
          {individual.nationality && <View style={s.row}><Text style={s.rowLabel}>Nationality</Text><Text style={s.rowVal}>{individual.nationality}</Text></View>}
          {individual.lastKnownLocation && <View style={s.row}><Text style={s.rowLabel}>Location</Text><Text style={s.rowVal}>{individual.lastKnownLocation}</Text></View>}
          {individual.netWorth && <View style={s.row}><Text style={s.rowLabel}>Net Worth</Text><Text style={s.rowVal}>{individual.netWorth}</Text></View>}
          {individual.totalEstimatedDamages && <View style={s.row}><Text style={s.rowLabel}>Est. Damages</Text><Text style={s.rowVal}>{individual.totalEstimatedDamages}</Text></View>}
          {individual.totalAffectedVictims && <View style={s.row}><Text style={s.rowLabel}>Victims</Text><Text style={s.rowVal}>{individual.totalAffectedVictims}</Text></View>}
          {individual.education?.length ? (
            <>
              <Text style={s.label}>EDUCATION</Text>
              {individual.education.map((edu, i) => (
                <View key={i} style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{edu}</Text></View>
              ))}
            </>
          ) : null}
          {individual.residences?.length ? (
            <>
              <Text style={s.label}>KNOWN RESIDENCES</Text>
              {individual.residences.map((r, i) => (
                <View key={i} style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{r}</Text></View>
              ))}
            </>
          ) : null}
        </Sec>
        <Ft date={genDate} />
      </Page>

      {/* ═══════ BIOGRAPHY ═══════ */}
      {(individual.bio || individual.description) && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="BIOGRAPHY & BACKGROUND">
            {individual.description && <Text style={s.body}>{individual.description}</Text>}
            {individual.bio && individual.bio !== individual.description && <Text style={s.body}>{individual.bio}</Text>}
            {individual.background && <Text style={s.body}>{individual.background}</Text>}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ AFFILIATIONS ═══════ */}
      {individual.affiliations && individual.affiliations.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="AFFILIATIONS & ASSOCIATIONS">
            <Text style={{ ...s.body, fontSize: 7, marginBottom: 8 }}>
              {individual.affiliations.length} organizational affiliations documented.
            </Text>
            {individual.affiliations.map((aff, i) => (
              <View key={i} style={s.card} wrap={false}>
                <Text style={{ fontSize: 5.5, color: c.blood, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 'bold' }}>{'type' in aff ? aff.type : 'affiliated'}</Text>
                <Text style={s.cardTitle}>{aff.name}</Text>
                <Text style={s.cardBody}>{'role' in aff ? aff.role : aff.relationship}</Text>
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ CRIMINAL DOSSIER ═══════ */}
      {individual.crimeDossier && individual.crimeDossier.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="CRIMINAL DOSSIER">
            <Text style={{ ...s.body, fontSize: 7, marginBottom: 8 }}>
              {individual.crimeDossier.length} distinct crime categories documented.
            </Text>
            {individual.crimeDossier.map((crime, i) => (
              <View key={i} style={{ ...s.card, marginBottom: 8 }} wrap={false}>
                <Text style={{ ...s.cardTitle, fontSize: 11, marginBottom: 4 }}>{crime.category}</Text>

                {crime.statutesBroken.length > 0 && (
                  <>
                    <Text style={s.label}>STATUTES BROKEN</Text>
                    {crime.statutesBroken.map((st, si) => (
                      <View key={si} style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{st}</Text></View>
                    ))}
                  </>
                )}

                <Text style={s.label}>NARRATIVE</Text>
                <Text style={{ ...s.cardBody, lineHeight: 1.7 }}>
                  {crime.detailedNarrative.length > 1500 ? crime.detailedNarrative.slice(0, 1500) + '...' : crime.detailedNarrative}
                </Text>

                {crime.specificCharges.length > 0 && (
                  <>
                    <Text style={s.label}>SPECIFIC CHARGES</Text>
                    {crime.specificCharges.map((ch, ci) => (
                      <View key={ci} style={s.bRow}>
                        <Text style={s.bDot}>■</Text>
                        <Text style={s.bTxt}>{ch.charge} — Penalty: {ch.penalty}</Text>
                      </View>
                    ))}
                  </>
                )}

                {crime.immediateActions.length > 0 && (
                  <>
                    <Text style={s.label}>REQUIRED ACTIONS</Text>
                    {crime.immediateActions.map((act, ai) => (
                      <View key={ai} style={s.bRow}><Text style={s.bDot}>▸</Text><Text style={s.bTxt}>{act}</Text></View>
                    ))}
                  </>
                )}
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ CHARGES ═══════ */}
      {individual.charges && individual.charges.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="CHARGES & LEGAL STATUS">
            {individual.charges.map((charge, i) => {
              const text = typeof charge === 'string'
                ? charge
                : 'charge' in charge ? charge.charge
                : 'statute' in charge ? `${charge.statute}: ${charge.description}`
                : charge.description;
              const status = typeof charge !== 'string' && 'status' in charge ? charge.status : undefined;
              return (
                <View key={i} style={s.bRow} wrap={false}>
                  <Text style={s.bDot}>■</Text>
                  <Text style={s.bTxt}>{text}{status ? ` [${status}]` : ''}</Text>
                </View>
              );
            })}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ STRUCTURED CONTROVERSIES ═══════ */}
      {individual.structuredControversies && individual.structuredControversies.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="DOCUMENTED CONTROVERSIES">
            {individual.structuredControversies.map((ctrl, i) => (
              <View key={i} style={s.card} wrap={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
                  <Text style={s.cardTitle}>{ctrl.title}</Text>
                  <Text style={{ ...s.statusBadge, color: evidenceColor[ctrl.evidenceStrength] || c.muted }}>
                    {ctrl.evidenceStrength.toUpperCase()}
                  </Text>
                </View>
                <Text style={s.cardBody}>{ctrl.summary}</Text>
                {ctrl.dateRange && <Text style={{ fontSize: 6, color: c.muted, marginTop: 2 }}>{ctrl.dateRange}</Text>}
                {ctrl.keyFacts.length > 0 && (
                  <>
                    <Text style={s.label}>KEY FACTS</Text>
                    {ctrl.keyFacts.map((f, fi) => (
                      <View key={fi} style={s.bRow}><Text style={s.bDot}>■</Text><Text style={s.bTxt}>{f}</Text></View>
                    ))}
                  </>
                )}
                {ctrl.outcome && (
                  <><Text style={s.label}>OUTCOME</Text><Text style={s.cardBody}>{ctrl.outcome}</Text></>
                )}
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ CONSPIRACIES ═══════ */}
      {individual.conspiracies && individual.conspiracies.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="CONSPIRACY ANALYSIS">
            {individual.conspiracies.map((con, i) => (
              <View key={i} style={s.card} wrap={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
                  <Text style={s.cardTitle}>{con.title}</Text>
                  <Text style={{ ...s.statusBadge, color: evidenceColor[con.plausibility] || c.muted }}>
                    {con.plausibility.toUpperCase()}
                  </Text>
                </View>
                <Text style={s.cardBody}>{con.summary}</Text>
                {con.evidenceChain.length > 0 && (
                  <>
                    <Text style={s.label}>EVIDENCE CHAIN</Text>
                    {con.evidenceChain.map((e, ei) => (
                      <View key={ei} style={s.bRow}><Text style={s.bDot}>▸</Text><Text style={s.bTxt}>{e}</Text></View>
                    ))}
                  </>
                )}
                {con.unansweredQuestions?.length ? (
                  <>
                    <Text style={s.label}>UNANSWERED QUESTIONS</Text>
                    {con.unansweredQuestions.map((q, qi) => (
                      <View key={qi} style={s.bRow}><Text style={s.bDot}>?</Text><Text style={s.bTxt}>{q}</Text></View>
                    ))}
                  </>
                ) : null}
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ LEGAL ACTIONS ═══════ */}
      {individual.legalActions && individual.legalActions.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="LEGAL ACTIONS">
            {individual.legalActions.map((la, i) => (
              <View key={i} style={s.card} wrap={false}>
                <Text style={s.cardTitle}>{la.description}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 2 }}>
                  {la.caseNumber && <View style={{ width: '50%' }}><Text style={s.label}>CASE NO.</Text><Text style={s.cardBody}>{la.caseNumber}</Text></View>}
                  {la.court && <View style={{ width: '50%' }}><Text style={s.label}>COURT</Text><Text style={s.cardBody}>{la.court}</Text></View>}
                  {la.jurisdiction && <View style={{ width: '50%' }}><Text style={s.label}>JURISDICTION</Text><Text style={s.cardBody}>{la.jurisdiction}</Text></View>}
                  {la.date && <View style={{ width: '50%' }}><Text style={s.label}>DATE</Text><Text style={s.cardBody}>{la.date}</Text></View>}
                  {la.status && <View style={{ width: '50%' }}><Text style={s.label}>STATUS</Text><Text style={s.cardBody}>{la.status.toUpperCase()}</Text></View>}
                  {la.amount && <View style={{ width: '50%' }}><Text style={s.label}>AMOUNT</Text><Text style={s.cardBody}>{la.amount}</Text></View>}
                </View>
                {la.outcome && <><Text style={s.label}>OUTCOME</Text><Text style={s.cardBody}>{la.outcome}</Text></>}
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ TIMELINE ═══════ */}
      {individual.timeline && individual.timeline.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="CHRONOLOGICAL TIMELINE">
            {individual.timeline.map((ev, i) => (
              <View key={i} style={s.tlRow} wrap={false}>
                <Text style={s.tlDate}>{ev.date}</Text>
                <Text style={s.tlEvent}>{ev.event}</Text>
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ KNOWN ASSOCIATES ═══════ */}
      {individual.knownAssociates && individual.knownAssociates.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="KNOWN ASSOCIATES">
            {individual.knownAssociates.map((assoc, i) => (
              <View key={i} style={s.card} wrap={false}>
                <Text style={s.cardTitle}>{assoc.name}</Text>
                <Text style={s.cardBody}>{assoc.relationship}</Text>
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ FAMILY ═══════ */}
      {individual.familyMembers && individual.familyMembers.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="FAMILY CONNECTIONS">
            {individual.familyMembers.map((fm, i) => (
              <View key={i} style={s.card} wrap={false}>
                <Text style={s.cardTitle}>{fm.name}</Text>
                <Text style={s.cardSub}>{fm.relationship}</Text>
                {fm.involvement && <Text style={s.cardBody}>{fm.involvement}</Text>}
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ ASSET FREEZES ═══════ */}
      {individual.assetFreezes && individual.assetFreezes.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="ASSET FREEZES & SEIZURES">
            {individual.assetFreezes.map((af, i) => (
              <View key={i} style={s.card} wrap={false}>
                <Text style={s.cardTitle}>{af.description}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 2 }}>
                  {af.date && <View style={{ width: '33%' }}><Text style={s.label}>DATE</Text><Text style={s.cardBody}>{af.date}</Text></View>}
                  {af.amount && <View style={{ width: '33%' }}><Text style={s.label}>AMOUNT</Text><Text style={s.cardBody}>{af.amount}</Text></View>}
                  {af.status && <View style={{ width: '33%' }}><Text style={s.label}>STATUS</Text><Text style={s.cardBody}>{af.status.toUpperCase()}</Text></View>}
                </View>
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ WHISTLEBLOWER TESTIMONIES ═══════ */}
      {individual.whistleblowerTestimonies && individual.whistleblowerTestimonies.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="WHISTLEBLOWER TESTIMONIES">
            {individual.whistleblowerTestimonies.map((wt, i) => (
              <View key={i} style={s.card} wrap={false}>
                <Text style={s.cardBody}>{wt.summary}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 2 }}>
                  {wt.date && <View style={{ width: '33%' }}><Text style={s.label}>DATE</Text><Text style={s.cardBody}>{wt.date}</Text></View>}
                  {wt.source && <View style={{ width: '33%' }}><Text style={s.label}>SOURCE</Text><Text style={s.cardBody}>{wt.source}</Text></View>}
                  {wt.protectedIdentity !== undefined && (
                    <View style={{ width: '33%' }}><Text style={s.label}>PROTECTED</Text><Text style={s.cardBody}>{wt.protectedIdentity ? 'YES' : 'NO'}</Text></View>
                  )}
                </View>
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ WHERE IS THE MONEY NOW ═══════ */}
      {(individual.whereIsTheMoneyNow?.length || individual.financialInfo || individual.corporateHoldings?.length) && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="WHERE IS THE MONEY NOW">
            {individual.netWorth && (
              <View style={{ marginBottom: 8 }}>
                <Text style={s.label}>CURRENT NET WORTH</Text>
                <Text style={{ ...s.bold, fontSize: 12 }}>{individual.netWorth}</Text>
              </View>
            )}
            {individual.financialInfo && (
              <View style={{ marginBottom: 8 }}>
                <Text style={s.label}>FINANCIAL PROFILE</Text>
                <Text style={s.body}>{individual.financialInfo}</Text>
              </View>
            )}
            {individual.corporateHoldings && individual.corporateHoldings.length > 0 && (
              <View style={{ marginBottom: 8 }}>
                <Text style={s.label}>CORPORATE HOLDINGS</Text>
                {individual.corporateHoldings.map((h, i) => (
                  <View key={i} style={s.bRow}>
                    <Text style={s.bDot}>■</Text>
                    <Text style={s.bTxt}>{h.name} — {h.role}</Text>
                  </View>
                ))}
              </View>
            )}
            {individual.whereIsTheMoneyNow && individual.whereIsTheMoneyNow.map((entry, i) => {
              const statusLabels: Record<string, string> = { paid: 'PAID', partial: 'PARTIAL', unpaid: 'UNPAID', evaded: 'EVADED', unknown: 'UNKNOWN' };
              return (
                <View key={i} style={s.card} wrap={false}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
                    <Text style={{ ...s.bold, fontSize: 9 }}>{entry.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      {entry.restitutionStatus && (
                        <Text style={{ ...s.statusBadge, color: entry.restitutionStatus === 'evaded' ? '#000000' : c.muted, marginRight: 6 }}>
                          {statusLabels[entry.restitutionStatus] || 'UNKNOWN'}
                        </Text>
                      )}
                      {entry.estimatedValue && <Text style={{ fontSize: 8, color: c.blood, fontWeight: 'bold' }}>{entry.estimatedValue}</Text>}
                    </View>
                  </View>
                  <Text style={{ ...s.cardBody, marginBottom: 2 }}>{entry.relationship}</Text>
                  <Text style={s.label}>TRANSFER METHOD</Text>
                  <Text style={{ ...s.cardBody, fontStyle: 'italic' }}>{entry.transferMethod}</Text>
                  {(entry.orderedAmount || entry.collectedAmount) && (
                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                      {entry.orderedAmount && (
                        <View style={{ width: '50%' }}>
                          <Text style={s.label}>ORDERED</Text>
                          <Text style={s.cardBody}>{entry.orderedAmount}</Text>
                        </View>
                      )}
                      {entry.collectedAmount && (
                        <View style={{ width: '50%' }}>
                          <Text style={s.label}>COLLECTED</Text>
                          <Text style={s.cardBody}>{entry.collectedAmount}</Text>
                        </View>
                      )}
                    </View>
                  )}
                  {entry.legalEntities && entry.legalEntities.length > 0 && (
                    <>
                      <Text style={s.label}>LEGAL ENTITIES</Text>
                      {entry.legalEntities.map((le, li) => (
                        <View key={li} style={s.bRow}>
                          <Text style={s.bDot}>■</Text>
                          <Text style={s.bTxt}>{le}</Text>
                        </View>
                      ))}
                    </>
                  )}
                  {entry.recoveryMechanisms && entry.recoveryMechanisms.length > 0 && (
                    <>
                      <Text style={s.label}>RECOVERY MECHANISMS</Text>
                      {entry.recoveryMechanisms.map((rm, ri) => (
                        <View key={ri} style={s.bRow}>
                          <Text style={s.bDot}>■</Text>
                          <Text style={s.bTxt}>{rm}</Text>
                        </View>
                      ))}
                    </>
                  )}
                </View>
              );
            })}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ SOURCES ═══════ */}
      {individual.sources && individual.sources.length > 0 && (
        <Page size="A4" style={s.page} wrap>
          <Cls />
          <Wm uri={sealDataUri} />
          <Sec n={ns()} title="SOURCES & CITATIONS">
            {individual.sources.map((src, i) => (
              <View key={i} style={s.sourceRow} wrap={false}>
                <Text style={s.sourceNum}>[{String(i + 1).padStart(2, '0')}]</Text>
                <Text style={s.sourceTitle}>
                  {typeof src === 'string' ? src : `${src.title}${src.url ? ` — ${src.url}` : ''}${src.date ? ` (${src.date})` : ''}`}
                </Text>
              </View>
            ))}
          </Sec>
          <Ft date={genDate} />
        </Page>
      )}

      {/* ═══════ LEGAL DISCLAIMER ═══════ */}
      <Page size="A4" style={s.page}>
        <Cls />
        <Wm uri={sealDataUri} />
        <Sec n={ns()} title="LEGAL DISCLAIMER & NOTICE">
          <Text style={s.body}>
            This document has been generated by ArkHive, an investigative journalism and accountability platform.
            All information contained herein has been compiled from publicly available sources including court records,
            government filings, news reports, and academic research.
          </Text>
          <Text style={s.body}>
            This dossier is intended for informational purposes only and does not constitute legal advice.
            The individual referenced herein is entitled to the presumption of innocence unless otherwise
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
            fair use under Title 17, Section 107 of the United States Code.
          </Text>
          <View style={s.div} />
          <View style={{ alignItems: 'center', paddingVertical: 10 }}>
            <Text style={{ ...s.bold, fontSize: 10, marginBottom: 3 }}>ARKHIVE</Text>
            <Text style={{ fontSize: 6, color: c.muted, letterSpacing: 2 }}>ACCOUNTABILITY | TRANSPARENCY | TRUTH</Text>
            <Text style={{ fontSize: 6, color: c.muted, marginTop: 4 }}>Document ID: IND-{slug.toUpperCase()}</Text>
            <Text style={{ fontSize: 6, color: c.muted }}>Generated: {genDate}</Text>
          </View>
        </Sec>
        <Ft date={genDate} />
      </Page>
    </Document>
  );
}
