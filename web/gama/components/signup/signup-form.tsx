import {useRef} from 'react'

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
  
  async function submitHandler(event){

    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredUf = ufInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    try{
      const result = await createUser(
        enteredEmail,
        enteredUsername,
        enteredUf,
        enteredPassword,
        );

        console.log(result);
    }catch(error){
      console.log(error);
    }
  }

  

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
            <input type='text' placeholder='Estado' id='UF' required ref={ufInputRef}></input>
          </div>
          <div className={styles.control}>
            <label htmlFor='pwd'></label>
            <input type='password' id='pwd' placeholder='Senha' required ref={passwordInputRef}></input>
          </div>
          <div className={styles.control}>
            <button className={styles.formButton} type='submit'> Confirmar </button>
          </div>

        </div>

      </form>
    </div>
  )
}
