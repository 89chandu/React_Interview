import React, {useState} from "react"; 


function Hooks() {

            // const[data,setData] = useState("chandu");
            const[surname,setSurname] = useState("don't know")

            

    return(

        <div>
            <h1>Sanket</h1>
            <h1>{surname}</h1>
            <button onClick={()=> setSurname("Rahangdale")}>Update Surname</button>
        </div>



    );
}

export default Hooks;