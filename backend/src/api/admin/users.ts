import { NextApiRequest, NextApiResponse } from 'next';

const mockUsers = [
    { id: 1, name: 'Admin', role: 'admin' },
    { id: 2, name: 'Doctor A', role: 'doctor' },
    { id: 3, name: 'Patient A', role: 'patient' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return res.status(200).json(mockUsers);
    }

    if (req.method === 'POST') {
        const { id, name, role } = req.body;
        if (!id || !name || !role) {
            return res.status(400).send('Missing required fields');
        }
        const newUser = { id, name, role };
        mockUsers.push(newUser);
        res.status(201).json(newUser);
    }

    return res.status(405).send('Method not allowed');
}
