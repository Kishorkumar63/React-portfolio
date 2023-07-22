import React from 'react'
import "./css/qualification.css"

const Qualification = () => {
  const showCertificate=(e)=>{
  e.classList.toggle("active")
   const toggle=document.querySelectorAll(".toggle");
   toggle.forEach(add=>{
    add.classList.toggle("active")
   })
   const Datas=document.querySelectorAll(".data");
   Datas.forEach(data=>{
    data.classList.toggle("active")
   })

  }
  return (
 


    

    <section id="qualification">
    <h1 className="text-center page-header" style={{"font-weight":"700"}}> Qualification</h1>
    <h5 className="text-center" style={{"font-weight": "700","fontFamily": 'Crete Round'}}>My personal journey</h5>
    <div className="container">
    <div className="row">

    <div className="col col-md-4"></div>

    <div className="col col-md-4">
        <div data-aos="fade-up"
        data-aos-duration="3000">
          <h3 className="text-center page-header Education" style={{"font-weight": "700","cursor": "pointer"}}> <i
              className="fa-solid fa-graduation-cap"></i> Education</h3>
          <div className="edu">
            <div className="data ">
              <h4>B.Tech <span style={{"display": "block"}}>Information Technology</span></h4>
              <h5>Dhanalakshmi Srinivasan Engineering collage,Perambalur</h5>

              <h6><i className="fa-solid fa-calendar-days"></i> 2022-2025</h6>
            </div>
            <div className="toggle">
              <h4>Web Developement</h4>
              <button className="btn btn-info" style={{"border-radius": "10px"}}> <a href="ww"
                  style={{"text-decoration": "none", "color": "white"}}> View Certificate </a> </button>
            </div>
          </div>
          <div className="edu" style={{"margin-top": "80px"}}>
            <div className="data">
              <h4> <span style={{"display": "block"}}>Web Developement</span></h4>
              <h5>Master class</h5>
              <h6><i className="fa-solid fa-calendar-days"></i> 2023</h6>
            </div>
            <div className="toggle">
              <h4>GitHub</h4>
              <button className="btn btn-info" style={{"border-radius": "10px"}}> <a href="s"
                  style={{"text-decoration": "none","color": "white;"}}> Github Certificate </a> </button>
            </div>
          </div>
          <div className="edu" style={{"margin-top": "80px"}}>
            <div className="data">
              <h4><span style={{"display": "block"}}>Web Developement </span></h4>
              <h5>Intenship</h5>
              <h6><i className="fa-solid fa-calendar-days"></i> 2023</h6>
            </div>
            <div className="toggle">
              <h4>Intenship</h4>
              <button className="btn btn-info" style={{"border-radius": "10px"}}> <a href="sa"
                  style={{"text-decoration": "none","color": "white"}}> View Certificate </a> </button>
            </div>
          </div>


        </div>

        <div data-aos="fade-up"
        data-aos-duration="3000">
          <h3 className="text-center page-header Certificate-header" onClick={(e)=>showCertificate(e.target)} style={{"font-weight": "700","cursor": "pointer"}}>
            <i className="fa-sharp fa-solid fa-medal"></i> Certificates</h3>
          <div className="edu">
            <div className="data">


              <h4><span style={{"display": "block"}}>Html &&  css Bootstrap && Javascript && React Js </span></h4>
              <h5>Master class</h5>
              <h6><i className="fa-solid fa-calendar-days"></i> 2023</h6>
            </div>
            <div className="toggle">
              <h4>Html, Css, JavaScript</h4>
              <button className="btn btn-info" style={{"border-radius":"10px"}}> <a href="s"
                  style={{"text-decoration": "none", "color": "white"}}> View Certificate </a> </button>
            </div>
          </div>
          <div className="edu" style={{"margin-top": "80px"}}>
            <div className="data">

              <h4><span style={{"display": "block"}}>python</span></h4>
              <h5>Master class</h5>
              <h6><i className="fa-solid fa-calendar-days"></i> 2022</h6>
            </div>
            <div className="toggle">
              <h4>Python</h4>
              <button className="btn btn-info" style={{"border-radius": "10px"}}> <a href="kscjks"
                  style={{"text-decoration": "none", "color": "white"}}> View Certificate </a> </button>
            </div>
          </div>
          <div className="edu" style={{"margin-top": "80px"}}>
            <div className="data">

              <h4><span style={{"display": "block"}}>React js</span></h4>
              <h5>Master class </h5>
              <h6><i className="fa-solid fa-calendar-days"></i> 2022</h6>
            </div>
            <div className="toggle">
              <h4>React Js</h4>
              <button className="btn btn-info" style={{"border-radius": "10px"}}> <a href="g"
                  style={{"text-decoration": "none", "color":" white"}}> View Certificate </a> </button>
            </div>
          </div>
        </div>
      </div>
     
      <div className="col col-md-4"></div>
    </div>

    </div>

  </section>


    




  )
}

export default Qualification