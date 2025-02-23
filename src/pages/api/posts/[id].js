import { getById } from '../../../lib/posts'
export default async function handler(req, res) {
    const  { id } = req.query;
    const post = await getById(id)
    res.status(200).json(post)
  }