import { useState } from "react";
import type { CounterProps } from "../types"

export function Counter({ count, onChange, onDecrement, onIncrement, countHistory}: CounterProps) {
    const [value, setValue] = useState(1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newStep: string = event.target.value;
        setValue(parseInt(newStep));
        onChange(parseInt(newStep));
    }

    const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
        const decrementClick = true;
        onDecrement(decrementClick);
    }

     const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
        const incrementClick = true;
        onIncrement(incrementClick);
    }

    return (
        <>
            <p>Counter</p>
            <h1>Current Count: {count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
            <button>Reset</button>
            <label>Step Value:</label>
            <input type="number" value={value} onChange={handleChange}></input>
            <p>Changes saved.</p>
            <p>Count History:</p>
            <p>{countHistory}</p>
            <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
        </>
    )
}