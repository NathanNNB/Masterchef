import HomeButton from '../components/ui/button/HomeButton';
import Image from 'next/image';
import Content from '../components/ui/content'
import Footer from '../components/layout/footer'
import HomeHeader from '../components/layout/homeHeader';
import Quote from '../components/quote'


export default function Home() {
  return (
    <div>
    <HomeHeader></HomeHeader>
    <Content>
      
      <h2>Converse, avalie, e dê favoritos.</h2>
        <Image
          width={500}
          height={500}
          src="/img/Reading.svg"
          alt="oi"
          />

      
      <section>
        <HomeButton link="/signup" text="Criar conta gratuita"/>
      </section>
      <Quote>
        “O mundo da realidade tem seus limites,
        o mundo da imaginação não "  
        <br></br>
        
      </Quote>
      <Quote>
          -JJ Rousseau
      </Quote>
      
    </Content>
    <Footer/>
    </div>
    )
}
