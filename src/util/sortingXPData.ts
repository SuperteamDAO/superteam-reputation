import { xpType } from '../components/Dashboard/Row/interfaces/xp';
import { SortByXp } from './sortingData';

export const filterList = [
  'Operations',
  'Strategy',
  'Development',
  'Videography',
  'Design',
  'Writing',
];

export const sortingFinalXPDataUtil = (
  data: xpType[],
  order: SortByXp,
  selectedSkill: string
) => {
  
  if (selectedSkill) {
    let filteredXP = data.filter((value) =>
      value?.skills.some((item) => item.skill === selectedSkill.toLowerCase())
    ) as xpType[];

    return filteredXP.sort((a, b) => {
      let aIndex = a.skills.findIndex(
        (item) => item.skill === selectedSkill.toLowerCase()
      ) as number;
      let bIndex = b.skills.findIndex(
        (item) => item.skill === selectedSkill.toLowerCase()
      ) as number;

      if (order === SortByXp.highToLowXp) {
        return b.skills[bIndex].amount - a.skills[aIndex].amount;
      } else {
        return a.skills[aIndex].amount - b.skills[bIndex].amount;
      }
    });
  } else {
    return data.sort((a, b) => {
      if (order === SortByXp.highToLowXp) {
        return b.total_amount - a.total_amount;
      } else {
        return a.total_amount - b.total_amount;
      }
    });
  }
};
