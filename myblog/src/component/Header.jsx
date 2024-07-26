import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex flex-wrap items-center justify-between lg:px-48 h-[10vh] border-b border-gray-600 text-white px-3'>
        <div >My Blog</div>
        <div>
            <ul className='flex'>
                <li className=' hover:border cursor-pointer px-5 py-2 text-sm rounded-lg'><Link to='/'>Home</Link></li>
                <li className='hover:border cursor-pointer px-5 py-2 text-sm rounded-lg'><Link to='addblog'>Add New Blog</Link></li>
            </ul>
        </div>
    </div>
  )
}
