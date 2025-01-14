import React, { useEffect, useState } from 'react'
import BookCard from '../Components/BookCard';

const OtherBook = () => {

    const[books,setBooks] = useState([]);

    useEffect(()=>
    {
        fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data))
    },[])

  return (
    <div>
      <BookCard books={books} headLine = "Other Books"/>
    </div>
  )
  
}

export default OtherBook
