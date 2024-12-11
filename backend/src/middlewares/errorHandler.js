import { NextApiRequest, NextApiResponse } from 'next';

export function errorHandler(err: any, req: NextApiRequest, res: NextApiResponse, next: Function) {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
}
