import React from 'react'
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <div className={styles.divFooter}>
      
    <footer className={styles.footer}>
        <p>
          Desenvolvido por Nathan Novais e Matheus Portilho
        </p>
        <section>
        <Link href="https://github.com/NathanNNB/Masterchef" >
          <a target='_blank'>
            <FaGithub className={styles.githubIcon}/>
          </a>
        </Link>
        </section>
    </footer>
    </div>
  )
}
