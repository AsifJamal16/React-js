import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharCount from './CharCounter/CountChar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CharCount></CharCount>
    </>
  )
}

export default App
