import type { AccountabilityData } from '@/types/accountability';
import { insiderTradingAccountability } from './1980s-insider-trading';
import { oneMdbAccountability } from './1mdb-scandal';
import { financialCrisis2008Accountability } from './2008-financial-crisis';
import { electionInterference2016Accountability } from './2016-election';
import { electionOverturnAccountability } from './2020-election-overturn';
import { accessHollywoodAccountability } from './access-hollywood';
import { adelphiaFraudAccountability } from './adelphia-fraud';
import { adelphiaScandalAccountability } from './adelphia-scandal';
import { agriculturalMonopolyAccountability } from './agricultural-monopoly';
import { agriculturalPolicyAccountability } from './agricultural-policy';
import { ahmaudArberyAccountability } from './ahmaud-arbery-murder';
import { aidsCrisisAccountability } from './aids-crisis';
import { agentOrangeAccountability } from './agent-orange';
import { aigBailoutAccountability } from './aig-bailout-scandal';
import { alaskaAirlines1282Accountability } from './alaska-airlines-1282';
import { antisemiticViolenceAccountability } from './antisemitic-violence';
import { armsTraffickingAccountability } from './arms-trafficking';
import { auroraShootingAccountability } from './aurora-shooting';
import { bankingCorruptionAccountability } from './banking-corruption';
import { bearStearnsAccountability } from './bear-stearns-2008-collapse';
import { bhopalAccountability } from './bhopal-disaster';
import { bigTobaccoAccountability } from './big-tobacco-lies';
import { biologicalExperimentationAccountability } from './biological-experimentation';
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
import { childSexualAbuseAccountability } from './child-sexual-abuse';
import { chinaBusinessComplicityAccountability } from './china-business-complicity';
import { chinaCyberEspionageAccountability } from './china-cyber-espionage';
import { chinaTechAccountability } from './china-tech';
import { cryptoMoneyLaunderingAccountability } from './cryptocurrency-money-laundering-networks';
import { ciaTortureAccountability } from './cia-torture';
import { civilRightsAccountability } from './civil-rights';
import { civilRightsRollbacksAccountability } from './civil-rights-rollbacks';
import { climateDenialAccountability } from './climate-denial';
import { coffeeCountyAccountability } from './coffee-county';
import { cointelproAccountability } from './cointelpro-domestic-surveillance-legacy';
import { droneAssassinationsAccountability } from './drone-assassinations';
import { columbiaHcaFraudAccountability } from './columbia-hca-fraud';
import { comeyFiringAccountability } from './comey-firing';
import { covidMisinfoAccountability } from './covid-misinfo';
import { crowNetworkAccountability } from './crow-network';
import { cryptoFraudAccountability } from './crypto-exchange-fraud-ecosystem';
import { enronFraudAccountability } from './enron-fraud';
import { farmlandAcquisitionAccountability } from './farmland-acquisition';
import { financialCrisisAccountability } from './financial-crisis-accountability-failure';
import { fannieMaeFraudAccountability } from './fannie-mae-fraud';
import { gulfOilSpillAccountability } from './gulf-oil-spill';
import { forcedArbitrationAccountability } from './forced-arbitration-consumer-rights';
import { greatResetAccountability } from './great-reset';
import { healthPolicyAccountability } from './health-policy';
import { flintWaterCrisisAccountability } from './flint-water-crisis';
import { georgeFloydAccountability } from './george-floyd';
import { hushMoneyAccountability } from './hush-money';
import { iranContraAccountability } from './iran-contra-full-financial-trail';
import { iraqSanctionsAccountability } from './iraq-sanctions';
import { january6InsurrectionAccountability } from './january-6-insurrection';
import { jjBabyPowderAccountability } from './jj-baby-powder';
import { kushnerSecurityClearanceAccountability } from './kushner-security-clearance';
import { liborScandalAccountability } from './libor-scandal';
import { mediaConsolidationAccountability } from './media-consolidation';
import { mediaManipulationAccountability } from './media-manipulation';
import { mkultraCiaHumanExperimentationAccountability } from './mkultra-cia-human-experimentation';
import { myLaiMassacreAccountability } from './my-lai-massacre';
import { nsaMassSurveillanceAccountability } from './nsa-mass-surveillance';
import { neoColonialismAccountability } from './neo-colonialism';
import { nraRussiaAccountability } from './nra-russia';
import { oathKeepersAccountability } from './oath-keepers';
import { obesityEpidemicAccountability } from './obesity-epidemic';
import { opioidCrisisAccountability } from './opioid-crisis-corporate-mass-murder';
import { pandemicProfiteeringAccountability } from './pandemic-profiteering-covid-corruption';
import { payrollTaxFraudAccountability } from './payroll-tax-fraud-industry-analysis';
import { policeBrutalityAccountability } from './police-brutality';
import { qualifiedImmunityAccountability } from './qualified-immunity-police-accountability-gap';
import { roeVWadeOverturnAccountability } from './roe-v-wade-overturn';
import { russianInterferenceAccountability } from './russian-interference';
import { scotusCorruptionAccountability } from './scotus-corruption';
import { trumpOrgAccountability } from './trump-org-fraud';
import { tradeBasedMoneyLaunderingSchemesAccountability } from './trade-based-money-laundering-schemes';
import { trumpTowerMeetingAccountability } from './trump-tower-meeting';
import { trumpModelManagementAccountability } from './trump-model-management';
import { tuskegeeExperimentAccountability } from './tuskegee-experiment';
import { wallStreetBailoutAccountability } from './wall-street-bailout';
import { warOnDrugsAccountability } from './war-on-drugs';
import { watergateAccountability } from './watergate';
import { wellsFargoAccountability } from './wells-fargo-fraud';
import { whiteSupremacistViolenceAccountability } from './white-supremacist-violence';
import { xkeyscoreUniversalDataCollectionAccountability } from './xkeyscore-universal-data-collection';

const accountabilityDatabase: Record<string, AccountabilityData> = {
  '1980s-insider-trading': insiderTradingAccountability,
  '1mdb-scandal': oneMdbAccountability,
  '2008-financial-crisis': financialCrisis2008Accountability,
  '2016-election': electionInterference2016Accountability,
  '2020-election-overturn': electionOverturnAccountability,
  'access-hollywood': accessHollywoodAccountability,
  'adelphia-fraud': adelphiaFraudAccountability,
  'adelphia-scandal': adelphiaScandalAccountability,
  'agricultural-monopoly': agriculturalMonopolyAccountability,
  'agricultural-policy': agriculturalPolicyAccountability,
  'ahmaud-arbery-murder': ahmaudArberyAccountability,
  'aids-crisis': aidsCrisisAccountability,
  'agent-orange': agentOrangeAccountability,
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
  'biological-experimentation': biologicalExperimentationAccountability,
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
  'child-sexual-abuse': childSexualAbuseAccountability,
  'china-business-complicity': chinaBusinessComplicityAccountability,
  'china-cyber-espionage': chinaCyberEspionageAccountability,
  'china-tech': chinaTechAccountability,
  'cryptocurrency-money-laundering-networks': cryptoMoneyLaunderingAccountability,
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
  'drone-assassinations': droneAssassinationsAccountability,
  'crypto-exchange-fraud-ecosystem': cryptoFraudAccountability,
  'enron-fraud': enronFraudAccountability,
  'farmland-acquisition': farmlandAcquisitionAccountability,
  'financial-crisis-accountability-failure': financialCrisisAccountability,
  'fannie-mae-fraud': fannieMaeFraudAccountability,
  'forced-arbitration-consumer-rights': forcedArbitrationAccountability,
  'flint-water-crisis': flintWaterCrisisAccountability,
  'george-floyd': georgeFloydAccountability,
  'great-reset': greatResetAccountability,
  'health-policy': healthPolicyAccountability,
  'hush-money': hushMoneyAccountability,
  'iran-contra-full-financial-trail': iranContraAccountability,
  'iraq-sanctions': iraqSanctionsAccountability,
  'january-6-insurrection': january6InsurrectionAccountability,
  'jj-baby-powder': jjBabyPowderAccountability,
  'kushner-security-clearance': kushnerSecurityClearanceAccountability,
  'banking-libor-manipulation': liborScandalAccountability,
  'media-consolidation': mediaConsolidationAccountability,
  'media-manipulation': mediaManipulationAccountability,
  'mkultra-cia-human-experimentation': mkultraCiaHumanExperimentationAccountability,
  'my-lai-massacre': myLaiMassacreAccountability,
  'nsa-mass-surveillance': nsaMassSurveillanceAccountability,
  'neo-colonialism': neoColonialismAccountability,
  'nra-russia': nraRussiaAccountability,
  'oath-keepers': oathKeepersAccountability,
  'obesity-epidemic': obesityEpidemicAccountability,
  'opioid-crisis-corporate-mass-murder': opioidCrisisAccountability,
  'pandemic-profiteering-covid-corruption': pandemicProfiteeringAccountability,
  'payroll-tax-fraud-industry-analysis': payrollTaxFraudAccountability,
  'gulf-oil-spill': gulfOilSpillAccountability,
  'police-brutality': policeBrutalityAccountability,
  'qualified-immunity-police-accountability-gap': qualifiedImmunityAccountability,
  'roe-v-wade-overturn': roeVWadeOverturnAccountability,
  'russian-interference': russianInterferenceAccountability,
  'scotus-corruption': scotusCorruptionAccountability,
  'trump-org-fraud': trumpOrgAccountability,
  'trade-based-money-laundering-schemes': tradeBasedMoneyLaunderingSchemesAccountability,
  'trump-tower-meeting': trumpTowerMeetingAccountability,
  'trump-model-management': trumpModelManagementAccountability,
  'tuskegee-experiment': tuskegeeExperimentAccountability,
  'wall-street-bailout': wallStreetBailoutAccountability,
  'war-on-drugs': warOnDrugsAccountability,
  'watergate': watergateAccountability,
  'wells-fargo-fraud': wellsFargoAccountability,
  'white-supremacist-violence': whiteSupremacistViolenceAccountability,
  'xkeyscore-universal-data-collection': xkeyscoreUniversalDataCollectionAccountability,
};

export default accountabilityDatabase;
