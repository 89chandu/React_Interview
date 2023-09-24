
///   ************      State in React In Functional Components ****************  /////////

// note : state is private to its components 


/* 
       what is state ? 

       State is a fundamental concept in React and is used to store and manage dynamic information within a component.

       why is state ? 

       React state is preferred over regular variables for managing data that affects the component's rendering, 
       providing reactivity,
        predictability, and a clear structure for managing component updates

*/




import React,{useState,use} from 'react';
import './index.css';


function States() {

  const [data,setData] = useState(0)

  function updateData() {
    setData(data+1);
  }

  return (

    <div className='States'>
      <h1>{data}</h1>
      <button onClick={updateData}>Updata Data</button>
      </div>
    
  );
}

export default States;
