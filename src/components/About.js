import React from 'react'

import "./css/about.css"
import about from "./img/1.jpg"

const About = () => {
  return (
    <div className='About'>
 <section id="about">
    <h1 className="text-center page-header " style={{"font-weight": "700"}}>About Me</h1>
    <div className="container">
<div className='row'>

      <div className=" col-md-6 cols" data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
        <img src={about} alt="pop" className="img-responsive" width="350px" height="" />

      </div>

      <div className="col-md-6 col"data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine" >

        <div className="p">
          <p style={{"font-family": "cursive"}}>Web developer focused on crafting great web experiences. Designing and Coding have been my passion since
            the days I started working with computers.</p>
        </div>
        <div className="course">
          <div className="month">
            <h4>10+</h4>
            <h3>Months
              experience</h3>

          </div>
          <div className="pro">
            <h4>07+</h4>
            <h3>Completed
              projects</h3>

          </div>
          <div className="complete">
            <h4>10+</h4>
            <h3>Course
              completed</h3>

          </div>



        </div>
        <button className="btn " style={{"background-color": "rgb(0, 183, 255)" ," font-weight": "600" ,"color": "white","margin-top":" 20px","  background-color": "rgb(0, 183, 255)",
       " width": "120px",
        "height":" 45px",
        "border-radius":"5px"}}> <a href="img/1.jpg" download style={{"text-decoration": "none", "color": "white"}}> Open Cv <i
              className="fa-solid fa-file"></i> </a>
        </button>
      </div>
      </div>
    </div>




  </section>


    </div>
  )
}

export default About