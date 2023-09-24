import React, { useState } from 'react';
import ParentComp from './components/props/parentcomp'; 
import Propss from './components/props/Propss';// Import the other component
import Hooks from './components/hooks/hooks';
import Context from './components/contextApi/context';

function App() {
  const [data, setData] = useState(0);

  function updateData() {
    setData(data + 1);
  }

  return (
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>

      {/* Include the imported component here */}

      <ParentComp />
      <Hooks/>
      <Context/>
     

      <></>
    </div>
  );
}

export default App;
