import type { NextApiRequest, NextApiResponse } from 'next';
import { Project } from '../../types';

const data = require('../../data/projects.json');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  res.status(200).json(data);
}
