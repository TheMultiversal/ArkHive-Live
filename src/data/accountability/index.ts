import type { AccountabilityData } from '@/types/accountability';
import { insiderTradingAccountability } from './1980s-insider-trading';

const accountabilityDatabase: Record<string, AccountabilityData> = {
  '1980s-insider-trading': insiderTradingAccountability,
};

export default accountabilityDatabase;
