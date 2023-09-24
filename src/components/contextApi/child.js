import React,{useContext} from "react";
import { GlobalInfo } from "./context";

function Child() {

    const {appColor} = useContext(GlobalInfo);
    return(
        <div>
            <h1 style={{color:appColor}}>Child component</h1>
        </div>

    );
}

export default Child;