import { skillKind } from '../../../../enums/skill';

export type receivedXPFromAirtableTotalType = {
  name: string;
  xp: { amount: number; date: Date; skill: skillKind }[];
};
