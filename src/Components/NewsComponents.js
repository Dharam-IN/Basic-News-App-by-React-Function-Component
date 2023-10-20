import React from "react";

export default function Newsitems(props){
    return(
        <>
            <div className="card">
                <img src={!props.imgUrl?"https://cdn.wionews.com/sites/default/files/2023/10/18/387304-untitled-design-45.png":props.imgUrl} className="card-img-top" alt="News banner"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{!props.desc?"Dummy headline":props.desc}</p>
                    <a href={props.url} target="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
