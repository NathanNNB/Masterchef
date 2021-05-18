import {connectToDatabase} from '../../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next'


async function itemList(req:NextApiRequest, res: NextApiResponse) {

  if(req.method === 'GET'){
    const client = await connectToDatabase();
  
    const db = client.db();
    const itemList = await db.collection('item').find({typeItem: 'Serie'}).toArray()
    res.status(200).json(itemList)

}
}
export default itemList;