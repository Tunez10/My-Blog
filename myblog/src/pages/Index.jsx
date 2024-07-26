import React, { useEffect, useState } from 'react'
import Blog from '../component/Blog'

export default function Index() {
    const [name, setName] = useState('kola')
    const [news, setNews] = useState([])
    const [allData, setAllData] = useState([])

    const changeName = () => {
        setName('Azeez')
    }


    const getAllnews = async () => {
        var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-07-25&' +
          'sortBy=popularity&' +
          'apiKey=72ce44147cad4f2b87b891fd4fe41059';

        var req = new Request(url);

        try {
            const response = await fetch(req);
            const apiArticles = await response.json();
            const newData = apiArticles.articles.splice(1, 21)      

            let newList = [];

            newData.forEach((item, index)=>{
                // console.log(newData)

                const data = {
                    imgUrl : item.urlToImage,
                    title : item.title,
                    content : item.description,
                    author : item.author,
                    
                }
                
                newList.push(data)

            })

            setNews(newList)

        } catch (error) {
            // console.error('error fetching data:',error);
        } 
    }

    useEffect(() =>{
        setName('parach')
        getAllnews()
    }, [])

    return (
        <div>
            {allData}
                <Blog BlogList={news} />
        </div>
    )



}


