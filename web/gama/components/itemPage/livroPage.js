import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export default function LivroPage() {
  
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const item = router.query.itempage;
  console.log(item)
  const [livroData, setLivroData] = useState('')

  useEffect(() => {
    if(!isLoading){
      fetch('/api/itemData/'+ item)
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data)
        setLivroData(data)
      })

      setIsLoading(true)

    }
  }, [isLoading]);
  const title = livroData.title
  const imageURL = livroData.image
  const description = livroData.description
  const typeItem = livroData.typeItem
  const author = livroData.author
  const genre = livroData.genre
  
  console.log(title)
  
  
  
  return (
    <div className={styles.container}>
      <div className={styles.backgroundItem}>
        <section className={styles.sectionInfo}>
          
        <div>
          <img className={styles.itemImage} src={imageURL} width='200' height='200'></img>
        </div>
        <span> {title}</span>
        </section>
      </div>

      <div className={styles.ItemDescription}>
        <div className={styles.sectionDescription}>

          <div className={styles.divBook}> {typeItem}</div>
          <div className={styles.divBook} > {author}</div>
          <div className={styles.divBook} > {genre}</div>
          
        </div>
        
       
        <div className={styles.sectionDescription}>
          
          <div className={styles.text}>
          {description}
          </div>
          
        </div>
        
      </div>

      <div className={styles.reviews}>
       
      </div>
    </div>
  );
}
