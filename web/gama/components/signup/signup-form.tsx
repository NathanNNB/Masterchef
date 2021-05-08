import {useRef, useState} from 'react'
import Notification from '../ui/notification';

import styles from './styles.module.scss';

async function createUser(email, username, uf, password ){
  const response = await fetch('/api/auth/signup',{
    method: 'POST',
    body: JSON.stringify({email, username, uf, password}),
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


export default function SignupForm() {

  const emailInputRef = useRef(null);
  const usernameInputRef = useRef(null);
  const ufInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  
  const [requestStatus, setRequestStatus] = useState(''); //pending, success or error
  const [requestError, setRequestError] = useState('');

  async function submitHandler(event){
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredUf = ufInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setRequestStatus('pending');
    try{
      const result = await createUser(
        enteredEmail,
        enteredUsername,
        enteredUf,
        enteredPassword,
        );
        setRequestStatus('success')
        console.log(result);
    }catch(error){
      setRequestStatus('error')
      setRequestError(error.message);
      console.log(error);
    }
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
    <div>
      <form onSubmit={submitHandler} className={styles.formLogin} >
        <span>Registrar-se</span>
        <div className={styles.controls}>  
          <div className={styles.control}>
            <label htmlFor='email'></label>
            <input type='email' placeholder='Email' id='Email' required ref={emailInputRef}></input>
          </div>
          <div className={styles.control}>
            <label htmlFor='text'></label>
            <input type='text' placeholder='Nome de usuário' id='userName' required ref={usernameInputRef}></input>
          </div>
          <div className={styles.control}>
            <label htmlFor='text'></label>
            <select placeholder='Estado' id='UF' required  ref={ufInputRef}>
              <option value="null">Selecione seu estado</option>
              <option value="Ex">Estrangeiro</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="SS">Tocantins</option>
              
            </select>
          </div>
          <div className={styles.control}>
            <label htmlFor='pwd'></label>
            <input type='password' id='pwd' placeholder='Senha' required ref={passwordInputRef}></input>
          </div>
          <div className={styles.control}>
            <label > *Senha deve possuir ao menos 8 caracteres</label>
            <label > *Por questões de segurança, evite criar uma senha parecida com seu email ou nome</label>

          </div>
          <div className={styles.control}>
            <button className={styles.formButton} type='submit'> Confirmar </button>
          </div>

        </div>

      </form>
      {notification && 
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
    </div>
  )
}
