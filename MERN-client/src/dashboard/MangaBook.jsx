import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import {Link} from "react-router"
const MangaBook = () => {
  const [allBooks,setAllBooks] = useState([]);
  useEffect(()=>
  { 
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data))

  },[])

  const handleDelete = (id)=>
  {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`,
      {
        method:"DELETE",

      }
    ).then(res => res.json()).then(data => {alert("Book is deleted successfully")
      // setAllBooks()
    }
    
  )
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold '>Manage Your Book</h2>
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span >Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book,index) => <Table.Body className="divide-y" key={book._id}> 
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>Rs 800</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium mr-5  text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </Link>
              <button onClick={()=> handleDelete(book._id)} className='px-4 py-1 bg-red-500 font-semibold rounded-sm border hover:bg-red-400 text-black'>Delete</button>
            </Table.Cell>
          </Table.Row></Table.Body>)
        }
        
      </Table>
      
    </div>
  )
}

export default MangaBook
