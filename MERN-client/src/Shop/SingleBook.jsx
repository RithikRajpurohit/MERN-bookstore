import React from 'react'
import { useLoaderData } from 'react-router'

const SingleBook = () => {
    const{_id}  = useLoaderData();
    
  return (
    <div>
      SingleBook:{_id}  
    </div>
  )
}

export default SingleBook
