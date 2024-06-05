import { useState } from 'react'
import { Header } from './components/Header'
import { Cardbox } from './components/Cardbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Cardbox />
    </>
  )
}

export default App
