import { NextApiRequest, NextApiResponse } from 'next';

let tests = [
  { id: 1, patient: 'Nguyen Van A', type: 'Blood Test', status: 'Pending' },
  { id: 2, patient: 'Tran Thi B', type: 'X-Ray', status: 'Completed' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ data: tests });
  } else if (req.method === 'POST') {
    const { id, patient, type, status } = req.body;
    if (!id || !patient || !type || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    tests.push({ id, patient, type, status });
    res.status(201).json({ message: 'Test created successfully' });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    tests = tests.filter((test) => test.id !== id);
    res.status(200).json({ message: 'Test deleted successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
