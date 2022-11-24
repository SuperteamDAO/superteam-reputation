import { xpType } from './xp';

export type totalOverallXPType = {
  total_xp: number;
  development: number;
  design: number;
  operations: number;
  videography: number;
  strategy: number;
  writing: number;
};

export type overallXP = {
  total?: totalOverallXPType;
  details: xpType;
};
export type dashboardDataType = {
  name: string;
  personType: string;
  overallXP: overallXP;
  projectWorkXP?: xpType;
  indieWorkXP?: xpType;
  internalOpsXP?: xpType;
  workingGroupsXP?: xpType;
  bountiesXP?: xpType;
  stackExchangeXP?: xpType;
};
