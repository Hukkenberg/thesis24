import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    if (typeof decoded === 'object' && 'id' in decoded) {
      const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
      res.status(200).json({ token: newToken });
    } else {
      throw new Error('Invalid token payload');
    }
  } catch (err) {
    res.status(401).json({ error: 'Token không hợp lệ hoặc đã hết hạn' });
  }
}
