import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [valueApi, setValueApi] = useState([])

    return <Context.Provider value={{ valueApi, setValueApi }}>{children}</Context.Provider>
}