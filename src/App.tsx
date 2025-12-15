import { useState, useEffect } from 'react'
import './App.css'
import { Counter } from './components/AdvanceCounter'

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    setHistory(prevHistory => [...prevHistory, count]);
    localStorage.setItem("history", JSON.stringify(history));
  }, [count]);

  function onChange(newStep: number) {
    setStep(newStep);
  }

  function onDecrement(decrementClick: boolean) {
    if (decrementClick) setCount(count - step);
    decrementClick = false;
  }

  function onIncrement(incrementClick: boolean) {
    if (incrementClick) setCount(count + step);
    incrementClick = false;
  }

  function onReset(resetClick: boolean) {
    if (resetClick) {
      setCount(0);
      setHistory([]);
      localStorage.setItem("history", JSON.stringify([]));
    }
    resetClick = false;
  }

  return (
    <>
      <Counter 
        count={count}
        onChange={onChange}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        onReset={onReset}
        history={history}
      />
    </>
  )
}

export default App
