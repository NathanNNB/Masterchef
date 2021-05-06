import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavButton from '../../ui/button/NavButton';
import styles from './styles.module.scss';
import {signOut} from 'next-auth/client';
import {FaUserAlt} from "react-icons/fa";
import {FaCog} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";

export default function UserHeader() {
  
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
        
      
        <section>
          <FaPlus className={styles.buttonIcon}/>
        </section>

        
        <section>
          <FaCog className={styles.buttonIcon}/>
        </section>

        
        <section>
          <FaUserAlt className={styles.buttonIcon}/>
        </section>

        
        <section>
          <NavButton onClick={logoutHandler}  text='Logout' link='/login'/>
        </section>
      </nav>

      
    </div>

    
  )
}
