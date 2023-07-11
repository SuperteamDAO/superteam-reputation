import { skillKind } from '../../../../enums/skill';

export type total_xp = {
  total_xp: number;
  development: number;
  design: number;
  operations: number;
  videography: number;
  strategy: number;
  writing: number;
};
export type allocated_xp = {
  total_amount: number;
  date: Date;
  skill: skillKind;
};

export type xpType = {
  name: string;
  total_amount: number;
  skills: { skill: skillKind; amount: number }[];
  xp: {
    amount: number[];
    dates: Date[];
  };
  region?: string;
  rank?: number;
  xp_per_month?: number;
};

export type xp = {
  total?: {
    total_xp: number;
    development: number;
    design: number;
    operations: number;
    videography: number;
    strategy: number;
    writing: number;
  };
  details?: {
    total_xp: number;
    skills: { skill: string; amount: number }[];
    xp: { amount: number[]; dates: Date[] };
  };
};
