import { NextApiRequest, NextApiResponse } from 'next';

let users = [
  { id: 1, name: 'Admin', role: 'admin' },
  { id: 2, name: 'Doctor A', role: 'doctor' },
  { id: 3, name: 'Patient A', role: 'patient' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ data: users });
  } else if (req.method === 'POST') {
    const { id, name, role } = req.body;
    if (!id || !name || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    users.push({ id, name, role });
    res.status(201).json({ message: 'User created successfully' });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    users = users.filter((user) => user.id !== id);
    res.status(200).json({ message: 'User deleted successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
