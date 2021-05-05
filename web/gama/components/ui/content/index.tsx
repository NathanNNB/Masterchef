import styles from './styles.module.scss'

import React from 'react';


function Content(props) {
  return <div className={styles.Content}>
    {props.children}
  </div>;
}

export default Content;