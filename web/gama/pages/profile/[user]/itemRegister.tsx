import { useRouter } from 'next/router';
import React from 'react';
import ItemRegisterForm from '../../../components/itemRegisterForm';
import Footer from '../../../components/layout/footer';
import UserHeader from '../../../components/layout/userHeader';
// import { Container } from './styles';

const ItemRegister: React.FC = () => {
  const router = useRouter();
  const {user} = router.query;
  console.log(user);

  return (
    <div>
      <UserHeader/>
        <ItemRegisterForm></ItemRegisterForm>
      <Footer/>
    </div>
  );
}

export default ItemRegister;