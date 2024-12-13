import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ error: 'JWT_SECRET is not configured in the environment' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    if (typeof decoded === 'object' && decoded.id) {
      const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
      res.status(200).json({ status: 'success', message: 'Token refreshed successfully', data: { token: newToken } });
    } else {
      res.status(400).json({ status: 'error', message: 'Invalid token payload', data: null });
    }
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      res.status(401).json({ status: 'error', message: 'Token has expired', data: null });
    } else if (err instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ status: 'error', message: 'Invalid token', data: null });
    } else {
      res.status(500).json({ status: 'error', message: 'An unexpected error occurred', data: null });
    }
  }
}
