import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavButton from '../../ui/button/NavButton';
import styles from './styles.module.scss';
import { useRouter } from 'next/router'
import {signOut} from 'next-auth/client';
import {FaUserAlt} from "react-icons/fa";
import {FaCog} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";

export default function UserHeader() {
  const router = useRouter();
  const {user} = router.query;
  const itemRegisterURL = `/profile/${user}/itemRegister`;
  function logoutHandler(){
    signOut();
  }

  return (
    
    <div className={styles.header}>

      <section>
        <Link href='/'>
          <a>
            <Image
              src="/img/Logo.png" width={110} height={31.5}
              />
          </a>
        </Link>
      </section>
      
      <nav>
        
      
        <section>
          <Link href={itemRegisterURL}>
            <a>
            
            <FaPlus className={styles.buttonIcon}/>
            </a>
          </Link>
        </section>

        
        <section>
          <a>

           <FaCog className={styles.buttonIcon}/>
          </a>
        </section>

        
        <section>
          <a>  
           <FaUserAlt className={styles.buttonIcon}/>
          </a>
        </section>

        
        <section>
          <NavButton onClick={logoutHandler}  text='Logout' link='/login'/>
        </section>
      </nav>

      
    </div>

    
  )
}
