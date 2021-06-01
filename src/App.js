import './App.css';
import React, { useEffect, useState } from 'react'

import Navigbar from './Componed/nav'
import Mov from './Componed/Movie'
import FooterBlock from './Componed/footer';
import axios from "axios";
import  Carousel  from './Componed/carousll'
import Sidebarr from './Componed/admin'


function App() {
  const [filme, setFilme] = useState([])
  
function fetchMovies () {
    axios.get("http://localhost:3000/posts").then((response) => 
    setFilme(response.data))
  }
 
  useEffect(() => fetchMovies(),[])
  return (
    <div className="App">
    <Navigbar/>
    <div> <Carousel/> </div>
    
    <Mov filme = {filme}/>
    <div> 
      <Sidebarr/> 
    </div>
    
    <FooterBlock/>
    </div>
  );
}

export default App;
