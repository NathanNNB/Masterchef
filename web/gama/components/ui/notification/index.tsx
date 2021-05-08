import React, { useState } from 'react';

import styles from './styles.module.scss'

interface propsNotification{
  status: string,
  title: string,
  message: string,
}
const Notification: React.FC<propsNotification> = ({status, title, message}: propsNotification) => {
  let statusClasses;
  console.log(1111)
  console.log(status)
  console.log(1111)
  if(status === 'success'){
    return(
      <div className={styles.success}>
        <span>{title}: </span>
        <p>{message}</p>
      </div>
    )
  }
  if(status === 'error'){
    return(
      <div className={styles.error}>
        <span>{title}: </span>
        <p>{message}</p>
      </div>
    )
  }
  if(status === 'pending'){
    return(
      <div className={styles.loading}>
        <span>{title}: </span>
        <p>{message}</p>
      </div>
    )
  }
  console.log(status)
  console.log(statusClasses)

  
  return (
    <div>
      
      
      

    </div>
  );
}

export default Notification;