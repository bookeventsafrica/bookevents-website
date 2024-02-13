'use client'
import { createContext } from 'react';

export const AppContext = createContext({modalOpen: false});



export function Providers({ children }: any) {

    
    return (
        <AppContext.Provider value={{modalOpen: false}}>
            {children}
        </AppContext.Provider>
    );
}