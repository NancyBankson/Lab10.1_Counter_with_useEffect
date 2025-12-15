import { useState } from 'react'
import './App.css'
import { Counter } from './components/AdvanceCounter'

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function onChange(newStep: number) {
    setStep(newStep);
  }

  function onDecrement(decrementClick: boolean) {
    if (decrementClick) setCount(count - 1);
    decrementClick = false;
  }

  function onIncrement(incrementClick: boolean) {
    if (incrementClick) setCount(count + 1);
    incrementClick = false;
  }
  let countHistory = [2, 4];

  return (
    <>
      <Counter 
        count={count}
        onChange={onChange}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        countHistory={countHistory}
      />
    </>
  )
}

export default App
