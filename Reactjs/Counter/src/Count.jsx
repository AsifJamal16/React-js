import { useState } from "react"

function StartCounter(){
    const [Count,setCount]=useState(0);
    function countHandler(){
        setCount(Count+1);
    }
    return(
        <>
        <h1>Count:{Count}</h1>
        <button onClick={countHandler}>Counter</button>
        </>
    )
}
export default StartCounter