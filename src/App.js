import React,{useState,use} from 'react';
import './index.css';


function App() {

  const [data,setData] = useState(0)

  function updateData() {
    setData(data+1);
  }

  return (

    <div className='App'>
      <h1>{data}</h1>
      <button onClick={updateData}>Updata Data</button>
      </div>
    
  );
}

export default App;
