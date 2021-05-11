import {connectToDatabase} from '../../lib/db';


async function FilmeHandler(req,res){

  if(req.method ==='POST'){
    const data = req.body
    const {
      title,
      image,
      description,
      typeItem,
      director,
      launchYear,
      duration,
      genre} = data; 
      
    if(
      !title || 
      !image || 
      !description || 
      !typeItem ||
      !director ||
      !launchYear ||
      !duration ||
      !genre
      ) {
      res.status(422).json(
        {message: 'Algo deu errado no cadastro de item'
      });
      return;
    }

    const client = await connectToDatabase();
  
    const db = client.db();
    
    const existingFilme = await db.collection('item').findOne({title: title});


    if (existingFilme){
      res.status(422).json({message: 'Filme ja cadastrado'})
      client.close();
      return
    }

    const result = await db.collection('item').insertOne({
      
      title: title,
      image: image,
      description: description,
      typeItem: typeItem,
      director: director,
      launchYear: launchYear,
      duration: duration,
      genre: genre,

    });

    console.log(result);
    res.status(201).json({message: 'Created Filme'});
    client.close();
  }

  }

export default FilmeHandler;
