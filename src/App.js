import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Detai from "./Components/Detail/Detai";
import { useState } from "react";
import { useEffect } from "react";
const requesURL = 'https://api.themoviedb.org/3/movie/popular?api_key=1e2d09b382e566dc30bf58aa45292e91'
function App() {
    const [movie,setMovie] = useState([])
  useEffect(() => {
    
    try {
      async function fetchPostList(e){
        
        fetch(requesURL)
        .then((res)=>res.json())
        .then(data=>{
          setMovie(data.results)
        })
      }
      fetchPostList()
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Main movie={movie} />
      <Footer />
      <Routes>
        <Route path="/detai/:id" element={<Detai movie={movie} {...movie} />} />
      </Routes>
    </div>
  );
}

export default App;
