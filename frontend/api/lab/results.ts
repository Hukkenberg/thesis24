import { NextApiRequest, NextApiResponse } from 'next';

const labResults = [
  { id: 1, test: 'Blood Test', result: 'Normal', date: '2024-12-12' },
  { id: 2, test: 'X-Ray', result: 'Fracture detected', date: '2024-12-15' },
  // ...
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10 } = req.query;
  const start = (parseInt(page as string) - 1) * parseInt(limit as string);
  const end = start + parseInt(limit as string);

  res.status(200).json({
    total: labResults.length,
    page: parseInt(page as string),
    limit: parseInt(limit as string),
    data: labResults.slice(start, end),
  });
}
