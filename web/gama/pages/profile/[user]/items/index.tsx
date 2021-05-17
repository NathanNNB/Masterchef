import React from 'react';
import ItemList from '../../../../components/itemList';
import Footer from '../../../../components/layout/footer';
import UserHeader from '../../../../components/layout/userHeader';

// import { Container } from './styles';

const ItemsPage: React.FC = () => {
  return (

    <div>
      <UserHeader/>
      <ItemList/>
      
      <Footer/>

    </div>
  )
}

export default ItemsPage;