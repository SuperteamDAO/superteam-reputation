const Airtable = require('airtable');
import { ProjectsXPType } from '../interfaces/projectsXP';
{
  /*
   * xp view are the views in airtable where all the xp allocated for that source is listed
   * we fetch all the views for different sources of xp and then sum it up to get overall xp for all the users
   * this xp data will contain user name, xp allocated and on which date that xp was allocated
   */
}

// this function fetches xp distributed for project work
const getProjectWork_xp_view = async () => {
  const xp_allocated_for_projects: ProjectsXPType[] = [];
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  try {
    base('Project Work')
      .select({
        // Selecting the first 3 records in All XP Requests:
        maxRecords: 1000,
        view: 'xp_view',
      })
      .eachPage(
        function page(records: any[], fetchNextPage: () => void) {
          records.forEach((record) => {
            //   console.log('records fetched - ', record.fields);
            const fields = record.fields;
            const name = fields._Name as string;

            const xp = fields._XP as number;
            const date = fields._Date as Date;
            xp_allocated_for_projects.push({
              name,
              xp: { xp_allocated: xp, date: date },
            });
            // console.log('xp - ', xp_allocated_for_projects);
          });

          fetchNextPage();
        },
        function done(err: any) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    return xp_allocated_for_projects;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// this function fetches xp distributed for Indie work
const getIndieWork_xp_view = async () => {
  const xp_allocated_for_indieWork: ProjectsXPType[] = [];
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  try {
    base('Indie Work')
      .select({
        // Selecting the first 3 records in All XP Requests:
        maxRecords: 1000,
        view: 'xp_view',
      })
      .eachPage(
        function page(records: any[], fetchNextPage: () => void) {
          records.forEach((record) => {
            //   console.log('records fetched - ', record.fields);
            const fields = record.fields;
            const name = fields._Name as string;

            const xp = fields._XP as number;
            const date = fields._Date as Date;
            xp_allocated_for_indieWork.push({
              name,
              xp: { xp_allocated: xp, date: date },
            });
            // console.log('xp - ', xp_allocated_for_projects);
          });

          fetchNextPage();
        },
        function done(err: any) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    return xp_allocated_for_indieWork;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// this function fetches xp distributed for Working Groups
const getWorkingGroups_xp_view = async () => {
  const xp_allocated_for_working_groups: ProjectsXPType[] = [];
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  try {
    base('CAB/SubDAO XPs')
      .select({
        // Selecting the first 3 records in All XP Requests:
        maxRecords: 1000,
        view: 'xp_view',
      })
      .eachPage(
        function page(records: any[], fetchNextPage: () => void) {
          records.forEach((record) => {
            //   console.log('records fetched - ', record.fields);
            const fields = record.fields;
            const name = fields._Name as string;

            const xp = fields._XP as number;
            const date = fields._Date as Date;
            xp_allocated_for_working_groups.push({
              name,
              xp: { xp_allocated: xp, date: date },
            });
            // console.log('xp - ', xp_allocated_for_projects);
          });

          fetchNextPage();
        },
        function done(err: any) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    return xp_allocated_for_working_groups;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// this function fetches xp distributed for Internal Operations
const getInternalOperations_xp_view = async () => {
  const xp_allocated_for_projects: ProjectsXPType[] = [];
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  try {
    base('Project Work')
      .select({
        // Selecting the first 3 records in All XP Requests:
        maxRecords: 1000,
        view: 'xp_view',
      })
      .eachPage(
        function page(records: any[], fetchNextPage: () => void) {
          records.forEach((record) => {
            //   console.log('records fetched - ', record.fields);
            const fields = record.fields;
            const name = fields._Name as string;

            const xp = fields._XP as number;
            const date = fields._Date as Date;
            xp_allocated_for_projects.push({
              name,
              xp: { xp_allocated: xp, date: date },
            });
            // console.log('xp - ', xp_allocated_for_projects);
          });

          fetchNextPage();
        },
        function done(err: any) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    return xp_allocated_for_projects;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// this function fetches xp distributed for Bounties
const getBounties_xp_view = async () => {};
// this function fetches xp distributed for Stack Exchanges
const getStackExchange_xp_view = async () => {};

export {
  getBounties_xp_view,
  getIndieWork_xp_view,
  getProjectWork_xp_view,
  getWorkingGroups_xp_view,
  getStackExchange_xp_view,
  getInternalOperations_xp_view,
};
