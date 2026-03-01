const fs = require('fs');
let content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
let changes = 0;

const controData = {
  'annie-farmer': [
    'Testified at Ghislaine Maxwell trial that she was groped by Maxwell and Epstein as a teenager at Epstein\'s New Mexico ranch',
    'Filed civil lawsuit against Epstein\'s estate seeking accountability for childhood sexual abuse',
    'Her sister Maria Farmer was the first person to report Epstein to the FBI in 1996 but was ignored',
  ],
  'courtney-wild': [
    'Filed landmark Crime Victims\' Rights Act lawsuit challenging the secret 2008 Epstein plea deal',
    'Was recruited at age 14 from a trailer park and sexually abused by Epstein at his Palm Beach mansion',
    'Her case exposed how Alexander Acosta\'s sweetheart deal violated the rights of over 30 identified victims',
  ],
  'carolyn-andriano': [
    'Testified under pseudonym "Carolyn" at Ghislaine Maxwell\'s trial about being abused starting at age 14',
    'Recruited by Virginia Giuffre to visit Epstein\'s Palm Beach home where she was sexually abused',
    'Described being paid by Epstein for sexual acts and recruiting other underage girls',
  ],
  'joe-recarey': [
    'Lead Palm Beach detective who built the initial case against Epstein identifying over 40 underage victims',
    'His investigation was undermined when federal prosecutors under Acosta secretly negotiated lenient plea deal',
    'Died in 2018 just before the full scope of the Epstein case became public knowledge',
  ],
  'michael-reiter': [
    'Palm Beach Police Chief who pushed for Epstein\'s prosecution despite pressure from high-powered defense attorneys',
    'Referred the case to the FBI after Palm Beach State Attorney Barry Krischer appeared to protect Epstein',
    'Publicly blamed Acosta\'s office for the sweetheart deal that let Epstein avoid serious prison time',
  ],
  'geoffrey-berman': [
    'As SDNY U.S. Attorney, authorized the arrest of Jeffrey Epstein on sex trafficking charges in July 2019',
    'Fired by Attorney General William Barr in 2020 in circumstances Berman described as unprecedented obstruction',
    'Wrote memoir "Holding the Line" describing political interference in SDNY investigations including Epstein case',
  ],
  'audrey-strauss': [
    'Succeeded Geoffrey Berman as Acting SDNY U.S. Attorney; led the prosecution of Ghislaine Maxwell',
    'Announced Maxwell\'s arrest on July 2, 2020, calling her a key enabler of Epstein\'s trafficking scheme',
    'Oversaw the successful federal case resulting in Maxwell\'s conviction on 5 of 6 counts',
  ],
  'juan-alessi': [
    'Former Epstein household manager who testified about daily operations and the constant presence of young girls',
    'Key witness at Maxwell trial describing how he was ordered to clean sex toys and maintain girls\' visits',
    'Testified about a 58-page household manual dictating staff behavior to protect Epstein\'s secrets',
  ],
  'michael-baden': [
    'High-profile forensic pathologist hired by Epstein\'s brother to observe autopsy after Epstein\'s jail death',
    'Publicly stated evidence was more consistent with homicidal strangulation than suicide',
    'His findings contradicted the official ruling by NYC medical examiner of suicide by hanging',
  ],
  'sarah-ransome': [
    'Epstein survivor who was trafficked to his private island at age 22 and attempted escape by swimming',
    'Filed civil lawsuits against Epstein and Maxwell detailing sexual abuse on Little St. James island',
    'Published memoir "Silenced No More" exposing the full extent of abuse on Epstein\'s island',
  ],
  'chauntae-davies': [
    'Former Epstein masseuse who was sexually assaulted after being recruited through legitimate-seeming job offer',
    'Testified about being raped by Epstein and traveling on his private jet with Bill Clinton and others',
    'Became vocal advocate for survivors and critic of powerful figures who associated with Epstein',
  ],
  'teresa-helm': [
    'Epstein survivor recruited as a masseuse who was sexually assaulted at multiple Epstein properties',
    'Filed civil lawsuit describing systematic abuse and manipulation by Epstein and his associates',
    'Advocated for accountability from institutions that enabled Epstein\'s access to victims',
  ],
};

for (const [slug, items] of Object.entries(controData)) {
  const controStr = items.map(item => `      '${item.replace(/'/g, "\\'")}'`).join(',\n');
  
  const oldStr = "'" + slug + "': {";
  const idx = content.indexOf(oldStr);
  if (idx === -1) { console.log('NOT FOUND:', slug); continue; }
  
  const emptyControStr = 'controversies: [\r\n    ]';
  const emptyControStr2 = 'controversies: [\n    ]';
  const nextProfile = content.indexOf("': {", idx + oldStr.length);
  const searchEnd = nextProfile > 0 ? nextProfile : content.length;
  const profileBlock = content.substring(idx, searchEnd);
  
  let controIdx = profileBlock.indexOf(emptyControStr);
  if (controIdx === -1) controIdx = profileBlock.indexOf(emptyControStr2);
  if (controIdx === -1) { console.log('NO EMPTY CONTROVERSIES:', slug); continue; }
  
  const matchLen = profileBlock.indexOf(emptyControStr) >= 0 ? emptyControStr.length : emptyControStr2.length;
  const absoluteIdx = idx + controIdx;
  content = content.substring(0, absoluteIdx) + 
    'controversies: [\n' + controStr + ',\n    ]' + 
    content.substring(absoluteIdx + matchLen);
  changes++;
  console.log('Expanded controversies:', slug);
}

fs.writeFileSync('src/app/entities/individuals/[slug]/page.tsx', content);
console.log('\nTotal changes:', changes);
