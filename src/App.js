import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import './App.css';
import Qualification from "./components/Qualification"
import Service from "./components/Service"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
//import {  Routes , Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
{/* 
<Routes>

  <Route path="/" element={    <Home/>}></Route>
  <Route path="/about" element={<About></About>}></Route>
  <Route path="/skill" element={<Skills></Skills>}></Route>
  <Route path="/Qualification" element={<Qualification></Qualification>}></Route>
  <Route path="/service" element={<Service></Service>}></Route>
  <Route path="/portfolio" element={ <Portfolio></Portfolio>}></Route>
  <Route path="/conatct" element={<Contact></Contact>}></Route>
  

</Routes> */}




   
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Qualification></Qualification>
    <Service></Service>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
