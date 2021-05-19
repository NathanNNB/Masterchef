import React from 'react';
import Footer from '../../../../../../components/layout/footer';
import UserHeader from '../../../../../../components/layout/userHeader';
// import { Container } from './styles';
import FilmePage from '../../../../../../components/itemPage/filmePage'
import LivroPage from '../../../../../../components/itemPage/livroPage'
import SeriePage from '../../../../../../components/itemPage/seriePage'
import {useRouter} from 'next/router'

const ItemPage: React.FC = () => {
  const router = useRouter();
  const typeItemPage = router.query.typeitem;


  let typeItemList;
  if (typeItemPage == 'Livro'){
    typeItemList = 'Livro'
  }
  if (typeItemPage == 'livro'){
    typeItemList = 'Livro'
  }
  if (typeItemPage == 'Filme'){
    typeItemList = 'Filme'
  }
  if (typeItemPage == 'filme'){
    typeItemList = 'Filme'
  }
  if (typeItemPage == 'Serie'){
    typeItemList = 'Serie'
  }
  if (typeItemPage == 'serie'){
    typeItemList = 'Serie'
  }
  return (
    <div>
      <UserHeader/>
      {
        typeItemList=='Livro' &&
        <LivroPage/>
      }
      {
        typeItemList=='Filme' &&
        <FilmePage/>
      }
      {
        typeItemList=='Serie' &&
        <SeriePage/>
      }
      <Footer/>
    </div>
  );
}

export default ItemPage;