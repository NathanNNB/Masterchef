import Button from '../components/ui/button'

export default function Home() {
  const link = `events/`;
  return (
    <div >
      
      <h1>Hello World </h1>
      <h3>Converse, avalie, e dê favoritos.</h3>
      <img src ='./images/Reading.svg'></img>
      <Button Link={link}>
        
      </Button>
      <span>
        <h3>“O mundo da realidade tem seus limites. 
        O mundo da imaginação não tem fronteiras”</h3>
        <h3> JJ Rousseau</h3>
      </span>

    </div>
  )
}
