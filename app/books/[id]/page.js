"use client"
import { useParams } from "next/navigation" 
import { useShelf } from "@/app/context/ShelfContext"
export default function BookDetailsPage(){
    const params = useParams()
    const {shelf, addToShelf, removeFromShelf}= useShelf();
    const isAdded=shelf.some((b)=>b.id===params.id);
    return(
        <div>
            {isAdded ? (
                <button className="cursor-pointer" onClick={()=>removeFromShelf(params.id)}>X</button>)
            : (<button className="cursor-pointer" onClick={()=>addToShelf(book)}>+</button>)}
        <div>
            <h1>Book details</h1>
            <p>BookID:{params.id}</p>
        </div>
    </div>
    )
}