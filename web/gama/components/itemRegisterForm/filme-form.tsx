import React, { useState, useRef } from 'react';
import styles from './styles.module.scss'


async function createFilme(
    title,
    image,
    description,
    typeItem,
    director,
    launchYear,
    duration,
    genre
  ){
    const response = await fetch('/api/filmeItem',{
      method: 'POST',
      body: JSON.stringify({title, image, description, typeItem, director, launchYear, duration, genre}),
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


const FilmeForm: React.FC = () => {

  const titleFilmeInputRef= useRef(null);
  const directorFilmeInputRef= useRef(null)
  const launchYearInputRef= useRef(null)
  const genreFilmeInputRef= useRef(null)
  const durationFilmeInputRef= useRef(null)
  const urlImageFilmeInputRef= useRef(null)
  const descriptionIFilmeInputRef= useRef(null)

  const [requestStatus, setRequestStatus] = useState(''); //pending, success or error
  const [requestError, setRequestError] = useState('');


  async function submitHandler(event){
    event.preventDefault();

    const enteredTitleFilme = titleFilmeInputRef.current.value;
    const enteredUrlImageFilme = urlImageFilmeInputRef.current.value;
    const enteredDescriptionFilme = descriptionIFilmeInputRef.current.value;
    const itemType = 'Filme';
    const enteredDirectorFilme = directorFilmeInputRef.current.value;
    const enteredLaunchYear = launchYearInputRef.current.value;
    const enteredDurationFilme = durationFilmeInputRef.current.value;
    const enteredGenreFilme = genreFilmeInputRef.current.value;


    setRequestStatus('pending');
    try{
      const result = await createFilme(
        enteredTitleFilme,
        enteredUrlImageFilme,
        enteredDescriptionFilme,
        itemType,
        enteredDirectorFilme,
        enteredLaunchYear,
        enteredDurationFilme,
        enteredGenreFilme,
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
    console.log(enteredDescriptionFilme)
  }

  return (
    <div className={styles.container}>
          <form className={styles.itemRegisterForm} onSubmit={submitHandler}>
            <span>Registrar novo item:</span>

            <span>Filme</span>
            
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Título' id='titleFilme' required ref={titleFilmeInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Diretor' id='directorFilme' required ref={directorFilmeInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Ano de lançamento' id='launchYearFilme' required ref={launchYearInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Gênero' id='genreFilme' required ref={genreFilmeInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Duração do filme em horas e minutos' id='durationFilme' required ref={durationFilmeInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='url' placeholder='URL da imagem do filme' id='urlImageFilme' required ref={urlImageFilmeInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'>Descreva o filme: </label>
              <textarea rows='5' id='descriptionFilme' required ref={descriptionIFilmeInputRef}></textarea>
            </div>
            <div className={styles.control}>
                <button className={styles.formButton} type='submit'> Confirmar </button>
              </div>
          </form>
        </div>
  );
}

export default FilmeForm;