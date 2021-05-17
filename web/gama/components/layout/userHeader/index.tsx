import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavButton from '../../ui/button/NavButton';
import styles from './styles.module.scss';
import { useRouter } from 'next/router'
import {signOut, useSession} from 'next-auth/client';
import {FaUserAlt} from "react-icons/fa";
import {FaCog} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {FaRegListAlt} from 'react-icons/fa';


const UserHeader: React.FC = () => {
  const router = useRouter();
  const {user} = router.query;
  const itemRegisterURL = `/profile/${user}/itemRegister`;
  const itemList = `/profile/${user}/items`;
  const [session] = useSession();

  function logoutHandler(){
    signOut();
  }
  



  return (
    
    <div className={styles.header}>

      {!session &&

        <section>
        
          <a>
            <Image
              src="/img/Logo.png" width={110} height={31.5}
              />
          </a>
      
      </section>
      }
      
      {session && 
        <section>
          <Link href={`/profile/${user}`}>
          <a>
            <Image
              src="/img/Logo.png" width={110} height={31.5}
              />
          </a>
        </Link>
        </section>}

      <nav>
        
        <section>
          <Link href={itemList}>
            <a>
            
            <FaRegListAlt className={styles.buttonIcon}/>
            </a>
          </Link>
        </section>
      
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
          <Link href={`/profile/${user}`}>
            <a>  
            <FaUserAlt className={styles.buttonIcon}/>
            </a>
          </Link>
        </section>

        
        <section>
          <NavButton onClick={logoutHandler}  text='Logout' link='/login'/>
        </section>
      </nav>

      
    </div>

    
  )
}

export default UserHeader;
