const inv = require('./src/data/investigations');
const ids = Object.keys(inv);
console.log('investigation count', ids.length);
console.log(ids.slice(0,20));
