import { xpType } from '../components/Dashboard/Row/interfaces/xp';
import { SortByXp } from './sortingData';

export const filterRegionList = [
  'India',
  'Vietnam',
  'Germany',
  'Mexico',
  'Turkey',
  'UAE' , 
  'UK',
  'Nigeria',
  'Israel'
];

export const filterSkillsList = [
  'Operations',
  'Strategy',
  'Development',
  'Videography',
  'Design',
  'Writing',
];

export const sortingFinalXPDataFilterUtil = (
  data: xpType[],
  order: SortByXp,
  selectedRegion: string,
  selectedSkill: string
) => {
  let filteredXP = data;
  let swithToInitialPage = false;
  if (selectedRegion || selectedSkill) {
    swithToInitialPage = true;
    if (selectedRegion) {
      filteredXP = filteredXP.filter(
        (value) => value?.region?.toString() === selectedRegion
      ) as xpType[];
    }

    if (selectedSkill !== '') {
      filteredXP = filteredXP.filter((value) =>
        value?.skills.some((item) => item.skill === selectedSkill.toLowerCase())
      ) as xpType[];

      filteredXP = filteredXP.sort((a, b) => {
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
    }
  } else {
    swithToInitialPage = false;
    filteredXP = filteredXP.sort((a, b) => {
      if (order === SortByXp.highToLowXp) {
        return b.total_amount - a.total_amount;
      } else {
        return a.total_amount - b.total_amount;
      }
    });
  }

  return { filteredXP, swithToInitialPage };
};
