import React, { useState, useEffect } from "react";
import Newsitems from "./NewsComponents";

export default function News(){
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e1044516e091486892a3b049236c1a4c&page=1";
            let data = await fetch(url);
            let parsedata = await data.json();
            console.log(parsedata);
            setArticles(parsedata.articles);
          } catch (error) {
            console.error("Error fetching news data:", error);
          }
        }
        fetchData();
      }, []);
    return(
        <>
            <div className="container my-5">
              <h2>News Daily - Cricket, Business, Technology, Stock Market, Money, Tranding Topics etc.</h2>
              <div className="row mt-4 gy-4">
                      {articles.map((article, index) => (
                        <div className="col-md-4 col-sm-6 col-12">
                            <Newsitems key={index} title={article.title ? article.title.slice(0, 40): 'No title'} desc={article.description ? article.description.slice(0, 120) : 'No Description'} imgUrl={article.urlToImage} url={article.url} />
                        </div>
                      ))}
              </div>
            </div>
        </>
    )
}
