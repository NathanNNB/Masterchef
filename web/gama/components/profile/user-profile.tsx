import React from 'react'
import styles from './user-profile.module.scss'
import{FaUserFriends} from 'react-icons/fa';
import Link from 'next/link';
import Review from '../review';

interface profileProps{
  userName: string;
  userUF: string;
  userImage: string;
  userDescription: string;

}
const Profile: React.FC<profileProps> = (
  {userName, userUF, userImage, userDescription}: profileProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundUser}>
        <section className={styles.sectionItems}>
          
        <div>
          <img className={styles.userImage} src={userImage} width='200' height='200'></img>
        </div>
        <span> {userName}</span>
        </section>
      </div>

      <div className={styles.userDescription}>
        <div className={styles.sectionItems}>
          <span className={styles.userPhrase}>
            {userDescription}      
          </span>
          <span className={styles.userUF}>
            {userUF}
          </span>
          
        </div>
        <div>
          <Link href="/profile/user">
          <a>
            <FaUserFriends className={styles.userFriendsIcon}/>
          </a>
          </Link>
        </div>
        
      </div>

      <div className={styles.reviews}>
        <Review
        authorImage="https://i.pinimg.com/originals/79/a6/f2/79a6f25706fe05e38089e08239044eb5.jpg"
        authorName="Tim Maia"
        reviewRate= {8.5}
        itemImage="https://veja.abril.com.br/wp-content/uploads/2019/09/blogib_lotr-a-sociedade-do-anel_feat.jpg?quality=70&strip=info&w=680&h=453&crop=1"
        itemTitle="O Senhor dos Anéis: A Irmandade do Anel"
        reviewText="Excellent well-made adventure film especially when compared with mediocre output 
        of current superhero movies. Grand old fashioned entertainment."
        likeNumber= {45}
        />
      </div>
    </div>
  )
}

export default Profile;