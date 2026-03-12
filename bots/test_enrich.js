const { templateEnrichProfile } = require('./worker');
(async ()=>{
  const profile={name:'Test',crimeDossier:[],structuredControversies:[],conspiracies:[]};
  const enriched= await templateEnrichProfile(profile,{slug:'test-profile', type:'individual'});
  console.log('enriched crimeDossier count', enriched.crimeDossier?.length);
  console.log('structuredControversies count', enriched.structuredControversies?.length);
  console.log('conspiracies count', enriched.conspiracies?.length);
  console.log('enriched', JSON.stringify(enriched, null, 2));
})();