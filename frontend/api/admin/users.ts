import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'doctor' | 'lab' | 'admin' | 'patient';
}

let users: User[] = [
  { id: 1, name: 'Nguyễn Văn A', email: 'a@example.com', role: 'doctor' },
  { id: 2, name: 'Trần Thị B', email: 'b@example.com', role: 'lab' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email, role } = req.body;
    const newUser = { id: users.length + 1, name, email, role };
    users.push(newUser);
    res.status(201).json(newUser);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    users = users.filter((user) => user.id !== parseInt(id as string));
    res.status(200).json({ message: 'Người dùng đã được xóa' });
  } else if (req.method === 'PUT') {
    const { id, role } = req.body;
    users = users.map((user) =>
      user.id === id ? { ...user, role } : user
    );
    res.status(200).json({ message: 'Cập nhật vai trò thành công' });
  } else {
    res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
  }
}
