import React, { useState } from 'react'
import styles from './styles.module.scss'
import ItemTopic from '../itemTopic/index';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NavButton from '../ui/button/NavButton'

export default function ItemListFilme(){
  
  const router = useRouter()
  const {user} = router.query;
  const [dataLoaded,setDataLoaded] = useState(false)
  const [items,setItems]= useState(['']);
  useEffect(() => {
    if(!dataLoaded){
      fetch('/api/itemList/filmeList')
      .then((response)=>response.json())
      .then((data)=>{
        setItems(data)
      } )
  
      setDataLoaded(true) 

    }
  }, [dataLoaded]);


  const listItems = items.map((item)=>
    <ItemTopic 
      key={item._id}
      typeItem={item.typeItem}
      image={item.image}
      title={item.title}
      link={`/profile/${user}/items/${item.typeItem}/${item.title}`}
    />  
  )
  
  return (

    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>Filmes registrados</span>
        </div>
        <div className={styles.buttons}>
          <NavButton text='Livros' link={`/profile/${user}/items/livro`}/>
          <NavButton text='Filmes' link={`/profile/${user}/items/filme`}/>
          <NavButton text='Séries' link={`/profile/${user}/items/serie`}/>
        </div>
        
        <div className={styles.itemList}>
         <ul>
           {listItems}
         </ul>
        </div>
      </div>
    </div>
  )
}