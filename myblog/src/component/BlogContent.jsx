import React from 'react'
import ExploreImg from '../assets/images/e1.jpg'
import PersonImg from '../assets/images/c1.png'
import { Link } from 'react-router-dom'

export default function BlogContent({news, itemIndex}) {
  return (
    <div className='w-[30%] hover:border border-[white] cursor-pointer rounded-2xl bg-[#ffffff2f] overflow-hidden'>
        <img src={news.imgUrl} className=' h-[300px] w-full' alt="" />
        <div className='px-3 py-3 pb-3 text-white flex flex-col justify-between h-[300px]'>
            <h1 className='text-2xl font-bold'>{news.title.substring(1, 50)}......</h1>
            <p>{news.content}..... 
                <Link to={`/${itemIndex}/Blog`}>
                <small className='text-blue-400 text-sm'>(read more)</small>
                </Link>  
            </p>
            <hr />
            <div className='flex justify-between items-center'>
                <div>
                    <span>{news.author}</span>
                </div>
                <div>
                    <i className='pi pi-trash text-xs p-3 bg-[#ff6a6a] rounded-full cursor-pointer hover:animate-pulse mr-3'></i>
                    <Link to={`/${itemIndex}/Edit`}>
                        <i className='pi pi-pencil text-xs p-3 bg-[#ff6a6a] rounded-full cursor-pointer hover:animate-pulse mr-3 '></i>
                    </Link>

                </div>
            </div>

        </div>
    </div>
  )
}
