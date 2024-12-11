import { NextApiRequest, NextApiResponse } from 'next';

const appointments = [
  { id: 1, patient: 'Nguyễn Văn A', date: '2024-12-12', status: 'Confirmed' },
  { id: 2, patient: 'Trần Thị B', date: '2024-12-15', status: 'Pending' },
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
