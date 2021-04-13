import styled from 'styled-components';
import HomeButton from '../components/ui/button/HomeButton.js';
import Image from 'next/image';
import Content from '../components/ui/content'
import Footer from '../components/layout/footer'
import DefaultHeader from '../components/layout/header/defaultHeader.js';
const Quote = styled.div`
  
  font-size: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  padding-top:20px;
  @media (max-width:990px){
    font-size: 20px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  
`
Quote.author = styled.div`
  padding-top: 10px;
  font-size: 30px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  @media (max-width:990px){
    font-size: 20px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  
`


export default function Home() {
  return (
    <div>
    <DefaultHeader/>
    <Content>
      
      <Content.h2>Converse, avalie, e dê favoritos.</Content.h2>
        <Image
          width={500}
          height={500}
          src="/img/Reading.svg"
          alt="oi"
          />

      
      <Content.section>
        <HomeButton link="/about" text="Criar conta gratuita"/>
      </Content.section>
      <Quote>
        “O mundo da realidade tem seus limites.
        O mundo da imaginação não tem"  
        <br></br>
        
      </Quote>
      <Quote.author>
          -JJ Rousseau
        </Quote.author>
      
    </Content>
    <Footer/>
    </div>
    )
}
