import type { AccountabilityData } from '@/types/accountability';
import { insiderTradingAccountability } from './1980s-insider-trading';
import { oneMdbAccountability } from './1mdb-scandal';
import { financialCrisis2008Accountability } from './2008-financial-crisis';
import { electionInterference2016Accountability } from './2016-election';
import { electionOverturnAccountability } from './2020-election-overturn';
import { accessHollywoodAccountability } from './access-hollywood';
import { ahmaudArberyAccountability } from './ahmaud-arbery-murder';
import { aidsCrisisAccountability } from './aids-crisis';
import { aigBailoutAccountability } from './aig-bailout-scandal';
import { alaskaAirlines1282Accountability } from './alaska-airlines-1282';
import { antisemiticViolenceAccountability } from './antisemitic-violence';
import { armsTraffickingAccountability } from './arms-trafficking';
import { auroraShootingAccountability } from './aurora-shooting';
import { bankingCorruptionAccountability } from './banking-corruption';
import { bearStearnsAccountability } from './bear-stearns-2008-collapse';
import { bhopalAccountability } from './bhopal-disaster';
import { bigTobaccoAccountability } from './big-tobacco-lies';
import { billCosbyAccountability } from './bill-cosby-sexual-assault';
import { blackwaterAccountability } from './blackwater-massacre';
import { boeingCriminalEnterpriseAccountability } from './boeing-criminal-enterprise';
import { boeingSafetyAccountability } from './boeing-safety-crisis';
import { bothamJeanAccountability } from './botham-jean-murder';
import { briberyCorrruptionAccountability } from './bribery-corruption';
import { buffaloMassacreAccountability } from './buffalo-massacre';
import { buildTheWallFraudAccountability } from './build-the-wall-fraud';
import { cambridgeAnalyticaAccountability } from './cambridge-analytica-global-operations';
import { campaignFinanceAccountability } from './campaign-finance';
import { catholicChurchAccountability } from './catholic-church-abuse';
import { centralParkFiveAccountability } from './central-park-five';
import { charlestonMassacreAccountability } from './charleston-massacre';
import { chicagoPolTortureAccountability } from './chicago-police-torture';
import { childExploitationAccountability } from './child-exploitation';
import { ciaTortureAccountability } from './cia-torture';
import { civilRightsAccountability } from './civil-rights';
import { civilRightsRollbacksAccountability } from './civil-rights-rollbacks';
import { climateDenialAccountability } from './climate-denial';
import { coffeeCountyAccountability } from './coffee-county';
import { cointelproAccountability } from './cointelpro-domestic-surveillance-legacy';
import { columbiaHcaFraudAccountability } from './columbia-hca-fraud';
import { comeyFiringAccountability } from './comey-firing';
import { covidMisinfoAccountability } from './covid-misinfo';
import { crowNetworkAccountability } from './crow-network';
import { cryptoFraudAccountability } from './crypto-exchange-fraud-ecosystem';
import { enronFraudAccountability } from './enron-fraud';
import { financialCrisisAccountability } from './financial-crisis-accountability-failure';
import { georgeFloydAccountability } from './george-floyd';
import { hushMoneyAccountability } from './hush-money';
import { iranContraAccountability } from './iran-contra-full-financial-trail';
import { iraqSanctionsAccountability } from './iraq-sanctions';
import { liborScandalAccountability } from './libor-scandal';
import { mkultraCiaHumanExperimentationAccountability } from './mkultra-cia-human-experimentation';
import { myLaiMassacreAccountability } from './my-lai-massacre';
import { nsaMassSurveillanceAccountability } from './nsa-mass-surveillance';
import { opioidCrisisAccountability } from './opioid-crisis-corporate-mass-murder';
import { pandemicProfiteeringAccountability } from './pandemic-profiteering-covid-corruption';
import { policeBrutalityAccountability } from './police-brutality';
import { russianInterferenceAccountability } from './russian-interference';
import { scotusCorruptionAccountability } from './scotus-corruption';
import { trumpOrgAccountability } from './trump-org-fraud';
import { tuskegeeExperimentAccountability } from './tuskegee-experiment';
import { wallStreetBailoutAccountability } from './wall-street-bailout';
import { warOnDrugsAccountability } from './war-on-drugs';
import { watergateAccountability } from './watergate';
import { wellsFargoAccountability } from './wells-fargo-fraud';
import { whiteSupremacistViolenceAccountability } from './white-supremacist-violence';

const accountabilityDatabase: Record<string, AccountabilityData> = {
  '1980s-insider-trading': insiderTradingAccountability,
  '1mdb-scandal': oneMdbAccountability,
  '2008-financial-crisis': financialCrisis2008Accountability,
  '2016-election': electionInterference2016Accountability,
  '2020-election-overturn': electionOverturnAccountability,
  'access-hollywood': accessHollywoodAccountability,
  'ahmaud-arbery-murder': ahmaudArberyAccountability,
  'aids-crisis': aidsCrisisAccountability,
  'aig-bailout-scandal': aigBailoutAccountability,
  'alaska-airlines-1282': alaskaAirlines1282Accountability,
  'antisemitic-violence': antisemiticViolenceAccountability,
  'arms-trafficking': armsTraffickingAccountability,
  'aurora-shooting': auroraShootingAccountability,
  'banking-corruption': bankingCorruptionAccountability,
  'bear-stearns-2008-collapse': bearStearnsAccountability,
  'bhopal-disaster': bhopalAccountability,
  'big-tobacco-lies': bigTobaccoAccountability,
  'bill-cosby-sexual-assault': billCosbyAccountability,
  'blackwater-massacre': blackwaterAccountability,
  'boeing-criminal-enterprise': boeingCriminalEnterpriseAccountability,
  'boeing-safety-crisis': boeingSafetyAccountability,
  'botham-jean-murder': bothamJeanAccountability,
  'bribery-corruption': briberyCorrruptionAccountability,
  'buffalo-massacre': buffaloMassacreAccountability,
  'build-the-wall-fraud': buildTheWallFraudAccountability,
  'cambridge-analytica-global-operations': cambridgeAnalyticaAccountability,
  'campaign-finance': campaignFinanceAccountability,
  'catholic-church-abuse': catholicChurchAccountability,
  'central-park-five': centralParkFiveAccountability,
  'charleston-massacre': charlestonMassacreAccountability,
  'chicago-police-torture': chicagoPolTortureAccountability,
  'child-exploitation': childExploitationAccountability,
  'cia-torture-program': ciaTortureAccountability,
  'civil-rights': civilRightsAccountability,
  'civil-rights-rollbacks': civilRightsRollbacksAccountability,
  'climate-denial': climateDenialAccountability,
  'coffee-county': coffeeCountyAccountability,
  'cointelpro-domestic-surveillance-legacy': cointelproAccountability,
  'columbia-hca-fraud': columbiaHcaFraudAccountability,
  'comey-firing': comeyFiringAccountability,
  'covid-misinfo': covidMisinfoAccountability,
  'crow-network': crowNetworkAccountability,
  'crypto-exchange-fraud-ecosystem': cryptoFraudAccountability,
  'enron-fraud': enronFraudAccountability,
  'financial-crisis-accountability-failure': financialCrisisAccountability,
  'george-floyd': georgeFloydAccountability,
  'hush-money': hushMoneyAccountability,
  'iran-contra-full-financial-trail': iranContraAccountability,
  'iraq-sanctions': iraqSanctionsAccountability,
  'libor-scandal': liborScandalAccountability,
  'mkultra-cia-human-experimentation': mkultraCiaHumanExperimentationAccountability,
  'my-lai-massacre': myLaiMassacreAccountability,
  'nsa-mass-surveillance': nsaMassSurveillanceAccountability,
  'opioid-crisis-corporate-mass-murder': opioidCrisisAccountability,
  'pandemic-profiteering-covid-corruption': pandemicProfiteeringAccountability,
  'police-brutality': policeBrutalityAccountability,
  'russian-interference': russianInterferenceAccountability,
  'scotus-corruption': scotusCorruptionAccountability,
  'trump-org-fraud': trumpOrgAccountability,
  'tuskegee-experiment': tuskegeeExperimentAccountability,
  'wall-street-bailout': wallStreetBailoutAccountability,
  'war-on-drugs': warOnDrugsAccountability,
  'watergate': watergateAccountability,
  'wells-fargo-fraud': wellsFargoAccountability,
  'white-supremacist-violence': whiteSupremacistViolenceAccountability,
};

export default accountabilityDatabase;
