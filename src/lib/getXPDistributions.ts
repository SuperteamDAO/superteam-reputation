const Airtable = require('airtable');
import { receivedXPFromAirtableType } from '../components/Dashboard/Row/interfaces/airtableRecievedXP';
import { skillKind } from '../enums/skill';

// this function fetches xp distribution
async function getXPDistribution(
  baseName: string
): Promise<receivedXPFromAirtableType[] | undefined> {
  const xp_allocated_for_work: receivedXPFromAirtableType[] = [];
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  await base(baseName)
    .select({
      maxRecords: 1000,
      view: 'xp_view',
    })
    .eachPage(
      function page(records: any[], fetchNextPage: () => void) { 
        records.forEach((record) => {
          const fields = record.fields;
          const name = fields._Name as string;
          const total_amount = fields._XP as number;
          const date = fields._Date as Date;
          const skill = fields._Skill as skillKind;
          xp_allocated_for_work.push({
            name,
            xp: { total_amount, date, skill },
          });
        });
        fetchNextPage();
      },
      function done(err: any) {
        if (err) {
          console.error('there was an error - ', err);
          return;
        }
      }
    );
  return xp_allocated_for_work;
}
{
  /*
   * xp view are the views in airtable where all the xp allocated for that source is listed
   * we fetch all the views for different sources of xp and then sum it up to get overall xp for all the users
   * this xp data will contain user name, xp allocated and on which date that xp was allocated
   */
}

async function getProjectWork_xp_view(): Promise<
  receivedXPFromAirtableType[] | undefined
> {
  return await getXPDistribution('Project Work');
}

async function getIndieWork_xp_view(): Promise<
  receivedXPFromAirtableType[] | undefined
> {
  return await getXPDistribution('Indie Work');
}
async function getWorkingGroups_xp_view(): Promise<
  receivedXPFromAirtableType[] | undefined
> {
  return await getXPDistribution('CAB/SubDAO XPs');
}

async function getInternalOperations_xp_view(): Promise<
  receivedXPFromAirtableType[] | undefined
> {
  return await getXPDistribution('CAB/SubDAO XPs');
}

async function getBounties_xp_view(): Promise<
  receivedXPFromAirtableType[] | undefined
> {
  return await getXPDistribution('Indie Work');
}
async function getStackExchange_xp_view(): Promise<
  receivedXPFromAirtableType[] | undefined
> {
  return await getXPDistribution('Indie Work');
}

export {
  getProjectWork_xp_view,
  getIndieWork_xp_view,
  getWorkingGroups_xp_view,
  getBounties_xp_view,
  getStackExchange_xp_view,
  getInternalOperations_xp_view,
};
