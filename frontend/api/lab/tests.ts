import { NextApiRequest, NextApiResponse } from 'next';

const tests = [
  { id: 1, patient: 'Nguyễn Văn A', type: 'Blood Test', status: 'In Progress' },
  { id: 2, patient: 'Trần Thị B', type: 'X-Ray', status: 'Completed' },
  // ...
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10 } = req.query;
  const start = (parseInt(page as string) - 1) * parseInt(limit as string);
  const end = start + parseInt(limit as string);

  res.status(200).json({
    total: tests.length,
    page: parseInt(page as string),
    limit: parseInt(limit as string),
    data: tests.slice(start, end),
  });
}


