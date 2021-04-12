import styled from 'styled-components';
import Button from '../components/ui/button';
import Image from 'next/image';
import Content from '../components/ui/content'
const Quote = styled.div`
  
  font-size: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  padding-top:20px;
  
  
`
Quote.author = styled.div`
  padding-top: 10px;
  font-size: 30px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  
`


export default function Home() {
  return (
    <Content>
      
      <Content.h2>Converse, avalie, e dê favoritos.</Content.h2>
      <Image
        width={500}
        height={500}
        src="/img/Reading.svg"
        alt="oi"
      />
      
      <Content.section>
        <Button link="/about" text="Criar conta gratuita" />
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
    )
}
