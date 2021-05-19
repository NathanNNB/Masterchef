import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
// import { Container } from './styles';

export default function SeriePage() {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const item = router.query.itempage;
  console.log(item)
  const [serieData, setSerieData] = useState('')

  useEffect(() => {
    if(!isLoading){
      fetch('/api/itemData/'+ item)
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data)
        setSerieData(data)
      })

      setIsLoading(true)

    }
  }, [isLoading]);
  const title = serieData.title
  const imageURL = serieData.image
  const description = serieData.description
  const typeItem = serieData.typeItem
  const writer = serieData.writer
  const launchYear = serieData.launchYear
  const seasons = serieData.seasons
  const genre = serieData.genre
  
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
       
        <span> {typeItem}</span>
        <span> {seasons} temporadas</span>
        <span> {genre}</span>
        
      </div>
      <div className={styles.sectionDescription}>
        
        
        <span> {writer}</span>
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