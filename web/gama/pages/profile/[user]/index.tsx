import React, { useEffect, useState } from 'react';
import UserProfile from '../../../components/profile/user-profile';
import Footer from '../../../components/layout/footer';
import UserHeader from '../../../components/layout/userHeader';
import {getSession} from 'next-auth/client'
import {useRouter} from 'next/router'

type userData={
  email: string,
  username: string,
  uf: string,
}
const Profile: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [usersData, setUsersData ] = useState([])
  const[emailProfile, setEmailProfile] = useState('')
  const[usernameProfile, setUsernameProfile] = useState('')
  const[ufProfile, setUfProfile] = useState('')

  


  const router = useRouter();
  const userEmail = router.query.user;
  useEffect(() => {
    getSession().then(session => {
      if(!session){
        router.push('/login');
      }else{
        setIsLoading(false); 

      }
    })
  },[]);

  useEffect(() => {
    if(!isLoading){
      fetch('/api/profile/'+ userEmail,)
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data)
        console.log(typeof(data.email))
        setEmailProfile(data.email)
        setUfProfile(data.uf)
        setUsernameProfile(data.username)
      })
    }
  }, [isLoading]);



  if(isLoading){
    return(
      <h1>
        Loading...
      </h1>
    )
  }


  return (
    <div>
      <UserHeader/>
      <UserProfile
      userName={usernameProfile}
      userUF={ufProfile}
      userDescription='Descobridor dos sete mares e futuro rei dos piratas'
      userImage="https://i.pinimg.com/originals/79/a6/f2/79a6f25706fe05e38089e08239044eb5.jpg"
      />
      <Footer/>
    </div>
  );
}

export default Profile;