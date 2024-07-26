import React from 'react'
import BlogContent from './BlogContent'

export default function Blog({BlogList}) {
    // const BlogAmt = [1,2,3,4,5,6,7,8,9]
  return (
    <div className=' min-h-[90vh] lg:py-10 lg:px-48 gap-5 lg:flex lg:flex-wrap justify-between px-3'>
        {
            BlogList.map((item, index)=>(
                <BlogContent key={index} news={item} itemIndex={index} />


            ))
        }
      
        
        

    </div>
  )
}
