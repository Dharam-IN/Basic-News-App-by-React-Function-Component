import React, { useState, useEffect } from "react";
import Newsitems from "./NewsComponents";
import Loading from "./Loading";

export default function News(props){
    const [articles, setArticles] = useState([]);
    let [newspage, pageUpdate] = useState(1);
    let [totalPages, setTotalPage] = useState(0)
    let spiners = true
    useEffect(() => {
        async function fetchData() {
          try {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e1044516e091486892a3b049236c1a4c&page=${newspage}&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            // {spiners: true}
            let parsedata = await data.json();
            console.log(parsedata);
            setArticles(parsedata.articles);
            // {spiners: false}
            setTotalPage(Math.ceil(parsedata.totalResults/props.pageSize))
          } catch (error) {
            console.error("Error fetching news data:", error);
          }
        }
        fetchData();
      }, [newspage]);

      const PrevNews = ()=>{
        pageUpdate(newspage-1)
      }
      const NextNews = ()=>{
        if (newspage + 1 <= totalPages) { // Check if there are more pages available
          pageUpdate(newspage + 1);
        } else {
          console.log("Next page is not available");
        }
      }
    return(
        <>
            <div className="container my-5">
              <h2>News Daily - Cricket, Business, Technology, Stock Market, Money, Tranding Topics etc.</h2>
              {spiners === true && <Loading/>}
              <div className="row mt-4 gy-4">
                      {articles.map((article, index) => (
                        <div className="col-md-4 col-sm-6 col-12">
                            <Newsitems key={index} title={article.title ? article.title.slice(0, 40): 'No title'} desc={article.description ? article.description.slice(0, 120) : 'No Description'} imgUrl={article.urlToImage} url={article.url} />
                        </div>
                      ))}
              </div>
            </div>
            <div className="container d-flex justify-content-between mb-5">
              <button disabled={newspage<=1} className="btn btn-dark" onClick={PrevNews}>&larr; Preview</button>
              <button disabled={newspage >= totalPages} className="btn btn-dark" onClick={NextNews}>Next &rarr;</button>
            </div>
        </>
    )
}
