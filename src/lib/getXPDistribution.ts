import Airtable from 'airtable';
import { skillKind } from '../enums/skill';
import { receivedXPFromAirtableType } from '../interfaces/airtableRecievedXP';

// this function fetches xp distribution
async function getXPDistribution(baseName: string): Promise<receivedXPFromAirtableType[] | undefined> {
    const xp_allocated_for_work: receivedXPFromAirtableType[] = [];
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);
    await base(baseName)
        .select({
            maxRecords: 1000,
            view: 'xp_view',
        })
        .eachPage(
            function page(records, fetchNextPage) {
                records.forEach((record) => {
                    const fields = record.fields;
                    const name = fields._Name as string;
                    const total_amount = fields._XP as number;
                    const date = (fields._Date || new Date()) as Date;
                    const skill = (fields._Skill || skillKind.DEV) as skillKind;
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
            },
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

async function getProjectWork_xp_view(): Promise<receivedXPFromAirtableType[] | undefined> {
    return await getXPDistribution('Project Work');
}

async function getIndieWork_xp_view(): Promise<receivedXPFromAirtableType[] | undefined> {
    return await getXPDistribution('Indie Work');
}
async function getWorkingGroups_xp_view(): Promise<receivedXPFromAirtableType[] | undefined> {
    return await getXPDistribution('CAB/SubDAO XPs');
}

async function getInternalOperations_xp_view(): Promise<receivedXPFromAirtableType[] | undefined> {
    const xp_allocated_for_work: receivedXPFromAirtableType[] = [];
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.INTERNAL_OPS_BASE!);
    await base('Recurring Team XP')
        .select({
            maxRecords: 1000,
            view: 'xp_view',
        })
        .eachPage(
            function page(records, fetchNextPage) {
                records.forEach((record) => {
                    const fields = record.fields;
                    const userName = fields._Name as string[];
                    const name = userName[0];
                    const total_amount_Arr = fields._XP as unknown as number[];
                    const total_amount = total_amount_Arr[0];
                    const date = fields._Date as unknown as Date;
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
            },
        );
    return xp_allocated_for_work;
}

async function getBounties_xp_view(): Promise<receivedXPFromAirtableType[] | undefined> {
    return await getXPDistribution('Indie Work');
}
async function getStackExchange_xp_view(): Promise<receivedXPFromAirtableType[] | undefined> {
    return await getXPDistribution('Superteam StackEx XP');
}

export {
    getBounties_xp_view, getIndieWork_xp_view, getInternalOperations_xp_view, getProjectWork_xp_view, getStackExchange_xp_view, getWorkingGroups_xp_view
};

