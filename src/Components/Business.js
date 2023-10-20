import React, { useState, useEffect } from "react";
import Newsitems from "./NewsComponents";


export default function BusinessNews(){
    const [articless, setArticles] = useState([]);

    useEffect(() => {
        async function fetData(){
            try{
                let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e1044516e091486892a3b049236c1a4c&page=1"
                let data = await fetch(url)
                let parsedata = await data.json()
                console.log(parsedata)
                setArticles(parsedata.articles)
            }catch{
                console.log("Error Fatching")
            }
        }
        fetData()
    });
    return(
        <>
            <div className="container my-4">
                <h2 className="mb-3">Business News - india </h2>
                <div className="row gy-4">
                    {articless.map((article, index)=>(
                        <div className="col-md-4 col-sm-6 col-12">
                            <Newsitems key={index} title={article.title?article.title.slice(0,40): "No Title Available"} desc={article.description?article.description.slice(0,120): "No Description"} imgUrl={article.urlToImage} url={article.url}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
