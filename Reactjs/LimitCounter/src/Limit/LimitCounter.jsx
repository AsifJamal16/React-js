import React, { useState } from 'react'
import './limitcounter.css'
const Limit = () => {
  const [counter,setCounter]=useState(0);
  function IncreaseHandler(){
    setCounter(counter+1);
  }
  function DecreaseHandler(){
    setCounter(counter-1);
  }
  return (
    <>
    <div className="container">
      <div className="heading">
        <h1>Limit Counter</h1>
      </div>
      <div className="countPara">
        <p>{counter}</p>
      </div>
      <div className="buttons">
        <button onClick={IncreaseHandler}  disabled={counter === 10}>Increase</button>
        <button onClick={DecreaseHandler} disabled={counter===0}>Decrease</button>
      </div>
    </div>
    </>
  )
}

export default Limit

