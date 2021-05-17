import {connectToDatabase} from '../../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next'


type itemListProps={
  image: string,
  typeItem: string,
  title: string
}
async function itemList(req:NextApiRequest, res: NextApiResponse<itemListProps>) {
  if(req.method === 'GET'){
    const client = await connectToDatabase();
  
    const db = client.db();
    const itemList = await db.collection('item').find().toArray()
    console.log(itemList)
    res.status(200).json(itemList)

}
}
export default itemList;