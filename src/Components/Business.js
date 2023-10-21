import React, { useState, useEffect } from "react";
import Newsitems from "./NewsComponents";
import Loading from "./Loading";


export default function BusinessNews(props){
    const [articless, setArticles] = useState([]);
    let [loading, setLoading] = useState(false)
    let [page, setPage] = useState(1)

    useEffect(() => {
        async function fetData(){
            try{
                let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e1044516e091486892a3b049236c1a4c&page=${page}&pageSize=${props.pageSize}`
                setLoading(true)
                let data = await fetch(url)
                let parsedata = await data.json()
                console.log(parsedata)
                setArticles(parsedata.articles)
                setLoading(false)
            }catch{
                console.log("Error Fatching")
            }
        }
        fetData()
    }, [page]);
    const prevNextBtn=()=>{
        console.log("prev")
    }
    const nextNextBtn=()=>{
        setPage(page+1);
        console.log(page)
    }
    return(
        <>
            <div className="container my-4">
                <h2 className="mb-3">Business News - india </h2>
                {loading === true && <Loading/>}
                <div className="row gy-4">
                    {loading === false && articless.map((article, index)=>(
                        <div className="col-md-4 col-sm-6 col-12">
                            <Newsitems key={index} title={article.title?article.title.slice(0,40): "No Title Available"} desc={article.description?article.description.slice(0,120): "No Description"} imgUrl={article.urlToImage} url={article.url} autor={article.author} date={article.publishedAt}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <button onClick={prevNextBtn} disabled={page<=1} className="btn btn-dark">&larr; Prev</button>
                <button onClick={nextNextBtn} className="btn btn-dark">Next &rarr;</button>
            </div>
        </>
    )
}
