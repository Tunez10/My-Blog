import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPage() {
    let { id } = useParams();
    id = parseInt(id)
    const [news, setNews] = useState({

        imgUrl :'',
        title : '',
        description : '',
        content : '',
        author : '',
    })

    const getAllnews = async () => {
        var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-07-25&' +
          'sortBy=popularity&' +
          'apiKey=72ce44147cad4f2b87b891fd4fe41059';

        var req = new Request(url)

        try {
            const response = await fetch(req);
            const apiArticles = await response.json();
            const newData = apiArticles.articles.splice(1, 21)

            let newList = [];

            newData.forEach((item, index)=>{
                if(id === index) {

                    const data = {
                        imgUrl : item.urlToImage,
                        title : item.title,
                        description : item.description,
                        content : item.content,
                        author : item.author,
                        
                    }

                    setNews(data)
                    // console.log(data, '\n\nThe data');
                    throw new Error('Break');

                }  

            })

            setNews(newList)
            // console.log('newsset')


        } catch (error) {
            console.error('error fetching data:', error)
        } 
    }

    useEffect(()=>{
        getAllnews()
    }, [])
   
  return (
    <div className='w-full px-48 py-10'>
        <div className='hover:border border-[white] cursor-pointer rounded-2xl bg-[#ffffff2f] overflow-hidden shadow-lg h-[70vh] w-[70%]'>
            <img src={news.imgUrl} className='h-[30vh] w-full' alt="" />
            <div className='px-3 py-3 pb-3 text-white flex flex-col justify-between h-[40vh]'>
                <h1 className='text-2xl font-bold'>{news.title}</h1>
                <p>{news.content}<small className='text-blue-300'></small></p>
                <p>{news.description}</p>
                <hr />
                <div className='flex justify-between items-center'>
                    <div>
                        <span>{news.author}</span>
                    </div>
                    <div>
                        <i className='pi pi-trash text-xs p-3 bg-[#ff6a6a] rounded-full cursor-pointer hover:animate-pulse mr-3'></i>
                        <i className='pi pi-pencil text-xs p-3 bg-[#6d6dff] rounded-full cursor-pointer hover:animate-pulse '></i>

                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
