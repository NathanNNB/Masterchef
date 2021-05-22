import {connectToDatabase} from '../../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Router } from 'next/router';


async function itemList(req:NextApiRequest, res: NextApiResponse) {

  if(req.method === 'GET'){
    const client = await connectToDatabase();
  
    const db = client.db();
    const itemData = await db.collection('item').findOne({title: req.query.item})
    res.status(200).json(itemData)

}
}
export default itemList;