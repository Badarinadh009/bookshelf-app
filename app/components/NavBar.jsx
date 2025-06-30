import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='bg-black text-white h-[100px] p-4'>
      <h1 className='text-center font-bold text-3xl'>Book Shelf</h1>
      <ul className='flex justify-center gap-4'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/books">Books</Link></li>
        <li><Link href="/add-book">Add Books</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/shelf">Shelf</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
