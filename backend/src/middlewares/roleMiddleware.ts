import { NextApiRequest, NextApiResponse } from 'next';

export function authorize(roles: string[]) {
  return (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    const user = (req as any).user;

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
}
