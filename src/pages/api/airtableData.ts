import { FieldSet, Table } from 'airtable';
import { AirtableBase } from 'airtable/lib/airtable_base';
import { NextApiRequest, NextApiResponse } from 'next';
import { getDatabase } from '../../util/getDatabase';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const data: any[] = [];
  const base: AirtableBase = getDatabase();
  const table: Table<FieldSet> = base("XP Summary");
  table.select({
    // Selecting the first 3 records in XP by skill:
    // maxRecords: 10,
    fields: ["Name", "Person Type", "Region", "Total XP", "XP (Project)", "XP (Indie)", "Ops XP", "CAB XP", "Bounty XP",],
    view: "XP by work type"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    let n = 0;
    records.forEach(function (record) {
      n++;
      // console.log('Retrieved', record.fields);
      data.push(record.fields);
    });
    console.log("Total number of contributers ", n)

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
    res.json(data)

  }, function done(err) {
    if (err) { console.error(err); return; }
  });


}
