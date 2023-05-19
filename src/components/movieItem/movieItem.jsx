import React, { useContext } from "react";
import { Rate } from "antd";
import { ThemeContext, themes } from "../app/app";

import "./movieItem.css";


export default function MovieItem({movieItem, formatDate}) {

    const themeContext = useContext(ThemeContext);


    return (
        <div className="movieItem" style={{backgroundColor: themes[themeContext]["card_bg"]}}>
            <div className="movieItem-left">
                <img className="movieItem-image" src={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`} alt="" />
            </div>
            <div className="movieItem-right">
                <div className="movieItem-header">
                    <div className="movieItem-title">{movieItem.title}</div>
                    <div className="movieItem-reldate">Release date: {movieItem.release_date ? formatDate(movieItem.release_date) : "Unset"}</div>
                </div>
                <div className="movieItem-description">{movieItem.overview}</div>
                <div className="movieItem-footer" style={{background: themes[themeContext]["card_bg"]}}>
                    <Rate count={10} allowHalf={true} style={{fontSize: "25px", background: themes[themeContext]["card_bg"]}} />
                </div>
            </div>
        </div>
    );

}
