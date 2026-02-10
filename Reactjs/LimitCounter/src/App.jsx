import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Limit from './Limit/LimitCounter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Limit></Limit>
    </>
  )
}

export default App
