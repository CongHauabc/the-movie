import React,{useEffect, useState} from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BsClipboardCheck } from "react-icons/bs";

// import img
import { Data } from "../Database/db";
import Aos from 'aos';
import 'aos/dist/aos.css'


function Main({movie}) {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">ALL MOVIE</h3>
      </div>

      <div className="secContent grid">
        {movie.map((datas) => {
          return (
            <Link to={`/detai/${datas.id}`} className="itemMOvie" key={datas.id}>
            <div  data-aos="zoom-in-up"  className="singleDestination">
              <div className="imageDiv">
                <img src={`https://image.tmdb.org/t/p/w500${datas.backdrop_path}`} alt={datas.original_title} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{datas.original_title}</h4>          
                
              </div>
            </div>
            </Link>
            
          );
        })}
      </div>
    </section>
  );
}

export default Main;
