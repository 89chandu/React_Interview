import React, { useState } from 'react';
import ParentComp from './props/parentcomp'; 
import Propss from './props/Propss';// Import the other component

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
     

      <></>
    </div>
  );
}

export default App;
