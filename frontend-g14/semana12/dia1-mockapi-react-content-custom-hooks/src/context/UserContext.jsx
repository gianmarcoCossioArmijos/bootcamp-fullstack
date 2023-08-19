import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUSer] = useState(JSON.parse(localStorage.getItem('auth')) || null);
    
    const saveUSer = (dataUSer) => {

        localStorage.setItem('auth', JSON.stringify(dataUSer));
        setUSer(dataUSer)
    }

    const cleanUSer = () => {

        localStorage.removeItem('auth');
        setUSer(null);
    }

    return (
        <UserContext.Provider value={{ user, saveUSer, cleanUSer }}>
            {children}
        </UserContext.Provider>
    )
}