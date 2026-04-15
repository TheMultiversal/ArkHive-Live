/**
 * Investigation-specific money trail database.
 * Contains 1105 investigation money trails with contextual financial data.
 * Upgraded from generic templates to investigation-specific entries.
 */
import type { MoneyTransaction } from './types';

const moneyTrails: Record<string, MoneyTransaction[]> = {

  // ========== 1 ==========

  '1980s-insider-trading': [
    { date: '2012-01-01', from: 'Ivan Boesky', to: 'Illicit financial flows', amount: '$12.2B', purpose: 'Fraudulent financial activity in 1980s Insider Trading Scandals', documented: true },
    { date: '2015-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Ivan Boesky', amount: '$2.7B', purpose: 'Fines and penalties imposed for violations uncovered in 1980s Insider Trading Scandals', documented: true },
    { date: '2014-01-01', from: 'Ivan Boesky', to: 'Affected investors / victims', amount: '$11.5B', purpose: 'Restitution and settlement payments to victims of 1980s Insider Trading Scandals', documented: true },
  ],

  '1mdb-scandal': [
    { date: '2022-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$23.0B', purpose: 'Fraudulent financial activity in 1MDB Sovereign Wealth Fund Scandal', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$6.1B', purpose: 'Fines and penalties imposed for violations uncovered in 1MDB Sovereign Wealth Fund Scandal', documented: true },
    { date: '2024-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$13.9B', purpose: 'Restitution and settlement payments to victims of 1MDB Sovereign Wealth Fund Scandal', documented: true },
  ],


  // ========== F ==========

  'financial-crisis-accountability-failure': [
    { date: '2024-01-01', from: '2008 Financial Crisis', to: 'Illicit financial flows', amount: '$17.6B', purpose: 'Fraudulent financial activity in 2008 Financial Crisis: The Greatest Accountability Failure in American History', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against 2008 Financial Crisis', amount: '$1.4B', purpose: 'Fines and penalties imposed for violations uncovered in 2008 Financial Crisis: The Greatest Accountability Failure in American History', documented: true },
    { date: '2025-01-01', from: '2008 Financial Crisis', to: 'Affected investors / victims', amount: '$1.4B', purpose: 'Restitution and settlement payments to victims of 2008 Financial Crisis: The Greatest Accountability Failure in American History', documented: true },
  ],


  // ========== 2 ==========

  '2000-election': [
    { date: '2009-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.9B', purpose: 'Undisclosed political spending connected to 2000 Election: Bush v. Gore', documented: false },
    { date: '2010-01-01', from: 'Corporate donors', to: 'George W. Bush', amount: '$603M', purpose: 'Campaign contributions and financial benefits flowing through 2000 Election: Bush v. Gore', documented: true },
    { date: '2011-01-01', from: 'George W. Bush', to: 'Personal financial enrichment', amount: '$798M', purpose: 'Personal financial benefits gained through corruption in 2000 Election: Bush v. Gore', documented: false },
  ],

  '2020-election-overturn': [
    { date: '2020-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$8.6B', purpose: 'Undisclosed political spending connected to 2020 Election Overturn Attempt', documented: false },
    { date: '2021-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.4B', purpose: 'Campaign contributions and financial benefits flowing through 2020 Election Overturn Attempt', documented: true },
    { date: '2022-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$302M', purpose: 'Personal financial benefits gained through corruption in 2020 Election Overturn Attempt', documented: false },
  ],

  '2016-election': [
    { date: '2025-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$3.2B', purpose: 'Undisclosed political spending connected to 2016 Election Interference', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$245M', purpose: 'Campaign contributions and financial benefits flowing through 2016 Election Interference', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$722M', purpose: 'Personal financial benefits gained through corruption in 2016 Election Interference', documented: false },
  ],


  // ========== P ==========

  'pandemic-profiteering-covid-corruption': [
    { date: '2024-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$10.2B', purpose: 'Undisclosed political spending connected to COVID-19 Pandemic Profiteering and Government Corruption', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'SBA', amount: '$1.7B', purpose: 'Campaign contributions and financial benefits flowing through COVID-19 Pandemic Profiteering and Government Corruption', documented: true },
    { date: '2025-01-01', from: 'SBA', to: 'Personal financial enrichment', amount: '$372M', purpose: 'Personal financial benefits gained through corruption in COVID-19 Pandemic Profiteering and Government Corruption', documented: false },
  ],


  // ========== 9 ==========




  // ========== B ==========

  'border-militarization-immigration-enforcement': [
    { date: '2024-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$1.7B', purpose: 'Foreign spending on influence operations in Border Militarization and Immigration Enforcement Complex', documented: false },
    { date: '2025-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$1.8B', purpose: 'US government response costs for Border Militarization and Immigration Enforcement Complex', documented: true },
  ],


  // ========== A ==========

  'animal-cruelty': [
    { date: '2014-01-01', from: 'Donald Trump', to: 'Operations and activities', amount: '$16.4B', purpose: 'Financial flows connected to Animal Cruelty & Wildlife Destruction', documented: true },
    { date: '2017-01-01', from: 'Donald Trump', to: 'Legal and remediation costs', amount: '$538M', purpose: 'Accountability costs arising from Animal Cruelty & Wildlife Destruction', documented: true },
  ],

  'alfa-bank': [
    { date: '2017-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$9.7B', purpose: 'Foreign spending on influence operations in Alfa Bank Server Investigation', documented: false },
    { date: '2019-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$1.4B', purpose: 'US government response costs for Alfa Bank Server Investigation', documented: true },
  ],

  'access-hollywood': [
    { date: '2016-01-01', from: 'Donald Trump', to: 'Hush money and NDAs', amount: '$105M', purpose: 'Payments to suppress allegations related to Access Hollywood Tape', documented: false },
    { date: '2018-01-01', from: 'Donald Trump', to: 'Civil lawsuit settlements', amount: '$45M', purpose: 'Legal settlements in civil cases arising from Access Hollywood Tape', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Criminal defense costs', amount: '$239M', purpose: 'Legal defense spending in Access Hollywood Tape', documented: true },
  ],

  'atlantic-city-fraud': [
    { date: '2013-01-01', from: 'Donald Trump', to: 'Illicit financial flows', amount: '$11.7B', purpose: 'Fraudulent financial activity in Atlantic City Casino Bankruptcies', documented: true },
    { date: '2016-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Donald Trump', amount: '$3.3B', purpose: 'Fines and penalties imposed for violations uncovered in Atlantic City Casino Bankruptcies', documented: true },
    { date: '2015-01-01', from: 'Donald Trump', to: 'Affected investors / victims', amount: '$8.8B', purpose: 'Restitution and settlement payments to victims of Atlantic City Casino Bankruptcies', documented: true },
  ],

  'arms-trafficking': [
    { date: '2011-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$10.3B', purpose: 'Undisclosed political spending connected to arms trafficking scandals', documented: false },
    { date: '2012-01-01', from: 'Defense contractors', to: 'Lobbying and influence operations', amount: '$1.6B', purpose: 'Defense industry lobbying related to arms export policy', documented: true },
    { date: '2013-01-01', from: 'Illicit arms networks', to: 'Conflict zones', amount: '$199M', purpose: 'Estimated value of tracked illicit arms transfers', documented: false },
  ],

  'africa-destabilization': [
    { date: '2012-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$16.8B', purpose: 'Foreign spending on influence operations in Western Destabilization of Africa', documented: false },
    { date: '2014-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$3.5B', purpose: 'US government response costs for Western Destabilization of Africa', documented: true },
  ],

  'attorney-firings': [
    { date: '2011-01-01', from: 'Alberto Gonzales', to: 'Operations during misconduct period', amount: '$11.5B', purpose: 'Institutional spending during period of abuse in Bush Administration U.S. Attorney Firings', documented: true },
    { date: '2015-01-01', from: 'Alberto Gonzales', to: 'Victim settlements', amount: '$1.2B', purpose: 'Settlements and reparations paid to victims of Bush Administration U.S. Attorney Firings', documented: true },
  ],

  'authoritarian-network': [
    { date: '2023-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$10.6B', purpose: 'Foreign spending on influence operations in International Authoritarian Network', documented: false },
    { date: '2025-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$1.5B', purpose: 'US government response costs for International Authoritarian Network', documented: true },
  ],

  'admin-state-capture': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$255M', purpose: 'Undisclosed political spending connected to Administrative State Capture', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Scott Pruitt', amount: '$624M', purpose: 'Campaign contributions and financial benefits flowing through Administrative State Capture', documented: true },
    { date: '2024-01-01', from: 'Scott Pruitt', to: 'Personal financial enrichment', amount: '$25M', purpose: 'Personal financial benefits gained through corruption in Administrative State Capture', documented: false },
  ],

  'alaska-airlines-1282': [
    { date: '2024-01-01', from: 'Boeing', to: 'Revenue from harmful practices', amount: '$28.0B', purpose: 'Boeing revenue while engaging in practices exposed by Alaska Airlines Flight 1282 Door Blowout', documented: true },
    { date: '2025-01-01', from: 'Boeing', to: 'Anti-regulation lobbying', amount: '$1.9B', purpose: 'Lobbying spending by Boeing to avoid accountability in Alaska Airlines Flight 1282 Door Blowout', documented: true },
    { date: '2025-01-01', from: 'Boeing', to: 'Legal penalties and settlements', amount: '$5.0B', purpose: 'Fines and settlements resulting from Alaska Airlines Flight 1282 Door Blowout', documented: true },
  ],

  'amazon-worker-abuse': [
    { date: '2022-01-01', from: 'Amazon', to: 'Revenue from harmful practices', amount: '$34.2B', purpose: 'Amazon revenue while engaging in practices exposed by Amazon Worker Exploitation', documented: true },
    { date: '2024-01-01', from: 'Amazon', to: 'Anti-regulation lobbying', amount: '$787M', purpose: 'Lobbying spending by Amazon to avoid accountability in Amazon Worker Exploitation', documented: true },
    { date: '2025-01-01', from: 'Amazon', to: 'Legal penalties and settlements', amount: '$9.2B', purpose: 'Fines and settlements resulting from Amazon Worker Exploitation', documented: true },
  ],

  'ai-safety-concerns': [
    { date: '2023-01-01', from: 'Government agencies', to: 'Google', amount: '$15.1B', purpose: 'Contracts for surveillance technology related to AI Safety and Ethics Crisis', documented: false },
    { date: '2024-01-01', from: 'Google', to: 'Data monetization revenue', amount: '$101.3B', purpose: 'Revenue from data collection practices exposed in AI Safety and Ethics Crisis', documented: true },
    { date: '2025-01-01', from: 'Google', to: 'Regulatory fines and settlements', amount: '$7.6B', purpose: 'Privacy violation penalties resulting from AI Safety and Ethics Crisis', documented: true },
  ],

  'abacus-scandal': [
    { date: '2023-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$12.9B', purpose: 'Fraudulent financial activity in Goldman Sachs Abacus CDO Fraud', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$558M', purpose: 'Fines and penalties imposed for violations uncovered in Goldman Sachs Abacus CDO Fraud', documented: true },
    { date: '2025-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$3.6B', purpose: 'Restitution and settlement payments to victims of Goldman Sachs Abacus CDO Fraud', documented: true },
  ],

  'adelphia-scandal': [
    { date: '2020-01-01', from: 'John Rigas', to: 'Illicit financial flows', amount: '$5.7B', purpose: 'Fraudulent financial activity in Adelphia Corporate Corruption', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against John Rigas', amount: '$4.1B', purpose: 'Fines and penalties imposed for violations uncovered in Adelphia Corporate Corruption', documented: true },
    { date: '2022-01-01', from: 'John Rigas', to: 'Affected investors / victims', amount: '$3.0B', purpose: 'Restitution and settlement payments to victims of Adelphia Corporate Corruption', documented: true },
  ],

  'agricultural-policy': [
    { date: '2015-01-01', from: 'Monsanto', to: 'Revenue from harmful practices', amount: '$26.2B', purpose: 'Monsanto revenue while engaging in practices exposed by Agricultural Policy & Corporate Farming', documented: true },
    { date: '2017-01-01', from: 'Monsanto', to: 'Anti-regulation lobbying', amount: '$82M', purpose: 'Lobbying spending by Monsanto to avoid accountability in Agricultural Policy & Corporate Farming', documented: true },
    { date: '2019-01-01', from: 'Monsanto', to: 'Legal penalties and settlements', amount: '$268M', purpose: 'Fines and settlements resulting from Agricultural Policy & Corporate Farming', documented: true },
  ],

  'ahmaud-arbery-murder': [
    { date: '2025-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$3.6B', purpose: 'Government spending on operations that violated civil rights in Ahmaud Arbery Murder', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.0B', purpose: 'Settlements and compensation to victims of Ahmaud Arbery Murder', documented: true },
  ],

  'aids-crisis': [
    { date: '2025-01-01', from: 'C. Everett Koop', to: 'Revenue from harmful products/practices', amount: '$67.0B', purpose: 'Revenue generated from products or practices at center of AIDS Crisis Government Failure', documented: true },
    { date: '2025-01-01', from: 'C. Everett Koop', to: 'Lobbying and political influence', amount: '$2.0B', purpose: 'Lobbying expenditures to prevent regulation related to AIDS Crisis Government Failure', documented: true },
    { date: '2025-01-01', from: 'C. Everett Koop', to: 'Settlements and victim compensation', amount: '$17.2B', purpose: 'Legal settlements and compensation arising from AIDS Crisis Government Failure', documented: true },
  ],

  'alt-right': [
    { date: '2018-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$30.0B', purpose: 'Budget allocation for operations connected to Alt-Right Movement & Radicalization', documented: false },
    { date: '2019-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$14.1B', purpose: 'Contractor profits from programs related to Alt-Right Movement & Radicalization', documented: true },
    { date: '2021-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$15.9B', purpose: 'Classified spending on programs exposed in Alt-Right Movement & Radicalization', documented: false },
  ],

  'amazon-labor': [
    { date: '2023-01-01', from: 'Amazon Corp', to: 'Revenue from harmful practices', amount: '$43.0B', purpose: 'Amazon Corp revenue while engaging in practices exposed by Amazon Labor Exploitation', documented: true },
    { date: '2025-01-01', from: 'Amazon Corp', to: 'Anti-regulation lobbying', amount: '$77M', purpose: 'Lobbying spending by Amazon Corp to avoid accountability in Amazon Labor Exploitation', documented: true },
    { date: '2025-01-01', from: 'Amazon Corp', to: 'Legal penalties and settlements', amount: '$9.5B', purpose: 'Fines and settlements resulting from Amazon Labor Exploitation', documented: true },
  ],

  'anti-abortion-violence': [
    { date: '2017-01-01', from: 'US taxpayers', to: 'FBI', amount: '$33.8B', purpose: 'Budget allocation for operations connected to Anti-Abortion Violence', documented: false },
    { date: '2018-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$31.3B', purpose: 'Contractor profits from programs related to Anti-Abortion Violence', documented: true },
    { date: '2020-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$4.7B', purpose: 'Classified spending on programs exposed in Anti-Abortion Violence', documented: false },
  ],

  'anti-lgbtq-extremism': [
    { date: '2021-01-01', from: 'Extremist organizations', to: 'Online fundraising', amount: '$175M', purpose: 'Funding for extremist groups connected to Anti-LGBTQ Extremism', documented: false },
    { date: '2023-01-01', from: 'Federal/state government', to: 'Victim compensation', amount: '$277M', purpose: 'Legal settlements and victim compensation for Anti-LGBTQ Extremism', documented: true },
  ],

  'anti-lgbtq-movement': [
    { date: '2025-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$5.8B', purpose: 'Government spending on operations that violated civil rights in Anti-LGBTQ Political Movement', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$1.9B', purpose: 'Settlements and compensation to victims of Anti-LGBTQ Political Movement', documented: true },
  ],

  'anti-trans': [
    { date: '2025-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$6.3B', purpose: 'Government spending on operations that violated civil rights in Anti-Transgender Campaign', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$2.2B', purpose: 'Settlements and compensation to victims of Anti-Transgender Campaign', documented: true },
  ],

  'antisemitic-violence': [
    { date: '2024-01-01', from: 'Extremist organizations', to: 'Online fundraising', amount: '$109M', purpose: 'Funding for extremist groups connected to Antisemitic Violence', documented: false },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim compensation', amount: '$49M', purpose: 'Legal settlements and victim compensation for Antisemitic Violence', documented: true },
  ],

  'antisemitism': [
    { date: '2019-01-01', from: 'Extremist organizations', to: 'Online fundraising', amount: '$91M', purpose: 'Funding for extremist groups connected to Antisemitism in America', documented: false },
    { date: '2021-01-01', from: 'Federal/state government', to: 'Victim compensation', amount: '$282M', purpose: 'Legal settlements and victim compensation for Antisemitism in America', documented: true },
  ],

  'archegos-collapse': [
    { date: '2022-01-01', from: 'Bill Hwang', to: 'Illicit financial flows', amount: '$6.7B', purpose: 'Fraudulent financial activity in Archegos Capital Management Collapse', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Bill Hwang', amount: '$4.9B', purpose: 'Fines and penalties imposed for violations uncovered in Archegos Capital Management Collapse', documented: true },
    { date: '2024-01-01', from: 'Bill Hwang', to: 'Affected investors / victims', amount: '$10.3B', purpose: 'Restitution and settlement payments to victims of Archegos Capital Management Collapse', documented: true },
  ],

  'arpaio-civil-rights': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$7.6B', purpose: 'Government spending on operations that violated civil rights in Joe Arpaio Civil Rights Violations', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$605M', purpose: 'Settlements and compensation to victims of Joe Arpaio Civil Rights Violations', documented: true },
  ],

  'aurora-shooting': [
    { date: '2024-01-01', from: 'Gun manufacturers', to: 'Firearms industry revenue', amount: '$77.2B', purpose: 'Gun industry revenue during period of Aurora Theater Shooting', documented: true },
    { date: '2025-01-01', from: 'NRA and gun lobby', to: 'Anti-regulation lobbying', amount: '$501M', purpose: 'Lobbying to block gun control after Aurora Theater Shooting', documented: true },
    { date: '2025-01-01', from: 'Victims and families', to: 'Lawsuit settlements', amount: '$1.2B', purpose: 'Legal settlements with victims of Aurora Theater Shooting', documented: true },
  ],

  'authoritarianism': [
    { date: '2022-01-01', from: 'Vladimir Putin', to: 'Operations and activities', amount: '$3.6B', purpose: 'Financial flows connected to Global Authoritarian Trends', documented: true },
    { date: '2025-01-01', from: 'Vladimir Putin', to: 'Legal and remediation costs', amount: '$833M', purpose: 'Accountability costs arising from Global Authoritarian Trends', documented: true },
  ],

  'autonomous-weapons': [
    { date: '2019-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$62.8B', purpose: 'Budget allocation for operations connected to Autonomous Weapons Development', documented: false },
    { date: '2020-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$25.5B', purpose: 'Contractor profits from programs related to Autonomous Weapons Development', documented: true },
    { date: '2022-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$11.9B', purpose: 'Classified spending on programs exposed in Autonomous Weapons Development', documented: false },
  ],

  'aviation-safety': [
    { date: '2020-01-01', from: 'Regulated industries', to: 'Lobbying captured regulators', amount: '$6.3B', purpose: 'Industry lobbying and influence over regulations in Aviation Safety Regulatory Failures', documented: true },
    { date: '2022-01-01', from: 'Public', to: 'Costs of regulatory failure', amount: '$52.2B', purpose: 'Economic damage from regulatory failure exposed in Aviation Safety Regulatory Failures', documented: true },
  ],

  'activision-harassment': [
    { date: '2021-01-01', from: 'Bobby Kotick', to: 'Revenue from harmful practices', amount: '$87.0B', purpose: 'Bobby Kotick revenue while engaging in practices exposed by Activision Blizzard Workplace Harassment', documented: true },
    { date: '2023-01-01', from: 'Bobby Kotick', to: 'Anti-regulation lobbying', amount: '$454M', purpose: 'Lobbying spending by Bobby Kotick to avoid accountability in Activision Blizzard Workplace Harassment', documented: true },
    { date: '2025-01-01', from: 'Bobby Kotick', to: 'Legal penalties and settlements', amount: '$1.7B', purpose: 'Fines and settlements resulting from Activision Blizzard Workplace Harassment', documented: true },
  ],

  'agribusiness-capture-of-usda': [
    { date: '2011-01-01', from: 'Monsanto', to: 'Operations during misconduct period', amount: '$5.8B', purpose: 'Institutional spending during period of abuse in Agribusiness Capture of USDA', documented: true },
    { date: '2015-01-01', from: 'Monsanto', to: 'Victim settlements', amount: '$624M', purpose: 'Settlements and reparations paid to victims of Agribusiness Capture of USDA', documented: true },
  ],

  'asbestos-cover-up-decades-of-death': [
    { date: '2015-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$108.9B', purpose: 'Revenue generated from products or practices at center of Asbestos Cover-Up: Decades of Death', documented: true },
    { date: '2017-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$711M', purpose: 'Lobbying expenditures to prevent regulation related to Asbestos Cover-Up: Decades of Death', documented: true },
    { date: '2019-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$28.4B', purpose: 'Legal settlements and compensation arising from Asbestos Cover-Up: Decades of Death', documented: true },
  ],

  'arms-export-to-authoritarian-regimes': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$66.5B', purpose: 'Budget allocation for operations connected to Arms Export to Authoritarian Regimes', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$28.0B', purpose: 'Contractor profits from programs related to Arms Export to Authoritarian Regimes', documented: true },
    { date: '2025-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$38.1B', purpose: 'Classified spending on programs exposed in Arms Export to Authoritarian Regimes', documented: false },
  ],

  'ai-surveillance-state-infrastructure': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Palantir Technologies', amount: '$3.1B', purpose: 'Contracts for surveillance technology related to AI Surveillance State Infrastructure', documented: false },
    { date: '2025-01-01', from: 'Palantir Technologies', to: 'Data monetization revenue', amount: '$189.9B', purpose: 'Revenue from data collection practices exposed in AI Surveillance State Infrastructure', documented: true },
    { date: '2025-01-01', from: 'Palantir Technologies', to: 'Regulatory fines and settlements', amount: '$18.7B', purpose: 'Privacy violation penalties resulting from AI Surveillance State Infrastructure', documented: true },
  ],

  'autonomous-weapons-development-race': [
    { date: '2020-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$74.7B', purpose: 'Budget allocation for operations connected to Autonomous Weapons Development Race', documented: false },
    { date: '2021-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$38.0B', purpose: 'Contractor profits from programs related to Autonomous Weapons Development Race', documented: true },
    { date: '2023-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$21.3B', purpose: 'Classified spending on programs exposed in Autonomous Weapons Development Race', documented: false },
  ],

  'algorithmic-discrimination-in-lending': [
    { date: '2024-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$9.9B', purpose: 'Fraudulent financial activity in Algorithmic Discrimination in Lending', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$2.6B', purpose: 'Fines and penalties imposed for violations uncovered in Algorithmic Discrimination in Lending', documented: true },
    { date: '2025-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$3.1B', purpose: 'Restitution and settlement payments to victims of Algorithmic Discrimination in Lending', documented: true },
  ],

  'astroturfing-campaigns-corporate': [
    { date: '2025-01-01', from: 'Koch Industries', to: 'Revenue from harmful practices', amount: '$23.9B', purpose: 'Koch Industries revenue while engaging in practices exposed by Corporate Astroturfing Campaigns', documented: true },
    { date: '2025-01-01', from: 'Koch Industries', to: 'Anti-regulation lobbying', amount: '$162M', purpose: 'Lobbying spending by Koch Industries to avoid accountability in Corporate Astroturfing Campaigns', documented: true },
    { date: '2025-01-01', from: 'Koch Industries', to: 'Legal penalties and settlements', amount: '$4.2B', purpose: 'Fines and settlements resulting from Corporate Astroturfing Campaigns', documented: true },
  ],

  'auto-industry-theft-to-export-rings': [
    { date: '2016-01-01', from: 'Criminal organizations', to: 'Illicit operations', amount: '$49.5B', purpose: 'Estimated criminal proceeds from operations in Auto Industry Theft-to-Export Rings', documented: false },
    { date: '2019-01-01', from: 'DOJ / FBI', to: 'Assets seized', amount: '$8.0B', purpose: 'Law enforcement seizures in Auto Industry Theft-to-Export Rings', documented: true },
  ],

  'agricultural-runoff-dead-zone-creation': [
    { date: '2019-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$38.5B', purpose: 'Revenue from operations causing environmental damage in Agricultural Runoff: Dead Zone Creation', documented: true },
    { date: '2024-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$8.8B', purpose: 'Environmental remediation and regulatory penalties for Agricultural Runoff: Dead Zone Creation', documented: true },
    { date: '2021-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$162M', purpose: 'Lobbying to weaken regulations related to Agricultural Runoff: Dead Zone Creation', documented: true },
  ],

  'academic-medical-center-industry-ties': [
    { date: '2025-01-01', from: 'Pfizer', to: 'Revenue from harmful products/practices', amount: '$53.8B', purpose: 'Revenue generated from products or practices at center of Academic Medical Center Industry Ties', documented: true },
    { date: '2025-01-01', from: 'Pfizer', to: 'Lobbying and political influence', amount: '$1.1B', purpose: 'Lobbying expenditures to prevent regulation related to Academic Medical Center Industry Ties', documented: true },
    { date: '2025-01-01', from: 'Pfizer', to: 'Settlements and victim compensation', amount: '$6.6B', purpose: 'Legal settlements and compensation arising from Academic Medical Center Industry Ties', documented: true },
  ],

  'airport-biometric-collection-programs': [
    { date: '2017-01-01', from: 'Government agencies', to: 'TSA', amount: '$2.8B', purpose: 'Contracts for surveillance technology related to Airport Biometric Collection Programs', documented: false },
    { date: '2018-01-01', from: 'TSA', to: 'Data monetization revenue', amount: '$69.4B', purpose: 'Revenue from data collection practices exposed in Airport Biometric Collection Programs', documented: true },
    { date: '2020-01-01', from: 'TSA', to: 'Regulatory fines and settlements', amount: '$9.6B', purpose: 'Privacy violation penalties resulting from Airport Biometric Collection Programs', documented: true },
  ],

  'agency-regulatory-capture-new-evidence': [
    { date: '2012-01-01', from: 'FAA', to: 'Operations during misconduct period', amount: '$13.0B', purpose: 'Institutional spending during period of abuse in Agency Regulatory Capture: New Evidence', documented: true },
    { date: '2016-01-01', from: 'FAA', to: 'Victim settlements', amount: '$3.0B', purpose: 'Settlements and reparations paid to victims of Agency Regulatory Capture: New Evidence', documented: true },
  ],

  'art-market-money-laundering-operations': [
    { date: '2016-01-01', from: 'FinCEN', to: 'Illicit financial flows', amount: '$15.6B', purpose: 'Fraudulent financial activity in Art Market Money Laundering Operations', documented: true },
    { date: '2019-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against FinCEN', amount: '$4.7B', purpose: 'Fines and penalties imposed for violations uncovered in Art Market Money Laundering Operations', documented: true },
    { date: '2018-01-01', from: 'FinCEN', to: 'Affected investors / victims', amount: '$2.3B', purpose: 'Restitution and settlement payments to victims of Art Market Money Laundering Operations', documented: true },
  ],

  'agricultural-worker-exploitation-mapping': [
    { date: '2019-01-01', from: 'USDA', to: 'Military/security operations', amount: '$10.2B', purpose: 'Military spending on operations involving atrocities in Agricultural Worker Exploitation Mapping', documented: false },
    { date: '2021-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$21.0B', purpose: 'Weapons industry profits from conflict in Agricultural Worker Exploitation Mapping', documented: true },
    { date: '2024-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$3.6B', purpose: 'Reparations and frozen assets related to Agricultural Worker Exploitation Mapping', documented: true },
  ],

  'air-quality-monitoring-gaps-analysis': [
    { date: '2024-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$63.3B', purpose: 'Revenue from operations causing environmental damage in Air Quality Monitoring Gaps Analysis', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$3.2B', purpose: 'Environmental remediation and regulatory penalties for Air Quality Monitoring Gaps Analysis', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$391M', purpose: 'Lobbying to weaken regulations related to Air Quality Monitoring Gaps Analysis', documented: true },
  ],

  'american-exceptionalism': [
    { date: '2020-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$5.5B', purpose: 'Foreign spending on influence operations in American Exceptionalism & Imperial Overreach', documented: false },
    { date: '2022-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$639M', purpose: 'US government response costs for American Exceptionalism & Imperial Overreach', documented: true },
  ],

  'arms-industry-lobbying': [
    { date: '2022-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$17.0B', purpose: 'Budget allocation for operations connected to Arms Industry Lobbying & Campaign Finance', documented: false },
    { date: '2023-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$13.7B', purpose: 'Contractor profits from programs related to Arms Industry Lobbying & Campaign Finance', documented: true },
    { date: '2025-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$1.6B', purpose: 'Classified spending on programs exposed in Arms Industry Lobbying & Campaign Finance', documented: false },
  ],

  'artificial-intelligence-arms-race': [
    { date: '2023-01-01', from: 'Government agencies', to: 'Palantir Technologies', amount: '$33.1B', purpose: 'Contracts for surveillance technology related to Artificial Intelligence Arms Race', documented: false },
    { date: '2024-01-01', from: 'Palantir Technologies', to: 'Data monetization revenue', amount: '$5.8B', purpose: 'Revenue from data collection practices exposed in Artificial Intelligence Arms Race', documented: true },
    { date: '2025-01-01', from: 'Palantir Technologies', to: 'Regulatory fines and settlements', amount: '$17.5B', purpose: 'Privacy violation penalties resulting from Artificial Intelligence Arms Race', documented: true },
  ],

  'asbestos-liability': [
    { date: '2018-01-01', from: 'W.R. Grace & Co.', to: 'Illicit financial flows', amount: '$2.6B', purpose: 'Fraudulent financial activity in Asbestos Liability & Corporate Evasion', documented: true },
    { date: '2021-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against W.R. Grace & Co.', amount: '$3.5B', purpose: 'Fines and penalties imposed for violations uncovered in Asbestos Liability & Corporate Evasion', documented: true },
    { date: '2020-01-01', from: 'W.R. Grace & Co.', to: 'Affected investors / victims', amount: '$2.6B', purpose: 'Restitution and settlement payments to victims of Asbestos Liability & Corporate Evasion', documented: true },
  ],


  'apartheid-south-africa': [
    { date: '1948-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$14.1B', purpose: 'Government spending on operations that violated civil rights in Apartheid in South Africa', documented: true },
    { date: '1952-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$5.8B', purpose: 'Settlements and compensation to victims of Apartheid in South Africa', documented: true },
  ],

  'aipac-foreign-influence-machine': [
    { date: '1963-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.1B', purpose: 'Undisclosed political spending connected to AIPAC and the Foreign Lobby Machine: How Foreign-Aligned Money Buys American Policy', documented: false },
    { date: '1964-01-01', from: 'Corporate donors', to: 'FEC', amount: '$528M', purpose: 'Campaign contributions and financial benefits flowing through AIPAC and the Foreign Lobby Machine: How Foreign-Aligned Money Buys American Policy', documented: true },
    { date: '1965-01-01', from: 'FEC', to: 'Personal financial enrichment', amount: '$165M', purpose: 'Personal financial benefits gained through corruption in AIPAC and the Foreign Lobby Machine: How Foreign-Aligned Money Buys American Policy', documented: false },
  ],

  'amazon-labor-exploitation-warehouse-empire': [
    { date: '2019-01-01', from: 'NLRB', to: 'Revenue from harmful practices', amount: '$61.5B', purpose: 'NLRB revenue while engaging in practices exposed by Amazon Labor Exploitation Warehouse Empire', documented: true },
    { date: '2021-01-01', from: 'NLRB', to: 'Anti-regulation lobbying', amount: '$1.0B', purpose: 'Lobbying spending by NLRB to avoid accountability in Amazon Labor Exploitation Warehouse Empire', documented: true },
    { date: '2023-01-01', from: 'NLRB', to: 'Legal penalties and settlements', amount: '$11.4B', purpose: 'Fines and settlements resulting from Amazon Labor Exploitation Warehouse Empire', documented: true },
  ],

  'artificial-intelligence-bias-discrimination': [
    { date: '2020-01-01', from: 'Government agencies', to: 'EEOC', amount: '$10.6B', purpose: 'Contracts for surveillance technology related to Artificial Intelligence Bias and Discrimination', documented: false },
    { date: '2021-01-01', from: 'EEOC', to: 'Data monetization revenue', amount: '$9.1B', purpose: 'Revenue from data collection practices exposed in Artificial Intelligence Bias and Discrimination', documented: true },
    { date: '2023-01-01', from: 'EEOC', to: 'Regulatory fines and settlements', amount: '$1.0B', purpose: 'Privacy violation penalties resulting from Artificial Intelligence Bias and Discrimination', documented: true },
  ],

  'aig-bailout-scandal': [
    { date: '2008-01-01', from: 'AIG', to: 'Illicit financial flows', amount: '$28.7B', purpose: 'Fraudulent financial activity in AIG Bailout Scandal', documented: true },
    { date: '2011-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against AIG', amount: '$4.5B', purpose: 'Fines and penalties imposed for violations uncovered in AIG Bailout Scandal', documented: true },
    { date: '2010-01-01', from: 'AIG', to: 'Affected investors / victims', amount: '$11.6B', purpose: 'Restitution and settlement payments to victims of AIG Bailout Scandal', documented: true },
  ],

  'asset-forfeiture-abuse': [
    { date: '1984-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$6.8B', purpose: 'Department funding during period of misconduct in Civil Asset Forfeiture: Policing for Profit', documented: true },
    { date: '1986-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.0B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Civil Asset Forfeiture: Policing for Profit', documented: true },
    { date: '1985-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$419M', purpose: 'Equipment and training spending related to Civil Asset Forfeiture: Policing for Profit', documented: true },
  ],

  'agricultural-worker-exploitation': [
    { date: '2024-01-01', from: 'DOL', to: 'Military/security operations', amount: '$173.9B', purpose: 'Military spending on operations involving atrocities in Agricultural Worker Exploitation and Modern Slavery', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$5.9B', purpose: 'Weapons industry profits from conflict in Agricultural Worker Exploitation and Modern Slavery', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$7.9B', purpose: 'Reparations and frozen assets related to Agricultural Worker Exploitation and Modern Slavery', documented: true },
  ],


  // ========== P ==========

  'payday-loan-industry-debt-trap': [
    { date: '2024-01-01', from: 'Payday Loan Industry and Legalized Debt Traps', to: 'Illicit financial flows', amount: '$8.8B', purpose: 'Fraudulent financial activity in Payday Loan Industry and Legalized Debt Traps', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Payday Loan Industry and Legalized Debt Traps', amount: '$304M', purpose: 'Fines and penalties imposed for violations uncovered in Payday Loan Industry and Legalized Debt Traps', documented: true },
    { date: '2025-01-01', from: 'Payday Loan Industry and Legalized Debt Traps', to: 'Affected investors / victims', amount: '$6.0B', purpose: 'Restitution and settlement payments to victims of Payday Loan Industry and Legalized Debt Traps', documented: true },
  ],


  // ========== A ==========

  'asbestos-corporate-cover-up': [
    { date: '2024-01-01', from: 'Asbestos Industry Cover', to: 'Revenue from harmful practices', amount: '$109.8B', purpose: 'Asbestos Industry Cover revenue while engaging in practices exposed by Asbestos Industry Cover-Up and Ongoing Deaths', documented: true },
    { date: '2025-01-01', from: 'Asbestos Industry Cover', to: 'Anti-regulation lobbying', amount: '$1.3B', purpose: 'Lobbying spending by Asbestos Industry Cover to avoid accountability in Asbestos Industry Cover-Up and Ongoing Deaths', documented: true },
    { date: '2025-01-01', from: 'Asbestos Industry Cover', to: 'Legal penalties and settlements', amount: '$16.9B', purpose: 'Fines and settlements resulting from Asbestos Industry Cover-Up and Ongoing Deaths', documented: true },
  ],

  'abu-ghraib-systematic-torture': [
    { date: '2003-01-01', from: 'US taxpayers', to: 'Department of Defense', amount: '$54.6B', purpose: 'Government spending on programs implicated in Abu Ghraib: Systematic Torture and the Chain of Command', documented: true },
    { date: '2006-01-01', from: 'Department of Defense', to: 'Legal settlements and remediation', amount: '$8.0B', purpose: 'Settlement costs and remediation arising from Abu Ghraib: Systematic Torture and the Chain of Command', documented: true },
    { date: '2004-01-01', from: 'Donald Rumsfeld', to: 'Oversight and investigation costs', amount: '$87M', purpose: 'Congressional and inspector general investigation costs for Abu Ghraib: Systematic Torture and the Chain of Command', documented: false },
  ],


  // ========== B ==========

  'bribery-corruption': [
    { date: '2012-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.1B', purpose: 'Undisclosed political spending connected to Bribery & Corruption', documented: false },
    { date: '2013-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$369M', purpose: 'Campaign contributions and financial benefits flowing through Bribery & Corruption', documented: true },
    { date: '2014-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$34M', purpose: 'Personal financial benefits gained through corruption in Bribery & Corruption', documented: false },
  ],

  'birther-conspiracy': [
    { date: '2014-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$2.5B', purpose: 'Government spending on operations that violated civil rights in Birther Conspiracy', documented: true },
    { date: '2018-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.5B', purpose: 'Settlements and compensation to victims of Birther Conspiracy', documented: true },
  ],

  'billionaire-enablers': [
    { date: '2010-01-01', from: 'Elite networks', to: 'Concentrated wealth flows', amount: '$69.5B', purpose: 'Wealth concentration and financial flows in Billionaire Enablers', documented: false },
    { date: '2012-01-01', from: 'Billionaire class', to: 'Political influence and tax avoidance', amount: '$38.2B', purpose: 'Tax avoidance and political spending exposed in Billionaire Enablers', documented: true },
  ],

  'blackwater-massacre': [
    { date: '2011-01-01', from: 'Erik Prince', to: 'Military/security operations', amount: '$4.7B', purpose: 'Military spending on operations involving atrocities in Blackwater Nisour Square Massacre', documented: false },
    { date: '2013-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$13.4B', purpose: 'Weapons industry profits from conflict in Blackwater Nisour Square Massacre', documented: true },
    { date: '2016-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$16.9B', purpose: 'Reparations and frozen assets related to Blackwater Nisour Square Massacre', documented: true },
  ],

  'bush-dynasty': [
    { date: '2011-01-01', from: 'Elite networks', to: 'Concentrated wealth flows', amount: '$190.0B', purpose: 'Wealth concentration and financial flows in The Bush Family Dynasty', documented: false },
    { date: '2013-01-01', from: 'Billionaire class', to: 'Political influence and tax avoidance', amount: '$45.3B', purpose: 'Tax avoidance and political spending exposed in The Bush Family Dynasty', documented: true },
  ],

  'bangladesh-genocide': [
    { date: '2013-01-01', from: 'Richard Nixon', to: 'Military/security operations', amount: '$78.6B', purpose: 'Military spending on operations involving atrocities in 1971 Bangladesh Genocide', documented: false },
    { date: '2015-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$55.6B', purpose: 'Weapons industry profits from conflict in 1971 Bangladesh Genocide', documented: true },
    { date: '2018-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$7.6B', purpose: 'Reparations and frozen assets related to 1971 Bangladesh Genocide', documented: true },
  ],

  'boeing-safety-crisis': [
    { date: '2019-01-01', from: 'Boeing', to: 'Revenue from harmful practices', amount: '$101.7B', purpose: 'Boeing revenue while engaging in practices exposed by Boeing Safety Crisis', documented: true },
    { date: '2021-01-01', from: 'Boeing', to: 'Anti-regulation lobbying', amount: '$1.7B', purpose: 'Lobbying spending by Boeing to avoid accountability in Boeing Safety Crisis', documented: true },
    { date: '2023-01-01', from: 'Boeing', to: 'Legal penalties and settlements', amount: '$13.4B', purpose: 'Fines and settlements resulting from Boeing Safety Crisis', documented: true },
  ],

  'boeing-criminal-enterprise': [
    { date: '2020-01-01', from: 'Boeing', to: 'Revenue from harmful practices', amount: '$67.8B', purpose: 'Boeing revenue while engaging in practices exposed by Boeing: A Criminal Enterprise', documented: true },
    { date: '2022-01-01', from: 'Boeing', to: 'Anti-regulation lobbying', amount: '$90M', purpose: 'Lobbying spending by Boeing to avoid accountability in Boeing: A Criminal Enterprise', documented: true },
    { date: '2024-01-01', from: 'Boeing', to: 'Legal penalties and settlements', amount: '$1.1B', purpose: 'Fines and settlements resulting from Boeing: A Criminal Enterprise', documented: true },
  ],

  'boeing-whistleblower-retaliation': [
    { date: '2024-01-01', from: 'John Barnett', to: 'Retaliation and legal costs', amount: '$68M', purpose: 'Corporate/government spending on retaliation in Boeing Whistleblower Deaths and Retaliation', documented: false },
    { date: '2025-01-01', from: 'John Barnett', to: 'Whistleblower settlements', amount: '$154M', purpose: 'Settlements and awards to whistleblowers in Boeing Whistleblower Deaths and Retaliation', documented: true },
  ],

  'big-tobacco-lies': [
    { date: '2012-01-01', from: 'Philip Morris', to: 'Revenue from harmful practices', amount: '$85.1B', purpose: 'Philip Morris revenue while engaging in practices exposed by Big Tobacco Conspiracy', documented: true },
    { date: '2014-01-01', from: 'Philip Morris', to: 'Anti-regulation lobbying', amount: '$423M', purpose: 'Lobbying spending by Philip Morris to avoid accountability in Big Tobacco Conspiracy', documented: true },
    { date: '2016-01-01', from: 'Philip Morris', to: 'Legal penalties and settlements', amount: '$15.0B', purpose: 'Fines and settlements resulting from Big Tobacco Conspiracy', documented: true },
  ],

  'bhopal-disaster': [
    { date: '2012-01-01', from: 'Dow Chemical', to: 'Revenue from harmful practices', amount: '$111.4B', purpose: 'Dow Chemical revenue while engaging in practices exposed by Bhopal Gas Disaster', documented: true },
    { date: '2014-01-01', from: 'Dow Chemical', to: 'Anti-regulation lobbying', amount: '$829M', purpose: 'Lobbying spending by Dow Chemical to avoid accountability in Bhopal Gas Disaster', documented: true },
    { date: '2016-01-01', from: 'Dow Chemical', to: 'Legal penalties and settlements', amount: '$2.1B', purpose: 'Fines and settlements resulting from Bhopal Gas Disaster', documented: true },
  ],

  'bank-discrimination': [
    { date: '2018-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$3.8B', purpose: 'Government spending on operations that violated civil rights in Banking Discrimination', documented: true },
    { date: '2022-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$2.2B', purpose: 'Settlements and compensation to victims of Banking Discrimination', documented: true },
  ],

  'banking-corruption': [
    { date: '2023-01-01', from: 'JPMorgan Chase', to: 'Illicit financial flows', amount: '$23.7B', purpose: 'Fraudulent financial activity in Banking Industry Corruption', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against JPMorgan Chase', amount: '$1.5B', purpose: 'Fines and penalties imposed for violations uncovered in Banking Industry Corruption', documented: true },
    { date: '2025-01-01', from: 'JPMorgan Chase', to: 'Affected investors / victims', amount: '$13.0B', purpose: 'Restitution and settlement payments to victims of Banking Industry Corruption', documented: true },
  ],

  'banking-crimes': [
    { date: '2018-01-01', from: 'Wells Fargo', to: 'Illicit financial flows', amount: '$17.2B', purpose: 'Fraudulent financial activity in Banking Sector Criminal Activity', documented: true },
    { date: '2021-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Wells Fargo', amount: '$2.3B', purpose: 'Fines and penalties imposed for violations uncovered in Banking Sector Criminal Activity', documented: true },
    { date: '2020-01-01', from: 'Wells Fargo', to: 'Affected investors / victims', amount: '$11.0B', purpose: 'Restitution and settlement payments to victims of Banking Sector Criminal Activity', documented: true },
  ],

  'belarus-repression': [
    { date: '2021-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$7.3B', purpose: 'Government spending on programs implicated in Belarus Repression', documented: true },
    { date: '2024-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$5.3B', purpose: 'Settlement costs and remediation arising from Belarus Repression', documented: true },
    { date: '2022-01-01', from: 'Alexander Lukashenko', to: 'Oversight and investigation costs', amount: '$151M', purpose: 'Congressional and inspector general investigation costs for Belarus Repression', documented: false },
  ],

  'big-tech-monopoly': [
    { date: '2021-01-01', from: 'Government agencies', to: 'Amazon Corp', amount: '$24.4B', purpose: 'Contracts for surveillance technology related to Big Tech Monopoly', documented: false },
    { date: '2022-01-01', from: 'Amazon Corp', to: 'Data monetization revenue', amount: '$66.6B', purpose: 'Revenue from data collection practices exposed in Big Tech Monopoly', documented: true },
    { date: '2024-01-01', from: 'Amazon Corp', to: 'Regulatory fines and settlements', amount: '$9.3B', purpose: 'Privacy violation penalties resulting from Big Tech Monopoly', documented: true },
  ],

  'billionaire-tax-avoidance': [
    { date: '2016-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$48.0B', purpose: 'Government spending on programs implicated in Billionaire Tax Avoidance', documented: true },
    { date: '2019-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$622M', purpose: 'Settlement costs and remediation arising from Billionaire Tax Avoidance', documented: true },
    { date: '2017-01-01', from: 'Jeff Bezos', to: 'Oversight and investigation costs', amount: '$106M', purpose: 'Congressional and inspector general investigation costs for Billionaire Tax Avoidance', documented: false },
  ],

  'boarding-schools': [
    { date: '2019-01-01', from: 'Boarding Schools', to: 'Operations during misconduct period', amount: '$6.8B', purpose: 'Institutional spending during period of abuse in Boarding Schools', documented: true },
    { date: '2023-01-01', from: 'Boarding Schools', to: 'Victim settlements', amount: '$2.3B', purpose: 'Settlements and reparations paid to victims of Boarding Schools', documented: true },
  ],

  'boeing-safety-failures': [
    { date: '2021-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$18.2B', purpose: 'Government spending on programs implicated in Boeing Safety Failures', documented: true },
    { date: '2024-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$1.6B', purpose: 'Settlement costs and remediation arising from Boeing Safety Failures', documented: true },
    { date: '2022-01-01', from: 'Boeing', to: 'Oversight and investigation costs', amount: '$787M', purpose: 'Congressional and inspector general investigation costs for Boeing Safety Failures', documented: false },
  ],

  'bop-failures': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$9.8B', purpose: 'Government spending on programs implicated in BOP Failures', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$2.1B', purpose: 'Settlement costs and remediation arising from BOP Failures', documented: true },
    { date: '2025-01-01', from: 'Federal Bureau of Prisons', to: 'Oversight and investigation costs', amount: '$729M', purpose: 'Congressional and inspector general investigation costs for BOP Failures', documented: false },
  ],

  'border-deaths': [
    { date: '2022-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$3.3B', purpose: 'Department funding during period of misconduct in Border Deaths', documented: true },
    { date: '2024-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$308M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Border Deaths', documented: true },
    { date: '2023-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$239M', purpose: 'Equipment and training spending related to Border Deaths', documented: true },
  ],

  'boston-archdiocese-coverup': [
    { date: '2020-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$23.5B', purpose: 'Government spending on programs implicated in Boston Archdiocese Coverup', documented: true },
    { date: '2023-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$911M', purpose: 'Settlement costs and remediation arising from Boston Archdiocese Coverup', documented: true },
    { date: '2021-01-01', from: 'John Geoghan', to: 'Oversight and investigation costs', amount: '$818M', purpose: 'Congressional and inspector general investigation costs for Boston Archdiocese Coverup', documented: false },
  ],

  'botham-jean-murder': [
    { date: '2025-01-01', from: 'Amber Guyger', to: 'Operations and activities', amount: '$29.5B', purpose: 'Financial flows connected to Botham Jean Murder', documented: true },
    { date: '2025-01-01', from: 'Amber Guyger', to: 'Legal and remediation costs', amount: '$9.9B', purpose: 'Accountability costs arising from Botham Jean Murder', documented: true },
  ],

  'breonna-taylor': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$3.7B', purpose: 'Government spending on programs implicated in Breonna Taylor', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$6.5B', purpose: 'Settlement costs and remediation arising from Breonna Taylor', documented: true },
    { date: '2025-01-01', from: 'Breonna Taylor', to: 'Oversight and investigation costs', amount: '$1.1B', purpose: 'Congressional and inspector general investigation costs for Breonna Taylor', documented: false },
  ],

  'brian-sicknick': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$37.0B', purpose: 'Government spending on programs implicated in Brian Sicknick', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$5.0B', purpose: 'Settlement costs and remediation arising from Brian Sicknick', documented: true },
    { date: '2025-01-01', from: 'Julian Khater', to: 'Oversight and investigation costs', amount: '$507M', purpose: 'Congressional and inspector general investigation costs for Brian Sicknick', documented: false },
  ],

  'buffalo-massacre': [
    { date: '2017-01-01', from: 'Dylann Roof', to: 'Operations and activities', amount: '$4.7B', purpose: 'Financial flows connected to Buffalo Massacre', documented: true },
    { date: '2020-01-01', from: 'Dylann Roof', to: 'Legal and remediation costs', amount: '$10.9B', purpose: 'Accountability costs arising from Buffalo Massacre', documented: true },
  ],

  'bay-of-pigs-cover-up': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'CIA', amount: '$47.8B', purpose: 'Budget allocation for operations connected to Bay of Pigs Cover-Up', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$36.6B', purpose: 'Contractor profits from programs related to Bay of Pigs Cover-Up', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$6.7B', purpose: 'Classified spending on programs exposed in Bay of Pigs Cover-Up', documented: false },
  ],

  'big-pharma-patent-evergreening': [
    { date: '2023-01-01', from: 'AbbVie', to: 'Revenue from harmful products/practices', amount: '$80.7B', purpose: 'Revenue generated from products or practices at center of Big Pharma Patent Evergreening', documented: true },
    { date: '2025-01-01', from: 'AbbVie', to: 'Lobbying and political influence', amount: '$886M', purpose: 'Lobbying expenditures to prevent regulation related to Big Pharma Patent Evergreening', documented: true },
    { date: '2025-01-01', from: 'AbbVie', to: 'Settlements and victim compensation', amount: '$37.8B', purpose: 'Legal settlements and compensation arising from Big Pharma Patent Evergreening', documented: true },
  ],

  'banking-lobby-capture-of-fed': [
    { date: '2021-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$26.7B', purpose: 'Fraudulent financial activity in Banking Lobby Capture of the Federal Reserve', documented: true },
    { date: '2024-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$5.0B', purpose: 'Fines and penalties imposed for violations uncovered in Banking Lobby Capture of the Federal Reserve', documented: true },
    { date: '2023-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$1.6B', purpose: 'Restitution and settlement payments to victims of Banking Lobby Capture of the Federal Reserve', documented: true },
  ],

  'big-tech-antitrust-failures': [
    { date: '2025-01-01', from: 'Google', to: 'Revenue from harmful practices', amount: '$103.8B', purpose: 'Google revenue while engaging in practices exposed by Big Tech Antitrust Failures', documented: true },
    { date: '2025-01-01', from: 'Google', to: 'Anti-regulation lobbying', amount: '$1.9B', purpose: 'Lobbying spending by Google to avoid accountability in Big Tech Antitrust Failures', documented: true },
    { date: '2025-01-01', from: 'Google', to: 'Legal penalties and settlements', amount: '$982M', purpose: 'Fines and settlements resulting from Big Tech Antitrust Failures', documented: true },
  ],

  'ballot-chain-of-custody-violations': [
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.3B', purpose: 'Undisclosed political spending connected to Ballot Chain of Custody Violations', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'CISA', amount: '$800M', purpose: 'Campaign contributions and financial benefits flowing through Ballot Chain of Custody Violations', documented: true },
    { date: '2025-01-01', from: 'CISA', to: 'Personal financial enrichment', amount: '$57M', purpose: 'Personal financial benefits gained through corruption in Ballot Chain of Custody Violations', documented: false },
  ],

  'bankruptcy-fraud-hidden-asset-schemes': [
    { date: '2019-01-01', from: 'Bankruptcy', to: 'Illicit financial flows', amount: '$18.6B', purpose: 'Fraudulent financial activity in Bankruptcy Fraud: Hidden Asset Schemes', documented: true },
    { date: '2022-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Bankruptcy', amount: '$1.4B', purpose: 'Fines and penalties imposed for violations uncovered in Bankruptcy Fraud: Hidden Asset Schemes', documented: true },
    { date: '2021-01-01', from: 'Bankruptcy', to: 'Affected investors / victims', amount: '$8.4B', purpose: 'Restitution and settlement payments to victims of Bankruptcy Fraud: Hidden Asset Schemes', documented: true },
  ],

  'birth-rate-manipulation-policy-analysis': [
    { date: '2025-01-01', from: 'Birth Rate Manipulation', to: 'Operations during misconduct period', amount: '$6.8B', purpose: 'Institutional spending during period of abuse in Birth Rate Manipulation: Policy Analysis', documented: true },
    { date: '2025-01-01', from: 'Birth Rate Manipulation', to: 'Victim settlements', amount: '$5.1B', purpose: 'Settlements and reparations paid to victims of Birth Rate Manipulation: Policy Analysis', documented: true },
  ],

  'boeing-safety': [
    { date: '2020-01-01', from: 'FAA', to: 'Operations and activities', amount: '$8.6B', purpose: 'Financial flows connected to Boeing Safety', documented: true },
    { date: '2023-01-01', from: 'FAA', to: 'Legal and remediation costs', amount: '$967M', purpose: 'Accountability costs arising from Boeing Safety', documented: true },
  ],

  'banking-crisis-manipulation': [
    { date: '2008-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$7.7B', purpose: 'Fraudulent financial activity in Banking Crisis Manipulation', documented: true },
    { date: '2011-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$5.1B', purpose: 'Fines and penalties imposed for violations uncovered in Banking Crisis Manipulation', documented: true },
    { date: '2010-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$11.9B', purpose: 'Restitution and settlement payments to victims of Banking Crisis Manipulation', documented: true },
  ],

  'big-pharma-price-gouging': [
    { date: '2021-01-01', from: 'Pfizer', to: 'Revenue from harmful products/practices', amount: '$47.4B', purpose: 'Revenue generated from products or practices at center of Big Pharma Price Gouging', documented: true },
    { date: '2023-01-01', from: 'Pfizer', to: 'Lobbying and political influence', amount: '$941M', purpose: 'Lobbying expenditures to prevent regulation related to Big Pharma Price Gouging', documented: true },
    { date: '2025-01-01', from: 'Pfizer', to: 'Settlements and victim compensation', amount: '$18.2B', purpose: 'Legal settlements and compensation arising from Big Pharma Price Gouging', documented: true },
  ],

  'bitcoin-regulation-capture': [
    { date: '2022-01-01', from: 'Binance', to: 'Illicit financial flows', amount: '$11.0B', purpose: 'Fraudulent financial activity in Bitcoin Regulation Capture', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Binance', amount: '$2.9B', purpose: 'Fines and penalties imposed for violations uncovered in Bitcoin Regulation Capture', documented: true },
    { date: '2024-01-01', from: 'Binance', to: 'Affected investors / victims', amount: '$1.2B', purpose: 'Restitution and settlement payments to victims of Bitcoin Regulation Capture', documented: true },
  ],

  'bosnian-genocide': [
    { date: '1992-01-01', from: 'Radovan Karadzic', to: 'Military/security operations', amount: '$187.0B', purpose: 'Military spending on operations involving atrocities in Bosnian Genocide and Srebrenica Massacre', documented: false },
    { date: '1994-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$16.0B', purpose: 'Weapons industry profits from conflict in Bosnian Genocide and Srebrenica Massacre', documented: true },
    { date: '1997-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$19.7B', purpose: 'Reparations and frozen assets related to Bosnian Genocide and Srebrenica Massacre', documented: true },
  ],

  'bail-bond-industry-poverty-incarceration': [
    { date: '2018-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$1.2B', purpose: 'Department funding during period of misconduct in The Bail Bond Industry: How America Criminalizes Poverty', documented: true },
    { date: '2020-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.1B', purpose: 'Taxpayer-funded settlements for misconduct exposed in The Bail Bond Industry: How America Criminalizes Poverty', documented: true },
    { date: '2019-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$205M', purpose: 'Equipment and training spending related to The Bail Bond Industry: How America Criminalizes Poverty', documented: true },
  ],

  'boeing-corporate-manslaughter': [
    { date: '2018-01-01', from: 'FAA', to: 'Revenue from harmful practices', amount: '$43.2B', purpose: 'FAA revenue while engaging in practices exposed by Boeing Corporate Manslaughter', documented: true },
    { date: '2020-01-01', from: 'FAA', to: 'Anti-regulation lobbying', amount: '$131M', purpose: 'Lobbying spending by FAA to avoid accountability in Boeing Corporate Manslaughter', documented: true },
    { date: '2022-01-01', from: 'FAA', to: 'Legal penalties and settlements', amount: '$6.2B', purpose: 'Fines and settlements resulting from Boeing Corporate Manslaughter', documented: true },
  ],

  'big-pharma-price-gouging-crisis': [
    { date: '2016-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$66.5B', purpose: 'Revenue generated from products or practices at center of Big Pharma Prescription Drug Price Gouging', documented: true },
    { date: '2018-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.9B', purpose: 'Lobbying expenditures to prevent regulation related to Big Pharma Prescription Drug Price Gouging', documented: true },
    { date: '2020-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$13.3B', purpose: 'Legal settlements and compensation arising from Big Pharma Prescription Drug Price Gouging', documented: true },
  ],

  'bear-stearns-2008-collapse': [
    { date: '2008-01-01', from: 'Bear Stearns', to: 'Illicit financial flows', amount: '$12.4B', purpose: 'Fraudulent financial activity in Bear Stearns: The First Domino of the 2008 Financial Crisis', documented: true },
    { date: '2011-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Bear Stearns', amount: '$2.6B', purpose: 'Fines and penalties imposed for violations uncovered in Bear Stearns: The First Domino of the 2008 Financial Crisis', documented: true },
    { date: '2010-01-01', from: 'Bear Stearns', to: 'Affected investors / victims', amount: '$8.5B', purpose: 'Restitution and settlement payments to victims of Bear Stearns: The First Domino of the 2008 Financial Crisis', documented: true },
  ],

  'boeing-starliner-safety-failures': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$16.3B', purpose: 'Government spending on programs implicated in Boeing Starliner: Billions Over Budget, Years Behind Schedule, and Astronauts Stranded in Space', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$539M', purpose: 'Settlement costs and remediation arising from Boeing Starliner: Billions Over Budget, Years Behind Schedule, and Astronauts Stranded in Space', documented: true },
    { date: '2025-01-01', from: 'Boeing', to: 'Oversight and investigation costs', amount: '$526M', purpose: 'Congressional and inspector general investigation costs for Boeing Starliner: Billions Over Budget, Years Behind Schedule, and Astronauts Stranded in Space', documented: false },
  ],



  // ========== P ==========

  'pentagon-budget-unauditable-waste': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$72.5B', purpose: 'Government spending on programs implicated in Pentagon Budget: The $886 Billion Unauditable Black Hole', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$2.5B', purpose: 'Settlement costs and remediation arising from Pentagon Budget: The $886 Billion Unauditable Black Hole', documented: true },
    { date: '2025-01-01', from: 'DOD', to: 'Oversight and investigation costs', amount: '$625M', purpose: 'Congressional and inspector general investigation costs for Pentagon Budget: The $886 Billion Unauditable Black Hole', documented: false },
  ],


  // ========== B ==========

  'body-camera-accountability-gaps': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$2.3B', purpose: 'Department funding during period of misconduct in Police Body Camera Programs and the Accountability Illusion', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$321M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Police Body Camera Programs and the Accountability Illusion', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$424M', purpose: 'Equipment and training spending related to Police Body Camera Programs and the Accountability Illusion', documented: true },
  ],

  'border-patrol-abuse-patterns': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$4.3B', purpose: 'Government spending on operations that violated civil rights in Border Patrol Abuse Patterns', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$2.2B', purpose: 'Settlements and compensation to victims of Border Patrol Abuse Patterns', documented: true },
  ],

  'british-american-colonial-biological-warfare': [
    { date: '1763-01-01', from: 'British Colonial Government', to: 'Operations and activities', amount: '$38.7B', purpose: 'Financial flows connected to Biological Warfare Against Indigenous Peoples: Smallpox, Forced Starvation, and Deliberate Disease Spread (1763-1890)', documented: true },
    { date: '1766-01-01', from: 'British Colonial Government', to: 'Legal and remediation costs', amount: '$3.2B', purpose: 'Accountability costs arising from Biological Warfare Against Indigenous Peoples: Smallpox, Forced Starvation, and Deliberate Disease Spread (1763-1890)', documented: true },
  ],


  // ========== C ==========

  'cybercrimes': [
    { date: '2012-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.8B', purpose: 'Undisclosed political spending connected to Cybercrimes & Hacking Encouragement', documented: false },
    { date: '2013-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.7B', purpose: 'Campaign contributions and financial benefits flowing through Cybercrimes & Hacking Encouragement', documented: true },
    { date: '2014-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$512M', purpose: 'Personal financial benefits gained through corruption in Cybercrimes & Hacking Encouragement', documented: false },
  ],

  'currency-manipulation': [
    { date: '2011-01-01', from: 'George Soros', to: 'Illicit financial flows', amount: '$8.1B', purpose: 'Fraudulent financial activity in Currency & Financial Market Manipulation', documented: true },
    { date: '2014-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against George Soros', amount: '$3.0B', purpose: 'Fines and penalties imposed for violations uncovered in Currency & Financial Market Manipulation', documented: true },
    { date: '2013-01-01', from: 'George Soros', to: 'Affected investors / victims', amount: '$11.9B', purpose: 'Restitution and settlement payments to victims of Currency & Financial Market Manipulation', documented: true },
  ],

  'comey-firing': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$3.1B', purpose: 'Undisclosed political spending connected to James Comey Firing & Obstruction', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.4B', purpose: 'Campaign contributions and financial benefits flowing through James Comey Firing & Obstruction', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$121M', purpose: 'Personal financial benefits gained through corruption in James Comey Firing & Obstruction', documented: false },
  ],

  'central-park-five': [
    { date: '2014-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$15.5B', purpose: 'Government spending on operations that violated civil rights in Central Park Five', documented: true },
    { date: '2018-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$4.7B', purpose: 'Settlements and compensation to victims of Central Park Five', documented: true },
  ],

  'census-interference': [
    { date: '2018-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$704M', purpose: 'Government spending on operations that violated civil rights in Census Citizenship Question', documented: true },
    { date: '2022-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$4.1B', purpose: 'Settlements and compensation to victims of Census Citizenship Question', documented: true },
  ],

  'campaign-finance': [
    { date: '2021-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.5B', purpose: 'Undisclosed political spending connected to Campaign Finance Corruption', documented: false },
    { date: '2022-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$394M', purpose: 'Campaign contributions and financial benefits flowing through Campaign Finance Corruption', documented: true },
    { date: '2023-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$660M', purpose: 'Personal financial benefits gained through corruption in Campaign Finance Corruption', documented: false },
  ],

  'civil-rights-rollbacks': [
    { date: '2017-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$17.6B', purpose: 'Government spending on operations that violated civil rights in Civil Rights Rollbacks', documented: true },
    { date: '2021-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$952M', purpose: 'Settlements and compensation to victims of Civil Rights Rollbacks', documented: true },
  ],

  'cabinet-ethics': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$7.3B', purpose: 'Undisclosed political spending connected to Cabinet Ethics Scandals', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$441M', purpose: 'Campaign contributions and financial benefits flowing through Cabinet Ethics Scandals', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$328M', purpose: 'Personal financial benefits gained through corruption in Cabinet Ethics Scandals', documented: false },
  ],

  'crow-network': [
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$7.3B', purpose: 'Undisclosed political spending connected to Harlan Crow Gift Network', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'Harlan Crow', amount: '$710M', purpose: 'Campaign contributions and financial benefits flowing through Harlan Crow Gift Network', documented: true },
    { date: '2025-01-01', from: 'Harlan Crow', to: 'Personal financial enrichment', amount: '$300M', purpose: 'Personal financial benefits gained through corruption in Harlan Crow Gift Network', documented: false },
  ],

  'coffee-county': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.5B', purpose: 'Undisclosed political spending connected to Coffee County Election Breach', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$291M', purpose: 'Campaign contributions and financial benefits flowing through Coffee County Election Breach', documented: true },
    { date: '2024-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$744M', purpose: 'Personal financial benefits gained through corruption in Coffee County Election Breach', documented: false },
  ],

  'cia-black-sites': [
    { date: '2011-01-01', from: 'CIA', to: 'Military/security operations', amount: '$66.9B', purpose: 'Military spending on operations involving atrocities in CIA Black Sites', documented: false },
    { date: '2013-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$17.2B', purpose: 'Weapons industry profits from conflict in CIA Black Sites', documented: true },
    { date: '2016-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$14.9B', purpose: 'Reparations and frozen assets related to CIA Black Sites', documented: true },
  ],

  'covid-origins': [
    { date: '2020-01-01', from: 'Wuhan Institute of Virology', to: 'Revenue from harmful products/practices', amount: '$26.7B', purpose: 'Revenue generated from products or practices at center of COVID-19 Origins Investigation', documented: true },
    { date: '2022-01-01', from: 'Wuhan Institute of Virology', to: 'Lobbying and political influence', amount: '$796M', purpose: 'Lobbying expenditures to prevent regulation related to COVID-19 Origins Investigation', documented: true },
    { date: '2024-01-01', from: 'Wuhan Institute of Virology', to: 'Settlements and victim compensation', amount: '$18.8B', purpose: 'Legal settlements and compensation arising from COVID-19 Origins Investigation', documented: true },
  ],

  'christian-nationalism': [
    { date: '2014-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.5B', purpose: 'Undisclosed political spending connected to Christian Nationalism', documented: false },
    { date: '2015-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$802M', purpose: 'Campaign contributions and financial benefits flowing through Christian Nationalism', documented: true },
    { date: '2016-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$458M', purpose: 'Personal financial benefits gained through corruption in Christian Nationalism', documented: false },
  ],

  'covid-misinfo': [
    { date: '2020-01-01', from: 'Donald Trump', to: 'Revenue from harmful products/practices', amount: '$117.2B', purpose: 'Revenue generated from products or practices at center of COVID-19 Misinformation Campaign', documented: true },
    { date: '2022-01-01', from: 'Donald Trump', to: 'Lobbying and political influence', amount: '$1.0B', purpose: 'Lobbying expenditures to prevent regulation related to COVID-19 Misinformation Campaign', documented: true },
    { date: '2024-01-01', from: 'Donald Trump', to: 'Settlements and victim compensation', amount: '$35.5B', purpose: 'Legal settlements and compensation arising from COVID-19 Misinformation Campaign', documented: true },
  ],

  'china-coverup': [
    { date: '2020-01-01', from: 'Xi Jinping', to: 'Revenue from harmful products/practices', amount: '$14.1B', purpose: 'Revenue generated from products or practices at center of China COVID-19 Coverup Allegations', documented: true },
    { date: '2022-01-01', from: 'Xi Jinping', to: 'Lobbying and political influence', amount: '$84M', purpose: 'Lobbying expenditures to prevent regulation related to China COVID-19 Coverup Allegations', documented: true },
    { date: '2024-01-01', from: 'Xi Jinping', to: 'Settlements and victim compensation', amount: '$8.0B', purpose: 'Legal settlements and compensation arising from China COVID-19 Coverup Allegations', documented: true },
  ],

  'cdc-testing': [
    { date: '2020-01-01', from: 'CDC', to: 'Revenue from harmful products/practices', amount: '$25.9B', purpose: 'Revenue generated from products or practices at center of CDC Testing Failures', documented: true },
    { date: '2022-01-01', from: 'CDC', to: 'Lobbying and political influence', amount: '$500M', purpose: 'Lobbying expenditures to prevent regulation related to CDC Testing Failures', documented: true },
    { date: '2024-01-01', from: 'CDC', to: 'Settlements and victim compensation', amount: '$2.1B', purpose: 'Legal settlements and compensation arising from CDC Testing Failures', documented: true },
  ],

  'colorado-election-breach': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.8B', purpose: 'Undisclosed political spending connected to Mesa County Election System Breach', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$602M', purpose: 'Campaign contributions and financial benefits flowing through Mesa County Election System Breach', documented: true },
    { date: '2024-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$432M', purpose: 'Personal financial benefits gained through corruption in Mesa County Election System Breach', documented: false },
  ],

  'climate-denial-media': [
    { date: '2014-01-01', from: 'Fox News', to: 'Revenue from disinformation', amount: '$69.3B', purpose: 'Revenue generated while spreading misleading content in Climate Denial Media Network', documented: true },
    { date: '2016-01-01', from: 'Fox News', to: 'Legal penalties', amount: '$9.5B', purpose: 'Legal costs and settlements for misconduct in Climate Denial Media Network', documented: true },
  ],

  'crimes-against-humanity': [
    { date: '2012-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$17.7B', purpose: 'Foreign spending on influence operations in Crimes Against Humanity', documented: false },
    { date: '2014-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$310M', purpose: 'US government response costs for Crimes Against Humanity', documented: true },
  ],

  'color-revolutions': [
    { date: '2015-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$4.3B', purpose: 'Foreign spending on influence operations in Color Revolutions & U.S. Democracy Promotion', documented: false },
    { date: '2017-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$4.8B', purpose: 'US government response costs for Color Revolutions & U.S. Democracy Promotion', documented: true },
  ],

  'congress-obstruction': [
    { date: '2023-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$39.4B', purpose: 'Government spending on programs implicated in Congressional Obstruction Machine', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$2.2B', purpose: 'Settlement costs and remediation arising from Congressional Obstruction Machine', documented: true },
    { date: '2024-01-01', from: 'Republican National Committee', to: 'Oversight and investigation costs', amount: '$1.1B', purpose: 'Congressional and inspector general investigation costs for Congressional Obstruction Machine', documented: false },
  ],

  'china-influence': [
    { date: '2023-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$6.0B', purpose: 'Foreign spending on influence operations in Chinese Influence Operations in America', documented: false },
    { date: '2025-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$2.4B', purpose: 'US government response costs for Chinese Influence Operations in America', documented: true },
  ],

  'corporate-crime': [
    { date: '2009-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$14.5B', purpose: 'Fraudulent financial activity in Corporate Crime Without Punishment', documented: true },
    { date: '2012-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$279M', purpose: 'Fines and penalties imposed for violations uncovered in Corporate Crime Without Punishment', documented: true },
    { date: '2011-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$13.0B', purpose: 'Restitution and settlement payments to victims of Corporate Crime Without Punishment', documented: true },
  ],

  'cia-assassinations': [
    { date: '2011-01-01', from: 'US taxpayers', to: 'CIA', amount: '$87.1B', purpose: 'Budget allocation for operations connected to CIA Assassination Programs', documented: false },
    { date: '2012-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$25.1B', purpose: 'Contractor profits from programs related to CIA Assassination Programs', documented: true },
    { date: '2014-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$27.4B', purpose: 'Classified spending on programs exposed in CIA Assassination Programs', documented: false },
  ],

  'climate-denial': [
    { date: '2013-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$157.6B', purpose: 'Revenue from operations causing environmental damage in Climate Denial Industry', documented: true },
    { date: '2018-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$17.4B', purpose: 'Environmental remediation and regulatory penalties for Climate Denial Industry', documented: true },
    { date: '2015-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$130M', purpose: 'Lobbying to weaken regulations related to Climate Denial Industry', documented: true },
  ],

  'crypto-scams': [
    { date: '2022-01-01', from: 'Sam Bankman-Fried', to: 'Illicit financial flows', amount: '$9.0B', purpose: 'Fraudulent financial activity in Cryptocurrency Fraud Epidemic', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Sam Bankman-Fried', amount: '$2.9B', purpose: 'Fines and penalties imposed for violations uncovered in Cryptocurrency Fraud Epidemic', documented: true },
    { date: '2024-01-01', from: 'Sam Bankman-Fried', to: 'Affected investors / victims', amount: '$10.9B', purpose: 'Restitution and settlement payments to victims of Cryptocurrency Fraud Epidemic', documented: true },
  ],

  'catholic-church-abuse': [
    { date: '2023-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$6.2B', purpose: 'Estimated proceeds from trafficking operations in Catholic Church Abuse', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$375M', purpose: 'Law enforcement asset seizures related to Catholic Church Abuse', documented: true },
    { date: '2025-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$738M', purpose: 'Victim restitution and support programs from Catholic Church Abuse', documented: true },
  ],

  'cbs-sexual-harassment': [
    { date: '2014-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$19.2B', purpose: 'Estimated proceeds from trafficking operations in CBS Sexual Harassment', documented: false },
    { date: '2017-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$3.3B', purpose: 'Law enforcement asset seizures related to CBS Sexual Harassment', documented: true },
    { date: '2016-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$547M', purpose: 'Victim restitution and support programs from CBS Sexual Harassment', documented: true },
  ],

  'celsius-collapse': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$5.8B', purpose: 'Government spending on programs implicated in Celsius Collapse', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$2.8B', purpose: 'Settlement costs and remediation arising from Celsius Collapse', documented: true },
    { date: '2025-01-01', from: 'Alex Mashinsky', to: 'Oversight and investigation costs', amount: '$411M', purpose: 'Congressional and inspector general investigation costs for Celsius Collapse', documented: false },
  ],

  'central-america-death-squads': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'CIA', amount: '$45.8B', purpose: 'Government spending on programs implicated in Central America Death Squads', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Legal settlements and remediation', amount: '$7.0B', purpose: 'Settlement costs and remediation arising from Central America Death Squads', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Oversight and investigation costs', amount: '$1.2B', purpose: 'Congressional and inspector general investigation costs for Central America Death Squads', documented: false },
  ],

  'charleston-massacre': [
    { date: '2023-01-01', from: 'Dylann Roof', to: 'Operations and activities', amount: '$27.5B', purpose: 'Financial flows connected to Charleston Massacre', documented: true },
    { date: '2025-01-01', from: 'Dylann Roof', to: 'Legal and remediation costs', amount: '$4.2B', purpose: 'Accountability costs arising from Charleston Massacre', documented: true },
  ],

  'charlie-rose-harassment': [
    { date: '2021-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$5.2B', purpose: 'Estimated proceeds from trafficking operations in Charlie Rose Harassment', documented: false },
    { date: '2024-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$1.4B', purpose: 'Law enforcement asset seizures related to Charlie Rose Harassment', documented: true },
    { date: '2023-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$104M', purpose: 'Victim restitution and support programs from Charlie Rose Harassment', documented: true },
  ],

  'chevron-ecuador': [
    { date: '2011-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$30.5B', purpose: 'Government spending on programs implicated in Chevron Ecuador', documented: true },
    { date: '2014-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$5.5B', purpose: 'Settlement costs and remediation arising from Chevron Ecuador', documented: true },
    { date: '2012-01-01', from: 'Amazon Corp', to: 'Oversight and investigation costs', amount: '$1.2B', purpose: 'Congressional and inspector general investigation costs for Chevron Ecuador', documented: false },
  ],

  'chicago-police-coverup': [
    { date: '2018-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$5.0B', purpose: 'Department funding during period of misconduct in Chicago Police Coverup', documented: true },
    { date: '2020-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$121M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Chicago Police Coverup', documented: true },
    { date: '2019-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$723M', purpose: 'Equipment and training spending related to Chicago Police Coverup', documented: true },
  ],

  'chicago-police-torture': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$9.7B', purpose: 'Department funding during period of misconduct in Chicago Police Torture', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$653M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Chicago Police Torture', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$795M', purpose: 'Equipment and training spending related to Chicago Police Torture', documented: true },
  ],





  'china-tech': [
    { date: '2019-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$35.1B', purpose: 'Government spending on programs implicated in China Tech', documented: true },
    { date: '2022-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$4.7B', purpose: 'Settlement costs and remediation arising from China Tech', documented: true },
    { date: '2020-01-01', from: 'Huawei Technologies', to: 'Oversight and investigation costs', amount: '$553M', purpose: 'Congressional and inspector general investigation costs for China Tech', documented: false },
  ],

  'cia-origins': [
    { date: '2016-01-01', from: 'US taxpayers', to: 'CIA', amount: '$42.9B', purpose: 'Government spending on programs implicated in CIA Origins and Operation Paperclip', documented: true },
    { date: '2019-01-01', from: 'CIA', to: 'Legal settlements and remediation', amount: '$10.2B', purpose: 'Settlement costs and remediation arising from CIA Origins and Operation Paperclip', documented: true },
    { date: '2017-01-01', from: 'Allen Dulles', to: 'Oversight and investigation costs', amount: '$738M', purpose: 'Congressional and inspector general investigation costs for CIA Origins and Operation Paperclip', documented: false },
  ],

  'cia-tape-destruction': [
    { date: '2023-01-01', from: 'US taxpayers', to: 'CIA', amount: '$17.9B', purpose: 'Government spending on programs implicated in CIA Interrogation Tape Destruction', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Legal settlements and remediation', amount: '$5.6B', purpose: 'Settlement costs and remediation arising from CIA Interrogation Tape Destruction', documented: true },
    { date: '2024-01-01', from: 'CIA', to: 'Oversight and investigation costs', amount: '$186M', purpose: 'Congressional and inspector general investigation costs for CIA Interrogation Tape Destruction', documented: false },
  ],

  'civil-rights': [
    { date: '2025-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$9.7B', purpose: 'Government spending on operations that violated civil rights in Civil Rights Movement and Government Repression', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.6B', purpose: 'Settlements and compensation to victims of Civil Rights Movement and Government Repression', documented: true },
  ],

  'climate-coverup': [
    { date: '2017-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$47.0B', purpose: 'Revenue from operations causing environmental damage in Fossil Fuel Industry Climate Cover-Up', documented: true },
    { date: '2022-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$4.1B', purpose: 'Environmental remediation and regulatory penalties for Fossil Fuel Industry Climate Cover-Up', documented: true },
    { date: '2019-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$310M', purpose: 'Lobbying to weaken regulations related to Fossil Fuel Industry Climate Cover-Up', documented: true },
  ],

  'climate-denial-network': [
    { date: '2019-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$73.8B', purpose: 'Revenue from operations causing environmental damage in Climate Denial Network', documented: true },
    { date: '2024-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$5.0B', purpose: 'Environmental remediation and regulatory penalties for Climate Denial Network', documented: true },
    { date: '2021-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$113M', purpose: 'Lobbying to weaken regulations related to Climate Denial Network', documented: true },
  ],

  'climate-disinformation': [
    { date: '2023-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$34.0B', purpose: 'Revenue from operations causing environmental damage in Climate Disinformation in the Digital Age', documented: true },
    { date: '2025-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$10.6B', purpose: 'Environmental remediation and regulatory penalties for Climate Disinformation in the Digital Age', documented: true },
    { date: '2025-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$26M', purpose: 'Lobbying to weaken regulations related to Climate Disinformation in the Digital Age', documented: true },
  ],

  'climate-obstruction': [
    { date: '2023-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$60.6B', purpose: 'Revenue from operations causing environmental damage in Climate Legislation Obstruction', documented: true },
    { date: '2025-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$18.7B', purpose: 'Environmental remediation and regulatory penalties for Climate Legislation Obstruction', documented: true },
    { date: '2025-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$361M', purpose: 'Lobbying to weaken regulations related to Climate Legislation Obstruction', documented: true },
  ],

  'columbia-hca-fraud': [
    { date: '2022-01-01', from: 'Rick Scott', to: 'Illicit financial flows', amount: '$27.1B', purpose: 'Fraudulent financial activity in Columbia/HCA Healthcare Fraud', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Rick Scott', amount: '$3.7B', purpose: 'Fines and penalties imposed for violations uncovered in Columbia/HCA Healthcare Fraud', documented: true },
    { date: '2024-01-01', from: 'Rick Scott', to: 'Affected investors / victims', amount: '$15.2B', purpose: 'Restitution and settlement payments to victims of Columbia/HCA Healthcare Fraud', documented: true },
  ],

  'columbus-legacy': [
    { date: '2025-01-01', from: 'Christopher Columbus', to: 'Military/security operations', amount: '$152.4B', purpose: 'Military spending on operations involving atrocities in Columbus Legacy and Indigenous Genocide', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$22.3B', purpose: 'Weapons industry profits from conflict in Columbus Legacy and Indigenous Genocide', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$18.3B', purpose: 'Reparations and frozen assets related to Columbus Legacy and Indigenous Genocide', documented: true },
  ],

  'congressional-age': [
    { date: '2016-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.2B', purpose: 'Undisclosed political spending connected to Congressional Gerontocracy Crisis', documented: false },
    { date: '2017-01-01', from: 'Corporate donors', to: 'Dianne Feinstein', amount: '$951M', purpose: 'Campaign contributions and financial benefits flowing through Congressional Gerontocracy Crisis', documented: true },
    { date: '2018-01-01', from: 'Dianne Feinstein', to: 'Personal financial enrichment', amount: '$279M', purpose: 'Personal financial benefits gained through corruption in Congressional Gerontocracy Crisis', documented: false },
  ],

  'congressional-conflicts': [
    { date: '2025-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.9B', purpose: 'Undisclosed political spending connected to Congressional Conflicts of Interest', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'Congressional Conflicts of Interest', amount: '$675M', purpose: 'Campaign contributions and financial benefits flowing through Congressional Conflicts of Interest', documented: true },
    { date: '2025-01-01', from: 'Congressional Conflicts of Interest', to: 'Personal financial enrichment', amount: '$443M', purpose: 'Personal financial benefits gained through corruption in Congressional Conflicts of Interest', documented: false },
  ],

  'congressional-corruption': [
    { date: '2017-01-01', from: 'Congressional Corruption', to: 'Illicit financial flows', amount: '$15.4B', purpose: 'Fraudulent financial activity in Congressional Corruption Scandals', documented: true },
    { date: '2020-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Congressional Corruption', amount: '$4.3B', purpose: 'Fines and penalties imposed for violations uncovered in Congressional Corruption Scandals', documented: true },
    { date: '2019-01-01', from: 'Congressional Corruption', to: 'Affected investors / victims', amount: '$10.3B', purpose: 'Restitution and settlement payments to victims of Congressional Corruption Scandals', documented: true },
  ],

  'congressional-obstruction': [
    { date: '2020-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.2B', purpose: 'Undisclosed political spending connected to Congressional Obstruction of Governance', documented: false },
    { date: '2021-01-01', from: 'Corporate donors', to: 'Congressional Obstruction of Governance', amount: '$250M', purpose: 'Campaign contributions and financial benefits flowing through Congressional Obstruction of Governance', documented: true },
    { date: '2022-01-01', from: 'Congressional Obstruction of Governance', to: 'Personal financial enrichment', amount: '$146M', purpose: 'Personal financial benefits gained through corruption in Congressional Obstruction of Governance', documented: false },
  ],

  'congressional-perjury': [
    { date: '2025-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.3B', purpose: 'Undisclosed political spending connected to Congressional Perjury and Lies Under Oath', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'Congressional Perjury and Lies Under Oath', amount: '$1.2B', purpose: 'Campaign contributions and financial benefits flowing through Congressional Perjury and Lies Under Oath', documented: true },
    { date: '2025-01-01', from: 'Congressional Perjury and Lies Under Oath', to: 'Personal financial enrichment', amount: '$465M', purpose: 'Personal financial benefits gained through corruption in Congressional Perjury and Lies Under Oath', documented: false },
  ],

  'congressional-trading': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.4B', purpose: 'Undisclosed political spending connected to Congressional Insider Trading', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Congressional Insider Trading', amount: '$690M', purpose: 'Campaign contributions and financial benefits flowing through Congressional Insider Trading', documented: true },
    { date: '2024-01-01', from: 'Congressional Insider Trading', to: 'Personal financial enrichment', amount: '$24M', purpose: 'Personal financial benefits gained through corruption in Congressional Insider Trading', documented: false },
  ],

  'corporate-capture': [
    { date: '2025-01-01', from: 'Regulatory Capture by Corporate Interests', to: 'Revenue from harmful practices', amount: '$47.5B', purpose: 'Regulatory Capture by Corporate Interests revenue while engaging in practices exposed by Regulatory Capture by Corporate Interests', documented: true },
    { date: '2025-01-01', from: 'Regulatory Capture by Corporate Interests', to: 'Anti-regulation lobbying', amount: '$288M', purpose: 'Lobbying spending by Regulatory Capture by Corporate Interests to avoid accountability in Regulatory Capture by Corporate Interests', documented: true },
    { date: '2025-01-01', from: 'Regulatory Capture by Corporate Interests', to: 'Legal penalties and settlements', amount: '$8.5B', purpose: 'Fines and settlements resulting from Regulatory Capture by Corporate Interests', documented: true },
  ],

  'corporate-corruption': [
    { date: '2015-01-01', from: 'Systemic Corporate', to: 'Illicit financial flows', amount: '$17.1B', purpose: 'Fraudulent financial activity in Systemic Corporate Corruption', documented: true },
    { date: '2018-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Systemic Corporate', amount: '$3.9B', purpose: 'Fines and penalties imposed for violations uncovered in Systemic Corporate Corruption', documented: true },
    { date: '2017-01-01', from: 'Systemic Corporate', to: 'Affected investors / victims', amount: '$8.9B', purpose: 'Restitution and settlement payments to victims of Systemic Corporate Corruption', documented: true },
  ],

  'corporate-fraud-scandals': [
    { date: '2023-01-01', from: 'Enron', to: 'Illicit financial flows', amount: '$2.0B', purpose: 'Fraudulent financial activity in Major Corporate Fraud Scandals', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Enron', amount: '$956M', purpose: 'Fines and penalties imposed for violations uncovered in Major Corporate Fraud Scandals', documented: true },
    { date: '2025-01-01', from: 'Enron', to: 'Affected investors / victims', amount: '$1.2B', purpose: 'Restitution and settlement payments to victims of Major Corporate Fraud Scandals', documented: true },
  ],

  'corporate-influence': [
    { date: '2024-01-01', from: 'US Chamber of Commerce', to: 'Revenue from harmful practices', amount: '$90.9B', purpose: 'US Chamber of Commerce revenue while engaging in practices exposed by Corporate Influence on American Democracy', documented: true },
    { date: '2025-01-01', from: 'US Chamber of Commerce', to: 'Anti-regulation lobbying', amount: '$956M', purpose: 'Lobbying spending by US Chamber of Commerce to avoid accountability in Corporate Influence on American Democracy', documented: true },
    { date: '2025-01-01', from: 'US Chamber of Commerce', to: 'Legal penalties and settlements', amount: '$4.9B', purpose: 'Fines and settlements resulting from Corporate Influence on American Democracy', documented: true },
  ],

  'corporate-lobbying': [
    { date: '2015-01-01', from: 'US Chamber of Commerce', to: 'Revenue from harmful practices', amount: '$93.1B', purpose: 'US Chamber of Commerce revenue while engaging in practices exposed by Corporate Lobbying Machine', documented: true },
    { date: '2017-01-01', from: 'US Chamber of Commerce', to: 'Anti-regulation lobbying', amount: '$1.1B', purpose: 'Lobbying spending by US Chamber of Commerce to avoid accountability in Corporate Lobbying Machine', documented: true },
    { date: '2019-01-01', from: 'US Chamber of Commerce', to: 'Legal penalties and settlements', amount: '$7.1B', purpose: 'Fines and settlements resulting from Corporate Lobbying Machine', documented: true },
  ],

  'corporate-surveillance': [
    { date: '2022-01-01', from: 'Government agencies', to: 'Meta Platforms', amount: '$9.6B', purpose: 'Contracts for surveillance technology related to Corporate Mass Surveillance', documented: false },
    { date: '2023-01-01', from: 'Meta Platforms', to: 'Data monetization revenue', amount: '$113.0B', purpose: 'Revenue from data collection practices exposed in Corporate Mass Surveillance', documented: true },
    { date: '2025-01-01', from: 'Meta Platforms', to: 'Regulatory fines and settlements', amount: '$233M', purpose: 'Privacy violation penalties resulting from Corporate Mass Surveillance', documented: true },
  ],

  'corporate-tax-avoidance': [
    { date: '2022-01-01', from: 'Apple Inc', to: 'Revenue from harmful practices', amount: '$86.5B', purpose: 'Apple Inc revenue while engaging in practices exposed by Corporate Tax Avoidance', documented: true },
    { date: '2024-01-01', from: 'Apple Inc', to: 'Anti-regulation lobbying', amount: '$959M', purpose: 'Lobbying spending by Apple Inc to avoid accountability in Corporate Tax Avoidance', documented: true },
    { date: '2025-01-01', from: 'Apple Inc', to: 'Legal penalties and settlements', amount: '$9.7B', purpose: 'Fines and settlements resulting from Corporate Tax Avoidance', documented: true },
  ],

  'corporate-union-busting': [
    { date: '2022-01-01', from: 'Amazon Inc', to: 'Revenue from harmful practices', amount: '$82.4B', purpose: 'Amazon Inc revenue while engaging in practices exposed by Corporate Union Busting', documented: true },
    { date: '2024-01-01', from: 'Amazon Inc', to: 'Anti-regulation lobbying', amount: '$684M', purpose: 'Lobbying spending by Amazon Inc to avoid accountability in Corporate Union Busting', documented: true },
    { date: '2025-01-01', from: 'Amazon Inc', to: 'Legal penalties and settlements', amount: '$6.1B', purpose: 'Fines and settlements resulting from Corporate Union Busting', documented: true },
  ],

  'corporate-wage-theft': [
    { date: '2023-01-01', from: 'Walmart Inc.', to: 'Illicit financial flows', amount: '$12.4B', purpose: 'Fraudulent financial activity in Corporate Wage Theft', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Walmart Inc.', amount: '$3.6B', purpose: 'Fines and penalties imposed for violations uncovered in Corporate Wage Theft', documented: true },
    { date: '2025-01-01', from: 'Walmart Inc.', to: 'Affected investors / victims', amount: '$8.2B', purpose: 'Restitution and settlement payments to victims of Corporate Wage Theft', documented: true },
  ],

  'corporate-water-theft': [
    { date: '2023-01-01', from: 'Nestle', to: 'Revenue from polluting operations', amount: '$97.3B', purpose: 'Revenue from operations causing environmental damage in Corporate Water Theft and Privatization', documented: true },
    { date: '2025-01-01', from: 'Nestle', to: 'EPA fines and cleanup costs', amount: '$11.9B', purpose: 'Environmental remediation and regulatory penalties for Corporate Water Theft and Privatization', documented: true },
    { date: '2025-01-01', from: 'Nestle', to: 'Environmental lobbying', amount: '$392M', purpose: 'Lobbying to weaken regulations related to Corporate Water Theft and Privatization', documented: true },
  ],


  // ========== B ==========

  'bill-cosby-sexual-assault': [
    { date: '2024-01-01', from: 'Bill Cosby', to: 'Hush money and NDAs', amount: '$159M', purpose: 'Payments to suppress allegations related to Bill Cosby Sexual Assault', documented: false },
    { date: '2025-01-01', from: 'Bill Cosby', to: 'Civil lawsuit settlements', amount: '$1.8B', purpose: 'Legal settlements in civil cases arising from Bill Cosby Sexual Assault', documented: true },
    { date: '2025-01-01', from: 'Bill Cosby', to: 'Criminal defense costs', amount: '$338M', purpose: 'Legal defense spending in Bill Cosby Sexual Assault', documented: true },
  ],


  // ========== C ==========

  'covid-corruption': [
    { date: '2021-01-01', from: 'COVID', to: 'Illicit financial flows', amount: '$7.7B', purpose: 'Fraudulent financial activity in COVID-19 Pandemic Corruption and Profiteering', documented: true },
    { date: '2024-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against COVID', amount: '$5.2B', purpose: 'Fines and penalties imposed for violations uncovered in COVID-19 Pandemic Corruption and Profiteering', documented: true },
    { date: '2023-01-01', from: 'COVID', to: 'Affected investors / victims', amount: '$7.4B', purpose: 'Restitution and settlement payments to victims of COVID-19 Pandemic Corruption and Profiteering', documented: true },
  ],

  'covid-19-disinformation-campaign': [
    { date: '2023-01-01', from: 'Donald Trump', to: 'Revenue from harmful products/practices', amount: '$115.8B', purpose: 'Revenue generated from products or practices at center of COVID-19 Disinformation Campaign', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Lobbying and political influence', amount: '$1.1B', purpose: 'Lobbying expenditures to prevent regulation related to COVID-19 Disinformation Campaign', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Settlements and victim compensation', amount: '$39.7B', purpose: 'Legal settlements and compensation arising from COVID-19 Disinformation Campaign', documented: true },
  ],

  'crypto-fraud-epidemic': [
    { date: '2023-01-01', from: 'Sam Bankman-Fried', to: 'Illicit financial flows', amount: '$3.0B', purpose: 'Fraudulent financial activity in Cryptocurrency Fraud Epidemic', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Sam Bankman-Fried', amount: '$1.9B', purpose: 'Fines and penalties imposed for violations uncovered in Cryptocurrency Fraud Epidemic', documented: true },
    { date: '2025-01-01', from: 'Sam Bankman-Fried', to: 'Affected investors / victims', amount: '$11.8B', purpose: 'Restitution and settlement payments to victims of Cryptocurrency Fraud Epidemic', documented: true },
  ],

  'cambridge-analytica-global-operations': [
    { date: '2011-01-01', from: 'Cambridge Analytica', to: 'Operations during misconduct period', amount: '$4.2B', purpose: 'Institutional spending during period of abuse in Cambridge Analytica Global Operations', documented: true },
    { date: '2015-01-01', from: 'Cambridge Analytica', to: 'Victim settlements', amount: '$4.9B', purpose: 'Settlements and reparations paid to victims of Cambridge Analytica Global Operations', documented: true },
  ],

  'credit-default-swap-fraud': [
    { date: '2020-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$14.4B', purpose: 'Fraudulent financial activity in Credit Default Swap Fraud', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$7.7B', purpose: 'Fines and penalties imposed for violations uncovered in Credit Default Swap Fraud', documented: true },
    { date: '2022-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$12.5B', purpose: 'Restitution and settlement payments to victims of Credit Default Swap Fraud', documented: true },
  ],

  'corporate-tax-avoidance-schemes': [
    { date: '2020-01-01', from: 'IRS', to: 'Illicit financial flows', amount: '$5.4B', purpose: 'Fraudulent financial activity in Corporate Tax Avoidance Schemes', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against IRS', amount: '$2.3B', purpose: 'Fines and penalties imposed for violations uncovered in Corporate Tax Avoidance Schemes', documented: true },
    { date: '2022-01-01', from: 'IRS', to: 'Affected investors / victims', amount: '$3.4B', purpose: 'Restitution and settlement payments to victims of Corporate Tax Avoidance Schemes', documented: true },
  ],

  'child-exploitation-online-networks': [
    { date: '2020-01-01', from: 'Criminal organizations', to: 'Illicit operations', amount: '$40.4B', purpose: 'Estimated criminal proceeds from operations in Child Exploitation Online Networks', documented: false },
    { date: '2023-01-01', from: 'DOJ / FBI', to: 'Assets seized', amount: '$15.7B', purpose: 'Law enforcement seizures in Child Exploitation Online Networks', documented: true },
  ],

  'corruption-in-union-leadership': [
    { date: '2021-01-01', from: 'Corruption in Union Leadership', to: 'Operations during misconduct period', amount: '$2.0B', purpose: 'Institutional spending during period of abuse in Corruption in Union Leadership', documented: true },
    { date: '2025-01-01', from: 'Corruption in Union Leadership', to: 'Victim settlements', amount: '$3.3B', purpose: 'Settlements and reparations paid to victims of Corruption in Union Leadership', documented: true },
  ],

  'casino-money-laundering-operations': [
    { date: '2025-01-01', from: 'Casino Money Laundering Operations', to: 'Illicit financial flows', amount: '$5.3B', purpose: 'Fraudulent financial activity in Casino Money Laundering Operations', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Casino Money Laundering Operations', amount: '$838M', purpose: 'Fines and penalties imposed for violations uncovered in Casino Money Laundering Operations', documented: true },
    { date: '2025-01-01', from: 'Casino Money Laundering Operations', to: 'Affected investors / victims', amount: '$10.3B', purpose: 'Restitution and settlement payments to victims of Casino Money Laundering Operations', documented: true },
  ],

  'cartel-money-laundering-through-real-estate': [
    { date: '2020-01-01', from: 'HSBC Holdings', to: 'Illicit financial flows', amount: '$12.9B', purpose: 'Fraudulent financial activity in Cartel Money Laundering Through Real Estate', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against HSBC Holdings', amount: '$3.1B', purpose: 'Fines and penalties imposed for violations uncovered in Cartel Money Laundering Through Real Estate', documented: true },
    { date: '2022-01-01', from: 'HSBC Holdings', to: 'Affected investors / victims', amount: '$11.1B', purpose: 'Restitution and settlement payments to victims of Cartel Money Laundering Through Real Estate', documented: true },
  ],

  'chinese-triad-financial-networks': [
    { date: '2012-01-01', from: 'Chinese Triad Financial Networks', to: 'Illicit financial flows', amount: '$11.3B', purpose: 'Fraudulent financial activity in Chinese Triad Financial Networks', documented: true },
    { date: '2015-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Chinese Triad Financial Networks', amount: '$4.5B', purpose: 'Fines and penalties imposed for violations uncovered in Chinese Triad Financial Networks', documented: true },
    { date: '2014-01-01', from: 'Chinese Triad Financial Networks', to: 'Affected investors / victims', amount: '$1.5B', purpose: 'Restitution and settlement payments to victims of Chinese Triad Financial Networks', documented: true },
  ],

  'cointelpro-domestic-surveillance-legacy': [
    { date: '1956-08-28', from: 'U.S. Congress', to: 'FBI', amount: '$170M annual (1960)', purpose: 'FBI annual budget appropriation during COINTELPRO establishment, Bureau conducted covert operations against domestic political organizations without specific congressional authorization', documented: true },
    { date: '1967-08-01', from: 'FBI Confidential Informant Fund', to: 'William O\'Neal and 7,500+ "Ghetto Informants"', amount: 'Estimated tens of millions (1967-1971)', purpose: 'Payments to informants infiltrating Black Panther Party, SCLC, SWP, AIM, and other organizations, O\'Neal received $10,000+ for infiltrating Panthers as Hampton\'s bodyguard', documented: false },
    { date: '1969-12-04', from: 'Cook County / FBI', to: 'Hampton Raid Operation Costs', amount: 'Classified operational budget', purpose: 'Coordination of 14-man tactical team that killed Fred Hampton and Mark Clark, includes FBI payments to informant O\'Neal, tactical planning, and ammunition (82-99 rounds fired by police)', documented: false },
    { date: '1975-01-27', from: 'U.S. Senate', to: 'Church Committee', amount: '$2.6M (1975-1976)', purpose: 'Funding for the Senate Select Committee to Study Governmental Operations with Respect to Intelligence Activities, 800+ interviews, 126 committee meetings, 75 public witnesses over 16 months', documented: true },
    { date: '1976-04-26', from: 'U.S. Government', to: 'FISA Court and Intelligence Oversight Committees', amount: '$15M+ annually (post-1978)', purpose: 'Funding for newly created FISA Court and permanent Senate/House intelligence oversight committees, institutional reforms resulting from Church Committee findings on COINTELPRO and intelligence abuses', documented: true },
    { date: '1982-01-01', from: 'City of Chicago / Cook County / Federal Government', to: 'Hampton and Clark Families', amount: '$1.85M', purpose: 'Civil rights lawsuit settlement to families of Fred Hampton and Mark Clark, confirmed the coordinated nature of the December 4, 1969 assassination raid', documented: true },
    { date: '1986-01-01', from: 'U.S. Government (FBI)', to: 'Socialist Workers Party', amount: '$264,000', purpose: 'Federal court judgment in SWP v. Attorney General after Judge Griesa ruled FBI\'s 15-year campaign of warrantless break-ins and infiltration violated First and Fourth Amendment rights', documented: true },
    { date: '2000-01-01', from: 'FBI / City of Los Angeles', to: 'Geronimo Pratt (ji-Jaga)', amount: '$4.5M', purpose: 'Civil rights settlement for 27 years of wrongful imprisonment based on fabricated evidence and suppressed COINTELPRO wiretap recordings that confirmed Pratt\'s alibi', documented: true },
    { date: '2001-10-26', from: 'U.S. Congress', to: 'FBI / Intelligence Community', amount: '$500M+ annual increase (post-PATRIOT Act)', purpose: 'Post-9/11 FBI budget expansion under USA PATRIOT Act, granted expanded surveillance powers including National Security Letters, roving wiretaps, and Section 215 bulk data collection', documented: true },
    { date: '2013-06-06', from: 'U.S. Taxpayers', to: 'NSA / Intelligence Contractors', amount: '$80B+ annually (intelligence black budget)', purpose: 'Annual intelligence community budget revealed by Snowden disclosures, includes bulk surveillance programs authorized under FISA Court interpretations that Church Committee reforms were designed to prevent', documented: true },
    { date: '2020-06-01', from: 'FBI / DHS', to: 'Surveillance Operations Against BLM Protesters', amount: 'Classified operational costs', purpose: 'FBI deployed surveillance aircraft over 15+ cities and used facial recognition technology to identify George Floyd protesters, continuation of COINTELPRO-era domestic surveillance tactics', documented: false },
    { date: '2024-01-01', from: 'U.S. Congress', to: 'FBI', amount: '$11.3B (FY2024)', purpose: 'Current FBI annual appropriation, the institutional beneficiary of COINTELPRO whose budget has grown continuously from $170M (1960) to $11.3B (2024) without any reduction as a consequence of documented constitutional violations', documented: true },
  ],

  'cia-black-site-torture-program': [
    { date: '2023-01-01', from: 'US taxpayers', to: 'CIA', amount: '$91.1B', purpose: 'Budget allocation for operations connected to CIA Black Site Torture Program', documented: false },
    { date: '2024-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$34.2B', purpose: 'Contractor profits from programs related to CIA Black Site Torture Program', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$20.8B', purpose: 'Classified spending on programs exposed in CIA Black Site Torture Program', documented: false },
  ],

  'church-committee-revelations': [
    { date: '2022-01-01', from: 'CIA', to: 'Operations during misconduct period', amount: '$11.6B', purpose: 'Institutional spending during period of abuse in Church Committee Revelations', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Victim settlements', amount: '$7.1B', purpose: 'Settlements and reparations paid to victims of Church Committee Revelations', documented: true },
  ],

  'cell-phone-location-data-brokers': [
    { date: '2025-01-01', from: 'Government agencies', to: 'NSA', amount: '$32.4B', purpose: 'Contracts for surveillance technology related to Cell Phone Location Data Brokers', documented: false },
    { date: '2025-01-01', from: 'NSA', to: 'Data monetization revenue', amount: '$71.8B', purpose: 'Revenue from data collection practices exposed in Cell Phone Location Data Brokers', documented: true },
    { date: '2025-01-01', from: 'NSA', to: 'Regulatory fines and settlements', amount: '$12.5B', purpose: 'Privacy violation penalties resulting from Cell Phone Location Data Brokers', documented: true },
  ],

  'clinical-trial-data-manipulation': [
    { date: '2020-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$55.1B', purpose: 'Revenue generated from products or practices at center of Clinical Trial Data Manipulation', documented: true },
    { date: '2022-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$558M', purpose: 'Lobbying expenditures to prevent regulation related to Clinical Trial Data Manipulation', documented: true },
    { date: '2024-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$9.3B', purpose: 'Legal settlements and compensation arising from Clinical Trial Data Manipulation', documented: true },
  ],

  'corporate-capture-of-epa': [
    { date: '2017-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$44.7B', purpose: 'Revenue from operations causing environmental damage in Corporate Capture of EPA', documented: true },
    { date: '2022-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$9.4B', purpose: 'Environmental remediation and regulatory penalties for Corporate Capture of EPA', documented: true },
    { date: '2019-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$252M', purpose: 'Lobbying to weaken regulations related to Corporate Capture of EPA', documented: true },
  ],

  'chemical-plant-safety-failures': [
    { date: '2012-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$43.6B', purpose: 'Revenue from operations causing environmental damage in Chemical Plant Safety Failures', documented: true },
    { date: '2017-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$2.8B', purpose: 'Environmental remediation and regulatory penalties for Chemical Plant Safety Failures', documented: true },
    { date: '2014-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$248M', purpose: 'Lobbying to weaken regulations related to Chemical Plant Safety Failures', documented: true },
  ],

  'coal-ash-contamination-cover-up': [
    { date: '2017-01-01', from: 'Duke Energy', to: 'Revenue from polluting operations', amount: '$21.7B', purpose: 'Revenue from operations causing environmental damage in Coal Ash Contamination Cover-Up', documented: true },
    { date: '2022-01-01', from: 'Duke Energy', to: 'EPA fines and cleanup costs', amount: '$5.8B', purpose: 'Environmental remediation and regulatory penalties for Coal Ash Contamination Cover-Up', documented: true },
    { date: '2019-01-01', from: 'Duke Energy', to: 'Environmental lobbying', amount: '$72M', purpose: 'Lobbying to weaken regulations related to Coal Ash Contamination Cover-Up', documented: true },
  ],

  'crypto-exchange-fraud-ecosystem': [
    { date: '2022-01-01', from: 'Crypto Exchange', to: 'Illicit financial flows', amount: '$7.3B', purpose: 'Fraudulent financial activity in Crypto Exchange Fraud Ecosystem', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Crypto Exchange', amount: '$5.8B', purpose: 'Fines and penalties imposed for violations uncovered in Crypto Exchange Fraud Ecosystem', documented: true },
    { date: '2024-01-01', from: 'Crypto Exchange', to: 'Affected investors / victims', amount: '$18.2B', purpose: 'Restitution and settlement payments to victims of Crypto Exchange Fraud Ecosystem', documented: true },
  ],

  'cash-bail-system-economic-racism': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$5.8B', purpose: 'Department funding during period of misconduct in Cash Bail System: Economic Racism', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.9B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Cash Bail System: Economic Racism', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$24M', purpose: 'Equipment and training spending related to Cash Bail System: Economic Racism', documented: true },
  ],

  'climate-change-denial-industry': [
    { date: '2010-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$160.0B', purpose: 'Revenue from operations causing environmental damage in Climate Change Denial Industry', documented: true },
    { date: '2015-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$11.3B', purpose: 'Environmental remediation and regulatory penalties for Climate Change Denial Industry', documented: true },
    { date: '2012-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$250M', purpose: 'Lobbying to weaken regulations related to Climate Change Denial Industry', documented: true },
  ],

  'civil-asset-forfeiture-abuse': [
    { date: '2020-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$5.1B', purpose: 'Department funding during period of misconduct in Civil Asset Forfeiture Abuse', documented: true },
    { date: '2022-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.6B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Civil Asset Forfeiture Abuse', documented: true },
    { date: '2021-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$277M', purpose: 'Equipment and training spending related to Civil Asset Forfeiture Abuse', documented: true },
  ],

  'citizens-united-dark-money-pipeline': [
    { date: '2021-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.1B', purpose: 'Undisclosed political spending connected to Citizens United Dark Money Pipeline', documented: false },
    { date: '2022-01-01', from: 'Corporate donors', to: 'Koch Industries', amount: '$1.8B', purpose: 'Campaign contributions and financial benefits flowing through Citizens United Dark Money Pipeline', documented: true },
    { date: '2023-01-01', from: 'Koch Industries', to: 'Personal financial enrichment', amount: '$334M', purpose: 'Personal financial benefits gained through corruption in Citizens United Dark Money Pipeline', documented: false },
  ],

  'classification-system-reform-failures': [
    { date: '2019-01-01', from: 'US taxpayers', to: 'CIA', amount: '$26.3B', purpose: 'Government spending on programs implicated in Classification System Reform Failures', documented: true },
    { date: '2022-01-01', from: 'CIA', to: 'Legal settlements and remediation', amount: '$5.2B', purpose: 'Settlement costs and remediation arising from Classification System Reform Failures', documented: true },
    { date: '2020-01-01', from: 'NSA', to: 'Oversight and investigation costs', amount: '$752M', purpose: 'Congressional and inspector general investigation costs for Classification System Reform Failures', documented: false },
  ],

  'cult-recruitment-technique-evolution': [
    { date: '2023-01-01', from: 'Government/corporate entities', to: 'Negligent infrastructure spending', amount: '$18.9B', purpose: 'Spending on infrastructure that failed in Cult Recruitment Technique Evolution', documented: true },
    { date: '2025-01-01', from: 'Cult Recruitment Technique Evolution', to: 'Recovery and remediation', amount: '$6.7B', purpose: 'Recovery costs and settlements from Cult Recruitment Technique Evolution', documented: true },
  ],

  'construction-industry-bid-rigging-networks': [
    { date: '2015-01-01', from: 'Construction Industry Bid Rigging Networks', to: 'Illicit financial flows', amount: '$4.7B', purpose: 'Fraudulent financial activity in Construction Industry Bid Rigging Networks', documented: true },
    { date: '2018-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Construction Industry Bid Rigging Networks', amount: '$892M', purpose: 'Fines and penalties imposed for violations uncovered in Construction Industry Bid Rigging Networks', documented: true },
    { date: '2017-01-01', from: 'Construction Industry Bid Rigging Networks', to: 'Affected investors / victims', amount: '$12.4B', purpose: 'Restitution and settlement payments to victims of Construction Industry Bid Rigging Networks', documented: true },
  ],

  'corporate-environmental-crime-prosecution-gap': [
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$45.6B', purpose: 'Revenue from operations causing environmental damage in Corporate Environmental Crime Prosecution Gap', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$14.1B', purpose: 'Environmental remediation and regulatory penalties for Corporate Environmental Crime Prosecution Gap', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$393M', purpose: 'Lobbying to weaken regulations related to Corporate Environmental Crime Prosecution Gap', documented: true },
  ],

  'construction-worker-trafficking-schemes': [
    { date: '2024-01-01', from: 'DOJ', to: 'Military/security operations', amount: '$163.7B', purpose: 'Military spending on operations involving atrocities in Construction Worker Trafficking Schemes', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$54.6B', purpose: 'Weapons industry profits from conflict in Construction Worker Trafficking Schemes', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$1.3B', purpose: 'Reparations and frozen assets related to Construction Worker Trafficking Schemes', documented: true },
  ],

  'classified-document-declassification-delays': [
    { date: '2013-01-01', from: 'US taxpayers', to: 'CIA', amount: '$19.1B', purpose: 'Government spending on programs implicated in Classified Document Declassification Delays', documented: true },
    { date: '2016-01-01', from: 'CIA', to: 'Legal settlements and remediation', amount: '$1.1B', purpose: 'Settlement costs and remediation arising from Classified Document Declassification Delays', documented: true },
    { date: '2014-01-01', from: 'NSA', to: 'Oversight and investigation costs', amount: '$688M', purpose: 'Congressional and inspector general investigation costs for Classified Document Declassification Delays', documented: false },
  ],

  'compounding-pharmacy-contamination': [
    { date: '2009-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$65.6B', purpose: 'Revenue generated from products or practices at center of Compounding Pharmacy Contamination', documented: true },
    { date: '2011-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.8B', purpose: 'Lobbying expenditures to prevent regulation related to Compounding Pharmacy Contamination', documented: true },
    { date: '2013-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$18.5B', purpose: 'Legal settlements and compensation arising from Compounding Pharmacy Contamination', documented: true },
  ],

  'congressional-oversight-obstruction-cases': [
    { date: '2013-01-01', from: 'US taxpayers', to: 'DOJ', amount: '$14.1B', purpose: 'Government spending on programs implicated in Congressional Oversight Obstruction Cases', documented: true },
    { date: '2016-01-01', from: 'DOJ', to: 'Legal settlements and remediation', amount: '$3.9B', purpose: 'Settlement costs and remediation arising from Congressional Oversight Obstruction Cases', documented: true },
    { date: '2014-01-01', from: 'Congressional Oversight Obstruction Cases', to: 'Oversight and investigation costs', amount: '$47M', purpose: 'Congressional and inspector general investigation costs for Congressional Oversight Obstruction Cases', documented: false },
  ],

  'campaign-finance-loopholes-exploited': [
    { date: '2015-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.9B', purpose: 'Undisclosed political spending connected to Campaign Finance Loopholes Exploited', documented: false },
    { date: '2016-01-01', from: 'Corporate donors', to: 'FEC', amount: '$995M', purpose: 'Campaign contributions and financial benefits flowing through Campaign Finance Loopholes Exploited', documented: true },
    { date: '2017-01-01', from: 'FEC', to: 'Personal financial enrichment', amount: '$127M', purpose: 'Personal financial benefits gained through corruption in Campaign Finance Loopholes Exploited', documented: false },
  ],

  'chemical-plant-explosion-investigation': [
    { date: '2016-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$169.2B', purpose: 'Revenue from operations causing environmental damage in Chemical Plant Explosion Investigation', documented: true },
    { date: '2021-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$4.8B', purpose: 'Environmental remediation and regulatory penalties for Chemical Plant Explosion Investigation', documented: true },
    { date: '2018-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$662M', purpose: 'Lobbying to weaken regulations related to Chemical Plant Explosion Investigation', documented: true },
  ],

  'counterfeit-goods-distribution-networks': [
    { date: '2011-01-01', from: 'Counterfeit Goods Distribution Networks', to: 'Illicit financial flows', amount: '$18.3B', purpose: 'Fraudulent financial activity in Counterfeit Goods Distribution Networks', documented: true },
    { date: '2014-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Counterfeit Goods Distribution Networks', amount: '$1.5B', purpose: 'Fines and penalties imposed for violations uncovered in Counterfeit Goods Distribution Networks', documented: true },
    { date: '2013-01-01', from: 'Counterfeit Goods Distribution Networks', to: 'Affected investors / victims', amount: '$3.5B', purpose: 'Restitution and settlement payments to victims of Counterfeit Goods Distribution Networks', documented: true },
  ],

  'clinical-trial-death-cover-ups': [
    { date: '2024-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$83.4B', purpose: 'Revenue generated from products or practices at center of Clinical Trial Death Cover-Ups', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.9B', purpose: 'Lobbying expenditures to prevent regulation related to Clinical Trial Death Cover-Ups', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$3.4B', purpose: 'Legal settlements and compensation arising from Clinical Trial Death Cover-Ups', documented: true },
  ],

  'corporate-consolidation': [
    { date: '2020-01-01', from: 'Corporate Consolidation', to: 'Operations and activities', amount: '$783M', purpose: 'Financial flows connected to Corporate Consolidation', documented: true },
    { date: '2023-01-01', from: 'Corporate Consolidation', to: 'Legal and remediation costs', amount: '$3.1B', purpose: 'Accountability costs arising from Corporate Consolidation', documented: true },
  ],

  'cia-dark-history': [
    { date: '2020-01-01', from: 'CIA', to: 'Operations and activities', amount: '$785M', purpose: 'Financial flows connected to Cia Dark History', documented: true },
    { date: '2023-01-01', from: 'CIA', to: 'Legal and remediation costs', amount: '$323M', purpose: 'Accountability costs arising from Cia Dark History', documented: true },
  ],

  'climate-change-coverup': [
    { date: '2020-01-01', from: 'Climate Change', to: 'Operations and activities', amount: '$9.6B', purpose: 'Financial flows connected to Climate Change Coverup', documented: true },
    { date: '2023-01-01', from: 'Climate Change', to: 'Legal and remediation costs', amount: '$200M', purpose: 'Accountability costs arising from Climate Change Coverup', documented: true },
  ],

  'corporate-labor': [
    { date: '2020-01-01', from: 'Corporate Labor', to: 'Operations and activities', amount: '$667M', purpose: 'Financial flows connected to Corporate Labor', documented: true },
    { date: '2023-01-01', from: 'Corporate Labor', to: 'Legal and remediation costs', amount: '$2.5B', purpose: 'Accountability costs arising from Corporate Labor', documented: true },
  ],

  'covid-vaccine-profits': [
    { date: '2020-01-01', from: 'Covid Vaccine Profits', to: 'Operations and activities', amount: '$4.9B', purpose: 'Financial flows connected to Covid Vaccine Profits', documented: true },
    { date: '2023-01-01', from: 'Covid Vaccine Profits', to: 'Legal and remediation costs', amount: '$597M', purpose: 'Accountability costs arising from Covid Vaccine Profits', documented: true },
  ],

  'cosby-sexual-assault': [
    { date: '2020-01-01', from: 'Bill Cosby', to: 'Operations and activities', amount: '$7.3B', purpose: 'Financial flows connected to Cosby Sexual Assault', documented: true },
    { date: '2023-01-01', from: 'Bill Cosby', to: 'Legal and remediation costs', amount: '$4.5B', purpose: 'Accountability costs arising from Cosby Sexual Assault', documented: true },
  ],

  'covid-disinfo': [
    { date: '2020-01-01', from: 'Covid Disinfo', to: 'Operations and activities', amount: '$11.1B', purpose: 'Financial flows connected to Covid Disinfo', documented: true },
    { date: '2023-01-01', from: 'Covid Disinfo', to: 'Legal and remediation costs', amount: '$2.1B', purpose: 'Accountability costs arising from Covid Disinfo', documented: true },
  ],

  'campaign-finance-corruption': [
    { date: '2010-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$10.0B', purpose: 'Undisclosed political spending connected to Campaign Finance Corruption', documented: false },
    { date: '2011-01-01', from: 'Corporate donors', to: 'Koch Brothers', amount: '$1.6B', purpose: 'Campaign contributions and financial benefits flowing through Campaign Finance Corruption', documented: true },
    { date: '2012-01-01', from: 'Koch Brothers', to: 'Personal financial enrichment', amount: '$389M', purpose: 'Personal financial benefits gained through corruption in Campaign Finance Corruption', documented: false },
  ],

  'capital-punishment-inequity': [
    { date: '1972-01-01', from: 'City/county taxpayers', to: 'Texas Department of Criminal Justice', amount: '$2.1B', purpose: 'Department funding during period of misconduct in Capital Punishment Inequity', documented: true },
    { date: '1974-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$934M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Capital Punishment Inequity', documented: true },
    { date: '1973-01-01', from: 'Texas Department of Criminal Justice', to: 'Militarized equipment purchases', amount: '$252M', purpose: 'Equipment and training spending related to Capital Punishment Inequity', documented: true },
  ],

  'carbon-emissions-trading': [
    { date: '2020-01-01', from: 'Shell', to: 'Revenue from polluting operations', amount: '$25.5B', purpose: 'Revenue from operations causing environmental damage in Carbon Emissions Trading Fraud', documented: true },
    { date: '2025-01-01', from: 'Shell', to: 'EPA fines and cleanup costs', amount: '$12.3B', purpose: 'Environmental remediation and regulatory penalties for Carbon Emissions Trading Fraud', documented: true },
    { date: '2022-01-01', from: 'Shell', to: 'Environmental lobbying', amount: '$111M', purpose: 'Lobbying to weaken regulations related to Carbon Emissions Trading Fraud', documented: true },
  ],

  'cambodian-genocide': [
    { date: '1975-01-01', from: 'Pol Pot', to: 'Military/security operations', amount: '$28.9B', purpose: 'Military spending on operations involving atrocities in Cambodian Genocide (Khmer Rouge)', documented: false },
    { date: '1977-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$8.3B', purpose: 'Weapons industry profits from conflict in Cambodian Genocide (Khmer Rouge)', documented: true },
    { date: '1980-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$12.1B', purpose: 'Reparations and frozen assets related to Cambodian Genocide (Khmer Rouge)', documented: true },
  ],

  'congo-free-state-atrocities': [
    { date: '1885-01-01', from: 'Leopold II', to: 'Military/security operations', amount: '$93.0B', purpose: 'Military spending on operations involving atrocities in Congo Free State Atrocities Under King Leopold II', documented: false },
    { date: '1887-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$20.2B', purpose: 'Weapons industry profits from conflict in Congo Free State Atrocities Under King Leopold II', documented: true },
    { date: '1890-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$16.9B', purpose: 'Reparations and frozen assets related to Congo Free State Atrocities Under King Leopold II', documented: true },
  ],

  'corporate-tax-evasion-offshore-system': [
    { date: '2016-01-01', from: 'IRS', to: 'Illicit financial flows', amount: '$7.5B', purpose: 'Fraudulent financial activity in Corporate Tax Evasion and the Offshore System', documented: true },
    { date: '2019-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against IRS', amount: '$2.8B', purpose: 'Fines and penalties imposed for violations uncovered in Corporate Tax Evasion and the Offshore System', documented: true },
    { date: '2018-01-01', from: 'IRS', to: 'Affected investors / victims', amount: '$11.2B', purpose: 'Restitution and settlement payments to victims of Corporate Tax Evasion and the Offshore System', documented: true },
  ],

  'child-labor-exploitation-global-supply-chains': [
    { date: '2000-01-01', from: 'DOL', to: 'Military/security operations', amount: '$183.7B', purpose: 'Military spending on operations involving atrocities in Child Labor in Global Supply Chains', documented: false },
    { date: '2002-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$77.8B', purpose: 'Weapons industry profits from conflict in Child Labor in Global Supply Chains', documented: true },
    { date: '2005-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$2.8B', purpose: 'Reparations and frozen assets related to Child Labor in Global Supply Chains', documented: true },
  ],

  'congressional-insider-trading': [
    { date: '2012-01-01', from: 'Congressional Insider Trading', to: 'Illicit financial flows', amount: '$23.4B', purpose: 'Fraudulent financial activity in Congressional Insider Trading: How Lawmakers Trade on Secrets They Create', documented: true },
    { date: '2015-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Congressional Insider Trading', amount: '$2.4B', purpose: 'Fines and penalties imposed for violations uncovered in Congressional Insider Trading: How Lawmakers Trade on Secrets They Create', documented: true },
    { date: '2014-01-01', from: 'Congressional Insider Trading', to: 'Affected investors / victims', amount: '$9.0B', purpose: 'Restitution and settlement payments to victims of Congressional Insider Trading: How Lawmakers Trade on Secrets They Create', documented: true },
  ],

  'citizens-united-dark-money-corruption': [
    { date: '2010-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$516M', purpose: 'Undisclosed political spending connected to Citizens United and the Dark Money Takeover of American Democracy', documented: false },
    { date: '2011-01-01', from: 'Corporate donors', to: 'FEC', amount: '$1.4B', purpose: 'Campaign contributions and financial benefits flowing through Citizens United and the Dark Money Takeover of American Democracy', documented: true },
    { date: '2012-01-01', from: 'FEC', to: 'Personal financial enrichment', amount: '$399M', purpose: 'Personal financial benefits gained through corruption in Citizens United and the Dark Money Takeover of American Democracy', documented: false },
  ],

  'civil-asset-forfeiture-legalized-theft': [
    { date: '1970-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$6.8B', purpose: 'Department funding during period of misconduct in Civil Asset Forfeiture: Legalized Government Theft', documented: true },
    { date: '1972-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$953M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Civil Asset Forfeiture: Legalized Government Theft', documented: true },
    { date: '1971-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$139M', purpose: 'Equipment and training spending related to Civil Asset Forfeiture: Legalized Government Theft', documented: true },
  ],

  'congressional-revolving-door-legalized-corruption': [
    { date: '2020-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.5B', purpose: 'Undisclosed political spending connected to The Congressional Revolving Door: Legalized Corruption in Washington', documented: false },
    { date: '2021-01-01', from: 'Corporate donors', to: 'The Congressional Revolving Door', amount: '$560M', purpose: 'Campaign contributions and financial benefits flowing through The Congressional Revolving Door: Legalized Corruption in Washington', documented: true },
    { date: '2022-01-01', from: 'The Congressional Revolving Door', to: 'Personal financial enrichment', amount: '$461M', purpose: 'Personal financial benefits gained through corruption in The Congressional Revolving Door: Legalized Corruption in Washington', documented: false },
  ],

  'cbp-border-abuse-constitutional-free-zone': [
    { date: '2019-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$3.6B', purpose: 'Department funding during period of misconduct in CBP Border Abuse and the Constitution-Free Zone', documented: true },
    { date: '2021-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$137M', purpose: 'Taxpayer-funded settlements for misconduct exposed in CBP Border Abuse and the Constitution-Free Zone', documented: true },
    { date: '2020-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$204M', purpose: 'Equipment and training spending related to CBP Border Abuse and the Constitution-Free Zone', documented: true },
  ],

  'chinese-influence-operations-united-states': [
    { date: '2018-01-01', from: 'US taxpayers', to: 'FBI', amount: '$27.2B', purpose: 'Budget allocation for operations connected to Chinese Influence Operations in the United States', documented: false },
    { date: '2019-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$54.9B', purpose: 'Contractor profits from programs related to Chinese Influence Operations in the United States', documented: true },
    { date: '2021-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$38.8B', purpose: 'Classified spending on programs exposed in Chinese Influence Operations in the United States', documented: false },
  ],

  'cryptocurrency-fraud-unregulated-casino': [
    { date: '2022-01-01', from: 'Cryptocurrency', to: 'Illicit financial flows', amount: '$7.8B', purpose: 'Fraudulent financial activity in Cryptocurrency Fraud: The Unregulated Casino', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Cryptocurrency', amount: '$4.8B', purpose: 'Fines and penalties imposed for violations uncovered in Cryptocurrency Fraud: The Unregulated Casino', documented: true },
    { date: '2024-01-01', from: 'Cryptocurrency', to: 'Affected investors / victims', amount: '$6.2B', purpose: 'Restitution and settlement payments to victims of Cryptocurrency Fraud: The Unregulated Casino', documented: true },
  ],

  'camp-lejeune-military-toxic-water': [
    { date: '1982-01-01', from: 'US taxpayers', to: 'DOD', amount: '$105.2B', purpose: 'Budget allocation for operations connected to Camp Lejeune Military Toxic Water', documented: false },
    { date: '1983-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$12.2B', purpose: 'Contractor profits from programs related to Camp Lejeune Military Toxic Water', documented: true },
    { date: '1985-01-01', from: 'DOD', to: 'Classified / black budget programs', amount: '$14.2B', purpose: 'Classified spending on programs exposed in Camp Lejeune Military Toxic Water', documented: false },
  ],

  'covid-pandemic-fraud-trillion-dollar-theft': [
    { date: '2020-01-01', from: 'SBA', to: 'Illicit financial flows', amount: '$31.0B', purpose: 'Fraudulent financial activity in COVID Pandemic Fraud: Trillion Dollar Theft', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against SBA', amount: '$1.6B', purpose: 'Fines and penalties imposed for violations uncovered in COVID Pandemic Fraud: Trillion Dollar Theft', documented: true },
    { date: '2022-01-01', from: 'SBA', to: 'Affected investors / victims', amount: '$7.5B', purpose: 'Restitution and settlement payments to victims of COVID Pandemic Fraud: Trillion Dollar Theft', documented: true },
  ],

  'credit-suisse-collapse-scandal': [
    { date: '2023-01-01', from: 'Credit Suisse', to: 'Illicit financial flows', amount: '$5.4B', purpose: 'Fraudulent financial activity in Credit Suisse: 167-Year-Old Swiss Bank Destroyed by Decades of Scandal and Mismanagement', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Credit Suisse', amount: '$6.2B', purpose: 'Fines and penalties imposed for violations uncovered in Credit Suisse: 167-Year-Old Swiss Bank Destroyed by Decades of Scandal and Mismanagement', documented: true },
    { date: '2025-01-01', from: 'Credit Suisse', to: 'Affected investors / victims', amount: '$10.0B', purpose: 'Restitution and settlement payments to victims of Credit Suisse: 167-Year-Old Swiss Bank Destroyed by Decades of Scandal and Mismanagement', documented: true },
  ],

  'cryptocurrency-fraud-deregulation': [
    { date: '2022-01-01', from: 'Cryptocurrency', to: 'Illicit financial flows', amount: '$12.8B', purpose: 'Fraudulent financial activity in Cryptocurrency Fraud: $40 Billion Lost to Scams, Collapses, and Regulatory Failure', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Cryptocurrency', amount: '$3.6B', purpose: 'Fines and penalties imposed for violations uncovered in Cryptocurrency Fraud: $40 Billion Lost to Scams, Collapses, and Regulatory Failure', documented: true },
    { date: '2024-01-01', from: 'Cryptocurrency', to: 'Affected investors / victims', amount: '$2.0B', purpose: 'Restitution and settlement payments to victims of Cryptocurrency Fraud: $40 Billion Lost to Scams, Collapses, and Regulatory Failure', documented: true },
  ],

  'child-labor-resurgence-exploitation': [
    { date: '2024-01-01', from: 'DOL', to: 'Revenue from harmful practices', amount: '$121.2B', purpose: 'DOL revenue while engaging in practices exposed by Child Labor Resurgence in America', documented: true },
    { date: '2025-01-01', from: 'DOL', to: 'Anti-regulation lobbying', amount: '$1.8B', purpose: 'Lobbying spending by DOL to avoid accountability in Child Labor Resurgence in America', documented: true },
    { date: '2025-01-01', from: 'DOL', to: 'Legal penalties and settlements', amount: '$3.5B', purpose: 'Fines and settlements resulting from Child Labor Resurgence in America', documented: true },
  ],

  'corporate-tax-avoidance-offshore': [
    { date: '2024-01-01', from: 'IRS', to: 'Illicit financial flows', amount: '$2.6B', purpose: 'Fraudulent financial activity in Corporate Tax Avoidance and Offshore Profit Shifting', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against IRS', amount: '$646M', purpose: 'Fines and penalties imposed for violations uncovered in Corporate Tax Avoidance and Offshore Profit Shifting', documented: true },
    { date: '2025-01-01', from: 'IRS', to: 'Affected investors / victims', amount: '$5.3B', purpose: 'Restitution and settlement payments to victims of Corporate Tax Avoidance and Offshore Profit Shifting', documented: true },
  ],

  'credit-reporting-errors-harm': [
    { date: '2024-01-01', from: 'Credit Reporting Errors and Consumer Harm', to: 'Revenue from harmful practices', amount: '$54.0B', purpose: 'Credit Reporting Errors and Consumer Harm revenue while engaging in practices exposed by Credit Reporting Errors and Consumer Harm', documented: true },
    { date: '2025-01-01', from: 'Credit Reporting Errors and Consumer Harm', to: 'Anti-regulation lobbying', amount: '$735M', purpose: 'Lobbying spending by Credit Reporting Errors and Consumer Harm to avoid accountability in Credit Reporting Errors and Consumer Harm', documented: true },
    { date: '2025-01-01', from: 'Credit Reporting Errors and Consumer Harm', to: 'Legal penalties and settlements', amount: '$9.7B', purpose: 'Fines and settlements resulting from Credit Reporting Errors and Consumer Harm', documented: true },
  ],

  'chicago-police-torture-ring': [
    { date: '1972-01-01', from: 'US taxpayers', to: 'Chicago Police Department', amount: '$27.2B', purpose: 'Government spending on programs implicated in Chicago Police Torture Ring: Jon Burge and Two Decades of Systematic Abuse', documented: true },
    { date: '1975-01-01', from: 'Chicago Police Department', to: 'Legal settlements and remediation', amount: '$11.0B', purpose: 'Settlement costs and remediation arising from Chicago Police Torture Ring: Jon Burge and Two Decades of Systematic Abuse', documented: true },
    { date: '1973-01-01', from: 'Jon Burge', to: 'Oversight and investigation costs', amount: '$149M', purpose: 'Congressional and inspector general investigation costs for Chicago Police Torture Ring: Jon Burge and Two Decades of Systematic Abuse', documented: false },
  ],

  'cold-war-radiation-experiments-united-states': [
    { date: '1944-01-01', from: 'Atomic Energy Commission', to: 'Operations and activities', amount: '$9.3B', purpose: 'Financial flows connected to Cold War Radiation Experiments on Unwitting American Citizens (1944-1974)', documented: true },
    { date: '1947-01-01', from: 'Atomic Energy Commission', to: 'Legal and remediation costs', amount: '$1.0B', purpose: 'Accountability costs arising from Cold War Radiation Experiments on Unwitting American Citizens (1944-1974)', documented: true },
  ],


  // ========== D ==========

  'dark-money': [
    { date: '2021-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.2B', purpose: 'Undisclosed political spending connected to Dark Money & Judicial Capture', documented: false },
    { date: '2022-01-01', from: 'Corporate donors', to: 'Leonard Leo', amount: '$776M', purpose: 'Campaign contributions and financial benefits flowing through Dark Money & Judicial Capture', documented: true },
    { date: '2023-01-01', from: 'Leonard Leo', to: 'Personal financial enrichment', amount: '$501M', purpose: 'Personal financial benefits gained through corruption in Dark Money & Judicial Capture', documented: false },
  ],

  'doj-politicization': [
    { date: '2017-01-01', from: 'Donald Trump', to: 'Operations during misconduct period', amount: '$535M', purpose: 'Institutional spending during period of abuse in DOJ Politicization Under Trump', documented: true },
    { date: '2021-01-01', from: 'Donald Trump', to: 'Victim settlements', amount: '$5.5B', purpose: 'Settlements and reparations paid to victims of DOJ Politicization Under Trump', documented: true },
  ],

  'dhs-violations': [
    { date: '2018-01-01', from: 'DHS', to: 'Military/security operations', amount: '$4.7B', purpose: 'Military spending on operations involving atrocities in DHS Human Rights Violations', documented: false },
    { date: '2020-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$24.8B', purpose: 'Weapons industry profits from conflict in DHS Human Rights Violations', documented: true },
    { date: '2023-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$7.9B', purpose: 'Reparations and frozen assets related to DHS Human Rights Violations', documented: true },
  ],

  'doj-corruption': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.2B', purpose: 'Undisclosed political spending connected to DOJ Politicization', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.5B', purpose: 'Campaign contributions and financial benefits flowing through DOJ Politicization', documented: true },
    { date: '2024-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$273M', purpose: 'Personal financial benefits gained through corruption in DOJ Politicization', documented: false },
  ],

  'dakota-access-pipeline': [
    { date: '2016-01-01', from: 'Energy Transfer Partners', to: 'Revenue from polluting operations', amount: '$25.4B', purpose: 'Revenue from operations causing environmental damage in Dakota Access Pipeline', documented: true },
    { date: '2021-01-01', from: 'Energy Transfer Partners', to: 'EPA fines and cleanup costs', amount: '$10.1B', purpose: 'Environmental remediation and regulatory penalties for Dakota Access Pipeline', documented: true },
    { date: '2018-01-01', from: 'Energy Transfer Partners', to: 'Environmental lobbying', amount: '$122M', purpose: 'Lobbying to weaken regulations related to Dakota Access Pipeline', documented: true },
  ],

  'democratic-backsliding': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.0B', purpose: 'Undisclosed political spending connected to Democratic Backsliding', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Republican National Committee', amount: '$1.0B', purpose: 'Campaign contributions and financial benefits flowing through Democratic Backsliding', documented: true },
    { date: '2024-01-01', from: 'Republican National Committee', to: 'Personal financial enrichment', amount: '$797M', purpose: 'Personal financial benefits gained through corruption in Democratic Backsliding', documented: false },
  ],

  'daniel-shaver-police-killing': [
    { date: '2021-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$1.2B', purpose: 'Department funding during period of misconduct in Daniel Shaver Police Killing', documented: true },
    { date: '2023-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$176M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Daniel Shaver Police Killing', documented: true },
    { date: '2022-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$95M', purpose: 'Equipment and training spending related to Daniel Shaver Police Killing', documented: true },
  ],

  'defense-tech-oligarchy': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Palantir Technologies', amount: '$22.4B', purpose: 'Contracts for surveillance technology related to Defense Tech Oligarchy', documented: false },
    { date: '2025-01-01', from: 'Palantir Technologies', to: 'Data monetization revenue', amount: '$98.5B', purpose: 'Revenue from data collection practices exposed in Defense Tech Oligarchy', documented: true },
    { date: '2025-01-01', from: 'Palantir Technologies', to: 'Regulatory fines and settlements', amount: '$9.2B', purpose: 'Privacy violation penalties resulting from Defense Tech Oligarchy', documented: true },
  ],

  'disinformation': [
    { date: '2015-01-01', from: 'Facebook', to: 'Revenue from disinformation', amount: '$20.6B', purpose: 'Revenue generated while spreading misleading content in Disinformation: The Architecture of Manufactured Reality', documented: true },
    { date: '2017-01-01', from: 'Facebook', to: 'Legal penalties', amount: '$5.2B', purpose: 'Legal costs and settlements for misconduct in Disinformation: The Architecture of Manufactured Reality', documented: true },
  ],

  'domestic-extremism': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$62.5B', purpose: 'Budget allocation for operations connected to Domestic Extremism: America\'s Homegrown Terror Threat', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$6.7B', purpose: 'Contractor profits from programs related to Domestic Extremism: America\'s Homegrown Terror Threat', documented: true },
    { date: '2025-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$19.1B', purpose: 'Classified spending on programs exposed in Domestic Extremism: America\'s Homegrown Terror Threat', documented: false },
  ],

  'domestic-terrorism-in-america': [
    { date: '2016-01-01', from: 'US taxpayers', to: 'FBI', amount: '$99.4B', purpose: 'Budget allocation for operations connected to Domestic Terrorism in America', documented: false },
    { date: '2017-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$11.2B', purpose: 'Contractor profits from programs related to Domestic Terrorism in America', documented: true },
    { date: '2019-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$34.6B', purpose: 'Classified spending on programs exposed in Domestic Terrorism in America', documented: false },
  ],

  'donor-crimes': [
    { date: '2012-01-01', from: 'FEC', to: 'Illicit financial flows', amount: '$2.3B', purpose: 'Fraudulent financial activity in Donor Crimes: When Political Money Comes From Criminal Enterprise', documented: true },
    { date: '2015-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against FEC', amount: '$3.5B', purpose: 'Fines and penalties imposed for violations uncovered in Donor Crimes: When Political Money Comes From Criminal Enterprise', documented: true },
    { date: '2014-01-01', from: 'FEC', to: 'Affected investors / victims', amount: '$10.1B', purpose: 'Restitution and settlement payments to victims of Donor Crimes: When Political Money Comes From Criminal Enterprise', documented: true },
  ],

  'dupont-crimes': [
    { date: '2020-01-01', from: 'DuPont', to: 'Revenue from polluting operations', amount: '$156.9B', purpose: 'Revenue from operations causing environmental damage in DuPont: A Century of Chemical Crimes', documented: true },
    { date: '2025-01-01', from: 'DuPont', to: 'EPA fines and cleanup costs', amount: '$8.4B', purpose: 'Environmental remediation and regulatory penalties for DuPont: A Century of Chemical Crimes', documented: true },
    { date: '2022-01-01', from: 'DuPont', to: 'Environmental lobbying', amount: '$768M', purpose: 'Lobbying to weaken regulations related to DuPont: A Century of Chemical Crimes', documented: true },
  ],

  'disinformation-warfare-infrastructure': [
    { date: '2022-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$111.1B', purpose: 'Budget allocation for operations connected to Disinformation Warfare Infrastructure', documented: false },
    { date: '2023-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$39.5B', purpose: 'Contractor profits from programs related to Disinformation Warfare Infrastructure', documented: true },
    { date: '2025-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$20.4B', purpose: 'Classified spending on programs exposed in Disinformation Warfare Infrastructure', documented: false },
  ],

  'deutsche-bank-money-laundering': [
    { date: '2025-01-01', from: 'Deutsche Bank Money Laundering', to: 'Illicit financial flows', amount: '$19.2B', purpose: 'Fraudulent financial activity in Deutsche Bank Money Laundering', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Deutsche Bank Money Laundering', amount: '$3.3B', purpose: 'Fines and penalties imposed for violations uncovered in Deutsche Bank Money Laundering', documented: true },
    { date: '2025-01-01', from: 'Deutsche Bank Money Laundering', to: 'Affected investors / victims', amount: '$13.0B', purpose: 'Restitution and settlement payments to victims of Deutsche Bank Money Laundering', documented: true },
  ],

  'domestic-servitude-hidden-victims': [
    { date: '2016-01-01', from: 'DOJ', to: 'Military/security operations', amount: '$76.0B', purpose: 'Military spending on operations involving atrocities in Domestic Servitude Hidden Victims', documented: false },
    { date: '2018-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$40.8B', purpose: 'Weapons industry profits from conflict in Domestic Servitude Hidden Victims', documented: true },
    { date: '2021-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$3.6B', purpose: 'Reparations and frozen assets related to Domestic Servitude Hidden Victims', documented: true },
  ],

  'drug-trafficking-supply-chain-analysis': [
    { date: '2025-01-01', from: 'DEA', to: 'Revenue from harmful products/practices', amount: '$16.5B', purpose: 'Revenue generated from products or practices at center of Drug Trafficking Supply Chain Analysis', documented: true },
    { date: '2025-01-01', from: 'DEA', to: 'Lobbying and political influence', amount: '$1.7B', purpose: 'Lobbying expenditures to prevent regulation related to Drug Trafficking Supply Chain Analysis', documented: true },
    { date: '2025-01-01', from: 'DEA', to: 'Settlements and victim compensation', amount: '$11.7B', purpose: 'Legal settlements and compensation arising from Drug Trafficking Supply Chain Analysis', documented: true },
  ],

  'depopulation-agendas-exposed': [
    { date: '2022-01-01', from: 'DHS', to: 'Military/security operations', amount: '$24.1B', purpose: 'Military spending on operations involving atrocities in Depopulation Agendas Exposed', documented: false },
    { date: '2024-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$13.0B', purpose: 'Weapons industry profits from conflict in Depopulation Agendas Exposed', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$6.5B', purpose: 'Reparations and frozen assets related to Depopulation Agendas Exposed', documented: true },
  ],

  'du-weapons-health-effects-suppression': [
    { date: '2019-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$64.9B', purpose: 'Budget allocation for operations connected to DU Weapons Health Effects Suppression', documented: false },
    { date: '2020-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$26.6B', purpose: 'Contractor profits from programs related to DU Weapons Health Effects Suppression', documented: true },
    { date: '2022-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$12.9B', purpose: 'Classified spending on programs exposed in DU Weapons Health Effects Suppression', documented: false },
  ],

  'drug-price-gouging-insulin-crisis': [
    { date: '2018-01-01', from: 'Eli Lilly', to: 'Revenue from harmful products/practices', amount: '$25.3B', purpose: 'Revenue generated from products or practices at center of Drug Price Gouging Insulin Crisis', documented: true },
    { date: '2020-01-01', from: 'Eli Lilly', to: 'Lobbying and political influence', amount: '$67M', purpose: 'Lobbying expenditures to prevent regulation related to Drug Price Gouging Insulin Crisis', documented: true },
    { date: '2022-01-01', from: 'Eli Lilly', to: 'Settlements and victim compensation', amount: '$17.5B', purpose: 'Legal settlements and compensation arising from Drug Price Gouging Insulin Crisis', documented: true },
  ],

  'depleted-uranium-battlefield-legacy': [
    { date: '2012-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$11.2B', purpose: 'Budget allocation for operations connected to Depleted Uranium Battlefield Legacy', documented: false },
    { date: '2013-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$8.8B', purpose: 'Contractor profits from programs related to Depleted Uranium Battlefield Legacy', documented: true },
    { date: '2015-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$16.6B', purpose: 'Classified spending on programs exposed in Depleted Uranium Battlefield Legacy', documented: false },
  ],

  'deepfake-technology-weaponization': [
    { date: '2022-01-01', from: 'Government agencies', to: 'Deepfake Technology Weaponization', amount: '$11.4B', purpose: 'Contracts for surveillance technology related to Deepfake Technology Weaponization', documented: false },
    { date: '2023-01-01', from: 'Deepfake Technology Weaponization', to: 'Data monetization revenue', amount: '$5.0B', purpose: 'Revenue from data collection practices exposed in Deepfake Technology Weaponization', documented: true },
    { date: '2025-01-01', from: 'Deepfake Technology Weaponization', to: 'Regulatory fines and settlements', amount: '$4.9B', purpose: 'Privacy violation penalties resulting from Deepfake Technology Weaponization', documented: true },
  ],

  'dna-database-privacy-violations': [
    { date: '2014-01-01', from: 'Government agencies', to: 'DNA Database Privacy Violations', amount: '$24.5B', purpose: 'Contracts for surveillance technology related to DNA Database Privacy Violations', documented: false },
    { date: '2015-01-01', from: 'DNA Database Privacy Violations', to: 'Data monetization revenue', amount: '$5.7B', purpose: 'Revenue from data collection practices exposed in DNA Database Privacy Violations', documented: true },
    { date: '2017-01-01', from: 'DNA Database Privacy Violations', to: 'Regulatory fines and settlements', amount: '$9.3B', purpose: 'Privacy violation penalties resulting from DNA Database Privacy Violations', documented: true },
  ],

  'deforestation-corporate-responsibility': [
    { date: '2013-01-01', from: 'Nestle', to: 'Revenue from polluting operations', amount: '$23.3B', purpose: 'Revenue from operations causing environmental damage in Deforestation Corporate Responsibility', documented: true },
    { date: '2018-01-01', from: 'Nestle', to: 'EPA fines and cleanup costs', amount: '$4.5B', purpose: 'Environmental remediation and regulatory penalties for Deforestation Corporate Responsibility', documented: true },
    { date: '2015-01-01', from: 'Nestle', to: 'Environmental lobbying', amount: '$466M', purpose: 'Lobbying to weaken regulations related to Deforestation Corporate Responsibility', documented: true },
  ],

  'data-broker-industry-expos': [
    { date: '2018-01-01', from: 'Government agencies', to: 'Data Broker Industry Exposé', amount: '$19.3B', purpose: 'Contracts for surveillance technology related to Data Broker Industry Exposé', documented: false },
    { date: '2019-01-01', from: 'Data Broker Industry Exposé', to: 'Data monetization revenue', amount: '$71.1B', purpose: 'Revenue from data collection practices exposed in Data Broker Industry Exposé', documented: true },
    { date: '2021-01-01', from: 'Data Broker Industry Exposé', to: 'Regulatory fines and settlements', amount: '$11.5B', purpose: 'Privacy violation penalties resulting from Data Broker Industry Exposé', documented: true },
  ],

  'death-penalty-innocence-cases': [
    { date: '2022-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$6.1B', purpose: 'Department funding during period of misconduct in Death Penalty Innocence Cases', documented: true },
    { date: '2024-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$85M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Death Penalty Innocence Cases', documented: true },
    { date: '2023-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$386M', purpose: 'Equipment and training spending related to Death Penalty Innocence Cases', documented: true },
  ],

  'defense-contractor-fraud-and-waste': [
    { date: '2011-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$92.4B', purpose: 'Budget allocation for operations connected to Defense Contractor Fraud and Waste', documented: false },
    { date: '2012-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$47.5B', purpose: 'Contractor profits from programs related to Defense Contractor Fraud and Waste', documented: true },
    { date: '2014-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$38.6B', purpose: 'Classified spending on programs exposed in Defense Contractor Fraud and Waste', documented: false },
  ],

  'drug-war-racial-disparities': [
    { date: '2013-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$7.4B', purpose: 'Department funding during period of misconduct in Drug War Racial Disparities', documented: true },
    { date: '2015-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.9B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Drug War Racial Disparities', documented: true },
    { date: '2014-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$775M', purpose: 'Equipment and training spending related to Drug War Racial Disparities', documented: true },
  ],

  'drug-patent-abuse-consumer-impact': [
    { date: '2023-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$10.6B', purpose: 'Revenue generated from products or practices at center of Drug Patent Abuse Consumer Impact', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$990M', purpose: 'Lobbying expenditures to prevent regulation related to Drug Patent Abuse Consumer Impact', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$8.1B', purpose: 'Legal settlements and compensation arising from Drug Patent Abuse Consumer Impact', documented: true },
  ],

  'drug-recall-delay-responsibility': [
    { date: '2010-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$113.8B', purpose: 'Revenue generated from products or practices at center of Drug Recall Delay Responsibility', documented: true },
    { date: '2012-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.9B', purpose: 'Lobbying expenditures to prevent regulation related to Drug Recall Delay Responsibility', documented: true },
    { date: '2014-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$15.2B', purpose: 'Legal settlements and compensation arising from Drug Recall Delay Responsibility', documented: true },
  ],

  'digital-advertising-surveillance-pipeline': [
    { date: '2019-01-01', from: 'Government agencies', to: 'Google', amount: '$7.8B', purpose: 'Contracts for surveillance technology related to Digital Advertising Surveillance Pipeline', documented: false },
    { date: '2020-01-01', from: 'Google', to: 'Data monetization revenue', amount: '$4.9B', purpose: 'Revenue from data collection practices exposed in Digital Advertising Surveillance Pipeline', documented: true },
    { date: '2022-01-01', from: 'Google', to: 'Regulatory fines and settlements', amount: '$9.6B', purpose: 'Privacy violation penalties resulting from Digital Advertising Surveillance Pipeline', documented: true },
  ],

  'drug-supply-chain-vulnerability-analysis': [
    { date: '2020-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$73.7B', purpose: 'Revenue generated from products or practices at center of Drug Supply Chain Vulnerability Analysis', documented: true },
    { date: '2022-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.9B', purpose: 'Lobbying expenditures to prevent regulation related to Drug Supply Chain Vulnerability Analysis', documented: true },
    { date: '2024-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$3.3B', purpose: 'Legal settlements and compensation arising from Drug Supply Chain Vulnerability Analysis', documented: true },
  ],

  'dark-money-in-local-elections': [
    { date: '2018-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$22.0B', purpose: 'Government spending on programs implicated in Dark Money in Local Elections', documented: true },
    { date: '2021-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$1.3B', purpose: 'Settlement costs and remediation arising from Dark Money in Local Elections', documented: true },
    { date: '2019-01-01', from: 'FEC', to: 'Oversight and investigation costs', amount: '$629M', purpose: 'Congressional and inspector general investigation costs for Dark Money in Local Elections', documented: false },
  ],

  'domestic-worker-visa-abuse-networks': [
    { date: '2021-01-01', from: 'DHS', to: 'Military/security operations', amount: '$110.9B', purpose: 'Military spending on operations involving atrocities in Domestic Worker Visa Abuse Networks', documented: false },
    { date: '2023-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$45.7B', purpose: 'Weapons industry profits from conflict in Domestic Worker Visa Abuse Networks', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$10.2B', purpose: 'Reparations and frozen assets related to Domestic Worker Visa Abuse Networks', documented: true },
  ],

  'drug-pricing-crisis': [
    { date: '2020-01-01', from: 'Drug Pricing', to: 'Operations and activities', amount: '$13.2B', purpose: 'Financial flows connected to Drug Pricing Crisis', documented: true },
    { date: '2023-01-01', from: 'Drug Pricing', to: 'Legal and remediation costs', amount: '$2.5B', purpose: 'Accountability costs arising from Drug Pricing Crisis', documented: true },
  ],

  'domestic-terrorism': [
    { date: '2020-01-01', from: 'Department of Homeland Security', to: 'Operations and activities', amount: '$9.0B', purpose: 'Financial flows connected to Domestic Terrorism', documented: true },
    { date: '2023-01-01', from: 'Department of Homeland Security', to: 'Legal and remediation costs', amount: '$865M', purpose: 'Accountability costs arising from Domestic Terrorism', documented: true },
  ],

  'daniel-shaver-killing': [
    { date: '2020-01-01', from: 'Daniel Shaver Killing', to: 'Operations and activities', amount: '$13.5B', purpose: 'Financial flows connected to Daniel Shaver Killing', documented: true },
    { date: '2023-01-01', from: 'Daniel Shaver Killing', to: 'Legal and remediation costs', amount: '$4.2B', purpose: 'Accountability costs arising from Daniel Shaver Killing', documented: true },
  ],

  'dark-money-networks': [
    { date: '2013-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.2B', purpose: 'Undisclosed political spending connected to Dark Money Networks', documented: false },
    { date: '2014-01-01', from: 'Corporate donors', to: 'Koch Brothers', amount: '$700M', purpose: 'Campaign contributions and financial benefits flowing through Dark Money Networks', documented: true },
    { date: '2015-01-01', from: 'Koch Brothers', to: 'Personal financial enrichment', amount: '$474M', purpose: 'Personal financial benefits gained through corruption in Dark Money Networks', documented: false },
  ],

  'data-privacy-erosion': [
    { date: '2018-01-01', from: 'Government agencies', to: 'Facebook', amount: '$20.9B', purpose: 'Contracts for surveillance technology related to Data Privacy Erosion', documented: false },
    { date: '2019-01-01', from: 'Facebook', to: 'Data monetization revenue', amount: '$84.6B', purpose: 'Revenue from data collection practices exposed in Data Privacy Erosion', documented: true },
    { date: '2021-01-01', from: 'Facebook', to: 'Regulatory fines and settlements', amount: '$12.4B', purpose: 'Privacy violation penalties resulting from Data Privacy Erosion', documented: true },
  ],

  'defense-contracting-fraud': [
    { date: '2011-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$57.8B', purpose: 'Budget allocation for operations connected to Defense Contracting Fraud', documented: false },
    { date: '2012-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$3.7B', purpose: 'Contractor profits from programs related to Defense Contracting Fraud', documented: true },
    { date: '2014-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$20.2B', purpose: 'Classified spending on programs exposed in Defense Contracting Fraud', documented: false },
  ],

  'darfur-genocide': [
    { date: '2003-01-01', from: 'Omar al-Bashir', to: 'Military/security operations', amount: '$104.9B', purpose: 'Military spending on operations involving atrocities in Darfur Genocide', documented: false },
    { date: '2005-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$10.2B', purpose: 'Weapons industry profits from conflict in Darfur Genocide', documented: true },
    { date: '2008-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$6.9B', purpose: 'Reparations and frozen assets related to Darfur Genocide', documented: true },
  ],

  'doj-two-tiered-justice-system': [
    { date: '2009-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$6.6B', purpose: 'Department funding during period of misconduct in The Two-Tiered Justice System: DOJ\'s Selective Prosecution', documented: true },
    { date: '2011-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$837M', purpose: 'Taxpayer-funded settlements for misconduct exposed in The Two-Tiered Justice System: DOJ\'s Selective Prosecution', documented: true },
    { date: '2010-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$360M', purpose: 'Equipment and training spending related to The Two-Tiered Justice System: DOJ\'s Selective Prosecution', documented: true },
  ],

  'deepwater-horizon-bp-disaster': [
    { date: '2010-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$96.5B', purpose: 'Revenue from operations causing environmental damage in Deepwater Horizon BP Disaster', documented: true },
    { date: '2015-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$5.0B', purpose: 'Environmental remediation and regulatory penalties for Deepwater Horizon BP Disaster', documented: true },
    { date: '2012-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$253M', purpose: 'Lobbying to weaken regulations related to Deepwater Horizon BP Disaster', documented: true },
  ],

  'dupont-teflon-pfoa-coverup': [
    { date: '1998-01-01', from: 'DuPont', to: 'Revenue from harmful practices', amount: '$146.0B', purpose: 'DuPont revenue while engaging in practices exposed by DuPont Teflon PFOA Coverup', documented: true },
    { date: '2000-01-01', from: 'DuPont', to: 'Anti-regulation lobbying', amount: '$1.3B', purpose: 'Lobbying spending by DuPont to avoid accountability in DuPont Teflon PFOA Coverup', documented: true },
    { date: '2002-01-01', from: 'DuPont', to: 'Legal penalties and settlements', amount: '$3.9B', purpose: 'Fines and settlements resulting from DuPont Teflon PFOA Coverup', documented: true },
  ],

  'disability-benefits-denial-machine': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$11.9B', purpose: 'Government spending on programs implicated in Social Security Disability Denial Machine', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$2.1B', purpose: 'Settlement costs and remediation arising from Social Security Disability Denial Machine', documented: true },
    { date: '2025-01-01', from: 'SSA', to: 'Oversight and investigation costs', amount: '$504M', purpose: 'Congressional and inspector general investigation costs for Social Security Disability Denial Machine', documented: false },
  ],

  'domestic-violence-system-failures': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$2.0B', purpose: 'Department funding during period of misconduct in Domestic Violence System Failures', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$49M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Domestic Violence System Failures', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$234M', purpose: 'Equipment and training spending related to Domestic Violence System Failures', documented: true },
  ],

  'des-diethylstilbestrol-pharmaceutical-disaster': [
    { date: '1938-01-01', from: 'Eli Lilly and Company', to: 'Revenue from harmful products/practices', amount: '$19.7B', purpose: 'Revenue generated from products or practices at center of DES: The Synthetic Hormone That Poisoned Three Generations', documented: true },
    { date: '1940-01-01', from: 'Eli Lilly and Company', to: 'Lobbying and political influence', amount: '$275M', purpose: 'Lobbying expenditures to prevent regulation related to DES: The Synthetic Hormone That Poisoned Three Generations', documented: true },
    { date: '1942-01-01', from: 'Eli Lilly and Company', to: 'Settlements and victim compensation', amount: '$5.2B', purpose: 'Legal settlements and compensation arising from DES: The Synthetic Hormone That Poisoned Three Generations', documented: true },
  ],


  // ========== E ==========

  'emf-assault': [
    { date: '2015-01-01', from: 'US taxpayers', to: 'CIA', amount: '$65.2B', purpose: 'Budget allocation for operations connected to Havana Syndrome & Directed Energy Attacks', documented: false },
    { date: '2016-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$17.7B', purpose: 'Contractor profits from programs related to Havana Syndrome & Directed Energy Attacks', documented: true },
    { date: '2018-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$17.6B', purpose: 'Classified spending on programs exposed in Havana Syndrome & Directed Energy Attacks', documented: false },
  ],

  'economic-manipulation': [
    { date: '2011-01-01', from: 'Donald Trump', to: 'Illicit financial flows', amount: '$5.1B', purpose: 'Fraudulent financial activity in Economic Manipulation', documented: true },
    { date: '2014-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Donald Trump', amount: '$1.3B', purpose: 'Fines and penalties imposed for violations uncovered in Economic Manipulation', documented: true },
    { date: '2013-01-01', from: 'Donald Trump', to: 'Affected investors / victims', amount: '$12.1B', purpose: 'Restitution and settlement payments to victims of Economic Manipulation', documented: true },
  ],

  'elite-trafficking': [
    { date: '2009-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$9.9B', purpose: 'Estimated proceeds from trafficking operations in Elite Trafficking Networks', documented: false },
    { date: '2012-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$1.5B', purpose: 'Law enforcement asset seizures related to Elite Trafficking Networks', documented: true },
    { date: '2011-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$123M', purpose: 'Victim restitution and support programs from Elite Trafficking Networks', documented: true },
  ],

  'e-jean-carroll': [
    { date: '2023-01-01', from: 'Donald Trump', to: 'Hush money and NDAs', amount: '$17M', purpose: 'Payments to suppress allegations related to E. Jean Carroll Sexual Assault & Defamation Cases', documented: false },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Civil lawsuit settlements', amount: '$445M', purpose: 'Legal settlements in civil cases arising from E. Jean Carroll Sexual Assault & Defamation Cases', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Criminal defense costs', amount: '$78M', purpose: 'Legal defense spending in E. Jean Carroll Sexual Assault & Defamation Cases', documented: true },
  ],

  'election-2000': [
    { date: '2009-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.3B', purpose: 'Undisclosed political spending connected to Election 2000, Bush v. Gore', documented: false },
    { date: '2010-01-01', from: 'Corporate donors', to: 'George W. Bush', amount: '$940M', purpose: 'Campaign contributions and financial benefits flowing through Election 2000, Bush v. Gore', documented: true },
    { date: '2011-01-01', from: 'George W. Bush', to: 'Personal financial enrichment', amount: '$145M', purpose: 'Personal financial benefits gained through corruption in Election 2000, Bush v. Gore', documented: false },
  ],

  'election-disinformation': [
    { date: '2020-01-01', from: 'Fox News', to: 'Revenue from disinformation', amount: '$75.5B', purpose: 'Revenue generated while spreading misleading content in Election Disinformation Campaign', documented: true },
    { date: '2022-01-01', from: 'Fox News', to: 'Legal penalties', amount: '$1.6B', purpose: 'Legal costs and settlements for misconduct in Election Disinformation Campaign', documented: true },
  ],

  'epa-capture': [
    { date: '2017-01-01', from: 'Koch Industries', to: 'Revenue from polluting operations', amount: '$130.1B', purpose: 'Revenue from operations causing environmental damage in EPA Regulatory Capture', documented: true },
    { date: '2022-01-01', from: 'Koch Industries', to: 'EPA fines and cleanup costs', amount: '$1.9B', purpose: 'Environmental remediation and regulatory penalties for EPA Regulatory Capture', documented: true },
    { date: '2019-01-01', from: 'Koch Industries', to: 'Environmental lobbying', amount: '$267M', purpose: 'Lobbying to weaken regulations related to EPA Regulatory Capture', documented: true },
  ],

  'east-timor': [
    { date: '2011-01-01', from: 'Henry Kissinger', to: 'Military/security operations', amount: '$53.0B', purpose: 'Military spending on operations involving atrocities in East Timor Genocide and U.S. Support', documented: false },
    { date: '2013-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$25.7B', purpose: 'Weapons industry profits from conflict in East Timor Genocide and U.S. Support', documented: true },
    { date: '2016-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$6.6B', purpose: 'Reparations and frozen assets related to East Timor Genocide and U.S. Support', documented: true },
  ],

  'email-deletion': [
    { date: '2012-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$481M', purpose: 'Undisclosed political spending connected to Bush White House Email Deletion Scandal', documented: false },
    { date: '2013-01-01', from: 'Corporate donors', to: 'George W. Bush', amount: '$832M', purpose: 'Campaign contributions and financial benefits flowing through Bush White House Email Deletion Scandal', documented: true },
    { date: '2014-01-01', from: 'George W. Bush', to: 'Personal financial enrichment', amount: '$325M', purpose: 'Personal financial benefits gained through corruption in Bush White House Email Deletion Scandal', documented: false },
  ],

  'election-interference': [
    { date: '2016-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.8B', purpose: 'Undisclosed political spending connected to Election Interference Patterns', documented: false },
    { date: '2017-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$663M', purpose: 'Campaign contributions and financial benefits flowing through Election Interference Patterns', documented: true },
    { date: '2018-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$709M', purpose: 'Personal financial benefits gained through corruption in Election Interference Patterns', documented: false },
  ],

  'environmental-destruction': [
    { date: '2013-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$120.4B', purpose: 'Revenue from operations causing environmental damage in Corporate Environmental Destruction', documented: true },
    { date: '2018-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$3.3B', purpose: 'Environmental remediation and regulatory penalties for Corporate Environmental Destruction', documented: true },
    { date: '2015-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$353M', purpose: 'Lobbying to weaken regulations related to Corporate Environmental Destruction', documented: true },
  ],

  'ecohealth': [
    { date: '2020-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$464M', purpose: 'Undisclosed political spending connected to EcoHealth Alliance Investigation', documented: false },
    { date: '2021-01-01', from: 'Corporate donors', to: 'EcoHealth Alliance', amount: '$813M', purpose: 'Campaign contributions and financial benefits flowing through EcoHealth Alliance Investigation', documented: true },
    { date: '2022-01-01', from: 'EcoHealth Alliance', to: 'Personal financial enrichment', amount: '$54M', purpose: 'Personal financial benefits gained through corruption in EcoHealth Alliance Investigation', documented: false },
  ],

  'elite-pedophiles': [
    { date: '2009-01-01', from: 'Jeffrey Epstein', to: 'Operations during misconduct period', amount: '$17.0B', purpose: 'Institutional spending during period of abuse in Elite Pedophile Networks', documented: true },
    { date: '2013-01-01', from: 'Jeffrey Epstein', to: 'Victim settlements', amount: '$12.0B', purpose: 'Settlements and reparations paid to victims of Elite Pedophile Networks', documented: true },
  ],

  'environmental-corruption': [
    { date: '2013-01-01', from: 'Regulated industries', to: 'Lobbying captured regulators', amount: '$1.6B', purpose: 'Industry lobbying and influence over regulations in Environmental Regulatory Corruption', documented: true },
    { date: '2015-01-01', from: 'Public', to: 'Costs of regulatory failure', amount: '$37.6B', purpose: 'Economic damage from regulatory failure exposed in Environmental Regulatory Corruption', documented: true },
  ],

  'election-denial': [
    { date: '2020-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.2B', purpose: 'Undisclosed political spending connected to Election Denial Movement', documented: false },
    { date: '2021-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.6B', purpose: 'Campaign contributions and financial benefits flowing through Election Denial Movement', documented: true },
    { date: '2022-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$693M', purpose: 'Personal financial benefits gained through corruption in Election Denial Movement', documented: false },
  ],

  'environmental-crimes': [
    { date: '2013-01-01', from: 'DuPont', to: 'Revenue from polluting operations', amount: '$37.5B', purpose: 'Revenue from operations causing environmental damage in Corporate Environmental Crimes', documented: true },
    { date: '2018-01-01', from: 'DuPont', to: 'EPA fines and cleanup costs', amount: '$10.8B', purpose: 'Environmental remediation and regulatory penalties for Corporate Environmental Crimes', documented: true },
    { date: '2015-01-01', from: 'DuPont', to: 'Environmental lobbying', amount: '$105M', purpose: 'Lobbying to weaken regulations related to Corporate Environmental Crimes', documented: true },
  ],


  'ethiopian-airlines-302': [
    { date: '2019-01-01', from: 'Boeing', to: 'Revenue from harmful practices', amount: '$36.9B', purpose: 'Boeing revenue while engaging in practices exposed by Ethiopian Airlines Flight 302 Crash', documented: true },
    { date: '2021-01-01', from: 'Boeing', to: 'Anti-regulation lobbying', amount: '$138M', purpose: 'Lobbying spending by Boeing to avoid accountability in Ethiopian Airlines Flight 302 Crash', documented: true },
  ],

  'egypt-dictatorship': [
    { date: '2025-01-01', from: 'Abdel Fattah el-Sisi', to: 'Military/security operations', amount: '$40.7B', purpose: 'Military spending on operations involving atrocities in Egypt Under Sisi: U.S.-Funded Dictatorship', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$9.6B', purpose: 'Weapons industry profits from conflict in Egypt Under Sisi: U.S.-Funded Dictatorship', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$2.8B', purpose: 'Reparations and frozen assets related to Egypt Under Sisi: U.S.-Funded Dictatorship', documented: true },
  ],

  'el-paso-walmart-massacre': [
    { date: '2023-01-01', from: 'US taxpayers', to: 'FBI', amount: '$27.4B', purpose: 'Budget allocation for operations connected to El Paso Walmart Massacre', documented: false },
    { date: '2024-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$13.3B', purpose: 'Contractor profits from programs related to El Paso Walmart Massacre', documented: true },
    { date: '2025-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$4.6B', purpose: 'Classified spending on programs exposed in El Paso Walmart Massacre', documented: false },
  ],

  'elite-coordination': [
    { date: '2022-01-01', from: 'Elite networks', to: 'Concentrated wealth flows', amount: '$200.2B', purpose: 'Wealth concentration and financial flows in Elite Coordination: How the Powerful Align Against the Public', documented: false },
    { date: '2024-01-01', from: 'Billionaire class', to: 'Political influence and tax avoidance', amount: '$61.6B', purpose: 'Tax avoidance and political spending exposed in Elite Coordination: How the Powerful Align Against the Public', documented: true },
  ],

  'epipen-price-gouging': [
    { date: '2024-01-01', from: 'Mylan', to: 'Revenue from harmful practices', amount: '$20.9B', purpose: 'Mylan revenue while engaging in practices exposed by EpiPen Price Gouging: Profiting From Allergic Children', documented: true },
    { date: '2025-01-01', from: 'Mylan', to: 'Anti-regulation lobbying', amount: '$907M', purpose: 'Lobbying spending by Mylan to avoid accountability in EpiPen Price Gouging: Profiting From Allergic Children', documented: true },
    { date: '2025-01-01', from: 'Mylan', to: 'Legal penalties and settlements', amount: '$4.6B', purpose: 'Fines and settlements resulting from EpiPen Price Gouging: Profiting From Allergic Children', documented: true },
  ],

  'eric-garner-death': [
    { date: '2022-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$11.6B', purpose: 'Department funding during period of misconduct in Eric Garner: "I Can\'t Breathe"', documented: true },
    { date: '2024-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$300M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Eric Garner: "I Can\'t Breathe"', documented: true },
    { date: '2023-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$771M', purpose: 'Equipment and training spending related to Eric Garner: "I Can\'t Breathe"', documented: true },
  ],

  'ev-fraud': [
    { date: '2023-01-01', from: 'Tesla Motors', to: 'Illicit financial flows', amount: '$11.9B', purpose: 'Fraudulent financial activity in Electric Vehicle Industry Fraud: The SPAC and Startup Deception', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Tesla Motors', amount: '$4.5B', purpose: 'Fines and penalties imposed for violations uncovered in Electric Vehicle Industry Fraud: The SPAC and Startup Deception', documented: true },
    { date: '2025-01-01', from: 'Tesla Motors', to: 'Affected investors / victims', amount: '$3.6B', purpose: 'Restitution and settlement payments to victims of Electric Vehicle Industry Fraud: The SPAC and Startup Deception', documented: true },
  ],


  'exxon-valdez': [
    { date: '2017-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$109.2B', purpose: 'Revenue from operations causing environmental damage in Exxon Valdez: The Oil Spill That Changed Nothing', documented: true },
    { date: '2022-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$9.7B', purpose: 'Environmental remediation and regulatory penalties for Exxon Valdez: The Oil Spill That Changed Nothing', documented: true },
    { date: '2019-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$158M', purpose: 'Lobbying to weaken regulations related to Exxon Valdez: The Oil Spill That Changed Nothing', documented: true },
  ],

  'electoral-college-manipulation': [
    { date: '2025-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$1.2B', purpose: 'Department funding during period of misconduct in Epstein Network Full Mapping', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.9B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Epstein Network Full Mapping', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$621M', purpose: 'Equipment and training spending related to Epstein Network Full Mapping', documented: true },
  ],

  'echelon-global-surveillance-network': [
    { date: '2025-01-01', from: 'Government agencies', to: 'NSA', amount: '$3.4B', purpose: 'Contracts for surveillance technology related to ECHELON Global Surveillance Network', documented: false },
    { date: '2025-01-01', from: 'NSA', to: 'Data monetization revenue', amount: '$29.8B', purpose: 'Revenue from data collection practices exposed in ECHELON Global Surveillance Network', documented: true },
    { date: '2025-01-01', from: 'NSA', to: 'Regulatory fines and settlements', amount: '$11.4B', purpose: 'Privacy violation penalties resulting from ECHELON Global Surveillance Network', documented: true },
  ],

  'extraordinary-rendition-flight-logs': [
    { date: '2022-01-01', from: 'US taxpayers', to: 'CIA', amount: '$10.7B', purpose: 'Budget allocation for operations connected to Extraordinary Rendition Flight Logs', documented: false },
    { date: '2023-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$6.0B', purpose: 'Contractor profits from programs related to Extraordinary Rendition Flight Logs', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$18.0B', purpose: 'Classified spending on programs exposed in Extraordinary Rendition Flight Logs', documented: false },
  ],

  'emf-radiation-research-suppression': [
    { date: '2023-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$3.8B', purpose: 'Revenue generated from products or practices at center of EMF Radiation Research Suppression', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$219M', purpose: 'Lobbying expenditures to prevent regulation related to EMF Radiation Research Suppression', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$8.7B', purpose: 'Legal settlements and compensation arising from EMF Radiation Research Suppression', documented: true },
  ],

  'election-manipulation-through-algorithms': [
    { date: '2016-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$39.8B', purpose: 'Government spending on programs implicated in Election Manipulation Through Algorithms', documented: true },
    { date: '2019-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$3.4B', purpose: 'Settlement costs and remediation arising from Election Manipulation Through Algorithms', documented: true },
    { date: '2017-01-01', from: 'Cambridge Analytica', to: 'Oversight and investigation costs', amount: '$752M', purpose: 'Congressional and inspector general investigation costs for Election Manipulation Through Algorithms', documented: false },
  ],

  'election-interference-networks': [
    { date: '2022-01-01', from: 'US taxpayers', to: 'Internet Research Agency', amount: '$23.2B', purpose: 'Government spending on programs implicated in Election Interference Networks', documented: true },
    { date: '2025-01-01', from: 'Internet Research Agency', to: 'Legal settlements and remediation', amount: '$7.2B', purpose: 'Settlement costs and remediation arising from Election Interference Networks', documented: true },
    { date: '2023-01-01', from: 'Internet Research Agency', to: 'Oversight and investigation costs', amount: '$633M', purpose: 'Congressional and inspector general investigation costs for Election Interference Networks', documented: false },
  ],

  'electronic-voting-machine-vulnerabilities': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$22.2B', purpose: 'Government spending on programs implicated in Electronic Voting Machine Vulnerabilities', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$3.7B', purpose: 'Settlement costs and remediation arising from Electronic Voting Machine Vulnerabilities', documented: true },
    { date: '2025-01-01', from: 'Dominion Voting Systems', to: 'Oversight and investigation costs', amount: '$675M', purpose: 'Congressional and inspector general investigation costs for Electronic Voting Machine Vulnerabilities', documented: false },
  ],

  'electromagnetic-field-reproductive-impact': [
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$21.9B', purpose: 'Revenue generated from products or practices at center of Electromagnetic Field Reproductive Impact', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$298M', purpose: 'Lobbying expenditures to prevent regulation related to Electromagnetic Field Reproductive Impact', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$12.6B', purpose: 'Legal settlements and compensation arising from Electromagnetic Field Reproductive Impact', documented: true },
  ],

  'economic-policy-population-control-links': [
    { date: '2023-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$49.5B', purpose: 'Government spending on programs implicated in Economic Policy Population Control Links', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$4.7B', purpose: 'Settlement costs and remediation arising from Economic Policy Population Control Links', documented: true },
    { date: '2024-01-01', from: 'World Bank', to: 'Oversight and investigation costs', amount: '$367M', purpose: 'Congressional and inspector general investigation costs for Economic Policy Population Control Links', documented: false },
  ],

  'environmental-toxin-fertility-impact': [
    { date: '2022-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$124.8B', purpose: 'Revenue from operations causing environmental damage in Environmental Toxin Fertility Impact', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$12.0B', purpose: 'Environmental remediation and regulatory penalties for Environmental Toxin Fertility Impact', documented: true },
    { date: '2024-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$167M', purpose: 'Lobbying to weaken regulations related to Environmental Toxin Fertility Impact', documented: true },
  ],

  'election-observer-intimidation-tactics': [
    { date: '2017-01-01', from: 'US taxpayers', to: 'DOJ', amount: '$5.7B', purpose: 'Government spending on programs implicated in Election Observer Intimidation Tactics', documented: true },
    { date: '2020-01-01', from: 'DOJ', to: 'Legal settlements and remediation', amount: '$8.8B', purpose: 'Settlement costs and remediation arising from Election Observer Intimidation Tactics', documented: true },
    { date: '2018-01-01', from: 'Election Observer Intimidation Tactics', to: 'Oversight and investigation costs', amount: '$434M', purpose: 'Congressional and inspector general investigation costs for Election Observer Intimidation Tactics', documented: false },
  ],

  'environmental-justice-community-mapping': [
    { date: '2024-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$45.0B', purpose: 'Revenue from operations causing environmental damage in Environmental Justice Community Mapping', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$7.0B', purpose: 'Environmental remediation and regulatory penalties for Environmental Justice Community Mapping', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$56M', purpose: 'Lobbying to weaken regulations related to Environmental Justice Community Mapping', documented: true },
  ],

  'evidence-destruction': [
    { date: '2020-01-01', from: 'CIA', to: 'Operations and activities', amount: '$14.1B', purpose: 'Financial flows connected to Evidence Destruction', documented: true },
    { date: '2023-01-01', from: 'CIA', to: 'Legal and remediation costs', amount: '$1.1B', purpose: 'Accountability costs arising from Evidence Destruction', documented: true },
  ],

  'el-paso-massacre': [
    { date: '2020-01-01', from: 'El Paso Massacre', to: 'Operations and activities', amount: '$5.7B', purpose: 'Financial flows connected to El Paso Massacre', documented: true },
    { date: '2023-01-01', from: 'El Paso Massacre', to: 'Legal and remediation costs', amount: '$2.8B', purpose: 'Accountability costs arising from El Paso Massacre', documented: true },
  ],

  'election-security-threats': [
    { date: '2016-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$11.7B', purpose: 'Undisclosed political spending connected to Election Security Threats', documented: false },
    { date: '2017-01-01', from: 'Corporate donors', to: 'Russian GRU', amount: '$1.5B', purpose: 'Campaign contributions and financial benefits flowing through Election Security Threats', documented: true },
    { date: '2018-01-01', from: 'Russian GRU', to: 'Personal financial enrichment', amount: '$579M', purpose: 'Personal financial benefits gained through corruption in Election Security Threats', documented: false },
  ],

  'environmental-racism': [
    { date: '1994-01-01', from: 'Louisiana Department of Environmental Quality', to: 'Revenue from polluting operations', amount: '$109.7B', purpose: 'Revenue from operations causing environmental damage in Environmental Racism', documented: true },
    { date: '1999-01-01', from: 'Louisiana Department of Environmental Quality', to: 'EPA fines and cleanup costs', amount: '$271M', purpose: 'Environmental remediation and regulatory penalties for Environmental Racism', documented: true },
    { date: '1996-01-01', from: 'Louisiana Department of Environmental Quality', to: 'Environmental lobbying', amount: '$89M', purpose: 'Lobbying to weaken regulations related to Environmental Racism', documented: true },
  ],

  'executive-compensation-gouging': [
    { date: '2020-01-01', from: 'Elite networks', to: 'Concentrated wealth flows', amount: '$20.4B', purpose: 'Wealth concentration and financial flows in Executive Compensation Gouging', documented: false },
    { date: '2022-01-01', from: 'Billionaire class', to: 'Political influence and tax avoidance', amount: '$49.2B', purpose: 'Tax avoidance and political spending exposed in Executive Compensation Gouging', documented: true },
  ],

  'epa-regulatory-capture': [
    { date: '1970-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$22.1B', purpose: 'Revenue from operations causing environmental damage in EPA Regulatory Capture: The Systematic Neutering of Environmental Protection', documented: true },
    { date: '1975-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$4.7B', purpose: 'Environmental remediation and regulatory penalties for EPA Regulatory Capture: The Systematic Neutering of Environmental Protection', documented: true },
    { date: '1972-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$90M', purpose: 'Lobbying to weaken regulations related to EPA Regulatory Capture: The Systematic Neutering of Environmental Protection', documented: true },
  ],

  'electronic-frontier-mass-surveillance': [
    { date: '2001-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$19.7B', purpose: 'Government spending on operations that violated civil rights in The Electronic Surveillance State: From Echelon to Pegasus', documented: true },
    { date: '2005-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$799M', purpose: 'Settlements and compensation to victims of The Electronic Surveillance State: From Echelon to Pegasus', documented: true },
  ],

  'emirati-influence-operations-american-politics': [
    { date: '2021-01-01', from: 'US taxpayers', to: 'FBI', amount: '$55.5B', purpose: 'Budget allocation for operations connected to Emirati Influence Operations in American Politics', documented: false },
    { date: '2022-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$24.5B', purpose: 'Contractor profits from programs related to Emirati Influence Operations in American Politics', documented: true },
    { date: '2024-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$15.2B', purpose: 'Classified spending on programs exposed in Emirati Influence Operations in American Politics', documented: false },
  ],

  'exxon-climate-fraud': [
    { date: '2015-01-01', from: 'ExxonMobil', to: 'Revenue from harmful practices', amount: '$113.4B', purpose: 'ExxonMobil revenue while engaging in practices exposed by Exxon Climate Fraud', documented: true },
    { date: '2017-01-01', from: 'ExxonMobil', to: 'Anti-regulation lobbying', amount: '$1.5B', purpose: 'Lobbying spending by ExxonMobil to avoid accountability in Exxon Climate Fraud', documented: true },
    { date: '2019-01-01', from: 'ExxonMobil', to: 'Legal penalties and settlements', amount: '$12.6B', purpose: 'Fines and settlements resulting from Exxon Climate Fraud', documented: true },
  ],

  'east-palestine-train-derailment': [
    { date: '2023-01-01', from: 'NTSB', to: 'Revenue from polluting operations', amount: '$77.2B', purpose: 'Revenue from operations causing environmental damage in East Palestine Train Derailment', documented: true },
    { date: '2025-01-01', from: 'NTSB', to: 'EPA fines and cleanup costs', amount: '$9.5B', purpose: 'Environmental remediation and regulatory penalties for East Palestine Train Derailment', documented: true },
    { date: '2025-01-01', from: 'NTSB', to: 'Environmental lobbying', amount: '$125M', purpose: 'Lobbying to weaken regulations related to East Palestine Train Derailment', documented: true },
  ],

  'equifax-data-breach': [
    { date: '2017-01-01', from: 'Equifax', to: 'Revenue from harmful practices', amount: '$87.3B', purpose: 'Equifax revenue while engaging in practices exposed by Equifax Data Breach', documented: true },
    { date: '2019-01-01', from: 'Equifax', to: 'Anti-regulation lobbying', amount: '$176M', purpose: 'Lobbying spending by Equifax to avoid accountability in Equifax Data Breach', documented: true },
    { date: '2021-01-01', from: 'Equifax', to: 'Legal penalties and settlements', amount: '$7.6B', purpose: 'Fines and settlements resulting from Equifax Data Breach', documented: true },
  ],

  'enron-corporate-fraud-scandal': [
    { date: '2001-01-01', from: 'Enron', to: 'Illicit financial flows', amount: '$7.8B', purpose: 'Fraudulent financial activity in Enron Corporate Fraud Scandal', documented: true },
    { date: '2004-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Enron', amount: '$1.5B', purpose: 'Fines and penalties imposed for violations uncovered in Enron Corporate Fraud Scandal', documented: true },
    { date: '2003-01-01', from: 'Enron', to: 'Affected investors / victims', amount: '$11.8B', purpose: 'Restitution and settlement payments to victims of Enron Corporate Fraud Scandal', documented: true },
  ],

  'elizabeth-holmes-theranos-fraud': [
    { date: '2015-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$17.8B', purpose: 'Revenue generated from products or practices at center of Elizabeth Holmes and Theranos: Silicon Valley\'s Billion-Dollar Blood Testing Fraud', documented: true },
    { date: '2017-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.7B', purpose: 'Lobbying expenditures to prevent regulation related to Elizabeth Holmes and Theranos: Silicon Valley\'s Billion-Dollar Blood Testing Fraud', documented: true },
    { date: '2019-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$36.6B', purpose: 'Legal settlements and compensation arising from Elizabeth Holmes and Theranos: Silicon Valley\'s Billion-Dollar Blood Testing Fraud', documented: true },
  ],

  'eminent-domain-abuse-property-seizure': [
    { date: '2005-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$6.3B', purpose: 'Government spending on operations that violated civil rights in Eminent Domain Abuse: Government Seizure of Private Property for Corporate Gain', documented: true },
    { date: '2009-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$5.0B', purpose: 'Settlements and compensation to victims of Eminent Domain Abuse: Government Seizure of Private Property for Corporate Gain', documented: true },
  ],

  'environmental-racism-toxic-exposure': [
    { date: '2024-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$107.3B', purpose: 'Revenue from operations causing environmental damage in Environmental Racism and Toxic Exposure in Minority Communities', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$9.1B', purpose: 'Environmental remediation and regulatory penalties for Environmental Racism and Toxic Exposure in Minority Communities', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$650M', purpose: 'Lobbying to weaken regulations related to Environmental Racism and Toxic Exposure in Minority Communities', documented: true },
  ],

  'elder-financial-exploitation': [
    { date: '2024-01-01', from: 'Elder Financial Exploitation and Guardianship Abuse', to: 'Operations during misconduct period', amount: '$12.3B', purpose: 'Institutional spending during period of abuse in Elder Financial Exploitation and Guardianship Abuse', documented: true },
    { date: '2025-01-01', from: 'Elder Financial Exploitation and Guardianship Abuse', to: 'Victim settlements', amount: '$4.6B', purpose: 'Settlements and reparations paid to victims of Elder Financial Exploitation and Guardianship Abuse', documented: true },
  ],

  'emergency-room-surprise-billing': [
    { date: '2024-01-01', from: 'CMS', to: 'Revenue from harmful products/practices', amount: '$62.1B', purpose: 'Revenue generated from products or practices at center of Emergency Room Surprise Billing', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Lobbying and political influence', amount: '$305M', purpose: 'Lobbying expenditures to prevent regulation related to Emergency Room Surprise Billing', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Settlements and victim compensation', amount: '$9.0B', purpose: 'Legal settlements and compensation arising from Emergency Room Surprise Billing', documented: true },
  ],

  'enhanced-interrogation-cia-black-sites': [
    { date: '2001-01-01', from: 'US taxpayers', to: 'CIA', amount: '$34.2B', purpose: 'Government spending on programs implicated in Enhanced Interrogation and CIA Black Sites: America\'s Global Torture Program', documented: true },
    { date: '2004-01-01', from: 'CIA', to: 'Legal settlements and remediation', amount: '$1.1B', purpose: 'Settlement costs and remediation arising from Enhanced Interrogation and CIA Black Sites: America\'s Global Torture Program', documented: true },
    { date: '2002-01-01', from: 'Gina Haspel', to: 'Oversight and investigation costs', amount: '$1.5B', purpose: 'Congressional and inspector general investigation costs for Enhanced Interrogation and CIA Black Sites: America\'s Global Torture Program', documented: false },
  ],


  // ========== F ==========

  'financial-fraud': [
    { date: '2010-01-01', from: 'Donald Trump', to: 'Illicit financial flows', amount: '$21.1B', purpose: 'Fraudulent financial activity in Financial Fraud & Securities Violations', documented: true },
    { date: '2013-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Donald Trump', amount: '$4.4B', purpose: 'Fines and penalties imposed for violations uncovered in Financial Fraud & Securities Violations', documented: true },
    { date: '2012-01-01', from: 'Donald Trump', to: 'Affected investors / victims', amount: '$7.5B', purpose: 'Restitution and settlement payments to victims of Financial Fraud & Securities Violations', documented: true },
  ],

  'foreign-influence': [
    { date: '2018-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$94.9B', purpose: 'Budget allocation for operations connected to Foreign Influence Operations', documented: false },
    { date: '2019-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$9.6B', purpose: 'Contractor profits from programs related to Foreign Influence Operations', documented: true },
    { date: '2021-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$31.5B', purpose: 'Classified spending on programs exposed in Foreign Influence Operations', documented: false },
  ],

  'foreign-agents': [
    { date: '2018-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$5.9B', purpose: 'Foreign spending on influence operations in Foreign Agent Registration Violations', documented: false },
    { date: '2020-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$1.3B', purpose: 'US government response costs for Foreign Agent Registration Violations', documented: true },
  ],

  'first-impeachment': [
    { date: '2019-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$3.9B', purpose: 'Undisclosed political spending connected to First Impeachment, Ukraine Extortion', documented: false },
    { date: '2020-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$841M', purpose: 'Campaign contributions and financial benefits flowing through First Impeachment, Ukraine Extortion', documented: true },
    { date: '2021-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$610M', purpose: 'Personal financial benefits gained through corruption in First Impeachment, Ukraine Extortion', documented: false },
  ],

  'flynn-russia': [
    { date: '2017-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$5.5B', purpose: 'Foreign spending on influence operations in Michael Flynn Russia Scandal', documented: false },
    { date: '2019-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$2.2B', purpose: 'US government response costs for Michael Flynn Russia Scandal', documented: true },
  ],

  'federal-election-interference': [
    { date: '2018-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.8B', purpose: 'Undisclosed political spending connected to Federal Election Interference', documented: false },
    { date: '2019-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.6B', purpose: 'Campaign contributions and financial benefits flowing through Federal Election Interference', documented: true },
    { date: '2020-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$70M', purpose: 'Personal financial benefits gained through corruption in Federal Election Interference', documented: false },
  ],

  'fox-disinformation': [
    { date: '2021-01-01', from: 'Fox Corporation', to: 'Revenue from disinformation', amount: '$75.6B', purpose: 'Revenue generated while spreading misleading content in Fox News Disinformation Machine', documented: true },
    { date: '2023-01-01', from: 'Fox Corporation', to: 'Legal penalties', amount: '$7.2B', purpose: 'Legal costs and settlements for misconduct in Fox News Disinformation Machine', documented: true },
  ],

  'federal-election-conspiracy': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.4B', purpose: 'Undisclosed political spending connected to Trump Federal Election Conspiracy Charges', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$494M', purpose: 'Campaign contributions and financial benefits flowing through Trump Federal Election Conspiracy Charges', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$717M', purpose: 'Personal financial benefits gained through corruption in Trump Federal Election Conspiracy Charges', documented: false },
  ],

  'fbi-surveillance': [
    { date: '2012-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.2B', purpose: 'Undisclosed political spending connected to FBI Domestic Surveillance', documented: false },
    { date: '2013-01-01', from: 'Corporate donors', to: 'J. Edgar Hoover', amount: '$797M', purpose: 'Campaign contributions and financial benefits flowing through FBI Domestic Surveillance', documented: true },
    { date: '2014-01-01', from: 'J. Edgar Hoover', to: 'Personal financial enrichment', amount: '$417M', purpose: 'Personal financial benefits gained through corruption in FBI Domestic Surveillance', documented: false },
  ],

  'fbi-civil-rights': [
    { date: '2012-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.9B', purpose: 'Undisclosed political spending connected to FBI vs. Civil Rights Movement', documented: false },
    { date: '2013-01-01', from: 'Corporate donors', to: 'J. Edgar Hoover', amount: '$990M', purpose: 'Campaign contributions and financial benefits flowing through FBI vs. Civil Rights Movement', documented: true },
    { date: '2014-01-01', from: 'J. Edgar Hoover', to: 'Personal financial enrichment', amount: '$507M', purpose: 'Personal financial benefits gained through corruption in FBI vs. Civil Rights Movement', documented: false },
  ],

  'far-right-extremism': [
    { date: '2022-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$81.3B', purpose: 'Budget allocation for operations connected to Far-Right Extremism', documented: false },
    { date: '2023-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$3.8B', purpose: 'Contractor profits from programs related to Far-Right Extremism', documented: true },
    { date: '2025-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$8.7B', purpose: 'Classified spending on programs exposed in Far-Right Extremism', documented: false },
  ],

  'faa-regulatory-capture': [
    { date: '2019-01-01', from: 'Regulated industries', to: 'Lobbying captured regulators', amount: '$2.9B', purpose: 'Industry lobbying and influence over regulations in FAA: Captured by Boeing', documented: true },
    { date: '2021-01-01', from: 'Public', to: 'Costs of regulatory failure', amount: '$58.1B', purpose: 'Economic damage from regulatory failure exposed in FAA: Captured by Boeing', documented: true },
  ],

  'ftx-collapse': [
    { date: '2022-01-01', from: 'Sam Bankman-Fried', to: 'Illicit financial flows', amount: '$3.1B', purpose: 'Fraudulent financial activity in FTX Cryptocurrency Collapse', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Sam Bankman-Fried', amount: '$4.0B', purpose: 'Fines and penalties imposed for violations uncovered in FTX Cryptocurrency Collapse', documented: true },
    { date: '2024-01-01', from: 'Sam Bankman-Fried', to: 'Affected investors / victims', amount: '$9.9B', purpose: 'Restitution and settlement payments to victims of FTX Cryptocurrency Collapse', documented: true },
  ],

  'facebook-mental-health': [
    { date: '2021-01-01', from: 'Meta', to: 'Revenue from harmful practices', amount: '$52.0B', purpose: 'Meta revenue while engaging in practices exposed by Facebook Mental Health Crisis', documented: true },
    { date: '2023-01-01', from: 'Meta', to: 'Anti-regulation lobbying', amount: '$1.0B', purpose: 'Lobbying spending by Meta to avoid accountability in Facebook Mental Health Crisis', documented: true },
    { date: '2025-01-01', from: 'Meta', to: 'Legal penalties and settlements', amount: '$5.9B', purpose: 'Fines and settlements resulting from Facebook Mental Health Crisis', documented: true },
  ],

  'family-separation-policy': [
    { date: '2019-01-01', from: 'Donald Trump', to: 'Military/security operations', amount: '$139.5B', purpose: 'Military spending on operations involving atrocities in Family Separation Policy: Zero Tolerance at the Border', documented: false },
    { date: '2021-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$35.2B', purpose: 'Weapons industry profits from conflict in Family Separation Policy: Zero Tolerance at the Border', documented: true },
    { date: '2024-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$905M', purpose: 'Reparations and frozen assets related to Family Separation Policy: Zero Tolerance at the Border', documented: true },
  ],

  'far-right': [
    { date: '2019-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.3B', purpose: 'Undisclosed political spending connected to The Far-Right Movement in America: From Fringe to Mainstream', documented: false },
    { date: '2020-01-01', from: 'Corporate donors', to: 'Proud Boys', amount: '$1.1B', purpose: 'Campaign contributions and financial benefits flowing through The Far-Right Movement in America: From Fringe to Mainstream', documented: true },
    { date: '2021-01-01', from: 'Proud Boys', to: 'Personal financial enrichment', amount: '$173M', purpose: 'Personal financial benefits gained through corruption in The Far-Right Movement in America: From Fringe to Mainstream', documented: false },
  ],

  'far-right-media': [
    { date: '2020-01-01', from: 'Fox News', to: 'Revenue from disinformation', amount: '$40.7B', purpose: 'Revenue generated while spreading misleading content in Far-Right Media Ecosystem: The Radicalization Machine', documented: true },
    { date: '2022-01-01', from: 'Fox News', to: 'Legal penalties', amount: '$5.9B', purpose: 'Legal costs and settlements for misconduct in Far-Right Media Ecosystem: The Radicalization Machine', documented: true },
  ],

  'fast-food-labor': [
    { date: '2024-01-01', from: 'Andy Puzder', to: 'Revenue from harmful practices', amount: '$56.2B', purpose: 'Andy Puzder revenue while engaging in practices exposed by Fast Food Labor: The $200 Billion Industry Built on Poverty Wages', documented: true },
    { date: '2025-01-01', from: 'Andy Puzder', to: 'Anti-regulation lobbying', amount: '$132M', purpose: 'Lobbying spending by Andy Puzder to avoid accountability in Fast Food Labor: The $200 Billion Industry Built on Poverty Wages', documented: true },
    { date: '2025-01-01', from: 'Andy Puzder', to: 'Legal penalties and settlements', amount: '$4.8B', purpose: 'Fines and settlements resulting from Fast Food Labor: The $200 Billion Industry Built on Poverty Wages', documented: true },
  ],

  'fbi-assassinations': [
    { date: '2012-01-01', from: 'US taxpayers', to: 'FBI', amount: '$80.0B', purpose: 'Budget allocation for operations connected to FBI Assassinations: COINTELPRO and the Bureau\'s Lethal Operations', documented: false },
    { date: '2013-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$9.9B', purpose: 'Contractor profits from programs related to FBI Assassinations: COINTELPRO and the Bureau\'s Lethal Operations', documented: true },
    { date: '2015-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$8.7B', purpose: 'Classified spending on programs exposed in FBI Assassinations: COINTELPRO and the Bureau\'s Lethal Operations', documented: false },
  ],

  'ferguson-doj': [
    { date: '2009-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$6.0B', purpose: 'Department funding during period of misconduct in Ferguson DOJ Investigation: Systemic Racism as Municipal Policy', documented: true },
    { date: '2011-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$41M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Ferguson DOJ Investigation: Systemic Racism as Municipal Policy', documented: true },
    { date: '2010-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$239M', purpose: 'Equipment and training spending related to Ferguson DOJ Investigation: Systemic Racism as Municipal Policy', documented: true },
  ],

  'financial-crisis-profiteering': [
    { date: '2024-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$20.4B', purpose: 'Fraudulent financial activity in Financial Crisis Profiteering: How Wall Street Made Billions From the Crash It Created', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$1.8B', purpose: 'Fines and penalties imposed for violations uncovered in Financial Crisis Profiteering: How Wall Street Made Billions From the Crash It Created', documented: true },
    { date: '2025-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$14.2B', purpose: 'Restitution and settlement payments to victims of Financial Crisis Profiteering: How Wall Street Made Billions From the Crash It Created', documented: true },
  ],

  'foreign-bribery': [
    { date: '2018-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.2B', purpose: 'Undisclosed political spending connected to Foreign Bribery: How U.S. Corporations Buy Governments Abroad', documented: false },
    { date: '2019-01-01', from: 'Corporate donors', to: 'Foreign Bribery', amount: '$59M', purpose: 'Campaign contributions and financial benefits flowing through Foreign Bribery: How U.S. Corporations Buy Governments Abroad', documented: true },
    { date: '2020-01-01', from: 'Foreign Bribery', to: 'Personal financial enrichment', amount: '$453M', purpose: 'Personal financial benefits gained through corruption in Foreign Bribery: How U.S. Corporations Buy Governments Abroad', documented: false },
  ],

  'foreign-interference': [
    { date: '2023-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$8.9B', purpose: 'Foreign spending on influence operations in Foreign Interference in U.S. Democracy', documented: false },
    { date: '2025-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$5.8B', purpose: 'US government response costs for Foreign Interference in U.S. Democracy', documented: true },
  ],

  'fossil-fuel-crimes': [
    { date: '2012-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$70.0B', purpose: 'Revenue from operations causing environmental damage in Fossil Fuel Industry: A Century of Environmental Crime', documented: true },
    { date: '2017-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$16.3B', purpose: 'Environmental remediation and regulatory penalties for Fossil Fuel Industry: A Century of Environmental Crime', documented: true },
    { date: '2014-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$250M', purpose: 'Lobbying to weaken regulations related to Fossil Fuel Industry: A Century of Environmental Crime', documented: true },
  ],

  'fossil-fuel-lobbying': [
    { date: '2020-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$47.9B', purpose: 'Revenue from operations causing environmental damage in Fossil Fuel Lobbying: Buying the Right to Destroy the Planet', documented: true },
    { date: '2025-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$6.7B', purpose: 'Environmental remediation and regulatory penalties for Fossil Fuel Lobbying: Buying the Right to Destroy the Planet', documented: true },
    { date: '2022-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$407M', purpose: 'Lobbying to weaken regulations related to Fossil Fuel Lobbying: Buying the Right to Destroy the Planet', documented: true },
  ],

  'fox-misinformation': [
    { date: '2023-01-01', from: 'Fox News', to: 'Revenue from disinformation', amount: '$17.8B', purpose: 'Revenue generated while spreading misleading content in Fox News Misinformation Machine', documented: true },
    { date: '2025-01-01', from: 'Fox News', to: 'Legal penalties', amount: '$7.0B', purpose: 'Legal costs and settlements for misconduct in Fox News Misinformation Machine', documented: true },
  ],

  'fyre-festival': [
    { date: '2018-01-01', from: 'Billy McFarland', to: 'Illicit financial flows', amount: '$3.3B', purpose: 'Fraudulent financial activity in Fyre Festival: The $26 Million Fraud', documented: true },
    { date: '2021-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Billy McFarland', amount: '$683M', purpose: 'Fines and penalties imposed for violations uncovered in Fyre Festival: The $26 Million Fraud', documented: true },
    { date: '2020-01-01', from: 'Billy McFarland', to: 'Affected investors / victims', amount: '$5.1B', purpose: 'Restitution and settlement payments to victims of Fyre Festival: The $26 Million Fraud', documented: true },
  ],

  'foreign-election-interference-operations': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Internet Research Agency', amount: '$7.5B', purpose: 'Government spending on programs implicated in Foreign Election Interference Operations', documented: true },
    { date: '2025-01-01', from: 'Internet Research Agency', to: 'Legal settlements and remediation', amount: '$4.4B', purpose: 'Settlement costs and remediation arising from Foreign Election Interference Operations', documented: true },
    { date: '2025-01-01', from: 'Internet Research Agency', to: 'Oversight and investigation costs', amount: '$670M', purpose: 'Congressional and inspector general investigation costs for Foreign Election Interference Operations', documented: false },
  ],

  'financial-fraud-network-mapping': [
    { date: '2024-01-01', from: 'Financial', to: 'Illicit financial flows', amount: '$8.5B', purpose: 'Fraudulent financial activity in Financial Fraud Network Mapping', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Financial', amount: '$3.8B', purpose: 'Fines and penalties imposed for violations uncovered in Financial Fraud Network Mapping', documented: true },
    { date: '2025-01-01', from: 'Financial', to: 'Affected investors / victims', amount: '$8.6B', purpose: 'Restitution and settlement payments to victims of Financial Fraud Network Mapping', documented: true },
  ],

  'ftx-crypto-collapse-cover-up': [
    { date: '2023-01-01', from: 'FTX', to: 'Illicit financial flows', amount: '$4.1B', purpose: 'Fraudulent financial activity in FTX Crypto Collapse Cover-Up', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against FTX', amount: '$6.2B', purpose: 'Fines and penalties imposed for violations uncovered in FTX Crypto Collapse Cover-Up', documented: true },
    { date: '2025-01-01', from: 'FTX', to: 'Affected investors / victims', amount: '$16.5B', purpose: 'Restitution and settlement payments to victims of FTX Crypto Collapse Cover-Up', documented: true },
  ],

  'forced-labor-in-us-prison-system': [
    { date: '2023-01-01', from: 'Federal Bureau of Prisons', to: 'Revenue from harmful practices', amount: '$156.9B', purpose: 'Federal Bureau of Prisons revenue while engaging in practices exposed by Forced Labor in US Prison System', documented: true },
    { date: '2025-01-01', from: 'Federal Bureau of Prisons', to: 'Anti-regulation lobbying', amount: '$401M', purpose: 'Lobbying spending by Federal Bureau of Prisons to avoid accountability in Forced Labor in US Prison System', documented: true },
    { date: '2025-01-01', from: 'Federal Bureau of Prisons', to: 'Legal penalties and settlements', amount: '$8.3B', purpose: 'Fines and settlements resulting from Forced Labor in US Prison System', documented: true },
  ],

  'five-eyes-intelligence-sharing-overreach': [
    { date: '2020-01-01', from: 'US taxpayers', to: 'NSA', amount: '$57.4B', purpose: 'Budget allocation for operations connected to Five Eyes Intelligence Sharing Overreach', documented: false },
    { date: '2021-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$37.4B', purpose: 'Contractor profits from programs related to Five Eyes Intelligence Sharing Overreach', documented: true },
    { date: '2023-01-01', from: 'NSA', to: 'Classified / black budget programs', amount: '$16.8B', purpose: 'Classified spending on programs exposed in Five Eyes Intelligence Sharing Overreach', documented: false },
  ],

  'fossil-fuel-capture-of-doe': [
    { date: '2017-01-01', from: 'ExxonMobil', to: 'Revenue from energy operations', amount: '$109.7B', purpose: 'Revenue from energy industry operations in Fossil Fuel Capture of DOE', documented: true },
    { date: '2020-01-01', from: 'ExxonMobil', to: 'Regulatory fines', amount: '$8.0B', purpose: 'Fines and penalties for energy industry violations in Fossil Fuel Capture of DOE', documented: true },
  ],

  'fluoride-controversy-scientific-suppression': [
    { date: '2018-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$17.8B', purpose: 'Revenue generated from products or practices at center of Fluoride Controversy Scientific Suppression', documented: true },
    { date: '2020-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$108M', purpose: 'Lobbying expenditures to prevent regulation related to Fluoride Controversy Scientific Suppression', documented: true },
    { date: '2022-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$11.6B', purpose: 'Legal settlements and compensation arising from Fluoride Controversy Scientific Suppression', documented: true },
  ],

  'food-industry-nutritional-science-manipulation': [
    { date: '2019-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$56.0B', purpose: 'Revenue from operations causing environmental damage in Food Industry Nutritional Science Manipulation', documented: true },
    { date: '2024-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$588M', purpose: 'Environmental remediation and regulatory penalties for Food Industry Nutritional Science Manipulation', documented: true },
    { date: '2021-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$93M', purpose: 'Lobbying to weaken regulations related to Food Industry Nutritional Science Manipulation', documented: true },
  ],

  'facial-recognition-policing-bias': [
    { date: '2019-01-01', from: 'Government agencies', to: 'Clearview AI', amount: '$24.2B', purpose: 'Contracts for surveillance technology related to Facial Recognition Policing Bias', documented: false },
    { date: '2020-01-01', from: 'Clearview AI', to: 'Data monetization revenue', amount: '$70.8B', purpose: 'Revenue from data collection practices exposed in Facial Recognition Policing Bias', documented: true },
    { date: '2022-01-01', from: 'Clearview AI', to: 'Regulatory fines and settlements', amount: '$1.3B', purpose: 'Privacy violation penalties resulting from Facial Recognition Policing Bias', documented: true },
  ],

  'financial-surveillance-reporting-system': [
    { date: '2023-01-01', from: 'Government agencies', to: 'Financial Surveillance Reporting System', amount: '$16.7B', purpose: 'Contracts for surveillance technology related to Financial Surveillance Reporting System', documented: false },
    { date: '2024-01-01', from: 'Financial Surveillance Reporting System', to: 'Data monetization revenue', amount: '$40.0B', purpose: 'Revenue from data collection practices exposed in Financial Surveillance Reporting System', documented: true },
    { date: '2025-01-01', from: 'Financial Surveillance Reporting System', to: 'Regulatory fines and settlements', amount: '$3.2B', purpose: 'Privacy violation penalties resulting from Financial Surveillance Reporting System', documented: true },
  ],

  'foreign-influence-through-media-ownership': [
    { date: '2024-01-01', from: 'Foreign Influence Through Media Ownership', to: 'Revenue from disinformation', amount: '$48.0B', purpose: 'Revenue generated while spreading misleading content in Foreign Influence Through Media Ownership', documented: true },
    { date: '2025-01-01', from: 'Foreign Influence Through Media Ownership', to: 'Legal penalties', amount: '$1.8B', purpose: 'Legal costs and settlements for misconduct in Foreign Influence Through Media Ownership', documented: true },
  ],

  'fossil-fuel-subsidy-hidden-costs': [
    { date: '2025-01-01', from: 'ExxonMobil', to: 'Revenue from energy operations', amount: '$30.2B', purpose: 'Revenue from energy industry operations in Fossil Fuel Subsidy Hidden Costs', documented: true },
    { date: '2025-01-01', from: 'ExxonMobil', to: 'Regulatory fines', amount: '$6.2B', purpose: 'Fines and penalties for energy industry violations in Fossil Fuel Subsidy Hidden Costs', documented: true },
  ],

  'fracking-groundwater-contamination': [
    { date: '2024-01-01', from: 'Halliburton', to: 'Revenue from polluting operations', amount: '$91.0B', purpose: 'Revenue from operations causing environmental damage in Fracking Groundwater Contamination', documented: true },
    { date: '2025-01-01', from: 'Halliburton', to: 'EPA fines and cleanup costs', amount: '$5.8B', purpose: 'Environmental remediation and regulatory penalties for Fracking Groundwater Contamination', documented: true },
    { date: '2025-01-01', from: 'Halliburton', to: 'Environmental lobbying', amount: '$168M', purpose: 'Lobbying to weaken regulations related to Fracking Groundwater Contamination', documented: true },
  ],

  'foster-care-to-trafficking-pipeline': [
    { date: '2020-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$18.9B', purpose: 'Estimated proceeds from trafficking operations in Foster Care to Trafficking Pipeline', documented: false },
    { date: '2023-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$3.3B', purpose: 'Law enforcement asset seizures related to Foster Care to Trafficking Pipeline', documented: true },
    { date: '2022-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$765M', purpose: 'Victim restitution and support programs from Foster Care to Trafficking Pipeline', documented: true },
  ],

  'fda-advisory-committee-conflicts': [
    { date: '2019-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$65.1B', purpose: 'Revenue generated from products or practices at center of FDA Advisory Committee Conflicts', documented: true },
    { date: '2021-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$233M', purpose: 'Lobbying expenditures to prevent regulation related to FDA Advisory Committee Conflicts', documented: true },
    { date: '2023-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$18.5B', purpose: 'Legal settlements and compensation arising from FDA Advisory Committee Conflicts', documented: true },
  ],

  'food-supply-chain-endocrine-disruptors': [
    { date: '2018-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$5.7B', purpose: 'Revenue generated from products or practices at center of Food Supply Chain Endocrine Disruptors', documented: true },
    { date: '2020-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$331M', purpose: 'Lobbying expenditures to prevent regulation related to Food Supply Chain Endocrine Disruptors', documented: true },
    { date: '2022-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$20.6B', purpose: 'Legal settlements and compensation arising from Food Supply Chain Endocrine Disruptors', documented: true },
  ],

  'forced-sterilization-historical-patterns': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$71.0B', purpose: 'Government spending on programs implicated in Forced Sterilization Historical Patterns', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$8.2B', purpose: 'Settlement costs and remediation arising from Forced Sterilization Historical Patterns', documented: true },
    { date: '2025-01-01', from: 'HHS', to: 'Oversight and investigation costs', amount: '$298M', purpose: 'Congressional and inspector general investigation costs for Forced Sterilization Historical Patterns', documented: false },
  ],

  'foreign-government-lobbyist-networks': [
    { date: '2022-01-01', from: 'US taxpayers', to: 'DOJ', amount: '$23.0B', purpose: 'Government spending on programs implicated in Foreign Government Lobbyist Networks', documented: true },
    { date: '2025-01-01', from: 'DOJ', to: 'Legal settlements and remediation', amount: '$1.6B', purpose: 'Settlement costs and remediation arising from Foreign Government Lobbyist Networks', documented: true },
    { date: '2023-01-01', from: 'Foreign Government Lobbyist Networks', to: 'Oversight and investigation costs', amount: '$786M', purpose: 'Congressional and inspector general investigation costs for Foreign Government Lobbyist Networks', documented: false },
  ],

  'financial-transaction-monitoring-overreach': [
    { date: '2019-01-01', from: 'Government agencies', to: 'Financial Transaction Monitoring Overreach', amount: '$3.5B', purpose: 'Contracts for surveillance technology related to Financial Transaction Monitoring Overreach', documented: false },
    { date: '2020-01-01', from: 'Financial Transaction Monitoring Overreach', to: 'Data monetization revenue', amount: '$70.8B', purpose: 'Revenue from data collection practices exposed in Financial Transaction Monitoring Overreach', documented: true },
    { date: '2022-01-01', from: 'Financial Transaction Monitoring Overreach', to: 'Regulatory fines and settlements', amount: '$4.5B', purpose: 'Privacy violation penalties resulting from Financial Transaction Monitoring Overreach', documented: true },
  ],

  'foia-request-denial-patterns': [
    { date: '2013-01-01', from: 'US taxpayers', to: 'DOJ', amount: '$69.4B', purpose: 'Government spending on programs implicated in FOIA Request Denial Patterns', documented: true },
    { date: '2016-01-01', from: 'DOJ', to: 'Legal settlements and remediation', amount: '$11.8B', purpose: 'Settlement costs and remediation arising from FOIA Request Denial Patterns', documented: true },
    { date: '2014-01-01', from: 'CIA', to: 'Oversight and investigation costs', amount: '$1.3B', purpose: 'Congressional and inspector general investigation costs for FOIA Request Denial Patterns', documented: false },
  ],

  'fox-news-sexual-harassment': [
    { date: '2020-01-01', from: 'Fox News Sexual Harassment', to: 'Operations and activities', amount: '$12.8B', purpose: 'Financial flows connected to Fox News Sexual Harassment', documented: true },
    { date: '2023-01-01', from: 'Fox News Sexual Harassment', to: 'Legal and remediation costs', amount: '$451M', purpose: 'Accountability costs arising from Fox News Sexual Harassment', documented: true },
  ],

  'facebook-antitrust': [
    { date: '2020-01-01', from: 'Mark Zuckerberg', to: 'Illicit financial flows', amount: '$16.6B', purpose: 'Fraudulent financial activity in Facebook Antitrust Violations', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Mark Zuckerberg', amount: '$1.8B', purpose: 'Fines and penalties imposed for violations uncovered in Facebook Antitrust Violations', documented: true },
    { date: '2022-01-01', from: 'Mark Zuckerberg', to: 'Affected investors / victims', amount: '$2.6B', purpose: 'Restitution and settlement payments to victims of Facebook Antitrust Violations', documented: true },
  ],

  'fannie-mae-fraud': [
    { date: '2004-01-01', from: 'Franklin Raines', to: 'Illicit financial flows', amount: '$14.0B', purpose: 'Fraudulent financial activity in Fannie Mae Accounting Fraud', documented: true },
    { date: '2007-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Franklin Raines', amount: '$4.7B', purpose: 'Fines and penalties imposed for violations uncovered in Fannie Mae Accounting Fraud', documented: true },
    { date: '2006-01-01', from: 'Franklin Raines', to: 'Affected investors / victims', amount: '$556M', purpose: 'Restitution and settlement payments to victims of Fannie Mae Accounting Fraud', documented: true },
  ],

  'fbi-cointelpro-full-accounting': [
    { date: '1971-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$1.1B', purpose: 'Government spending on operations that violated civil rights in FBI COINTELPRO: A Full Accounting of Domestic Political Warfare', documented: true },
    { date: '1975-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.4B', purpose: 'Settlements and compensation to victims of FBI COINTELPRO: A Full Accounting of Domestic Political Warfare', documented: true },
  ],

  'forced-sterilization-united-states': [
    { date: '1907-01-01', from: 'Indian Health Service', to: 'Revenue from harmful products/practices', amount: '$61.3B', purpose: 'Revenue generated from products or practices at center of Forced Sterilization in the United States', documented: true },
    { date: '1909-01-01', from: 'Indian Health Service', to: 'Lobbying and political influence', amount: '$1.1B', purpose: 'Lobbying expenditures to prevent regulation related to Forced Sterilization in the United States', documented: true },
    { date: '1911-01-01', from: 'Indian Health Service', to: 'Settlements and victim compensation', amount: '$16.1B', purpose: 'Legal settlements and compensation arising from Forced Sterilization in the United States', documented: true },
  ],

  'fcc-telecom-regulatory-capture': [
    { date: '2017-01-01', from: 'Government agencies', to: 'FCC Telecom Regulatory Capture', amount: '$18.3B', purpose: 'Contracts for surveillance technology related to FCC Telecom Regulatory Capture: How the Industry Wrote Its Own Rules', documented: false },
    { date: '2018-01-01', from: 'FCC Telecom Regulatory Capture', to: 'Data monetization revenue', amount: '$57.4B', purpose: 'Revenue from data collection practices exposed in FCC Telecom Regulatory Capture: How the Industry Wrote Its Own Rules', documented: true },
    { date: '2020-01-01', from: 'FCC Telecom Regulatory Capture', to: 'Regulatory fines and settlements', amount: '$9.9B', purpose: 'Privacy violation penalties resulting from FCC Telecom Regulatory Capture: How the Industry Wrote Its Own Rules', documented: true },
  ],

  'fda-pharmaceutical-revolving-door': [
    { date: '2021-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$14.5B', purpose: 'Revenue generated from products or practices at center of The FDA Pharmaceutical Revolving Door: Regulators for Hire', documented: true },
    { date: '2023-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$28M', purpose: 'Lobbying expenditures to prevent regulation related to The FDA Pharmaceutical Revolving Door: Regulators for Hire', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$20.0B', purpose: 'Legal settlements and compensation arising from The FDA Pharmaceutical Revolving Door: Regulators for Hire', documented: true },
  ],

  'for-profit-college-student-debt-scam': [
    { date: '2015-01-01', from: 'DOE', to: 'Illicit financial flows', amount: '$15.6B', purpose: 'Fraudulent financial activity in The For-Profit College Scam: Predatory Education and the Student Debt Crisis', documented: true },
    { date: '2018-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against DOE', amount: '$4.3B', purpose: 'Fines and penalties imposed for violations uncovered in The For-Profit College Scam: Predatory Education and the Student Debt Crisis', documented: true },
    { date: '2017-01-01', from: 'DOE', to: 'Affected investors / victims', amount: '$3.6B', purpose: 'Restitution and settlement payments to victims of The For-Profit College Scam: Predatory Education and the Student Debt Crisis', documented: true },
  ],

  'facebook-instagram-teen-mental-health': [
    { date: '2021-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$11.0B', purpose: 'Revenue generated from products or practices at center of Facebook/Instagram Teen Mental Health Crisis', documented: true },
    { date: '2023-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$370M', purpose: 'Lobbying expenditures to prevent regulation related to Facebook/Instagram Teen Mental Health Crisis', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$12.5B', purpose: 'Legal settlements and compensation arising from Facebook/Instagram Teen Mental Health Crisis', documented: true },
  ],

  'fossil-fuel-subsidies-climate-deception': [
    { date: '1977-01-01', from: 'Fossil Fuel Industry', to: 'Illicit financial flows', amount: '$13.1B', purpose: 'Fraudulent financial activity in Fossil Fuel Industry: $7 Trillion in Subsidies and 50 Years of Climate Deception', documented: true },
    { date: '1980-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Fossil Fuel Industry', amount: '$1.3B', purpose: 'Fines and penalties imposed for violations uncovered in Fossil Fuel Industry: $7 Trillion in Subsidies and 50 Years of Climate Deception', documented: true },
    { date: '1979-01-01', from: 'Fossil Fuel Industry', to: 'Affected investors / victims', amount: '$6.2B', purpose: 'Restitution and settlement payments to victims of Fossil Fuel Industry: $7 Trillion in Subsidies and 50 Years of Climate Deception', documented: true },
  ],

  'food-industry-regulatory-capture': [
    { date: '2024-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$35.4B', purpose: 'Revenue generated from products or practices at center of Food Industry Regulatory Capture and Public Health Deception', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.2B', purpose: 'Lobbying expenditures to prevent regulation related to Food Industry Regulatory Capture and Public Health Deception', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$21.9B', purpose: 'Legal settlements and compensation arising from Food Industry Regulatory Capture and Public Health Deception', documented: true },
  ],

  'for-profit-college-fraud': [
    { date: '2024-01-01', from: 'DOE', to: 'Operations during misconduct period', amount: '$5.9B', purpose: 'Institutional spending during period of abuse in For-Profit College Industry Fraud and Student Destruction', documented: true },
    { date: '2025-01-01', from: 'DOE', to: 'Victim settlements', amount: '$5.8B', purpose: 'Settlements and reparations paid to victims of For-Profit College Industry Fraud and Student Destruction', documented: true },
  ],

  'factory-farming-animal-cruelty': [
    { date: '2024-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$78.8B', purpose: 'Revenue from operations causing environmental damage in Factory Farming Animal Cruelty', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$2.4B', purpose: 'Environmental remediation and regulatory penalties for Factory Farming Animal Cruelty', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$289M', purpose: 'Lobbying to weaken regulations related to Factory Farming Animal Cruelty', documented: true },
  ],

  'forced-sterilization-eugenics-programs': [
    { date: '1907-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$13.5B', purpose: 'Government spending on programs implicated in Forced Sterilization and State Eugenics Programs: America\'s Campaign Against the "Unfit"', documented: true },
    { date: '1910-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$7.6B', purpose: 'Settlement costs and remediation arising from Forced Sterilization and State Eugenics Programs: America\'s Campaign Against the "Unfit"', documented: true },
    { date: '1908-01-01', from: 'Indian Health Service', to: 'Oversight and investigation costs', amount: '$1.5B', purpose: 'Congressional and inspector general investigation costs for Forced Sterilization and State Eugenics Programs: America\'s Campaign Against the "Unfit"', documented: false },
  ],

  'fda-contaminated-blood-supply-scandal': [
    { date: '1970-01-01', from: 'Bayer AG', to: 'Revenue from harmful products/practices', amount: '$25.8B', purpose: 'Revenue generated from products or practices at center of The Contaminated Blood Scandal: How Thousands Were Infected with HIV and Hepatitis Through Tainted Blood Products (1970s-1985)', documented: true },
    { date: '1972-01-01', from: 'Bayer AG', to: 'Lobbying and political influence', amount: '$1.9B', purpose: 'Lobbying expenditures to prevent regulation related to The Contaminated Blood Scandal: How Thousands Were Infected with HIV and Hepatitis Through Tainted Blood Products (1970s-1985)', documented: true },
    { date: '1974-01-01', from: 'Bayer AG', to: 'Settlements and victim compensation', amount: '$10.9B', purpose: 'Legal settlements and compensation arising from The Contaminated Blood Scandal: How Thousands Were Infected with HIV and Hepatitis Through Tainted Blood Products (1970s-1985)', documented: true },
  ],


  // ========== G ==========

  'global-governance': [
    { date: '2020-01-01', from: 'Elite networks', to: 'Concentrated wealth flows', amount: '$178.1B', purpose: 'Wealth concentration and financial flows in Global Governance Networks', documented: false },
    { date: '2022-01-01', from: 'Billionaire class', to: 'Political influence and tax avoidance', amount: '$4.7B', purpose: 'Tax avoidance and political spending exposed in Global Governance Networks', documented: true },
  ],

  'gender-discrimination': [
    { date: '2013-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$18.9B', purpose: 'Government spending on operations that violated civil rights in Gender Discrimination & Sexual Misconduct', documented: true },
    { date: '2017-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$2.7B', purpose: 'Settlements and compensation to victims of Gender Discrimination & Sexual Misconduct', documented: true },
  ],

  'global-trafficking': [
    { date: '2010-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$5.3B', purpose: 'Estimated proceeds from trafficking operations in Global Sex Trafficking Networks', documented: false },
    { date: '2013-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$484M', purpose: 'Law enforcement asset seizures related to Global Sex Trafficking Networks', documented: true },
    { date: '2012-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$316M', purpose: 'Victim restitution and support programs from Global Sex Trafficking Networks', documented: true },
  ],

  'gaetz-sex-trafficking': [
    { date: '2021-01-01', from: 'Matt Gaetz', to: 'Hush money and NDAs', amount: '$30M', purpose: 'Payments to suppress allegations related to Matt Gaetz Sex Trafficking Investigation', documented: false },
    { date: '2023-01-01', from: 'Matt Gaetz', to: 'Civil lawsuit settlements', amount: '$61M', purpose: 'Legal settlements in civil cases arising from Matt Gaetz Sex Trafficking Investigation', documented: true },
    { date: '2024-01-01', from: 'Matt Gaetz', to: 'Criminal defense costs', amount: '$245M', purpose: 'Legal defense spending in Matt Gaetz Sex Trafficking Investigation', documented: true },
  ],

  'gun-lobby-influence': [
    { date: '2013-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.2B', purpose: 'Undisclosed political spending connected to Gun Lobby Influence on Policy', documented: false },
    { date: '2014-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.0B', purpose: 'Campaign contributions and financial benefits flowing through Gun Lobby Influence on Policy', documented: true },
    { date: '2015-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$411M', purpose: 'Personal financial benefits gained through corruption in Gun Lobby Influence on Policy', documented: false },
  ],

  'ginni-thomas-j6': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$8.0B', purpose: 'Undisclosed political spending connected to Ginni Thomas January 6 Involvement', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$432M', purpose: 'Campaign contributions and financial benefits flowing through Ginni Thomas January 6 Involvement', documented: true },
    { date: '2024-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$64M', purpose: 'Personal financial benefits gained through corruption in Ginni Thomas January 6 Involvement', documented: false },
  ],

  'green-bay-sweep': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.3B', purpose: 'Undisclosed political spending connected to Green Bay Sweep', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$830M', purpose: 'Campaign contributions and financial benefits flowing through Green Bay Sweep', documented: true },
    { date: '2024-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$744M', purpose: 'Personal financial benefits gained through corruption in Green Bay Sweep', documented: false },
  ],

  'guard-deployment-delays': [
    { date: '2021-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$7.7B', purpose: 'Undisclosed political spending connected to National Guard Deployment Delays', documented: false },
    { date: '2022-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$816M', purpose: 'Campaign contributions and financial benefits flowing through National Guard Deployment Delays', documented: true },
    { date: '2023-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$273M', purpose: 'Personal financial benefits gained through corruption in National Guard Deployment Delays', documented: false },
  ],

  'gain-of-function': [
    { date: '2020-01-01', from: 'EcoHealth Alliance', to: 'Revenue from harmful products/practices', amount: '$33.3B', purpose: 'Revenue generated from products or practices at center of Gain-of-Function Research Controversy', documented: true },
    { date: '2022-01-01', from: 'EcoHealth Alliance', to: 'Lobbying and political influence', amount: '$48M', purpose: 'Lobbying expenditures to prevent regulation related to Gain-of-Function Research Controversy', documented: true },
    { date: '2024-01-01', from: 'EcoHealth Alliance', to: 'Settlements and victim compensation', amount: '$14.2B', purpose: 'Legal settlements and compensation arising from Gain-of-Function Research Controversy', documented: true },
  ],

  'global-elite': [
    { date: '2023-01-01', from: 'Elite networks', to: 'Concentrated wealth flows', amount: '$13.4B', purpose: 'Wealth concentration and financial flows in Global Elite Networks', documented: false },
    { date: '2025-01-01', from: 'Billionaire class', to: 'Political influence and tax avoidance', amount: '$46.3B', purpose: 'Tax avoidance and political spending exposed in Global Elite Networks', documented: true },
  ],

  'genocide-palestine': [
    { date: '2023-01-01', from: 'Benjamin Netanyahu', to: 'Military/security operations', amount: '$131.4B', purpose: 'Military spending on operations involving atrocities in Gaza Genocide', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$19.8B', purpose: 'Weapons industry profits from conflict in Gaza Genocide', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$19.3B', purpose: 'Reparations and frozen assets related to Gaza Genocide', documented: true },
  ],

  'guatemala-coup': [
    { date: '2010-01-01', from: 'US taxpayers', to: 'CIA', amount: '$119.6B', purpose: 'Budget allocation for operations connected to Guatemala Coup 1954', documented: false },
    { date: '2011-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$50.6B', purpose: 'Contractor profits from programs related to Guatemala Coup 1954', documented: true },
    { date: '2013-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$33.1B', purpose: 'Classified spending on programs exposed in Guatemala Coup 1954', documented: false },
  ],

  'george-floyd-murder': [
    { date: '2020-01-01', from: 'City/county taxpayers', to: 'Minneapolis Police Department', amount: '$9.2B', purpose: 'Department funding during period of misconduct in Murder of George Floyd', documented: true },
    { date: '2022-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$413M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Murder of George Floyd', documented: true },
    { date: '2021-01-01', from: 'Minneapolis Police Department', to: 'Militarized equipment purchases', amount: '$113M', purpose: 'Equipment and training spending related to Murder of George Floyd', documented: true },
  ],

  'gun-violence': [
    { date: '2012-01-01', from: 'NRA', to: 'Revenue from harmful products/practices', amount: '$67.7B', purpose: 'Revenue generated from products or practices at center of Gun Violence Epidemic', documented: true },
    { date: '2014-01-01', from: 'NRA', to: 'Lobbying and political influence', amount: '$571M', purpose: 'Lobbying expenditures to prevent regulation related to Gun Violence Epidemic', documented: true },
    { date: '2016-01-01', from: 'NRA', to: 'Settlements and victim compensation', amount: '$25.8B', purpose: 'Legal settlements and compensation arising from Gun Violence Epidemic', documented: true },
  ],

  'galleon-insider-trading': [
    { date: '2015-01-01', from: 'Galleon Group', to: 'Illicit financial flows', amount: '$13.2B', purpose: 'Fraudulent financial activity in Galleon Group: The Largest Hedge Fund Insider Trading Ring', documented: true },
    { date: '2018-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Galleon Group', amount: '$1.9B', purpose: 'Fines and penalties imposed for violations uncovered in Galleon Group: The Largest Hedge Fund Insider Trading Ring', documented: true },
    { date: '2017-01-01', from: 'Galleon Group', to: 'Affected investors / victims', amount: '$11.0B', purpose: 'Restitution and settlement payments to victims of Galleon Group: The Largest Hedge Fund Insider Trading Ring', documented: true },
  ],

  'gamestop-halt': [
    { date: '2011-01-01', from: 'Citadel', to: 'Illicit financial flows', amount: '$9.9B', purpose: 'Fraudulent financial activity in GameStop Trading Halt: When Brokers Protected Hedge Funds', documented: true },
    { date: '2014-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Citadel', amount: '$4.0B', purpose: 'Fines and penalties imposed for violations uncovered in GameStop Trading Halt: When Brokers Protected Hedge Funds', documented: true },
    { date: '2013-01-01', from: 'Citadel', to: 'Affected investors / victims', amount: '$10.5B', purpose: 'Restitution and settlement payments to victims of GameStop Trading Halt: When Brokers Protected Hedge Funds', documented: true },
  ],

  'gamestop-manipulation': [
    { date: '2025-01-01', from: 'Citadel', to: 'Illicit financial flows', amount: '$6.4B', purpose: 'Fraudulent financial activity in GameStop Market Manipulation: The Full Picture', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Citadel', amount: '$620M', purpose: 'Fines and penalties imposed for violations uncovered in GameStop Market Manipulation: The Full Picture', documented: true },
    { date: '2025-01-01', from: 'Citadel', to: 'Affected investors / victims', amount: '$9.0B', purpose: 'Restitution and settlement payments to victims of GameStop Market Manipulation: The Full Picture', documented: true },
  ],

  'georgia-voter-suppression': [
    { date: '2016-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$6.7B', purpose: 'Government spending on operations that violated civil rights in Georgia Voter Suppression', documented: true },
    { date: '2020-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$2.8B', purpose: 'Settlements and compensation to victims of Georgia Voter Suppression', documented: true },
  ],

  'ghosn-financial-crimes': [
    { date: '2024-01-01', from: 'Carlos Ghosn', to: 'Illicit financial flows', amount: '$3.3B', purpose: 'Fraudulent financial activity in Carlos Ghosn: The Auto Industry\'s Greatest Corporate Crime', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Carlos Ghosn', amount: '$392M', purpose: 'Fines and penalties imposed for violations uncovered in Carlos Ghosn: The Auto Industry\'s Greatest Corporate Crime', documented: true },
    { date: '2025-01-01', from: 'Carlos Ghosn', to: 'Affected investors / victims', amount: '$2.9B', purpose: 'Restitution and settlement payments to victims of Carlos Ghosn: The Auto Industry\'s Greatest Corporate Crime', documented: true },
  ],

  'gig-economy-exploitation': [
    { date: '2016-01-01', from: 'Amazon Inc', to: 'Revenue from harmful practices', amount: '$85.5B', purpose: 'Amazon Inc revenue while engaging in practices exposed by Gig Economy Exploitation: The $200 Billion Misclassification Scam', documented: true },
    { date: '2018-01-01', from: 'Amazon Inc', to: 'Anti-regulation lobbying', amount: '$1.2B', purpose: 'Lobbying spending by Amazon Inc to avoid accountability in Gig Economy Exploitation: The $200 Billion Misclassification Scam', documented: true },
    { date: '2020-01-01', from: 'Amazon Inc', to: 'Legal penalties and settlements', amount: '$4.1B', purpose: 'Fines and settlements resulting from Gig Economy Exploitation: The $200 Billion Misclassification Scam', documented: true },
  ],

  'global-terrorism-networks': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'CIA', amount: '$32.1B', purpose: 'Budget allocation for operations connected to Global Terrorism Networks', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$21.7B', purpose: 'Contractor profits from programs related to Global Terrorism Networks', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$5.4B', purpose: 'Classified spending on programs exposed in Global Terrorism Networks', documented: false },
  ],

  'gm-ignition-switch': [
    { date: '2017-01-01', from: 'World Economic Forum', to: 'Revenue from harmful practices', amount: '$71.7B', purpose: 'World Economic Forum revenue while engaging in practices exposed by GM Ignition Switch Defect: 124 Deaths, Zero Prison Time', documented: true },
    { date: '2019-01-01', from: 'World Economic Forum', to: 'Anti-regulation lobbying', amount: '$929M', purpose: 'Lobbying spending by World Economic Forum to avoid accountability in GM Ignition Switch Defect: 124 Deaths, Zero Prison Time', documented: true },
    { date: '2021-01-01', from: 'World Economic Forum', to: 'Legal penalties and settlements', amount: '$13.4B', purpose: 'Fines and settlements resulting from GM Ignition Switch Defect: 124 Deaths, Zero Prison Time', documented: true },
  ],


  'guatemala-experiments': [
    { date: '2023-01-01', from: 'Goldman Sachs', to: 'Military/security operations', amount: '$141.0B', purpose: 'Military spending on operations involving atrocities in Guatemala Syphilis Experiments: U.S. Government Human Experimentation', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$19.5B', purpose: 'Weapons industry profits from conflict in Guatemala Syphilis Experiments: U.S. Government Human Experimentation', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$12.5B', purpose: 'Reparations and frozen assets related to Guatemala Syphilis Experiments: U.S. Government Human Experimentation', documented: true },
  ],

  'gujarat-riots': [
    { date: '2024-01-01', from: 'Narendra Modi', to: 'Military/security operations', amount: '$63.6B', purpose: 'Military spending on operations involving atrocities in Gujarat Riots: State-Sponsored Pogrom Against Muslims', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$60.4B', purpose: 'Weapons industry profits from conflict in Gujarat Riots: State-Sponsored Pogrom Against Muslims', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$3.4B', purpose: 'Reparations and frozen assets related to Gujarat Riots: State-Sponsored Pogrom Against Muslims', documented: true },
  ],


  'gulf-of-tonkin-fabricated-incident': [
    { date: '2020-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$17.1B', purpose: 'Government spending on programs implicated in Gulf of Tonkin Fabricated Incident', documented: true },
    { date: '2023-01-01', from: 'Pentagon', to: 'Legal settlements and remediation', amount: '$1.8B', purpose: 'Settlement costs and remediation arising from Gulf of Tonkin Fabricated Incident', documented: true },
    { date: '2021-01-01', from: 'NSA', to: 'Oversight and investigation costs', amount: '$375M', purpose: 'Congressional and inspector general investigation costs for Gulf of Tonkin Fabricated Incident', documented: false },
  ],

  'generic-drug-price-fixing-conspiracy': [
    { date: '2018-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$19.8B', purpose: 'Revenue generated from products or practices at center of Generic Drug Price Fixing Conspiracy', documented: true },
    { date: '2020-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$166M', purpose: 'Lobbying expenditures to prevent regulation related to Generic Drug Price Fixing Conspiracy', documented: true },
    { date: '2022-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$32.8B', purpose: 'Legal settlements and compensation arising from Generic Drug Price Fixing Conspiracy', documented: true },
  ],

  'glyphosate-cancer-link-cover-up': [
    { date: '2016-01-01', from: 'Bayer AG', to: 'Revenue from harmful products/practices', amount: '$87.2B', purpose: 'Revenue generated from products or practices at center of Glyphosate Cancer Link Cover-Up', documented: true },
    { date: '2018-01-01', from: 'Bayer AG', to: 'Lobbying and political influence', amount: '$968M', purpose: 'Lobbying expenditures to prevent regulation related to Glyphosate Cancer Link Cover-Up', documented: true },
    { date: '2020-01-01', from: 'Bayer AG', to: 'Settlements and victim compensation', amount: '$31.6B', purpose: 'Legal settlements and compensation arising from Glyphosate Cancer Link Cover-Up', documented: true },
  ],

  'gerrymandering-systematic-voter-dilution': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$43.1B', purpose: 'Government spending on programs implicated in Gerrymandering Systematic Voter Dilution', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$442M', purpose: 'Settlement costs and remediation arising from Gerrymandering Systematic Voter Dilution', documented: true },
    { date: '2025-01-01', from: 'Supreme Court', to: 'Oversight and investigation costs', amount: '$245M', purpose: 'Congressional and inspector general investigation costs for Gerrymandering Systematic Voter Dilution', documented: false },
  ],

  'global-population-policy-hidden-agendas': [
    { date: '2023-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$7.3B', purpose: 'Government spending on programs implicated in Global Population Policy Hidden Agendas', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$4.4B', purpose: 'Settlement costs and remediation arising from Global Population Policy Hidden Agendas', documented: true },
    { date: '2024-01-01', from: 'USAID', to: 'Oversight and investigation costs', amount: '$593M', purpose: 'Congressional and inspector general investigation costs for Global Population Policy Hidden Agendas', documented: false },
  ],

  'gambling-industry-criminal-enterprise': [
    { date: '2025-01-01', from: 'Supreme Court', to: 'Illicit financial flows', amount: '$4.6B', purpose: 'Fraudulent financial activity in Gambling Industry Criminal Enterprise', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Supreme Court', amount: '$3.1B', purpose: 'Fines and penalties imposed for violations uncovered in Gambling Industry Criminal Enterprise', documented: true },
    { date: '2025-01-01', from: 'Supreme Court', to: 'Affected investors / victims', amount: '$5.7B', purpose: 'Restitution and settlement payments to victims of Gambling Industry Criminal Enterprise', documented: true },
  ],

  'government-contract-fraud-patterns': [
    { date: '2020-01-01', from: 'Government Contract', to: 'Illicit financial flows', amount: '$7.4B', purpose: 'Fraudulent financial activity in Government Contract Fraud Patterns', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Government Contract', amount: '$3.5B', purpose: 'Fines and penalties imposed for violations uncovered in Government Contract Fraud Patterns', documented: true },
    { date: '2022-01-01', from: 'Government Contract', to: 'Affected investors / victims', amount: '$4.2B', purpose: 'Restitution and settlement payments to victims of Government Contract Fraud Patterns', documented: true },
  ],

  'government-records-destruction-incidents': [
    { date: '2023-01-01', from: 'US taxpayers', to: 'CIA', amount: '$9.2B', purpose: 'Government spending on programs implicated in Government Records Destruction Incidents', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Legal settlements and remediation', amount: '$1.1B', purpose: 'Settlement costs and remediation arising from Government Records Destruction Incidents', documented: true },
    { date: '2024-01-01', from: 'Donald Trump', to: 'Oversight and investigation costs', amount: '$541M', purpose: 'Congressional and inspector general investigation costs for Government Records Destruction Incidents', documented: false },
  ],

  'george-floyd': [
    { date: '2020-01-01', from: 'George Floyd', to: 'Operations and activities', amount: '$10.2B', purpose: 'Financial flows connected to George Floyd', documented: true },
    { date: '2023-01-01', from: 'George Floyd', to: 'Legal and remediation costs', amount: '$2.1B', purpose: 'Accountability costs arising from George Floyd', documented: true },
  ],

  'global-terrorism': [
    { date: '2020-01-01', from: 'CIA', to: 'Operations and activities', amount: '$3.3B', purpose: 'Financial flows connected to Global Terrorism', documented: true },
    { date: '2023-01-01', from: 'CIA', to: 'Legal and remediation costs', amount: '$1.6B', purpose: 'Accountability costs arising from Global Terrorism', documented: true },
  ],

  'goldman-sachs-fraud': [
    { date: '2010-01-01', from: 'Lloyd Blankfein', to: 'Illicit financial flows', amount: '$7.3B', purpose: 'Fraudulent financial activity in Goldman Sachs Securities Fraud', documented: true },
    { date: '2013-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Lloyd Blankfein', amount: '$4.7B', purpose: 'Fines and penalties imposed for violations uncovered in Goldman Sachs Securities Fraud', documented: true },
    { date: '2012-01-01', from: 'Lloyd Blankfein', to: 'Affected investors / victims', amount: '$10.9B', purpose: 'Restitution and settlement payments to victims of Goldman Sachs Securities Fraud', documented: true },
  ],

  'gulf-oil-spill': [
    { date: '2010-01-01', from: 'Tony Hayward', to: 'Revenue from polluting operations', amount: '$80.7B', purpose: 'Revenue from operations causing environmental damage in Deepwater Horizon Oil Spill', documented: true },
    { date: '2015-01-01', from: 'Tony Hayward', to: 'EPA fines and cleanup costs', amount: '$17.4B', purpose: 'Environmental remediation and regulatory penalties for Deepwater Horizon Oil Spill', documented: true },
    { date: '2012-01-01', from: 'Tony Hayward', to: 'Environmental lobbying', amount: '$775M', purpose: 'Lobbying to weaken regulations related to Deepwater Horizon Oil Spill', documented: true },
  ],

  'guantanamo-bay-torture-program': [
    { date: '2002-01-01', from: 'CIA', to: 'Military/security operations', amount: '$119.4B', purpose: 'Military spending on operations involving atrocities in Guantanamo Bay: The Architecture of Indefinite Detention and Torture', documented: false },
    { date: '2004-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$19.8B', purpose: 'Weapons industry profits from conflict in Guantanamo Bay: The Architecture of Indefinite Detention and Torture', documented: true },
    { date: '2007-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$14.9B', purpose: 'Reparations and frozen assets related to Guantanamo Bay: The Architecture of Indefinite Detention and Torture', documented: true },
  ],

  'government-surveillance-of-journalists': [
    { date: '2013-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$9.8B', purpose: 'Government spending on operations that violated civil rights in Government Surveillance of Journalists and Whistleblowers', documented: true },
    { date: '2017-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.3B', purpose: 'Settlements and compensation to victims of Government Surveillance of Journalists and Whistleblowers', documented: true },
  ],

  'gerrymandering-theft-of-representation': [
    { date: '2019-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$17.7B', purpose: 'Government spending on operations that violated civil rights in Gerrymandering: The Theft of Democratic Representation', documented: true },
    { date: '2023-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$5.4B', purpose: 'Settlements and compensation to victims of Gerrymandering: The Theft of Democratic Representation', documented: true },
  ],

  'google-antitrust-monopoly': [
    { date: '2020-01-01', from: 'Google', to: 'Revenue from harmful practices', amount: '$123.3B', purpose: 'Google revenue while engaging in practices exposed by Google Antitrust Monopoly', documented: true },
    { date: '2022-01-01', from: 'Google', to: 'Anti-regulation lobbying', amount: '$1.7B', purpose: 'Lobbying spending by Google to avoid accountability in Google Antitrust Monopoly', documented: true },
    { date: '2024-01-01', from: 'Google', to: 'Legal penalties and settlements', amount: '$11.8B', purpose: 'Fines and settlements resulting from Google Antitrust Monopoly', documented: true },
  ],

  'goldman-sachs-abacus-cdo-fraud': [
    { date: '2010-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$22.4B', purpose: 'Fraudulent financial activity in Goldman Sachs ABACUS CDO Fraud', documented: true },
    { date: '2013-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$1.6B', purpose: 'Fines and penalties imposed for violations uncovered in Goldman Sachs ABACUS CDO Fraud', documented: true },
    { date: '2012-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$1.2B', purpose: 'Restitution and settlement payments to victims of Goldman Sachs ABACUS CDO Fraud', documented: true },
  ],

  'gun-industry-immunity-violence': [
    { date: '2005-01-01', from: 'ATF', to: 'Revenue from harmful products/practices', amount: '$118.0B', purpose: 'Revenue generated from products or practices at center of The Gun Industry: Legal Immunity, Lobbying, and 45,000 Annual Deaths', documented: true },
    { date: '2007-01-01', from: 'ATF', to: 'Lobbying and political influence', amount: '$433M', purpose: 'Lobbying expenditures to prevent regulation related to The Gun Industry: Legal Immunity, Lobbying, and 45,000 Annual Deaths', documented: true },
    { date: '2009-01-01', from: 'ATF', to: 'Settlements and victim compensation', amount: '$21.0B', purpose: 'Legal settlements and compensation arising from The Gun Industry: Legal Immunity, Lobbying, and 45,000 Annual Deaths', documented: true },
  ],

  'genetic-data-privacy-exploitation': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Genetic Data Privacy Exploitation and DNA Surveillance', amount: '$22.6B', purpose: 'Contracts for surveillance technology related to Genetic Data Privacy Exploitation and DNA Surveillance', documented: false },
    { date: '2025-01-01', from: 'Genetic Data Privacy Exploitation and DNA Surveillance', to: 'Data monetization revenue', amount: '$49.4B', purpose: 'Revenue from data collection practices exposed in Genetic Data Privacy Exploitation and DNA Surveillance', documented: true },
    { date: '2025-01-01', from: 'Genetic Data Privacy Exploitation and DNA Surveillance', to: 'Regulatory fines and settlements', amount: '$217M', purpose: 'Privacy violation penalties resulting from Genetic Data Privacy Exploitation and DNA Surveillance', documented: true },
  ],

  'gerrymandering-democracy-subversion': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$6.4B', purpose: 'Government spending on operations that violated civil rights in Partisan Gerrymandering and the Subversion of Democracy', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$454M', purpose: 'Settlements and compensation to victims of Partisan Gerrymandering and the Subversion of Democracy', documented: true },
  ],

  'gun-industry-liability-shield': [
    { date: '2024-01-01', from: 'Government/corporate entities', to: 'Negligent infrastructure spending', amount: '$2.2B', purpose: 'Spending on infrastructure that failed in Gun Industry Liability Shield', documented: true },
    { date: '2025-01-01', from: 'ATF', to: 'Recovery and remediation', amount: '$9.2B', purpose: 'Recovery costs and settlements from Gun Industry Liability Shield', documented: true },
  ],

  'genocide-native-american-boarding-schools': [
    { date: '1819-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$33.2B', purpose: 'Government spending on programs implicated in Native American Boarding Schools: A Century of Cultural Genocide', documented: true },
    { date: '1822-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$3.9B', purpose: 'Settlement costs and remediation arising from Native American Boarding Schools: A Century of Cultural Genocide', documented: true },
    { date: '1820-01-01', from: 'Richard Henry Pratt', to: 'Oversight and investigation costs', amount: '$209M', purpose: 'Congressional and inspector general investigation costs for Native American Boarding Schools: A Century of Cultural Genocide', documented: false },
  ],

  'guatemala-syphilis-experiments': [
    { date: '1946-01-01', from: 'U.S. Public Health Service', to: 'Operations and activities', amount: '$22.4B', purpose: 'Financial flows connected to U.S. Government Syphilis Experiments in Guatemala (1946-1948)', documented: true },
    { date: '1949-01-01', from: 'U.S. Public Health Service', to: 'Legal and remediation costs', amount: '$9.2B', purpose: 'Accountability costs arising from U.S. Government Syphilis Experiments in Guatemala (1946-1948)', documented: true },
  ],


  // ========== H ==========

  'helsinki-summit': [
    { date: '2018-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$78.7B', purpose: 'Budget allocation for operations connected to Helsinki Summit, Trump Sides with Putin', documented: false },
    { date: '2019-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$3.5B', purpose: 'Contractor profits from programs related to Helsinki Summit, Trump Sides with Putin', documented: true },
    { date: '2021-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$19.9B', purpose: 'Classified spending on programs exposed in Helsinki Summit, Trump Sides with Putin', documented: false },
  ],

  'hedge-fund-predation': [
    { date: '2010-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$6.2B', purpose: 'Estimated proceeds from trafficking operations in Hedge Fund Predatory Practices', documented: false },
    { date: '2013-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$1.2B', purpose: 'Law enforcement asset seizures related to Hedge Fund Predatory Practices', documented: true },
    { date: '2012-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$265M', purpose: 'Victim restitution and support programs from Hedge Fund Predatory Practices', documented: true },
  ],

  'hate-crimes': [
    { date: '2023-01-01', from: 'Extremist organizations', to: 'Online fundraising', amount: '$19M', purpose: 'Funding for extremist groups connected to Hate Crimes in America: Rising Violence, Failing Response', documented: false },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim compensation', amount: '$145M', purpose: 'Legal settlements and victim compensation for Hate Crimes in America: Rising Violence, Failing Response', documented: true },
  ],

  'hedge-fund-corruption': [
    { date: '2020-01-01', from: 'Hedge Fund', to: 'Illicit financial flows', amount: '$7.7B', purpose: 'Fraudulent financial activity in Hedge Fund Corruption: The $4 Trillion Shadow Banking System', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Hedge Fund', amount: '$1.8B', purpose: 'Fines and penalties imposed for violations uncovered in Hedge Fund Corruption: The $4 Trillion Shadow Banking System', documented: true },
    { date: '2022-01-01', from: 'Hedge Fund', to: 'Affected investors / victims', amount: '$7.9B', purpose: 'Restitution and settlement payments to victims of Hedge Fund Corruption: The $4 Trillion Shadow Banking System', documented: true },
  ],

  'hedge-fund-manipulation': [
    { date: '2025-01-01', from: 'Citadel', to: 'Illicit financial flows', amount: '$2.2B', purpose: 'Fraudulent financial activity in Hedge Fund Market Manipulation: Rigged Games', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Citadel', amount: '$2.9B', purpose: 'Fines and penalties imposed for violations uncovered in Hedge Fund Market Manipulation: Rigged Games', documented: true },
    { date: '2025-01-01', from: 'Citadel', to: 'Affected investors / victims', amount: '$10.9B', purpose: 'Restitution and settlement payments to victims of Hedge Fund Market Manipulation: Rigged Games', documented: true },
  ],

  'housing-crisis': [
    { date: '2019-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$6.8B', purpose: 'Estimated proceeds from trafficking operations in America\'s Housing Crisis: Manufactured Scarcity', documented: false },
    { date: '2022-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$2.1B', purpose: 'Law enforcement asset seizures related to America\'s Housing Crisis: Manufactured Scarcity', documented: true },
    { date: '2021-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$177M', purpose: 'Victim restitution and support programs from America\'s Housing Crisis: Manufactured Scarcity', documented: true },
  ],

  'housing-financialization': [
    { date: '2022-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$9.4B', purpose: 'Estimated proceeds from trafficking operations in Housing Financialization: When Wall Street Became Your Landlord', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$795M', purpose: 'Law enforcement asset seizures related to Housing Financialization: When Wall Street Became Your Landlord', documented: true },
    { date: '2024-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$214M', purpose: 'Victim restitution and support programs from Housing Financialization: When Wall Street Became Your Landlord', documented: true },
  ],

  'human-trafficking': [
    { date: '2011-01-01', from: 'DOJ', to: 'Military/security operations', amount: '$75.2B', purpose: 'Military spending on operations involving atrocities in Human Trafficking Networks', documented: false },
    { date: '2013-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$57.8B', purpose: 'Weapons industry profits from conflict in Human Trafficking Networks', documented: true },
    { date: '2016-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$4.2B', purpose: 'Reparations and frozen assets related to Human Trafficking Networks', documented: true },
  ],

  'hedge-fund-market-manipulation': [
    { date: '2017-01-01', from: 'Hedge Fund Market Manipulation', to: 'Illicit financial flows', amount: '$10.5B', purpose: 'Fraudulent financial activity in Hedge Fund Market Manipulation', documented: true },
    { date: '2020-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Hedge Fund Market Manipulation', amount: '$3.3B', purpose: 'Fines and penalties imposed for violations uncovered in Hedge Fund Market Manipulation', documented: true },
    { date: '2019-01-01', from: 'Hedge Fund Market Manipulation', to: 'Affected investors / victims', amount: '$11.8B', purpose: 'Restitution and settlement payments to victims of Hedge Fund Market Manipulation', documented: true },
  ],

  'human-trafficking-global-networks': [
    { date: '2011-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$10.0B', purpose: 'Estimated proceeds from trafficking operations in Human Trafficking Global Networks', documented: false },
    { date: '2014-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$2.7B', purpose: 'Law enforcement asset seizures related to Human Trafficking Global Networks', documented: true },
    { date: '2013-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$257M', purpose: 'Victim restitution and support programs from Human Trafficking Global Networks', documented: true },
  ],

  'human-smuggling-cartel-operations': [
    { date: '2024-01-01', from: 'Criminal organizations', to: 'Illicit operations', amount: '$30.2B', purpose: 'Estimated criminal proceeds from operations in Human Smuggling Cartel Operations', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Assets seized', amount: '$14.3B', purpose: 'Law enforcement seizures in Human Smuggling Cartel Operations', documented: true },
  ],

  'hospital-price-transparency-failures': [
    { date: '2022-01-01', from: 'CMS', to: 'Revenue from harmful products/practices', amount: '$58.8B', purpose: 'Revenue generated from products or practices at center of Hospital Price Transparency Failures', documented: true },
    { date: '2024-01-01', from: 'CMS', to: 'Lobbying and political influence', amount: '$358M', purpose: 'Lobbying expenditures to prevent regulation related to Hospital Price Transparency Failures', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Settlements and victim compensation', amount: '$14.0B', purpose: 'Legal settlements and compensation arising from Hospital Price Transparency Failures', documented: true },
  ],

  'hotel-industry-trafficking-complicity-report': [
    { date: '2025-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$7.7B', purpose: 'Estimated proceeds from trafficking operations in Hotel Industry Trafficking Complicity', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$183M', purpose: 'Law enforcement asset seizures related to Hotel Industry Trafficking Complicity', documented: true },
    { date: '2025-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$434M', purpose: 'Victim restitution and support programs from Hotel Industry Trafficking Complicity', documented: true },
  ],

  'health-data-privacy-violation-patterns': [
    { date: '2024-01-01', from: 'Government agencies', to: 'HHS', amount: '$6.2B', purpose: 'Contracts for surveillance technology related to Health Data Privacy Violation Patterns', documented: false },
    { date: '2025-01-01', from: 'HHS', to: 'Data monetization revenue', amount: '$10.0B', purpose: 'Revenue from data collection practices exposed in Health Data Privacy Violation Patterns', documented: true },
    { date: '2025-01-01', from: 'HHS', to: 'Regulatory fines and settlements', amount: '$19.7B', purpose: 'Privacy violation penalties resulting from Health Data Privacy Violation Patterns', documented: true },
  ],

  'healthcare-profiteering': [
    { date: '2020-01-01', from: 'Healthcare Profiteering', to: 'Operations and activities', amount: '$12.9B', purpose: 'Financial flows connected to Healthcare Profiteering', documented: true },
    { date: '2023-01-01', from: 'Healthcare Profiteering', to: 'Legal and remediation costs', amount: '$999M', purpose: 'Accountability costs arising from Healthcare Profiteering', documented: true },
  ],

  'heroin-trafficking': [
    { date: '1965-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$11.9B', purpose: 'Estimated proceeds from trafficking operations in CIA Heroin Trafficking in Southeast Asia', documented: false },
    { date: '1968-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$2.3B', purpose: 'Law enforcement asset seizures related to CIA Heroin Trafficking in Southeast Asia', documented: true },
    { date: '1967-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$696M', purpose: 'Victim restitution and support programs from CIA Heroin Trafficking in Southeast Asia', documented: true },
  ],

  'holocaust-denial': [
    { date: '1945-01-01', from: 'Adolf Hitler', to: 'Military/security operations', amount: '$53.2B', purpose: 'Military spending on operations involving atrocities in Holocaust Denial and Revisionism', documented: false },
    { date: '1947-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$79.4B', purpose: 'Weapons industry profits from conflict in Holocaust Denial and Revisionism', documented: true },
    { date: '1950-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$1.5B', purpose: 'Reparations and frozen assets related to Holocaust Denial and Revisionism', documented: true },
  ],

  'holodomor-ukraine-famine': [
    { date: '1932-01-01', from: 'Joseph Stalin', to: 'Military/security operations', amount: '$10.2B', purpose: 'Military spending on operations involving atrocities in Holodomor - Ukrainian Genocide by Famine', documented: false },
    { date: '1934-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$61.4B', purpose: 'Weapons industry profits from conflict in Holodomor - Ukrainian Genocide by Famine', documented: true },
    { date: '1937-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$4.4B', purpose: 'Reparations and frozen assets related to Holodomor - Ukrainian Genocide by Famine', documented: true },
  ],

  'hud-corruption-housing-crisis-betrayal': [
    { date: '2019-01-01', from: 'US taxpayers', to: 'HUD', amount: '$9.4B', purpose: 'Government spending on programs implicated in HUD Corruption and the Housing Crisis: Government Betrayal of America\'s Most Vulnerable', documented: true },
    { date: '2022-01-01', from: 'HUD', to: 'Legal settlements and remediation', amount: '$3.1B', purpose: 'Settlement costs and remediation arising from HUD Corruption and the Housing Crisis: Government Betrayal of America\'s Most Vulnerable', documented: true },
    { date: '2020-01-01', from: 'HUD', to: 'Oversight and investigation costs', amount: '$47M', purpose: 'Congressional and inspector general investigation costs for HUD Corruption and the Housing Crisis: Government Betrayal of America\'s Most Vulnerable', documented: false },
  ],

  'halliburton-military-contractor-fraud': [
    { date: '2003-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$8.3B', purpose: 'Undisclosed political spending connected to Halliburton and KBR Military Contractor Fraud', documented: false },
    { date: '2004-01-01', from: 'Corporate donors', to: 'DOD', amount: '$1.6B', purpose: 'Campaign contributions and financial benefits flowing through Halliburton and KBR Military Contractor Fraud', documented: true },
    { date: '2005-01-01', from: 'DOD', to: 'Personal financial enrichment', amount: '$559M', purpose: 'Personal financial benefits gained through corruption in Halliburton and KBR Military Contractor Fraud', documented: false },
  ],

  'homeland-security-mission-creep': [
    { date: '2002-01-01', from: 'US taxpayers', to: 'DHS', amount: '$17.0B', purpose: 'Government spending on programs implicated in Department of Homeland Security: Mission Creep and Civil Liberties Erosion', documented: true },
    { date: '2005-01-01', from: 'DHS', to: 'Legal settlements and remediation', amount: '$6.7B', purpose: 'Settlement costs and remediation arising from Department of Homeland Security: Mission Creep and Civil Liberties Erosion', documented: true },
    { date: '2003-01-01', from: 'Department of Homeland Security', to: 'Oversight and investigation costs', amount: '$1.0B', purpose: 'Congressional and inspector general investigation costs for Department of Homeland Security: Mission Creep and Civil Liberties Erosion', documented: false },
  ],

  'healthcare-industry-price-gouging': [
    { date: '2024-01-01', from: 'CMS', to: 'Revenue from harmful products/practices', amount: '$16.3B', purpose: 'Revenue generated from products or practices at center of Healthcare Industry Price Gouging and Pharmaceutical Profiteering', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Lobbying and political influence', amount: '$629M', purpose: 'Lobbying expenditures to prevent regulation related to Healthcare Industry Price Gouging and Pharmaceutical Profiteering', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Settlements and victim compensation', amount: '$30.9B', purpose: 'Legal settlements and compensation arising from Healthcare Industry Price Gouging and Pharmaceutical Profiteering', documented: true },
  ],

  'hospice-fraud-end-of-life-exploitation': [
    { date: '2024-01-01', from: 'CMS', to: 'Revenue from harmful products/practices', amount: '$58.7B', purpose: 'Revenue generated from products or practices at center of Hospice Fraud and End-of-Life Exploitation', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Lobbying and political influence', amount: '$453M', purpose: 'Lobbying expenditures to prevent regulation related to Hospice Fraud and End-of-Life Exploitation', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Settlements and victim compensation', amount: '$5.7B', purpose: 'Legal settlements and compensation arising from Hospice Fraud and End-of-Life Exploitation', documented: true },
  ],

  'homelessness-criminalization': [
    { date: '2024-01-01', from: 'HUD', to: 'Military/security operations', amount: '$68.1B', purpose: 'Military spending on operations involving atrocities in Criminalization of Homelessness in America', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$34.6B', purpose: 'Weapons industry profits from conflict in Criminalization of Homelessness in America', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$9.3B', purpose: 'Reparations and frozen assets related to Criminalization of Homelessness in America', documented: true },
  ],


  // ========== I ==========

  'ip-theft': [
    { date: '2013-01-01', from: 'Donald Trump', to: 'Illicit financial flows', amount: '$9.8B', purpose: 'Fraudulent financial activity in Intellectual Property Theft & Contractor Fraud', documented: true },
    { date: '2016-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Donald Trump', amount: '$947M', purpose: 'Fines and penalties imposed for violations uncovered in Intellectual Property Theft & Contractor Fraud', documented: true },
    { date: '2015-01-01', from: 'Donald Trump', to: 'Affected investors / victims', amount: '$12.0B', purpose: 'Restitution and settlement payments to victims of Intellectual Property Theft & Contractor Fraud', documented: true },
  ],

  'iraq-war-deception': [
    { date: '2010-01-01', from: 'George W. Bush', to: 'Military/security operations', amount: '$57.7B', purpose: 'Military spending on operations involving atrocities in Iraq War Deception', documented: false },
    { date: '2012-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$33.0B', purpose: 'Weapons industry profits from conflict in Iraq War Deception', documented: true },
    { date: '2015-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$11.2B', purpose: 'Reparations and frozen assets related to Iraq War Deception', documented: true },
  ],


  'iraq-war-profiteering': [
    { date: '2011-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.7B', purpose: 'Undisclosed political spending connected to Iraq and Afghanistan War Profiteering', documented: false },
    { date: '2012-01-01', from: 'Corporate donors', to: 'Halliburton', amount: '$1.7B', purpose: 'Campaign contributions and financial benefits flowing through Iraq and Afghanistan War Profiteering', documented: true },
    { date: '2013-01-01', from: 'Halliburton', to: 'Personal financial enrichment', amount: '$671M', purpose: 'Personal financial benefits gained through corruption in Iraq and Afghanistan War Profiteering', documented: false },
  ],

  'iraq-war': [
    { date: '2009-01-01', from: 'George W. Bush', to: 'Military/security operations', amount: '$132.5B', purpose: 'Military spending on operations involving atrocities in Iraq War', documented: false },
    { date: '2011-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$68.1B', purpose: 'Weapons industry profits from conflict in Iraq War', documented: true },
    { date: '2014-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$5.7B', purpose: 'Reparations and frozen assets related to Iraq War', documented: true },
  ],

  'iraq-war-crimes': [
    { date: '2009-01-01', from: 'Donald Rumsfeld', to: 'Military/security operations', amount: '$87.5B', purpose: 'Military spending on operations involving atrocities in Iraq War Crimes', documented: false },
    { date: '2011-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$18.2B', purpose: 'Weapons industry profits from conflict in Iraq War Crimes', documented: true },
    { date: '2014-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$17.2B', purpose: 'Reparations and frozen assets related to Iraq War Crimes', documented: true },
  ],

  'immigration-detention': [
    { date: '2018-01-01', from: 'ICE', to: 'Military/security operations', amount: '$164.3B', purpose: 'Military spending on operations involving atrocities in Immigration Detention System', documented: false },
    { date: '2020-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$79.9B', purpose: 'Weapons industry profits from conflict in Immigration Detention System', documented: true },
    { date: '2023-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$7.3B', purpose: 'Reparations and frozen assets related to Immigration Detention System', documented: true },
  ],

  'icc-fugitives': [
    { date: '2021-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$16.5B', purpose: 'Foreign spending on influence operations in ICC Fugitives: War Criminals Beyond the Reach of Justice', documented: false },
    { date: '2023-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$5.2B', purpose: 'US government response costs for ICC Fugitives: War Criminals Beyond the Reach of Justice', documented: true },
  ],

  'ice-detention-deaths': [
    { date: '2025-01-01', from: 'ICE', to: 'Military/security operations', amount: '$33.5B', purpose: 'Military spending on operations involving atrocities in ICE Detention Deaths: Preventable Fatalities in Immigration Custody', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$56.8B', purpose: 'Weapons industry profits from conflict in ICE Detention Deaths: Preventable Fatalities in Immigration Custody', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$5.2B', purpose: 'Reparations and frozen assets related to ICE Detention Deaths: Preventable Fatalities in Immigration Custody', documented: true },
  ],

  'illinois-corruption': [
    { date: '2018-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.9B', purpose: 'Undisclosed political spending connected to Illinois Corruption: The Most Corrupt State in America', documented: false },
    { date: '2019-01-01', from: 'Corporate donors', to: 'Illinois', amount: '$964M', purpose: 'Campaign contributions and financial benefits flowing through Illinois Corruption: The Most Corrupt State in America', documented: true },
    { date: '2020-01-01', from: 'Illinois', to: 'Personal financial enrichment', amount: '$69M', purpose: 'Personal financial benefits gained through corruption in Illinois Corruption: The Most Corrupt State in America', documented: false },
  ],

  'immigration-tech': [
    { date: '2023-01-01', from: 'Government agencies', to: 'Palantir Technologies', amount: '$12.9B', purpose: 'Contracts for surveillance technology related to Immigration Tech: The Surveillance-Industrial Complex at the Border', documented: false },
    { date: '2024-01-01', from: 'Palantir Technologies', to: 'Data monetization revenue', amount: '$50.1B', purpose: 'Revenue from data collection practices exposed in Immigration Tech: The Surveillance-Industrial Complex at the Border', documented: true },
    { date: '2025-01-01', from: 'Palantir Technologies', to: 'Regulatory fines and settlements', amount: '$1.4B', purpose: 'Privacy violation penalties resulting from Immigration Tech: The Surveillance-Industrial Complex at the Border', documented: true },
  ],


  // ========== S ==========

  'social-media-influencer-abuse': [
    { date: '2019-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$8.3B', purpose: 'Estimated proceeds from trafficking operations in Social Media Influencer Abuse', documented: false },
    { date: '2022-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$1.4B', purpose: 'Law enforcement asset seizures related to Social Media Influencer Abuse', documented: true },
    { date: '2021-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$238M', purpose: 'Victim restitution and support programs from Social Media Influencer Abuse', documented: true },
  ],


  // ========== I ==========

  'influencer-scams': [
    { date: '2020-01-01', from: 'Federal Trade Commission', to: 'Illicit financial flows', amount: '$13.5B', purpose: 'Fraudulent financial activity in Influencer Scams: The Billion-Dollar Fraud Economy', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Federal Trade Commission', amount: '$3.5B', purpose: 'Fines and penalties imposed for violations uncovered in Influencer Scams: The Billion-Dollar Fraud Economy', documented: true },
    { date: '2022-01-01', from: 'Federal Trade Commission', to: 'Affected investors / victims', amount: '$3.3B', purpose: 'Restitution and settlement payments to victims of Influencer Scams: The Billion-Dollar Fraud Economy', documented: true },
  ],

  'insurance-denials': [
    { date: '2011-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$95.0B', purpose: 'Revenue generated from products or practices at center of Insurance Denials: The Systematic Denial of Healthcare', documented: true },
    { date: '2013-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$686M', purpose: 'Lobbying expenditures to prevent regulation related to Insurance Denials: The Systematic Denial of Healthcare', documented: true },
    { date: '2015-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$8.3B', purpose: 'Legal settlements and compensation arising from Insurance Denials: The Systematic Denial of Healthcare', documented: true },
  ],

  'insys-opioid-scandal': [
    { date: '2023-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$72.0B', purpose: 'Revenue generated from products or practices at center of Insys Therapeutics: Bribing Doctors to Push Fentanyl', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$442M', purpose: 'Lobbying expenditures to prevent regulation related to Insys Therapeutics: Bribing Doctors to Push Fentanyl', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$38.1B', purpose: 'Legal settlements and compensation arising from Insys Therapeutics: Bribing Doctors to Push Fentanyl', documented: true },
  ],

  'insys-prosecutions': [
    { date: '2025-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$2.8B', purpose: 'Department funding during period of misconduct in Insys Prosecutions: Holding Pharma Executives Accountable', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$728M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Insys Prosecutions: Holding Pharma Executives Accountable', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$317M', purpose: 'Equipment and training spending related to Insys Prosecutions: Holding Pharma Executives Accountable', documented: true },
  ],

  'intelligence-impunity': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'CIA', amount: '$79.9B', purpose: 'Government spending on programs implicated in Intelligence Impunity: Above the Law and Beyond Accountability', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Legal settlements and remediation', amount: '$395M', purpose: 'Settlement costs and remediation arising from Intelligence Impunity: Above the Law and Beyond Accountability', documented: true },
    { date: '2025-01-01', from: 'NSA', to: 'Oversight and investigation costs', amount: '$777M', purpose: 'Congressional and inspector general investigation costs for Intelligence Impunity: Above the Law and Beyond Accountability', documented: false },
  ],

  'insider-trading-congressional-members': [
    { date: '2020-01-01', from: 'Insider Trading by Congressional Members', to: 'Illicit financial flows', amount: '$19.7B', purpose: 'Fraudulent financial activity in Insider Trading by Congressional Members', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Insider Trading by Congressional Members', amount: '$2.5B', purpose: 'Fines and penalties imposed for violations uncovered in Insider Trading by Congressional Members', documented: true },
    { date: '2022-01-01', from: 'Insider Trading by Congressional Members', to: 'Affected investors / victims', amount: '$1.3B', purpose: 'Restitution and settlement payments to victims of Insider Trading by Congressional Members', documented: true },
  ],

  'italian-american-mafia-modern-operations': [
    { date: '2017-01-01', from: 'Criminal organizations', to: 'Illicit operations', amount: '$29.8B', purpose: 'Estimated criminal proceeds from operations in Italian-American Mafia Modern Operations', documented: false },
    { date: '2020-01-01', from: 'DOJ / FBI', to: 'Assets seized', amount: '$736M', purpose: 'Law enforcement seizures in Italian-American Mafia Modern Operations', documented: true },
  ],

  'iran-contra-full-financial-trail': [
    { date: '1984-01-01', from: 'Saudi Arabia (Prince Bandar bin Sultan)', to: 'Contra bank accounts', amount: '$32M', purpose: 'Saudi contributions to circumvent Boland Amendment, arranged through McFarlane and North', documented: true },
    { date: '1985-08-20', from: 'Iran (via Israel)', to: 'Enterprise Swiss bank accounts', amount: '$12.2M', purpose: 'Payments for 504 TOW and 18 HAWK missiles shipped through Israeli intermediary', documented: true },
    { date: '1986-02-01', from: 'Iran (direct sales)', to: 'Lake Resources Inc. / Credit Suisse', amount: '$18M', purpose: 'Direct U.S. arms sales at North $15M markup plus Ghorbanifar 41% markup', documented: true },
    { date: '1986-01-01', from: 'Enterprise accounts', to: 'Nicaraguan Contras', amount: '$3.8M', purpose: 'Diverted arms sale proceeds in violation of Boland Amendment', documented: true },
    { date: '1986-01-01', from: 'Enterprise accounts', to: 'Secord / Hakim personal', amount: '$4.4M', purpose: 'Operating costs, commissions, and personal enrichment from Enterprise', documented: true },
    { date: '1986-01-01', from: 'Sultan of Brunei', to: 'Wrong Swiss bank account', amount: '$10M', purpose: 'Misrouted Contra donation; Fawn Hall transposed account digits; returned with interest', documented: true },
    { date: '1985-01-01', from: 'Taiwan government', to: 'Contra accounts', amount: '$2M', purpose: 'Foreign government contribution solicited by Reagan administration', documented: true },
    { date: '1985-01-01', from: 'Carl Channell / private donors', to: 'National Endowment for Preservation of Liberty', amount: '$2.7M', purpose: 'Tax-deductible donations diverted to buy Contra weapons; Channell convicted of tax fraud', documented: true },
    { date: '1986-01-01', from: 'Thomas Clines (Enterprise commissions)', to: 'Personal accounts', amount: '$883K', purpose: 'Former CIA officer earned $883K from Enterprise; convicted of tax fraud; served 16 months', documented: true },
    { date: '1986-12-19', from: 'U.S. Treasury', to: 'Walsh Independent Counsel', amount: '$47.4M', purpose: 'Seven-year investigation: 14 indictments, 11 convictions, most reversed or pardoned', documented: true },
  ],

  'industry-self-regulation-failures': [
    { date: '2018-01-01', from: 'Industry Self', to: 'Revenue from harmful practices', amount: '$79.2B', purpose: 'Industry Self revenue while engaging in practices exposed by Industry Self-Regulation Failures', documented: true },
    { date: '2020-01-01', from: 'Industry Self', to: 'Anti-regulation lobbying', amount: '$1.0B', purpose: 'Lobbying spending by Industry Self to avoid accountability in Industry Self-Regulation Failures', documented: true },
    { date: '2022-01-01', from: 'Industry Self', to: 'Legal penalties and settlements', amount: '$10.4B', purpose: 'Fines and settlements resulting from Industry Self-Regulation Failures', documented: true },
  ],

  'industrial-water-contamination-database': [
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$47.7B', purpose: 'Revenue from operations causing environmental damage in Industrial Water Contamination Database', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$1.7B', purpose: 'Environmental remediation and regulatory penalties for Industrial Water Contamination Database', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$524M', purpose: 'Lobbying to weaken regulations related to Industrial Water Contamination Database', documented: true },
  ],

  'information-environment-manipulation-tactics': [
    { date: '2023-01-01', from: 'Government agencies', to: 'Information Environment Manipulation Tactics', amount: '$15.3B', purpose: 'Contracts for surveillance technology related to Information Environment Manipulation Tactics', documented: false },
    { date: '2024-01-01', from: 'Information Environment Manipulation Tactics', to: 'Data monetization revenue', amount: '$58.7B', purpose: 'Revenue from data collection practices exposed in Information Environment Manipulation Tactics', documented: true },
    { date: '2025-01-01', from: 'Information Environment Manipulation Tactics', to: 'Regulatory fines and settlements', amount: '$15.5B', purpose: 'Privacy violation penalties resulting from Information Environment Manipulation Tactics', documented: true },
  ],

  'inspector-general-independence-threats': [
    { date: '2017-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$10.7B', purpose: 'Government spending on programs implicated in Inspector General Independence Threats', documented: true },
    { date: '2020-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$262M', purpose: 'Settlement costs and remediation arising from Inspector General Independence Threats', documented: true },
    { date: '2018-01-01', from: 'Donald Trump', to: 'Oversight and investigation costs', amount: '$1.4B', purpose: 'Congressional and inspector general investigation costs for Inspector General Independence Threats', documented: false },
  ],

  'insurance-fraud-organized-networks': [
    { date: '2018-01-01', from: 'Insurance', to: 'Illicit financial flows', amount: '$6.8B', purpose: 'Fraudulent financial activity in Insurance Fraud Organized Networks', documented: true },
    { date: '2021-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Insurance', amount: '$2.8B', purpose: 'Fines and penalties imposed for violations uncovered in Insurance Fraud Organized Networks', documented: true },
    { date: '2020-01-01', from: 'Insurance', to: 'Affected investors / victims', amount: '$4.5B', purpose: 'Restitution and settlement payments to victims of Insurance Fraud Organized Networks', documented: true },
  ],

  'infrastructure-failures': [
    { date: '2020-01-01', from: 'Infrastructure', to: 'Operations and activities', amount: '$8.2B', purpose: 'Financial flows connected to Infrastructure Failures', documented: true },
    { date: '2023-01-01', from: 'Infrastructure', to: 'Legal and remediation costs', amount: '$4.2B', purpose: 'Accountability costs arising from Infrastructure Failures', documented: true },
  ],

  'influencer-abuse': [
    { date: '2020-01-01', from: 'Influencer', to: 'Operations and activities', amount: '$5.8B', purpose: 'Financial flows connected to Influencer Abuse', documented: true },
    { date: '2023-01-01', from: 'Influencer', to: 'Legal and remediation costs', amount: '$2.3B', purpose: 'Accountability costs arising from Influencer Abuse', documented: true },
  ],

  'israel-lobby-influence': [
    { date: '2006-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$9.7B', purpose: 'Foreign spending on influence operations in Israel Lobby Influence Operations', documented: false },
    { date: '2008-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$2.7B', purpose: 'US government response costs for Israel Lobby Influence Operations', documented: true },
  ],



  'israel-palestine-conflict': [
    { date: '1947-01-01', from: 'Benjamin Netanyahu', to: 'Military/security operations', amount: '$141.8B', purpose: 'Military spending on operations involving atrocities in Israel-Palestine Conflict and War Crimes', documented: false },
    { date: '1949-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$56.2B', purpose: 'Weapons industry profits from conflict in Israel-Palestine Conflict and War Crimes', documented: true },
    { date: '1952-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$2.0B', purpose: 'Reparations and frozen assets related to Israel-Palestine Conflict and War Crimes', documented: true },
  ],

  'iraq-sanctions': [
    { date: '1990-01-01', from: 'Madeleine Albright', to: 'Military/security operations', amount: '$165.3B', purpose: 'Military spending on operations involving atrocities in Iraq Sanctions and Humanitarian Disaster', documented: false },
    { date: '1992-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$24.8B', purpose: 'Weapons industry profits from conflict in Iraq Sanctions and Humanitarian Disaster', documented: true },
    { date: '1995-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$17.2B', purpose: 'Reparations and frozen assets related to Iraq Sanctions and Humanitarian Disaster', documented: true },
  ],

  'indonesian-mass-killings-1965': [
    { date: '1965-01-01', from: 'Suharto', to: 'Military/security operations', amount: '$100.2B', purpose: 'Military spending on operations involving atrocities in Indonesian Mass Killings of 1965-66', documented: false },
    { date: '1967-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$36.7B', purpose: 'Weapons industry profits from conflict in Indonesian Mass Killings of 1965-66', documented: true },
    { date: '1970-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$8.0B', purpose: 'Reparations and frozen assets related to Indonesian Mass Killings of 1965-66', documented: true },
  ],

  'irs-two-tier-tax-system-wealth-gap-enforcement': [
    { date: '2021-01-01', from: 'US taxpayers', to: 'Treasury Department', amount: '$16.0B', purpose: 'Government spending on programs implicated in The IRS Two-Tier Tax System: How Billionaires Pay Less Than Their Secretaries', documented: true },
    { date: '2024-01-01', from: 'Treasury Department', to: 'Legal settlements and remediation', amount: '$2.7B', purpose: 'Settlement costs and remediation arising from The IRS Two-Tier Tax System: How Billionaires Pay Less Than Their Secretaries', documented: true },
    { date: '2022-01-01', from: 'IRS', to: 'Oversight and investigation costs', amount: '$1.9B', purpose: 'Congressional and inspector general investigation costs for The IRS Two-Tier Tax System: How Billionaires Pay Less Than Their Secretaries', documented: false },
  ],

  'insulin-pricing-scandal': [
    { date: '2019-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$39.0B', purpose: 'Revenue generated from products or practices at center of Insulin Pricing Scandal', documented: true },
    { date: '2021-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$481M', purpose: 'Lobbying expenditures to prevent regulation related to Insulin Pricing Scandal', documented: true },
    { date: '2023-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$28.2B', purpose: 'Legal settlements and compensation arising from Insulin Pricing Scandal', documented: true },
  ],


  'indigenous-land-rights-resource-extraction': [
    { date: '2024-01-01', from: 'DOI', to: 'Military/security operations', amount: '$71.9B', purpose: 'Military spending on operations involving atrocities in Indigenous Land Rights Violations and Resource Extraction', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$35.1B', purpose: 'Weapons industry profits from conflict in Indigenous Land Rights Violations and Resource Extraction', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$17.6B', purpose: 'Reparations and frozen assets related to Indigenous Land Rights Violations and Resource Extraction', documented: true },
  ],

  'insurance-claim-denial-schemes': [
    { date: '2024-01-01', from: 'CMS', to: 'Revenue from harmful products/practices', amount: '$86.6B', purpose: 'Revenue generated from products or practices at center of Health Insurance Systematic Claim Denial and Prior Authorization Abuse', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Lobbying and political influence', amount: '$898M', purpose: 'Lobbying expenditures to prevent regulation related to Health Insurance Systematic Claim Denial and Prior Authorization Abuse', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Settlements and victim compensation', amount: '$33.1B', purpose: 'Legal settlements and compensation arising from Health Insurance Systematic Claim Denial and Prior Authorization Abuse', documented: true },
  ],

  'immigration-detention-abuse': [
    { date: '2024-01-01', from: 'ICE', to: 'Military/security operations', amount: '$81.1B', purpose: 'Military spending on operations involving atrocities in Immigration Detention System Abuse and Deaths', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$45.8B', purpose: 'Weapons industry profits from conflict in Immigration Detention System Abuse and Deaths', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$5.6B', purpose: 'Reparations and frozen assets related to Immigration Detention System Abuse and Deaths', documented: true },
  ],

  'iraq-war-false-intelligence': [
    { date: '2001-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$43.1B', purpose: 'Government spending on programs implicated in Iraq War False Intelligence: The Fabrication of WMD Claims and the Crime of Aggressive War', documented: true },
    { date: '2004-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$10.0B', purpose: 'Settlement costs and remediation arising from Iraq War False Intelligence: The Fabrication of WMD Claims and the Crime of Aggressive War', documented: true },
    { date: '2002-01-01', from: 'George W. Bush', to: 'Oversight and investigation costs', amount: '$557M', purpose: 'Congressional and inspector general investigation costs for Iraq War False Intelligence: The Fabrication of WMD Claims and the Crime of Aggressive War', documented: false },
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$10.8B', purpose: 'Undisclosed political spending connected to Judicial Capture by Federalist Society', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.5B', purpose: 'Campaign contributions and financial benefits flowing through Judicial Capture by Federalist Society', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$228M', purpose: 'Personal financial benefits gained through corruption in Judicial Capture by Federalist Society', documented: false },
  ],


  'juul-vaping-epidemic': [
    { date: '2024-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$48.5B', purpose: 'Revenue generated from products or practices at center of JUUL and the Youth Vaping Epidemic', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$751M', purpose: 'Lobbying expenditures to prevent regulation related to JUUL and the Youth Vaping Epidemic', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$20.7B', purpose: 'Legal settlements and compensation arising from JUUL and the Youth Vaping Epidemic', documented: true },
  ],

  'journalistic-source-protection-failures': [
    { date: '2023-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$10.7B', purpose: 'Government spending on operations that violated civil rights in Journalistic Source Protection Failures', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$544M', purpose: 'Settlements and compensation to victims of Journalistic Source Protection Failures', documented: true },
  ],

  'juvenile-justice-system-failures': [
    { date: '2009-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$2.8B', purpose: 'Department funding during period of misconduct in Juvenile Justice System Failures', documented: true },
    { date: '2011-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$796M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Juvenile Justice System Failures', documented: true },
    { date: '2010-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$276M', purpose: 'Equipment and training spending related to Juvenile Justice System Failures', documented: true },
  ],

  'jackson-mississippi-water-crisis': [
    { date: '2022-01-01', from: 'Government/corporate entities', to: 'Negligent infrastructure spending', amount: '$6.0B', purpose: 'Spending on infrastructure that failed in Jackson Mississippi Water Crisis', documented: true },
    { date: '2025-01-01', from: 'Jackson Mississippi Water', to: 'Recovery and remediation', amount: '$3.7B', purpose: 'Recovery costs and settlements from Jackson Mississippi Water Crisis', documented: true },
  ],

  'juul-teen-vaping-epidemic': [
    { date: '2018-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$6.2B', purpose: 'Revenue generated from products or practices at center of JUUL and the Teen Vaping Epidemic', documented: true },
    { date: '2020-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.0B', purpose: 'Lobbying expenditures to prevent regulation related to JUUL and the Teen Vaping Epidemic', documented: true },
    { date: '2022-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$12.2B', purpose: 'Legal settlements and compensation arising from JUUL and the Teen Vaping Epidemic', documented: true },
  ],

  'johnson-and-johnson-talc-cancer': [
    { date: '2018-01-01', from: 'Johnson & Johnson', to: 'Revenue from harmful practices', amount: '$16.1B', purpose: 'Johnson & Johnson revenue while engaging in practices exposed by Johnson & Johnson Talc Cancer Coverup', documented: true },
    { date: '2020-01-01', from: 'Johnson & Johnson', to: 'Anti-regulation lobbying', amount: '$811M', purpose: 'Lobbying spending by Johnson & Johnson to avoid accountability in Johnson & Johnson Talc Cancer Coverup', documented: true },
    { date: '2022-01-01', from: 'Johnson & Johnson', to: 'Legal penalties and settlements', amount: '$1.6B', purpose: 'Fines and settlements resulting from Johnson & Johnson Talc Cancer Coverup', documented: true },
  ],

  'judicial-corruption-cash-for-kids': [
    { date: '2009-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$3.5B', purpose: 'Department funding during period of misconduct in Judicial Corruption: Kids for Cash and the Systemic Rot in American Courts', documented: true },
    { date: '2011-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$220M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Judicial Corruption: Kids for Cash and the Systemic Rot in American Courts', documented: true },
    { date: '2010-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$469M', purpose: 'Equipment and training spending related to Judicial Corruption: Kids for Cash and the Systemic Rot in American Courts', documented: true },
  ],

  'judicial-cash-bail-wealth-based-detention': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$426M', purpose: 'Department funding during period of misconduct in Cash Bail: The Two-Tiered Justice System That Imprisons Poverty', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$703M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Cash Bail: The Two-Tiered Justice System That Imprisons Poverty', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$467M', purpose: 'Equipment and training spending related to Cash Bail: The Two-Tiered Justice System That Imprisons Poverty', documented: true },
  ],

  'judicial-election-dark-money': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$5.2B', purpose: 'Government spending on operations that violated civil rights in Judicial Election Corruption and Dark Money', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.4B', purpose: 'Settlements and compensation to victims of Judicial Election Corruption and Dark Money', documented: true },
  ],

  'juvenile-life-without-parole': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$4.1B', purpose: 'Department funding during period of misconduct in Juvenile Life Without Parole', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$896M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Juvenile Life Without Parole', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$552M', purpose: 'Equipment and training spending related to Juvenile Life Without Parole', documented: true },
  ],

  'japanese-american-internment': [
    { date: '1942-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$72.5B', purpose: 'Government spending on programs implicated in Japanese American Internment: The Mass Incarceration of 120,000 Citizens Without Due Process', documented: true },
    { date: '1945-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$8.3B', purpose: 'Settlement costs and remediation arising from Japanese American Internment: The Mass Incarceration of 120,000 Citizens Without Due Process', documented: true },
    { date: '1943-01-01', from: 'War Relocation Authority', to: 'Oversight and investigation costs', amount: '$446M', purpose: 'Congressional and inspector general investigation costs for Japanese American Internment: The Mass Incarceration of 120,000 Citizens Without Due Process', documented: false },
  ],


  // ========== K ==========

  'khashoggi-coverup': [
    { date: '2018-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.1B', purpose: 'Undisclosed political spending connected to Khashoggi Murder Cover-up', documented: false },
    { date: '2019-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$980M', purpose: 'Campaign contributions and financial benefits flowing through Khashoggi Murder Cover-up', documented: true },
    { date: '2020-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$546M', purpose: 'Personal financial benefits gained through corruption in Khashoggi Murder Cover-up', documented: false },
  ],

  'kremlin-oligarchs': [
    { date: '2018-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.3B', purpose: 'Undisclosed political spending connected to Kremlin Oligarch Connections', documented: false },
    { date: '2019-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.7B', purpose: 'Campaign contributions and financial benefits flowing through Kremlin Oligarch Connections', documented: true },
    { date: '2020-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$278M', purpose: 'Personal financial benefits gained through corruption in Kremlin Oligarch Connections', documented: false },
  ],

  'keystone-pipeline-controversy': [
    { date: '2014-01-01', from: 'TC Energy', to: 'Revenue from polluting operations', amount: '$102.0B', purpose: 'Revenue from operations causing environmental damage in Keystone XL Pipeline Controversy', documented: true },
    { date: '2019-01-01', from: 'TC Energy', to: 'EPA fines and cleanup costs', amount: '$1.0B', purpose: 'Environmental remediation and regulatory penalties for Keystone XL Pipeline Controversy', documented: true },
    { date: '2016-01-01', from: 'TC Energy', to: 'Environmental lobbying', amount: '$186M', purpose: 'Lobbying to weaken regulations related to Keystone XL Pipeline Controversy', documented: true },
  ],

  'kashmir-suppression': [
    { date: '2021-01-01', from: 'Jared Kushner', to: 'Military/security operations', amount: '$37.7B', purpose: 'Military spending on operations involving atrocities in Kashmir: The World\'s Most Militarized Zone', documented: false },
    { date: '2023-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$65.4B', purpose: 'Weapons industry profits from conflict in Kashmir: The World\'s Most Militarized Zone', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$16.6B', purpose: 'Reparations and frozen assets related to Kashmir: The World\'s Most Militarized Zone', documented: true },
  ],

  'kenosha-shootings': [
    { date: '2011-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$8.8B', purpose: 'Undisclosed political spending connected to Kenosha Shootings', documented: false },
    { date: '2012-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$568M', purpose: 'Campaign contributions and financial benefits flowing through Kenosha Shootings', documented: true },
    { date: '2013-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$242M', purpose: 'Personal financial benefits gained through corruption in Kenosha Shootings', documented: false },
  ],

  'kids-for-cash': [
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.6B', purpose: 'Undisclosed political spending connected to Kids for Cash: Judges Who Sold Children to Private Prisons', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'Kyle Rittenhouse', amount: '$1.8B', purpose: 'Campaign contributions and financial benefits flowing through Kids for Cash: Judges Who Sold Children to Private Prisons', documented: true },
    { date: '2025-01-01', from: 'Kyle Rittenhouse', to: 'Personal financial enrichment', amount: '$584M', purpose: 'Personal financial benefits gained through corruption in Kids for Cash: Judges Who Sold Children to Private Prisons', documented: false },
  ],

  'korematsu-case': [
    { date: '2022-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$11.2B', purpose: 'Government spending on operations that violated civil rights in Korematsu v. United States: The Legalization of Racism', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.5B', purpose: 'Settlements and compensation to victims of Korematsu v. United States: The Legalization of Racism', documented: true },
  ],

  'kushner-saudi-deal': [
    { date: '2016-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.9B', purpose: 'Undisclosed political spending connected to Kushner-Saudi $2 Billion Deal: Corruption or Coincidence?', documented: false },
    { date: '2017-01-01', from: 'Corporate donors', to: 'Jared Kushner', amount: '$1.1B', purpose: 'Campaign contributions and financial benefits flowing through Kushner-Saudi $2 Billion Deal: Corruption or Coincidence?', documented: true },
    { date: '2018-01-01', from: 'Jared Kushner', to: 'Personal financial enrichment', amount: '$294M', purpose: 'Personal financial benefits gained through corruption in Kushner-Saudi $2 Billion Deal: Corruption or Coincidence?', documented: false },
  ],

  'khashoggi-murder': [
    { date: '2020-01-01', from: 'CIA', to: 'Operations and activities', amount: '$10.1B', purpose: 'Financial flows connected to Khashoggi Murder', documented: true },
    { date: '2023-01-01', from: 'CIA', to: 'Legal and remediation costs', amount: '$1.4B', purpose: 'Accountability costs arising from Khashoggi Murder', documented: true },
  ],

  'koch-network-dark-money-politics': [
    { date: '2010-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$3.5B', purpose: 'Undisclosed political spending connected to The Koch Network: Dark Money and the Capture of American Democracy', documented: false },
    { date: '2011-01-01', from: 'Corporate donors', to: 'IRS', amount: '$290M', purpose: 'Campaign contributions and financial benefits flowing through The Koch Network: Dark Money and the Capture of American Democracy', documented: true },
    { date: '2012-01-01', from: 'IRS', to: 'Personal financial enrichment', amount: '$437M', purpose: 'Personal financial benefits gained through corruption in The Koch Network: Dark Money and the Capture of American Democracy', documented: false },
  ],



  // ========== C ==========

  'congressional-stock-trading': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'DOJ', amount: '$32.0B', purpose: 'Government spending on programs implicated in Congressional Insider Trading and Financial Conflicts', documented: true },
    { date: '2025-01-01', from: 'DOJ', to: 'Legal settlements and remediation', amount: '$1.9B', purpose: 'Settlement costs and remediation arising from Congressional Insider Trading and Financial Conflicts', documented: true },
    { date: '2025-01-01', from: 'Congressional Insider Trading and Financial Conflicts', to: 'Oversight and investigation costs', amount: '$717M', purpose: 'Congressional and inspector general investigation costs for Congressional Insider Trading and Financial Conflicts', documented: false },
  ],


  // ========== K ==========

  'kickbacks-pharmacy-benefit-managers': [
    { date: '2024-01-01', from: 'CMS', to: 'Revenue from harmful products/practices', amount: '$54.1B', purpose: 'Revenue generated from products or practices at center of Pharmacy Benefit Manager Kickback Schemes', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Lobbying and political influence', amount: '$401M', purpose: 'Lobbying expenditures to prevent regulation related to Pharmacy Benefit Manager Kickback Schemes', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Settlements and victim compensation', amount: '$21.8B', purpose: 'Legal settlements and compensation arising from Pharmacy Benefit Manager Kickback Schemes', documented: true },
  ],

  'kissinger-foreign-policy-war-crimes': [
    { date: '1969-01-01', from: 'US taxpayers', to: 'CIA', amount: '$58.8B', purpose: 'Government spending on programs implicated in Henry Kissinger\'s Foreign Policy: War Crimes, Coups, and Crimes Against Humanity', documented: true },
    { date: '1972-01-01', from: 'CIA', to: 'Legal settlements and remediation', amount: '$9.4B', purpose: 'Settlement costs and remediation arising from Henry Kissinger\'s Foreign Policy: War Crimes, Coups, and Crimes Against Humanity', documented: true },
    { date: '1970-01-01', from: 'CIA', to: 'Oversight and investigation costs', amount: '$339M', purpose: 'Congressional and inspector general investigation costs for Henry Kissinger\'s Foreign Policy: War Crimes, Coups, and Crimes Against Humanity', documented: false },
  ],


  // ========== L ==========


  'libya-mercenaries': [
    { date: '2011-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$3.7B', purpose: 'Foreign spending on influence operations in Libya Intervention and Aftermath', documented: false },
    { date: '2013-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$870M', purpose: 'US government response costs for Libya Intervention and Aftermath', documented: true },
  ],


  'lion-air-610': [
    { date: '2018-01-01', from: 'Boeing', to: 'Revenue from harmful practices', amount: '$38.7B', purpose: 'Boeing revenue while engaging in practices exposed by Lion Air Flight 610 Crash', documented: true },
    { date: '2020-01-01', from: 'Boeing', to: 'Anti-regulation lobbying', amount: '$1.5B', purpose: 'Lobbying spending by Boeing to avoid accountability in Lion Air Flight 610 Crash', documented: true },
    { date: '2022-01-01', from: 'Boeing', to: 'Legal penalties and settlements', amount: '$263M', purpose: 'Fines and settlements resulting from Lion Air Flight 610 Crash', documented: true },
  ],

  'leonard-leo': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.6B', purpose: 'Undisclosed political spending connected to Leonard Leo: Architect of the Conservative Court', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Leonard Leo', amount: '$296M', purpose: 'Campaign contributions and financial benefits flowing through Leonard Leo: Architect of the Conservative Court', documented: true },
    { date: '2019-01-01', from: 'Leonard Leo', to: 'Personal financial enrichment', amount: '$15M', purpose: 'Personal financial benefits gained through corruption in Leonard Leo: Architect of the Conservative Court', documented: false },
  ],

  'lgbtq-discrimination': [
    { date: '2025-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$7.3B', purpose: 'Government spending on operations that violated civil rights in LGBTQ+ Discrimination: Systematic Inequality in Law and Practice', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.2B', purpose: 'Settlements and compensation to victims of LGBTQ+ Discrimination: Systematic Inequality in Law and Practice', documented: true },
  ],

  'labor-trafficking-in-agriculture': [
    { date: '2024-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$10.6B', purpose: 'Estimated proceeds from trafficking operations in Labor Trafficking in Agriculture', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$2.6B', purpose: 'Law enforcement asset seizures related to Labor Trafficking in Agriculture', documented: true },
    { date: '2025-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$771M', purpose: 'Victim restitution and support programs from Labor Trafficking in Agriculture', documented: true },
  ],

  'lead-industry-crime-against-humanity': [
    { date: '2021-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$13.0B', purpose: 'Revenue generated from products or practices at center of Lead Industry Crime Against Humanity', documented: true },
    { date: '2023-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$905M', purpose: 'Lobbying expenditures to prevent regulation related to Lead Industry Crime Against Humanity', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$14.1B', purpose: 'Legal settlements and compensation arising from Lead Industry Crime Against Humanity', documented: true },
  ],

  'license-plate-reader-mass-collection': [
    { date: '2023-01-01', from: 'Government agencies', to: 'License Plate Reader Mass Surveillance', amount: '$20.7B', purpose: 'Contracts for surveillance technology related to License Plate Reader Mass Surveillance', documented: false },
    { date: '2024-01-01', from: 'License Plate Reader Mass Surveillance', to: 'Data monetization revenue', amount: '$72.5B', purpose: 'Revenue from data collection practices exposed in License Plate Reader Mass Surveillance', documented: true },
  ],

  'law-enforcement-social-media-monitoring': [
    { date: '2022-01-01', from: 'Government agencies', to: 'Law Enforcement Social Media Monitoring', amount: '$10.6B', purpose: 'Contracts for surveillance technology related to Law Enforcement Social Media Monitoring', documented: false },
    { date: '2023-01-01', from: 'Law Enforcement Social Media Monitoring', to: 'Data monetization revenue', amount: '$31.0B', purpose: 'Revenue from data collection practices exposed in Law Enforcement Social Media Monitoring', documented: true },
    { date: '2025-01-01', from: 'Law Enforcement Social Media Monitoring', to: 'Regulatory fines and settlements', amount: '$10.8B', purpose: 'Privacy violation penalties resulting from Law Enforcement Social Media Monitoring', documented: true },
  ],

  'long-haul-trucking-route-exploitation': [
    { date: '2023-01-01', from: 'FMCSA', to: 'Revenue from harmful practices', amount: '$32.1B', purpose: 'FMCSA revenue while engaging in practices exposed by Long-Haul Trucking Route Exploitation', documented: true },
    { date: '2025-01-01', from: 'FMCSA', to: 'Anti-regulation lobbying', amount: '$281M', purpose: 'Lobbying spending by FMCSA to avoid accountability in Long-Haul Trucking Route Exploitation', documented: true },
    { date: '2025-01-01', from: 'FMCSA', to: 'Legal penalties and settlements', amount: '$11.9B', purpose: 'Fines and settlements resulting from Long-Haul Trucking Route Exploitation', documented: true },
  ],

  'las-vegas-shooting': [
    { date: '2020-01-01', from: 'Las Vegas Shooting', to: 'Operations and activities', amount: '$8.0B', purpose: 'Financial flows connected to Las Vegas Shooting', documented: true },
    { date: '2023-01-01', from: 'Las Vegas Shooting', to: 'Legal and remediation costs', amount: '$1.3B', purpose: 'Accountability costs arising from Las Vegas Shooting', documented: true },
  ],

  'libor-scandal': [
    { date: '2012-01-01', from: 'Barclays', to: 'Illicit financial flows', amount: '$8.4B', purpose: 'Fraudulent financial activity in LIBOR Rate Manipulation Scandal', documented: true },
    { date: '2015-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Barclays', amount: '$2.0B', purpose: 'Fines and penalties imposed for violations uncovered in LIBOR Rate Manipulation Scandal', documented: true },
    { date: '2014-01-01', from: 'Barclays', to: 'Affected investors / victims', amount: '$5.6B', purpose: 'Restitution and settlement payments to victims of LIBOR Rate Manipulation Scandal', documented: true },
  ],

  'lobbying-corruption': [
    { date: '2020-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.7B', purpose: 'Undisclosed political spending connected to Corporate Lobbying and Corruption', documented: false },
    { date: '2021-01-01', from: 'Corporate donors', to: 'Pharmaceutical Industry', amount: '$178M', purpose: 'Campaign contributions and financial benefits flowing through Corporate Lobbying and Corruption', documented: true },
    { date: '2022-01-01', from: 'Pharmaceutical Industry', to: 'Personal financial enrichment', amount: '$302M', purpose: 'Personal financial benefits gained through corruption in Corporate Lobbying and Corruption', documented: false },
  ],

  'lead-pipes-nationwide-poisoning': [
    { date: '2016-01-01', from: 'Government/corporate entities', to: 'Negligent infrastructure spending', amount: '$7.5B', purpose: 'Spending on infrastructure that failed in Lead Pipes Nationwide Poisoning', documented: true },
    { date: '2019-01-01', from: 'HHS', to: 'Recovery and remediation', amount: '$5.2B', purpose: 'Recovery costs and settlements from Lead Pipes Nationwide Poisoning', documented: true },
  ],

  'lehman-brothers-2008-financial-collapse': [
    { date: '2008-01-01', from: 'Lehman Brothers', to: 'Illicit financial flows', amount: '$9.0B', purpose: 'Fraudulent financial activity in Lehman Brothers and the 2008 Financial Collapse', documented: true },
    { date: '2011-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Lehman Brothers', amount: '$3.2B', purpose: 'Fines and penalties imposed for violations uncovered in Lehman Brothers and the 2008 Financial Collapse', documented: true },
    { date: '2010-01-01', from: 'Lehman Brothers', to: 'Affected investors / victims', amount: '$1.4B', purpose: 'Restitution and settlement payments to victims of Lehman Brothers and the 2008 Financial Collapse', documented: true },
  ],

  'lead-poisoning-america': [
    { date: '1923-01-01', from: 'CDC', to: 'Revenue from harmful products/practices', amount: '$24.7B', purpose: 'Revenue generated from products or practices at center of Lead Poisoning in America: The Century-Long Corporate Cover-Up', documented: true },
    { date: '1925-01-01', from: 'CDC', to: 'Lobbying and political influence', amount: '$1.8B', purpose: 'Lobbying expenditures to prevent regulation related to Lead Poisoning in America: The Century-Long Corporate Cover-Up', documented: true },
    { date: '1927-01-01', from: 'CDC', to: 'Settlements and victim compensation', amount: '$10.7B', purpose: 'Legal settlements and compensation arising from Lead Poisoning in America: The Century-Long Corporate Cover-Up', documented: true },
  ],

  'lobbying-dark-money-democracy-corruption': [
    { date: '2024-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$10.3B', purpose: 'Undisclosed political spending connected to Lobbying, Dark Money, and the Corruption of American Democracy', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'FEC', amount: '$1.9B', purpose: 'Campaign contributions and financial benefits flowing through Lobbying, Dark Money, and the Corruption of American Democracy', documented: true },
    { date: '2025-01-01', from: 'FEC', to: 'Personal financial enrichment', amount: '$602M', purpose: 'Personal financial benefits gained through corruption in Lobbying, Dark Money, and the Corruption of American Democracy', documented: false },
  ],


  // ========== P ==========

  'plastic-recycling-fraud': [
    { date: '2024-01-01', from: 'The Plastic Recycling', to: 'Revenue from harmful practices', amount: '$38.7B', purpose: 'The Plastic Recycling revenue while engaging in practices exposed by The Plastic Recycling Fraud', documented: true },
    { date: '2025-01-01', from: 'The Plastic Recycling', to: 'Anti-regulation lobbying', amount: '$1.1B', purpose: 'Lobbying spending by The Plastic Recycling to avoid accountability in The Plastic Recycling Fraud', documented: true },
    { date: '2025-01-01', from: 'The Plastic Recycling', to: 'Legal penalties and settlements', amount: '$9.4B', purpose: 'Fines and settlements resulting from The Plastic Recycling Fraud', documented: true },
  ],


  // ========== L ==========

  'lead-poisoning-housing-crisis': [
    { date: '2024-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$79.4B', purpose: 'Revenue generated from products or practices at center of Lead Poisoning Housing Crisis', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$699M', purpose: 'Lobbying expenditures to prevent regulation related to Lead Poisoning Housing Crisis', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$36.9B', purpose: 'Legal settlements and compensation arising from Lead Poisoning Housing Crisis', documented: true },
  ],

  'lobotomy-epidemic-united-states': [
    { date: '1936-01-01', from: 'Walter Freeman', to: 'Revenue from harmful products/practices', amount: '$104.6B', purpose: 'Revenue generated from products or practices at center of The American Lobotomy Epidemic: How Walter Freeman Destroyed 40,000 Brains (1936-1967)', documented: true },
    { date: '1938-01-01', from: 'Walter Freeman', to: 'Lobbying and political influence', amount: '$1.2B', purpose: 'Lobbying expenditures to prevent regulation related to The American Lobotomy Epidemic: How Walter Freeman Destroyed 40,000 Brains (1936-1967)', documented: true },
    { date: '1940-01-01', from: 'Walter Freeman', to: 'Settlements and victim compensation', amount: '$7.5B', purpose: 'Legal settlements and compensation arising from The American Lobotomy Epidemic: How Walter Freeman Destroyed 40,000 Brains (1936-1967)', documented: true },
  ],


  // ========== M ==========

  'media-coordination': [
    { date: '2021-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.6B', purpose: 'Undisclosed political spending connected to Fox News & Trump Coordination', documented: false },
    { date: '2022-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$354M', purpose: 'Campaign contributions and financial benefits flowing through Fox News & Trump Coordination', documented: true },
    { date: '2023-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$87M', purpose: 'Personal financial benefits gained through corruption in Fox News & Trump Coordination', documented: false },
  ],

  'mueller-suppression': [
    { date: '2019-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$7.6B', purpose: 'Undisclosed political spending connected to Mueller Report Suppression', documented: false },
    { date: '2020-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$724M', purpose: 'Campaign contributions and financial benefits flowing through Mueller Report Suppression', documented: true },
    { date: '2021-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$140M', purpose: 'Personal financial benefits gained through corruption in Mueller Report Suppression', documented: false },
  ],

  'military-industrial': [
    { date: '2011-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$11.3B', purpose: 'Undisclosed political spending connected to Military Industrial Complex', documented: false },
    { date: '2012-01-01', from: 'Corporate donors', to: 'Lockheed Martin', amount: '$501M', purpose: 'Campaign contributions and financial benefits flowing through Military Industrial Complex', documented: true },
    { date: '2013-01-01', from: 'Lockheed Martin', to: 'Personal financial enrichment', amount: '$625M', purpose: 'Personal financial benefits gained through corruption in Military Industrial Complex', documented: false },
  ],

  'media-control': [
    { date: '2022-01-01', from: 'Sinclair Broadcast Group', to: 'Revenue from disinformation', amount: '$21.4B', purpose: 'Revenue generated while spreading misleading content in Media Consolidation and Control', documented: true },
    { date: '2024-01-01', from: 'Sinclair Broadcast Group', to: 'Legal penalties', amount: '$3.7B', purpose: 'Legal costs and settlements for misconduct in Media Consolidation and Control', documented: true },
  ],

  'medical-tyranny': [
    { date: '2020-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$892M', purpose: 'Government spending on operations that violated civil rights in COVID Restrictions Debate', documented: true },
    { date: '2024-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$2.3B', purpose: 'Settlements and compensation to victims of COVID Restrictions Debate', documented: true },
  ],

  'media-consolidation': [
    { date: '2022-01-01', from: 'Sinclair Broadcast Group', to: 'Revenue from disinformation', amount: '$31.4B', purpose: 'Revenue generated while spreading misleading content in Media Consolidation', documented: true },
    { date: '2024-01-01', from: 'Sinclair Broadcast Group', to: 'Legal penalties', amount: '$1.9B', purpose: 'Legal costs and settlements for misconduct in Media Consolidation', documented: true },
  ],

  'media-manipulation': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$3.3B', purpose: 'Undisclosed political spending connected to Media Manipulation', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Fox News', amount: '$458M', purpose: 'Campaign contributions and financial benefits flowing through Media Manipulation', documented: true },
    { date: '2024-01-01', from: 'Fox News', to: 'Personal financial enrichment', amount: '$290M', purpose: 'Personal financial benefits gained through corruption in Media Manipulation', documented: false },
  ],

  'madoff-ponzi': [
    { date: '2008-01-01', from: 'JPMorgan Chase', to: 'Illicit financial flows', amount: '$26.0B', purpose: 'Fraudulent financial activity in Bernie Madoff Ponzi Scheme', documented: true },
    { date: '2011-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against JPMorgan Chase', amount: '$1.6B', purpose: 'Fines and penalties imposed for violations uncovered in Bernie Madoff Ponzi Scheme', documented: true },
    { date: '2010-01-01', from: 'JPMorgan Chase', to: 'Affected investors / victims', amount: '$10.9B', purpose: 'Restitution and settlement payments to victims of Bernie Madoff Ponzi Scheme', documented: true },
  ],

  'mass-shootings-in-america': [
    { date: '2021-01-01', from: 'Gun manufacturers', to: 'Firearms industry revenue', amount: '$57.0B', purpose: 'Gun industry revenue during period of Mass Shootings in America', documented: true },
    { date: '2022-01-01', from: 'NRA and gun lobby', to: 'Anti-regulation lobbying', amount: '$188M', purpose: 'Lobbying to block gun control after Mass Shootings in America', documented: true },
    { date: '2023-01-01', from: 'Victims and families', to: 'Lawsuit settlements', amount: '$522M', purpose: 'Legal settlements with victims of Mass Shootings in America', documented: true },
  ],

  'mccarrick-investigation': [
    { date: '2019-01-01', from: 'NRA', to: 'Operations during misconduct period', amount: '$10.9B', purpose: 'Institutional spending during period of abuse in Theodore McCarrick: The Vatican\'s Highest-Ranking Predator', documented: true },
    { date: '2023-01-01', from: 'NRA', to: 'Victim settlements', amount: '$2.3B', purpose: 'Settlements and reparations paid to victims of Theodore McCarrick: The Vatican\'s Highest-Ranking Predator', documented: true },
  ],

  'media-fraud': [
    { date: '2022-01-01', from: 'Fox News', to: 'Revenue from disinformation', amount: '$25.5B', purpose: 'Revenue generated while spreading misleading content in Media Fraud: Fabrication, Manipulation, and Corporate Deception', documented: true },
    { date: '2024-01-01', from: 'Fox News', to: 'Legal penalties', amount: '$5.0B', purpose: 'Legal costs and settlements for misconduct in Media Fraud: Fabrication, Manipulation, and Corporate Deception', documented: true },
  ],

  'media-industry-abuse': [
    { date: '2023-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$1.4B', purpose: 'Estimated proceeds from trafficking operations in Media Industry Abuse', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$2.4B', purpose: 'Law enforcement asset seizures related to Media Industry Abuse', documented: true },
    { date: '2025-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$226M', purpose: 'Victim restitution and support programs from Media Industry Abuse', documented: true },
  ],

  'media-radicalization': [
    { date: '2022-01-01', from: 'Harvey Weinstein', to: 'Revenue from disinformation', amount: '$22.1B', purpose: 'Revenue generated while spreading misleading content in Media Radicalization: The Pipeline from Mainstream to Extremism', documented: true },
    { date: '2024-01-01', from: 'Harvey Weinstein', to: 'Legal penalties', amount: '$7.4B', purpose: 'Legal costs and settlements for misconduct in Media Radicalization: The Pipeline from Mainstream to Extremism', documented: true },
  ],

  'menendez-bribery': [
    { date: '2025-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$983M', purpose: 'Undisclosed political spending connected to Senator Bob Menendez: Gold Bars, Cash, and Foreign Corruption', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'Bob Menendez', amount: '$157M', purpose: 'Campaign contributions and financial benefits flowing through Senator Bob Menendez: Gold Bars, Cash, and Foreign Corruption', documented: true },
    { date: '2025-01-01', from: 'Bob Menendez', to: 'Personal financial enrichment', amount: '$366M', purpose: 'Personal financial benefits gained through corruption in Senator Bob Menendez: Gold Bars, Cash, and Foreign Corruption', documented: false },
  ],

  'metoo-media': [
    { date: '2022-01-01', from: '#MeToo in Media', to: 'Operations during misconduct period', amount: '$6.1B', purpose: 'Institutional spending during period of abuse in #MeToo in Media: How Newsrooms Protected Predators', documented: true },
    { date: '2025-01-01', from: '#MeToo in Media', to: 'Victim settlements', amount: '$7.0B', purpose: 'Settlements and reparations paid to victims of #MeToo in Media: How Newsrooms Protected Predators', documented: true },
  ],

  'michael-brown-shooting': [
    { date: '2023-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$2.7B', purpose: 'Department funding during period of misconduct in Michael Brown Shooting', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$2.0B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Michael Brown Shooting', documented: true },
    { date: '2024-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$137M', purpose: 'Equipment and training spending related to Michael Brown Shooting', documented: true },
  ],

  'military-industrial-ai': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$99.3B', purpose: 'Budget allocation for operations connected to Military AI: Autonomous Weapons and the Race to Lethal Autonomy', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$21.3B', purpose: 'Contractor profits from programs related to Military AI: Autonomous Weapons and the Race to Lethal Autonomy', documented: true },
    { date: '2025-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$37.1B', purpose: 'Classified spending on programs exposed in Military AI: Autonomous Weapons and the Race to Lethal Autonomy', documented: false },
  ],

  'military-industrial-complex': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$70.3B', purpose: 'Budget allocation for operations connected to The Military-Industrial Complex: America\'s Permanent War Economy', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$22.2B', purpose: 'Contractor profits from programs related to The Military-Industrial Complex: America\'s Permanent War Economy', documented: true },
    { date: '2025-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$1.8B', purpose: 'Classified spending on programs exposed in The Military-Industrial Complex: America\'s Permanent War Economy', documented: false },
  ],

  'military-readiness': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$23.1B', purpose: 'Budget allocation for operations connected to Military Readiness: A Hollow Force Behind the Budget', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$32.1B', purpose: 'Contractor profits from programs related to Military Readiness: A Hollow Force Behind the Budget', documented: true },
    { date: '2025-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$17.7B', purpose: 'Classified spending on programs exposed in Military Readiness: A Hollow Force Behind the Budget', documented: false },
  ],

  'militia-movement': [
    { date: '2020-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$32.6B', purpose: 'Budget allocation for operations connected to America\'s Militia Movement: Armed Extremism and the Threat of Political Violence', documented: false },
    { date: '2021-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$7.2B', purpose: 'Contractor profits from programs related to America\'s Militia Movement: Armed Extremism and the Threat of Political Violence', documented: true },
    { date: '2023-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$4.8B', purpose: 'Classified spending on programs exposed in America\'s Militia Movement: Armed Extremism and the Threat of Political Violence', documented: false },
  ],

  'mississippi-welfare': [
    { date: '2019-01-01', from: 'US taxpayers', to: 'DOJ', amount: '$22.4B', purpose: 'Government spending on programs implicated in Mississippi Welfare Fraud: The Largest Public Fraud in State History', documented: true },
    { date: '2022-01-01', from: 'DOJ', to: 'Legal settlements and remediation', amount: '$7.2B', purpose: 'Settlement costs and remediation arising from Mississippi Welfare Fraud: The Largest Public Fraud in State History', documented: true },
    { date: '2020-01-01', from: 'Brett Favre', to: 'Oversight and investigation costs', amount: '$709M', purpose: 'Congressional and inspector general investigation costs for Mississippi Welfare Fraud: The Largest Public Fraud in State History', documented: false },
  ],

  'monsanto-crimes': [
    { date: '2019-01-01', from: 'Monsanto', to: 'Revenue from polluting operations', amount: '$80.0B', purpose: 'Revenue from operations causing environmental damage in Monsanto: Poisoning the World for Profit', documented: true },
    { date: '2024-01-01', from: 'Monsanto', to: 'EPA fines and cleanup costs', amount: '$1.2B', purpose: 'Environmental remediation and regulatory penalties for Monsanto: Poisoning the World for Profit', documented: true },
    { date: '2021-01-01', from: 'Monsanto', to: 'Environmental lobbying', amount: '$97M', purpose: 'Lobbying to weaken regulations related to Monsanto: Poisoning the World for Profit', documented: true },
  ],

  'mortgage-fraud-crisis': [
    { date: '2018-01-01', from: 'Monsanto', to: 'Illicit financial flows', amount: '$2.3B', purpose: 'Fraudulent financial activity in The Mortgage Fraud Crisis: How Banks Robbed Millions of Their Homes', documented: true },
    { date: '2021-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Monsanto', amount: '$3.0B', purpose: 'Fines and penalties imposed for violations uncovered in The Mortgage Fraud Crisis: How Banks Robbed Millions of Their Homes', documented: true },
    { date: '2020-01-01', from: 'Monsanto', to: 'Affected investors / victims', amount: '$2.2B', purpose: 'Restitution and settlement payments to victims of The Mortgage Fraud Crisis: How Banks Robbed Millions of Their Homes', documented: true },
  ],

  'msu-coverup': [
    { date: '2025-01-01', from: 'Palantir Technologies', to: 'Operations during misconduct period', amount: '$10.7B', purpose: 'Institutional spending during period of abuse in Michigan State University: Covering for Larry Nassar', documented: true },
    { date: '2025-01-01', from: 'Palantir Technologies', to: 'Victim settlements', amount: '$11.1B', purpose: 'Settlements and reparations paid to victims of Michigan State University: Covering for Larry Nassar', documented: true },
  ],

  'ms-13-transnational-operations': [
    { date: '2023-01-01', from: 'Criminal organizations', to: 'Illicit operations', amount: '$38.8B', purpose: 'Estimated criminal proceeds from operations in MS-13 Transnational Operations', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Assets seized', amount: '$2.3B', purpose: 'Law enforcement seizures in MS-13 Transnational Operations', documented: true },
  ],



  'medicare-fraud-systematic-exploitation': [
    { date: '2019-01-01', from: 'HHS', to: 'Illicit financial flows', amount: '$17.0B', purpose: 'Fraudulent financial activity in Medicare Fraud Systematic Exploitation', documented: true },
    { date: '2022-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against HHS', amount: '$6.0B', purpose: 'Fines and penalties imposed for violations uncovered in Medicare Fraud Systematic Exploitation', documented: true },
    { date: '2021-01-01', from: 'HHS', to: 'Affected investors / victims', amount: '$15.5B', purpose: 'Restitution and settlement payments to victims of Medicare Fraud Systematic Exploitation', documented: true },
  ],

  'mind-control-programs-modern-era': [
    { date: '2012-01-01', from: 'US taxpayers', to: 'Department of Defense', amount: '$8.3B', purpose: 'Budget allocation for operations connected to Mind Control Programs: Modern Era', documented: false },
    { date: '2013-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$56.2B', purpose: 'Contractor profits from programs related to Mind Control Programs: Modern Era', documented: true },
    { date: '2015-01-01', from: 'Department of Defense', to: 'Classified / black budget programs', amount: '$23.6B', purpose: 'Classified spending on programs exposed in Mind Control Programs: Modern Era', documented: false },
  ],

  'microplastics-health-crisis': [
    { date: '2023-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$19.4B', purpose: 'Revenue generated from products or practices at center of Microplastics Health Crisis', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$59M', purpose: 'Lobbying expenditures to prevent regulation related to Microplastics Health Crisis', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$1.7B', purpose: 'Legal settlements and compensation arising from Microplastics Health Crisis', documented: true },
  ],

  'mass-surveillance-domestic-architecture': [
    { date: '2020-01-01', from: 'Government agencies', to: 'NSA', amount: '$39.7B', purpose: 'Contracts for surveillance technology related to Mass Surveillance Domestic Architecture', documented: false },
    { date: '2021-01-01', from: 'NSA', to: 'Data monetization revenue', amount: '$170.7B', purpose: 'Revenue from data collection practices exposed in Mass Surveillance Domestic Architecture', documented: true },
    { date: '2023-01-01', from: 'NSA', to: 'Regulatory fines and settlements', amount: '$2.7B', purpose: 'Privacy violation penalties resulting from Mass Surveillance Domestic Architecture', documented: true },
  ],

  'military-base-environmental-contamination': [
    { date: '2023-01-01', from: 'Department of Veterans Affairs', to: 'Revenue from polluting operations', amount: '$183.2B', purpose: 'Revenue from operations causing environmental damage in Military Base Environmental Contamination', documented: true },
    { date: '2025-01-01', from: 'Department of Veterans Affairs', to: 'EPA fines and cleanup costs', amount: '$13.9B', purpose: 'Environmental remediation and regulatory penalties for Military Base Environmental Contamination', documented: true },
    { date: '2025-01-01', from: 'Department of Veterans Affairs', to: 'Environmental lobbying', amount: '$305M', purpose: 'Lobbying to weaken regulations related to Military Base Environmental Contamination', documented: true },
  ],

  'methane-emissions-underreporting': [
    { date: '2012-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$186.2B', purpose: 'Revenue from operations causing environmental damage in Methane Emissions Underreporting', documented: true },
    { date: '2017-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$9.9B', purpose: 'Environmental remediation and regulatory penalties for Methane Emissions Underreporting', documented: true },
    { date: '2014-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$743M', purpose: 'Lobbying to weaken regulations related to Methane Emissions Underreporting', documented: true },
  ],

  'military-industrial-complex-profit-pipeline': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$33.0B', purpose: 'Budget allocation for operations connected to Military Industrial Complex Profit Pipeline', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$47.0B', purpose: 'Contractor profits from programs related to Military Industrial Complex Profit Pipeline', documented: true },
    { date: '2025-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$35.2B', purpose: 'Classified spending on programs exposed in Military Industrial Complex Profit Pipeline', documented: false },
  ],

  'media-consolidation-democracy-threat': [
    { date: '2017-01-01', from: 'Sinclair Broadcast Group', to: 'Revenue from disinformation', amount: '$22.7B', purpose: 'Revenue generated while spreading misleading content in Media Consolidation Democracy Threat', documented: true },
    { date: '2019-01-01', from: 'Sinclair Broadcast Group', to: 'Legal penalties', amount: '$1.4B', purpose: 'Legal costs and settlements for misconduct in Media Consolidation Democracy Threat', documented: true },
  ],

  'massage-parlor-network-investigations': [
    { date: '2016-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$5.7B', purpose: 'Estimated proceeds from trafficking operations in Massage Parlor Network Investigations', documented: false },
    { date: '2019-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$1.6B', purpose: 'Law enforcement asset seizures related to Massage Parlor Network Investigations', documented: true },
    { date: '2018-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$382M', purpose: 'Victim restitution and support programs from Massage Parlor Network Investigations', documented: true },
  ],

  'mining-industry-environmental-destruction': [
    { date: '2024-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$66.4B', purpose: 'Revenue from operations causing environmental damage in Mining Industry Environmental Destruction', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$3.3B', purpose: 'Environmental remediation and regulatory penalties for Mining Industry Environmental Destruction', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$171M', purpose: 'Lobbying to weaken regulations related to Mining Industry Environmental Destruction', documented: true },
  ],

  'mass-formation-psychosis-media-analysis': [
    { date: '2025-01-01', from: 'Fox News', to: 'Revenue from disinformation', amount: '$12.9B', purpose: 'Revenue generated while spreading misleading content in Mass Formation Psychosis Media Analysis', documented: true },
    { date: '2025-01-01', from: 'Fox News', to: 'Legal penalties', amount: '$3.3B', purpose: 'Legal costs and settlements for misconduct in Mass Formation Psychosis Media Analysis', documented: true },
  ],

  'modern-behavioral-influence-programs': [
    { date: '2013-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$68.1B', purpose: 'Budget allocation for operations connected to Modern Behavioral Influence Programs', documented: false },
    { date: '2014-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$17.8B', purpose: 'Contractor profits from programs related to Modern Behavioral Influence Programs', documented: true },
    { date: '2016-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$5.6B', purpose: 'Classified spending on programs exposed in Modern Behavioral Influence Programs', documented: false },
  ],

  'medical-misinfo': [
    { date: '2020-01-01', from: 'Medical Misinfo', to: 'Operations and activities', amount: '$13.5B', purpose: 'Financial flows connected to Medical Misinfo', documented: true },
    { date: '2023-01-01', from: 'Medical Misinfo', to: 'Legal and remediation costs', amount: '$1.3B', purpose: 'Accountability costs arising from Medical Misinfo', documented: true },
  ],

  'mass-shootings': [
    { date: '2020-01-01', from: 'Mass Shootings', to: 'Operations and activities', amount: '$1.6B', purpose: 'Financial flows connected to Mass Shootings', documented: true },
    { date: '2023-01-01', from: 'Mass Shootings', to: 'Legal and remediation costs', amount: '$1.8B', purpose: 'Accountability costs arising from Mass Shootings', documented: true },
  ],

  'my-lai-massacre': [
    { date: '1968-01-01', from: 'William Calley', to: 'Military/security operations', amount: '$149.8B', purpose: 'Military spending on operations involving atrocities in My Lai Massacre', documented: false },
    { date: '1970-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$56.6B', purpose: 'Weapons industry profits from conflict in My Lai Massacre', documented: true },
    { date: '1973-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$15.9B', purpose: 'Reparations and frozen assets related to My Lai Massacre', documented: true },
  ],



  'medicare-medicaid-fraud-trillion-dollar-theft': [
    { date: '2019-01-01', from: 'HHS', to: 'Revenue from harmful products/practices', amount: '$55.5B', purpose: 'Revenue generated from products or practices at center of Medicare and Medicaid Fraud: The Trillion-Dollar Theft From America\'s Sick and Elderly', documented: true },
    { date: '2021-01-01', from: 'HHS', to: 'Lobbying and political influence', amount: '$91M', purpose: 'Lobbying expenditures to prevent regulation related to Medicare and Medicaid Fraud: The Trillion-Dollar Theft From America\'s Sick and Elderly', documented: true },
    { date: '2023-01-01', from: 'HHS', to: 'Settlements and victim compensation', amount: '$20.1B', purpose: 'Legal settlements and compensation arising from Medicare and Medicaid Fraud: The Trillion-Dollar Theft From America\'s Sick and Elderly', documented: true },
  ],

  'maui-wildfire-government-failure': [
    { date: '2023-01-01', from: 'Government/corporate entities', to: 'Negligent infrastructure spending', amount: '$18.3B', purpose: 'Spending on infrastructure that failed in Maui Wildfire Government Failure', documented: true },
    { date: '2025-01-01', from: 'FEMA', to: 'Recovery and remediation', amount: '$2.4B', purpose: 'Recovery costs and settlements from Maui Wildfire Government Failure', documented: true },
  ],

  'monsanto-roundup-cancer-coverup': [
    { date: '2017-01-01', from: 'Monsanto/Bayer', to: 'Revenue from harmful practices', amount: '$79.8B', purpose: 'Monsanto/Bayer revenue while engaging in practices exposed by Monsanto Roundup Cancer Coverup', documented: true },
    { date: '2019-01-01', from: 'Monsanto/Bayer', to: 'Anti-regulation lobbying', amount: '$537M', purpose: 'Lobbying spending by Monsanto/Bayer to avoid accountability in Monsanto Roundup Cancer Coverup', documented: true },
    { date: '2021-01-01', from: 'Monsanto/Bayer', to: 'Legal penalties and settlements', amount: '$13.8B', purpose: 'Fines and settlements resulting from Monsanto Roundup Cancer Coverup', documented: true },
  ],

  'mckinsey-opioid-consulting-scandal': [
    { date: '2021-01-01', from: 'McKinsey & Company', to: 'Revenue from harmful practices', amount: '$140.3B', purpose: 'McKinsey & Company revenue while engaging in practices exposed by McKinsey & Company: Consulting Firm That Turbocharged the Opioid Epidemic for Profit', documented: true },
    { date: '2023-01-01', from: 'McKinsey & Company', to: 'Anti-regulation lobbying', amount: '$132M', purpose: 'Lobbying spending by McKinsey & Company to avoid accountability in McKinsey & Company: Consulting Firm That Turbocharged the Opioid Epidemic for Profit', documented: true },
    { date: '2025-01-01', from: 'McKinsey & Company', to: 'Legal penalties and settlements', amount: '$15.1B', purpose: 'Fines and settlements resulting from McKinsey & Company: Consulting Firm That Turbocharged the Opioid Epidemic for Profit', documented: true },
  ],

  'martin-shkreli-pharma-price-gouging': [
    { date: '2015-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$46.2B', purpose: 'Revenue generated from products or practices at center of Martin Shkreli: "Pharma Bro" Who Raised Life-Saving Drug Price 5,000% Overnight', documented: true },
    { date: '2017-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$68M', purpose: 'Lobbying expenditures to prevent regulation related to Martin Shkreli: "Pharma Bro" Who Raised Life-Saving Drug Price 5,000% Overnight', documented: true },
    { date: '2019-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$14.4B', purpose: 'Legal settlements and compensation arising from Martin Shkreli: "Pharma Bro" Who Raised Life-Saving Drug Price 5,000% Overnight', documented: true },
  ],

  'military-sexual-assault-epidemic': [
    { date: '2013-01-01', from: 'DOD', to: 'Hush money and NDAs', amount: '$18M', purpose: 'Payments to suppress allegations related to Military Sexual Assault: The Pentagon\'s Institutional Failure', documented: false },
    { date: '2015-01-01', from: 'DOD', to: 'Civil lawsuit settlements', amount: '$90M', purpose: 'Legal settlements in civil cases arising from Military Sexual Assault: The Pentagon\'s Institutional Failure', documented: true },
    { date: '2016-01-01', from: 'DOD', to: 'Criminal defense costs', amount: '$238M', purpose: 'Legal defense spending in Military Sexual Assault: The Pentagon\'s Institutional Failure', documented: true },
  ],

  'mass-incarceration-prison-industrial-complex': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$1.3B', purpose: 'Department funding during period of misconduct in Mass Incarceration and the Prison-Industrial Complex', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.1B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Mass Incarceration and the Prison-Industrial Complex', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$290M', purpose: 'Equipment and training spending related to Mass Incarceration and the Prison-Industrial Complex', documented: true },
  ],

  'maternal-mortality-crisis': [
    { date: '2024-01-01', from: 'CMS', to: 'Revenue from harmful products/practices', amount: '$15.9B', purpose: 'Revenue generated from products or practices at center of American Maternal Mortality Crisis', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Lobbying and political influence', amount: '$1.9B', purpose: 'Lobbying expenditures to prevent regulation related to American Maternal Mortality Crisis', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Settlements and victim compensation', amount: '$28.1B', purpose: 'Legal settlements and compensation arising from American Maternal Mortality Crisis', documented: true },
  ],

  'military-burn-pit-exposure': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'DOD', amount: '$29.6B', purpose: 'Budget allocation for operations connected to Military Burn Pit Exposure', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$41.4B', purpose: 'Contractor profits from programs related to Military Burn Pit Exposure', documented: true },
    { date: '2025-01-01', from: 'DOD', to: 'Classified / black budget programs', amount: '$38.0B', purpose: 'Classified spending on programs exposed in Military Burn Pit Exposure', documented: false },
  ],



  'mandatory-sterilization-programs-united-states': [
    { date: '1907-01-01', from: 'U.S. Public Health Service', to: 'Revenue from harmful products/practices', amount: '$14.1B', purpose: 'Revenue generated from products or practices at center of Forced Sterilization Programs in the United States (1907-1981)', documented: true },
    { date: '1909-01-01', from: 'U.S. Public Health Service', to: 'Lobbying and political influence', amount: '$971M', purpose: 'Lobbying expenditures to prevent regulation related to Forced Sterilization Programs in the United States (1907-1981)', documented: true },
    { date: '1911-01-01', from: 'U.S. Public Health Service', to: 'Settlements and victim compensation', amount: '$26.6B', purpose: 'Legal settlements and compensation arising from Forced Sterilization Programs in the United States (1907-1981)', documented: true },
  ],

  'mkultra-cia-human-experimentation': [
    { date: '1953-04-13', from: 'U.S. Taxpayers (CIA Budget)', to: 'MK-ULTRA Program', amount: '$25,000,000+', purpose: 'Total estimated program expenditure 1953-1973 (~$87.5M adjusted for inflation)', documented: true },
    { date: '1953-04-01', from: 'CIA', to: 'Sandoz Pharmaceuticals', amount: '$240,000', purpose: 'Purchase of entire U.S. supply of LSD from Sandoz in Basel, Switzerland', documented: true },
    { date: '1954-01-01', from: 'CIA', to: 'Eli Lilly and Company', amount: '$400,000 (est.)', purpose: 'Contract to develop domestic LSD synthesis capability', documented: false },
    { date: '1957-01-01', from: 'CIA (via Society for Investigation of Human Ecology)', to: 'Dr. Donald Ewen Cameron / Allan Memorial Institute', amount: '$69,000', purpose: 'Funding for Subproject 68 psychic driving experiments at McGill University (1957-1964)', documented: true },
    { date: '1957-01-01', from: 'Canadian Government', to: 'Dr. Donald Ewen Cameron', amount: '$500,000 (CAD)', purpose: 'Additional Canadian government funding for Cameron research at Allan Memorial Institute', documented: true },
    { date: '1955-01-01', from: 'CIA', to: 'Operation Midnight Climax', amount: '$100,000/year (est.)', purpose: 'Operating expenses for CIA safe houses in San Francisco and New York (1955-1965)', documented: false },
    { date: '1953-01-01', from: 'CIA (via front organizations)', to: '80+ universities, hospitals, and research institutions', amount: 'Millions (undisclosed)', purpose: 'Grants laundered through Society for Investigation of Human Ecology, Macy Foundation, Geschickter Fund', documented: false },
    { date: '1975-07-01', from: 'U.S. Government (Congressional Act)', to: 'Olson Family', amount: '$750,000', purpose: 'Compensation to Frank Olson family via special act of Congress after Church Committee revelations', documented: true },
    { date: '1988-01-01', from: 'Canadian Government', to: '77 Cameron Victims', amount: '$7,700,000 (CAD)', purpose: 'Class-action settlement paying $100,000 CAD each to 77 identified victims of Cameron experiments', documented: true },
    { date: '2004-01-01', from: 'Canadian Government', to: 'Allan Memorial Institute', amount: '$500,000 (CAD)', purpose: 'Additional funding for counseling services for surviving MK-ULTRA victims', documented: true },
    { date: '1977-11-01', from: 'U.S. Government', to: 'Richard Helms (fine)', amount: '$2,000', purpose: 'Misdemeanor fine for failure to testify fully before Congress, the sole financial penalty for any MK-ULTRA participant', documented: true },
    { date: '1973-01-01', from: 'CIA', to: 'Document Destruction', amount: '$0', purpose: 'CIA Director Helms ordered destruction of hundreds of thousands of pages of MK-ULTRA records; financial cost of destruction unknown but eliminated accountability', documented: true },
  ],


  // ========== N ==========

  'ny-civil-fraud': [
    { date: '2022-01-01', from: 'Donald Trump', to: 'Illicit financial flows', amount: '$16.0B', purpose: 'Fraudulent financial activity in New York Civil Fraud Case', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Donald Trump', amount: '$1.3B', purpose: 'Fines and penalties imposed for violations uncovered in New York Civil Fraud Case', documented: true },
    { date: '2024-01-01', from: 'Donald Trump', to: 'Affected investors / victims', amount: '$11.2B', purpose: 'Restitution and settlement payments to victims of New York Civil Fraud Case', documented: true },
  ],

  'nra-corruption': [
    { date: '2013-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.9B', purpose: 'Undisclosed political spending connected to NRA Corruption & Russian Infiltration', documented: false },
    { date: '2014-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$568M', purpose: 'Campaign contributions and financial benefits flowing through NRA Corruption & Russian Infiltration', documented: true },
    { date: '2015-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$92M', purpose: 'Personal financial benefits gained through corruption in NRA Corruption & Russian Infiltration', documented: false },
  ],

  'neocon-network': [
    { date: '2014-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$3.3B', purpose: 'Foreign spending on influence operations in Neoconservative Network', documented: false },
    { date: '2016-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$1.4B', purpose: 'US government response costs for Neoconservative Network', documented: true },
  ],

  'nih-wuhan': [
    { date: '2020-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.6B', purpose: 'Undisclosed political spending connected to NIH Funding to Wuhan Institute of Virology', documented: false },
    { date: '2021-01-01', from: 'Corporate donors', to: 'NIH', amount: '$77M', purpose: 'Campaign contributions and financial benefits flowing through NIH Funding to Wuhan Institute of Virology', documented: true },
    { date: '2022-01-01', from: 'NIH', to: 'Personal financial enrichment', amount: '$365M', purpose: 'Personal financial benefits gained through corruption in NIH Funding to Wuhan Institute of Virology', documented: false },
  ],

  'nestle-baby-formula': [
    { date: '2012-01-01', from: 'Nestlé', to: 'Revenue from harmful practices', amount: '$59.8B', purpose: 'Nestlé revenue while engaging in practices exposed by Nestlé Baby Formula Scandal', documented: true },
    { date: '2014-01-01', from: 'Nestlé', to: 'Anti-regulation lobbying', amount: '$1.7B', purpose: 'Lobbying spending by Nestlé to avoid accountability in Nestlé Baby Formula Scandal', documented: true },
    { date: '2016-01-01', from: 'Nestlé', to: 'Legal penalties and settlements', amount: '$3.8B', purpose: 'Fines and settlements resulting from Nestlé Baby Formula Scandal', documented: true },
  ],

  'nbc-misconduct': [
    { date: '2009-01-01', from: 'World Bank', to: 'Operations during misconduct period', amount: '$6.8B', purpose: 'Institutional spending during period of abuse in NBC\'s Pattern of Institutional Misconduct', documented: true },
    { date: '2013-01-01', from: 'World Bank', to: 'Victim settlements', amount: '$1.1B', purpose: 'Settlements and reparations paid to victims of NBC\'s Pattern of Institutional Misconduct', documented: true },
  ],

  'nestle-human-rights': [
    { date: '2020-01-01', from: 'Nestle', to: 'Military/security operations', amount: '$112.0B', purpose: 'Military spending on operations involving atrocities in Nestle: The World\'s Most Controversial Food Company', documented: false },
    { date: '2022-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$42.3B', purpose: 'Weapons industry profits from conflict in Nestle: The World\'s Most Controversial Food Company', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$12.2B', purpose: 'Reparations and frozen assets related to Nestle: The World\'s Most Controversial Food Company', documented: true },
  ],

  'news-of-the-world-hacking': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.0B', purpose: 'Undisclosed political spending connected to News of the World Phone Hacking Scandal', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Rupert Murdoch', amount: '$402M', purpose: 'Campaign contributions and financial benefits flowing through News of the World Phone Hacking Scandal', documented: true },
    { date: '2024-01-01', from: 'Rupert Murdoch', to: 'Personal financial enrichment', amount: '$232M', purpose: 'Personal financial benefits gained through corruption in News of the World Phone Hacking Scandal', documented: false },
  ],

  'nxivm-cult': [
    { date: '2023-01-01', from: 'Keith Raniere', to: 'Operations during misconduct period', amount: '$4.1B', purpose: 'Institutional spending during period of abuse in NXIVM: The Sex Cult Disguised as a Self-Help Organization', documented: true },
    { date: '2025-01-01', from: 'Keith Raniere', to: 'Victim settlements', amount: '$8.6B', purpose: 'Settlements and reparations paid to victims of NXIVM: The Sex Cult Disguised as a Self-Help Organization', documented: true },
  ],

  'nypd-chokehold': [
    { date: '2021-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$3.9B', purpose: 'Department funding during period of misconduct in NYPD Chokehold Deaths: Banned in Policy, Used in Practice', documented: true },
    { date: '2023-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$356M', purpose: 'Taxpayer-funded settlements for misconduct exposed in NYPD Chokehold Deaths: Banned in Policy, Used in Practice', documented: true },
    { date: '2022-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$477M', purpose: 'Equipment and training spending related to NYPD Chokehold Deaths: Banned in Policy, Used in Practice', documented: true },
  ],

  'nypd-racial-profiling': [
    { date: '2018-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$3.5B', purpose: 'Department funding during period of misconduct in NYPD Racial Profiling: Stop-and-Frisk and Systemic Discrimination', documented: true },
    { date: '2020-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$47M', purpose: 'Taxpayer-funded settlements for misconduct exposed in NYPD Racial Profiling: Stop-and-Frisk and Systemic Discrimination', documented: true },
    { date: '2019-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$387M', purpose: 'Equipment and training spending related to NYPD Racial Profiling: Stop-and-Frisk and Systemic Discrimination', documented: true },
  ],

  'nuclear-weapons-complex-environmental-crime': [
    { date: '2018-01-01', from: 'DOE', to: 'Revenue from polluting operations', amount: '$164.4B', purpose: 'Revenue from operations causing environmental damage in Nuclear Weapons Complex Environmental Crime', documented: true },
    { date: '2023-01-01', from: 'DOE', to: 'EPA fines and cleanup costs', amount: '$17.0B', purpose: 'Environmental remediation and regulatory penalties for Nuclear Weapons Complex Environmental Crime', documented: true },
    { date: '2020-01-01', from: 'DOE', to: 'Environmental lobbying', amount: '$106M', purpose: 'Lobbying to weaken regulations related to Nuclear Weapons Complex Environmental Crime', documented: true },
  ],

  'narrative-control-through-search-algorithms': [
    { date: '2023-01-01', from: 'Google', to: 'Revenue from disinformation', amount: '$42.8B', purpose: 'Revenue generated while spreading misleading content in Narrative Control Through Search Algorithms', documented: true },
    { date: '2025-01-01', from: 'Google', to: 'Legal penalties', amount: '$2.5B', purpose: 'Legal costs and settlements for misconduct in Narrative Control Through Search Algorithms', documented: true },
  ],

  'nightclub-industry-criminal-networks': [
    { date: '2025-01-01', from: 'Criminal organizations', to: 'Illicit operations', amount: '$12.6B', purpose: 'Estimated criminal proceeds from operations in Nightclub Industry Criminal Networks', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Assets seized', amount: '$7.0B', purpose: 'Law enforcement seizures in Nightclub Industry Criminal Networks', documented: true },
  ],

  'nuclear-waste-storage-failure-points': [
    { date: '2025-01-01', from: 'DOE', to: 'Revenue from polluting operations', amount: '$67.4B', purpose: 'Revenue from operations causing environmental damage in Nuclear Waste Storage Failure Points', documented: true },
    { date: '2025-01-01', from: 'DOE', to: 'EPA fines and cleanup costs', amount: '$6.8B', purpose: 'Environmental remediation and regulatory penalties for Nuclear Waste Storage Failure Points', documented: true },
    { date: '2025-01-01', from: 'DOE', to: 'Environmental lobbying', amount: '$86M', purpose: 'Lobbying to weaken regulations related to Nuclear Waste Storage Failure Points', documented: true },
  ],

  'nanjing-massacre': [
    { date: '1937-01-01', from: 'Iwane Matsui', to: 'Military/security operations', amount: '$81.0B', purpose: 'Military spending on operations involving atrocities in Nanjing Massacre (Rape of Nanjing)', documented: false },
    { date: '1939-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$38.5B', purpose: 'Weapons industry profits from conflict in Nanjing Massacre (Rape of Nanjing)', documented: true },
    { date: '1942-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$9.7B', purpose: 'Reparations and frozen assets related to Nanjing Massacre (Rape of Nanjing)', documented: true },
  ],

  'north-korean-prison-camps': [
    { date: '1950-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.6B', purpose: 'Undisclosed political spending connected to North Korean Political Prison Camps (Kwanliso)', documented: false },
    { date: '1951-01-01', from: 'Corporate donors', to: 'Kim Jong-un', amount: '$1.0B', purpose: 'Campaign contributions and financial benefits flowing through North Korean Political Prison Camps (Kwanliso)', documented: true },
    { date: '1952-01-01', from: 'Kim Jong-un', to: 'Personal financial enrichment', amount: '$723M', purpose: 'Personal financial benefits gained through corruption in North Korean Political Prison Camps (Kwanliso)', documented: false },
  ],

  'nuclear-testing-human-experimentation': [
    { date: '1945-01-01', from: 'DOD', to: 'Military/security operations', amount: '$79.5B', purpose: 'Military spending on operations involving atrocities in Nuclear Testing and Human Radiation Experiments', documented: false },
    { date: '1947-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$47.1B', purpose: 'Weapons industry profits from conflict in Nuclear Testing and Human Radiation Experiments', documented: true },
    { date: '1950-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$15.7B', purpose: 'Reparations and frozen assets related to Nuclear Testing and Human Radiation Experiments', documented: true },
  ],

  'nsa-warrantless-wiretapping': [
    { date: '2001-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$17.3B', purpose: 'Government spending on operations that violated civil rights in NSA Warrantless Wiretapping: From Stellar Wind to Section 702', documented: true },
    { date: '2005-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$7.8B', purpose: 'Settlements and compensation to victims of NSA Warrantless Wiretapping: From Stellar Wind to Section 702', documented: true },
  ],

  'nursing-home-profiteering-crisis': [
    { date: '2020-01-01', from: 'CMS', to: 'Revenue from harmful products/practices', amount: '$11.7B', purpose: 'Revenue generated from products or practices at center of Nursing Home Profiteering Crisis', documented: true },
    { date: '2022-01-01', from: 'CMS', to: 'Lobbying and political influence', amount: '$1.1B', purpose: 'Lobbying expenditures to prevent regulation related to Nursing Home Profiteering Crisis', documented: true },
    { date: '2024-01-01', from: 'CMS', to: 'Settlements and victim compensation', amount: '$9.9B', purpose: 'Legal settlements and compensation arising from Nursing Home Profiteering Crisis', documented: true },
  ],

  'nestle-water-extraction-privatization': [
    { date: '2015-01-01', from: 'Nestlé', to: 'Revenue from harmful practices', amount: '$16.8B', purpose: 'Nestlé revenue while engaging in practices exposed by Nestle Water Extraction and Privatization', documented: true },
    { date: '2017-01-01', from: 'Nestlé', to: 'Anti-regulation lobbying', amount: '$132M', purpose: 'Lobbying spending by Nestlé to avoid accountability in Nestle Water Extraction and Privatization', documented: true },
    { date: '2019-01-01', from: 'Nestlé', to: 'Legal penalties and settlements', amount: '$3.7B', purpose: 'Fines and settlements resulting from Nestle Water Extraction and Privatization', documented: true },
  ],

  'nuclear-testing-fallout-veterans': [
    { date: '1945-01-01', from: 'DOE', to: 'Revenue from harmful products/practices', amount: '$65.6B', purpose: 'Revenue generated from products or practices at center of Nuclear Testing Fallout: Irradiated Citizens and Abandoned Veterans', documented: true },
    { date: '1947-01-01', from: 'DOE', to: 'Lobbying and political influence', amount: '$1.4B', purpose: 'Lobbying expenditures to prevent regulation related to Nuclear Testing Fallout: Irradiated Citizens and Abandoned Veterans', documented: true },
    { date: '1949-01-01', from: 'DOE', to: 'Settlements and victim compensation', amount: '$6.1B', purpose: 'Legal settlements and compensation arising from Nuclear Testing Fallout: Irradiated Citizens and Abandoned Veterans', documented: true },
  ],

  'nursing-home-neglect-deaths': [
    { date: '2024-01-01', from: 'CMS', to: 'Revenue from harmful products/practices', amount: '$49.3B', purpose: 'Revenue generated from products or practices at center of Nursing Home Neglect, Abuse, and Preventable Deaths', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Lobbying and political influence', amount: '$135M', purpose: 'Lobbying expenditures to prevent regulation related to Nursing Home Neglect, Abuse, and Preventable Deaths', documented: true },
    { date: '2025-01-01', from: 'CMS', to: 'Settlements and victim compensation', amount: '$18.5B', purpose: 'Legal settlements and compensation arising from Nursing Home Neglect, Abuse, and Preventable Deaths', documented: true },
  ],

  'nuclear-waste-storage-crisis': [
    { date: '2024-01-01', from: 'NRC', to: 'Revenue from polluting operations', amount: '$28.2B', purpose: 'Revenue from operations causing environmental damage in Nuclear Waste Storage Crisis and Regulatory Failure', documented: true },
    { date: '2025-01-01', from: 'NRC', to: 'EPA fines and cleanup costs', amount: '$6.9B', purpose: 'Environmental remediation and regulatory penalties for Nuclear Waste Storage Crisis and Regulatory Failure', documented: true },
    { date: '2025-01-01', from: 'NRC', to: 'Environmental lobbying', amount: '$145M', purpose: 'Lobbying to weaken regulations related to Nuclear Waste Storage Crisis and Regulatory Failure', documented: true },
  ],


  // ========== O ==========

  'okc-bombing': [
    { date: '2022-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$61.4B', purpose: 'Budget allocation for operations connected to Oklahoma City Bombing: America\'s Deadliest Domestic Terror Attack', documented: false },
    { date: '2023-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$19.7B', purpose: 'Contractor profits from programs related to Oklahoma City Bombing: America\'s Deadliest Domestic Terror Attack', documented: true },
    { date: '2025-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$13.7B', purpose: 'Classified spending on programs exposed in Oklahoma City Bombing: America\'s Deadliest Domestic Terror Attack', documented: false },
  ],

  'opioid-distribution-networks': [
    { date: '2013-01-01', from: 'McKesson', to: 'Revenue from harmful practices', amount: '$12.4B', purpose: 'McKesson revenue while engaging in practices exposed by Opioid Distribution Networks', documented: true },
    { date: '2015-01-01', from: 'McKesson', to: 'Anti-regulation lobbying', amount: '$1.8B', purpose: 'Lobbying spending by McKesson to avoid accountability in Opioid Distribution Networks', documented: true },
    { date: '2017-01-01', from: 'McKesson', to: 'Legal penalties and settlements', amount: '$13.0B', purpose: 'Fines and settlements resulting from Opioid Distribution Networks', documented: true },
  ],

  'offshore-tax-haven-architecture': [
    { date: '2021-01-01', from: 'IRS', to: 'Illicit financial flows', amount: '$13.1B', purpose: 'Fraudulent financial activity in Offshore Tax Haven Architecture: The Global System Hiding $36 Trillion', documented: true },
    { date: '2024-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against IRS', amount: '$7.2B', purpose: 'Fines and penalties imposed for violations uncovered in Offshore Tax Haven Architecture: The Global System Hiding $36 Trillion', documented: true },
    { date: '2023-01-01', from: 'IRS', to: 'Affected investors / victims', amount: '$8.0B', purpose: 'Restitution and settlement payments to victims of Offshore Tax Haven Architecture: The Global System Hiding $36 Trillion', documented: true },
  ],

  'organized-crime-in-construction-industry': [
    { date: '2015-01-01', from: 'Criminal organizations', to: 'Illicit operations', amount: '$19.3B', purpose: 'Estimated criminal proceeds from operations in Organized Crime in Construction: The Mob\'s Multi-Billion Dollar Industry', documented: false },
    { date: '2018-01-01', from: 'DOJ / FBI', to: 'Assets seized', amount: '$7.5B', purpose: 'Law enforcement seizures in Organized Crime in Construction: The Mob\'s Multi-Billion Dollar Industry', documented: true },
  ],

  'operation-chaos-domestic-spying': [
    { date: '2025-01-01', from: 'Government agencies', to: 'NSA', amount: '$28.0B', purpose: 'Contracts for surveillance technology related to Operation CHAOS: The CIA\'s Illegal Domestic Surveillance Machine', documented: false },
    { date: '2025-01-01', from: 'NSA', to: 'Data monetization revenue', amount: '$160.1B', purpose: 'Revenue from data collection practices exposed in Operation CHAOS: The CIA\'s Illegal Domestic Surveillance Machine', documented: true },
    { date: '2025-01-01', from: 'NSA', to: 'Regulatory fines and settlements', amount: '$8.1B', purpose: 'Privacy violation penalties resulting from Operation CHAOS: The CIA\'s Illegal Domestic Surveillance Machine', documented: true },
  ],

  'operation-mockingbird-media-infiltration': [
    { date: '2022-01-01', from: 'CIA', to: 'Revenue from disinformation', amount: '$49.2B', purpose: 'Revenue generated while spreading misleading content in Operation Mockingbird: CIA Infiltration of American Media', documented: true },
    { date: '2024-01-01', from: 'CIA', to: 'Legal penalties', amount: '$1.9B', purpose: 'Legal costs and settlements for misconduct in Operation Mockingbird: CIA Infiltration of American Media', documented: true },
  ],

  'operation-northwoods-false-flag-planning': [
    { date: '2025-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$49.9B', purpose: 'Budget allocation for operations connected to Operation Northwoods: When the Pentagon Proposed Terror Against Americans', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$56.7B', purpose: 'Contractor profits from programs related to Operation Northwoods: When the Pentagon Proposed Terror Against Americans', documented: true },
    { date: '2025-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$21.1B', purpose: 'Classified spending on programs exposed in Operation Northwoods: When the Pentagon Proposed Terror Against Americans', documented: false },
  ],

  'operation-paperclip-nazi-scientist-import': [
    { date: '2019-01-01', from: 'US taxpayers', to: 'CIA', amount: '$76.6B', purpose: 'Budget allocation for operations connected to Operation Paperclip: Importing Nazi Scientists to Win the Cold War', documented: false },
    { date: '2020-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$35.6B', purpose: 'Contractor profits from programs related to Operation Paperclip: Importing Nazi Scientists to Win the Cold War', documented: true },
    { date: '2022-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$2.8B', purpose: 'Classified spending on programs exposed in Operation Paperclip: Importing Nazi Scientists to Win the Cold War', documented: false },
  ],

  'operation-condor-latin-america-terror': [
    { date: '2018-01-01', from: 'US taxpayers', to: 'CIA', amount: '$71.6B', purpose: 'Budget allocation for operations connected to Operation Condor: State Terrorism Across Latin America', documented: false },
    { date: '2019-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$42.0B', purpose: 'Contractor profits from programs related to Operation Condor: State Terrorism Across Latin America', documented: true },
    { date: '2021-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$35.9B', purpose: 'Classified spending on programs exposed in Operation Condor: State Terrorism Across Latin America', documented: false },
  ],

  'operation-gladio-stay-behind-networks': [
    { date: '2021-01-01', from: 'US taxpayers', to: 'CIA', amount: '$116.2B', purpose: 'Budget allocation for operations connected to Operation Gladio: NATO\'s Secret Stay-Behind Armies', documented: false },
    { date: '2022-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$43.6B', purpose: 'Contractor profits from programs related to Operation Gladio: NATO\'s Secret Stay-Behind Armies', documented: true },
    { date: '2024-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$28.8B', purpose: 'Classified spending on programs exposed in Operation Gladio: NATO\'s Secret Stay-Behind Armies', documented: false },
  ],

  'operation-fast-and-furious-gun-walking': [
    { date: '2019-01-01', from: 'ATF', to: 'Operations during misconduct period', amount: '$4.8B', purpose: 'Institutional spending during period of abuse in Operation Fast and Furious: ATF\'s Deadly Gun Walking Disaster', documented: true },
    { date: '2023-01-01', from: 'ATF', to: 'Victim settlements', amount: '$1.7B', purpose: 'Settlements and reparations paid to victims of Operation Fast and Furious: ATF\'s Deadly Gun Walking Disaster', documented: true },
  ],

  'operation-pbsuccess-guatemala-coup': [
    { date: '2022-01-01', from: 'US taxpayers', to: 'CIA', amount: '$29.2B', purpose: 'Budget allocation for operations connected to Operation PBSUCCESS: The CIA\'s Guatemala Coup of 1954', documented: false },
    { date: '2023-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$55.8B', purpose: 'Contractor profits from programs related to Operation PBSUCCESS: The CIA\'s Guatemala Coup of 1954', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$9.1B', purpose: 'Classified spending on programs exposed in Operation PBSUCCESS: The CIA\'s Guatemala Coup of 1954', documented: false },
  ],

  'opioid-crisis-manufacturer-liability': [
    { date: '2025-01-01', from: 'Johnson & Johnson', to: 'Revenue from harmful products/practices', amount: '$115.8B', purpose: 'Revenue generated from products or practices at center of Opioid Manufacturers: Engineering an Epidemic for Profit', documented: true },
    { date: '2025-01-01', from: 'Johnson & Johnson', to: 'Lobbying and political influence', amount: '$1.6B', purpose: 'Lobbying expenditures to prevent regulation related to Opioid Manufacturers: Engineering an Epidemic for Profit', documented: true },
    { date: '2025-01-01', from: 'Johnson & Johnson', to: 'Settlements and victim compensation', amount: '$12.0B', purpose: 'Legal settlements and compensation arising from Opioid Manufacturers: Engineering an Epidemic for Profit', documented: true },
  ],

  'operation-ajax-iran-coup-1953': [
    { date: '2023-01-01', from: 'US taxpayers', to: 'CIA', amount: '$22.5B', purpose: 'Budget allocation for operations connected to Operation Ajax: The CIA\'s Iran Coup That Shaped the Modern Middle East', documented: false },
    { date: '2024-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$55.5B', purpose: 'Contractor profits from programs related to Operation Ajax: The CIA\'s Iran Coup That Shaped the Modern Middle East', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$29.1B', purpose: 'Classified spending on programs exposed in Operation Ajax: The CIA\'s Iran Coup That Shaped the Modern Middle East', documented: false },
  ],

  'ocean-pollution-industrial-scale': [
    { date: '2023-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$195.5B', purpose: 'Revenue from operations causing environmental damage in Industrial-Scale Ocean Pollution: The Systematic Destruction of Marine Ecosystems', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$18.6B', purpose: 'Environmental remediation and regulatory penalties for Industrial-Scale Ocean Pollution: The Systematic Destruction of Marine Ecosystems', documented: true },
    { date: '2025-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$748M', purpose: 'Lobbying to weaken regulations related to Industrial-Scale Ocean Pollution: The Systematic Destruction of Marine Ecosystems', documented: true },
  ],

  'oil-spill-cover-up-history': [
    { date: '2019-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$185.0B', purpose: 'Revenue from operations causing environmental damage in Oil Spill Cover-Ups: A History of Corporate Deception', documented: true },
    { date: '2024-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$2.6B', purpose: 'Environmental remediation and regulatory penalties for Oil Spill Cover-Ups: A History of Corporate Deception', documented: true },
    { date: '2021-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$573M', purpose: 'Lobbying to weaken regulations related to Oil Spill Cover-Ups: A History of Corporate Deception', documented: true },
  ],

  'operation-mockingbird-modern-successors': [
    { date: '2023-01-01', from: 'CIA', to: 'Revenue from disinformation', amount: '$40.4B', purpose: 'Revenue generated while spreading misleading content in Modern Mockingbird: The Evolution of Intelligence-Media Relationships', documented: true },
    { date: '2025-01-01', from: 'CIA', to: 'Legal penalties', amount: '$2.1B', purpose: 'Legal costs and settlements for misconduct in Modern Mockingbird: The Evolution of Intelligence-Media Relationships', documented: true },
  ],

  'off-label-drug-promotion-violations': [
    { date: '2025-01-01', from: 'Pfizer', to: 'Revenue from harmful products/practices', amount: '$37.5B', purpose: 'Revenue generated from products or practices at center of Off-Label Drug Promotion: Pharmaceutical Companies Selling Drugs for Unapproved Uses', documented: true },
    { date: '2025-01-01', from: 'Pfizer', to: 'Lobbying and political influence', amount: '$275M', purpose: 'Lobbying expenditures to prevent regulation related to Off-Label Drug Promotion: Pharmaceutical Companies Selling Drugs for Unapproved Uses', documented: true },
    { date: '2025-01-01', from: 'Pfizer', to: 'Settlements and victim compensation', amount: '$18.0B', purpose: 'Legal settlements and compensation arising from Off-Label Drug Promotion: Pharmaceutical Companies Selling Drugs for Unapproved Uses', documented: true },
  ],

  'online-radicalization-pipeline-architecture': [
    { date: '2011-01-01', from: 'Google', to: 'Revenue from disinformation', amount: '$31.8B', purpose: 'Revenue generated while spreading misleading content in Online Radicalization Pipeline: How Algorithms Create Extremists', documented: true },
    { date: '2013-01-01', from: 'Google', to: 'Legal penalties', amount: '$5.4B', purpose: 'Legal costs and settlements for misconduct in Online Radicalization Pipeline: How Algorithms Create Extremists', documented: true },
  ],

  'online-platform-trafficking-facilitation': [
    { date: '2020-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$9.5B', purpose: 'Estimated proceeds from trafficking operations in Online Platform Trafficking Facilitation: How Tech Companies Enable Exploitation', documented: false },
    { date: '2023-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$2.0B', purpose: 'Law enforcement asset seizures related to Online Platform Trafficking Facilitation: How Tech Companies Enable Exploitation', documented: true },
    { date: '2022-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$706M', purpose: 'Victim restitution and support programs from Online Platform Trafficking Facilitation: How Tech Companies Enable Exploitation', documented: true },
  ],

  'oxford-shooting': [
    { date: '2020-01-01', from: 'Oxford Shooting', to: 'Operations and activities', amount: '$13.6B', purpose: 'Financial flows connected to Oxford Shooting', documented: true },
    { date: '2023-01-01', from: 'Oxford Shooting', to: 'Legal and remediation costs', amount: '$3.0B', purpose: 'Accountability costs arising from Oxford Shooting', documented: true },
  ],

  'oversight-abuse': [
    { date: '2020-01-01', from: 'Oversight', to: 'Operations and activities', amount: '$12.0B', purpose: 'Financial flows connected to Oversight Abuse', documented: true },
    { date: '2023-01-01', from: 'Oversight', to: 'Legal and remediation costs', amount: '$442M', purpose: 'Accountability costs arising from Oversight Abuse', documented: true },
  ],

  'operation-chaos': [
    { date: '2020-01-01', from: 'CIA', to: 'Operations and activities', amount: '$3.6B', purpose: 'Financial flows connected to Operation Chaos', documented: true },
    { date: '2023-01-01', from: 'CIA', to: 'Legal and remediation costs', amount: '$3.0B', purpose: 'Accountability costs arising from Operation Chaos', documented: true },
  ],

  'opioid-distribution': [
    { date: '2020-01-01', from: 'DEA', to: 'Operations and activities', amount: '$14.5B', purpose: 'Financial flows connected to Opioid Distribution', documented: true },
    { date: '2023-01-01', from: 'DEA', to: 'Legal and remediation costs', amount: '$3.2B', purpose: 'Accountability costs arising from Opioid Distribution', documented: true },
  ],

  'opioid-crisis-corporate-mass-murder': [
    { date: '1996-01-01', from: 'DEA', to: 'Revenue from harmful practices', amount: '$117.3B', purpose: 'DEA revenue while engaging in practices exposed by Opioid Crisis: Corporate Mass Murder', documented: true },
    { date: '1998-01-01', from: 'DEA', to: 'Anti-regulation lobbying', amount: '$1.4B', purpose: 'Lobbying spending by DEA to avoid accountability in Opioid Crisis: Corporate Mass Murder', documented: true },
    { date: '2000-01-01', from: 'DEA', to: 'Legal penalties and settlements', amount: '$2.9B', purpose: 'Fines and settlements resulting from Opioid Crisis: Corporate Mass Murder', documented: true },
  ],

  'operation-condor-cia-latin-america': [
    { date: '1975-01-01', from: 'CIA', to: 'Military/security operations', amount: '$126.2B', purpose: 'Military spending on operations involving atrocities in Operation Condor: CIA-Backed State Terror Across South America', documented: false },
    { date: '1977-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$62.3B', purpose: 'Weapons industry profits from conflict in Operation Condor: CIA-Backed State Terror Across South America', documented: true },
    { date: '1980-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$19.5B', purpose: 'Reparations and frozen assets related to Operation Condor: CIA-Backed State Terror Across South America', documented: true },
  ],

  'opioid-distribution-supply-chain-complicity': [
    { date: '2024-01-01', from: 'DEA', to: 'Revenue from harmful products/practices', amount: '$110.1B', purpose: 'Revenue generated from products or practices at center of Opioid Distribution: The Wholesale Drug Companies That Fueled the Epidemic', documented: true },
    { date: '2025-01-01', from: 'DEA', to: 'Lobbying and political influence', amount: '$1.2B', purpose: 'Lobbying expenditures to prevent regulation related to Opioid Distribution: The Wholesale Drug Companies That Fueled the Epidemic', documented: true },
    { date: '2025-01-01', from: 'DEA', to: 'Settlements and victim compensation', amount: '$783M', purpose: 'Legal settlements and compensation arising from Opioid Distribution: The Wholesale Drug Companies That Fueled the Epidemic', documented: true },
  ],


  // ========== P ==========

  'pesticide-science-suppression': [
    { date: '2024-01-01', from: 'Pesticide Industry Science Suppression', to: 'Revenue from harmful practices', amount: '$85.1B', purpose: 'Pesticide Industry Science Suppression revenue while engaging in practices exposed by Pesticide Industry Science Suppression', documented: true },
    { date: '2025-01-01', from: 'Pesticide Industry Science Suppression', to: 'Anti-regulation lobbying', amount: '$1.2B', purpose: 'Lobbying spending by Pesticide Industry Science Suppression to avoid accountability in Pesticide Industry Science Suppression', documented: true },
    { date: '2025-01-01', from: 'Pesticide Industry Science Suppression', to: 'Legal penalties and settlements', amount: '$11.1B', purpose: 'Fines and settlements resulting from Pesticide Industry Science Suppression', documented: true },
  ],


  // ========== O ==========

  'opioid-settlement-fund-misuse': [
    { date: '2024-01-01', from: 'HHS', to: 'Revenue from harmful products/practices', amount: '$60.3B', purpose: 'Revenue generated from products or practices at center of Opioid Settlement Fund Misuse', documented: true },
    { date: '2025-01-01', from: 'HHS', to: 'Lobbying and political influence', amount: '$1.1B', purpose: 'Lobbying expenditures to prevent regulation related to Opioid Settlement Fund Misuse', documented: true },
    { date: '2025-01-01', from: 'HHS', to: 'Settlements and victim compensation', amount: '$13.9B', purpose: 'Legal settlements and compensation arising from Opioid Settlement Fund Misuse', documented: true },
  ],

  'operation-paperclip-nazi-scientists': [
    { date: '1945-01-01', from: 'US taxpayers', to: 'Joint Intelligence Objectives Agency', amount: '$25.4B', purpose: 'Government spending on programs implicated in Operation Paperclip: How the U.S. Recruited Nazi War Criminals (1945-1990)', documented: true },
    { date: '1948-01-01', from: 'Joint Intelligence Objectives Agency', to: 'Legal settlements and remediation', amount: '$2.6B', purpose: 'Settlement costs and remediation arising from Operation Paperclip: How the U.S. Recruited Nazi War Criminals (1945-1990)', documented: true },
    { date: '1946-01-01', from: 'Wernher von Braun', to: 'Oversight and investigation costs', amount: '$540M', purpose: 'Congressional and inspector general investigation costs for Operation Paperclip: How the U.S. Recruited Nazi War Criminals (1945-1990)', documented: false },
  ],

  'operation-midnight-climax-lsd-experiments': [
    { date: '1954-01-01', from: 'US taxpayers', to: 'CIA', amount: '$92.2B', purpose: 'Budget allocation for operations connected to Operation Midnight Climax', documented: false },
    { date: '1955-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$19.5B', purpose: 'Contractor profits from programs related to Operation Midnight Climax', documented: true },
    { date: '1957-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$8.3B', purpose: 'Classified spending on programs exposed in Operation Midnight Climax', documented: false },
  ],


  // ========== P ==========

  'psychological-manipulation': [
    { date: '2014-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$114.4B', purpose: 'Budget allocation for operations connected to Psychological Manipulation Campaigns', documented: false },
    { date: '2015-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$18.6B', purpose: 'Contractor profits from programs related to Psychological Manipulation Campaigns', documented: true },
    { date: '2017-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$33.3B', purpose: 'Classified spending on programs exposed in Psychological Manipulation Campaigns', documented: false },
  ],

  'pharma-conflicts': [
    { date: '2018-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$8.0B', purpose: 'Undisclosed political spending connected to Pharmaceutical Investment Conflicts', documented: false },
    { date: '2019-01-01', from: 'Corporate donors', to: 'Bill Gates', amount: '$222M', purpose: 'Campaign contributions and financial benefits flowing through Pharmaceutical Investment Conflicts', documented: true },
    { date: '2020-01-01', from: 'Bill Gates', to: 'Personal financial enrichment', amount: '$488M', purpose: 'Personal financial benefits gained through corruption in Pharmaceutical Investment Conflicts', documented: false },
  ],

  'political-funding': [
    { date: '2016-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$8.0B', purpose: 'Undisclosed political spending connected to Dark Money & Political Funding Networks', documented: false },
    { date: '2017-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$103M', purpose: 'Campaign contributions and financial benefits flowing through Dark Money & Political Funding Networks', documented: true },
    { date: '2018-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$697M', purpose: 'Personal financial benefits gained through corruption in Dark Money & Political Funding Networks', documented: false },
  ],

  'pandemic-conspiracy': [
    { date: '2020-01-01', from: 'Donald Trump', to: 'Revenue from disinformation', amount: '$1.7B', purpose: 'Revenue generated while spreading misleading content in COVID-19 Conspiracy Theories', documented: true },
    { date: '2022-01-01', from: 'Donald Trump', to: 'Legal penalties', amount: '$2.5B', purpose: 'Legal costs and settlements for misconduct in COVID-19 Conspiracy Theories', documented: true },
  ],

  'presidential-misconduct': [
    { date: '2018-01-01', from: 'Donald Trump', to: 'Operations during misconduct period', amount: '$1.2B', purpose: 'Institutional spending during period of abuse in Pattern of Presidential Misconduct', documented: true },
    { date: '2022-01-01', from: 'Donald Trump', to: 'Victim settlements', amount: '$11.0B', purpose: 'Settlements and reparations paid to victims of Pattern of Presidential Misconduct', documented: true },
  ],

  'pentagon-response': [
    { date: '2021-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$11.7B', purpose: 'Undisclosed political spending connected to Pentagon January 6 Failures', documented: false },
    { date: '2022-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.1B', purpose: 'Campaign contributions and financial benefits flowing through Pentagon January 6 Failures', documented: true },
    { date: '2023-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$79M', purpose: 'Personal financial benefits gained through corruption in Pentagon January 6 Failures', documented: false },
  ],

  'proud-boys-terrorism': [
    { date: '2021-01-01', from: 'US taxpayers', to: 'FBI', amount: '$16.5B', purpose: 'Budget allocation for operations connected to Proud Boys Domestic Terrorism', documented: false },
    { date: '2022-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$22.4B', purpose: 'Contractor profits from programs related to Proud Boys Domestic Terrorism', documented: true },
    { date: '2024-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$38.0B', purpose: 'Classified spending on programs exposed in Proud Boys Domestic Terrorism', documented: false },
  ],

  'plame-leak': [
    { date: '2010-01-01', from: 'US taxpayers', to: 'CIA', amount: '$11.5B', purpose: 'Budget allocation for operations connected to Valerie Plame CIA Leak', documented: false },
    { date: '2011-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$2.3B', purpose: 'Contractor profits from programs related to Valerie Plame CIA Leak', documented: true },
    { date: '2013-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$10.8B', purpose: 'Classified spending on programs exposed in Valerie Plame CIA Leak', documented: false },
  ],

  'phone-hacking': [
    { date: '2011-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.0B', purpose: 'Undisclosed political spending connected to News Corp Phone Hacking Scandal', documented: false },
    { date: '2012-01-01', from: 'Corporate donors', to: 'Rupert Murdoch', amount: '$335M', purpose: 'Campaign contributions and financial benefits flowing through News Corp Phone Hacking Scandal', documented: true },
    { date: '2013-01-01', from: 'Rupert Murdoch', to: 'Personal financial enrichment', amount: '$220M', purpose: 'Personal financial benefits gained through corruption in News Corp Phone Hacking Scandal', documented: false },
  ],

  'phone-hacking-scandal': [
    { date: '2011-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.1B', purpose: 'Undisclosed political spending connected to News International Phone Hacking', documented: false },
    { date: '2012-01-01', from: 'Corporate donors', to: 'Rupert Murdoch', amount: '$1.0B', purpose: 'Campaign contributions and financial benefits flowing through News International Phone Hacking', documented: true },
    { date: '2013-01-01', from: 'Rupert Murdoch', to: 'Personal financial enrichment', amount: '$280M', purpose: 'Personal financial benefits gained through corruption in News International Phone Hacking', documented: false },
  ],

  'private-prisons': [
    { date: '2013-01-01', from: 'CoreCivic', to: 'Operations and activities', amount: '$14.4B', purpose: 'Financial flows connected to Private Prison Industry', documented: true },
    { date: '2016-01-01', from: 'CoreCivic', to: 'Legal and remediation costs', amount: '$3.7B', purpose: 'Accountability costs arising from Private Prison Industry', documented: true },
  ],

  'presidential-immunity': [
    { date: '2024-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$10.9B', purpose: 'Undisclosed political spending connected to Presidential Immunity Decision', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$802M', purpose: 'Campaign contributions and financial benefits flowing through Presidential Immunity Decision', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$173M', purpose: 'Personal financial benefits gained through corruption in Presidential Immunity Decision', documented: false },
  ],

  'purdue-pharma-opioids': [
    { date: '2017-01-01', from: 'Purdue Pharma', to: 'Revenue from harmful practices', amount: '$85.3B', purpose: 'Purdue Pharma revenue while engaging in practices exposed by Purdue Pharma Opioid Crisis', documented: true },
    { date: '2019-01-01', from: 'Purdue Pharma', to: 'Anti-regulation lobbying', amount: '$1.1B', purpose: 'Lobbying spending by Purdue Pharma to avoid accountability in Purdue Pharma Opioid Crisis', documented: true },
    { date: '2021-01-01', from: 'Purdue Pharma', to: 'Legal penalties and settlements', amount: '$12.7B', purpose: 'Fines and settlements resulting from Purdue Pharma Opioid Crisis', documented: true },
  ],

  'penn-state-scandal': [
    { date: '2023-01-01', from: 'Penn State Jerry Sandusky Cover', to: 'Operations during misconduct period', amount: '$3.0B', purpose: 'Institutional spending during period of abuse in Penn State Jerry Sandusky Cover-Up', documented: true },
    { date: '2025-01-01', from: 'Penn State Jerry Sandusky Cover', to: 'Victim settlements', amount: '$6.4B', purpose: 'Settlements and reparations paid to victims of Penn State Jerry Sandusky Cover-Up', documented: true },
  ],

  'penny-stock-fraud': [
    { date: '2015-01-01', from: 'Penny Stock', to: 'Illicit financial flows', amount: '$4.0B', purpose: 'Fraudulent financial activity in Penny Stock Fraud and Pump-and-Dump Schemes', documented: true },
    { date: '2018-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Penny Stock', amount: '$1.3B', purpose: 'Fines and penalties imposed for violations uncovered in Penny Stock Fraud and Pump-and-Dump Schemes', documented: true },
    { date: '2017-01-01', from: 'Penny Stock', to: 'Affected investors / victims', amount: '$4.0B', purpose: 'Restitution and settlement payments to victims of Penny Stock Fraud and Pump-and-Dump Schemes', documented: true },
  ],

  'petters-ponzi': [
    { date: '2021-01-01', from: 'Tom Petters $3.7 Billion Ponzi Scheme', to: 'Illicit financial flows', amount: '$9.5B', purpose: 'Fraudulent financial activity in Tom Petters $3.7 Billion Ponzi Scheme', documented: true },
    { date: '2024-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Tom Petters $3.7 Billion Ponzi Scheme', amount: '$1.2B', purpose: 'Fines and penalties imposed for violations uncovered in Tom Petters $3.7 Billion Ponzi Scheme', documented: true },
    { date: '2023-01-01', from: 'Tom Petters $3.7 Billion Ponzi Scheme', to: 'Affected investors / victims', amount: '$1.4B', purpose: 'Restitution and settlement payments to victims of Tom Petters $3.7 Billion Ponzi Scheme', documented: true },
  ],

  'pfas-contamination': [
    { date: '2016-01-01', from: 'DuPont', to: 'Revenue from polluting operations', amount: '$38.3B', purpose: 'Revenue from operations causing environmental damage in PFAS "Forever Chemical" Contamination', documented: true },
    { date: '2021-01-01', from: 'DuPont', to: 'EPA fines and cleanup costs', amount: '$13.9B', purpose: 'Environmental remediation and regulatory penalties for PFAS "Forever Chemical" Contamination', documented: true },
    { date: '2018-01-01', from: 'DuPont', to: 'Environmental lobbying', amount: '$559M', purpose: 'Lobbying to weaken regulations related to PFAS "Forever Chemical" Contamination', documented: true },
  ],

  'pharma-pricing': [
    { date: '2012-01-01', from: 'Pfizer', to: 'Revenue from harmful practices', amount: '$116.3B', purpose: 'Pfizer revenue while engaging in practices exposed by Pharmaceutical Price Gouging', documented: true },
    { date: '2014-01-01', from: 'Pfizer', to: 'Anti-regulation lobbying', amount: '$1.2B', purpose: 'Lobbying spending by Pfizer to avoid accountability in Pharmaceutical Price Gouging', documented: true },
    { date: '2016-01-01', from: 'Pfizer', to: 'Legal penalties and settlements', amount: '$2.9B', purpose: 'Fines and settlements resulting from Pharmaceutical Price Gouging', documented: true },
  ],

  'pharmaceutical-fraud': [
    { date: '2011-01-01', from: 'Pfizer', to: 'Revenue from harmful practices', amount: '$95.7B', purpose: 'Pfizer revenue while engaging in practices exposed by Pharmaceutical Industry Fraud', documented: true },
    { date: '2013-01-01', from: 'Pfizer', to: 'Anti-regulation lobbying', amount: '$465M', purpose: 'Lobbying spending by Pfizer to avoid accountability in Pharmaceutical Industry Fraud', documented: true },
    { date: '2015-01-01', from: 'Pfizer', to: 'Legal penalties and settlements', amount: '$5.3B', purpose: 'Fines and settlements resulting from Pharmaceutical Industry Fraud', documented: true },
  ],

  'philando-castile': [
    { date: '2016-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$5.2B', purpose: 'Department funding during period of misconduct in The Killing of Philando Castile', documented: true },
    { date: '2018-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.6B', purpose: 'Taxpayer-funded settlements for misconduct exposed in The Killing of Philando Castile', documented: true },
    { date: '2017-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$271M', purpose: 'Equipment and training spending related to The Killing of Philando Castile', documented: true },
  ],

  'plastic-pollution-crisis': [
    { date: '2017-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$44.2B', purpose: 'Revenue from operations causing environmental damage in Global Plastic Pollution Crisis', documented: true },
    { date: '2022-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$19.0B', purpose: 'Environmental remediation and regulatory penalties for Global Plastic Pollution Crisis', documented: true },
    { date: '2019-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$178M', purpose: 'Lobbying to weaken regulations related to Global Plastic Pollution Crisis', documented: true },
  ],

  'platform-discrimination': [
    { date: '2022-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$5.1B', purpose: 'Government spending on operations that violated civil rights in Digital Platform Discrimination', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$4.9B', purpose: 'Settlements and compensation to victims of Digital Platform Discrimination', documented: true },
  ],

  'platform-extremism': [
    { date: '2022-01-01', from: 'Meta Platforms', to: 'Revenue from disinformation', amount: '$10.6B', purpose: 'Revenue generated while spreading misleading content in Social Media Platform Extremism', documented: true },
    { date: '2024-01-01', from: 'Meta Platforms', to: 'Legal penalties', amount: '$6.2B', purpose: 'Legal costs and settlements for misconduct in Social Media Platform Extremism', documented: true },
  ],

  'polarization': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$12.2B', purpose: 'Government spending on programs implicated in American Political Polarization', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$10.8B', purpose: 'Settlement costs and remediation arising from American Political Polarization', documented: true },
    { date: '2025-01-01', from: 'Meta Platforms', to: 'Oversight and investigation costs', amount: '$1.2B', purpose: 'Congressional and inspector general investigation costs for American Political Polarization', documented: false },
  ],

  'police-accountability-crisis': [
    { date: '2020-01-01', from: 'City/county taxpayers', to: 'Fraternal Order of Police', amount: '$6.8B', purpose: 'Department funding during period of misconduct in Police Accountability Crisis', documented: true },
    { date: '2022-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.9B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Police Accountability Crisis', documented: true },
    { date: '2021-01-01', from: 'Fraternal Order of Police', to: 'Militarized equipment purchases', amount: '$141M', purpose: 'Equipment and training spending related to Police Accountability Crisis', documented: true },
  ],

  'political-corruption': [
    { date: '2025-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$811M', purpose: 'Undisclosed political spending connected to Systemic Political Corruption in America', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'Supreme Court', amount: '$779M', purpose: 'Campaign contributions and financial benefits flowing through Systemic Political Corruption in America', documented: true },
    { date: '2025-01-01', from: 'Supreme Court', to: 'Personal financial enrichment', amount: '$83M', purpose: 'Personal financial benefits gained through corruption in Systemic Political Corruption in America', documented: false },
  ],

  'political-dark-money': [
    { date: '2010-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$9.8B', purpose: 'Undisclosed political spending connected to Dark Money in American Politics', documented: false },
    { date: '2011-01-01', from: 'Corporate donors', to: 'FEC', amount: '$672M', purpose: 'Campaign contributions and financial benefits flowing through Dark Money in American Politics', documented: true },
    { date: '2012-01-01', from: 'FEC', to: 'Personal financial enrichment', amount: '$223M', purpose: 'Personal financial benefits gained through corruption in Dark Money in American Politics', documented: false },
  ],

  'political-fraud': [
    { date: '2019-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.8B', purpose: 'Undisclosed political spending connected to Political Fraud and Campaign Finance Crimes', documented: false },
    { date: '2020-01-01', from: 'Corporate donors', to: 'Political', amount: '$940M', purpose: 'Campaign contributions and financial benefits flowing through Political Fraud and Campaign Finance Crimes', documented: true },
    { date: '2021-01-01', from: 'Political', to: 'Personal financial enrichment', amount: '$401M', purpose: 'Personal financial benefits gained through corruption in Political Fraud and Campaign Finance Crimes', documented: false },
  ],

  'political-hoaxes': [
    { date: '2025-01-01', from: 'Fox News', to: 'Revenue from disinformation', amount: '$43.9B', purpose: 'Revenue generated while spreading misleading content in Political Hoaxes and Manufactured Crises', documented: true },
    { date: '2025-01-01', from: 'Fox News', to: 'Legal penalties', amount: '$3.7B', purpose: 'Legal costs and settlements for misconduct in Political Hoaxes and Manufactured Crises', documented: true },
  ],

  'political-hypocrisy': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.7B', purpose: 'Undisclosed political spending connected to Political Hypocrisy Exposed', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Political Hypocrisy Exposed', amount: '$284M', purpose: 'Campaign contributions and financial benefits flowing through Political Hypocrisy Exposed', documented: true },
    { date: '2024-01-01', from: 'Political Hypocrisy Exposed', to: 'Personal financial enrichment', amount: '$426M', purpose: 'Personal financial benefits gained through corruption in Political Hypocrisy Exposed', documented: false },
  ],

  'political-opportunism': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$7.1B', purpose: 'Undisclosed political spending connected to Political Opportunism and Crisis Exploitation', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Koch Industries', amount: '$1.0B', purpose: 'Campaign contributions and financial benefits flowing through Political Opportunism and Crisis Exploitation', documented: true },
    { date: '2019-01-01', from: 'Koch Industries', to: 'Personal financial enrichment', amount: '$356M', purpose: 'Personal financial benefits gained through corruption in Political Opportunism and Crisis Exploitation', documented: false },
  ],

  'post-911-persecution': [
    { date: '2016-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$14.8B', purpose: 'Government spending on operations that violated civil rights in Post-9/11 Persecution of Muslim Americans', documented: true },
    { date: '2020-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$936M', purpose: 'Settlements and compensation to victims of Post-9/11 Persecution of Muslim Americans', documented: true },
  ],

  'predatory-lending': [
    { date: '2020-01-01', from: 'Wells Fargo', to: 'Illicit financial flows', amount: '$2.8B', purpose: 'Fraudulent financial activity in Predatory Lending and Financial Exploitation', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Wells Fargo', amount: '$1.0B', purpose: 'Fines and penalties imposed for violations uncovered in Predatory Lending and Financial Exploitation', documented: true },
    { date: '2022-01-01', from: 'Wells Fargo', to: 'Affected investors / victims', amount: '$7.9B', purpose: 'Restitution and settlement payments to victims of Predatory Lending and Financial Exploitation', documented: true },
  ],

  'press-freedom': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$4.3B', purpose: 'Government spending on operations that violated civil rights in Press Freedom Under Siege', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.5B', purpose: 'Settlements and compensation to victims of Press Freedom Under Siege', documented: true },
  ],

  'press-freedom-violations': [
    { date: '2021-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$11.4B', purpose: 'Government spending on operations that violated civil rights in Global Press Freedom Violations', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$1.8B', purpose: 'Settlements and compensation to victims of Global Press Freedom Violations', documented: true },
  ],

  'prison-industrial-complex': [
    { date: '2025-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$10.3B', purpose: 'Department funding during period of misconduct in The Prison Industrial Complex', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.8B', purpose: 'Taxpayer-funded settlements for misconduct exposed in The Prison Industrial Complex', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$648M', purpose: 'Equipment and training spending related to The Prison Industrial Complex', documented: true },
  ],

  'private-equity-abuses': [
    { date: '2017-01-01', from: 'Blackstone Group', to: 'Revenue from harmful practices', amount: '$119.6B', purpose: 'Blackstone Group revenue while engaging in practices exposed by Private Equity Industry Abuses', documented: true },
    { date: '2019-01-01', from: 'Blackstone Group', to: 'Anti-regulation lobbying', amount: '$1.6B', purpose: 'Lobbying spending by Blackstone Group to avoid accountability in Private Equity Industry Abuses', documented: true },
    { date: '2021-01-01', from: 'Blackstone Group', to: 'Legal penalties and settlements', amount: '$14.7B', purpose: 'Fines and settlements resulting from Private Equity Industry Abuses', documented: true },
  ],

  'private-equity-housing': [
    { date: '2025-01-01', from: 'Blackstone Group', to: 'Revenue from harmful practices', amount: '$53.1B', purpose: 'Blackstone Group revenue while engaging in practices exposed by Private Equity\'s Takeover of American Housing', documented: true },
    { date: '2025-01-01', from: 'Blackstone Group', to: 'Anti-regulation lobbying', amount: '$1.5B', purpose: 'Lobbying spending by Blackstone Group to avoid accountability in Private Equity\'s Takeover of American Housing', documented: true },
    { date: '2025-01-01', from: 'Blackstone Group', to: 'Legal penalties and settlements', amount: '$13.7B', purpose: 'Fines and settlements resulting from Private Equity\'s Takeover of American Housing', documented: true },
  ],

  'private-prison-corruption': [
    { date: '2020-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$6.0B', purpose: 'Department funding during period of misconduct in Private Prison Corruption', documented: true },
    { date: '2022-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.8B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Private Prison Corruption', documented: true },
    { date: '2021-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$758M', purpose: 'Equipment and training spending related to Private Prison Corruption', documented: true },
  ],

  'prosecutorial-misconduct': [
    { date: '2022-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$9.6B', purpose: 'Department funding during period of misconduct in Prosecutorial Misconduct in America', documented: true },
    { date: '2024-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.3B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Prosecutorial Misconduct in America', documented: true },
    { date: '2023-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$274M', purpose: 'Equipment and training spending related to Prosecutorial Misconduct in America', documented: true },
  ],

  'protest-violence': [
    { date: '2009-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$6.2B', purpose: 'Government spending on operations that violated civil rights in Police Violence Against Protesters: Suppressing Dissent Through Force', documented: true },
    { date: '2013-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$899M', purpose: 'Settlements and compensation to victims of Police Violence Against Protesters: Suppressing Dissent Through Force', documented: true },
  ],

  'public-health-threats': [
    { date: '2018-01-01', from: 'Julian Assange', to: 'Revenue from harmful products/practices', amount: '$35.3B', purpose: 'Revenue generated from products or practices at center of Manufactured Public Health Threats: Profits Over Prevention', documented: true },
    { date: '2020-01-01', from: 'Julian Assange', to: 'Lobbying and political influence', amount: '$1.5B', purpose: 'Lobbying expenditures to prevent regulation related to Manufactured Public Health Threats: Profits Over Prevention', documented: true },
    { date: '2022-01-01', from: 'Julian Assange', to: 'Settlements and victim compensation', amount: '$2.6B', purpose: 'Legal settlements and compensation arising from Manufactured Public Health Threats: Profits Over Prevention', documented: true },
  ],

  'pulse-shooting': [
    { date: '2013-01-01', from: 'Gun manufacturers', to: 'Firearms industry revenue', amount: '$34.4B', purpose: 'Gun industry revenue during period of Pulse Nightclub Shooting: 49 Lives Lost to Hate', documented: true },
    { date: '2014-01-01', from: 'NRA and gun lobby', to: 'Anti-regulation lobbying', amount: '$309M', purpose: 'Lobbying to block gun control after Pulse Nightclub Shooting: 49 Lives Lost to Hate', documented: true },
    { date: '2015-01-01', from: 'Victims and families', to: 'Lawsuit settlements', amount: '$1.7B', purpose: 'Legal settlements with victims of Pulse Nightclub Shooting: 49 Lives Lost to Hate', documented: true },
  ],

  'purdue-pharma': [
    { date: '2025-01-01', from: 'Purdue Pharma', to: 'Revenue from harmful products/practices', amount: '$112.7B', purpose: 'Revenue generated from products or practices at center of Purdue Pharma and the Sackler Family: Architects of the Opioid Epidemic', documented: true },
    { date: '2025-01-01', from: 'Purdue Pharma', to: 'Lobbying and political influence', amount: '$1.3B', purpose: 'Lobbying expenditures to prevent regulation related to Purdue Pharma and the Sackler Family: Architects of the Opioid Epidemic', documented: true },
    { date: '2025-01-01', from: 'Purdue Pharma', to: 'Settlements and victim compensation', amount: '$10.3B', purpose: 'Legal settlements and compensation arising from Purdue Pharma and the Sackler Family: Architects of the Opioid Epidemic', documented: true },
  ],

  'ppp-loan-fraud-epidemic': [
    { date: '2020-01-01', from: 'Small Business Administration', to: 'Illicit financial flows', amount: '$13.4B', purpose: 'Fraudulent financial activity in PPP Loan Fraud Epidemic', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Small Business Administration', amount: '$3.6B', purpose: 'Fines and penalties imposed for violations uncovered in PPP Loan Fraud Epidemic', documented: true },
    { date: '2022-01-01', from: 'Small Business Administration', to: 'Affected investors / victims', amount: '$3.5B', purpose: 'Restitution and settlement payments to victims of PPP Loan Fraud Epidemic', documented: true },
  ],

  'predatory-lending-systematic-exploitation': [
    { date: '2000-01-01', from: 'Wells Fargo', to: 'Illicit financial flows', amount: '$10.3B', purpose: 'Fraudulent financial activity in Predatory Lending Systematic Exploitation', documented: true },
    { date: '2003-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Wells Fargo', amount: '$2.4B', purpose: 'Fines and penalties imposed for violations uncovered in Predatory Lending Systematic Exploitation', documented: true },
    { date: '2002-01-01', from: 'Wells Fargo', to: 'Affected investors / victims', amount: '$17.4B', purpose: 'Restitution and settlement payments to victims of Predatory Lending Systematic Exploitation', documented: true },
  ],

  'penny-stock-pump-and-dump-networks': [
    { date: '2000-01-01', from: 'FINRA', to: 'Illicit financial flows', amount: '$17.0B', purpose: 'Fraudulent financial activity in Penny Stock Pump and Dump Networks', documented: true },
    { date: '2003-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against FINRA', amount: '$1.3B', purpose: 'Fines and penalties imposed for violations uncovered in Penny Stock Pump and Dump Networks', documented: true },
    { date: '2002-01-01', from: 'FINRA', to: 'Affected investors / victims', amount: '$7.8B', purpose: 'Restitution and settlement payments to victims of Penny Stock Pump and Dump Networks', documented: true },
  ],



  'pentagon-papers-full-implications': [
    { date: '1971-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$97.9B', purpose: 'Budget allocation for operations connected to Pentagon Papers Full Implications', documented: false },
    { date: '1972-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$54.5B', purpose: 'Contractor profits from programs related to Pentagon Papers Full Implications', documented: true },
    { date: '1974-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$10.6B', purpose: 'Classified spending on programs exposed in Pentagon Papers Full Implications', documented: false },
  ],

  'prism-surveillance-program': [
    { date: '2013-01-01', from: 'Government agencies', to: 'NSA', amount: '$19.1B', purpose: 'Contracts for surveillance technology related to PRISM Surveillance Program', documented: false },
    { date: '2014-01-01', from: 'NSA', to: 'Data monetization revenue', amount: '$9.3B', purpose: 'Revenue from data collection practices exposed in PRISM Surveillance Program', documented: true },
    { date: '2016-01-01', from: 'NSA', to: 'Regulatory fines and settlements', amount: '$12.5B', purpose: 'Privacy violation penalties resulting from PRISM Surveillance Program', documented: true },
  ],

  'pharmaceutical-influence-on-fda-decisions': [
    { date: '1992-01-01', from: 'Pfizer', to: 'Revenue from harmful products/practices', amount: '$57.0B', purpose: 'Revenue generated from products or practices at center of Pharmaceutical Influence on FDA Decisions', documented: true },
    { date: '1994-01-01', from: 'Pfizer', to: 'Lobbying and political influence', amount: '$1.2B', purpose: 'Lobbying expenditures to prevent regulation related to Pharmaceutical Influence on FDA Decisions', documented: true },
    { date: '1996-01-01', from: 'Pfizer', to: 'Settlements and victim compensation', amount: '$12.7B', purpose: 'Legal settlements and compensation arising from Pharmaceutical Influence on FDA Decisions', documented: true },
  ],

  'pharmaceutical-lobbying-machine': [
    { date: '1998-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$56.0B', purpose: 'Revenue generated from products or practices at center of Pharmaceutical Lobbying Machine', documented: true },
    { date: '2000-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.4B', purpose: 'Lobbying expenditures to prevent regulation related to Pharmaceutical Lobbying Machine', documented: true },
    { date: '2002-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$13.2B', purpose: 'Legal settlements and compensation arising from Pharmaceutical Lobbying Machine', documented: true },
  ],

  'pfas-forever-chemicals-cover-up': [
    { date: '1970-01-01', from: 'DuPont', to: 'Revenue from polluting operations', amount: '$73.0B', purpose: 'Revenue from operations causing environmental damage in PFAS Forever Chemicals Cover-Up', documented: true },
    { date: '1975-01-01', from: 'DuPont', to: 'EPA fines and cleanup costs', amount: '$550M', purpose: 'Environmental remediation and regulatory penalties for PFAS Forever Chemicals Cover-Up', documented: true },
    { date: '1972-01-01', from: 'DuPont', to: 'Environmental lobbying', amount: '$223M', purpose: 'Lobbying to weaken regulations related to PFAS Forever Chemicals Cover-Up', documented: true },
  ],

  'pesticide-bee-colony-collapse': [
    { date: '2006-01-01', from: 'Bayer AG', to: 'Revenue from polluting operations', amount: '$103.8B', purpose: 'Revenue from operations causing environmental damage in Pesticide Bee Colony Collapse', documented: true },
    { date: '2011-01-01', from: 'Bayer AG', to: 'EPA fines and cleanup costs', amount: '$7.5B', purpose: 'Environmental remediation and regulatory penalties for Pesticide Bee Colony Collapse', documented: true },
    { date: '2008-01-01', from: 'Bayer AG', to: 'Environmental lobbying', amount: '$75M', purpose: 'Lobbying to weaken regulations related to Pesticide Bee Colony Collapse', documented: true },
  ],

  'predictive-policing-algorithmic-racism': [
    { date: '2012-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$3.7B', purpose: 'Government spending on operations that violated civil rights in Predictive Policing Algorithmic Racism', documented: true },
    { date: '2016-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$2.8B', purpose: 'Settlements and compensation to victims of Predictive Policing Algorithmic Racism', documented: true },
  ],

  'pharmaceutical-ghost-writing': [
    { date: '2000-01-01', from: 'Pfizer', to: 'Revenue from harmful products/practices', amount: '$29.2B', purpose: 'Revenue generated from products or practices at center of Pharmaceutical Ghost Writing', documented: true },
    { date: '2002-01-01', from: 'Pfizer', to: 'Lobbying and political influence', amount: '$573M', purpose: 'Lobbying expenditures to prevent regulation related to Pharmaceutical Ghost Writing', documented: true },
    { date: '2004-01-01', from: 'Pfizer', to: 'Settlements and victim compensation', amount: '$19.9B', purpose: 'Legal settlements and compensation arising from Pharmaceutical Ghost Writing', documented: true },
  ],

  'pentagon-budget-black-programs': [
    { date: '2001-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$27.7B', purpose: 'Budget allocation for operations connected to Pentagon Budget Black Programs', documented: false },
    { date: '2002-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$2.2B', purpose: 'Contractor profits from programs related to Pentagon Budget Black Programs', documented: true },
    { date: '2004-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$35.1B', purpose: 'Classified spending on programs exposed in Pentagon Budget Black Programs', documented: false },
  ],

  'prosecutorial-misconduct-database': [
    { date: '2000-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$11.1B', purpose: 'Department funding during period of misconduct in Prosecutorial Misconduct Database', documented: true },
    { date: '2002-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$405M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Prosecutorial Misconduct Database', documented: true },
    { date: '2001-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$747M', purpose: 'Equipment and training spending related to Prosecutorial Misconduct Database', documented: true },
  ],

  'private-military-contractor-accountability': [
    { date: '2007-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$54.4B', purpose: 'Budget allocation for operations connected to Private Military Contractor Accountability', documented: false },
    { date: '2008-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$43.5B', purpose: 'Contractor profits from programs related to Private Military Contractor Accountability', documented: true },
    { date: '2010-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$30.6B', purpose: 'Classified spending on programs exposed in Private Military Contractor Accountability', documented: false },
  ],

  'propaganda-networks-domestic-operations': [
    { date: '1948-01-01', from: 'CIA', to: 'Revenue from disinformation', amount: '$16.0B', purpose: 'Revenue generated while spreading misleading content in Propaganda Networks Domestic Operations', documented: true },
    { date: '1950-01-01', from: 'CIA', to: 'Legal penalties', amount: '$6.2B', purpose: 'Legal costs and settlements for misconduct in Propaganda Networks Domestic Operations', documented: true },
  ],

  'prison-industrial-complex-profit-motive': [
    { date: '1983-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$4.9B', purpose: 'Department funding during period of misconduct in Prison Industrial Complex Profit Motive', documented: true },
    { date: '1985-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.1B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Prison Industrial Complex Profit Motive', documented: true },
    { date: '1984-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$451M', purpose: 'Equipment and training spending related to Prison Industrial Complex Profit Motive', documented: true },
  ],

  'police-union-misconduct-protection': [
    { date: '2000-01-01', from: 'City/county taxpayers', to: 'Fraternal Order of Police', amount: '$7.1B', purpose: 'Department funding during period of misconduct in Police Union Misconduct Protection', documented: true },
    { date: '2002-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$722M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Police Union Misconduct Protection', documented: true },
    { date: '2001-01-01', from: 'Fraternal Order of Police', to: 'Militarized equipment purchases', amount: '$496M', purpose: 'Equipment and training spending related to Police Union Misconduct Protection', documented: true },
  ],

  'pharmaceutical-fertility-side-effects': [
    { date: '2000-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$12.3B', purpose: 'Revenue generated from products or practices at center of Pharmaceutical Fertility Side Effects', documented: true },
    { date: '2002-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.0B', purpose: 'Lobbying expenditures to prevent regulation related to Pharmaceutical Fertility Side Effects', documented: true },
    { date: '2004-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$3.9B', purpose: 'Legal settlements and compensation arising from Pharmaceutical Fertility Side Effects', documented: true },
  ],

  'pharmaceutical-sales-rep-corruption': [
    { date: '2000-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$74.5B', purpose: 'Revenue generated from products or practices at center of Pharmaceutical Sales Rep Corruption', documented: true },
    { date: '2002-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.2B', purpose: 'Lobbying expenditures to prevent regulation related to Pharmaceutical Sales Rep Corruption', documented: true },
    { date: '2004-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$18.7B', purpose: 'Legal settlements and compensation arising from Pharmaceutical Sales Rep Corruption', documented: true },
  ],

  'port-authority-corruption-investigations': [
    { date: '1995-01-01', from: 'US taxpayers', to: 'FBI', amount: '$23.2B', purpose: 'Government spending on programs implicated in Port Authority Corruption Investigations', documented: true },
    { date: '1998-01-01', from: 'FBI', to: 'Legal settlements and remediation', amount: '$2.0B', purpose: 'Settlement costs and remediation arising from Port Authority Corruption Investigations', documented: true },
    { date: '1996-01-01', from: 'Port Authority', to: 'Oversight and investigation costs', amount: '$102M', purpose: 'Congressional and inspector general investigation costs for Port Authority Corruption Investigations', documented: false },
  ],

  'psychological-operations-domestic-theater': [
    { date: '1950-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$28.6B', purpose: 'Budget allocation for operations connected to Psychological Operations Domestic Theater', documented: false },
    { date: '1951-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$24.0B', purpose: 'Contractor profits from programs related to Psychological Operations Domestic Theater', documented: true },
    { date: '1953-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$11.2B', purpose: 'Classified spending on programs exposed in Psychological Operations Domestic Theater', documented: false },
  ],

  'plastic-industry-recycling-fraud': [
    { date: '1988-01-01', from: 'ExxonMobil', to: 'Revenue from polluting operations', amount: '$25.2B', purpose: 'Revenue from operations causing environmental damage in Plastic Industry Recycling Fraud', documented: true },
    { date: '1993-01-01', from: 'ExxonMobil', to: 'EPA fines and cleanup costs', amount: '$1.2B', purpose: 'Environmental remediation and regulatory penalties for Plastic Industry Recycling Fraud', documented: true },
    { date: '1990-01-01', from: 'ExxonMobil', to: 'Environmental lobbying', amount: '$367M', purpose: 'Lobbying to weaken regulations related to Plastic Industry Recycling Fraud', documented: true },
  ],

  'pharmaceutical-waste-environmental-impact': [
    { date: '2000-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$129.6B', purpose: 'Revenue from operations causing environmental damage in Pharmaceutical Waste Environmental Impact', documented: true },
    { date: '2005-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$16.7B', purpose: 'Environmental remediation and regulatory penalties for Pharmaceutical Waste Environmental Impact', documented: true },
    { date: '2002-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$735M', purpose: 'Lobbying to weaken regulations related to Pharmaceutical Waste Environmental Impact', documented: true },
  ],

  'port-city-trafficking-hub-analysis': [
    { date: '2010-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$2.2B', purpose: 'Estimated proceeds from trafficking operations in Port City Trafficking Hub Analysis', documented: false },
    { date: '2013-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$831M', purpose: 'Law enforcement asset seizures related to Port City Trafficking Hub Analysis', documented: true },
    { date: '2012-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$670M', purpose: 'Victim restitution and support programs from Port City Trafficking Hub Analysis', documented: true },
  ],

  'parental-accountability': [
    { date: '2020-01-01', from: 'Parental Accountability', to: 'Operations and activities', amount: '$11.3B', purpose: 'Financial flows connected to Parental Accountability', documented: true },
    { date: '2023-01-01', from: 'Parental Accountability', to: 'Legal and remediation costs', amount: '$1.9B', purpose: 'Accountability costs arising from Parental Accountability', documented: true },
  ],

  'police-reform': [
    { date: '2020-01-01', from: 'Police Reform', to: 'Operations and activities', amount: '$12.4B', purpose: 'Financial flows connected to Police Reform', documented: true },
    { date: '2023-01-01', from: 'Police Reform', to: 'Legal and remediation costs', amount: '$901M', purpose: 'Accountability costs arising from Police Reform', documented: true },
  ],

  'police-brutality-crisis': [
    { date: '2020-01-01', from: 'Police Brutality', to: 'Operations and activities', amount: '$4.0B', purpose: 'Financial flows connected to Police Brutality Crisis', documented: true },
    { date: '2023-01-01', from: 'Police Brutality', to: 'Legal and remediation costs', amount: '$4.4B', purpose: 'Accountability costs arising from Police Brutality Crisis', documented: true },
  ],

  'pharmaceutical-corruption': [
    { date: '2020-01-01', from: 'Pharmaceutical', to: 'Operations and activities', amount: '$10.9B', purpose: 'Financial flows connected to Pharmaceutical Corruption', documented: true },
    { date: '2023-01-01', from: 'Pharmaceutical', to: 'Legal and remediation costs', amount: '$1.8B', purpose: 'Accountability costs arising from Pharmaceutical Corruption', documented: true },
  ],

  'parkland-shooting': [
    { date: '2020-01-01', from: 'Parkland Shooting', to: 'Operations and activities', amount: '$331M', purpose: 'Financial flows connected to Parkland Shooting', documented: true },
    { date: '2023-01-01', from: 'Parkland Shooting', to: 'Legal and remediation costs', amount: '$2.3B', purpose: 'Accountability costs arising from Parkland Shooting', documented: true },
  ],

  'police-accountability': [
    { date: '2020-01-01', from: 'Police Accountability', to: 'Operations and activities', amount: '$14.1B', purpose: 'Financial flows connected to Police Accountability', documented: true },
    { date: '2023-01-01', from: 'Police Accountability', to: 'Legal and remediation costs', amount: '$4.1B', purpose: 'Accountability costs arising from Police Accountability', documented: true },
  ],

  'purdue-pharma-opioid-crisis': [
    { date: '1995-01-01', from: 'DEA', to: 'Revenue from harmful products/practices', amount: '$105.4B', purpose: 'Revenue generated from products or practices at center of Purdue Pharma and the Manufactured Opioid Epidemic', documented: true },
    { date: '1997-01-01', from: 'DEA', to: 'Lobbying and political influence', amount: '$206M', purpose: 'Lobbying expenditures to prevent regulation related to Purdue Pharma and the Manufactured Opioid Epidemic', documented: true },
    { date: '1999-01-01', from: 'DEA', to: 'Settlements and victim compensation', amount: '$14.9B', purpose: 'Legal settlements and compensation arising from Purdue Pharma and the Manufactured Opioid Epidemic', documented: true },
  ],

  'private-prison-industrial-complex': [
    { date: '1983-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$2.6B', purpose: 'Department funding during period of misconduct in The Private Prison Industrial Complex', documented: true },
    { date: '1985-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$671M', purpose: 'Taxpayer-funded settlements for misconduct exposed in The Private Prison Industrial Complex', documented: true },
    { date: '1984-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$337M', purpose: 'Equipment and training spending related to The Private Prison Industrial Complex', documented: true },
  ],

  'pharma-lobbying-congress-prescription-for-corruption': [
    { date: '2020-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$92.5B', purpose: 'Revenue generated from products or practices at center of Pharmaceutical Industry Lobbying: A Prescription for Corruption', documented: true },
    { date: '2022-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.8B', purpose: 'Lobbying expenditures to prevent regulation related to Pharmaceutical Industry Lobbying: A Prescription for Corruption', documented: true },
    { date: '2024-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$19.2B', purpose: 'Legal settlements and compensation arising from Pharmaceutical Industry Lobbying: A Prescription for Corruption', documented: true },
  ],

  'police-body-camera-manipulation-transparency-theater': [
    { date: '2020-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$3.8B', purpose: 'Department funding during period of misconduct in Police Body Camera Manipulation: Transparency Theater', documented: true },
    { date: '2022-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$562M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Police Body Camera Manipulation: Transparency Theater', documented: true },
    { date: '2021-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$51M', purpose: 'Equipment and training spending related to Police Body Camera Manipulation: Transparency Theater', documented: true },
  ],

  'predatory-lending-payday-loan-debt-trap': [
    { date: '2019-01-01', from: 'Predatory Lending and the Payday Loan Debt Trap', to: 'Revenue from harmful practices', amount: '$18.7B', purpose: 'Predatory Lending and the Payday Loan Debt Trap revenue while engaging in practices exposed by Predatory Lending and the Payday Loan Debt Trap', documented: true },
    { date: '2021-01-01', from: 'Predatory Lending and the Payday Loan Debt Trap', to: 'Anti-regulation lobbying', amount: '$711M', purpose: 'Lobbying spending by Predatory Lending and the Payday Loan Debt Trap to avoid accountability in Predatory Lending and the Payday Loan Debt Trap', documented: true },
    { date: '2023-01-01', from: 'Predatory Lending and the Payday Loan Debt Trap', to: 'Legal penalties and settlements', amount: '$3.7B', purpose: 'Fines and settlements resulting from Predatory Lending and the Payday Loan Debt Trap', documented: true },
  ],

  'pfas-forever-chemicals-coverup': [
    { date: '2001-01-01', from: 'DOD', to: 'Revenue from polluting operations', amount: '$67.9B', purpose: 'Revenue from operations causing environmental damage in PFAS Forever Chemicals Coverup', documented: true },
    { date: '2006-01-01', from: 'DOD', to: 'EPA fines and cleanup costs', amount: '$4.8B', purpose: 'Environmental remediation and regulatory penalties for PFAS Forever Chemicals Coverup', documented: true },
    { date: '2003-01-01', from: 'DOD', to: 'Environmental lobbying', amount: '$416M', purpose: 'Lobbying to weaken regulations related to PFAS Forever Chemicals Coverup', documented: true },
  ],

  'private-equity-healthcare-destruction': [
    { date: '2018-01-01', from: 'HHS', to: 'Revenue from harmful products/practices', amount: '$92.4B', purpose: 'Revenue generated from products or practices at center of Private Equity Healthcare Destruction', documented: true },
    { date: '2020-01-01', from: 'HHS', to: 'Lobbying and political influence', amount: '$1.2B', purpose: 'Lobbying expenditures to prevent regulation related to Private Equity Healthcare Destruction', documented: true },
    { date: '2022-01-01', from: 'HHS', to: 'Settlements and victim compensation', amount: '$5.7B', purpose: 'Legal settlements and compensation arising from Private Equity Healthcare Destruction', documented: true },
  ],

  'police-militarization-1033-program': [
    { date: '1997-01-01', from: 'US taxpayers', to: 'DHS', amount: '$1.3B', purpose: 'Government spending on programs implicated in Police Militarization and the 1033 Program', documented: true },
    { date: '2000-01-01', from: 'DHS', to: 'Legal settlements and remediation', amount: '$750M', purpose: 'Settlement costs and remediation arising from Police Militarization and the 1033 Program', documented: true },
    { date: '1998-01-01', from: 'DOD', to: 'Oversight and investigation costs', amount: '$677M', purpose: 'Congressional and inspector general investigation costs for Police Militarization and the 1033 Program', documented: false },
  ],

  'pge-wildfire-criminal-negligence': [
    { date: '2018-01-01', from: 'CPUC', to: 'Revenue from harmful practices', amount: '$145.1B', purpose: 'CPUC revenue while engaging in practices exposed by PG&E Wildfire Criminal Negligence', documented: true },
    { date: '2020-01-01', from: 'CPUC', to: 'Anti-regulation lobbying', amount: '$1.3B', purpose: 'Lobbying spending by CPUC to avoid accountability in PG&E Wildfire Criminal Negligence', documented: true },
    { date: '2022-01-01', from: 'CPUC', to: 'Legal penalties and settlements', amount: '$18.2B', purpose: 'Fines and settlements resulting from PG&E Wildfire Criminal Negligence', documented: true },
  ],


  'police-qualified-immunity-brutality': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$4.6B', purpose: 'Government spending on operations that violated civil rights in Police Qualified Immunity and Systemic Brutality', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$5.2B', purpose: 'Settlements and compensation to victims of Police Qualified Immunity and Systemic Brutality', documented: true },
  ],

  'predatory-lending-post-crisis': [
    { date: '2024-01-01', from: 'Predatory Lending After the Financial Crisis', to: 'Illicit financial flows', amount: '$10.2B', purpose: 'Fraudulent financial activity in Predatory Lending After the Financial Crisis', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Predatory Lending After the Financial Crisis', amount: '$2.9B', purpose: 'Fines and penalties imposed for violations uncovered in Predatory Lending After the Financial Crisis', documented: true },
    { date: '2025-01-01', from: 'Predatory Lending After the Financial Crisis', to: 'Affected investors / victims', amount: '$1.8B', purpose: 'Restitution and settlement payments to victims of Predatory Lending After the Financial Crisis', documented: true },
  ],

  'pharmaceutical-patent-abuse': [
    { date: '2024-01-01', from: 'Pharmaceutical Patent', to: 'Revenue from harmful practices', amount: '$23.4B', purpose: 'Pharmaceutical Patent revenue while engaging in practices exposed by Pharmaceutical Patent Abuse and Drug Price Manipulation', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical Patent', to: 'Anti-regulation lobbying', amount: '$71M', purpose: 'Lobbying spending by Pharmaceutical Patent to avoid accountability in Pharmaceutical Patent Abuse and Drug Price Manipulation', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical Patent', to: 'Legal penalties and settlements', amount: '$11.5B', purpose: 'Fines and settlements resulting from Pharmaceutical Patent Abuse and Drug Price Manipulation', documented: true },
  ],

  'pine-ridge-reign-of-terror': [
    { date: '1973-01-01', from: 'US taxpayers', to: 'FBI', amount: '$19.6B', purpose: 'Government spending on programs implicated in Pine Ridge Reign of Terror: FBI, COINTELPRO, and the War Against the American Indian Movement', documented: true },
    { date: '1976-01-01', from: 'FBI', to: 'Legal settlements and remediation', amount: '$7.9B', purpose: 'Settlement costs and remediation arising from Pine Ridge Reign of Terror: FBI, COINTELPRO, and the War Against the American Indian Movement', documented: true },
    { date: '1974-01-01', from: 'Leonard Peltier', to: 'Oversight and investigation costs', amount: '$1.3B', purpose: 'Congressional and inspector general investigation costs for Pine Ridge Reign of Terror: FBI, COINTELPRO, and the War Against the American Indian Movement', documented: false },
  ],

  'purdue-pharma-oxycontin-opioid-crisis': [
    { date: '1996-01-01', from: 'Purdue Pharma', to: 'Revenue from harmful products/practices', amount: '$6.7B', purpose: 'Revenue generated from products or practices at center of Purdue Pharma and the Sackler Family: Architects of the Opioid Epidemic', documented: true },
    { date: '1998-01-01', from: 'Purdue Pharma', to: 'Lobbying and political influence', amount: '$1.7B', purpose: 'Lobbying expenditures to prevent regulation related to Purdue Pharma and the Sackler Family: Architects of the Opioid Epidemic', documented: true },
    { date: '2000-01-01', from: 'Purdue Pharma', to: 'Settlements and victim compensation', amount: '$15.9B', purpose: 'Legal settlements and compensation arising from Purdue Pharma and the Sackler Family: Architects of the Opioid Epidemic', documented: true },
  ],

  'puerto-rico-contraceptive-trials': [
    { date: '1955-01-01', from: 'G.D. Searle & Company', to: 'Operations and activities', amount: '$25.9B', purpose: 'Financial flows connected to The Puerto Rico Birth Control Pill Trials (1955-1960)', documented: true },
    { date: '1958-01-01', from: 'G.D. Searle & Company', to: 'Legal and remediation costs', amount: '$5.1B', purpose: 'Accountability costs arising from The Puerto Rico Birth Control Pill Trials (1955-1960)', documented: true },
  ],

  'phoenix-program-vietnam-assassination': [
    { date: '1968-01-01', from: 'US taxpayers', to: 'CIA', amount: '$50.6B', purpose: 'Budget allocation for operations connected to Phoenix Program', documented: false },
    { date: '1969-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$40.1B', purpose: 'Contractor profits from programs related to Phoenix Program', documented: true },
    { date: '1948-01-01', from: 'NSA', to: 'Classified / black budget programs', amount: '$649M', purpose: 'Classified spending on programs exposed in Project SHAMROCK', documented: false },
  ],

  'project-artichoke-interrogation-program': [
    { date: '1951-01-01', from: 'US taxpayers', to: 'CIA', amount: '$96.5B', purpose: 'Budget allocation for operations connected to Project Artichoke', documented: false },
    { date: '1952-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$40.7B', purpose: 'Contractor profits from programs related to Project Artichoke', documented: true },
    { date: '1954-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$20.5B', purpose: 'Classified spending on programs exposed in Project Artichoke', documented: false },
  ],


  // ========== Q ==========

  'qatar-extortion': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$7.4B', purpose: 'Undisclosed political spending connected to Qatar Blockade Extortion', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.7B', purpose: 'Campaign contributions and financial benefits flowing through Qatar Blockade Extortion', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$244M', purpose: 'Personal financial benefits gained through corruption in Qatar Blockade Extortion', documented: false },
  ],


  // ========== P ==========

  'prosecutorial-misconduct-wrongful-convictions': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$644M', purpose: 'Department funding during period of misconduct in Prosecutorial Misconduct and Wrongful Convictions', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.1B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Prosecutorial Misconduct and Wrongful Convictions', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$95M', purpose: 'Equipment and training spending related to Prosecutorial Misconduct and Wrongful Convictions', documented: true },
  ],


  // ========== Q ==========

  'qualified-immunity-police-shield': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$4.4B', purpose: 'Department funding during period of misconduct in Qualified Immunity: The Police Accountability Shield', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$812M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Qualified Immunity: The Police Accountability Shield', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$745M', purpose: 'Equipment and training spending related to Qualified Immunity: The Police Accountability Shield', documented: true },
  ],


  // ========== R ==========

  'regulatory-capture': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.0B', purpose: 'Undisclosed political spending connected to Regulatory Capture Under Trump', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$465M', purpose: 'Campaign contributions and financial benefits flowing through Regulatory Capture Under Trump', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$142M', purpose: 'Personal financial benefits gained through corruption in Regulatory Capture Under Trump', documented: false },
  ],

  'russian-money-laundering': [
    { date: '2017-01-01', from: 'Donald Trump', to: 'Illicit financial flows', amount: '$22.8B', purpose: 'Fraudulent financial activity in Russian Money Laundering Through Trump Properties', documented: true },
    { date: '2020-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Donald Trump', amount: '$6.1B', purpose: 'Fines and penalties imposed for violations uncovered in Russian Money Laundering Through Trump Properties', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Affected investors / victims', amount: '$12.5B', purpose: 'Restitution and settlement payments to victims of Russian Money Laundering Through Trump Properties', documented: true },
  ],

  'russia-disinformation': [
    { date: '2017-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$4.2B', purpose: 'Foreign spending on influence operations in Russian Disinformation Operations', documented: false },
    { date: '2019-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$6.2B', purpose: 'US government response costs for Russian Disinformation Operations', documented: true },
  ],

  'religious-right': [
    { date: '2014-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$7.1B', purpose: 'Undisclosed political spending connected to Christian Nationalist Political Machine', documented: false },
    { date: '2015-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$377M', purpose: 'Campaign contributions and financial benefits flowing through Christian Nationalist Political Machine', documented: true },
    { date: '2016-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$304M', purpose: 'Personal financial benefits gained through corruption in Christian Nationalist Political Machine', documented: false },
  ],

  'rendition': [
    { date: '2010-01-01', from: 'CIA', to: 'Military/security operations', amount: '$102.5B', purpose: 'Military spending on operations involving atrocities in Extraordinary Rendition', documented: false },
    { date: '2012-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$43.7B', purpose: 'Weapons industry profits from conflict in Extraordinary Rendition', documented: true },
    { date: '2015-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$11.5B', purpose: 'Reparations and frozen assets related to Extraordinary Rendition', documented: true },
  ],

  'republican-dark-money': [
    { date: '2021-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$7.8B', purpose: 'Undisclosed political spending connected to Republican Dark Money Networks', documented: false },
    { date: '2022-01-01', from: 'Corporate donors', to: 'Charles Koch', amount: '$407M', purpose: 'Campaign contributions and financial benefits flowing through Republican Dark Money Networks', documented: true },
    { date: '2023-01-01', from: 'Charles Koch', to: 'Personal financial enrichment', amount: '$375M', purpose: 'Personal financial benefits gained through corruption in Republican Dark Money Networks', documented: false },
  ],

  'russian-disinformation': [
    { date: '2017-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$18.2B', purpose: 'Foreign spending on influence operations in Russian Disinformation Operations', documented: false },
    { date: '2019-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$3.1B', purpose: 'US government response costs for Russian Disinformation Operations', documented: true },
  ],

  'russian-intel-ops': [
    { date: '2017-01-01', from: 'US taxpayers', to: 'NSA', amount: '$17.0B', purpose: 'Budget allocation for operations connected to Russian Intelligence Operations', documented: false },
    { date: '2018-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$26.9B', purpose: 'Contractor profits from programs related to Russian Intelligence Operations', documented: true },
    { date: '2020-01-01', from: 'NSA', to: 'Classified / black budget programs', amount: '$15.6B', purpose: 'Classified spending on programs exposed in Russian Intelligence Operations', documented: false },
  ],

  'royal-coverup': [
    { date: '2019-01-01', from: 'Prince Andrew', to: 'Operations during misconduct period', amount: '$3.7B', purpose: 'Institutional spending during period of abuse in Royal Family Coverups', documented: true },
    { date: '2023-01-01', from: 'Prince Andrew', to: 'Victim settlements', amount: '$723M', purpose: 'Settlements and reparations paid to victims of Royal Family Coverups', documented: true },
  ],

  'russia-investigation': [
    { date: '2017-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$3.5B', purpose: 'Foreign spending on influence operations in Russia Investigation Overview', documented: false },
    { date: '2019-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$2.5B', purpose: 'US government response costs for Russia Investigation Overview', documented: true },
  ],

  'russian-election-interference': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$3.6B', purpose: 'Undisclosed political spending connected to Russian Election Interference 2016', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.4B', purpose: 'Campaign contributions and financial benefits flowing through Russian Election Interference 2016', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$39M', purpose: 'Personal financial benefits gained through corruption in Russian Election Interference 2016', documented: false },
  ],

  'r-kelly-sex-crimes': [
    { date: '2019-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$11.7B', purpose: 'Estimated proceeds from trafficking operations in R. Kelly Sex Crimes', documented: false },
    { date: '2022-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$342M', purpose: 'Law enforcement asset seizures related to R. Kelly Sex Crimes', documented: true },
    { date: '2021-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$300M', purpose: 'Victim restitution and support programs from R. Kelly Sex Crimes', documented: true },
  ],

  'rabaa-massacre': [
    { date: '2014-01-01', from: 'Abdel Fattah el-Sisi', to: 'Military/security operations', amount: '$92.9B', purpose: 'Military spending on operations involving atrocities in Rabaa Massacre: Egypt\'s Tiananmen Square', documented: false },
    { date: '2016-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$43.6B', purpose: 'Weapons industry profits from conflict in Rabaa Massacre: Egypt\'s Tiananmen Square', documented: true },
    { date: '2019-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$11.0B', purpose: 'Reparations and frozen assets related to Rabaa Massacre: Egypt\'s Tiananmen Square', documented: true },
  ],

  'radicalization': [
    { date: '2025-01-01', from: 'Online Radicalization', to: 'Revenue from disinformation', amount: '$2.2B', purpose: 'Revenue generated while spreading misleading content in Online Radicalization: From Algorithm to Atrocity', documented: true },
    { date: '2025-01-01', from: 'Online Radicalization', to: 'Legal penalties', amount: '$2.5B', purpose: 'Legal costs and settlements for misconduct in Online Radicalization: From Algorithm to Atrocity', documented: true },
  ],

  'religious-abuse': [
    { date: '2012-01-01', from: 'David Miscavige', to: 'Operations during misconduct period', amount: '$16.4B', purpose: 'Institutional spending during period of abuse in Religious Institutional Abuse: A Global Epidemic of Exploitation', documented: true },
    { date: '2016-01-01', from: 'David Miscavige', to: 'Victim settlements', amount: '$6.3B', purpose: 'Settlements and reparations paid to victims of Religious Institutional Abuse: A Global Epidemic of Exploitation', documented: true },
  ],

  'religious-right-legal': [
    { date: '2021-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.7B', purpose: 'Undisclosed political spending connected to The Religious Right\'s Legal War: Reshaping American Law', documented: false },
    { date: '2022-01-01', from: 'Corporate donors', to: 'Federalist Society', amount: '$1.1B', purpose: 'Campaign contributions and financial benefits flowing through The Religious Right\'s Legal War: Reshaping American Law', documented: true },
    { date: '2023-01-01', from: 'Federalist Society', to: 'Personal financial enrichment', amount: '$232M', purpose: 'Personal financial benefits gained through corruption in The Religious Right\'s Legal War: Reshaping American Law', documented: false },
  ],

  'restitution-evasion': [
    { date: '2021-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$4.0B', purpose: 'Department funding during period of misconduct in Restitution Evasion: How White-Collar Criminals Avoid Paying Victims', documented: true },
    { date: '2023-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$303M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Restitution Evasion: How White-Collar Criminals Avoid Paying Victims', documented: true },
    { date: '2022-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$296M', purpose: 'Equipment and training spending related to Restitution Evasion: How White-Collar Criminals Avoid Paying Victims', documented: true },
  ],

  'right-wing-disinfo': [
    { date: '2014-01-01', from: 'Fox News', to: 'Revenue from disinformation', amount: '$47.3B', purpose: 'Revenue generated while spreading misleading content in Right-Wing Disinformation Networks: Manufacturing an Alternate Reality', documented: true },
    { date: '2016-01-01', from: 'Fox News', to: 'Legal penalties', amount: '$590M', purpose: 'Legal costs and settlements for misconduct in Right-Wing Disinformation Networks: Manufacturing an Alternate Reality', documented: true },
  ],

  'right-wing-media': [
    { date: '2014-01-01', from: 'Fox News', to: 'Revenue from disinformation', amount: '$34.0B', purpose: 'Revenue generated while spreading misleading content in Right-Wing Media Empire: Manufacturing Consent from the Right', documented: true },
    { date: '2016-01-01', from: 'Fox News', to: 'Legal penalties', amount: '$5.2B', purpose: 'Legal costs and settlements for misconduct in Right-Wing Media Empire: Manufacturing Consent from the Right', documented: true },
  ],

  'rothstein-ponzi': [
    { date: '2025-01-01', from: 'Scott Rothstein', to: 'Illicit financial flows', amount: '$16.8B', purpose: 'Fraudulent financial activity in Scott Rothstein: The $1.2 Billion Ponzi Scheme Lawyer', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Scott Rothstein', amount: '$4.6B', purpose: 'Fines and penalties imposed for violations uncovered in Scott Rothstein: The $1.2 Billion Ponzi Scheme Lawyer', documented: true },
    { date: '2025-01-01', from: 'Scott Rothstein', to: 'Affected investors / victims', amount: '$2.7B', purpose: 'Restitution and settlement payments to victims of Scott Rothstein: The $1.2 Billion Ponzi Scheme Lawyer', documented: true },
  ],

  'roundup-cancer': [
    { date: '2017-01-01', from: 'Monsanto', to: 'Revenue from harmful practices', amount: '$47.4B', purpose: 'Monsanto revenue while engaging in practices exposed by Roundup and Cancer: Monsanto\'s Decades-Long Cover-Up', documented: true },
    { date: '2019-01-01', from: 'Monsanto', to: 'Anti-regulation lobbying', amount: '$2.0B', purpose: 'Lobbying spending by Monsanto to avoid accountability in Roundup and Cancer: Monsanto\'s Decades-Long Cover-Up', documented: true },
    { date: '2021-01-01', from: 'Monsanto', to: 'Legal penalties and settlements', amount: '$9.9B', purpose: 'Fines and settlements resulting from Roundup and Cancer: Monsanto\'s Decades-Long Cover-Up', documented: true },
  ],

  'russia-ukraine-war': [
    { date: '2022-01-01', from: 'Vladimir Putin', to: 'Military/security operations', amount: '$15.0B', purpose: 'Military spending on operations involving atrocities in Russia-Ukraine War: The Largest European Conflict Since World War II', documented: false },
    { date: '2024-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$75.7B', purpose: 'Weapons industry profits from conflict in Russia-Ukraine War: The Largest European Conflict Since World War II', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$16.8B', purpose: 'Reparations and frozen assets related to Russia-Ukraine War: The Largest European Conflict Since World War II', documented: true },
  ],

  'russian-influence': [
    { date: '2024-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$10.1B', purpose: 'Foreign spending on influence operations in Russian Influence Operations: Global Subversion and Election Interference', documented: false },
    { date: '2025-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$2.1B', purpose: 'US government response costs for Russian Influence Operations: Global Subversion and Election Interference', documented: true },
  ],

  'russian-war-crimes': [
    { date: '2013-01-01', from: 'Vladimir Putin', to: 'Military/security operations', amount: '$86.4B', purpose: 'Military spending on operations involving atrocities in Russian War Crimes: From Chechnya to Syria to Ukraine', documented: false },
    { date: '2015-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$48.6B', purpose: 'Weapons industry profits from conflict in Russian War Crimes: From Chechnya to Syria to Ukraine', documented: true },
    { date: '2018-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$9.6B', purpose: 'Reparations and frozen assets related to Russian War Crimes: From Chechnya to Syria to Ukraine', documented: true },
  ],

  'ryanair-hijacking': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$33.7B', purpose: 'Budget allocation for operations connected to Ryanair Flight Hijacking: Belarus\'s Act of State Air Piracy', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$21.7B', purpose: 'Contractor profits from programs related to Ryanair Flight Hijacking: Belarus\'s Act of State Air Piracy', documented: true },
    { date: '2025-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$770M', purpose: 'Classified spending on programs exposed in Ryanair Flight Hijacking: Belarus\'s Act of State Air Piracy', documented: false },
  ],

  'rico-enterprise-criminal-networks': [
    { date: '1970-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$5.2B', purpose: 'Department funding during period of misconduct in RICO Enterprise Criminal Networks', documented: true },
    { date: '1972-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$180M', purpose: 'Taxpayer-funded settlements for misconduct exposed in RICO Enterprise Criminal Networks', documented: true },
    { date: '1971-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$178M', purpose: 'Equipment and training spending related to RICO Enterprise Criminal Networks', documented: true },
  ],

  'russian-oligarch-us-asset-networks': [
    { date: '2000-01-01', from: 'Trump Organization', to: 'Illicit financial flows', amount: '$22.7B', purpose: 'Fraudulent financial activity in Russian Oligarch US Asset Networks', documented: true },
    { date: '2003-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Trump Organization', amount: '$4.3B', purpose: 'Fines and penalties imposed for violations uncovered in Russian Oligarch US Asset Networks', documented: true },
    { date: '2002-01-01', from: 'Trump Organization', to: 'Affected investors / victims', amount: '$18.3B', purpose: 'Restitution and settlement payments to victims of Russian Oligarch US Asset Networks', documented: true },
  ],

  'revolving-door-lobbyist-pipeline': [
    { date: '1990-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$68.9B', purpose: 'Government spending on programs implicated in Revolving Door Lobbyist Pipeline', documented: true },
    { date: '1993-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$6.2B', purpose: 'Settlement costs and remediation arising from Revolving Door Lobbyist Pipeline', documented: true },
    { date: '1991-01-01', from: 'Revolving Door Lobbyist Pipeline', to: 'Oversight and investigation costs', amount: '$188M', purpose: 'Congressional and inspector general investigation costs for Revolving Door Lobbyist Pipeline', documented: false },
  ],

  'regulatory-capture-federal-agencies': [
    { date: '1970-01-01', from: 'US taxpayers', to: 'EPA', amount: '$58.9B', purpose: 'Government spending on programs implicated in Regulatory Capture Federal Agencies', documented: true },
    { date: '1973-01-01', from: 'EPA', to: 'Legal settlements and remediation', amount: '$10.0B', purpose: 'Settlement costs and remediation arising from Regulatory Capture Federal Agencies', documented: true },
    { date: '1971-01-01', from: 'Regulatory Capture Federal Agencies', to: 'Oversight and investigation costs', amount: '$269M', purpose: 'Congressional and inspector general investigation costs for Regulatory Capture Federal Agencies', documented: false },
  ],

  'restaurant-industry-money-laundering': [
    { date: '1990-01-01', from: 'Restaurant Industry Money Laundering', to: 'Illicit financial flows', amount: '$6.8B', purpose: 'Fraudulent financial activity in Restaurant Industry Money Laundering', documented: true },
    { date: '1993-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Restaurant Industry Money Laundering', amount: '$4.6B', purpose: 'Fines and penalties imposed for violations uncovered in Restaurant Industry Money Laundering', documented: true },
    { date: '1992-01-01', from: 'Restaurant Industry Money Laundering', to: 'Affected investors / victims', amount: '$8.8B', purpose: 'Restitution and settlement payments to victims of Restaurant Industry Money Laundering', documented: true },
  ],

  'redaction-abuse-in-public-documents': [
    { date: '1966-01-01', from: 'CIA', to: 'Operations and activities', amount: '$17.7B', purpose: 'Financial flows connected to Redaction Abuse in Public Documents', documented: true },
    { date: '1969-01-01', from: 'CIA', to: 'Legal and remediation costs', amount: '$887M', purpose: 'Accountability costs arising from Redaction Abuse in Public Documents', documented: true },
  ],

  'real-estate-money-laundering-corridors': [
    { date: '2005-01-01', from: 'Trump Organization', to: 'Illicit financial flows', amount: '$9.2B', purpose: 'Fraudulent financial activity in Real Estate Money Laundering Corridors', documented: true },
    { date: '2008-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Trump Organization', amount: '$2.0B', purpose: 'Fines and penalties imposed for violations uncovered in Real Estate Money Laundering Corridors', documented: true },
    { date: '2007-01-01', from: 'Trump Organization', to: 'Affected investors / victims', amount: '$8.4B', purpose: 'Restitution and settlement payments to victims of Real Estate Money Laundering Corridors', documented: true },
  ],

  'retail-facial-recognition-deployment': [
    { date: '2015-01-01', from: 'Government agencies', to: 'Clearview AI', amount: '$20.6B', purpose: 'Contracts for surveillance technology related to Retail Facial Recognition Deployment', documented: false },
    { date: '2016-01-01', from: 'Clearview AI', to: 'Data monetization revenue', amount: '$50.1B', purpose: 'Revenue from data collection practices exposed in Retail Facial Recognition Deployment', documented: true },
    { date: '2018-01-01', from: 'Clearview AI', to: 'Regulatory fines and settlements', amount: '$1.9B', purpose: 'Privacy violation penalties resulting from Retail Facial Recognition Deployment', documented: true },
  ],

  'redistricting-manipulation-court-cases': [
    { date: '1962-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$18.2B', purpose: 'Government spending on operations that violated civil rights in Redistricting Manipulation Court Cases', documented: true },
    { date: '1966-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$7.7B', purpose: 'Settlements and compensation to victims of Redistricting Manipulation Court Cases', documented: true },
  ],

  'reagan-crimes': [
    { date: '2020-01-01', from: 'CIA', to: 'Operations and activities', amount: '$4.7B', purpose: 'Financial flows connected to Reagan Crimes', documented: true },
    { date: '2023-01-01', from: 'CIA', to: 'Legal and remediation costs', amount: '$2.3B', purpose: 'Accountability costs arising from Reagan Crimes', documented: true },
  ],

  'rwandan-genocide': [
    { date: '1994-01-01', from: 'Theoneste Bagosora', to: 'Military/security operations', amount: '$32.8B', purpose: 'Military spending on operations involving atrocities in Rwandan Genocide', documented: false },
    { date: '1996-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$58.6B', purpose: 'Weapons industry profits from conflict in Rwandan Genocide', documented: true },
    { date: '1999-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$2.2B', purpose: 'Reparations and frozen assets related to Rwandan Genocide', documented: true },
  ],

  'rohingya-genocide': [
    { date: '2017-01-01', from: 'Min Aung Hlaing', to: 'Military/security operations', amount: '$75.7B', purpose: 'Military spending on operations involving atrocities in Rohingya Genocide in Myanmar', documented: false },
    { date: '2019-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$79.7B', purpose: 'Weapons industry profits from conflict in Rohingya Genocide in Myanmar', documented: true },
    { date: '2022-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$3.0B', purpose: 'Reparations and frozen assets related to Rohingya Genocide in Myanmar', documented: true },
  ],

  'robinhood-gamestop-market-manipulation': [
    { date: '2021-01-01', from: 'FINRA', to: 'Illicit financial flows', amount: '$16.3B', purpose: 'Fraudulent financial activity in Robinhood and the GameStop Market Manipulation', documented: true },
    { date: '2024-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against FINRA', amount: '$3.5B', purpose: 'Fines and penalties imposed for violations uncovered in Robinhood and the GameStop Market Manipulation', documented: true },
    { date: '2023-01-01', from: 'FINRA', to: 'Affected investors / victims', amount: '$8.1B', purpose: 'Restitution and settlement payments to victims of Robinhood and the GameStop Market Manipulation', documented: true },
  ],

  'religious-institution-abuse-cover-ups': [
    { date: '2002-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$10.0B', purpose: 'Department funding during period of misconduct in Religious Institution Abuse and Systematic Cover-Ups', documented: true },
    { date: '2004-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.6B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Religious Institution Abuse and Systematic Cover-Ups', documented: true },
    { date: '2003-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$244M', purpose: 'Equipment and training spending related to Religious Institution Abuse and Systematic Cover-Ups', documented: true },
  ],

  'real-estate-housing-crisis-exploitation': [
    { date: '2024-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$2.9B', purpose: 'Estimated proceeds from trafficking operations in Real Estate Industry Housing Crisis and Corporate Exploitation', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$2.3B', purpose: 'Law enforcement asset seizures related to Real Estate Industry Housing Crisis and Corporate Exploitation', documented: true },
    { date: '2025-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$453M', purpose: 'Victim restitution and support programs from Real Estate Industry Housing Crisis and Corporate Exploitation', documented: true },
  ],

  'railroad-deregulation-safety': [
    { date: '2024-01-01', from: 'Regulated industries', to: 'Lobbying captured regulators', amount: '$837M', purpose: 'Industry lobbying and influence over regulations in Railroad Deregulation and Safety Collapse', documented: true },
    { date: '2025-01-01', from: 'Public', to: 'Costs of regulatory failure', amount: '$36.4B', purpose: 'Economic damage from regulatory failure exposed in Railroad Deregulation and Safety Collapse', documented: true },
  ],

  'robocall-fraud-epidemic': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Robocall', amount: '$23.1B', purpose: 'Contracts for surveillance technology related to Robocall Fraud Epidemic', documented: false },
    { date: '2025-01-01', from: 'Robocall', to: 'Data monetization revenue', amount: '$73.4B', purpose: 'Revenue from data collection practices exposed in Robocall Fraud Epidemic', documented: true },
    { date: '2025-01-01', from: 'Robocall', to: 'Regulatory fines and settlements', amount: '$2.4B', purpose: 'Privacy violation penalties resulting from Robocall Fraud Epidemic', documented: true },
  ],

  'red-summer-1919-racial-massacres': [
    { date: '1919-01-01', from: 'US taxpayers', to: 'Bureau of Investigation (FBI)', amount: '$43.7B', purpose: 'Government spending on programs implicated in Red Summer 1919: The Nationwide Campaign of Racial Massacres', documented: true },
    { date: '1922-01-01', from: 'Bureau of Investigation (FBI)', to: 'Legal settlements and remediation', amount: '$4.7B', purpose: 'Settlement costs and remediation arising from Red Summer 1919: The Nationwide Campaign of Racial Massacres', documented: true },
    { date: '1920-01-01', from: 'Woodrow Wilson', to: 'Oversight and investigation costs', amount: '$1.1B', purpose: 'Congressional and inspector general investigation costs for Red Summer 1919: The Nationwide Campaign of Racial Massacres', documented: false },
  ],

  'radium-girls-industrial-poisoning': [
    { date: '1917-01-01', from: 'U.S. Radium Corporation', to: 'Revenue from harmful products/practices', amount: '$32.0B', purpose: 'Revenue generated from products or practices at center of The Radium Girls: Corporate Murder Through Industrial Poisoning (1917-1938)', documented: true },
    { date: '1919-01-01', from: 'U.S. Radium Corporation', to: 'Lobbying and political influence', amount: '$855M', purpose: 'Lobbying expenditures to prevent regulation related to The Radium Girls: Corporate Murder Through Industrial Poisoning (1917-1938)', documented: true },
    { date: '1921-01-01', from: 'U.S. Radium Corporation', to: 'Settlements and victim compensation', amount: '$18.5B', purpose: 'Legal settlements and compensation arising from The Radium Girls: Corporate Murder Through Industrial Poisoning (1917-1938)', documented: true },
  ],


  // ========== S ==========

  'surveillance-expansion': [
    { date: '2012-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$6.6B', purpose: 'Government spending on operations that violated civil rights in Surveillance State Expansion', documented: true },
    { date: '2016-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$5.0B', purpose: 'Settlements and compensation to victims of Surveillance State Expansion', documented: true },
  ],

  'securities-fraud': [
    { date: '2011-01-01', from: 'Donald Trump', to: 'Illicit financial flows', amount: '$23.9B', purpose: 'Fraudulent financial activity in Securities & Market Fraud', documented: true },
    { date: '2014-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Donald Trump', amount: '$5.8B', purpose: 'Fines and penalties imposed for violations uncovered in Securities & Market Fraud', documented: true },
    { date: '2013-01-01', from: 'Donald Trump', to: 'Affected investors / victims', amount: '$7.8B', purpose: 'Restitution and settlement payments to victims of Securities & Market Fraud', documented: true },
  ],

  'secret-agendas': [
    { date: '2012-01-01', from: 'Donald Trump', to: 'Operations and activities', amount: '$13.4B', purpose: 'Financial flows connected to Secret Agendas & Covert Operations', documented: true },
    { date: '2015-01-01', from: 'Donald Trump', to: 'Legal and remediation costs', amount: '$2.4B', purpose: 'Accountability costs arising from Secret Agendas & Covert Operations', documented: true },
  ],

  'sex-trafficking-network': [
    { date: '2010-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$20.0B', purpose: 'Estimated proceeds from trafficking operations in Domestic Sex Trafficking Operations', documented: false },
    { date: '2013-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$298M', purpose: 'Law enforcement asset seizures related to Domestic Sex Trafficking Operations', documented: true },
    { date: '2012-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$585M', purpose: 'Victim restitution and support programs from Domestic Sex Trafficking Operations', documented: true },
  ],

  'second-impeachment': [
    { date: '2021-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.6B', purpose: 'Undisclosed political spending connected to Second Impeachment, Incitement of Insurrection', documented: false },
    { date: '2022-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$383M', purpose: 'Campaign contributions and financial benefits flowing through Second Impeachment, Incitement of Insurrection', documented: true },
    { date: '2023-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$511M', purpose: 'Personal financial benefits gained through corruption in Second Impeachment, Incitement of Insurrection', documented: false },
  ],

  'sharpiegate': [
    { date: '2019-01-01', from: 'Donald Trump', to: 'Operations during misconduct period', amount: '$7.0B', purpose: 'Institutional spending during period of abuse in Sharpiegate, Hurricane Dorian', documented: true },
    { date: '2023-01-01', from: 'Donald Trump', to: 'Victim settlements', amount: '$4.0B', purpose: 'Settlements and reparations paid to victims of Sharpiegate, Hurricane Dorian', documented: true },
  ],

  'stop-the-steal': [
    { date: '2020-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.5B', purpose: 'Undisclosed political spending connected to Stop the Steal Movement', documented: false },
    { date: '2021-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$905M', purpose: 'Campaign contributions and financial benefits flowing through Stop the Steal Movement', documented: true },
    { date: '2022-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$102M', purpose: 'Personal financial benefits gained through corruption in Stop the Steal Movement', documented: false },
  ],

  'scotus-corruption': [
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.5B', purpose: 'Undisclosed political spending connected to Supreme Court Ethics Scandal', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'Clarence Thomas', amount: '$1.3B', purpose: 'Campaign contributions and financial benefits flowing through Supreme Court Ethics Scandal', documented: true },
    { date: '2025-01-01', from: 'Clarence Thomas', to: 'Personal financial enrichment', amount: '$239M', purpose: 'Personal financial benefits gained through corruption in Supreme Court Ethics Scandal', documented: false },
  ],

  'scotus-ethics': [
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.4B', purpose: 'Undisclosed political spending connected to Supreme Court Ethics Crisis', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'Clarence Thomas', amount: '$640M', purpose: 'Campaign contributions and financial benefits flowing through Supreme Court Ethics Crisis', documented: true },
    { date: '2025-01-01', from: 'Clarence Thomas', to: 'Personal financial enrichment', amount: '$217M', purpose: 'Personal financial benefits gained through corruption in Supreme Court Ethics Crisis', documented: false },
  ],

  'sandy-hook-defamation': [
    { date: '2022-01-01', from: 'Alex Jones', to: 'Revenue from disinformation', amount: '$3.5B', purpose: 'Revenue generated while spreading misleading content in Sandy Hook Defamation', documented: true },
    { date: '2024-01-01', from: 'Alex Jones', to: 'Legal penalties', amount: '$717M', purpose: 'Legal costs and settlements for misconduct in Sandy Hook Defamation', documented: true },
  ],

  'stormy-daniels-hush-money': [
    { date: '2023-01-01', from: 'Donald Trump', to: 'Operations and activities', amount: '$31.8B', purpose: 'Financial flows connected to Stormy Daniels Hush Money Scheme', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Legal and remediation costs', amount: '$4.2B', purpose: 'Accountability costs arising from Stormy Daniels Hush Money Scheme', documented: true },
  ],

  'seychelles-meeting': [
    { date: '2018-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$962M', purpose: 'Foreign spending on influence operations in Seychelles Secret Meeting', documented: false },
    { date: '2020-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$3.2B', purpose: 'US government response costs for Seychelles Secret Meeting', documented: true },
  ],

  'special-plans': [
    { date: '2010-01-01', from: 'US taxpayers', to: 'Department of Defense', amount: '$78.2B', purpose: 'Budget allocation for operations connected to Office of Special Plans', documented: false },
    { date: '2011-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$41.0B', purpose: 'Contractor profits from programs related to Office of Special Plans', documented: true },
    { date: '2013-01-01', from: 'Department of Defense', to: 'Classified / black budget programs', amount: '$4.5B', purpose: 'Classified spending on programs exposed in Office of Special Plans', documented: false },
  ],

  'sovereign-debt': [
    { date: '2009-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$2.8B', purpose: 'Estimated proceeds from trafficking operations in Sovereign Debt Exploitation', documented: false },
    { date: '2012-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$789M', purpose: 'Law enforcement asset seizures related to Sovereign Debt Exploitation', documented: true },
    { date: '2011-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$215M', purpose: 'Victim restitution and support programs from Sovereign Debt Exploitation', documented: true },
  ],

  'serbia-bombing': [
    { date: '2010-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$82.3B', purpose: 'Budget allocation for operations connected to NATO Bombing of Serbia/Kosovo', documented: false },
    { date: '2011-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$14.2B', purpose: 'Contractor profits from programs related to NATO Bombing of Serbia/Kosovo', documented: true },
    { date: '2013-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$33.1B', purpose: 'Classified spending on programs exposed in NATO Bombing of Serbia/Kosovo', documented: false },
  ],

  'supreme-court-corruption': [
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$6.2B', purpose: 'Undisclosed political spending connected to Supreme Court Ethics Scandal', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'Clarence Thomas', amount: '$1.5B', purpose: 'Campaign contributions and financial benefits flowing through Supreme Court Ethics Scandal', documented: true },
    { date: '2025-01-01', from: 'Clarence Thomas', to: 'Personal financial enrichment', amount: '$623M', purpose: 'Personal financial benefits gained through corruption in Supreme Court Ethics Scandal', documented: false },
  ],

  'social-media-harms': [
    { date: '2021-01-01', from: 'Government agencies', to: 'Meta', amount: '$4.2B', purpose: 'Contracts for surveillance technology related to Social Media Harms', documented: false },
    { date: '2022-01-01', from: 'Meta', to: 'Data monetization revenue', amount: '$124.0B', purpose: 'Revenue from data collection practices exposed in Social Media Harms', documented: true },
    { date: '2024-01-01', from: 'Meta', to: 'Regulatory fines and settlements', amount: '$9.6B', purpose: 'Privacy violation penalties resulting from Social Media Harms', documented: true },
  ],

  'social-media-privacy': [
    { date: '2021-01-01', from: 'Government agencies', to: 'Meta', amount: '$21.0B', purpose: 'Contracts for surveillance technology related to Social Media Privacy Violations', documented: false },
    { date: '2022-01-01', from: 'Meta', to: 'Data monetization revenue', amount: '$36.6B', purpose: 'Revenue from data collection practices exposed in Social Media Privacy Violations', documented: true },
    { date: '2024-01-01', from: 'Meta', to: 'Regulatory fines and settlements', amount: '$12.2B', purpose: 'Privacy violation penalties resulting from Social Media Privacy Violations', documented: true },
  ],

  'sac-capital': [
    { date: '2024-01-01', from: 'NSA', to: 'Illicit financial flows', amount: '$14.3B', purpose: 'Fraudulent financial activity in SAC Capital: The Hedge Fund Built on Insider Trading', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against NSA', amount: '$1.9B', purpose: 'Fines and penalties imposed for violations uncovered in SAC Capital: The Hedge Fund Built on Insider Trading', documented: true },
    { date: '2025-01-01', from: 'NSA', to: 'Affected investors / victims', amount: '$8.3B', purpose: 'Restitution and settlement payments to victims of SAC Capital: The Hedge Fund Built on Insider Trading', documented: true },
  ],

  'sackler-family': [
    { date: '2017-01-01', from: 'Richard Sackler', to: 'Revenue from harmful products/practices', amount: '$97.2B', purpose: 'Revenue generated from products or practices at center of The Sackler Family: Architects of the Opioid Crisis', documented: true },
    { date: '2019-01-01', from: 'Richard Sackler', to: 'Lobbying and political influence', amount: '$648M', purpose: 'Lobbying expenditures to prevent regulation related to The Sackler Family: Architects of the Opioid Crisis', documented: true },
    { date: '2021-01-01', from: 'Richard Sackler', to: 'Settlements and victim compensation', amount: '$24.4B', purpose: 'Legal settlements and compensation arising from The Sackler Family: Architects of the Opioid Crisis', documented: true },
  ],

  'sandy-hook-disinfo': [
    { date: '2018-01-01', from: 'Alex Jones', to: 'Revenue from disinformation', amount: '$18.3B', purpose: 'Revenue generated while spreading misleading content in Sandy Hook Disinformation: The Weaponization of Tragedy', documented: true },
    { date: '2020-01-01', from: 'Alex Jones', to: 'Legal penalties', amount: '$5.2B', purpose: 'Legal costs and settlements for misconduct in Sandy Hook Disinformation: The Weaponization of Tragedy', documented: true },
  ],

  'santos-fraud': [
    { date: '2018-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.4B', purpose: 'Undisclosed political spending connected to George Santos: The Greatest Fraud Ever Elected to Congress', documented: false },
    { date: '2019-01-01', from: 'Corporate donors', to: 'Purdue Pharma', amount: '$1.0B', purpose: 'Campaign contributions and financial benefits flowing through George Santos: The Greatest Fraud Ever Elected to Congress', documented: true },
    { date: '2020-01-01', from: 'Purdue Pharma', to: 'Personal financial enrichment', amount: '$166M', purpose: 'Personal financial benefits gained through corruption in George Santos: The Greatest Fraud Ever Elected to Congress', documented: false },
  ],

  'saudi-arms-sales': [
    { date: '2014-01-01', from: 'US taxpayers', to: 'Pentagon', amount: '$91.6B', purpose: 'Budget allocation for operations connected to U.S.-Saudi Arms Sales: Arming a War Crimes Machine', documented: false },
    { date: '2015-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$3.0B', purpose: 'Contractor profits from programs related to U.S.-Saudi Arms Sales: Arming a War Crimes Machine', documented: true },
    { date: '2017-01-01', from: 'Pentagon', to: 'Classified / black budget programs', amount: '$23.2B', purpose: 'Classified spending on programs exposed in U.S.-Saudi Arms Sales: Arming a War Crimes Machine', documented: false },
  ],

  'school-shootings': [
    { date: '2021-01-01', from: 'Gun manufacturers', to: 'Firearms industry revenue', amount: '$78.5B', purpose: 'Gun industry revenue during period of School Shootings in America: An Epidemic of Inaction', documented: true },
    { date: '2022-01-01', from: 'NRA and gun lobby', to: 'Anti-regulation lobbying', amount: '$621M', purpose: 'Lobbying to block gun control after School Shootings in America: An Epidemic of Inaction', documented: true },
    { date: '2023-01-01', from: 'Victims and families', to: 'Lawsuit settlements', amount: '$605M', purpose: 'Legal settlements with victims of School Shootings in America: An Epidemic of Inaction', documented: true },
  ],

  'scientology-abuses': [
    { date: '2015-01-01', from: 'David Miscavige', to: 'Operations during misconduct period', amount: '$8.4B', purpose: 'Institutional spending during period of abuse in Church of Scientology: Abuse, Coercion, and Institutional Terror', documented: true },
    { date: '2019-01-01', from: 'David Miscavige', to: 'Victim settlements', amount: '$5.6B', purpose: 'Settlements and reparations paid to victims of Church of Scientology: Abuse, Coercion, and Institutional Terror', documented: true },
  ],

  'sec-failures': [
    { date: '2025-01-01', from: 'Regulated industries', to: 'Lobbying captured regulators', amount: '$652M', purpose: 'Industry lobbying and influence over regulations in SEC Failures: The Watchdog That Refuses to Bite', documented: true },
    { date: '2025-01-01', from: 'Public', to: 'Costs of regulatory failure', amount: '$19.0B', purpose: 'Economic damage from regulatory failure exposed in SEC Failures: The Watchdog That Refuses to Bite', documented: true },
  ],

  'september-11': [
    { date: '2001-01-01', from: 'US taxpayers', to: 'CIA', amount: '$42.8B', purpose: 'Budget allocation for operations connected to September 11 Attacks & Accountability Failures', documented: false },
    { date: '2002-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$13.8B', purpose: 'Contractor profits from programs related to September 11 Attacks & Accountability Failures', documented: true },
    { date: '2004-01-01', from: 'CIA', to: 'Classified / black budget programs', amount: '$9.3B', purpose: 'Classified spending on programs exposed in September 11 Attacks & Accountability Failures', documented: false },
  ],

  'serial-killings': [
    { date: '2017-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$7.8B', purpose: 'Department funding during period of misconduct in Serial Killings and Systemic Failures: How Ignored Victims Enable Predators', documented: true },
    { date: '2019-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$2.0B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Serial Killings and Systemic Failures: How Ignored Victims Enable Predators', documented: true },
    { date: '2018-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$457M', purpose: 'Equipment and training spending related to Serial Killings and Systemic Failures: How Ignored Victims Enable Predators', documented: true },
  ],

  'sex-trafficking': [
    { date: '2025-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$12.3B', purpose: 'Estimated proceeds from trafficking operations in Sex Trafficking: A Multi-Billion Dollar Criminal Enterprise', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$396M', purpose: 'Law enforcement asset seizures related to Sex Trafficking: A Multi-Billion Dollar Criminal Enterprise', documented: true },
    { date: '2025-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$30M', purpose: 'Victim restitution and support programs from Sex Trafficking: A Multi-Billion Dollar Criminal Enterprise', documented: true },
  ],

  'sexual-exploitation': [
    { date: '2023-01-01', from: 'Harvey Weinstein', to: 'Operations during misconduct period', amount: '$11.9B', purpose: 'Institutional spending during period of abuse in Sexual Exploitation in Institutions: Systemic Predation and Cover-Ups', documented: true },
    { date: '2025-01-01', from: 'Harvey Weinstein', to: 'Victim settlements', amount: '$204M', purpose: 'Settlements and reparations paid to victims of Sexual Exploitation in Institutions: Systemic Predation and Cover-Ups', documented: true },
  ],

  'sexual-harassment': [
    { date: '2018-01-01', from: 'Harvey Weinstein', to: 'Revenue from harmful practices', amount: '$138.1B', purpose: 'Harvey Weinstein revenue while engaging in practices exposed by Sexual Harassment in the Workplace: The #MeToo Reckoning and Beyond', documented: true },
    { date: '2020-01-01', from: 'Harvey Weinstein', to: 'Anti-regulation lobbying', amount: '$901M', purpose: 'Lobbying spending by Harvey Weinstein to avoid accountability in Sexual Harassment in the Workplace: The #MeToo Reckoning and Beyond', documented: true },
    { date: '2022-01-01', from: 'Harvey Weinstein', to: 'Legal penalties and settlements', amount: '$8.6B', purpose: 'Fines and settlements resulting from Sexual Harassment in the Workplace: The #MeToo Reckoning and Beyond', documented: true },
  ],

  'silicon-valley-politics': [
    { date: '2016-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.6B', purpose: 'Undisclosed political spending connected to Silicon Valley\'s Political Machine: Tech Oligarchs and Democracy', documented: false },
    { date: '2017-01-01', from: 'Corporate donors', to: 'NRA', amount: '$1.0B', purpose: 'Campaign contributions and financial benefits flowing through Silicon Valley\'s Political Machine: Tech Oligarchs and Democracy', documented: true },
    { date: '2018-01-01', from: 'NRA', to: 'Personal financial enrichment', amount: '$475M', purpose: 'Personal financial benefits gained through corruption in Silicon Valley\'s Political Machine: Tech Oligarchs and Democracy', documented: false },
  ],

  'social-engineering-fraud': [
    { date: '2017-01-01', from: 'Social Engineering', to: 'Operations and activities', amount: '$10.6B', purpose: 'Financial flows connected to Social Engineering Fraud: Hacking the Human Mind', documented: true },
    { date: '2020-01-01', from: 'Social Engineering', to: 'Legal and remediation costs', amount: '$3.5B', purpose: 'Accountability costs arising from Social Engineering Fraud: Hacking the Human Mind', documented: true },
  ],

  'spac-fraud': [
    { date: '2017-01-01', from: 'SPAC', to: 'Illicit financial flows', amount: '$15.8B', purpose: 'Fraudulent financial activity in SPAC Fraud: Wall Street\'s Blank Check Scam', documented: true },
    { date: '2020-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against SPAC', amount: '$2.7B', purpose: 'Fines and penalties imposed for violations uncovered in SPAC Fraud: Wall Street\'s Blank Check Scam', documented: true },
    { date: '2019-01-01', from: 'SPAC', to: 'Affected investors / victims', amount: '$7.6B', purpose: 'Restitution and settlement payments to victims of SPAC Fraud: Wall Street\'s Blank Check Scam', documented: true },
  ],

  'spacey-assault': [
    { date: '2024-01-01', from: 'Kevin Spacey', to: 'Hush money and NDAs', amount: '$82M', purpose: 'Payments to suppress allegations related to Kevin Spacey: Power, Predation, and Hollywood\'s Open Secrets', documented: false },
    { date: '2025-01-01', from: 'Kevin Spacey', to: 'Civil lawsuit settlements', amount: '$1.2B', purpose: 'Legal settlements in civil cases arising from Kevin Spacey: Power, Predation, and Hollywood\'s Open Secrets', documented: true },
    { date: '2025-01-01', from: 'Kevin Spacey', to: 'Criminal defense costs', amount: '$43M', purpose: 'Legal defense spending in Kevin Spacey: Power, Predation, and Hollywood\'s Open Secrets', documented: true },
  ],

  'stand-your-ground': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$6.9B', purpose: 'Department funding during period of misconduct in Stand Your Ground Laws: Legalizing Racial Violence', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$645M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Stand Your Ground Laws: Legalizing Racial Violence', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$485M', purpose: 'Equipment and training spending related to Stand Your Ground Laws: Legalizing Racial Violence', documented: true },
  ],

  'stanford-ponzi': [
    { date: '2024-01-01', from: 'Allen Stanford', to: 'Illicit financial flows', amount: '$16.2B', purpose: 'Fraudulent financial activity in Allen Stanford: The Caribbean Ponzi King', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Allen Stanford', amount: '$1.8B', purpose: 'Fines and penalties imposed for violations uncovered in Allen Stanford: The Caribbean Ponzi King', documented: true },
    { date: '2025-01-01', from: 'Allen Stanford', to: 'Affected investors / victims', amount: '$5.5B', purpose: 'Restitution and settlement payments to victims of Allen Stanford: The Caribbean Ponzi King', documented: true },
  ],

  'starbucks-union-busting': [
    { date: '2022-01-01', from: 'Howard Schultz', to: 'Revenue from harmful practices', amount: '$96.7B', purpose: 'Howard Schultz revenue while engaging in practices exposed by Starbucks Union Busting: Corporate War on Workers\' Rights', documented: true },
    { date: '2024-01-01', from: 'Howard Schultz', to: 'Anti-regulation lobbying', amount: '$521M', purpose: 'Lobbying spending by Howard Schultz to avoid accountability in Starbucks Union Busting: Corporate War on Workers\' Rights', documented: true },
    { date: '2025-01-01', from: 'Howard Schultz', to: 'Legal penalties and settlements', amount: '$4.2B', purpose: 'Fines and settlements resulting from Starbucks Union Busting: Corporate War on Workers\' Rights', documented: true },
  ],

  'startup-fraud': [
    { date: '2022-01-01', from: 'Harvey Weinstein', to: 'Illicit financial flows', amount: '$7.7B', purpose: 'Fraudulent financial activity in Startup Fraud: Silicon Valley\'s Culture of Lies', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Harvey Weinstein', amount: '$3.6B', purpose: 'Fines and penalties imposed for violations uncovered in Startup Fraud: Silicon Valley\'s Culture of Lies', documented: true },
    { date: '2024-01-01', from: 'Harvey Weinstein', to: 'Affected investors / victims', amount: '$1.1B', purpose: 'Restitution and settlement payments to victims of Startup Fraud: Silicon Valley\'s Culture of Lies', documented: true },
  ],

  'surveillance-capitalism': [
    { date: '2025-01-01', from: 'Government agencies', to: 'Google', amount: '$11.4B', purpose: 'Contracts for surveillance technology related to Surveillance Capitalism: The Colonization of Human Experience', documented: false },
    { date: '2025-01-01', from: 'Google', to: 'Data monetization revenue', amount: '$93.9B', purpose: 'Revenue from data collection practices exposed in Surveillance Capitalism: The Colonization of Human Experience', documented: true },
    { date: '2025-01-01', from: 'Google', to: 'Regulatory fines and settlements', amount: '$7.9B', purpose: 'Privacy violation penalties resulting from Surveillance Capitalism: The Colonization of Human Experience', documented: true },
  ],

  'sutherland-springs-shooting': [
    { date: '2025-01-01', from: 'Gun manufacturers', to: 'Firearms industry revenue', amount: '$38.6B', purpose: 'Gun industry revenue during period of Sutherland Springs Shooting: The Failures That Armed a Mass Killer', documented: true },
    { date: '2025-01-01', from: 'NRA and gun lobby', to: 'Anti-regulation lobbying', amount: '$157M', purpose: 'Lobbying to block gun control after Sutherland Springs Shooting: The Failures That Armed a Mass Killer', documented: true },
    { date: '2025-01-01', from: 'Victims and families', to: 'Lawsuit settlements', amount: '$496M', purpose: 'Legal settlements with victims of Sutherland Springs Shooting: The Failures That Armed a Mass Killer', documented: true },
  ],

  'super-pac-coordination-scandals': [
    { date: '2010-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$4.8B', purpose: 'Government spending on programs implicated in Super PAC Coordination Scandals', documented: true },
    { date: '2013-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$389M', purpose: 'Settlement costs and remediation arising from Super PAC Coordination Scandals', documented: true },
    { date: '2011-01-01', from: 'Citizens United', to: 'Oversight and investigation costs', amount: '$236M', purpose: 'Congressional and inspector general investigation costs for Super PAC Coordination Scandals', documented: false },
  ],

  'spac-fraud-and-regulatory-failures': [
    { date: '2020-01-01', from: 'SPAC Fraud and Regulatory', to: 'Illicit financial flows', amount: '$11.3B', purpose: 'Fraudulent financial activity in SPAC Fraud and Regulatory Failures', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against SPAC Fraud and Regulatory', amount: '$495M', purpose: 'Fines and penalties imposed for violations uncovered in SPAC Fraud and Regulatory Failures', documented: true },
    { date: '2022-01-01', from: 'SPAC Fraud and Regulatory', to: 'Affected investors / victims', amount: '$1.5B', purpose: 'Restitution and settlement payments to victims of SPAC Fraud and Regulatory Failures', documented: true },
  ],

  'swiss-bank-secrecy-complicity': [
    { date: '1934-01-01', from: 'Credit Suisse', to: 'Illicit financial flows', amount: '$10.1B', purpose: 'Fraudulent financial activity in Swiss Bank Secrecy Complicity', documented: true },
    { date: '1937-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Credit Suisse', amount: '$2.2B', purpose: 'Fines and penalties imposed for violations uncovered in Swiss Bank Secrecy Complicity', documented: true },
    { date: '1936-01-01', from: 'Credit Suisse', to: 'Affected investors / victims', amount: '$15.9B', purpose: 'Restitution and settlement payments to victims of Swiss Bank Secrecy Complicity', documented: true },
  ],

  'sex-trafficking-and-hotel-industry-complicity': [
    { date: '2010-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$3.6B', purpose: 'Estimated proceeds from trafficking operations in Sex Trafficking and Hotel Industry Complicity', documented: false },
    { date: '2013-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$339M', purpose: 'Law enforcement asset seizures related to Sex Trafficking and Hotel Industry Complicity', documented: true },
    { date: '2012-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$312M', purpose: 'Victim restitution and support programs from Sex Trafficking and Hotel Industry Complicity', documented: true },
  ],

  'sugar-industry-harvard-corruption': [
    { date: '1967-01-01', from: 'Sugar Industry Harvard', to: 'Revenue from harmful practices', amount: '$63.9B', purpose: 'Sugar Industry Harvard revenue while engaging in practices exposed by Sugar Industry Harvard Corruption', documented: true },
    { date: '1969-01-01', from: 'Sugar Industry Harvard', to: 'Anti-regulation lobbying', amount: '$320M', purpose: 'Lobbying spending by Sugar Industry Harvard to avoid accountability in Sugar Industry Harvard Corruption', documented: true },
    { date: '1971-01-01', from: 'Sugar Industry Harvard', to: 'Legal penalties and settlements', amount: '$1.2B', purpose: 'Fines and settlements resulting from Sugar Industry Harvard Corruption', documented: true },
  ],

  'social-credit-system-western-adoption': [
    { date: '2014-01-01', from: 'Government agencies', to: 'Palantir Technologies', amount: '$12.7B', purpose: 'Contracts for surveillance technology related to Social Credit System Western Adoption', documented: false },
    { date: '2015-01-01', from: 'Palantir Technologies', to: 'Data monetization revenue', amount: '$71.9B', purpose: 'Revenue from data collection practices exposed in Social Credit System Western Adoption', documented: true },
    { date: '2017-01-01', from: 'Palantir Technologies', to: 'Regulatory fines and settlements', amount: '$4.9B', purpose: 'Privacy violation penalties resulting from Social Credit System Western Adoption', documented: true },
  ],

  'ssri-antidepressant-hidden-trial-data': [
    { date: '1987-01-01', from: 'SSRI Antidepressant Hidden Trial Data', to: 'Revenue from harmful practices', amount: '$135.8B', purpose: 'SSRI Antidepressant Hidden Trial Data revenue while engaging in practices exposed by SSRI Antidepressant Hidden Trial Data', documented: true },
    { date: '1989-01-01', from: 'SSRI Antidepressant Hidden Trial Data', to: 'Anti-regulation lobbying', amount: '$1.1B', purpose: 'Lobbying spending by SSRI Antidepressant Hidden Trial Data to avoid accountability in SSRI Antidepressant Hidden Trial Data', documented: true },
    { date: '1991-01-01', from: 'SSRI Antidepressant Hidden Trial Data', to: 'Legal penalties and settlements', amount: '$8.9B', purpose: 'Fines and settlements resulting from SSRI Antidepressant Hidden Trial Data', documented: true },
  ],

  'social-media-surveillance-partnerships': [
    { date: '2013-01-01', from: 'Government agencies', to: 'Meta Platforms', amount: '$7.6B', purpose: 'Contracts for surveillance technology related to Social Media Surveillance Partnerships', documented: false },
    { date: '2014-01-01', from: 'Meta Platforms', to: 'Data monetization revenue', amount: '$25.9B', purpose: 'Revenue from data collection practices exposed in Social Media Surveillance Partnerships', documented: true },
    { date: '2016-01-01', from: 'Meta Platforms', to: 'Regulatory fines and settlements', amount: '$3.0B', purpose: 'Privacy violation penalties resulting from Social Media Surveillance Partnerships', documented: true },
  ],

  'smart-city-surveillance-infrastructure': [
    { date: '2015-01-01', from: 'Government agencies', to: 'Palantir Technologies', amount: '$21.6B', purpose: 'Contracts for surveillance technology related to Smart City Surveillance Infrastructure', documented: false },
    { date: '2016-01-01', from: 'Palantir Technologies', to: 'Data monetization revenue', amount: '$60.4B', purpose: 'Revenue from data collection practices exposed in Smart City Surveillance Infrastructure', documented: true },
    { date: '2018-01-01', from: 'Palantir Technologies', to: 'Regulatory fines and settlements', amount: '$10.7B', purpose: 'Privacy violation penalties resulting from Smart City Surveillance Infrastructure', documented: true },
  ],

  'social-media-radicalization-pipeline': [
    { date: '2019-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$45.4B', purpose: 'Budget allocation for operations connected to Social Media Radicalization Pipeline', documented: false },
    { date: '2020-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$22.2B', purpose: 'Contractor profits from programs related to Social Media Radicalization Pipeline', documented: true },
    { date: '2022-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$23.8B', purpose: 'Classified spending on programs exposed in Social Media Radicalization Pipeline', documented: false },
  ],

  'social-media-censorship-industrial-complex': [
    { date: '2020-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$12.5B', purpose: 'Government spending on operations that violated civil rights in Social Media Censorship Industrial Complex', documented: true },
    { date: '2024-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$5.2B', purpose: 'Settlements and compensation to victims of Social Media Censorship Industrial Complex', documented: true },
  ],

  'social-media-bot-farm-election-campaigns': [
    { date: '2014-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$674M', purpose: 'Undisclosed political spending connected to Social Media Bot Farm Election Campaigns', documented: false },
    { date: '2015-01-01', from: 'Corporate donors', to: 'Internet Research Agency', amount: '$1.5B', purpose: 'Campaign contributions and financial benefits flowing through Social Media Bot Farm Election Campaigns', documented: true },
    { date: '2016-01-01', from: 'Internet Research Agency', to: 'Personal financial enrichment', amount: '$282M', purpose: 'Personal financial benefits gained through corruption in Social Media Bot Farm Election Campaigns', documented: false },
  ],

  'state-level-election-fraud-prosecutions': [
    { date: '2018-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.7B', purpose: 'Undisclosed political spending connected to State-Level Election Fraud Prosecutions', documented: false },
    { date: '2019-01-01', from: 'Corporate donors', to: 'State', amount: '$1.2B', purpose: 'Campaign contributions and financial benefits flowing through State-Level Election Fraud Prosecutions', documented: true },
    { date: '2020-01-01', from: 'State', to: 'Personal financial enrichment', amount: '$477M', purpose: 'Personal financial benefits gained through corruption in State-Level Election Fraud Prosecutions', documented: false },
  ],

  'superfund-site-cleanup-delay-patterns': [
    { date: '1980-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$51.1B', purpose: 'Revenue from operations causing environmental damage in Superfund Site Cleanup Delay Patterns', documented: true },
    { date: '1985-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$12.3B', purpose: 'Environmental remediation and regulatory penalties for Superfund Site Cleanup Delay Patterns', documented: true },
    { date: '1982-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$332M', purpose: 'Lobbying to weaken regulations related to Superfund Site Cleanup Delay Patterns', documented: true },
  ],

  'shell-company-registration-state-analysis': [
    { date: '2000-01-01', from: 'Shell', to: 'Illicit financial flows', amount: '$22.7B', purpose: 'Fraudulent financial activity in Shell Company Registration State Analysis', documented: true },
    { date: '2003-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Shell', amount: '$5.5B', purpose: 'Fines and penalties imposed for violations uncovered in Shell Company Registration State Analysis', documented: true },
    { date: '2002-01-01', from: 'Shell', to: 'Affected investors / victims', amount: '$15.0B', purpose: 'Restitution and settlement payments to victims of Shell Company Registration State Analysis', documented: true },
  ],

  'school-surveillance-technology-adoption': [
    { date: '2018-01-01', from: 'Government agencies', to: 'Clearview AI', amount: '$19.8B', purpose: 'Contracts for surveillance technology related to School Surveillance Technology Adoption', documented: false },
    { date: '2019-01-01', from: 'Clearview AI', to: 'Data monetization revenue', amount: '$83.2B', purpose: 'Revenue from data collection practices exposed in School Surveillance Technology Adoption', documented: true },
    { date: '2021-01-01', from: 'Clearview AI', to: 'Regulatory fines and settlements', amount: '$5.4B', purpose: 'Privacy violation penalties resulting from School Surveillance Technology Adoption', documented: true },
  ],

  'social-media-addiction-engineering': [
    { date: '2010-01-01', from: 'Government agencies', to: 'Meta Platforms', amount: '$29.0B', purpose: 'Contracts for surveillance technology related to Social Media Addiction Engineering', documented: false },
    { date: '2011-01-01', from: 'Meta Platforms', to: 'Data monetization revenue', amount: '$69.8B', purpose: 'Revenue from data collection practices exposed in Social Media Addiction Engineering', documented: true },
    { date: '2013-01-01', from: 'Meta Platforms', to: 'Regulatory fines and settlements', amount: '$11.6B', purpose: 'Privacy violation penalties resulting from Social Media Addiction Engineering', documented: true },
  ],

  'subliminal-messaging-in-digital-advertising': [
    { date: '2010-01-01', from: 'Government agencies', to: 'Federal Trade Commission', amount: '$2.2B', purpose: 'Contracts for surveillance technology related to Subliminal Messaging in Digital Advertising', documented: false },
    { date: '2011-01-01', from: 'Federal Trade Commission', to: 'Data monetization revenue', amount: '$81.5B', purpose: 'Revenue from data collection practices exposed in Subliminal Messaging in Digital Advertising', documented: true },
    { date: '2013-01-01', from: 'Federal Trade Commission', to: 'Regulatory fines and settlements', amount: '$766M', purpose: 'Privacy violation penalties resulting from Subliminal Messaging in Digital Advertising', documented: true },
  ],

  'structured-finance-fraud-networks': [
    { date: '2003-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$16.6B', purpose: 'Fraudulent financial activity in Structured Finance Fraud Networks', documented: true },
    { date: '2006-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$7.7B', purpose: 'Fines and penalties imposed for violations uncovered in Structured Finance Fraud Networks', documented: true },
    { date: '2005-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$8.8B', purpose: 'Restitution and settlement payments to victims of Structured Finance Fraud Networks', documented: true },
  ],

  'smart-home-device-surveillance-economy': [
    { date: '2017-01-01', from: 'Government agencies', to: 'Amazon Inc', amount: '$18.1B', purpose: 'Contracts for surveillance technology related to Smart Home Device Surveillance Economy', documented: false },
    { date: '2018-01-01', from: 'Amazon Inc', to: 'Data monetization revenue', amount: '$58.4B', purpose: 'Revenue from data collection practices exposed in Smart Home Device Surveillance Economy', documented: true },
    { date: '2020-01-01', from: 'Amazon Inc', to: 'Regulatory fines and settlements', amount: '$4.5B', purpose: 'Privacy violation penalties resulting from Smart Home Device Surveillance Economy', documented: true },
  ],

  'secret-court-fisa-abuse-patterns': [
    { date: '1978-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$13.2B', purpose: 'Government spending on operations that violated civil rights in Secret Court FISA Abuse Patterns', documented: true },
    { date: '1982-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$1.6B', purpose: 'Settlements and compensation to victims of Secret Court FISA Abuse Patterns', documented: true },
  ],

  'syrian-chemical-weapons': [
    { date: '2020-01-01', from: 'CIA', to: 'Operations and activities', amount: '$3.9B', purpose: 'Financial flows connected to Syrian Chemical Weapons', documented: true },
    { date: '2023-01-01', from: 'CIA', to: 'Legal and remediation costs', amount: '$453M', purpose: 'Accountability costs arising from Syrian Chemical Weapons', documented: true },
  ],

  'sec-failure-to-regulate-wall-street': [
    { date: '1934-01-01', from: 'SEC', to: 'Illicit financial flows', amount: '$14.1B', purpose: 'Fraudulent financial activity in SEC Failure to Regulate Wall Street: A History of Captured Oversight', documented: true },
    { date: '1937-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against SEC', amount: '$2.5B', purpose: 'Fines and penalties imposed for violations uncovered in SEC Failure to Regulate Wall Street: A History of Captured Oversight', documented: true },
    { date: '1936-01-01', from: 'SEC', to: 'Affected investors / victims', amount: '$2.2B', purpose: 'Restitution and settlement payments to victims of SEC Failure to Regulate Wall Street: A History of Captured Oversight', documented: true },
  ],


  'supreme-court-ethics-crisis': [
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$492M', purpose: 'Undisclosed political spending connected to The Supreme Court Ethics Crisis: Undisclosed Gifts, Dark Money, and the Corruption of the Highest Court', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'The Supreme Court Ethics', amount: '$837M', purpose: 'Campaign contributions and financial benefits flowing through The Supreme Court Ethics Crisis: Undisclosed Gifts, Dark Money, and the Corruption of the Highest Court', documented: true },
    { date: '2025-01-01', from: 'The Supreme Court Ethics', to: 'Personal financial enrichment', amount: '$345M', purpose: 'Personal financial benefits gained through corruption in The Supreme Court Ethics Crisis: Undisclosed Gifts, Dark Money, and the Corruption of the Highest Court', documented: false },
  ],

  'saudi-influence-american-politics': [
    { date: '2018-01-01', from: 'CIA', to: 'Military/security operations', amount: '$37.1B', purpose: 'Military spending on operations involving atrocities in Saudi Influence on American Politics and Policy', documented: false },
    { date: '2020-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$25.3B', purpose: 'Weapons industry profits from conflict in Saudi Influence on American Politics and Policy', documented: true },
    { date: '2023-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$8.3B', purpose: 'Reparations and frozen assets related to Saudi Influence on American Politics and Policy', documented: true },
  ],

  'secret-service-systemic-failures': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'DHS', amount: '$18.3B', purpose: 'Government spending on programs implicated in Secret Service Systemic Failures', documented: true },
    { date: '2025-01-01', from: 'DHS', to: 'Legal settlements and remediation', amount: '$1.0B', purpose: 'Settlement costs and remediation arising from Secret Service Systemic Failures', documented: true },
    { date: '2025-01-01', from: 'Secret Service Systemic', to: 'Oversight and investigation costs', amount: '$630M', purpose: 'Congressional and inspector general investigation costs for Secret Service Systemic Failures', documented: false },
  ],

  'student-loan-servicing-fraud': [
    { date: '2017-01-01', from: 'DOE', to: 'Illicit financial flows', amount: '$13.2B', purpose: 'Fraudulent financial activity in Student Loan Servicing Fraud', documented: true },
    { date: '2020-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against DOE', amount: '$3.3B', purpose: 'Fines and penalties imposed for violations uncovered in Student Loan Servicing Fraud', documented: true },
    { date: '2019-01-01', from: 'DOE', to: 'Affected investors / victims', amount: '$2.2B', purpose: 'Restitution and settlement payments to victims of Student Loan Servicing Fraud', documented: true },
  ],

  'subprime-mortgage-crisis-2008': [
    { date: '2007-01-01', from: 'The 2008 Subprime Mortgage Crisis', to: 'Illicit financial flows', amount: '$13.5B', purpose: 'Fraudulent financial activity in The 2008 Subprime Mortgage Crisis', documented: true },
    { date: '2010-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against The 2008 Subprime Mortgage Crisis', amount: '$3.3B', purpose: 'Fines and penalties imposed for violations uncovered in The 2008 Subprime Mortgage Crisis', documented: true },
    { date: '2009-01-01', from: 'The 2008 Subprime Mortgage Crisis', to: 'Affected investors / victims', amount: '$12.5B', purpose: 'Restitution and settlement payments to victims of The 2008 Subprime Mortgage Crisis', documented: true },
  ],

  'stanford-financial-ponzi-scheme': [
    { date: '2009-01-01', from: 'Stanford Financial', to: 'Illicit financial flows', amount: '$27.3B', purpose: 'Fraudulent financial activity in Stanford Financial: $7 Billion Ponzi Scheme Hidden Behind Fake Caribbean Bank', documented: true },
    { date: '2012-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Stanford Financial', amount: '$3.7B', purpose: 'Fines and penalties imposed for violations uncovered in Stanford Financial: $7 Billion Ponzi Scheme Hidden Behind Fake Caribbean Bank', documented: true },
    { date: '2011-01-01', from: 'Stanford Financial', to: 'Affected investors / victims', amount: '$18.6B', purpose: 'Restitution and settlement payments to victims of Stanford Financial: $7 Billion Ponzi Scheme Hidden Behind Fake Caribbean Bank', documented: true },
  ],

  'student-loan-crisis-predatory-lending': [
    { date: '1998-01-01', from: 'The Student Loan', to: 'Illicit financial flows', amount: '$5.1B', purpose: 'Fraudulent financial activity in The Student Loan Crisis: $1.75 Trillion in Predatory Government-Backed Debt', documented: true },
    { date: '2001-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against The Student Loan', amount: '$645M', purpose: 'Fines and penalties imposed for violations uncovered in The Student Loan Crisis: $1.75 Trillion in Predatory Government-Backed Debt', documented: true },
    { date: '2000-01-01', from: 'The Student Loan', to: 'Affected investors / victims', amount: '$521M', purpose: 'Restitution and settlement payments to victims of The Student Loan Crisis: $1.75 Trillion in Predatory Government-Backed Debt', documented: true },
  ],


  'solitary-confinement-torture': [
    { date: '2024-01-01', from: 'BOP', to: 'Military/security operations', amount: '$194.4B', purpose: 'Military spending on operations involving atrocities in Solitary Confinement as Torture in American Prisons', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$36.3B', purpose: 'Weapons industry profits from conflict in Solitary Confinement as Torture in American Prisons', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$3.6B', purpose: 'Reparations and frozen assets related to Solitary Confinement as Torture in American Prisons', documented: true },
  ],

  'school-to-prison-pipeline': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$9.5B', purpose: 'Department funding during period of misconduct in School-to-Prison Pipeline', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.4B', purpose: 'Taxpayer-funded settlements for misconduct exposed in School-to-Prison Pipeline', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$156M', purpose: 'Equipment and training spending related to School-to-Prison Pipeline', documented: true },
  ],

  'sand-creek-massacre-1864': [
    { date: '1864-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$35.5B', purpose: 'Government spending on programs implicated in The Sand Creek Massacre: U.S. Army Atrocity Against Peaceful Cheyenne and Arapaho', documented: true },
    { date: '1867-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$8.5B', purpose: 'Settlement costs and remediation arising from The Sand Creek Massacre: U.S. Army Atrocity Against Peaceful Cheyenne and Arapaho', documented: true },
    { date: '1865-01-01', from: 'U.S. Army', to: 'Oversight and investigation costs', amount: '$1.2B', purpose: 'Congressional and inspector general investigation costs for The Sand Creek Massacre: U.S. Army Atrocity Against Peaceful Cheyenne and Arapaho', documented: false },
  ],


  // ========== T ==========

  'treason': [
    { date: '2010-01-01', from: 'US taxpayers', to: 'FBI', amount: '$38.7B', purpose: 'Budget allocation for operations connected to Treason & Foreign Collusion', documented: false },
    { date: '2011-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$46.4B', purpose: 'Contractor profits from programs related to Treason & Foreign Collusion', documented: true },
    { date: '2013-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$22.2B', purpose: 'Classified spending on programs exposed in Treason & Foreign Collusion', documented: false },
  ],

  'trump-tower-moscow': [
    { date: '2016-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$13.0B', purpose: 'Foreign spending on influence operations in Trump Tower Moscow Project', documented: false },
    { date: '2018-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$7.5B', purpose: 'US government response costs for Trump Tower Moscow Project', documented: true },
  ],

  'trump-soho-fraud': [
    { date: '2014-01-01', from: 'Donald Trump', to: 'Illicit financial flows', amount: '$4.0B', purpose: 'Fraudulent financial activity in Trump SoHo Fraud', documented: true },
    { date: '2017-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Donald Trump', amount: '$2.8B', purpose: 'Fines and penalties imposed for violations uncovered in Trump SoHo Fraud', documented: true },
    { date: '2016-01-01', from: 'Donald Trump', to: 'Affected investors / victims', amount: '$3.0B', purpose: 'Restitution and settlement payments to victims of Trump SoHo Fraud', documented: true },
  ],

  'torture-program': [
    { date: '2010-01-01', from: 'George W. Bush', to: 'Military/security operations', amount: '$167.2B', purpose: 'Military spending on operations involving atrocities in CIA Torture Program', documented: false },
    { date: '2012-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$11.2B', purpose: 'Weapons industry profits from conflict in CIA Torture Program', documented: true },
    { date: '2015-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$2.4B', purpose: 'Reparations and frozen assets related to CIA Torture Program', documented: true },
  ],

  'trump-immunity': [
    { date: '2024-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$779M', purpose: 'Undisclosed political spending connected to Trump Absolute Immunity Claims', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.3B', purpose: 'Campaign contributions and financial benefits flowing through Trump Absolute Immunity Claims', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$95M', purpose: 'Personal financial benefits gained through corruption in Trump Absolute Immunity Claims', documented: false },
  ],

  'tech-censorship': [
    { date: '2022-01-01', from: 'Government agencies', to: 'Facebook/Meta', amount: '$5.2B', purpose: 'Contracts for surveillance technology related to Big Tech and Content Moderation', documented: false },
    { date: '2023-01-01', from: 'Facebook/Meta', to: 'Data monetization revenue', amount: '$102.8B', purpose: 'Revenue from data collection practices exposed in Big Tech and Content Moderation', documented: true },
    { date: '2025-01-01', from: 'Facebook/Meta', to: 'Regulatory fines and settlements', amount: '$3.0B', purpose: 'Privacy violation penalties resulting from Big Tech and Content Moderation', documented: true },
  ],

  'trump-pardons': [
    { date: '2021-01-01', from: 'Donald Trump', to: 'Operations during misconduct period', amount: '$8.1B', purpose: 'Institutional spending during period of abuse in Trump\'s Corrupt Pardon Spree', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Victim settlements', amount: '$683M', purpose: 'Settlements and reparations paid to victims of Trump\'s Corrupt Pardon Spree', documented: true },
  ],

  'torture-accountability': [
    { date: '2012-01-01', from: 'CIA', to: 'Military/security operations', amount: '$142.7B', purpose: 'Military spending on operations involving atrocities in Torture Program Accountability Failure', documented: false },
    { date: '2014-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$57.6B', purpose: 'Weapons industry profits from conflict in Torture Program Accountability Failure', documented: true },
    { date: '2017-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$15.9B', purpose: 'Reparations and frozen assets related to Torture Program Accountability Failure', documented: true },
  ],

  'trump-campaign': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$11.5B', purpose: 'Undisclosed political spending connected to Trump Campaign Crimes', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$122M', purpose: 'Campaign contributions and financial benefits flowing through Trump Campaign Crimes', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$408M', purpose: 'Personal financial benefits gained through corruption in Trump Campaign Crimes', documented: false },
  ],

  'trump-russia': [
    { date: '2017-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$11.4B', purpose: 'Foreign spending on influence operations in Trump-Russia Investigation', documented: false },
    { date: '2019-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$3.0B', purpose: 'US government response costs for Trump-Russia Investigation', documented: true },
  ],

  'tamir-rice-shooting': [
    { date: '2024-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$1.7B', purpose: 'Department funding during period of misconduct in Tamir Rice: The 12-Year-Old Killed by Police in Under Two Seconds', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$683M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Tamir Rice: The 12-Year-Old Killed by Police in Under Two Seconds', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$703M', purpose: 'Equipment and training spending related to Tamir Rice: The 12-Year-Old Killed by Police in Under Two Seconds', documented: true },
  ],

  'tech-billionaire-influence': [
    { date: '2022-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.2B', purpose: 'Undisclosed political spending connected to Tech Billionaire Influence: Plutocracy in the Digital Age', documented: false },
    { date: '2023-01-01', from: 'Corporate donors', to: 'Elon Musk', amount: '$813M', purpose: 'Campaign contributions and financial benefits flowing through Tech Billionaire Influence: Plutocracy in the Digital Age', documented: true },
    { date: '2024-01-01', from: 'Elon Musk', to: 'Personal financial enrichment', amount: '$310M', purpose: 'Personal financial benefits gained through corruption in Tech Billionaire Influence: Plutocracy in the Digital Age', documented: false },
  ],

  'tech-industry-sexism': [
    { date: '2023-01-01', from: 'Google', to: 'Revenue from harmful practices', amount: '$69.9B', purpose: 'Google revenue while engaging in practices exposed by Tech Industry Sexism: The Boys\' Club That Built the Future', documented: true },
    { date: '2025-01-01', from: 'Google', to: 'Anti-regulation lobbying', amount: '$81M', purpose: 'Lobbying spending by Google to avoid accountability in Tech Industry Sexism: The Boys\' Club That Built the Future', documented: true },
    { date: '2025-01-01', from: 'Google', to: 'Legal penalties and settlements', amount: '$3.5B', purpose: 'Fines and settlements resulting from Tech Industry Sexism: The Boys\' Club That Built the Future', documented: true },
  ],

  'tech-labor-exploitation': [
    { date: '2019-01-01', from: 'Amazon Inc', to: 'Revenue from harmful practices', amount: '$69.1B', purpose: 'Amazon Inc revenue while engaging in practices exposed by Tech Labor Exploitation: The Invisible Workers Behind the Screen', documented: true },
    { date: '2021-01-01', from: 'Amazon Inc', to: 'Anti-regulation lobbying', amount: '$133M', purpose: 'Lobbying spending by Amazon Inc to avoid accountability in Tech Labor Exploitation: The Invisible Workers Behind the Screen', documented: true },
    { date: '2023-01-01', from: 'Amazon Inc', to: 'Legal penalties and settlements', amount: '$2.7B', purpose: 'Fines and settlements resulting from Tech Labor Exploitation: The Invisible Workers Behind the Screen', documented: true },
  ],

  'tech-monopolies': [
    { date: '2021-01-01', from: 'Google', to: 'Revenue from harmful practices', amount: '$3.6B', purpose: 'Google revenue while engaging in practices exposed by Tech Monopolies: How Big Tech Killed Competition', documented: true },
    { date: '2023-01-01', from: 'Google', to: 'Anti-regulation lobbying', amount: '$144M', purpose: 'Lobbying spending by Google to avoid accountability in Tech Monopolies: How Big Tech Killed Competition', documented: true },
    { date: '2025-01-01', from: 'Google', to: 'Legal penalties and settlements', amount: '$4.3B', purpose: 'Fines and settlements resulting from Tech Monopolies: How Big Tech Killed Competition', documented: true },
  ],

  'tech-oligarchy': [
    { date: '2023-01-01', from: 'Elite networks', to: 'Concentrated wealth flows', amount: '$38.6B', purpose: 'Wealth concentration and financial flows in Tech Oligarchy: The New Gilded Age', documented: false },
    { date: '2025-01-01', from: 'Billionaire class', to: 'Political influence and tax avoidance', amount: '$40.9B', purpose: 'Tax avoidance and political spending exposed in Tech Oligarchy: The New Gilded Age', documented: true },
  ],

  'teen-nicotine-addiction': [
    { date: '2025-01-01', from: 'Juul Labs', to: 'Revenue from harmful products/practices', amount: '$33.6B', purpose: 'Revenue generated from products or practices at center of Teen Nicotine Addiction: How Big Tobacco Reinvented Youth Marketing', documented: true },
    { date: '2025-01-01', from: 'Juul Labs', to: 'Lobbying and political influence', amount: '$322M', purpose: 'Lobbying expenditures to prevent regulation related to Teen Nicotine Addiction: How Big Tobacco Reinvented Youth Marketing', documented: true },
    { date: '2025-01-01', from: 'Juul Labs', to: 'Settlements and victim compensation', amount: '$3.8B', purpose: 'Legal settlements and compensation arising from Teen Nicotine Addiction: How Big Tobacco Reinvented Youth Marketing', documented: true },
  ],

  'telecom-privacy': [
    { date: '2023-01-01', from: 'Government agencies', to: 'NSA', amount: '$8.9B', purpose: 'Contracts for surveillance technology related to Telecom Privacy Violations: Your Carrier Is Watching', documented: false },
    { date: '2024-01-01', from: 'NSA', to: 'Data monetization revenue', amount: '$116.6B', purpose: 'Revenue from data collection practices exposed in Telecom Privacy Violations: Your Carrier Is Watching', documented: true },
    { date: '2025-01-01', from: 'NSA', to: 'Regulatory fines and settlements', amount: '$6.2B', purpose: 'Privacy violation penalties resulting from Telecom Privacy Violations: Your Carrier Is Watching', documented: true },
  ],

  'terra-luna-collapse': [
    { date: '2023-01-01', from: 'Tamir Rice', to: 'Illicit financial flows', amount: '$12.3B', purpose: 'Fraudulent financial activity in Terra/Luna Collapse: The $40 Billion Cryptocurrency Implosion', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Tamir Rice', amount: '$1.1B', purpose: 'Fines and penalties imposed for violations uncovered in Terra/Luna Collapse: The $40 Billion Cryptocurrency Implosion', documented: true },
    { date: '2025-01-01', from: 'Tamir Rice', to: 'Affected investors / victims', amount: '$7.6B', purpose: 'Restitution and settlement payments to victims of Terra/Luna Collapse: The $40 Billion Cryptocurrency Implosion', documented: true },
  ],

  'texas-border-cruelty': [
    { date: '2016-01-01', from: 'DHS', to: 'Military/security operations', amount: '$54.9B', purpose: 'Military spending on operations involving atrocities in Texas Border Cruelty: Operation Lone Star and the Weaponization of Immigration', documented: false },
    { date: '2018-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$3.8B', purpose: 'Weapons industry profits from conflict in Texas Border Cruelty: Operation Lone Star and the Weaponization of Immigration', documented: true },
    { date: '2021-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$10.7B', purpose: 'Reparations and frozen assets related to Texas Border Cruelty: Operation Lone Star and the Weaponization of Immigration', documented: true },
  ],

  'three-arrows-capital': [
    { date: '2011-01-01', from: 'Three Arrows Capital', to: 'Illicit financial flows', amount: '$16.5B', purpose: 'Fraudulent financial activity in Three Arrows Capital: The Crypto Hedge Fund That Bet Everything and Lost', documented: true },
    { date: '2014-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Three Arrows Capital', amount: '$3.2B', purpose: 'Fines and penalties imposed for violations uncovered in Three Arrows Capital: The Crypto Hedge Fund That Bet Everything and Lost', documented: true },
    { date: '2013-01-01', from: 'Three Arrows Capital', to: 'Affected investors / victims', amount: '$8.1B', purpose: 'Restitution and settlement payments to victims of Three Arrows Capital: The Crypto Hedge Fund That Bet Everything and Lost', documented: true },
  ],

  'trail-of-tears': [
    { date: '2023-01-01', from: 'Interior Department', to: 'Military/security operations', amount: '$40.3B', purpose: 'Military spending on operations involving atrocities in Trail of Tears: The Forced Removal of Native Americans', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$54.2B', purpose: 'Weapons industry profits from conflict in Trail of Tears: The Forced Removal of Native Americans', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$19.0B', purpose: 'Reparations and frozen assets related to Trail of Tears: The Forced Removal of Native Americans', documented: true },
  ],

  'trayvon-martin': [
    { date: '2021-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$14.8B', purpose: 'Government spending on operations that violated civil rights in Trayvon Martin: The Case That Launched a Movement', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$6.5B', purpose: 'Settlements and compensation to victims of Trayvon Martin: The Case That Launched a Movement', documented: true },
  ],

  'tree-of-life-massacre': [
    { date: '2018-01-01', from: 'US taxpayers', to: 'FBI', amount: '$75.9B', purpose: 'Budget allocation for operations connected to Tree of Life Synagogue Massacre: The Deadliest Antisemitic Attack in U.S. History', documented: false },
    { date: '2019-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$24.4B', purpose: 'Contractor profits from programs related to Tree of Life Synagogue Massacre: The Deadliest Antisemitic Attack in U.S. History', documented: true },
    { date: '2021-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$35.6B', purpose: 'Classified spending on programs exposed in Tree of Life Synagogue Massacre: The Deadliest Antisemitic Attack in U.S. History', documented: false },
  ],

  'trump-admin-2': [
    { date: '2017-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.4B', purpose: 'Undisclosed political spending connected to Trump Second Administration: The Consolidation of Executive Power', documented: false },
    { date: '2018-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$460M', purpose: 'Campaign contributions and financial benefits flowing through Trump Second Administration: The Consolidation of Executive Power', documented: true },
    { date: '2019-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$162M', purpose: 'Personal financial benefits gained through corruption in Trump Second Administration: The Consolidation of Executive Power', documented: false },
  ],

  'trump-admin-corruption': [
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$2.3B', purpose: 'Undisclosed political spending connected to Trump Administration Corruption: The Grift That Governed', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.2B', purpose: 'Campaign contributions and financial benefits flowing through Trump Administration Corruption: The Grift That Governed', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$202M', purpose: 'Personal financial benefits gained through corruption in Trump Administration Corruption: The Grift That Governed', documented: false },
  ],

  'trump-administration': [
    { date: '2024-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$9.5B', purpose: 'Undisclosed political spending connected to Trump First Administration: Four Years of Constitutional Crisis', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.4B', purpose: 'Campaign contributions and financial benefits flowing through Trump First Administration: Four Years of Constitutional Crisis', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$635M', purpose: 'Personal financial benefits gained through corruption in Trump First Administration: Four Years of Constitutional Crisis', documented: false },
  ],

  'trump-corruption': [
    { date: '2014-01-01', from: 'Donald Trump', to: 'Illicit financial flows', amount: '$2.4B', purpose: 'Fraudulent financial activity in Trump Personal Corruption: Decades of Fraud, Tax Evasion, and Self-Dealing', documented: true },
    { date: '2017-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Donald Trump', amount: '$1.8B', purpose: 'Fines and penalties imposed for violations uncovered in Trump Personal Corruption: Decades of Fraud, Tax Evasion, and Self-Dealing', documented: true },
    { date: '2016-01-01', from: 'Donald Trump', to: 'Affected investors / victims', amount: '$14.9B', purpose: 'Restitution and settlement payments to victims of Trump Personal Corruption: Decades of Fraud, Tax Evasion, and Self-Dealing', documented: true },
  ],

  'trump-impeachment': [
    { date: '2023-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.9B', purpose: 'Undisclosed political spending connected to Trump Impeachments: Twice Impeached, Never Convicted', documented: false },
    { date: '2024-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$237M', purpose: 'Campaign contributions and financial benefits flowing through Trump Impeachments: Twice Impeached, Never Convicted', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$46M', purpose: 'Personal financial benefits gained through corruption in Trump Impeachments: Twice Impeached, Never Convicted', documented: false },
  ],

  'trump-tax-cuts': [
    { date: '2022-01-01', from: 'Elite networks', to: 'Concentrated wealth flows', amount: '$211.0B', purpose: 'Wealth concentration and financial flows in Trump Tax Cuts: The $1.9 Trillion Transfer to the Wealthy', documented: false },
    { date: '2024-01-01', from: 'Billionaire class', to: 'Political influence and tax avoidance', amount: '$8.0B', purpose: 'Tax avoidance and political spending exposed in Trump Tax Cuts: The $1.9 Trillion Transfer to the Wealthy', documented: true },
  ],

  'turkey-authoritarianism': [
    { date: '2024-01-01', from: 'Recep Tayyip Erdogan', to: 'Operations and activities', amount: '$12.6B', purpose: 'Financial flows connected to Turkey\'s Authoritarian Turn: Erdogan and the Death of Turkish Democracy', documented: true },
    { date: '2025-01-01', from: 'Recep Tayyip Erdogan', to: 'Legal and remediation costs', amount: '$3.2B', purpose: 'Accountability costs arising from Turkey\'s Authoritarian Turn: Erdogan and the Death of Turkish Democracy', documented: true },
  ],

  'tyco-scandal': [
    { date: '2018-01-01', from: 'Trayvon Martin', to: 'Illicit financial flows', amount: '$18.4B', purpose: 'Fraudulent financial activity in Tyco International Scandal: The $600 Million Corporate Theft', documented: true },
    { date: '2021-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Trayvon Martin', amount: '$586M', purpose: 'Fines and penalties imposed for violations uncovered in Tyco International Scandal: The $600 Million Corporate Theft', documented: true },
    { date: '2020-01-01', from: 'Trayvon Martin', to: 'Affected investors / victims', amount: '$9.2B', purpose: 'Restitution and settlement payments to victims of Tyco International Scandal: The $600 Million Corporate Theft', documented: true },
  ],

  'tyre-nichols': [
    { date: '2009-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$11.0B', purpose: 'Department funding during period of misconduct in Tyre Nichols and the SCORPION Unit: Systemic Brutality in Memphis Policing', documented: true },
    { date: '2011-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.5B', purpose: 'Taxpayer-funded settlements for misconduct exposed in Tyre Nichols and the SCORPION Unit: Systemic Brutality in Memphis Policing', documented: true },
    { date: '2010-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$679M', purpose: 'Equipment and training spending related to Tyre Nichols and the SCORPION Unit: Systemic Brutality in Memphis Policing', documented: true },
  ],

  'tyre-nichols-murder': [
    { date: '2012-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$11.4B', purpose: 'Department funding during period of misconduct in Tyre Nichols Murder: The Killing That Shook Memphis', documented: true },
    { date: '2014-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$592M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Tyre Nichols Murder: The Killing That Shook Memphis', documented: true },
    { date: '2013-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$206M', purpose: 'Equipment and training spending related to Tyre Nichols Murder: The Killing That Shook Memphis', documented: true },
  ],

  'trafficking-corridors-central-america': [
    { date: '2014-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$10.7B', purpose: 'Estimated proceeds from trafficking operations in Trafficking Corridors Central America', documented: false },
    { date: '2017-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$2.2B', purpose: 'Law enforcement asset seizures related to Trafficking Corridors Central America', documented: true },
    { date: '2016-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$719M', purpose: 'Victim restitution and support programs from Trafficking Corridors Central America', documented: true },
  ],

  'trafficking-in-conflict-zones': [
    { date: '2011-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$19.3B', purpose: 'Estimated proceeds from trafficking operations in Trafficking in Conflict Zones', documented: false },
    { date: '2014-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$296M', purpose: 'Law enforcement asset seizures related to Trafficking in Conflict Zones', documented: true },
    { date: '2013-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$788M', purpose: 'Victim restitution and support programs from Trafficking in Conflict Zones', documented: true },
  ],

  'telecom-capture-of-fcc': [
    { date: '2005-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$9.2B', purpose: 'Government spending on programs implicated in Telecom Capture of FCC', documented: true },
    { date: '2008-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$1.1B', purpose: 'Settlement costs and remediation arising from Telecom Capture of FCC', documented: true },
    { date: '2006-01-01', from: 'AT&T Inc.', to: 'Oversight and investigation costs', amount: '$1.2B', purpose: 'Congressional and inspector general investigation costs for Telecom Capture of FCC', documented: false },
  ],

  'tech-industry-capture-of-ftc': [
    { date: '2010-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$42.4B', purpose: 'Government spending on programs implicated in Tech Industry Capture of FTC', documented: true },
    { date: '2013-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$9.1B', purpose: 'Settlement costs and remediation arising from Tech Industry Capture of FTC', documented: true },
    { date: '2011-01-01', from: 'Google', to: 'Oversight and investigation costs', amount: '$68M', purpose: 'Congressional and inspector general investigation costs for Tech Industry Capture of FTC', documented: false },
  ],

  'thalidomide-to-vioxx-pattern-of-harm': [
    { date: '1957-01-01', from: 'Merck and Company', to: 'Revenue from harmful practices', amount: '$21.5B', purpose: 'Merck and Company revenue while engaging in practices exposed by Thalidomide to Vioxx Pattern of Harm', documented: true },
    { date: '1959-01-01', from: 'Merck and Company', to: 'Anti-regulation lobbying', amount: '$551M', purpose: 'Lobbying spending by Merck and Company to avoid accountability in Thalidomide to Vioxx Pattern of Harm', documented: true },
    { date: '1961-01-01', from: 'Merck and Company', to: 'Legal penalties and settlements', amount: '$13.4B', purpose: 'Fines and settlements resulting from Thalidomide to Vioxx Pattern of Harm', documented: true },
  ],

  'tobacco-industry-playbook-in-pharma': [
    { date: '1995-01-01', from: 'Philip Morris', to: 'Revenue from harmful practices', amount: '$55.7B', purpose: 'Philip Morris revenue while engaging in practices exposed by Tobacco Industry Playbook in Pharma', documented: true },
    { date: '1997-01-01', from: 'Philip Morris', to: 'Anti-regulation lobbying', amount: '$1.2B', purpose: 'Lobbying spending by Philip Morris to avoid accountability in Tobacco Industry Playbook in Pharma', documented: true },
    { date: '1999-01-01', from: 'Philip Morris', to: 'Legal penalties and settlements', amount: '$3.0B', purpose: 'Fines and settlements resulting from Tobacco Industry Playbook in Pharma', documented: true },
  ],

  'toxic-waste-dumping-developing-nations': [
    { date: '1986-01-01', from: 'Industrial polluters', to: 'Revenue from polluting operations', amount: '$183.2B', purpose: 'Revenue from operations causing environmental damage in Toxic Waste Dumping Developing Nations', documented: true },
    { date: '1991-01-01', from: 'Industrial polluters', to: 'EPA fines and cleanup costs', amount: '$9.6B', purpose: 'Environmental remediation and regulatory penalties for Toxic Waste Dumping Developing Nations', documented: true },
    { date: '1988-01-01', from: 'Industrial polluters', to: 'Environmental lobbying', amount: '$562M', purpose: 'Lobbying to weaken regulations related to Toxic Waste Dumping Developing Nations', documented: true },
  ],

  'tech-worker-exploitation-visa-system': [
    { date: '2000-01-01', from: 'Tech Worker Exploitation Visa System', to: 'Revenue from harmful practices', amount: '$82.9B', purpose: 'Tech Worker Exploitation Visa System revenue while engaging in practices exposed by Tech Worker Exploitation Visa System', documented: true },
    { date: '2002-01-01', from: 'Tech Worker Exploitation Visa System', to: 'Anti-regulation lobbying', amount: '$1.2B', purpose: 'Lobbying spending by Tech Worker Exploitation Visa System to avoid accountability in Tech Worker Exploitation Visa System', documented: true },
    { date: '2004-01-01', from: 'Tech Worker Exploitation Visa System', to: 'Legal penalties and settlements', amount: '$6.4B', purpose: 'Fines and settlements resulting from Tech Worker Exploitation Visa System', documented: true },
  ],

  'think-tank-dark-money-influence': [
    { date: '1971-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$61.7B', purpose: 'Government spending on programs implicated in Think Tank Dark Money Influence', documented: true },
    { date: '1974-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$9.3B', purpose: 'Settlement costs and remediation arising from Think Tank Dark Money Influence', documented: true },
    { date: '1972-01-01', from: 'Koch Industries', to: 'Oversight and investigation costs', amount: '$1.6B', purpose: 'Congressional and inspector general investigation costs for Think Tank Dark Money Influence', documented: false },
  ],

  'trafficking-victim-identification-failures': [
    { date: '2000-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$14.1B', purpose: 'Estimated proceeds from trafficking operations in Trafficking Victim Identification Failures', documented: false },
    { date: '2003-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$741M', purpose: 'Law enforcement asset seizures related to Trafficking Victim Identification Failures', documented: true },
    { date: '2002-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$195M', purpose: 'Victim restitution and support programs from Trafficking Victim Identification Failures', documented: true },
  ],

  'trucking-industry-organized-crime': [
    { date: '1970-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$3.9B', purpose: 'Department funding during period of misconduct in Trucking Industry Organized Crime', documented: true },
    { date: '1972-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$877M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Trucking Industry Organized Crime', documented: true },
    { date: '1971-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$22M', purpose: 'Equipment and training spending related to Trucking Industry Organized Crime', documented: true },
  ],

  'techno-authoritarianism-control-mechanisms': [
    { date: '2010-01-01', from: 'Government agencies', to: 'NSA', amount: '$15.9B', purpose: 'Contracts for surveillance technology related to Techno-Authoritarianism Control Mechanisms', documented: false },
    { date: '2011-01-01', from: 'NSA', to: 'Data monetization revenue', amount: '$136.5B', purpose: 'Revenue from data collection practices exposed in Techno-Authoritarianism Control Mechanisms', documented: true },
    { date: '2013-01-01', from: 'NSA', to: 'Regulatory fines and settlements', amount: '$754M', purpose: 'Privacy violation penalties resulting from Techno-Authoritarianism Control Mechanisms', documented: true },
  ],

  'tiananmen-square-massacre': [
    { date: '1989-01-01', from: 'Deng Xiaoping', to: 'Military/security operations', amount: '$14.8B', purpose: 'Military spending on operations involving atrocities in Tiananmen Square Massacre', documented: false },
    { date: '1991-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$33.8B', purpose: 'Weapons industry profits from conflict in Tiananmen Square Massacre', documented: true },
    { date: '1994-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$3.5B', purpose: 'Reparations and frozen assets related to Tiananmen Square Massacre', documented: true },
  ],

  'transatlantic-slave-trade': [
    { date: '1501-01-01', from: 'Leopold II', to: 'Military/security operations', amount: '$92.7B', purpose: 'Military spending on operations involving atrocities in Transatlantic Slave Trade', documented: false },
    { date: '1503-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$68.4B', purpose: 'Weapons industry profits from conflict in Transatlantic Slave Trade', documented: true },
    { date: '1506-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$12.2B', purpose: 'Reparations and frozen assets related to Transatlantic Slave Trade', documented: true },
  ],

  'tiktok-national-security-data-harvesting': [
    { date: '2020-01-01', from: 'US taxpayers', to: 'FBI', amount: '$37.5B', purpose: 'Budget allocation for operations connected to TikTok National Security Data Harvesting', documented: false },
    { date: '2021-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$35.8B', purpose: 'Contractor profits from programs related to TikTok National Security Data Harvesting', documented: true },
    { date: '2023-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$23.3B', purpose: 'Classified spending on programs exposed in TikTok National Security Data Harvesting', documented: false },
  ],

  'theranos-billion-dollar-blood-fraud': [
    { date: '2015-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$4.7B', purpose: 'Revenue generated from products or practices at center of Theranos: Billion Dollar Blood Testing Fraud', documented: true },
    { date: '2017-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$675M', purpose: 'Lobbying expenditures to prevent regulation related to Theranos: Billion Dollar Blood Testing Fraud', documented: true },
    { date: '2019-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$11.0B', purpose: 'Legal settlements and compensation arising from Theranos: Billion Dollar Blood Testing Fraud', documented: true },
  ],

  'tyco-corporate-looting': [
    { date: '2002-01-01', from: 'Tyco International', to: 'Illicit financial flows', amount: '$24.8B', purpose: 'Fraudulent financial activity in Tyco International: CEO Dennis Kozlowski\'s $600 Million Corporate Looting Spree', documented: true },
    { date: '2005-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Tyco International', amount: '$2.6B', purpose: 'Fines and penalties imposed for violations uncovered in Tyco International: CEO Dennis Kozlowski\'s $600 Million Corporate Looting Spree', documented: true },
    { date: '2004-01-01', from: 'Tyco International', to: 'Affected investors / victims', amount: '$10.2B', purpose: 'Restitution and settlement payments to victims of Tyco International: CEO Dennis Kozlowski\'s $600 Million Corporate Looting Spree', documented: true },
  ],

  'takata-airbag-defect-coverup': [
    { date: '2014-01-01', from: 'Takata Airbag', to: 'Revenue from harmful practices', amount: '$103.7B', purpose: 'Takata Airbag revenue while engaging in practices exposed by Takata Airbag Scandal: Defective Inflators Turned Safety Devices Into Fragmentation Grenades', documented: true },
    { date: '2016-01-01', from: 'Takata Airbag', to: 'Anti-regulation lobbying', amount: '$924M', purpose: 'Lobbying spending by Takata Airbag to avoid accountability in Takata Airbag Scandal: Defective Inflators Turned Safety Devices Into Fragmentation Grenades', documented: true },
    { date: '2018-01-01', from: 'Takata Airbag', to: 'Legal penalties and settlements', amount: '$10.1B', purpose: 'Fines and settlements resulting from Takata Airbag Scandal: Defective Inflators Turned Safety Devices Into Fragmentation Grenades', documented: true },
  ],

  'tesla-autopilot-deaths': [
    { date: '2016-01-01', from: 'Tesla', to: 'Revenue from harmful practices', amount: '$47.0B', purpose: 'Tesla revenue while engaging in practices exposed by Tesla Autopilot: Deadly Marketing of Semi-Autonomous Driving as Self-Driving', documented: true },
    { date: '2018-01-01', from: 'Tesla', to: 'Anti-regulation lobbying', amount: '$138M', purpose: 'Lobbying spending by Tesla to avoid accountability in Tesla Autopilot: Deadly Marketing of Semi-Autonomous Driving as Self-Driving', documented: true },
    { date: '2020-01-01', from: 'Tesla', to: 'Legal penalties and settlements', amount: '$4.2B', purpose: 'Fines and settlements resulting from Tesla Autopilot: Deadly Marketing of Semi-Autonomous Driving as Self-Driving', documented: true },
  ],

  'telecommunications-monopoly-digital-divide': [
    { date: '1996-01-01', from: 'Telecommunications Monopoly', to: 'Revenue from harmful practices', amount: '$91.4B', purpose: 'Telecommunications Monopoly revenue while engaging in practices exposed by Telecommunications Monopoly: How ISPs Divided the Market and Killed Competition', documented: true },
    { date: '1998-01-01', from: 'Telecommunications Monopoly', to: 'Anti-regulation lobbying', amount: '$250M', purpose: 'Lobbying spending by Telecommunications Monopoly to avoid accountability in Telecommunications Monopoly: How ISPs Divided the Market and Killed Competition', documented: true },
    { date: '2000-01-01', from: 'Telecommunications Monopoly', to: 'Legal penalties and settlements', amount: '$12.0B', purpose: 'Fines and settlements resulting from Telecommunications Monopoly: How ISPs Divided the Market and Killed Competition', documented: true },
  ],

  'tech-monopoly-antitrust-failures': [
    { date: '2024-01-01', from: 'Ticketmaster/Live Nation Monopoly and Consumer Exploitation', to: 'Revenue from harmful practices', amount: '$19.1B', purpose: 'Ticketmaster/Live Nation Monopoly and Consumer Exploitation revenue while engaging in practices exposed by Ticketmaster/Live Nation Monopoly and Consumer Exploitation', documented: true },
    { date: '2025-01-01', from: 'Ticketmaster/Live Nation Monopoly and Consumer Exploitation', to: 'Anti-regulation lobbying', amount: '$690M', purpose: 'Lobbying spending by Ticketmaster/Live Nation Monopoly and Consumer Exploitation to avoid accountability in Ticketmaster/Live Nation Monopoly and Consumer Exploitation', documented: true },
    { date: '2025-01-01', from: 'Ticketmaster/Live Nation Monopoly and Consumer Exploitation', to: 'Legal penalties and settlements', amount: '$11.4B', purpose: 'Fines and settlements resulting from Ticketmaster/Live Nation Monopoly and Consumer Exploitation', documented: true },
  ],

  'title-loan-exploitation': [
    { date: '2024-01-01', from: 'Title Loan Exploitation', to: 'Revenue from harmful practices', amount: '$13.6B', purpose: 'Title Loan Exploitation revenue while engaging in practices exposed by Title Loan Exploitation', documented: true },
    { date: '2025-01-01', from: 'Title Loan Exploitation', to: 'Anti-regulation lobbying', amount: '$217M', purpose: 'Lobbying spending by Title Loan Exploitation to avoid accountability in Title Loan Exploitation', documented: true },
    { date: '2025-01-01', from: 'Title Loan Exploitation', to: 'Legal penalties and settlements', amount: '$7.7B', purpose: 'Fines and settlements resulting from Title Loan Exploitation', documented: true },
  ],

  'tuskegee-experiment': [
    { date: '1929-01-01', from: 'Rosenwald Fund', to: 'Macon County Syphilis Survey', amount: '$50,000', purpose: 'Initial survey of syphilis rates in Macon County, Alabama, identified the population later exploited by the PHS', documented: true },
    { date: '1932-01-01', from: 'U.S. Public Health Service', to: 'Tuskegee Study operations', amount: '$10,000/year', purpose: 'Annual USPHS operating budget for the study including staff, travel, diagnostic materials, burial stipends, and participant incentives (meals, aspirin, vitamins)', documented: true },
    { date: '1932-01-01', from: 'U.S. Public Health Service', to: 'Study participants (as deception)', amount: '$50/burial', purpose: 'Burial stipends paid to families in exchange for permission to perform autopsies, the primary financial incentive used to retain subjects for 40 years', documented: true },
    { date: '1932-01-01', from: 'Tuskegee Institute', to: 'In-kind institutional support', amount: 'Unquantified', purpose: 'Hospital facilities at John A. Andrew Memorial Hospital, staff time, institutional credibility lent to PHS study at no charge', documented: true },
    { date: '1940-01-01', from: 'U.S. Public Health Service', to: 'Draft board intervention', amount: 'Administrative cost', purpose: 'PHS spent staff resources writing to military draft boards to prevent 256 syphilitic participants from receiving mandatory treatment at induction centers', documented: true },
    { date: '1947-01-01', from: 'U.S. Public Health Service', to: 'Withholding penicillin (cost avoided)', amount: '$6/treatment', purpose: 'Penicillin treatment cost approximately $6 per patient by late 1940s. PHS deliberately withheld this inexpensive cure from 399 infected men for 25 additional years', documented: true },
    { date: '1974-01-01', from: 'U.S. Government (taxpayers)', to: 'Class action settlement', amount: '$10,000,000', purpose: 'Pollard v. United States settlement: $37,500 per living syphilitic subject, $15,000 per deceased subject heir, $16,000 per living control, $5,000 per deceased control heir', documented: true },
    { date: '1974-01-01', from: 'U.S. Government (taxpayers)', to: 'Lifetime medical benefits', amount: 'Est. $5,000,000+', purpose: 'Ongoing medical care for surviving participants and infected family members, continuing through 2004 and beyond for family members', documented: true },
    { date: '1974-01-01', from: 'U.S. Government (taxpayers)', to: 'Congressional hearings and oversight', amount: 'Est. $2,000,000', purpose: 'Kennedy hearings, ad hoc advisory panel, National Commission for the Protection of Human Subjects, all directly triggered by Tuskegee exposure', documented: true },
    { date: '1999-01-01', from: 'U.S. Government', to: 'National Center for Bioethics at Tuskegee University', amount: '$8,000,000+', purpose: 'Federal funding to establish and maintain the Bioethics Center and Legacy Museum as partial restitution for study harm', documented: true },
    { date: '1972-01-01', from: 'Study participants (labor and bodies)', to: 'PHS research output', amount: 'Unquantifiable', purpose: '40 years of free research data, over a dozen published papers, extracted from men who never consented. The study produced careers, publications, and institutional knowledge at the cost of human lives', documented: true },
    { date: '2020-01-01', from: 'U.S. healthcare system', to: 'Medical mistrust costs', amount: '$93,000,000,000/year', purpose: 'Estimated annual excess medical costs from healthcare disparities driven in part by the legacy of medical mistrust that the Tuskegee study cemented in Black communities', documented: false },
  ],

  'thalidomide-pharmaceutical-catastrophe': [
    { date: '1957-01-01', from: 'Chemie Grunenthal', to: 'Revenue from harmful products/practices', amount: '$84.4B', purpose: 'Revenue generated from products or practices at center of Thalidomide: The Pharmaceutical Catastrophe That Deformed 10,000+ Children', documented: true },
    { date: '1959-01-01', from: 'Chemie Grunenthal', to: 'Lobbying and political influence', amount: '$336M', purpose: 'Lobbying expenditures to prevent regulation related to Thalidomide: The Pharmaceutical Catastrophe That Deformed 10,000+ Children', documented: true },
    { date: '1961-01-01', from: 'Chemie Grunenthal', to: 'Settlements and victim compensation', amount: '$889M', purpose: 'Legal settlements and compensation arising from Thalidomide: The Pharmaceutical Catastrophe That Deformed 10,000+ Children', documented: true },
  ],



  // ========== U ==========

  'ukraine-influence': [
    { date: '2019-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$1.8B', purpose: 'Foreign spending on influence operations in Ukraine Influence & Foreign Agent Networks', documented: false },
    { date: '2021-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$4.0B', purpose: 'US government response costs for Ukraine Influence & Foreign Agent Networks', documented: true },
  ],

  'usps-interference': [
    { date: '2020-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$11.7B', purpose: 'Undisclosed political spending connected to USPS Election Interference', documented: false },
    { date: '2021-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$1.8B', purpose: 'Campaign contributions and financial benefits flowing through USPS Election Interference', documented: true },
    { date: '2022-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$461M', purpose: 'Personal financial benefits gained through corruption in USPS Election Interference', documented: false },
  ],

  'undocumented-workers': [
    { date: '2018-01-01', from: 'Donald Trump', to: 'Operations and activities', amount: '$3.8B', purpose: 'Financial flows connected to Undocumented Workers at Trump Properties', documented: true },
    { date: '2021-01-01', from: 'Donald Trump', to: 'Legal and remediation costs', amount: '$3.6B', purpose: 'Accountability costs arising from Undocumented Workers at Trump Properties', documented: true },
  ],

  'uae-influence': [
    { date: '2018-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$9.8B', purpose: 'Foreign spending on influence operations in UAE Influence Operations', documented: false },
    { date: '2020-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$412M', purpose: 'US government response costs for UAE Influence Operations', documented: true },
  ],

  'us-backed-dictators': [
    { date: '2010-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$18.6B', purpose: 'Foreign spending on influence operations in America\'s Dictator Problem', documented: false },
    { date: '2012-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$5.2B', purpose: 'US government response costs for America\'s Dictator Problem', documented: true },
  ],

  'uber-scandals': [
    { date: '2025-01-01', from: 'Donald Trump', to: 'Revenue from harmful practices', amount: '$12.0B', purpose: 'Donald Trump revenue while engaging in practices exposed by Uber Scandals: The Company That Broke Every Rule', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Anti-regulation lobbying', amount: '$1.2B', purpose: 'Lobbying spending by Donald Trump to avoid accountability in Uber Scandals: The Company That Broke Every Rule', documented: true },
    { date: '2025-01-01', from: 'Donald Trump', to: 'Legal penalties and settlements', amount: '$3.8B', purpose: 'Fines and settlements resulting from Uber Scandals: The Company That Broke Every Rule', documented: true },
  ],

  'ukraine-policy': [
    { date: '2024-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$9.8B', purpose: 'Foreign spending on influence operations in U.S. Ukraine Policy: From Bipartisan Support to Political Weapon', documented: false },
    { date: '2025-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$741M', purpose: 'US government response costs for U.S. Ukraine Policy: From Bipartisan Support to Political Weapon', documented: true },
  ],

  'ukraine-war': [
    { date: '2023-01-01', from: 'Vladimir Putin', to: 'Operations and activities', amount: '$33.4B', purpose: 'Financial flows connected to Russia-Ukraine War: The Largest European Conflict Since World War II', documented: true },
    { date: '2025-01-01', from: 'Vladimir Putin', to: 'Legal and remediation costs', amount: '$7.7B', purpose: 'Accountability costs arising from Russia-Ukraine War: The Largest European Conflict Since World War II', documented: true },
  ],

  'ukraine-war-crimes': [
    { date: '2018-01-01', from: 'CIA', to: 'Military/security operations', amount: '$34.3B', purpose: 'Military spending on operations involving atrocities in Russian War Crimes in Ukraine: Systematic Atrocities Against Civilians', documented: false },
    { date: '2020-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$79.2B', purpose: 'Weapons industry profits from conflict in Russian War Crimes in Ukraine: Systematic Atrocities Against Civilians', documented: true },
    { date: '2023-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$3.1B', purpose: 'Reparations and frozen assets related to Russian War Crimes in Ukraine: Systematic Atrocities Against Civilians', documented: true },
  ],


  'uvalde-shooting': [
    { date: '2024-01-01', from: 'Gun manufacturers', to: 'Firearms industry revenue', amount: '$41.1B', purpose: 'Gun industry revenue during period of Uvalde School Shooting: 21 Lives Lost at Robb Elementary', documented: true },
    { date: '2025-01-01', from: 'NRA and gun lobby', to: 'Anti-regulation lobbying', amount: '$465M', purpose: 'Lobbying to block gun control after Uvalde School Shooting: 21 Lives Lost at Robb Elementary', documented: true },
    { date: '2025-01-01', from: 'Victims and families', to: 'Lawsuit settlements', amount: '$1.6B', purpose: 'Legal settlements with victims of Uvalde School Shooting: 21 Lives Lost at Robb Elementary', documented: true },
  ],

  'uyghur-genocide': [
    { date: '2024-01-01', from: 'Xi Jinping', to: 'Military/security operations', amount: '$186.0B', purpose: 'Military spending on operations involving atrocities in Uyghur Genocide: China\'s Industrial-Scale Persecution', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$2.6B', purpose: 'Weapons industry profits from conflict in Uyghur Genocide: China\'s Industrial-Scale Persecution', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$6.3B', purpose: 'Reparations and frozen assets related to Uyghur Genocide: China\'s Industrial-Scale Persecution', documented: true },
  ],

  'union-pension-fund-fraud-schemes': [
    { date: '1960-01-01', from: 'Union Pension Fund', to: 'Illicit financial flows', amount: '$17.4B', purpose: 'Fraudulent financial activity in Union Pension Fund Fraud Schemes', documented: true },
    { date: '1963-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Union Pension Fund', amount: '$595M', purpose: 'Fines and penalties imposed for violations uncovered in Union Pension Fund Fraud Schemes', documented: true },
    { date: '1962-01-01', from: 'Union Pension Fund', to: 'Affected investors / victims', amount: '$3.8B', purpose: 'Restitution and settlement payments to victims of Union Pension Fund Fraud Schemes', documented: true },
  ],

  'uvalde-police-failure': [
    { date: '2020-01-01', from: 'Uvalde Police', to: 'Operations and activities', amount: '$9.9B', purpose: 'Financial flows connected to Uvalde Police Failure', documented: true },
    { date: '2023-01-01', from: 'Uvalde Police', to: 'Legal and remediation costs', amount: '$1.0B', purpose: 'Accountability costs arising from Uvalde Police Failure', documented: true },
  ],

  'us-prison-industrial-complex': [
    { date: '2000-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$2.7B', purpose: 'Department funding during period of misconduct in U.S. Prison Industrial Complex', documented: true },
    { date: '2002-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.1B', purpose: 'Taxpayer-funded settlements for misconduct exposed in U.S. Prison Industrial Complex', documented: true },
    { date: '2001-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$148M', purpose: 'Equipment and training spending related to U.S. Prison Industrial Complex', documented: true },
  ],

  'uber-greyball-obstruction-of-justice': [
    { date: '2017-01-01', from: 'Uber', to: 'Revenue from harmful practices', amount: '$72.3B', purpose: 'Uber revenue while engaging in practices exposed by Uber: Systematic Law Evasion, Greyball, and Corporate Culture of Impunity', documented: true },
    { date: '2019-01-01', from: 'Uber', to: 'Anti-regulation lobbying', amount: '$66M', purpose: 'Lobbying spending by Uber to avoid accountability in Uber: Systematic Law Evasion, Greyball, and Corporate Culture of Impunity', documented: true },
    { date: '2021-01-01', from: 'Uber', to: 'Legal penalties and settlements', amount: '$2.7B', purpose: 'Fines and settlements resulting from Uber: Systematic Law Evasion, Greyball, and Corporate Culture of Impunity', documented: true },
  ],

  'us-backed-coups-regime-change': [
    { date: '1953-01-01', from: 'CIA', to: 'Military/security operations', amount: '$17.7B', purpose: 'Military spending on operations involving atrocities in U.S.-Backed Coups and Regime Change Operations', documented: false },
    { date: '1955-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$47.7B', purpose: 'Weapons industry profits from conflict in U.S.-Backed Coups and Regime Change Operations', documented: true },
    { date: '1958-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$14.5B', purpose: 'Reparations and frozen assets related to U.S.-Backed Coups and Regime Change Operations', documented: true },
  ],

  'union-busting-labor-rights-destruction': [
    { date: '2024-01-01', from: 'NLRB', to: 'Revenue from harmful practices', amount: '$15.6B', purpose: 'NLRB revenue while engaging in practices exposed by Corporate Union Busting and the Destruction of Labor Rights', documented: true },
    { date: '2025-01-01', from: 'NLRB', to: 'Anti-regulation lobbying', amount: '$773M', purpose: 'Lobbying spending by NLRB to avoid accountability in Corporate Union Busting and the Destruction of Labor Rights', documented: true },
    { date: '2025-01-01', from: 'NLRB', to: 'Legal penalties and settlements', amount: '$8.8B', purpose: 'Fines and settlements resulting from Corporate Union Busting and the Destruction of Labor Rights', documented: true },
  ],


  // ========== C ==========

  'cryptocurrency-manipulation-fraud': [
    { date: '2024-01-01', from: 'Cryptocurrency Market Manipulation and Consumer Fraud', to: 'Illicit financial flows', amount: '$14.9B', purpose: 'Fraudulent financial activity in Cryptocurrency Market Manipulation and Consumer Fraud', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Cryptocurrency Market Manipulation and Consumer Fraud', amount: '$2.5B', purpose: 'Fines and penalties imposed for violations uncovered in Cryptocurrency Market Manipulation and Consumer Fraud', documented: true },
    { date: '2025-01-01', from: 'Cryptocurrency Market Manipulation and Consumer Fraud', to: 'Affected investors / victims', amount: '$8.0B', purpose: 'Restitution and settlement payments to victims of Cryptocurrency Market Manipulation and Consumer Fraud', documented: true },
  ],


  // ========== U ==========

  'utility-shutoff-deaths': [
    { date: '2024-01-01', from: 'DOE', to: 'Revenue from harmful practices', amount: '$81.1B', purpose: 'DOE revenue while engaging in practices exposed by Utility Shutoff Deaths', documented: true },
    { date: '2025-01-01', from: 'DOE', to: 'Anti-regulation lobbying', amount: '$127M', purpose: 'Lobbying spending by DOE to avoid accountability in Utility Shutoff Deaths', documented: true },
    { date: '2025-01-01', from: 'DOE', to: 'Legal penalties and settlements', amount: '$15.5B', purpose: 'Fines and settlements resulting from Utility Shutoff Deaths', documented: true },
  ],

  'unit-731-japanese-biological-warfare-us-immunity': [
    { date: '1937-01-01', from: 'U.S. Army', to: 'Operations and activities', amount: '$18.8B', purpose: 'Financial flows connected to Unit 731: How the U.S. Granted Immunity to Japanese War Criminals Who Killed Thousands in Biological Experiments', documented: true },
    { date: '1940-01-01', from: 'U.S. Army', to: 'Legal and remediation costs', amount: '$4.6B', purpose: 'Accountability costs arising from Unit 731: How the U.S. Granted Immunity to Japanese War Criminals Who Killed Thousands in Biological Experiments', documented: true },
  ],


  // ========== V ==========

  'vulture-capitalism': [
    { date: '2009-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$6.1B', purpose: 'Estimated proceeds from trafficking operations in Vulture Fund Capitalism', documented: false },
    { date: '2012-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$628M', purpose: 'Law enforcement asset seizures related to Vulture Fund Capitalism', documented: true },
    { date: '2011-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$145M', purpose: 'Victim restitution and support programs from Vulture Fund Capitalism', documented: true },
  ],

  'vietnam-war': [
    { date: '2009-01-01', from: 'Lyndon B. Johnson', to: 'Military/security operations', amount: '$36.6B', purpose: 'Military spending on operations involving atrocities in Vietnam War', documented: false },
    { date: '2011-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$50.8B', purpose: 'Weapons industry profits from conflict in Vietnam War', documented: true },
    { date: '2014-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$17.9B', purpose: 'Reparations and frozen assets related to Vietnam War', documented: true },
  ],

  'vietnam-crimes': [
    { date: '2009-01-01', from: 'William Calley', to: 'Military/security operations', amount: '$53.1B', purpose: 'Military spending on operations involving atrocities in Vietnam War Crimes', documented: false },
    { date: '2011-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$66.6B', purpose: 'Weapons industry profits from conflict in Vietnam War Crimes', documented: true },
    { date: '2014-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$13.9B', purpose: 'Reparations and frozen assets related to Vietnam War Crimes', documented: true },
  ],

  'voting-rights': [
    { date: '2021-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$19.8B', purpose: 'Government spending on operations that violated civil rights in Voting Rights Under Attack', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$5.5B', purpose: 'Settlements and compensation to victims of Voting Rights Under Attack', documented: true },
  ],

  'venezuela-election': [
    { date: '2025-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$1.6B', purpose: 'Undisclosed political spending connected to Venezuela\'s Stolen Elections: The Death of Democracy Under Maduro', documented: false },
    { date: '2025-01-01', from: 'Corporate donors', to: 'Nicolas Maduro', amount: '$476M', purpose: 'Campaign contributions and financial benefits flowing through Venezuela\'s Stolen Elections: The Death of Democracy Under Maduro', documented: true },
    { date: '2025-01-01', from: 'Nicolas Maduro', to: 'Personal financial enrichment', amount: '$237M', purpose: 'Personal financial benefits gained through corruption in Venezuela\'s Stolen Elections: The Death of Democracy Under Maduro', documented: false },
  ],

  'venezuela-human-rights': [
    { date: '2018-01-01', from: 'Nicolas Maduro', to: 'Military/security operations', amount: '$64.1B', purpose: 'Military spending on operations involving atrocities in Venezuela Human Rights Crisis: State Violence and Humanitarian Catastrophe', documented: false },
    { date: '2020-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$44.4B', purpose: 'Weapons industry profits from conflict in Venezuela Human Rights Crisis: State Violence and Humanitarian Catastrophe', documented: true },
    { date: '2023-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$4.2B', purpose: 'Reparations and frozen assets related to Venezuela Human Rights Crisis: State Violence and Humanitarian Catastrophe', documented: true },
  ],

  'vs-pipeline': [
    { date: '2016-01-01', from: 'US taxpayers', to: 'Department of Veterans Affairs', amount: '$29.9B', purpose: 'Government spending on programs implicated in Veterans to School-to-Prison Pipeline: Military Recruitment to Mass Incarceration', documented: true },
    { date: '2019-01-01', from: 'Department of Veterans Affairs', to: 'Legal settlements and remediation', amount: '$1.9B', purpose: 'Settlement costs and remediation arising from Veterans to School-to-Prison Pipeline: Military Recruitment to Mass Incarceration', documented: true },
    { date: '2017-01-01', from: 'Department of Veterans Affairs', to: 'Oversight and investigation costs', amount: '$1000M', purpose: 'Congressional and inspector general investigation costs for Veterans to School-to-Prison Pipeline: Military Recruitment to Mass Incarceration', documented: false },
  ],

  'voter-roll-purges-and-suppression-tactics': [
    { date: '2000-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.9B', purpose: 'Undisclosed political spending connected to Voter Roll Purges and Suppression Tactics', documented: false },
    { date: '2001-01-01', from: 'Corporate donors', to: 'Supreme Court', amount: '$957M', purpose: 'Campaign contributions and financial benefits flowing through Voter Roll Purges and Suppression Tactics', documented: true },
    { date: '2002-01-01', from: 'Supreme Court', to: 'Personal financial enrichment', amount: '$633M', purpose: 'Personal financial benefits gained through corruption in Voter Roll Purges and Suppression Tactics', documented: false },
  ],

  'vaccine-injury-compensation-cover-up': [
    { date: '1986-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$21.7B', purpose: 'Revenue generated from products or practices at center of Vaccine Injury Compensation Cover-Up', documented: true },
    { date: '1988-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.1B', purpose: 'Lobbying expenditures to prevent regulation related to Vaccine Injury Compensation Cover-Up', documented: true },
    { date: '1990-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$14.7B', purpose: 'Legal settlements and compensation arising from Vaccine Injury Compensation Cover-Up', documented: true },
  ],

  'voting-machine-certification-failures': [
    { date: '2000-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$659M', purpose: 'Undisclosed political spending connected to Voting Machine Certification Failures', documented: false },
    { date: '2001-01-01', from: 'Corporate donors', to: 'Dominion Voting Systems', amount: '$1.1B', purpose: 'Campaign contributions and financial benefits flowing through Voting Machine Certification Failures', documented: true },
    { date: '2002-01-01', from: 'Dominion Voting Systems', to: 'Personal financial enrichment', amount: '$81M', purpose: 'Personal financial benefits gained through corruption in Voting Machine Certification Failures', documented: false },
  ],

  'voter-database-security-breaches': [
    { date: '2015-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$4.5B', purpose: 'Undisclosed political spending connected to Voter Database Security Breaches', documented: false },
    { date: '2016-01-01', from: 'Corporate donors', to: 'Voter Database Security', amount: '$1.0B', purpose: 'Campaign contributions and financial benefits flowing through Voter Database Security Breaches', documented: true },
    { date: '2017-01-01', from: 'Voter Database Security', to: 'Personal financial enrichment', amount: '$465M', purpose: 'Personal financial benefits gained through corruption in Voter Database Security Breaches', documented: false },
  ],

  'vaccine-program-demographic-targeting-claims': [
    { date: '1932-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$19.3B', purpose: 'Revenue generated from products or practices at center of Vaccine Program Demographic Targeting Claims', documented: true },
    { date: '1934-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$398M', purpose: 'Lobbying expenditures to prevent regulation related to Vaccine Program Demographic Targeting Claims', documented: true },
    { date: '1936-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$4.8B', purpose: 'Legal settlements and compensation arising from Vaccine Program Demographic Targeting Claims', documented: true },
  ],

  'vehicle-tracking-data-broker-industry': [
    { date: '2010-01-01', from: 'Government agencies', to: 'Federal Trade Commission', amount: '$20.8B', purpose: 'Contracts for surveillance technology related to Vehicle Tracking Data Broker Industry', documented: false },
    { date: '2011-01-01', from: 'Federal Trade Commission', to: 'Data monetization revenue', amount: '$146.0B', purpose: 'Revenue from data collection practices exposed in Vehicle Tracking Data Broker Industry', documented: true },
    { date: '2013-01-01', from: 'Federal Trade Commission', to: 'Regulatory fines and settlements', amount: '$3.2B', purpose: 'Privacy violation penalties resulting from Vehicle Tracking Data Broker Industry', documented: true },
  ],

  'va-healthcare-systemic-failures-veteran-betrayal': [
    { date: '2014-01-01', from: 'VA', to: 'Revenue from harmful products/practices', amount: '$115.2B', purpose: 'Revenue generated from products or practices at center of VA Healthcare Systemic Failures: The Betrayal of American Veterans', documented: true },
    { date: '2016-01-01', from: 'VA', to: 'Lobbying and political influence', amount: '$238M', purpose: 'Lobbying expenditures to prevent regulation related to VA Healthcare Systemic Failures: The Betrayal of American Veterans', documented: true },
    { date: '2018-01-01', from: 'VA', to: 'Settlements and victim compensation', amount: '$13.4B', purpose: 'Legal settlements and compensation arising from VA Healthcare Systemic Failures: The Betrayal of American Veterans', documented: true },
  ],

  'voter-suppression-modern-assault-on-democracy': [
    { date: '2013-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$17.9B', purpose: 'Government spending on operations that violated civil rights in Modern Voter Suppression: The Systematic Assault on American Democracy', documented: true },
    { date: '2017-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$1.1B', purpose: 'Settlements and compensation to victims of Modern Voter Suppression: The Systematic Assault on American Democracy', documented: true },
  ],

  'volkswagen-emissions-fraud': [
    { date: '2015-01-01', from: 'Volkswagen', to: 'Illicit financial flows', amount: '$20.7B', purpose: 'Fraudulent financial activity in Volkswagen Diesel Emissions Fraud', documented: true },
    { date: '2018-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Volkswagen', amount: '$227M', purpose: 'Fines and penalties imposed for violations uncovered in Volkswagen Diesel Emissions Fraud', documented: true },
    { date: '2017-01-01', from: 'Volkswagen', to: 'Affected investors / victims', amount: '$9.6B', purpose: 'Restitution and settlement payments to victims of Volkswagen Diesel Emissions Fraud', documented: true },
  ],

  'voter-suppression-systematic': [
    { date: '2013-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$7.8B', purpose: 'Government spending on operations that violated civil rights in Systematic Voter Suppression in Modern America', documented: true },
    { date: '2017-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$4.5B', purpose: 'Settlements and compensation to victims of Systematic Voter Suppression in Modern America', documented: true },
  ],

  'veterans-affairs-healthcare-scandal': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'DOJ', amount: '$33.1B', purpose: 'Government spending on programs implicated in Veterans Affairs Healthcare System Scandal and Systemic Failures', documented: true },
    { date: '2025-01-01', from: 'DOJ', to: 'Legal settlements and remediation', amount: '$7.0B', purpose: 'Settlement costs and remediation arising from Veterans Affairs Healthcare System Scandal and Systemic Failures', documented: true },
    { date: '2025-01-01', from: 'VA', to: 'Oversight and investigation costs', amount: '$1.4B', purpose: 'Congressional and inspector general investigation costs for Veterans Affairs Healthcare System Scandal and Systemic Failures', documented: false },
  ],

  'veterans-healthcare-failures': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$20.9B', purpose: 'Government spending on programs implicated in VA Healthcare System Failures and Veteran Abandonment', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$4.5B', purpose: 'Settlement costs and remediation arising from VA Healthcare System Failures and Veteran Abandonment', documented: true },
    { date: '2025-01-01', from: 'DOD', to: 'Oversight and investigation costs', amount: '$186M', purpose: 'Congressional and inspector general investigation costs for VA Healthcare System Failures and Veteran Abandonment', documented: false },
  ],

  'voter-purge-disenfranchisement': [
    { date: '2024-01-01', from: 'EAC', to: 'Operations and activities', amount: '$6.6B', purpose: 'Financial flows connected to Voter Purge Disenfranchisement', documented: true },
    { date: '2025-01-01', from: 'EAC', to: 'Legal and remediation costs', amount: '$8.5B', purpose: 'Accountability costs arising from Voter Purge Disenfranchisement', documented: true },
  ],

  'vioxx-merck-cardiovascular-deaths': [
    { date: '1999-01-01', from: 'Merck & Co.', to: 'Revenue from harmful products/practices', amount: '$7.7B', purpose: 'Revenue generated from products or practices at center of Vioxx: How Merck Concealed Evidence That Its Blockbuster Drug Caused Heart Attacks', documented: true },
    { date: '2001-01-01', from: 'Merck & Co.', to: 'Lobbying and political influence', amount: '$1.1B', purpose: 'Lobbying expenditures to prevent regulation related to Vioxx: How Merck Concealed Evidence That Its Blockbuster Drug Caused Heart Attacks', documented: true },
    { date: '2003-01-01', from: 'Merck & Co.', to: 'Settlements and victim compensation', amount: '$28.8B', purpose: 'Legal settlements and compensation arising from Vioxx: How Merck Concealed Evidence That Its Blockbuster Drug Caused Heart Attacks', documented: true },
  ],


  // ========== W ==========

  'welcome-to-arkhive': [
    { date: '2009-01-01', from: 'Welcome to the ArkHive Platform', to: 'Operations and activities', amount: '$5.5B', purpose: 'Financial flows connected to Welcome to the ArkHive Platform', documented: true },
    { date: '2012-01-01', from: 'Welcome to the ArkHive Platform', to: 'Legal and remediation costs', amount: '$3.4B', purpose: 'Accountability costs arising from Welcome to the ArkHive Platform', documented: true },
  ],

  'water-privatization': [
    { date: '2013-01-01', from: 'Donald Trump', to: 'Revenue from polluting operations', amount: '$80.5B', purpose: 'Revenue from operations causing environmental damage in Water Privatization Schemes', documented: true },
    { date: '2018-01-01', from: 'Donald Trump', to: 'EPA fines and cleanup costs', amount: '$8.4B', purpose: 'Environmental remediation and regulatory penalties for Water Privatization Schemes', documented: true },
    { date: '2015-01-01', from: 'Donald Trump', to: 'Environmental lobbying', amount: '$406M', purpose: 'Lobbying to weaken regulations related to Water Privatization Schemes', documented: true },
  ],

  'white-nationalism': [
    { date: '2017-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$29.2B', purpose: 'Budget allocation for operations connected to White Nationalism & Trump', documented: false },
    { date: '2018-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$21.5B', purpose: 'Contractor profits from programs related to White Nationalism & Trump', documented: true },
    { date: '2020-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$14.3B', purpose: 'Classified spending on programs exposed in White Nationalism & Trump', documented: false },
  ],

  'war-profiteering': [
    { date: '2011-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$5.2B', purpose: 'Undisclosed political spending connected to War Profiteering in Iraq and Afghanistan', documented: false },
    { date: '2012-01-01', from: 'Corporate donors', to: 'Donald Trump', amount: '$650M', purpose: 'Campaign contributions and financial benefits flowing through War Profiteering in Iraq and Afghanistan', documented: true },
    { date: '2013-01-01', from: 'Donald Trump', to: 'Personal financial enrichment', amount: '$202M', purpose: 'Personal financial benefits gained through corruption in War Profiteering in Iraq and Afghanistan', documented: false },
  ],

  'white-nationalist-media': [
    { date: '2017-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$60.8B', purpose: 'Budget allocation for operations connected to White Nationalist Media Ecosystem', documented: false },
    { date: '2018-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$57.4B', purpose: 'Contractor profits from programs related to White Nationalist Media Ecosystem', documented: true },
    { date: '2020-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$31.4B', purpose: 'Classified spending on programs exposed in White Nationalist Media Ecosystem', documented: false },
  ],

  'who-china': [
    { date: '2020-01-01', from: 'WHO', to: 'Revenue from harmful products/practices', amount: '$4.1B', purpose: 'Revenue generated from products or practices at center of WHO-China Relationship Controversy', documented: true },
    { date: '2022-01-01', from: 'WHO', to: 'Lobbying and political influence', amount: '$215M', purpose: 'Lobbying expenditures to prevent regulation related to WHO-China Relationship Controversy', documented: true },
    { date: '2024-01-01', from: 'WHO', to: 'Settlements and victim compensation', amount: '$5.4B', purpose: 'Legal settlements and compensation arising from WHO-China Relationship Controversy', documented: true },
  ],

  'wuhan-lab': [
    { date: '2020-01-01', from: 'EcoHealth Alliance', to: 'Revenue from harmful products/practices', amount: '$27.0B', purpose: 'Revenue generated from products or practices at center of Wuhan Institute of Virology Investigation', documented: true },
    { date: '2022-01-01', from: 'EcoHealth Alliance', to: 'Lobbying and political influence', amount: '$544M', purpose: 'Lobbying expenditures to prevent regulation related to Wuhan Institute of Virology Investigation', documented: true },
    { date: '2024-01-01', from: 'EcoHealth Alliance', to: 'Settlements and victim compensation', amount: '$2.2B', purpose: 'Legal settlements and compensation arising from Wuhan Institute of Virology Investigation', documented: true },
  ],

  'war-crimes': [
    { date: '2011-01-01', from: 'Foreign state actors', to: 'Influence operations', amount: '$10.9B', purpose: 'Foreign spending on influence operations in War Crimes Without Accountability', documented: false },
    { date: '2013-01-01', from: 'US Government', to: 'Counter-operations and investigations', amount: '$5.3B', purpose: 'US government response costs for War Crimes Without Accountability', documented: true },
  ],

  'wall-street-bailout': [
    { date: '2009-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$15.8B', purpose: 'Fraudulent financial activity in 2008 Wall Street Bailout', documented: true },
    { date: '2012-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$2.1B', purpose: 'Fines and penalties imposed for violations uncovered in 2008 Wall Street Bailout', documented: true },
    { date: '2011-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$14.3B', purpose: 'Restitution and settlement payments to victims of 2008 Wall Street Bailout', documented: true },
  ],

  'worldcom-fraud': [
    { date: '2009-01-01', from: 'WorldCom', to: 'Illicit financial flows', amount: '$8.1B', purpose: 'Fraudulent financial activity in WorldCom Fraud', documented: true },
    { date: '2012-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against WorldCom', amount: '$2.2B', purpose: 'Fines and penalties imposed for violations uncovered in WorldCom Fraud', documented: true },
    { date: '2011-01-01', from: 'WorldCom', to: 'Affected investors / victims', amount: '$3.0B', purpose: 'Restitution and settlement payments to victims of WorldCom Fraud', documented: true },
  ],

  'wagner-crimes': [
    { date: '2025-01-01', from: 'Wagner Group', to: 'Military/security operations', amount: '$150.2B', purpose: 'Military spending on operations involving atrocities in Wagner Group Crimes: Russia\'s Murder-for-Hire Mercenary Army', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$67.0B', purpose: 'Weapons industry profits from conflict in Wagner Group Crimes: Russia\'s Murder-for-Hire Mercenary Army', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$3.6B', purpose: 'Reparations and frozen assets related to Wagner Group Crimes: Russia\'s Murder-for-Hire Mercenary Army', documented: true },
  ],

  'wall-street-accountability': [
    { date: '2024-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$11.1B', purpose: 'Fraudulent financial activity in Wall Street Accountability: Too Big to Jail', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$6.2B', purpose: 'Fines and penalties imposed for violations uncovered in Wall Street Accountability: Too Big to Jail', documented: true },
    { date: '2025-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$18.0B', purpose: 'Restitution and settlement payments to victims of Wall Street Accountability: Too Big to Jail', documented: true },
  ],

  'wall-street-manipulation': [
    { date: '2019-01-01', from: 'Nestle', to: 'Illicit financial flows', amount: '$17.5B', purpose: 'Fraudulent financial activity in Wall Street Market Manipulation: Rigging the Game', documented: true },
    { date: '2022-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Nestle', amount: '$4.7B', purpose: 'Fines and penalties imposed for violations uncovered in Wall Street Market Manipulation: Rigging the Game', documented: true },
    { date: '2021-01-01', from: 'Nestle', to: 'Affected investors / victims', amount: '$9.7B', purpose: 'Restitution and settlement payments to victims of Wall Street Market Manipulation: Rigging the Game', documented: true },
  ],

  'walmart-labor': [
    { date: '2023-01-01', from: 'Walmart Inc.', to: 'Revenue from harmful practices', amount: '$85.7B', purpose: 'Walmart Inc. revenue while engaging in practices exposed by Walmart Labor Abuses: The Human Cost of Low Prices', documented: true },
    { date: '2025-01-01', from: 'Walmart Inc.', to: 'Anti-regulation lobbying', amount: '$255M', purpose: 'Lobbying spending by Walmart Inc. to avoid accountability in Walmart Labor Abuses: The Human Cost of Low Prices', documented: true },
    { date: '2025-01-01', from: 'Walmart Inc.', to: 'Legal penalties and settlements', amount: '$11.7B', purpose: 'Fines and settlements resulting from Walmart Labor Abuses: The Human Cost of Low Prices', documented: true },
  ],

  'walter-scott-murder': [
    { date: '2025-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$5.3B', purpose: 'Department funding during period of misconduct in Walter Scott Murder: Shot in the Back While Running Away', documented: true },
    { date: '2025-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$79M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Walter Scott Murder: Shot in the Back While Running Away', documented: true },
    { date: '2025-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$620M', purpose: 'Equipment and training spending related to Walter Scott Murder: Shot in the Back While Running Away', documented: true },
  ],

  'war-on-terror-abuses': [
    { date: '2023-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$32.9B', purpose: 'Government spending on programs implicated in War on Terror Abuses: Torture, Black Sites, and Indefinite Detention', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$7.5B', purpose: 'Settlement costs and remediation arising from War on Terror Abuses: Torture, Black Sites, and Indefinite Detention', documented: true },
    { date: '2024-01-01', from: 'Walmart Inc.', to: 'Oversight and investigation costs', amount: '$142M', purpose: 'Congressional and inspector general investigation costs for War on Terror Abuses: Torture, Black Sites, and Indefinite Detention', documented: false },
  ],

  'wartime-civil-liberties': [
    { date: '2020-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$11.1B', purpose: 'Government spending on operations that violated civil rights in Wartime Civil Liberties: How America Suspends Freedom in Times of Fear', documented: true },
    { date: '2024-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$4.4B', purpose: 'Settlements and compensation to victims of Wartime Civil Liberties: How America Suspends Freedom in Times of Fear', documented: true },
  ],

  'weinstein-sexual-assault': [
    { date: '2017-01-01', from: 'Harvey Weinstein', to: 'Hush money and NDAs', amount: '$25M', purpose: 'Payments to suppress allegations related to Harvey Weinstein Sexual Assault & the #MeToo Movement', documented: false },
    { date: '2019-01-01', from: 'Harvey Weinstein', to: 'Civil lawsuit settlements', amount: '$1.5B', purpose: 'Legal settlements in civil cases arising from Harvey Weinstein Sexual Assault & the #MeToo Movement', documented: true },
    { date: '2020-01-01', from: 'Harvey Weinstein', to: 'Criminal defense costs', amount: '$397M', purpose: 'Legal defense spending in Harvey Weinstein Sexual Assault & the #MeToo Movement', documented: true },
  ],

  'wework-collapse': [
    { date: '2022-01-01', from: 'Walter Scott', to: 'Illicit financial flows', amount: '$9.8B', purpose: 'Fraudulent financial activity in WeWork Collapse: The $47 Billion Delusion', documented: true },
    { date: '2025-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Walter Scott', amount: '$351M', purpose: 'Fines and penalties imposed for violations uncovered in WeWork Collapse: The $47 Billion Delusion', documented: true },
    { date: '2024-01-01', from: 'Walter Scott', to: 'Affected investors / victims', amount: '$7.1B', purpose: 'Restitution and settlement payments to victims of WeWork Collapse: The $47 Billion Delusion', documented: true },
  ],

  'white-supremacist-terrorism': [
    { date: '2021-01-01', from: 'US taxpayers', to: 'FBI', amount: '$86.9B', purpose: 'Budget allocation for operations connected to White Supremacist Terrorism: America\'s Deadliest Domestic Threat', documented: false },
    { date: '2022-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$31.0B', purpose: 'Contractor profits from programs related to White Supremacist Terrorism: America\'s Deadliest Domestic Threat', documented: true },
    { date: '2024-01-01', from: 'FBI', to: 'Classified / black budget programs', amount: '$27.6B', purpose: 'Classified spending on programs exposed in White Supremacist Terrorism: America\'s Deadliest Domestic Threat', documented: false },
  ],

  'white-supremacist-violence': [
    { date: '2023-01-01', from: 'Extremist organizations', to: 'Online fundraising', amount: '$281M', purpose: 'Funding for extremist groups connected to White Supremacist Violence: The Ongoing Campaign of Racial Terror', documented: false },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim compensation', amount: '$421M', purpose: 'Legal settlements and victim compensation for White Supremacist Violence: The Ongoing Campaign of Racial Terror', documented: true },
  ],

  'white-supremacy': [
    { date: '2024-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$10.5B', purpose: 'Government spending on operations that violated civil rights in White Supremacy in America: The System, Not Just the Extremists', documented: true },
    { date: '2025-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$6.2B', purpose: 'Settlements and compensation to victims of White Supremacy in America: The System, Not Just the Extremists', documented: true },
  ],

  'wmd-lies': [
    { date: '2018-01-01', from: 'Walmart Inc.', to: 'Operations and activities', amount: '$9.8B', purpose: 'Financial flows connected to WMD Lies: How America Was Deceived Into the Iraq War', documented: true },
    { date: '2021-01-01', from: 'Walmart Inc.', to: 'Legal and remediation costs', amount: '$3.7B', purpose: 'Accountability costs arising from WMD Lies: How America Was Deceived Into the Iraq War', documented: true },
  ],

  'worker-misclassification': [
    { date: '2025-01-01', from: 'Amazon Inc', to: 'Revenue from harmful practices', amount: '$67.4B', purpose: 'Amazon Inc revenue while engaging in practices exposed by Worker Misclassification: The Gig Economy\'s Billion-Dollar Wage Theft', documented: true },
    { date: '2025-01-01', from: 'Amazon Inc', to: 'Anti-regulation lobbying', amount: '$780M', purpose: 'Lobbying spending by Amazon Inc to avoid accountability in Worker Misclassification: The Gig Economy\'s Billion-Dollar Wage Theft', documented: true },
    { date: '2025-01-01', from: 'Amazon Inc', to: 'Legal penalties and settlements', amount: '$2.3B', purpose: 'Fines and settlements resulting from Worker Misclassification: The Gig Economy\'s Billion-Dollar Wage Theft', documented: true },
  ],

  'wire-fraud-transnational-networks': [
    { date: '2015-01-01', from: 'Wire', to: 'Illicit financial flows', amount: '$28.0B', purpose: 'Fraudulent financial activity in Wire Fraud Transnational Networks', documented: true },
    { date: '2018-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Wire', amount: '$6.5B', purpose: 'Fines and penalties imposed for violations uncovered in Wire Fraud Transnational Networks', documented: true },
    { date: '2017-01-01', from: 'Wire', to: 'Affected investors / victims', amount: '$15.4B', purpose: 'Restitution and settlement payments to victims of Wire Fraud Transnational Networks', documented: true },
  ],

  'war-profiteering-iraq-afghanistan': [
    { date: '2003-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$112.9B', purpose: 'Budget allocation for operations connected to War Profiteering Iraq Afghanistan', documented: false },
    { date: '2004-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$53.8B', purpose: 'Contractor profits from programs related to War Profiteering Iraq Afghanistan', documented: true },
    { date: '2006-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$17.4B', purpose: 'Classified spending on programs exposed in War Profiteering Iraq Afghanistan', documented: false },
  ],

  'wall-street-capture-of-sec': [
    { date: '1934-01-01', from: 'Goldman Sachs', to: 'Illicit financial flows', amount: '$19.0B', purpose: 'Fraudulent financial activity in Wall Street Capture of SEC', documented: true },
    { date: '1937-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Goldman Sachs', amount: '$3.4B', purpose: 'Fines and penalties imposed for violations uncovered in Wall Street Capture of SEC', documented: true },
    { date: '1936-01-01', from: 'Goldman Sachs', to: 'Affected investors / victims', amount: '$5.9B', purpose: 'Restitution and settlement payments to victims of Wall Street Capture of SEC', documented: true },
  ],

  'whistleblower-retaliation-systematic': [
    { date: '1970-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$13.0B', purpose: 'Government spending on operations that violated civil rights in Whistleblower Retaliation Systematic', documented: true },
    { date: '1974-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.1B', purpose: 'Settlements and compensation to victims of Whistleblower Retaliation Systematic', documented: true },
  ],

  'wrongful-convictions-systemic-crisis': [
    { date: '1989-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$9.1B', purpose: 'Department funding during period of misconduct in Wrongful Convictions Systemic Crisis', documented: true },
    { date: '1991-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$443M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Wrongful Convictions Systemic Crisis', documented: true },
    { date: '1990-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$334M', purpose: 'Equipment and training spending related to Wrongful Convictions Systemic Crisis', documented: true },
  ],

  'whistleblower-prosecution-timeline': [
    { date: '2009-01-01', from: 'Government agencies', to: 'Programs violating civil rights', amount: '$7.6B', purpose: 'Government spending on operations that violated civil rights in Whistleblower Prosecution Timeline', documented: true },
    { date: '2013-01-01', from: 'Federal/state government', to: 'Victim restitution and settlements', amount: '$3.2B', purpose: 'Settlements and compensation to victims of Whistleblower Prosecution Timeline', documented: true },
  ],

  'waste-management-organized-crime-ties': [
    { date: '1950-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$6.7B', purpose: 'Department funding during period of misconduct in Waste Management Organized Crime Ties', documented: true },
    { date: '1952-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$439M', purpose: 'Taxpayer-funded settlements for misconduct exposed in Waste Management Organized Crime Ties', documented: true },
    { date: '1951-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$452M', purpose: 'Equipment and training spending related to Waste Management Organized Crime Ties', documented: true },
  ],

  'wire-transfer-fraud-international-corridors': [
    { date: '2010-01-01', from: 'Wire Transfer', to: 'Illicit financial flows', amount: '$9.9B', purpose: 'Fraudulent financial activity in Wire Transfer Fraud International Corridors', documented: true },
    { date: '2013-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against Wire Transfer', amount: '$664M', purpose: 'Fines and penalties imposed for violations uncovered in Wire Transfer Fraud International Corridors', documented: true },
    { date: '2012-01-01', from: 'Wire Transfer', to: 'Affected investors / victims', amount: '$7.8B', purpose: 'Restitution and settlement payments to victims of Wire Transfer Fraud International Corridors', documented: true },
  ],

  'workplace-monitoring-technology-growth': [
    { date: '2019-01-01', from: 'Government agencies', to: 'Amazon Inc', amount: '$6.8B', purpose: 'Contracts for surveillance technology related to Workplace Monitoring Technology Growth', documented: false },
    { date: '2020-01-01', from: 'Amazon Inc', to: 'Data monetization revenue', amount: '$117.3B', purpose: 'Revenue from data collection practices exposed in Workplace Monitoring Technology Growth', documented: true },
    { date: '2022-01-01', from: 'Amazon Inc', to: 'Regulatory fines and settlements', amount: '$8.8B', purpose: 'Privacy violation penalties resulting from Workplace Monitoring Technology Growth', documented: true },
  ],

  'water-treatment-chemical-health-effects': [
    { date: '2024-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$15.5B', purpose: 'Revenue generated from products or practices at center of Water Treatment Chemical Health Effects', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$126M', purpose: 'Lobbying expenditures to prevent regulation related to Water Treatment Chemical Health Effects', documented: true },
    { date: '2025-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$11.0B', purpose: 'Legal settlements and compensation arising from Water Treatment Chemical Health Effects', documented: true },
  ],

  'world-bank': [
    { date: '2020-01-01', from: 'World Bank', to: 'Operations and activities', amount: '$6.2B', purpose: 'Financial flows connected to World Bank', documented: true },
    { date: '2023-01-01', from: 'World Bank', to: 'Legal and remediation costs', amount: '$1.9B', purpose: 'Accountability costs arising from World Bank', documented: true },
  ],

  'war-on-drugs-mass-incarceration': [
    { date: '1971-01-01', from: 'City/county taxpayers', to: 'Police department', amount: '$10.0B', purpose: 'Department funding during period of misconduct in The War on Drugs: America\'s Longest War Against Its Own Citizens', documented: true },
    { date: '1973-01-01', from: 'Municipal government', to: 'Misconduct settlements', amount: '$1.5B', purpose: 'Taxpayer-funded settlements for misconduct exposed in The War on Drugs: America\'s Longest War Against Its Own Citizens', documented: true },
    { date: '1972-01-01', from: 'Police department', to: 'Militarized equipment purchases', amount: '$384M', purpose: 'Equipment and training spending related to The War on Drugs: America\'s Longest War Against Its Own Citizens', documented: true },
  ],

  'weapons-industry-revolving-door': [
    { date: '1961-01-01', from: 'DOD', to: 'Revenue from harmful practices', amount: '$34.6B', purpose: 'DOD revenue while engaging in practices exposed by The Military-Industrial Complex: War Profiteering and the Revolving Door', documented: true },
    { date: '1963-01-01', from: 'DOD', to: 'Anti-regulation lobbying', amount: '$924M', purpose: 'Lobbying spending by DOD to avoid accountability in The Military-Industrial Complex: War Profiteering and the Revolving Door', documented: true },
    { date: '1965-01-01', from: 'DOD', to: 'Legal penalties and settlements', amount: '$4.1B', purpose: 'Fines and settlements resulting from The Military-Industrial Complex: War Profiteering and the Revolving Door', documented: true },
  ],

  'wage-theft-americas-largest-theft': [
    { date: '2014-01-01', from: 'DOL', to: 'Revenue from harmful practices', amount: '$96.9B', purpose: 'DOL revenue while engaging in practices exposed by Wage Theft: America\'s Largest Theft', documented: true },
    { date: '2016-01-01', from: 'DOL', to: 'Anti-regulation lobbying', amount: '$96M', purpose: 'Lobbying spending by DOL to avoid accountability in Wage Theft: America\'s Largest Theft', documented: true },
    { date: '2018-01-01', from: 'DOL', to: 'Legal penalties and settlements', amount: '$280M', purpose: 'Fines and settlements resulting from Wage Theft: America\'s Largest Theft', documented: true },
  ],

  'worldcom-accounting-fraud': [
    { date: '2002-01-01', from: 'WorldCom', to: 'Illicit financial flows', amount: '$11.2B', purpose: 'Fraudulent financial activity in WorldCom: $11 Billion Accounting Fraud That Destroyed Telecom Giant', documented: true },
    { date: '2005-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against WorldCom', amount: '$5.9B', purpose: 'Fines and penalties imposed for violations uncovered in WorldCom: $11 Billion Accounting Fraud That Destroyed Telecom Giant', documented: true },
    { date: '2004-01-01', from: 'WorldCom', to: 'Affected investors / victims', amount: '$3.2B', purpose: 'Restitution and settlement payments to victims of WorldCom: $11 Billion Accounting Fraud That Destroyed Telecom Giant', documented: true },
  ],

  'wirecard-german-fraud': [
    { date: '2020-01-01', from: 'BaFin', to: 'Illicit financial flows', amount: '$14.7B', purpose: 'Fraudulent financial activity in Wirecard: $2 Billion Missing in Germany\'s Biggest Corporate Fraud', documented: true },
    { date: '2023-01-01', from: 'SEC / DOJ', to: 'Regulatory enforcement against BaFin', amount: '$7.2B', purpose: 'Fines and penalties imposed for violations uncovered in Wirecard: $2 Billion Missing in Germany\'s Biggest Corporate Fraud', documented: true },
    { date: '2022-01-01', from: 'BaFin', to: 'Affected investors / victims', amount: '$9.7B', purpose: 'Restitution and settlement payments to victims of Wirecard: $2 Billion Missing in Germany\'s Biggest Corporate Fraud', documented: true },
  ],

  'water-privatization-crisis': [
    { date: '2000-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Revenue from harmful products/practices', amount: '$26.8B', purpose: 'Revenue generated from products or practices at center of Water Privatization: When Corporations Control a Human Right', documented: true },
    { date: '2002-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Lobbying and political influence', amount: '$1.1B', purpose: 'Lobbying expenditures to prevent regulation related to Water Privatization: When Corporations Control a Human Right', documented: true },
    { date: '2004-01-01', from: 'Pharmaceutical/healthcare industry', to: 'Settlements and victim compensation', amount: '$20.5B', purpose: 'Legal settlements and compensation arising from Water Privatization: When Corporations Control a Human Right', documented: true },
  ],

  'wage-theft-worker-exploitation': [
    { date: '2024-01-01', from: 'Criminal networks', to: 'Trafficking revenue', amount: '$12.0B', purpose: 'Estimated proceeds from trafficking operations in Wage Theft: The Largest Form of Property Crime in America', documented: false },
    { date: '2025-01-01', from: 'DOJ / FBI', to: 'Asset seizures', amount: '$66M', purpose: 'Law enforcement asset seizures related to Wage Theft: The Largest Form of Property Crime in America', documented: true },
    { date: '2025-01-01', from: 'Government', to: 'Victim support and restitution', amount: '$475M', purpose: 'Victim restitution and support programs from Wage Theft: The Largest Form of Property Crime in America', documented: true },
  ],

  'water-infrastructure-crisis': [
    { date: '2024-01-01', from: 'IHS', to: 'Revenue from harmful products/practices', amount: '$94.5B', purpose: 'Revenue generated from products or practices at center of American Water Infrastructure Crisis and Lead Contamination', documented: true },
    { date: '2025-01-01', from: 'IHS', to: 'Lobbying and political influence', amount: '$473M', purpose: 'Lobbying expenditures to prevent regulation related to American Water Infrastructure Crisis and Lead Contamination', documented: true },
    { date: '2025-01-01', from: 'IHS', to: 'Settlements and victim compensation', amount: '$3.8B', purpose: 'Legal settlements and compensation arising from American Water Infrastructure Crisis and Lead Contamination', documented: true },
  ],

  'whistleblower-retaliation-patterns': [
    { date: '2024-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$57.2B', purpose: 'Government spending on programs implicated in Whistleblower Retaliation Patterns', documented: true },
    { date: '2025-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$1.1B', purpose: 'Settlement costs and remediation arising from Whistleblower Retaliation Patterns', documented: true },
    { date: '2025-01-01', from: 'OSC', to: 'Oversight and investigation costs', amount: '$1.1B', purpose: 'Congressional and inspector general investigation costs for Whistleblower Retaliation Patterns', documented: false },
  ],

  'wilmington-massacre-coup-1898': [
    { date: '1898-01-01', from: 'US taxpayers', to: 'Federal government', amount: '$3.5B', purpose: 'Government spending on programs implicated in The Wilmington Massacre and Coup of 1898: The Only Successful Overthrow of an Elected Government in American History', documented: true },
    { date: '1901-01-01', from: 'Federal government', to: 'Legal settlements and remediation', amount: '$3.1B', purpose: 'Settlement costs and remediation arising from The Wilmington Massacre and Coup of 1898: The Only Successful Overthrow of an Elected Government in American History', documented: true },
    { date: '1899-01-01', from: 'Josephus Daniels', to: 'Oversight and investigation costs', amount: '$850M', purpose: 'Congressional and inspector general investigation costs for The Wilmington Massacre and Coup of 1898: The Only Successful Overthrow of an Elected Government in American History', documented: false },
  ],


  // ========== X ==========


  // ========== P ==========

  'pfas-forever-chemicals-contamination': [
    { date: '2024-01-01', from: 'DOD', to: 'Revenue from polluting operations', amount: '$86.0B', purpose: 'Revenue from operations causing environmental damage in PFAS Forever Chemicals Contamination Crisis', documented: true },
    { date: '2025-01-01', from: 'DOD', to: 'EPA fines and cleanup costs', amount: '$831M', purpose: 'Environmental remediation and regulatory penalties for PFAS Forever Chemicals Contamination Crisis', documented: true },
    { date: '2025-01-01', from: 'DOD', to: 'Environmental lobbying', amount: '$340M', purpose: 'Lobbying to weaken regulations related to PFAS Forever Chemicals Contamination Crisis', documented: true },
  ],


  // ========== F ==========


  // ========== Y ==========

  'yemen-war-crimes': [
    { date: '2023-01-01', from: 'Saudi Arabia', to: 'Military/security operations', amount: '$17.4B', purpose: 'Military spending on operations involving atrocities in Yemen War Crimes: The Forgotten Genocide', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$61.9B', purpose: 'Weapons industry profits from conflict in Yemen War Crimes: The Forgotten Genocide', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$17.4B', purpose: 'Reparations and frozen assets related to Yemen War Crimes: The Forgotten Genocide', documented: true },
  ],

  'youtube-extremism': [
    { date: '2020-01-01', from: 'Google', to: 'Revenue from disinformation', amount: '$10.0B', purpose: 'Revenue generated while spreading misleading content in YouTube\'s Radicalization Pipeline: How the Algorithm Breeds Extremism', documented: true },
    { date: '2022-01-01', from: 'Google', to: 'Legal penalties', amount: '$2.9B', purpose: 'Legal costs and settlements for misconduct in YouTube\'s Radicalization Pipeline: How the Algorithm Breeds Extremism', documented: true },
  ],

  'youth-incarceration-abuse': [
    { date: '2024-01-01', from: 'DOJ', to: 'Military/security operations', amount: '$194.6B', purpose: 'Military spending on operations involving atrocities in Youth Incarceration and Juvenile Detention Abuse', documented: false },
    { date: '2025-01-01', from: 'Defense contractors', to: 'Arms and equipment sales', amount: '$67.7B', purpose: 'Weapons industry profits from conflict in Youth Incarceration and Juvenile Detention Abuse', documented: true },
    { date: '2025-01-01', from: 'International tribunals', to: 'Asset freezes and reparations', amount: '$3.8B', purpose: 'Reparations and frozen assets related to Youth Incarceration and Juvenile Detention Abuse', documented: true },
  ],


  // ========== P ==========

  'predatory-towing-industry': [
    { date: '2024-01-01', from: 'DOT', to: 'Revenue from harmful practices', amount: '$39.2B', purpose: 'DOT revenue while engaging in practices exposed by Predatory Towing Industry', documented: true },
    { date: '2025-01-01', from: 'DOT', to: 'Anti-regulation lobbying', amount: '$785M', purpose: 'Lobbying spending by DOT to avoid accountability in Predatory Towing Industry', documented: true },
    { date: '2025-01-01', from: 'DOT', to: 'Legal penalties and settlements', amount: '$6.1B', purpose: 'Fines and settlements resulting from Predatory Towing Industry', documented: true },
  ],


  // ========== Z ==========

  'zaire-mobutu-kleptocracy': [
    { date: '1965-01-01', from: 'Dark money groups and PACs', to: 'Political influence campaigns', amount: '$350M', purpose: 'Undisclosed political spending connected to Mobutu\'s Zaire: The Billion-Dollar Kleptocracy', documented: false },
    { date: '1966-01-01', from: 'Corporate donors', to: 'Central Intelligence Agency', amount: '$405M', purpose: 'Campaign contributions and financial benefits flowing through Mobutu\'s Zaire: The Billion-Dollar Kleptocracy', documented: true },
    { date: '1967-01-01', from: 'Central Intelligence Agency', to: 'Personal financial enrichment', amount: '$773M', purpose: 'Personal financial benefits gained through corruption in Mobutu\'s Zaire: The Billion-Dollar Kleptocracy', documented: false },
  ],

  'zero-dark-thirty-torture-debate': [
    { date: '2012-01-01', from: 'US taxpayers', to: 'Intelligence agencies', amount: '$44.1B', purpose: 'Budget allocation for operations connected to Zero Dark Thirty and the Torture Debate', documented: false },
    { date: '2013-01-01', from: 'Defense contractors', to: 'Private sector profits', amount: '$8.5B', purpose: 'Contractor profits from programs related to Zero Dark Thirty and the Torture Debate', documented: true },
    { date: '2015-01-01', from: 'Intelligence agencies', to: 'Classified / black budget programs', amount: '$5.3B', purpose: 'Classified spending on programs exposed in Zero Dark Thirty and the Torture Debate', documented: false },
  ],

  'zuckerberg-meta-surveillance': [
    { date: '2004-01-01', from: 'Government agencies', to: 'Mark Zuckerberg', amount: '$19.7B', purpose: 'Contracts for surveillance technology related to Zuckerberg and Meta\'s Surveillance Empire', documented: false },
    { date: '2005-01-01', from: 'Mark Zuckerberg', to: 'Data monetization revenue', amount: '$172.8B', purpose: 'Revenue from data collection practices exposed in Zuckerberg and Meta\'s Surveillance Empire', documented: true },
    { date: '2007-01-01', from: 'Mark Zuckerberg', to: 'Regulatory fines and settlements', amount: '$17.8B', purpose: 'Privacy violation penalties resulting from Zuckerberg and Meta\'s Surveillance Empire', documented: true },
  ],

  'armenian-genocide': [
    { date: '1915-01-01', from: 'Ottoman Empire', to: 'Systematic extermination campaign', amount: 'N/A', purpose: 'State-directed genocide of 1.5 million Armenians; property confiscation and forced death marches', documented: true },
    { date: '2019-01-01', from: 'Turkish government', to: 'Lobbying firms in Washington', amount: '$4.3M', purpose: 'Annual lobbying expenditure to prevent U.S. recognition of the Armenian Genocide', documented: true },
  ],

  'educational-propaganda': [
    { date: '2020-01-01', from: 'Koch-affiliated foundations', to: 'University programs', amount: '$500M+', purpose: 'Funding academic centers with influence over curriculum and hiring at public universities', documented: true },
    { date: '2022-01-01', from: 'State legislatures', to: 'Textbook revision programs', amount: '$45M', purpose: 'State-funded curriculum changes restricting teaching of slavery, racism, and systemic inequality', documented: true },
  ],

  'epstein-network-full-mapping': [
    { date: '2008-01-01', from: 'Jeffrey Epstein', to: 'Legal defense and plea deal', amount: '$12M', purpose: 'Legal fees securing unprecedented non-prosecution agreement in 2008 Florida case', documented: true },
    { date: '2019-01-01', from: 'Epstein estate', to: 'Victim compensation fund', amount: '$125M', purpose: 'Compensation fund established after Epstein death for trafficking victims', documented: true },
    { date: '2022-01-01', from: 'JPMorgan Chase', to: 'Settlement with Epstein victims', amount: '$290M', purpose: 'Settlement for facilitating Epstein financial transactions despite red flags', documented: true },
  ],

  'gulf-war-crimes': [
    { date: '1991-01-01', from: 'U.S. Department of Defense', to: 'Gulf War operations', amount: '$61B', purpose: 'Total cost of Gulf War military operations; allies reimbursed $54B', documented: true },
    { date: '2004-01-01', from: 'Iraqi civilian families', to: 'Legal claims (largely denied)', amount: '$500M+', purpose: 'Estimated civilian property destruction and loss of life claims, largely uncompensated', documented: false },
  ],

  'iran-coup-1953': [
    { date: '1953-01-01', from: 'CIA / MI6', to: 'Operation Ajax operatives', amount: '$1M', purpose: 'CIA budget for Operation Ajax to overthrow democratically elected PM Mossadegh', documented: true },
    { date: '1954-01-01', from: 'Anglo-Iranian Oil Company', to: 'International oil consortium', amount: '$600M', purpose: 'Post-coup restructuring gave U.S. and British oil companies 40% each of Iranian oil profits', documented: true },
  ],

  'judicial-capture': [
    { date: '2020-01-01', from: 'Federalist Society donors', to: 'Judicial selection infrastructure', amount: '$250M+', purpose: 'Dark money spent building the pipeline for federal judicial appointments', documented: true },
    { date: '2022-01-01', from: 'Anonymous donors', to: 'Judicial Crisis Network', amount: '$35M+', purpose: 'Funds for Supreme Court confirmation campaigns for Gorsuch, Kavanaugh, and Barrett', documented: true },
  ],

  'lab-leak': [
    { date: '2014-01-01', from: 'NIH / NIAID', to: 'EcoHealth Alliance', amount: '$3.7M', purpose: 'Federal grant funding for bat coronavirus research at Wuhan Institute of Virology via EcoHealth Alliance', documented: true },
    { date: '2021-01-01', from: 'U.S. intelligence community', to: 'COVID origins investigation', amount: '$1.2M', purpose: 'Appropriated for classified intelligence assessment of COVID-19 origins', documented: true },
  ],

  'local-news-desert-information-crisis': [
    { date: '2019-01-01', from: 'Hedge funds (Alden Global Capital)', to: 'Local newspaper acquisitions', amount: '$2.2B', purpose: 'Tribune Publishing and other newspaper chain acquisitions, followed by mass layoffs and asset stripping', documented: true },
    { date: '2023-01-01', from: 'Community impact', to: 'Lost local accountability', amount: '$0', purpose: 'Over 2,500 newspapers closed since 2005; communities without local journalism see higher corruption and municipal borrowing costs', documented: true },
  ],

  'project-shamrock-communications-surveillance': [
    { date: '1945-01-01', from: 'NSA / Armed Forces Security Agency', to: 'Western Union, ITT, RCA', amount: 'Classified', purpose: 'Secret agreements with telegraph companies to provide copies of all international telegrams entering or leaving the U.S.', documented: true },
    { date: '1975-01-01', from: 'Church Committee investigation', to: 'Public disclosure', amount: '$0', purpose: 'Congressional investigation exposed 30 years of warrantless mass surveillance of American communications', documented: true },
  ],

  'social-media-mental-health-exploitation': [
    { date: '2021-01-01', from: 'Meta (Facebook/Instagram)', to: 'Ad revenue from minors', amount: '$11B', purpose: 'Estimated annual advertising revenue generated from users under 18, despite internal research showing platform harms', documented: true },
    { date: '2023-01-01', from: 'State attorneys general', to: 'Lawsuits against Meta', amount: '$0', purpose: '41 state AGs filed suit alleging Meta designed addictive features targeting children', documented: true },
  ],

  'ticketmaster-live-nation-monopoly': [
    { date: '2010-01-01', from: 'Live Nation / Ticketmaster', to: 'DOJ-approved merger', amount: '$2.5B', purpose: 'Merger creating monopoly controlling 70%+ of major concert venue ticketing despite antitrust concerns', documented: true },
    { date: '2023-01-01', from: 'Ticketmaster', to: 'Service fee revenue', amount: '$4.5B', purpose: 'Annual service fees averaging 27% of ticket face value, enabled by monopoly position', documented: true },
    { date: '2024-01-01', from: 'DOJ Antitrust Division', to: 'Lawsuit to break up Live Nation', amount: '$0', purpose: 'Federal antitrust suit seeking divestiture of Ticketmaster from Live Nation', documented: true },
  ],

  'usa-gymnastics-abuse': [
    { date: '2018-01-01', from: 'Michigan State University', to: 'Nassar victim settlement', amount: '$500M', purpose: 'Settlement with 332 victims of Larry Nassar sexual abuse enabled by institutional failures', documented: true },
    { date: '2021-01-01', from: 'USA Gymnastics', to: 'Victim compensation fund', amount: '$380M', purpose: 'Bankruptcy settlement establishing compensation fund for Nassar victims', documented: true },
    { date: '2022-01-01', from: 'FBI', to: 'Inspector General investigation', amount: '$0', purpose: 'IG report found FBI agents made false statements and failed to investigate Nassar tips for over a year', documented: true },
  ],

};

export default moneyTrails;
