import {connectToDatabase} from '../../../lib/db';
import {hashPassword} from '../../../lib/auth';

async function handler(req,res){

  if(req.method ==='POST'){
    const data = req.body
    const {email,password,uf,username} = data; 
    if(
      !email || 
      !email.includes('@') || 
      !password || 
      password.trim().length <7 ||
      !uf ||
      !username
      ) {
      res.status(422).json(
        {message: 'A senha deve possuir ao menos 8 caracteres.'
      });
      return;
    }
    const client = await connectToDatabase();
  
    const db = client.db();
    
    const existingUser = await db.collection('users').findOne({email: email});

    if(uf === 'null'){
      res.status(422).json({message: 'Selecione um estado'})
      client.close();
      return
    }

    if (existingUser){
      res.status(422).json({message: 'User exists already'})
      client.close();
      return
    }

    const hashedPassword = await hashPassword(password);
    const result = await db.collection('users').insertOne({
      email: email,
      username: username,
      password: hashedPassword,
      uf: uf,
    });
    console.log(result);
    res.status(201).json({message: 'Created user'});
    client.close();
  }

  }

export default handler;
