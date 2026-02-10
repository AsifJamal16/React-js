import React, { useState } from 'react'
import './hide.css'
const Hide = () => {
  const[inputType,setinputType]=useState('');
  function Showhandler(){
    setinputType('text')
  }
  function HideHandler(){
    setinputType('password')
  }
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Toggle Passwordd</h1>
        </div>
        <div className="inputsection">
          <input type={inputType} />
        </div>
        <div className="buttons">
          <button onClick={Showhandler}>Show</button>
          <button onClick={HideHandler}>Hide</button>
        </div>
      </div>
    </>
  )
}

export default Hide
