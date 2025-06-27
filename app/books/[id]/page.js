"use client"
import { useParams } from "next/navigation" 
export default function BookDetailsPage(){
    const params = useParams()
    return(
        <div>
            <h1>Book details</h1>
            <p>BookID:{params.id}</p>
        </div>
    )
}