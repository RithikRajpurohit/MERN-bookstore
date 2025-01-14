import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput,Textarea } from "flowbite-react";
const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science",
    "Mathematical",
    "General",
    "Horror",
    

  ]
  const [selectoedBookCategory,setselectoedBookCategory] = useState(bookCategories[0])
  const handleChangeSelectedValue = (event)=>
  { 
      
      setselectoedBookCategory(event.target.value);
  }
  // handle book submission 
  const handleBookSubmit =(event)=>
  {
    event.preventDefault();
    const  form  = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
   
    console.log(bookTitle)
    const bookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }
      console.log(bookObj);
      fetch("http://localhost:5000/upload-book",
        {
          method:"POST",
          headers:{
            "Content-type":"application/json",
          },
          body: JSON.stringify(bookObj)
        }
        
      ).then(res => res.json()).then(data =>
      {
        alert("Book uploaded successfully")
        form.reset();
      }
      )
  }

  // send the data to the database 

 
  
  return (
    <div className='px-4 my-12 '>
      <h2 className='mb-8 text-3xl font-bold '>Upload A book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div className='flex gap-8 '>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name " required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name " required />
      </div>
 

      </div>
      <div className='flex gap-8 '>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="mageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectoedBookCategory} onChange={handleChangeSelectedValue } >
         {
          bookCategories.map((option)=> <option key={option} value={option}>{option}</option>)
         }
        </Select>

        
      </div>
 

      </div>
      {/*Book Describtiomn   */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="write your book Description" className='w-full' required rows={6} />      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" type="text" name='bookPDFURL'  placeholder="book pdf url" required />
      </div>
      
      <Button type="submit" className='mt-5'>Upload Book</Button>

    </form>
    </div>
  )
}

export default UploadBook
