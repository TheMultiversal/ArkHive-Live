const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// These 3 profiles have no knownAssociates field. We need to add it.
// Insert after the 'controversies: [...],' field.

const additions = {
  'boris-epshteyn': [
    { name: 'Donald Trump', relationship: 'Senior political advisor and campaign attorney', href: '/entities/individuals/donald-trump' },
    { name: 'Evan Corcoran', relationship: 'Fellow Trump legal defense team member', href: '/entities/individuals/evan-corcoran' },
    { name: 'Jeffrey Epstein', relationship: 'Referenced in Epstein file release political discussions', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Keith Schiller', relationship: 'Fellow Trump inner circle member', href: '/entities/individuals/keith-schiller' },
  ],
  'evan-corcoran': [
    { name: 'Donald Trump', relationship: 'Defense attorney in classified documents case', href: '/entities/individuals/donald-trump' },
    { name: 'Boris Epshteyn', relationship: 'Fellow member of Trump legal defense team', href: '/entities/individuals/boris-epshteyn' },
    { name: 'Jeffrey Epstein', relationship: 'Connected via Trump administration discussions on Epstein files', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Maxwell case evidence referenced in political legal circles', href: '/entities/individuals/ghislaine-maxwell' },
  ],
  'lin-wood': [
    { name: 'Donald Trump', relationship: 'Political ally and election fraud claims attorney', href: '/entities/individuals/donald-trump' },
    { name: 'Jeffrey Epstein', relationship: 'Made public claims about Epstein network and Chief Justice Roberts', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Referenced Maxwell connections in conspiratorial claims', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Alan Dershowitz', relationship: 'Public disputes over Epstein-related allegations', href: '/entities/individuals/alan-dershowitz' },
  ],
};

let count = 0;
for (const [slug, associates] of Object.entries(additions)) {
  const profileIdx = content.indexOf("'" + slug + "': {");
  if (profileIdx === -1) {
    console.log('NOT FOUND:', slug);
    continue;
  }
  
  // Find 'charges:' within this profile to insert before it
  const chunk = content.substring(profileIdx, profileIdx + 5000);
  const chargesIdx = chunk.indexOf('    charges:');
  if (chargesIdx === -1) {
    console.log('No charges field for:', slug);
    continue;
  }
  
  const insertPos = profileIdx + chargesIdx;
  const kaStr = '    knownAssociates: [\n' +
    associates.map(a =>
      `      { name: '${a.name}', relationship: '${a.relationship.replace(/'/g, "\\'")}', href: '${a.href}' }`
    ).join(',\n') +
    '\n    ],\n';
  
  content = content.substring(0, insertPos) + kaStr + content.substring(insertPos);
  count++;
  console.log('Added knownAssociates to:', slug, '(+' + associates.length + ')');
}

fs.writeFileSync(filePath, content);
console.log('Done!', count, 'profiles updated.');
