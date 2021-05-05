import {MongoClient} from 'mongodb'
const user = process.env.NAME_DATABASE;
const pwd = process.env.PWD_DATABASE;
const namedb = process.env.NAME_DATABASE;
export async function connectToDatabase(){
  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${pwd}@teste.h0urp.mongodb.net/${namedb}?retryWrites=true&w=majority`
  );
    return client;
  };
