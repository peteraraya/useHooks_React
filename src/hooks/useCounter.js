import { useState } from 'react';

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter  - 1 );
    }

    const reset = () => {
        setCounter(initialState);
    }

    // exportando
    return {
        counter,
        increment,
        decrement,
        reset,
    }




}




/**
 * InitialState : si no me mandan nada tendremos este valor
 * Este custom hook está extrayendo la logica de mi contador
 * El orden en la destructuraci´´on no importa
 *
*/