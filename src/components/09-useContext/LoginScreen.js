import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // obtener la referencia al contex
    // extraer el user de ese context 
    const { setUser } = useContext(UserContext);
    /*
        {
            id:123
            name:'Peter'
        }

    */
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ ()=> setUser({
                    id:123,
                    name:'Peter'
                })}
            >
                Login
            </button>
        </div>
    )
}
