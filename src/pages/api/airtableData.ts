import { NextApiRequest, NextApiResponse } from 'next';
import { dataCalculator } from '../../util/dataCalculator';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { personData, bountyDataJson } = await dataCalculator();

  res.status(200).json({ personData, bountyDataJson });

}
