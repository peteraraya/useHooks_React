import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button onClick={() => increment(2)} className="btn btn-primary mr-2">+</button>
            <button onClick={() => decrement(2)} className="btn btn-danger ">-</button>
            <hr />
            <button onClick={reset} className="btn btn-secondary ">Reset</button>
        </>
    )
}

export default CounterWithCustomHook
