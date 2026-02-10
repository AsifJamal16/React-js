import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hide from './HideAndShowPass/Hide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hide></Hide>
    </>
  )
}

export default App
