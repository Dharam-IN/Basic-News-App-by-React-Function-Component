import React, { useState, useEffect } from "react";
import Newsitems from "./NewsComponents";

export default function News(){
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e1044516e091486892a3b049236c1a4c";
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
            <div className="container">
              <div className="row mt-5">
                      {articles.map((article, index) => (
                        <div className="col-md-4 col-sm-6 col-12">
                            <Newsitems key={index} title={article.title} desc={article.description} imgUrl={article.urlToImage} url={article.url} />
                        </div>
                      ))}
              </div>
            </div>
        </>
    )
}
