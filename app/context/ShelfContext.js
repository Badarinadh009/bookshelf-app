const { createContext, useState, useEffect, useContext } = require("react");

const ShelfContext=createContext
export const ShelfProvider= ({children})=>{
    const [shelf, setShelf]=useState([])
    useEffect(()=>{
        const stored=localStorage.getItem('shelf')
        if(stored) setShelf(JSON.parse(stored))

    },[])
    useEffect(()=>{
        localStorage.setItem('shelf', JSON.stringify(shelf))

    },[shelf])
    const addToShelf=(book)=>{
        setShelf((prev)=>[...prev, book])
    }
    const removeFromShelf=(id)=>{
        setShelf((prev)=>prev.filter((b)=>b.id!==id))

    }
    return (
    <ShelfContext.Provider value={{ shelf, addToShelf, removeFromShelf }}>
      {children}
    </ShelfContext.Provider>
  )
}
export const useShelf=()=> useContext(ShelfContext)