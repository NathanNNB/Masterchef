import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss'

export default function itemTopic (props) {
  return (
    <div className={styles.container}>
      <Link href={props.link}>
        <a>

      <div className={styles.imageItemDiv}>
        <img className={styles.imageItem} src={props.image}>
        </img>
      </div>
        </a>
      </Link>
      <div className={styles.textItem}>
        <div className={styles.titleItem}>
          {props.title}
        </div>
        <div className={styles.authorItem}>
          {props.typeItem}
        </div>  
      </div>
    </div>
  );
}
