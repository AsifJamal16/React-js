import { useState } from "react";
import "./ToggleBody.css";
function TogglePage(){
    const [isWhite,setiswhite]=useState(true);
    function togglehandler(){
        let div1=document.querySelector('body');
        div1.classList.toggle('black');
        div1.classList.toggle('white');
        setiswhite(!isWhite);
    }
    return(
        <>
       <div className="togglediv">
         <button className="togglebutton" onClick={togglehandler}>Toggle</button>
       </div>
        </>
    )
}
export default TogglePage;