export interface CounterProps {
    count: number;
    onChange: (newStep: number) => void;
    onDecrement: (decrementClick: boolean) => void;
    onIncrement: (incrementClick: boolean) => void;
    countHistory: number[];
}