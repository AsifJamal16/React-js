import React, { useEffect, useRef, useState } from 'react'

const Useref2 = () => {
  const[count,setCount]=useState(0);
  const prevCount=useRef();
  useEffect(()=>{
    prevCount.current=count;
  },[count])
  return (
    <>
    <h2>Count:{count}</h2>
    <h2>Prev Count:{prevCount.current}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default Useref2
