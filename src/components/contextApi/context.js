import React, { createContext, useState } from "react";
import Child from "./child";


export const GlobalInfo = createContext();

function Context() {
    const [color, setColor] = useState('green');

    return (
        <GlobalInfo.Provider value={{ appColor: color }} >

            <div>
                <h1>App Components</h1>
                <Child/>
               
              
                
            </div>

        </GlobalInfo.Provider>

    );
}

export default Context;