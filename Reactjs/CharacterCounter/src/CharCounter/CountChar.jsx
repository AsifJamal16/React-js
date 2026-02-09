import React from 'react'
import './charcount.css'
import { useState } from 'react'
const CharCount = () => {
  const[totalchar,settotalchar]=useState(0);
  let textsection=document.querySelector('textarea');
  function inputhandler(e){
  let totalchar = e.target.value.replace(/\s/g, '').length;
  settotalchar(totalchar);
}
  return (
    <>
      <div className="cont">
        <div className="inputtextarea">
          <textarea name="" id="" placeholder='enter message' onChange={inputhandler}></textarea>
        </div>
        <div className="countchar">
          <p>Totol Character:{totalchar}</p>
        </div>
      </div>
    </>
  )
}

export default CharCount
