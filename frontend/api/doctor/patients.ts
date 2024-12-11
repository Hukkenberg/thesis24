import { NextApiRequest, NextApiResponse } from 'next';

const patients = [
  { id: 1, name: 'Nguyễn Văn A', age: 30, gender: 'male' },
  { id: 2, name: 'Trần Thị B', age: 25, gender: 'female' },
  // ...
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query;
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes((search as string).toLowerCase())
  );
  res.status(200).json(filteredPatients);
}
