import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navigbar from './Componed/nav'
import Mov from './Componed/Movie'
import FooterBlock from './Componed/footer';

function App() {
  return (
    <div className="App">
    <Navigbar/>
    <Mov/>
    <FooterBlock/>
    </div>
  );
}

export default App;
