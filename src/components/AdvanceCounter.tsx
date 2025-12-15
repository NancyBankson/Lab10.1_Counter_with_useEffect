import type { CounterProps } from "../types"

export function Counter({ count, step, countHistory}: CounterProps) {

    return (
        <>
            <p>Counter</p>
            <h1>Current Count: {count}</h1>
            <button>Decrement</button>
            <button>Increment</button>
            <button>Reset</button>
            <p>Step Value: {step}</p>
            <p>Changes saved.</p>
            <p>Count History:</p>
            <p>{countHistory}</p>
            <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
        </>
    )
}