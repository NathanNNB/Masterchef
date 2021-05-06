import React, { useEffect, useState } from 'react';
import UserProfile from '../../components/profile/user-profile';
import Footer from '../../components/layout/footer';
import UserHeader from '../../components/layout/userHeader';
import {getSession} from 'next-auth/client'
import {useRouter} from 'next/router'
const Profile: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
    getSession().then(session => {
      if(!session){
        router.push('/login');
      }else{
        setIsLoading(false); 

      }
    })
  },[]);
  
  if(isLoading){
    return <h1>Loading...</h1>
  } 
  return (
    <div>
      <UserHeader/>
      <UserProfile
      userName='Tim Maia'
      userUF='São Paulo'
      userDescription='Descobridor dos sete mares e futuro rei dos piratas'
      userImage="https://i.pinimg.com/originals/79/a6/f2/79a6f25706fe05e38089e08239044eb5.jpg"
      />
      <Footer/>
    </div>
  );
}

export default Profile;