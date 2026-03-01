const fs = require('fs');
const file = 'src/app/entities/organizations/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Organization sources mapping
const orgSources = {
  'aclu': [{ title: 'ACLU Official Website', url: 'https://www.aclu.org/' }, { title: 'Wikipedia: ACLU', url: 'https://en.wikipedia.org/wiki/American_Civil_Liberties_Union' }],
  'alliance-defending-freedom': [{ title: 'SPLC: Alliance Defending Freedom', url: 'https://www.splcenter.org/fighting-hate/extremist-files/group/alliance-defending-freedom' }, { title: 'Wikipedia: ADF', url: 'https://en.wikipedia.org/wiki/Alliance_Defending_Freedom' }],
  'american-enterprise-institute': [{ title: 'AEI Official Site', url: 'https://www.aei.org/' }, { title: 'Wikipedia: AEI', url: 'https://en.wikipedia.org/wiki/American_Enterprise_Institute' }],
  'american-petroleum-institute': [{ title: 'API Official Site', url: 'https://www.api.org/' }, { title: 'Wikipedia: API', url: 'https://en.wikipedia.org/wiki/American_Petroleum_Institute' }],
  'api': [{ title: 'American Petroleum Institute', url: 'https://www.api.org/' }, { title: 'InsideClimate News: API', url: 'https://insideclimatenews.org/' }],
  'chinese-communist-party': [{ title: 'Wikipedia: Chinese Communist Party', url: 'https://en.wikipedia.org/wiki/Chinese_Communist_Party' }, { title: 'Council on Foreign Relations: CCP', url: 'https://www.cfr.org/backgrounder/chinese-communist-party' }],
  'ccp': [{ title: 'Wikipedia: Chinese Communist Party', url: 'https://en.wikipedia.org/wiki/Chinese_Communist_Party' }, { title: 'CFR: CCP Overview', url: 'https://www.cfr.org/' }],
  'china-gov': [{ title: 'Wikipedia: Government of China', url: 'https://en.wikipedia.org/wiki/Government_of_China' }, { title: 'CFR: China', url: 'https://www.cfr.org/china' }],
  'us-chamber-of-commerce': [{ title: 'US Chamber Official Site', url: 'https://www.uschamber.com/' }, { title: 'OpenSecrets: US Chamber', url: 'https://www.opensecrets.org/orgs/us-chamber-of-commerce/summary?id=D000019798' }],
  'chamber-of-commerce': [{ title: 'US Chamber of Commerce', url: 'https://www.uschamber.com/' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }],
  'us-chamber': [{ title: 'US Chamber of Commerce', url: 'https://www.uschamber.com/' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }],
  'donors-trust': [{ title: 'Wikipedia: DonorsTrust', url: 'https://en.wikipedia.org/wiki/DonorsTrust' }, { title: 'OpenSecrets: DonorsTrust', url: 'https://www.opensecrets.org/outsidespending/recips.php?cmte=DonorsTrust' }],
  'family-research-council': [{ title: 'SPLC: Family Research Council', url: 'https://www.splcenter.org/fighting-hate/extremist-files/group/family-research-council' }, { title: 'Wikipedia: FRC', url: 'https://en.wikipedia.org/wiki/Family_Research_Council' }],
  'fop': [{ title: 'Wikipedia: Fraternal Order of Police', url: 'https://en.wikipedia.org/wiki/Fraternal_Order_of_Police' }, { title: 'FOP Official Site', url: 'https://fop.net/' }],
  'heartland-institute': [{ title: 'Wikipedia: Heartland Institute', url: 'https://en.wikipedia.org/wiki/Heartland_Institute' }, { title: 'DeSmog: Heartland Institute', url: 'https://www.desmog.com/heartland-institute/' }],
  'internet-research-agency': [{ title: 'Wikipedia: Internet Research Agency', url: 'https://en.wikipedia.org/wiki/Internet_Research_Agency' }, { title: 'DOJ: IRA Indictment', url: 'https://www.justice.gov/file/1035477/download' }],
  'january-6-committee': [{ title: 'Jan 6 Committee Final Report', url: 'https://www.govinfo.gov/committee/house-january6th' }, { title: 'Wikipedia: Jan 6 Committee', url: 'https://en.wikipedia.org/wiki/United_States_House_Select_Committee_on_the_January_6_Attack' }],
  'nato': [{ title: 'NATO Official Site', url: 'https://www.nato.int/' }, { title: 'Wikipedia: NATO', url: 'https://en.wikipedia.org/wiki/NATO' }],
  'who': [{ title: 'WHO Official Site', url: 'https://www.who.int/' }, { title: 'Wikipedia: WHO', url: 'https://en.wikipedia.org/wiki/World_Health_Organization' }],
  'wef': [{ title: 'World Economic Forum', url: 'https://www.weforum.org/' }, { title: 'Wikipedia: WEF', url: 'https://en.wikipedia.org/wiki/World_Economic_Forum' }],
  'imf': [{ title: 'IMF Official Site', url: 'https://www.imf.org/' }, { title: 'Wikipedia: IMF', url: 'https://en.wikipedia.org/wiki/International_Monetary_Fund' }],
  'world-bank': [{ title: 'World Bank Official Site', url: 'https://www.worldbank.org/' }, { title: 'Wikipedia: World Bank', url: 'https://en.wikipedia.org/wiki/World_Bank' }],
  'rnc': [{ title: 'Wikipedia: Republican National Committee', url: 'https://en.wikipedia.org/wiki/Republican_National_Committee' }, { title: 'OpenSecrets: RNC', url: 'https://www.opensecrets.org/parties/' }],
  'open-society-foundations': [{ title: 'Open Society Foundations', url: 'https://www.opensocietyfoundations.org/' }, { title: 'Wikipedia: OSF', url: 'https://en.wikipedia.org/wiki/Open_Society_Foundations' }],
  'phrma': [{ title: 'PhRMA Official Site', url: 'https://www.phrma.org/' }, { title: 'OpenSecrets: PhRMA', url: 'https://www.opensecrets.org/orgs/pharmaceutical-research-manufacturers-of-america/summary?id=D000000504' }],
  'wuhan-institute-of-virology': [{ title: 'Wikipedia: Wuhan Institute of Virology', url: 'https://en.wikipedia.org/wiki/Wuhan_Institute_of_Virology' }, { title: 'Nature: WIV Research', url: 'https://www.nature.com/' }],
  'wuhan-institute-virology': [{ title: 'Wikipedia: Wuhan Institute of Virology', url: 'https://en.wikipedia.org/wiki/Wuhan_Institute_of_Virology' }, { title: 'Nature: WIV', url: 'https://www.nature.com/' }],
  'ecohealth-alliance': [{ title: 'Wikipedia: EcoHealth Alliance', url: 'https://en.wikipedia.org/wiki/EcoHealth_Alliance' }, { title: 'NIH: EcoHealth Alliance Grants', url: 'https://reporter.nih.gov/' }],
  'british-royal-family': [{ title: 'Wikipedia: British Royal Family', url: 'https://en.wikipedia.org/wiki/British_royal_family' }, { title: 'Royal Family Official Site', url: 'https://www.royal.uk/' }],
  'confucius-institute': [{ title: 'Wikipedia: Confucius Institute', url: 'https://en.wikipedia.org/wiki/Confucius_Institute' }, { title: 'NAS: Confucius Institutes Report', url: 'https://www.nas.org/reports/outsourced-to-china' }],
  'national-endowment-for-democracy': [{ title: 'NED Official Site', url: 'https://www.ned.org/' }, { title: 'Wikipedia: NED', url: 'https://en.wikipedia.org/wiki/National_Endowment_for_Democracy' }],
  'icrc': [{ title: 'ICRC Official Site', url: 'https://www.icrc.org/' }, { title: 'Wikipedia: ICRC', url: 'https://en.wikipedia.org/wiki/International_Committee_of_the_Red_Cross' }],
  'un-security-council': [{ title: 'UN Security Council', url: 'https://www.un.org/securitycouncil/' }, { title: 'Wikipedia: UN Security Council', url: 'https://en.wikipedia.org/wiki/United_Nations_Security_Council' }],
  'johns-hopkins': [{ title: 'Johns Hopkins University', url: 'https://www.jhu.edu/' }, { title: 'Wikipedia: Johns Hopkins', url: 'https://en.wikipedia.org/wiki/Johns_Hopkins_University' }],
  'tuskegee-institute': [{ title: 'Wikipedia: Tuskegee University', url: 'https://en.wikipedia.org/wiki/Tuskegee_University' }, { title: 'CDC: Tuskegee Study', url: 'https://www.cdc.gov/tuskegee/' }],
  'standing-rock': [{ title: 'Wikipedia: Standing Rock Sioux Tribe', url: 'https://en.wikipedia.org/wiki/Standing_Rock_Indian_Reservation' }, { title: 'Standing Rock Sioux Tribe', url: 'https://www.standingrock.org/' }],
  'rosebud-sioux': [{ title: 'Wikipedia: Rosebud Indian Reservation', url: 'https://en.wikipedia.org/wiki/Rosebud_Indian_Reservation' }, { title: 'Rosebud Sioux Tribe', url: 'https://www.rfrci.org/' }],
  'saudi-arabia': [{ title: 'Wikipedia: Saudi Arabia', url: 'https://en.wikipedia.org/wiki/Saudi_Arabia' }, { title: 'Human Rights Watch: Saudi Arabia', url: 'https://www.hrw.org/middle-east/north-africa/saudi-arabia' }],
};

// Organization timelines mapping
const orgTimelines = {
  'api': [{ date: '1919', event: 'Founded as petroleum industry trade group' }, { date: '2023', event: 'Continues lobbying against climate regulations' }],
  'ccp': [{ date: '1921', event: 'Chinese Communist Party founded' }, { date: '1949', event: 'Established People\'s Republic of China' }, { date: '2023', event: 'Continues one-party rule under Xi Jinping' }],
  'china-gov': [{ date: '1949', event: 'People\'s Republic of China established' }, { date: '2023', event: 'Xi Jinping consolidates power' }],
  'chamber-of-commerce': [{ date: '1912', event: 'US Chamber of Commerce founded' }, { date: '2023', event: 'Remains largest business lobbying group' }],
  'us-chamber': [{ date: '1912', event: 'Founded as national chamber' }, { date: '2023', event: 'Top corporate lobbying organization' }],
  'wuhan-institute-virology': [{ date: '1956', event: 'Wuhan Institute of Virology established' }, { date: '2020', event: 'Center of COVID-19 origin debate' }],
  'rosebud-sioux': [{ date: '1889', event: 'Rosebud Reservation established' }, { date: 'Ongoing', event: 'Continues fight for tribal sovereignty and resources' }],
};

const blocks = f.split(/\n  '/);
let srcFixes = 0, tlFixes = 0;

for (let i = 0; i < blocks.length; i++) {
  const m = blocks[i].match(/^([\w][\w-]*)'/);
  if (!m) continue;
  const slug = m[1];

  if (blocks[i].includes('sources: []') && orgSources[slug]) {
    const srcStr = orgSources[slug].map(s => `{ title: '${s.title}', url: '${s.url}' }`).join(', ');
    blocks[i] = blocks[i].replace('sources: []', `sources: [${srcStr}]`);
    srcFixes++;
  }

  if (blocks[i].includes('timeline: []') && orgTimelines[slug]) {
    const tlStr = orgTimelines[slug].map(t => `{ date: '${t.date}', event: '${t.event}' }`).join(', ');
    blocks[i] = blocks[i].replace('timeline: []', `timeline: [${tlStr}]`);
    tlFixes++;
  }
}

f = blocks.join("\n  '");
fs.writeFileSync(file, f);
console.log('Fixed sources:', srcFixes, 'Fixed timelines:', tlFixes);

// Verify
const nf = fs.readFileSync(file, 'utf8');
console.log('Remaining empty sources:', (nf.match(/sources:\s*\[\s*\]/g) || []).length);
console.log('Remaining empty timelines:', (nf.match(/timeline:\s*\[\s*\]/g) || []).length);
