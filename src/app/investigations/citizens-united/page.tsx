'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Citizens United: The Dark Money Coup',
 subtitle: 'How the Supreme Court legalized unlimited corporate cash in elections, drowning democracy in $14.4 billion',
 severity: 'critical',
 status: 'ONGOING, ENTRENCHED',
 summary: 'In January 2010, the Supreme Court\'s Citizens United v. FEC decision struck down decades of campaign finance restrictions, ruling that corporations have the same First Amendment right to political speech as individuals and that limiting their election spending was unconstitutional. The 5-4 decision, along with the subsequent SpeechNow.org v. FEC ruling, created the legal framework for super PACs and unlimited"dark money"spending in American elections. The consequences have been catastrophic for democracy: total election spending has exploded from $5.3 billion in 2008 to $14.4 billion in 2020. Billionaires and corporations now spend hundreds of millions through dark money groups that are not required to disclose their donors. The fossil fuel industry, pharmaceutical companies, and defense contractors have used this unlimited spending to block climate action, prevent drug price regulation, and maintain the war economy. Citizens United didn\'t just change campaign finance law, it formalized the purchase of American democracy by the wealthy.',
 keyFigures: [
 { name: 'John Roberts', role: 'Chief Justice who assigned the opinion and expanded the case far beyond its original scope', href: '/entities/individuals/john-roberts', status: 'Active, Chief Justice' },
 { name: 'Anthony Kennedy', role: 'Justice who authored the majority opinion equating money with speech', href: '/entities/individuals/anthony-kennedy', status: 'Retired' },
 { name: 'James Bopp Jr.', role: 'Conservative attorney who brought the case; architect of the legal strategy', href: '/entities/individuals/james-bopp', status: 'Active' },
 { name: 'David Bossie', role: 'President of Citizens United, the organization that brought the case', href: '/entities/individuals/david-bossie', status: 'Active' },
 { name: 'Charles Koch', role: 'Billionaire who spent hundreds of millions through dark money networks enabled by the decision', href: '/entities/individuals/charles-koch', status: 'Active' },
 { name: 'Sheldon Adelson', role: 'Casino billionaire who spent $500M+ in elections after Citizens United', href: '/entities/individuals/sheldon-adelson', status: 'Deceased' },
 { name: 'Karl Rove', role: 'Founded Crossroads GPS, one of the first major dark money super PACs', href: '/entities/individuals/karl-rove', status: 'Active' },
 { name: 'Mitch McConnell', role: 'Senate leader who championed deregulation of campaign finance for decades', href: '/entities/individuals/mitch-mcconnell', status: 'Active' },
 { name: 'Ruth Bader Ginsburg', role: 'Justice who dissented, warning the decision would"undermine the integrity of elected institutions"', href: '/entities/individuals/ruth-bader-ginsburg', status: 'Historical, Deceased' },
 { name: 'John Paul Stevens', role: 'Justice who authored the dissent warning of corruption and erosion of democratic self-governance', href: '/entities/individuals/john-paul-stevens', status: 'Historical, Deceased' },
 { name: 'Leonard Leo', role: 'Federalist Society leader who shaped the conservative judicial pipeline enabling Citizens United', href: '/entities/individuals/leonard-leo', status: 'Active' },
 ],
 timeline: [
 { date: '1907', event: 'Tillman Act prohibits corporations from making direct contributions to federal candidates' },
 { date: '1971', event: 'Federal Election Campaign Act (FECA) establishes modern campaign finance regulatory framework' },
 { date: '1976', event: 'Buckley v. Valeo: Supreme Court equates money with speech but upholds contribution limits' },
 { date: '2002', event: 'Bipartisan Campaign Reform Act (McCain-Feingold) restricts corporate electioneering communications' },
 { date: '2003', event: 'McConnell v. FEC: Supreme Court upholds McCain-Feingold restrictions 5-4' },
 { date: '2007', event: 'Citizens United produces "Hillary: The Movie"; FEC bars its distribution as electioneering communication' },
 { date: 'March 2009', event: 'Case argued before Supreme Court; Court takes extraordinary step of ordering re-argument on broader grounds' },
 { date: 'September 2009', event: 'Case re-argued with expanded scope, now challenging century of campaign finance precedent' },
 { date: 'January 21, 2010', event: 'Citizens United v. FEC decided 5-4: corporations have First Amendment right to unlimited election spending' },
 { date: 'March 2010', event: 'SpeechNow.org v. FEC: D.C. Circuit extends ruling to create super PACs' },
 { date: '2010', event: 'Karl Rove founds Crossroads GPS; Koch network expands; dark money spending explodes' },
 { date: '2012', event: 'First post-Citizens United presidential election: outside spending reaches $1.3 billion, up from $338M in 2008' },
 { date: '2014', event: 'McCutcheon v. FEC: Court strikes down aggregate contribution limits' },
 { date: '2016', event: 'Dark money spending in elections reaches record levels; origin of funds increasingly obscured' },
 { date: '2020', event: 'Total election spending reaches $14.4 billion, more than tripling the 2008 total' },
 { date: '2022', event: 'FEC v. Ted Cruz: Court strikes down limits on candidates repaying personal loans with post-election contributions' },
 { date: '2023', event: 'Federalist Society donor network, enabled by dark money, controls 6 of 9 Supreme Court seats' },
 { date: '2024', event: 'Total dark money spending since Citizens United exceeds $2 billion from undisclosed sources' },
 ],
 legalOutcomes: [
 { defendant: 'FEC (as respondent)', charge: 'Restricting corporate election spending as violation of First Amendment', outcome: 'Supreme Court ruled 5-4 that corporate election spending is protected speech; overturned Austin v. Michigan and part of McConnell' },
 { defendant: 'Campaign Finance Regulatory Framework', charge: 'A century of campaign finance restrictions struck down or weakened', outcome: 'Corporations and unions may spend unlimited amounts on elections; only direct contributions to candidates remain limited' },
 { defendant: 'Dark Money Organizations', charge: 'Spending billions in elections without disclosing donors', outcome: 'Legal under current framework; 501(c)(4) organizations not required to publicly disclose contributors' },
 { defendant: 'FEC', charge: 'Failure to enforce remaining campaign finance regulations', outcome: 'FEC deadlocked 3-3 on partisan lines on virtually every enforcement action; effectively non-functional' },
 { defendant: 'Congress', charge: 'Failure to pass DISCLOSE Act requiring dark money donor transparency', outcome: 'Passed House multiple times; blocked by Senate filibuster' },
 { defendant: 'Koch Network', charge: 'Coordinating hundreds of millions in dark money spending across elections', outcome: 'Network operates legally under Citizens United framework; no disclosure required' },
 { defendant: 'Leonard Leo / Federalist Society', charge: 'Using dark money to influence judicial nominations and shape the Supreme Court', outcome: 'ProPublica exposed $1.6 billion dark money transfer; no legal consequences' },
 { defendant: 'Supreme Court Majority', charge: 'Expanding the case beyond its original scope to reach a desired political outcome', outcome: 'Unprecedented re-argument ordered to address issues not raised by the parties; no mechanism for accountability' },
 ],
 charges: [
 { statute: 'U.S. Constitution, Art. IV, Sec. 4 (Republican Government)', description: 'Guarantee of republican form of government undermined when elections controlled by wealth rather than voters', count: '$14.4 billion in 2020 election spending; average cost of Senate seat: $27 million' },
 { statute: '52 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 30118: Corporate Contribution Ban (Partially Invalidated)', description: 'Century-old prohibition on corporate election spending struck down by Citizens United', count: 'Billions in corporate and dark money spending since 2010' },
 { statute: 'FEC Regulations, Coordination Rules', description: 'Super PACs prohibited from coordinating with campaigns, but enforcement is nonexistent', outcome: 'Systematic coordination between super PACs and campaigns is well-documented but unpunished' },
 { statute: '26 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 501(c)(4): Social Welfare Organizations', description: 'Tax-exempt organizations used primarily for political spending rather than social welfare', count: 'Billions funneled through"social welfare"organizations whose primary activity is political spending' },
 { statute: 'Quid Pro Quo Corruption (Common Law)', description: 'Citizens United defined corruption narrowly as explicit quid pro quo, ignoring systemic influence of money on policy', count: 'Pharmaceutical, fossil fuel, and defense industry spending consistently followed by favorable legislation' },
 { statute: 'DISCLOSE Act (Proposed)', description: 'Would require disclosure of all donors to political organizations; repeatedly blocked', count: 'Over $2 billion in dark money spending from undisclosed sources since Citizens United' },
 { statute: 'Voting Rights: 14th & 15th Amendments', description: 'Dark money enables voter suppression campaigns; reduces effective representation of non-wealthy voters', count: 'Bottom 90% of Americans contribute less than 1% of campaign funds' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1346: Honest Services Fraud', description: 'Officials influenced by dark money spending fail to provide honest services to constituents', count: 'Study: 91% of the time, the candidate with the most money wins their Congressional race' },
 ],
 coverup: [
 'The Supreme Court\'s majority took the extraordinary step of ordering re-argument on issues not raised by either party, expanding the case from a narrow question about a documentary to a sweeping rewrite of campaign finance law.',
 'Justice Kennedy\'s majority opinion claimed that"independent expenditures, including those made by corporations, do not give rise to corruption or the appearance of corruption"- a claim contradicted by virtually all available evidence.',
 'The 501(c)(4)"social welfare"loophole allows unlimited political spending with zero donor disclosure. These organizations are legally required to be "primarily" for social welfare, but the IRS has failed to enforce this standard.',
 'The FEC, the primary enforcement agency for campaign finance, has been rendered non-functional by design, commissioners deadlock 3-3 on partisan lines, preventing any enforcement action.',
 'The Koch brothers\' political network spent nearly $900 million in the 2016 election cycle alone, but the full scope of their spending is impossible to determine because most flowed through dark money organizations.',
 'Leonard Leo, architect of the conservative Supreme Court, received a $1.6 billion dark money donation (the largest ever documented) which was only revealed through investigative journalism, not regulatory disclosure.',
 'Mitch McConnell, who championed Citizens United and blocked the DISCLOSE Act, has received more dark money support than virtually any other elected official, a direct personal benefit from the system he defends.',
 'The fossil fuel industry has spent over $500 million in dark money lobbying against climate legislation since Citizens United, with direct correlation between spending and Congressional votes against climate action.',
 'Corporate America publicly supports voting rights and democratic participation while simultaneously channeling unlimited funds through dark money groups to influence elections, a contradiction rarely challenged by media.',
 ],
 sources: [
 { title: 'Citizens United v. FEC, Supreme Court Opinion', url: 'https://www.supremecourt.gov/opinions/09pdf/08-205.pdf', date: '2010' },
 { title: 'OpenSecrets, Dark Money Tracking', url: 'https://www.opensecrets.org/dark-money', date: '2023' },
 { title: 'Brennan Center for Justice, Citizens United Impact', url: 'https://www.brennancenter.org/our-work/research-reports/citizens-united-explained', date: '2023' },
 { title: 'ProPublica, Leonard Leo\'s $1.6 Billion Dark Money', url: 'https://www.propublica.org/article/dark-money-leonard-leo-barre-seid-federalist-society-courts', date: '2022' },
 { title: 'Dark Money, Jane Mayer', url: 'https://www.penguinrandomhouse.com/books/215146/dark-money-by-jane-mayer/', date: '2016' },
 { title: 'Sunlight Foundation, Political Spending Data', url: 'https://sunlightfoundation.com/', date: '2023' },
 { title: 'New York Times, How Citizens United Changed Elections', url: 'https://www.nytimes.com/2020/01/21/us/politics/citizens-united-anniversary.html', date: '2020' },
 { title: 'FEC, Campaign Finance Data and Reports', url: 'https://www.fec.gov/data/', date: '2024' },
 { title: 'Issue One, Dark Money Report', url: 'https://issueone.org/dark-money/', date: '2023' },
 ],
};

export default function CitizensUnitedPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-zinc-300"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-zinc-400 hover:text-white transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#0d0d0d] text-zinc-400 border border-[rgba(255,255,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold text-zinc-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-zinc-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-zinc-300"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255,255,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600"/><p className="text-xs text-zinc-300 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-white hover:bg-[#0a0a0a] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
