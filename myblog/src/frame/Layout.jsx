import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Header from '../component/Header'
import BlogPage from '../pages/BlogPage'
import AddBlog from '../pages/AddBlog'
import EditBlog from '../pages/EditBlog'

export default function Layout() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/:id/Blog' element={<BlogPage/>}/>
                <Route path='addblog' element={<AddBlog/>} />
                <Route path='/:id/Edit' element={<EditBlog/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
