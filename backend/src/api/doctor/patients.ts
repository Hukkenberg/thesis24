import { NextApiRequest, NextApiResponse } from 'next';

const doctorPatients = [
  { id: 1, doctorId: 1, patient: 'Nguyen Van A', age: 30, gender: 'male' },
  { id: 2, doctorId: 1, patient: 'Tran Thi B', age: 25, gender: 'female' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { doctorId } = req.query;

  if (!doctorId) {
    return res.status(400).json({ error: 'Missing doctorId' });
  }

  const patients = doctorPatients.filter((record) => record.doctorId === parseInt(doctorId as string));
  res.status(200).json(patients);
}
