import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;
  const user = { username: 'admin', password: 'password', role: 'admin' };

  if (username !== user.username || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ username, role: user.role }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
}
