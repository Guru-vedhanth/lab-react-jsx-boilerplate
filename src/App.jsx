import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '56px',
  };

  return (
    <div>
      <h1 className='heading' style={{textAlign:"center"}}>Kalvium gallary</h1>
      <div className='gridContainerStyle'>
      <img src={elephant} alt="Image"/>
      <img src={elephant} alt="Image"/>
      <img src={elephant} alt="Image"/>
      <img src={elephant} alt="Image"/>
      </div>
    </div>
  );
}

export default App;
