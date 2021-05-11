import {connectToDatabase} from '../../lib/db';


async function LivroHandler(req,res){

  if(req.method ==='POST'){
    const data = req.body
    const {
      title,
      image,
      description,
      typeItem,
      author,
      genre} = data; 
      
    if(
      !title || 
      !image || 
      !description || 
      !typeItem ||
      !author ||
      !genre
      ) {
      res.status(422).json(
        {message: 'Algo deu errado no cadastro de item'
      });
      return;
    }

    const client = await connectToDatabase();
  
    const db = client.db();
    
    const existingLivro = await db.collection('item').findOne({title: title});


    if (existingLivro){
      res.status(422).json({message: 'Livro ja cadastrado'})
      client.close();
      return
    }

    const result = await db.collection('item').insertOne({
      
      title: title,
      image: image,
      description: description,
      typeItem: typeItem,
      author: author,
      genre: genre,

    });

    console.log(result);
    res.status(201).json({message: 'Created Livro'});
    client.close();
  }

  }

export default LivroHandler;
