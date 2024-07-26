import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function EditBlog() {

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
          'from=2024-06-22&' +
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
    <div className='py-10 text-white'>
      <h1 className='text-center text-3xl'>Edit Blog Page</h1>

      <div className='m-auto mt-10 flex flex-col gap-3 max-w-[400px] text-black'>

        <div>
          <p className='text-gray-500 text-xl'> Author</p>
          <input className='w-full mt-3 rounded p-3' value={news.author} type="text" name="" id="" placeholder='Enter author name'/>
        </div>

        <div>
          <p className='text-gray-500 text-xl'> Title</p>
          <input className='w-full mt-3 rounded p-3 whitespace-pre-wrap' value={news.title} type="text" name="" id="" placeholder='Enter title here' />
        </div>

        <div>
          <p className='text-gray-500 text-xl'> Content</p>
          <textarea className='w-full mt-3 rounded p-5 text-[grey]' value={news.description} name="" id="" placeholder='Enter author name'> Enter full Content</textarea>
        </div>

        <div>
          <img className='mt-3' src={news.imgUrl} alt="" />
        </div>

        <div>
          <input className='mt-10 w-full rounded-lg transition duration-75 cursor-pointer hover:bg-[blue] py-3 border text-white' type="submit" value="submit" />
        </div>
      </div>

    </div>
  )
}
