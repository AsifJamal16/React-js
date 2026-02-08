import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartCounter from './Count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StartCounter></StartCounter>
    </>
  )
}

export default App
