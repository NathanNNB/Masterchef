import React from 'react';
import styles from './styles.module.scss'
import {FaHeart} from 'react-icons/fa';

interface propsReview{
  authorImage: string;
  authorName: string;
  reviewRate: number;
  itemTitle: string;
  itemImage: string;
  reviewText: string;
  likeNumber: number;
}
const Review: React.FC<propsReview> = (
  {authorImage, authorName, reviewRate,itemImage, itemTitle, reviewText, likeNumber}: propsReview
) => {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <section className={styles.authorSection}>
          <div >
            <img className={styles.authorImage} src={authorImage} width='200' height='200'></img>
          </div>
          <span className={styles.authorName}> {authorName}</span>
        </section>
        <span className={styles.reviewRate}>
          Nota: {reviewRate}
        </span>
      </div>

      <span className={styles.reviewLine}></span>

      <div className={styles.reviewBody}>

        <section className={styles.imageSection}>
          <img className={styles.itemImage} src={itemImage} width='200' height='200'></img>
        </section>

        <section className={styles.reviewTextSection}>
          <span className={styles.itemTitle}>
            {itemTitle}
          </span>
          <p className={styles.reviewText}>
            {reviewText}
          </p>
        </section>

      </div>

      <span  className={styles.reviewLine} ></span>

      <div className={styles.reviewFooter}>
        <div className={styles.likeSection}>
          <FaHeart className={styles.like}/>
          <span className={styles.likeNumbers}>
            {likeNumber}
          </span>
        </div>
          <span className={styles.comments}>
            Comentários
          </span>
      </div>
    </div>
  );
}

export default Review;