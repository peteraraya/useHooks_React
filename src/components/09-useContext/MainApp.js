import React, { useState } from 'react'
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const [user, setUser] = useState({});

    return (           
        <UserContext.Provider value={ {
            // regreso un objeto que tendremos nuestro usery setUser
            user,
            setUser,
        }}>

            <AppRouter />

        </UserContext.Provider>
    )
}
