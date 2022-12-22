import React, { useRef } from "react";
import "./detail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Detai = ({movie}) => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const details =  movie.find((datas) => {
      return datas.id == param.id;
    });
    setDetail(details);
    
  });

  const param = useParams();
  const imgAPI = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="detail">
      
        <div data-aos="zoom-in-down" className="detailContent">
        <div className="imgdetail">
           <img src={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`} alt={detail.original_title} /> 
        </div>
        <div className="detailscontent">
          <h1>Tên phim: {detail.title}</h1>
          <p>Lượt xem: {detail.popularity}</p>
          <p>Ngày sản xuất: {detail.release_date}</p>

          <p>{detail.overview}</p>
          <button className="btn">Xem Phim</button>
          <Link to={"/"} className="btnclose">
            <AiOutlineCloseCircle className="icon" />
          </Link><br/>
          
        </div>
      </div>
      
    </div>
  );
};

export default Detai;
