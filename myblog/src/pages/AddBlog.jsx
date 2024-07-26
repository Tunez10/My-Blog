import React from 'react'



export default function AddBlog() {
 
  return (

    <div className='py-10 text-white'>
      <h1 className='text-center text-3xl'>Add Blog Page</h1>

      <div className='m-auto mt-10 flex flex-col gap-3 max-w-[400px] text-black'>

        <div>
          <p className='text-gray-500 text-xl'> Author</p>
          <input className='w-full mt-3 rounded p-3  ' type="text" name="" id="" placeholder='Enter author name' />
        </div>

        <div>
          <p className='text-gray-500 text-xl'> Title</p>
          <input className='w-full mt-3 rounded p-3 ' type="text" name="" id="" placeholder='Enter author name' />
        </div>

        <div>
          <p className='text-gray-500 text-xl'> Content</p>
          <textarea className='w-full mt-3 rounded p-3 text-[grey]' name="" id="" placeholder='Enter author name'> Enter full Content</textarea>
        </div>

        <div>
          <p className='text-gray-500 text-xl'>Image</p>
          <input className='border w-full p-20 mt-3 rounded-lg' type="image" src='' alt="" />
        </div>

        <div>
          <input className='mt-10 w-full rounded-lg transition duration-75 cursor-pointer hover:bg-[blue] py-3 text-white border-gray-400 border' type="submit" value="submit" />
        </div>

        

      </div>

    </div>
    
   
  )
}
