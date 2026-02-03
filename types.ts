
export enum AppRole {
  CLIENT = 'CLIENT',
  ADMIN = 'ADMIN'
}

export enum CampaignStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  LOW_BALANCE = 'LOW_BALANCE'
}

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  spend: number;
  budget: number;
  createdAt: string;
}

export interface Transaction {
  id: string;
  date: string;
  type: 'Credit' | 'Spend';
  amount: number;
  balance: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: AppRole;
  balance: number;
  connectedPage?: string;
  adAccountId?: string;
  isFacebookConnected: boolean;
}
