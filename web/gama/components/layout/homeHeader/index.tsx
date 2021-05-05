import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavButton from '../../ui/button/NavButton';
import styles from './styles.module.scss';
import { useSession, signOut} from 'next-auth/client';


export default function HomeHeader() {
  const [session] = useSession();
  
  function logoutHandler(){
    signOut();
  }

  return (
    
    <div className={styles.header}>

      <section>
        <Link href="/">
          <a>
            <Image
              src="/img/Logo.png" width={110} height={31.5}
              />
          </a>
        </Link>
      </section>
      
      <nav>
        {!session &&(
          <section>
            <NavButton text='Entrar' link='/login'/>
          </section>
        )}
        {!session && (
          <section>
            <NavButton text='Registrar-se' link='/signup'/>
          </section>

        )}
        
        {session && 
        <section>
          <NavButton text='Perfil' link='/signup'/>
        </section>}

        {session && 
        <section>
          <NavButton onClick={logoutHandler}  text='Logout' link='/login'/>
        </section>}
      </nav>

      
    </div>

    
  )
}
