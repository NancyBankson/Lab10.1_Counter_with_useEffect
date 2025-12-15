import { useState } from "react";
import type { CounterProps } from "../types"

export function Counter({ count, onChange, onDecrement, onIncrement, onReset, saveMessage, history }: CounterProps) {
    const [value, setValue] = useState(1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newStep: string = event.target.value;
        setValue(parseInt(newStep));
        onChange(parseInt(newStep));
    }

    const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event) {
            const decrementClick = true;
            onDecrement(decrementClick);
        }
    }

    const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event) {
            const incrementClick = true;
            onIncrement(incrementClick);
        }
    }

    const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event) {
            const resetClick = true;
            // setHistory([]);
            onReset(resetClick);
        }
    }

    return (
        <>
            <p>Counter</p>
            <h1>Current Count: {count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <label>Step Value:</label>
            <input type="number" value={value} onChange={handleChange}></input>
            <p>{saveMessage}</p>
            <p>Count History:</p>
            <ul>{history.map((count, index) => (
                <li key={index}>{count}</li>
            ))}</ul>
            <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
        </>
    )
}