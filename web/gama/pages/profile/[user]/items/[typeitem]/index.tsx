import React from 'react';
import Footer from '../../../../../components/layout/footer';
import UserHeader from '../../../../../components/layout/userHeader';
import {useRouter} from 'next/router'
import ItemListLivro from '../../../../../components/itemTypeList/livroList'
import ItemListSerie from '../../../../../components/itemTypeList/serieList'
import ItemListFilme from '../../../../../components/itemTypeList/filmeList'

const TypeItem: React.FC = () => {
  const router = useRouter();
  const typeItemPage = router.query.typeitem;
  console.log(typeItemPage);

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
        <ItemListLivro/>
      }
      {
        typeItemList=='Filme' &&
        <ItemListFilme/>
      }
      {
        typeItemList=='Serie' &&
        <ItemListSerie/>
      }
      <Footer/> 
    </div>
  );
}

export default TypeItem;