'use client'

import { Provider } from "react-redux"
import { store } from "../store"

interface GlobalProviderProps {
    children: React.ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps){
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}