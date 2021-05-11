import React, { useState, useRef } from 'react';
import styles from './styles.module.scss'


async function createLivro(
  title,
  image,
  description,
  typeItem,
  author,
  genre
){
  const response = await fetch('/api/livroItem',{
    method: 'POST',
    body: JSON.stringify({title, image, description, typeItem, author, genre}),
    headers:{
    'Content-Type': 'application/json'
  }
  });


  const data = await response.json();
  if(!response.ok){
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
}



export default function LivroForm() {

  const titleLivroInputRef= useRef(null);
  const authorLivroInputRef= useRef(null)
  const genreLivroInputRef= useRef(null)
  const urlImageLivroInputRef= useRef(null)
  const descriptionLivroInputRef= useRef(null)

  const [requestStatus, setRequestStatus] = useState(''); //pending, success or error
  const [requestError, setRequestError] = useState('');

  async function submitHandler(event){
    event.preventDefault();

    const enteredTitleLivro= titleLivroInputRef.current.value;
    const enteredUrlImageLivro= urlImageLivroInputRef.current.value;
    const enteredDescriptionLivro= descriptionLivroInputRef.current.value;
    const itemType='Livro';
    const enteredAuthorLivro= authorLivroInputRef.current.value;
    const enteredGenreLivro= genreLivroInputRef.current.value;

    setRequestStatus('pending');
    try{
      const result = await createLivro(
        enteredTitleLivro,
        enteredUrlImageLivro,
        enteredDescriptionLivro,
        itemType,
        enteredAuthorLivro,
        enteredGenreLivro,
      );
      setRequestStatus('success')
      console.log(result)
    }catch(error){
      setRequestStatus('error')
      setRequestError(error.message);
      console.log(error);
    }

    console.log(`RequestError: ${requestError}`)
    console.log(`RequestStatus: ${requestStatus}`)
    console.log(enteredDescriptionLivro)
  }

  return (
    <div className={styles.container}>
          <form className={styles.itemRegisterForm} onSubmit={submitHandler}>
            <span>Registrar novo item:</span>

            <span>Livro </span>
            
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Título' id='titleLivro' required ref={titleLivroInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Autor' id='authorLivro' required ref={authorLivroInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Gênero' id='genreLivro' required ref={genreLivroInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='url' placeholder='URL da imagem do livro' id='urlImageLivro' required ref={urlImageLivroInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'>Descreva o livro: </label>
              <textarea rows='5' id='descriptionLivro' required ref={descriptionLivroInputRef}></textarea>
            </div>
            <div className={styles.control}>
                <button className={styles.formButton} type='submit'> Confirmar </button>
              </div>
          </form>
        </div>
  )
}
