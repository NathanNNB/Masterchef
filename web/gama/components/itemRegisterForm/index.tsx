import React, { useState, useRef } from 'react';
import styles from './styles.module.scss'
import SerieForm from './serie-form'
import LivroForm from './livro-form'
import FilmeForm from './filme-form'

const ItemRegisterForm: React.FC = () => {

  const typeItemRef = useRef(null)
  const [typeForm, setTypeForm] = useState('Default');
  
  async function itemSelectForm(event){
    event.preventDefault();
    const enteredItemType = typeItemRef.current.value;
    console.log(enteredItemType)
    
    if(enteredItemType === 'null'){
      console.log('Insira algo')
    }
    if(enteredItemType === 'Livro'){
      setTypeForm('Livro')
    }
    if(enteredItemType === 'Serie'){
      setTypeForm('Serie')
    }
    if(enteredItemType === 'Filme'){
      setTypeForm('Filme')
    }
  }

  async function submitItem(event){
    event.preventDefault();

  }
  

  return (
    <div>

        {typeForm === 'Default' &&
        <div className={styles.container}>
          <form className={styles.itemRegisterForm} onSubmit={itemSelectForm}>
            <span>Registrar novo item</span>
            <br></br>
            
              <div className={styles.control}>
                <label htmlFor='text'></label>
                <select placeholder='Tipo de Item' id='typeItem' required ref={typeItemRef}>
                  <option value="null">Selecione o tipo de item</option>
                  <option value="Livro">Livro</option>
                  <option value="Serie">Série</option>
                  <option value="Filme">Filme</option>
              
                  
                </select>
              </div>
              <div className={styles.control}>
                <button className={styles.formButton} type='submit'> Confirmar </button>
              </div>
            </form>
            </div>
        }
        
        
      {
        typeForm === 'Livro' && 
        <LivroForm/>
        }

      {
        typeForm === 'Serie' && 
        <SerieForm/>
       
         
        }

      {
        typeForm === 'Filme' && 
          <FilmeForm/>
        }
          
     



    
  </div>
  );
}

export default ItemRegisterForm;