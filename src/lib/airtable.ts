const Airtable = require('airtable');
import { xpTableType } from '../interfaces/xpTable';
const getFilteredRecords = (records: any[]) => {
  // filter out the records where allocation is null and xp is not null
  return records.filter((record: { allocated: null; xp: null }) => {
    return record.allocated !== null && record.xp !== null;
  });
};

const getIndieRecordsFunction = async () => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  const table = base('Indie Work');
  const data: { name: any; allocated: any; xp: any; skill: any }[] = [];
  await table
    .select({
      maxRecords: 1000,
      view: 'XP Requests',
    })
    .eachPage(function page(records: any[], fetchNextPage: () => void) {
      records.forEach(function (record: { get: (_arg0: string) => any[] }) {
        data.push({
          name: record.get('Claimer') || null,
          allocated: record.get('Allocated?') || null,
          xp: record.get('XP Requested') || null,
          skill: record.get('Skill (from Skill)')
            ? record.get('Skill (from Skill)')[0]
            : null,
        });
      });
      fetchNextPage();
    });

  return getFilteredRecords(data);
};

const getBountiesRecordsFunction = async () => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  const table = base('Bounties');
  const bounties: { name: any; allocated: boolean; xp: any; skill: string }[] =
    [];
  await table
    .select({
      maxRecords: 1000,
      view: 'Grid view',
    })
    .eachPage(function page(records: any[], fetchNextPage: () => void) {
      records.forEach(function (record: { fields: any }) {
        const fields = record.fields;
        const name = fields['Name'];
        const design = fields['Design Bounty XP'] || 0;
        const dev = fields['Development Bounty XP'] || 0;
        const writing = fields['Writing Bounty XP'] || 0;
        const video = fields['Video Bounty XP'] || 0;

        if (design > 0) {
          bounties.push({
            name: name || null,
            allocated: true,
            xp: design || null,
            skill: 'Design',
          });
        } else if (dev) {
          bounties.push({
            name: name || null,
            allocated: true,
            xp: dev || null,
            skill: 'Development',
          });
        } else if (writing) {
          bounties.push({
            name: name || null,
            allocated: true,
            xp: writing || null,
            skill: 'Writing',
          });
        } else if (video) {
          bounties.push({
            name: name || null,
            xp: video || null,
            skill: 'Videography',
            allocated: true,
          });
        }
      });
      fetchNextPage();
    });
  return bounties;
};

const getBrainTrustRecordsFunction = async () => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BRAIN_TRUST_BASE
  );
  const table = base('Recurring Team XP');
  const data: { name: any; xp: any; skill: any; allocated: boolean }[] = [];
  await table
    .select({
      maxRecords: 1000,
      view: 'All',
    })
    .eachPage(function page(records: any[], fetchNextPage: () => void) {
      records.forEach(function (record: { get: (_arg0: string) => any[] }) {
        data.push({
          name: record.get('Name (from Member)')
            ? record.get('Name (from Member)')[0]
            : null,
          xp: record.get('XP')[0] || null,
          skill: record.get('Skill Category') || null,
          allocated: true,
        });
      });
      fetchNextPage();
    });

  // const table2 = base('Team');
  // const data2 = [];
  // await table2
  //   .select({
  //     maxRecords: 1000,
  //     view: "Relevant",
  //   })
  //   .eachPage(function page(records, fetchNextPage) {
  //     records.forEach(function(record) {
  //         data2.push({
  //           name: record.get('Name') || null,
  //           xp: record.get('XP') || null,
  //           skill: 'Strategy',
  //           allocated: true
  //         });
  //     });
  //     fetchNextPage();
  // });

  // // concat the two tables
  // const data3 = data.concat(data2);

  // return data3;
  return data;
};

const getCommunityRecordsFunction = async () => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  const table = base('Community');
  const data: {
    [x: string]: null;
    claimer: any;
    xp_project: any;
    xp_non_project: any;
    skill: any;
  }[] = [];
  await table
    .select({
      maxRecords: 1000,
      view: 'Community',
    })
    .eachPage(function page(records: any[], fetchNextPage: () => void) {
      records.forEach(function (record: { get: (_arg0: string) => any }) {
        data.push({
          claimer: record.get('Name') || null,
          xp_project: record.get('XP (Project)') || null,
          xp_non_project: record.get('XP (Non-Project)') || null,
          skill: record.get('Skill') || null,
        });
      });
      fetchNextPage();
    });

  const filteredData = data.filter((record) => {
    const xp = record.xp_project + record.xp_non_project;
    if (record.xp !== null && xp > 0) {
      return record;
    }
  });
  return filteredData;
};

const getProjectsWorkRecordsFunction = async () => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  const table = base('Project Work');
  const data: {
    name: any;
    project: any;
    allocated: any;
    xp: any;
    skill: any;
  }[] = [];
  await table
    .select({
      maxRecords: 1000,
      view: 'All XP Requests',
    })
    .eachPage(function page(records: any[], fetchNextPage: () => void) {
      records.forEach(function (record: { get: (_arg0: string) => any[] }) {
        data.push({
          name: record.get('Contributor')[0] || null,
          project: record.get('Discord Handle') || null,
          allocated: record.get('Allocated?') || null,
          xp: record.get('Individual XP') || null,
          skill: record.get('Skill (from Skill)')
            ? record.get('Skill (from Skill)')[0]
            : null,
        });
      });
      fetchNextPage();
    });

  // filter out the records where allocation is null and xp is not null and reduce the data to only the fields by project
  const filteredData = getFilteredRecords(data).reduce(
    (acc: { [x: string]: any[] }, record: { project: string | number }) => {
      if (acc[record.project]) {
        acc[record.project].push(record);
      } else {
        acc[record.project] = [record];
      }
      return acc;
    },
    {}
  );
  return filteredData;
};

const getCabsRecordsFunction = async () => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  const table = base('CAB/SubDAO XPs');
  const data: {
    name: any;
    cab: any;
    xp: any;
    skill: any;
    allocated: boolean;
  }[] = [];
  await table
    .select({
      maxRecords: 1000,
      view: 'Grid view',
    })
    .eachPage(function page(records: any[], fetchNextPage: () => void) {
      records.forEach(function (record: { get: (_arg0: string) => any[] }) {
        data.push({
          name: record.get('Name (from Member)')[0] || null,
          cab: record.get('Name (from Team)')[0] || null,
          xp: record.get('Total XP') || null,
          skill: record.get('Skill (from Skillset)') || null,
          allocated: true,
        });
      });
      fetchNextPage();
    });

  const filteredData = getFilteredRecords(data).reduce(
    (acc: { [x: string]: any[] }, record: { cab: string | number }) => {
      if (acc[record.cab]) {
        acc[record.cab].push(record);
      } else {
        acc[record.cab] = [record];
      }
      return acc;
    },
    {}
  );

  return filteredData;
};

const getStackXpRecordsFunction = async (_req: undefined, _res: undefined) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.BASE
  );
  const table = base('Superteam StackEx XP');
  const data: { name: any; xp: any; skill: string; allocated: boolean }[] = [];
  await table
    .select({
      maxRecords: 1000,
      view: 'Grid view',
    })
    .eachPage(function page(records: any[], fetchNextPage: () => void) {
      records.forEach(function (record: { get: (_arg0: string) => any }) {
        data.push({
          name: record.get('Discord') || null,
          xp: record.get('CumulativeXP') || null,
          skill: 'Development',
          allocated: true,
        });
      });
      fetchNextPage();
    });

  return getFilteredRecords(data);
};

const getAllTitleFunction = async () => {
  const cabs = await getCabsRecordsFunction();
  const projects = await getProjectsWorkRecordsFunction();

  // store the objects in an array
  const cabsArray = Object.keys(cabs);
  const projectsArray = Object.keys(projects);

  return {
    cabs: cabsArray,
    projects: projectsArray,
  };
};

const getXPRecordFunction = async () => {
  const xps: xpTableType[] | null = [];
  try {
    var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.BASE
    );

    base('XP Summary')
      .select({
        // Selecting the first 3 records in XP by skill:
        maxRecords: 1000,
        view: 'XP by skill',
      })
      .eachPage(
        function page(records: any[], fetchNextPage: () => void) {
          records.forEach(function (record: { fields: any }) {
            const fields = record.fields;
            const name = fields['Name'] as string;
            const personType = fields['Person Type'] as string;
            const design = fields['Design XP'] || 0;
            const dev = fields['Dev XP'] || 0;
            const ops = fields['Ops XP'] || 0;
            const strategy = fields['Strategy XP'] || 0;
            const writing = fields['Writing XP'] || 0;
            const video = fields['Video XP'] || 0;
            const total = fields['Total XP'] || 0;
            xps.push({
              name: name,
              person_type: personType,
              total_xp: total || 0,
              design_xp: design || 0,
              dev_xp: dev || 0,
              ops_xp: ops || 0,
              strategy_xp: strategy || 0,
              writing_xp: writing || 0,
              video_xp: video || 0,
            });
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
  } catch (error) {
    console.log('error', error);
    return error;
  }
  return xps;
};
export {
  getIndieRecordsFunction,
  getCommunityRecordsFunction,
  getProjectsWorkRecordsFunction,
  getAllTitleFunction,
  getXPRecordFunction,
  getBountiesRecordsFunction,
  getCabsRecordsFunction,
  getBrainTrustRecordsFunction,
  getStackXpRecordsFunction,
};
