"use client"
import { createContext, useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';


const ShelfContext=createContext()
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
        
        if (alreadyExist) return
        setShelf((prev)=>{
            const alreadyExist=shelf.some((b)=>b.id===book.id);
            if(alreadyExist){
                toast.error("Book already exist")
                return prev;
            }
            toast.success("Book added to shelf successfully")
            return [...prev, book]
            
        })
    }
    const removeFromShelf=(id)=>{
        setShelf((prev)=>prev.filter((b)=>b.id!==id))
        toast("Book removed from shelf successfully")

    }
    return (
    <ShelfContext.Provider value={{ shelf, addToShelf, removeFromShelf }}>
      {children}
    </ShelfContext.Provider>
  )
}
export const useShelf=()=> useContext(ShelfContext)