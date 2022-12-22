import React,{useState} from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
    const [active,setActive] = useState('navBar');
    const showNav = ()=>{
        if(active === 'navBar'){

            setActive('navBar activeNavBar')
        }
        else if(active === 'navBar activeNavBar'){
            setActive('navBar')
        }
    }
    const removeNavbar = ()=>{
        setActive('navBar')
    }
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              MOVIE.
            </h1>
          </a>
        </div>
        
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="" className="navLink">
                Trang Chủ
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Truyền Hình
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Phim Bộ
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">Mua gói</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        
        <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
