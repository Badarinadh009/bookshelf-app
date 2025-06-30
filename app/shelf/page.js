"use client"
import { useShelf } from "../context/ShelfContext";

export default function ShelfPage(){
    const {shelf, removeFromShelf}= useShelf();
    return(
        <div>
            <h1>This is My Book Shelf</h1>
            {shelf.length===0 ? (<p>You don't added any books</p>)
                : (
                    <ul>
                        {shelf.map((book)=>(
                            <li key={book.id}>
                                <image src={book.image} alt='book'/>
                                <h1>Title is:{book.title}</h1>
                                <p>Author is"{book.author}</p>
                                <button onClick={()=>removeFromShelf(book.id)}>X</button>
                            </li>
                        ))}
                    </ul>
                    )
            }
        </div>
    )
}