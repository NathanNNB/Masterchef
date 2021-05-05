import React from 'react'
import Link from 'next/link';
import styles from './navButton.module.scss'


export interface ButtonProps extends React.ComponentPropsWithoutRef<"button">{
  specialProp?: string;
  link: string;
  text: string;
}

export default function NavButton(props: ButtonProps) {
  const{specialProp, link, text, ...rest } = props;
  
  return (
    <div>
        <Link href={props.link}>
        <button {...rest} className={styles.navButton}>
          <a >{props.text}</a>
        </button>
        </Link>
    </div>
    )
  }