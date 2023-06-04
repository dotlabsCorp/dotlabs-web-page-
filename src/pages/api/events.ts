
import { NextApiRequest, NextApiResponse } from 'next'
import  workshops  from "../../data/message.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(workshops.data)
}

