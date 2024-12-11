import { NextApiRequest, NextApiResponse } from 'next';

const appointments = [
  // Giả sử danh sách này từ database
  { id: 1, date: '2024-12-12', doctor: 'Dr. A', status: 'confirmed' },
  { id: 2, date: '2024-12-15', doctor: 'Dr. B', status: 'pending' },
  // ...
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10 } = req.query;
  const start = (parseInt(page as string) - 1) * parseInt(limit as string);
  const end = start + parseInt(limit as string);
  res.status(200).json({
    total: appointments.length,
    page: parseInt(page as string),
    limit: parseInt(limit as string),
    data: appointments.slice(start, end),
  });
}
