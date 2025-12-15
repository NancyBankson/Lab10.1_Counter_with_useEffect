import { useState } from 'react'
import './App.css'
import { Counter } from './components/AdvanceCounter'

function App() {
  const [count, setCount] = useState(0);

  let step = 1;
  let countHistory = [2, 4];

  return (
    <>
      <Counter 
        count={count}
        step={step}
        countHistory={countHistory}
      />
    </>
  )
}

export default App
