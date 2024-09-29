import { createContext,useState,useEffect } from "react";
import React from 'react'
import { json } from "react-router-dom";

export const DarkContext = createContext()
function DarkContextProvider({children}) {
    const [dark, setDark] = useState(()=>{
        const storedState = localStorage.getItem('dark')
        return storedState?JSON.parse(storedState):false
    })
    useEffect(()=>{
        localStorage.setItem('dark',JSON.stringify(dark))
    },[dark])
    
    function handelDark() {
        setDark(true)
    }
    function handelLight() {
        setDark(false)
    }
    return (
        <DarkContext.Provider value={{dark,handelDark,handelLight}}>
                {children}
        </DarkContext.Provider>
    )
}

export default DarkContextProvider
