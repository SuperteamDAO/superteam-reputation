import { FieldSet } from 'airtable';
import { NextApiRequest, NextApiResponse } from 'next';
import { dataCalculator } from '../../util/dataCalculator';
import { getDatabase } from '../../util/getDatabase';




export interface AirtableResponse {
  id: string;
  fields: FieldSet
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { personData, bountyDataJson } = await dataCalculator();
  const data: AirtableResponse[] = [];
  const base = getDatabase();
  const table = base("XP Summary");
  const records = await table.select({
    // Selecting the first 3 records in XP by skill:
    // maxRecords: 10,
    fields: ["Name", "Person Type", "Region", "Total XP", "XP (Project)", "XP (Indie)", "Ops XP", "CAB XP", "Bounty XP",],
    view: "XP by work type"
  }).all();

  const recordsCleaned = records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));


  console.log("Total number of records obtained are ", recordsCleaned.length as number)
  // const recordData = JSON.stringify(recordsCleaned, null, 2);

  res.status(200).json({ personData, bountyDataJson });

}
