import React from 'react'

import "./css/home.css"
import Logo from "./img/3.jpg"
const Home = () => {
  return (
    <div className='Home'>
 <section id="home">
   

   <div className="container">
<div className='row'>

     <div className=" col col-md-6" data-aos="fade-up"
     data-aos-duration="2000" >
       <div>
         <h2>Hi, I'am Kishor K</h2>
       </div>
       <h4>FullStack Developer</h4>
       <div>
         <p>I am junior web developer and independent freelancer, helping clients by providing good quality service on
           web development.I am junior web developer and independent freelancer, helping clients by providing good
           quality service on web development.</p>

       </div>

       <div>
       <button className='btn btn-outline-primary ms-auto px-4 rounded-pill'> <a href='#Contact' style={{"textDecoration":"none"}}><i className="fa-solid fa-arrow-right"></i> Contact Me  </a>   </button>
        
        
       


       </div>



       <div className="btns" ><button className='btn btn-primary ms-auto px-4 rounded-pill'> <a href='#about' style={{"textDecoration":"none" ,"color":"white"}}>   <i className="fa-solid fa-arrow-down"></i> Scroll Down </a> </button>
             
             </div>

     </div>

     <div className=" col col-md-6 img"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
       <img src={Logo} alt="pop" className="img-responsive" height=""/>
     </div>
     </div>
   </div>


 </section>



    </div>
  )
}

export default Home