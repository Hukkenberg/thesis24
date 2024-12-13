import { NextApiRequest, NextApiResponse } from 'next';

const doctors = [
  { id: 1, name: 'Dr. Nguyen Van A', specialization: 'Cardiology', experience: 15 },
  { id: 2, name: 'Dr. Tran Thi B', specialization: 'Neurology', experience: 10 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(doctors);
  }

  res.status(405).send('Method not allowed');
}
