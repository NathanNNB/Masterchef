import {MongoClient} from 'mongodb'

export async function connectToDatabase(){
  const client = await MongoClient.connect(
    'mongodb+srv://dbUser:QEw1paaa5tdvt6VP@teste.h0urp.mongodb.net/teste0?retryWrites=true&w=majority'
  );
    return client;
  };
