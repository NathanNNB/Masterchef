import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';
import Notification from '../ui/notification';


async function createSerie(
  title,
  image,
  description,
  typeItem,
  writer,
  launchYear,
  seasons,
  genre
){
  const response = await fetch('/api/serieItem',{
    method: 'POST',
    body: JSON.stringify({title, image, description, typeItem, writer, launchYear, seasons, genre}),
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
const SerieForm: React.FC = () => {

  const titleSerieInputRef= useRef(null);
  const urlImageSerieInputRef= useRef(null)
  const descriptionISerieInputRef= useRef(null)
  const writerSerieInputRef= useRef(null)
  const launchYearInputRef= useRef(null)
  const seasonsSerieInputRef= useRef(null)
  const genreSerieInputRef= useRef(null)

  const [requestStatus, setRequestStatus] = useState(''); //pending, success or error
  const [requestError, setRequestError] = useState('');

  async function submitHandler(event){
    event.preventDefault();

    const enteredTitleSerie = titleSerieInputRef.current.value;
    const enteredUrlImageSerie = urlImageSerieInputRef.current.value;
    const enteredDescriptionSerie = descriptionISerieInputRef.current.value;
    const itemType = 'Serie';
    const enteredDirectorSerie = writerSerieInputRef.current.value;
    const enteredLaunchYear = launchYearInputRef.current.value;
    const enteredDurationSerie = seasonsSerieInputRef.current.value;
    const enteredGenreSerie = genreSerieInputRef.current.value;


    setRequestStatus('pending');
    try{
      const result = await createSerie(
        enteredTitleSerie,
        enteredUrlImageSerie,
        enteredDescriptionSerie,
        itemType,
        enteredDirectorSerie,
        enteredLaunchYear,
        enteredDurationSerie,
        enteredGenreSerie,
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
    console.log(enteredDescriptionSerie)
  }


  let notification ;
  

  if(requestStatus === 'success'){
    notification={
      status:'success',
      title: 'Sucesso',
      message: 'Cadastro realizado ',
    };
  }

  if(requestStatus === 'error'){
    notification={
      status:'error',
      title: 'Error',
      message: requestError,
    };
  }

  if(requestStatus === 'pending'){
    notification={
      status:'pending',
      title: 'Sending message',
      message: 'Processing...',
    };
  }
  console.log(requestStatus)
  return (
    <div className={styles.container}>
          <form className={styles.itemRegisterForm} onSubmit={submitHandler}>
            <span>Registrar novo item:</span>

            <span>Série</span>
            
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Título' id='titleSerie'  ref={titleSerieInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Criador' id='writerSerie'  ref={writerSerieInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Ano de lançamento' id='launchYearSerie'  ref={launchYearInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Gênero' id='genreSerie'  ref={genreSerieInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='text' placeholder='Número de temporadas' id='seasonsSerie'  ref={seasonsSerieInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'></label>
              <input type='url' placeholder='URL da imagem da série' id='urlImageSerie'  ref={urlImageSerieInputRef} ></input>
            </div>
            <div className={styles.control}>
              <label htmlFor='text'>Descreva a série: </label>
              <textarea rows={5} id='descriptionSerie'  ref={descriptionISerieInputRef}></textarea>
            </div>
            <div className={styles.control}>
                <button className={styles.formButton} type='submit'> Confirmar </button>
              </div>
          </form>
          {notification && 
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />}
        </div>
  );
}

export default SerieForm;