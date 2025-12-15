import { useState, useEffect } from 'react'
import './App.css'
import { Counter } from './components/AdvanceCounter'

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [saveMessage, setSaveMessage] = useState("Changes saved.")
  const [history, setHistory] = useState(() => {
    const storedHistory = localStorage.getItem("history"); // Retrieve the string
    return storedHistory ? JSON.parse(storedHistory) : []; // Parse or return an empty array
  });

  useEffect(() => {
    setHistory(prevHistory => [...prevHistory, count]);
    setSaveMessage("Saving to local storage...");
    const timer = setTimeout(() => {
        try {
          localStorage.setItem("history", JSON.stringify(history));
        } catch (error) {
          console.error("Could not save tol local storage", error);
        } finally {
          setSaveMessage("Changes saved.");
        }      
    }, 500);
    return () => clearTimeout(timer);
  
  }, [count]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        setCount(prevCount => prevCount + step);
      }
      if (event.key === "ArrowDown") {
        setCount(prevCount => prevCount - step);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [step]);

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
        saveMessage={saveMessage}
        history={history}
      />
    </>
  )
}

export default App
