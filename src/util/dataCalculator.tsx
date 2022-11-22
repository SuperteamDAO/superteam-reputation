import { receivedXPFromAirtableType } from '../components/Dashboard/Row/interfaces/airtableRecievedXP';
import {
  dashboardDataType,
  totalOverallXPType,
} from '../components/Dashboard/Row/interfaces/dashboardStore';
import { xpType } from '../components/Dashboard/Row/interfaces/xp';
import {
  getBountiesRecordsFunction,
  getXPRecordFunction,
} from '../lib/airtable';
import {
  getBounties_xp_view,
  getIndieWork_xp_view,
  getInternalOperations_xp_view,
  getProjectWork_xp_view,
  getStackExchange_xp_view,
} from '../lib/getXPDistributions';
import {
  overallXPDetails,
  sourceTotalXPCalculator,
  xpSumBySkillCalculator,
  xpSumPerPersonCalculator,
} from './sourceTotalXpCalculator';

export async function dataCalculator() {
  const xpDataJson: [
    {
      name: string;
      total_xp: any;
      person_type: string;
      development: any;
      design: any;
      videography: any;
      writing: any;
      strategy: any;
      operations: any;
    }
  ] = await getXPRecordFunction();

  const projectWorkXP =
    (await getProjectWork_xp_view()) as receivedXPFromAirtableType[];
  const indieWorkXp =
    (await getIndieWork_xp_view()) as receivedXPFromAirtableType[];
  const internalOpsXp =
    (await getInternalOperations_xp_view()) as receivedXPFromAirtableType[];
  const bountiesXP =
    (await getBounties_xp_view()) as receivedXPFromAirtableType[];
  const stackExchangeXP =
    (await getStackExchange_xp_view()) as receivedXPFromAirtableType[];
  const bountyDataJson = await getBountiesRecordsFunction();

  const personDetailsData: { name: string; personType: string }[] =
    xpDataJson.map((person) => {
      return {
        name: person.name,
        personType: person.person_type,
      };
    });

  const overallXP = xpDataJson.map((person) => {
    return {
      name: person.name,
      total_xp: person.total_xp,
      development: person.development,
      design: person.design,
      operations: person.operations,
      videography: person.videography,
      strategy: person.strategy,
      writing: person.writing,
    };
  });

  const projectWorkCalculatedXP: xpType[] = sourceTotalXPCalculator(
    projectWorkXP
  ).map((person) => {
    return {
      name: person.name,
      skills: xpSumBySkillCalculator(person),
      total_amount: xpSumPerPersonCalculator(person).total_amount,
      xp: xpSumPerPersonCalculator(person).xp,
    };
  });

  const indieWorkCalculatedXP: xpType[] = sourceTotalXPCalculator(
    indieWorkXp
  ).map((person) => {
    return {
      name: person.name,
      skills: xpSumBySkillCalculator(person),
      total_amount: xpSumPerPersonCalculator(person).total_amount,
      xp: xpSumPerPersonCalculator(person).xp,
    };
  });

  const internalOpsCalculateXP: xpType[] = sourceTotalXPCalculator(
    internalOpsXp
  ).map((person) => {
    return {
      name: person.name,
      skills: xpSumBySkillCalculator(person),
      total_amount: xpSumPerPersonCalculator(person).total_amount,
      xp: xpSumPerPersonCalculator(person).xp,
    };
  });
  // console.log('internal ops per person - ', internalOpsCalculateXP[0])
  //todo: internal ops data is not working till here it works

  const bountiesCalculatedXP: xpType[] = sourceTotalXPCalculator(
    bountiesXP
  ).map((person) => {
    return {
      name: person.name,
      skills: xpSumBySkillCalculator(person),
      total_amount: xpSumPerPersonCalculator(person).total_amount,
      xp: xpSumPerPersonCalculator(person).xp,
    };
  });

  const stackExchangeCalculatedXP: xpType[] = sourceTotalXPCalculator(
    stackExchangeXP
  ).map((person) => {
    return {
      name: person.name,
      skills: xpSumBySkillCalculator(person),
      total_amount: xpSumPerPersonCalculator(person).total_amount,
      xp: xpSumPerPersonCalculator(person).xp,
    };
  });

  // add all the xps into one object called person: {name: string, personType: string, overallXP: , projectWorkXP: , indieWorkXP: , internalOpsXp: }
  const personData: dashboardDataType[] = personDetailsData.map((person) => {
    const xpSourcesSum = overallXPDetails(
      [
        projectWorkCalculatedXP.find(
          (personXP) => personXP.name === person.name
        ),
        indieWorkCalculatedXP.find((personXP) => personXP.name === person.name),
        internalOpsCalculateXP.find(
          (personXP) => personXP.name === person.name
        ),
        bountiesCalculatedXP.find((personXP) => personXP.name === person.name),
        stackExchangeCalculatedXP.find(
          (personXP) => personXP.name === person.name
        ),
      ] as xpType[],
      person.name,
      overallXP.find(
        (personXP) => personXP.name === person.name
      ) as totalOverallXPType
    );
    return {
      name: person.name,
      personType: person.personType,
      overallXP: {
        total: overallXP.find((personXP) => personXP.name === person.name),
        details: xpSourcesSum,
      },
      projectWorkXP: projectWorkCalculatedXP.find(
        (personXP) => personXP.name === person.name
      ),
      indieWorkXP: indieWorkCalculatedXP.find(
        (personXP) => personXP.name === person.name
      ),
      internalOpsXp: internalOpsCalculateXP.find(
        (personXP) => personXP.name === person.name
      ),
      bountiesXP: bountiesCalculatedXP.find(
        (personXP) => personXP.name === person.name
      ),
      stackExchangeXP: stackExchangeCalculatedXP.find(
        (personXP) => personXP.name === person.name
      ),
    };
  });

  return { personData, bountyDataJson };
}
