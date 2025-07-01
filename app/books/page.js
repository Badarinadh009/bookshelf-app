"use client"
import { useState } from "react"
import { useShelf } from "../context/ShelfContext"
export default function BooksPage(){
    const [shelf, removeFromShelf]= useShelf()
    const [searchTerm, setSearchTerm]=useState('')
    const filteredSearch=shelf.filter((b)=>(
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) || b.author.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    return(
        <div>
            <input type='text' value={value} placeholder="Enter the title or Author name" className=" border-black-2"/>
            {filteredSearch.length ===0 ?
            <p>No Books</p>
            : 
            <ul>
                {filteredSearch.map((b)=>{
                    <li key={b.id}><img src={book.img} alt={book.title}/>{b.titel}{b.author}</li>

                })}
            </ul> 
            }
        </div>

    )
}