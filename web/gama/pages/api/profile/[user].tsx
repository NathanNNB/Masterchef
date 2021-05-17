import {connectToDatabase} from '../../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next'

type userDataProps={
  email: string,
  username: string,
  uf: string
}
async function userData(req: NextApiRequest, res: NextApiResponse<userDataProps>){
  if(req.method === 'GET'){
    const client = await connectToDatabase();
  
    const db = client.db();

    const usersData = await db.collection('users')
    .findOne({email:req.query.user })
    const emailAny = usersData.email;
    const email= emailAny;
    const usernameAny = usersData.username;
    const username= usernameAny;
    const ufAny = usersData.uf;
    const uf= ufAny;

    
    res.status(200).json({email: email, username: username, uf: uf})
    client.close();

  }
}

export default userData;
