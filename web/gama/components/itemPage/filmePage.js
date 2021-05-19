import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export default function FilmePage () {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const item = router.query.itempage;
  console.log(item)
  const [filmeData, setFilmeData] = useState('')

  useEffect(() => {
    if(!isLoading){
      fetch('/api/itemData/'+ item)
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data)
        setFilmeData(data)
      })

      setIsLoading(true)

    }
  }, [isLoading]);
  const title = filmeData.title
  const imageURL = filmeData.image
  const description = filmeData.description
  const typeItem = filmeData.typeItem
  const director = filmeData.director
  const launchYear = filmeData.launchYear
  const duration = filmeData.duration
  const genre = filmeData.genre
  
  console.log(title)

  
  return (
    <div className={styles.container}>
      <div className={styles.backgroundItem}>
        <section className={styles.sectionInfo}>
          
        <div>
          <img className={styles.itemImage} src={imageURL} width='200' height='200'></img>
        </div>
        <span> {title} </span>
        </section>
      </div>

      <div className={styles.ItemDescription}>
        <div className={styles.sectionDescription}>
          
          <span> {typeItem}</span>
          <span> {duration}</span>
          <span> {genre}</span>
          
        </div>
        <div className={styles.sectionDescription}>
          
          
          <span> {director}</span>
          <span> Lançamento: {launchYear}</span>
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
