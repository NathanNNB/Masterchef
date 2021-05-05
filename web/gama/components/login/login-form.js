import {useRef} from 'react';

import styles from './styles.module.scss';
import { signIn} from 'next-auth/client';


export default function LoginForm() {
  
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  async function submitHandler(event){

    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    
    const result = await signIn('credentials', {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    console.log(result);

  }

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.formLogin}>
        <span>Entrar</span>
        <div className={styles.controls}>  
          <div className={styles.control}>
            <label htmlFor='email'></label>
            <input type='email' placeholder='Email' id='Email' required ref={emailInputRef}></input>
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
