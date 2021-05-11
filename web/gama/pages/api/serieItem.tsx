import {connectToDatabase} from '../../lib/db';


async function SerieHandler(req,res){

  if(req.method ==='POST'){
    const data = req.body
    const {
      title,
      image,
      description,
      typeItem,
      writer,
      launchYear,
      seasons,
      genre} = data; 
      
    if(
      !title || 
      !image || 
      !description || 
      !typeItem ||
      !writer ||
      !launchYear ||
      !seasons ||
      !genre
      ) {
      res.status(422).json(
        {message: 'Algo deu errado no cadastro de item'
      });
      return;
    }

    const client = await connectToDatabase();
  
    const db = client.db();
    
    const existingSerie = await db.collection('item').findOne({title: title});


    if (existingSerie){
      res.status(422).json({message: 'Serie ja cadastrado'})
      client.close();
      return
    }

    const result = await db.collection('item').insertOne({
      
      title: title,
      image: image,
      description: description,
      typeItem: typeItem,
      writer: writer,
      launchYear: launchYear,
      seasons: seasons,
      genre: genre,

    });

    console.log(result);
    res.status(201).json({message: 'Created Serie '});
    client.close();
  }

  }

export default SerieHandler;
