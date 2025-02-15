import Card from './Card';
import jsonData from './cardValues.json';

function App() {

  const cardData = jsonData.imgsData;
  
  return(
    <>
      {cardData.map((data, index) => {
        return <Card key={index} id={data.id} url={data.url} title={data.title} text={data.text} />
      })}
    </>
  );
}

export default App
