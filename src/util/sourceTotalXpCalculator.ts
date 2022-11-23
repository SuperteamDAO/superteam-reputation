import { receivedXPFromAirtableType } from '../components/Dashboard/Row/interfaces/airtableRecievedXP';
import { receivedXPFromAirtableTotalType } from '../components/Dashboard/Row/interfaces/airtableRecievedXPTotal';
import { totalOverallXPType } from '../components/Dashboard/Row/interfaces/dashboardStore';
import {
  allocated_xp,
  xpType
} from '../components/Dashboard/Row/interfaces/xp';
import { skillKind } from '../enums/skill';

function remove_duplicates_and_add_value(
  arr: { skill: skillKind; amount: number }[]
): { skill: skillKind; amount: number }[] {
  // remove if a duplicate skill is present but add the amount of similar skills and make one object
  let s = new Set(arr.map((item) => item.skill));
  let it = s.values();
  let unique_skills = Array.from(it);
  let unique_skills_with_amount = unique_skills.map((skill) => {
    let amount = 0;
    arr.forEach((item) => {
      if (item.skill === skill) {
        amount += item.amount;
      }
    });
    return { skill: skill, amount: amount };
  });
  return unique_skills_with_amount;
}
// calculate details for overallxp ( type: xpType ) using all the xps from the sources
{
  /*
   * @params { xpSources: xpType[]} // xp sources include projectWorkXP, indieWorkXP, workingGroupXP, bountiesXP, stackExchangeXP
   * return { xpType  }
   */
}
export function overallXPDetails(
  xpSources: xpType[],
  name: string,
  overallXP: totalOverallXPType
): xpType {
  let total_xp = overallXP?.total_xp;
  let skills: { skill: skillKind; amount: number }[] = [
    {
      skill: skillKind.DEV,
      amount: overallXP?.development  || 0,
    },
    {
      skill: skillKind.DESIGN,
      amount: overallXP?.design || 0,
    },
    {
      skill: skillKind.OPS,
      amount: overallXP?.operations  || 0,
    },
    {
      skill: skillKind.VIDEO,
      amount: overallXP?.videography  || 0,
    },
    {
      skill: skillKind.STRATEGY,
      amount: overallXP?.strategy  || 0,
    },
    {
      skill: skillKind.WRITING,
      amount: overallXP?.writing  || 0,
    },
  ];
  let xp: { amount: number[]; dates: Date[] } = { amount: [], dates: [] };
  xpSources.forEach((xpSource) => {
    if (
      !xpSource?.name ||
      !xpSource?.total_amount ||
      !xpSource?.skills ||
      !xpSource?.xp
    )
      return;
    name = xpSource.name;
    xp.amount.push(...xpSource.xp.amount);
    xp.dates.push(...xpSource.xp.dates);
  });
  // filtering skill by amount (removing skill with amount 0 )
  skills = skills.filter((skill) => skill.amount !== 0);
  return { name: name, total_amount: total_xp, skills: skills, xp: xp };
}

export function xpSumBySkillCalculator(person: {
  name: string;
  xp: { amount: number; date: Date; skill: skillKind }[];
}) {
  const skills: { skill: string; amount: number }[] | undefined = [];

  // iterating over person.xp and if skill matches we add the xp and push the value to skills array
  person.xp.forEach((xp) => {
    if (skills.some((skill) => skill.skill === xp.skill)) {
      skills.forEach((skill) => {
        if (skill.skill === xp.skill) {
          skill.amount += xp.amount;
        }
      });
    } else {
      skills.push({ skill: xp.skill, amount: xp.amount });
    }
  });
  // filtering skill by amount (removing skill with amount 0 )
  skills.filter((skill) => skill.amount !== 0);

  // itterate over skills and replace skill name with skilltype enum
  skills.forEach((skill) => {
    if (skill.skill === 'Development') {
      skill.skill = skillKind.DEV;
    } else if (skill.skill === 'Design') {
      skill.skill = skillKind.DESIGN;
    } else if (skill.skill === 'Ops') {
      skill.skill = skillKind.OPS;
    } else if (skill.skill === 'Videography') {
      skill.skill = skillKind.VIDEO;
    } else if (skill.skill === 'Strategy') {
      skill.skill = skillKind.STRATEGY;
    } else if (skill.skill === 'Writing') {
      skill.skill = skillKind.WRITING;
    }
  });

  return skills as { skill: skillKind; amount: number }[];
}

export function xpSumPerPersonCalculator(person: {
  name: string;
  xp: { amount: number; date: Date; skill: skillKind }[];
}): xpType {
  const name = person.name;
  const allocated_xp: number[] = [];
  const dates: Date[] = [new Date()];
  const skillsArr: { skill: skillKind; amount: number }[] = [];
  const every_person_xp_sum = person.xp.reduce((prevValue, currentValue) => {
    allocated_xp.push(currentValue.amount);
    dates.push(new Date(currentValue.date) as Date);
    skillsArr.push({
      skill: currentValue.skill as skillKind,
      amount: currentValue.amount,
    });
    return {
      amount: (prevValue.amount + currentValue.amount) as number,
      date: currentValue.date,
      skill: currentValue.skill,
    };
  });

  dates.shift();

  const skills: { skill: skillKind; amount: number }[] =
    remove_duplicates_and_add_value(skillsArr);
  const total_xp_amount: number = every_person_xp_sum.amount;
  const newPerson: xpType = {
    name: name,
    total_amount: total_xp_amount,
    skills: skills,
    xp: { amount: allocated_xp, dates },
  };

  return newPerson;
}

export function skillTotalXPCalculator(
  source_xp: allocated_xp[],
  skill: string
) {
  // sum all the allocated xp
  const total_xp_for_provided_skill = source_xp.reduce(
    (accumulator: any, currentValue: any) => {
      if (currentValue.skill === skill) {
        return accumulator.amount + currentValue.amount;
      }
      return accumulator;
    }
  );
  return total_xp_for_provided_skill;
}

export function sourceTotalXPCalculator(
  xp_source_data: receivedXPFromAirtableType[]
): receivedXPFromAirtableTotalType[] {
  const sourceTotalXPArr: receivedXPFromAirtableTotalType[] = [
    { name: '', xp: [{ amount: 0, date: new Date(), skill: skillKind.DEV }] },
  ];

  xp_source_data?.forEach((xp_source) => {
    const index = sourceTotalXPArr.findIndex(
      (item) => item.name === xp_source.name
    );
    if (index === -1) {
      sourceTotalXPArr.push({
        name: xp_source.name,
        xp: [
          {
            amount: xp_source.xp.total_amount,
            date: xp_source.xp.date,
            skill: xp_source.xp.skill,
          },
        ],
      });
    } else {
      sourceTotalXPArr[index].xp.push({
        amount: xp_source.xp.total_amount,
        date: xp_source.xp.date,
        skill: xp_source.xp.skill,
      });
    }
  });

  // remove the first element from the array
  sourceTotalXPArr.shift();
  return sourceTotalXPArr;
}
