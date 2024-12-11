import { NextApiRequest, NextApiResponse } from 'next';

const doctorPatients = [
  { id: 1, doctor: 'Dr. A', patient: 'Nguyen Van A', age: 30, gender: 'male' },
  { id: 2, doctor: 'Dr. B', patient: 'Tran Thi B', age: 25, gender: 'female' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { doctorId } = req.query;

  if (!doctorId) {
    return res.status(400).json({ error: 'Missing doctorId' });
  }

  const patients = doctorPatients.filter((record) => record.doctor === doctorId);

  res.status(200).json({ data: patients });
}

