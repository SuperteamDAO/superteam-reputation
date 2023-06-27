import Airtable from 'airtable';

export function getDatabase() {
    return new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
        process.env.AIRTABLE_BASE_ID!
    );
}