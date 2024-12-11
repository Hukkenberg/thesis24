import { NextApiRequest, NextApiResponse } from 'next';

const patients = [
  { id: 1, name: 'Nguyen Van A', age: 30, gender: 'male' },
  { id: 2, name: 'Tran Thi B', age: 25, gender: 'female' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10, search } = req.query;
  const start = (parseInt(page as string) - 1) * parseInt(limit as string);
  const end = start + parseInt(limit as string);

  let result = patients;

  if (search) {
    result = result.filter((patient) =>
      patient.name.toLowerCase().includes((search as string).toLowerCase())
    );
  }

  res.status(200).json({
    total: result.length,
    page: parseInt(page as string),
    limit: parseInt(limit as string),
    data: result.slice(start, end),
  });
}
