import type { NextApiRequest, NextApiResponse } from 'next';
import { Project } from '../../types';

const data = require('../../data/projects.json');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  if (req.method === 'GET') {
    res.status(200).json(data);
    return new Response(
      JSON.stringify({
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: data
      })
    )
  } else {
    return res.status(404);
  }
}
