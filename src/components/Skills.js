import React from 'react'
import "./css/skills.css"
const Skills = () => {
  return (
  <section id="skills">
<div className='container' >
<h1 className="text-center page-header" style={{"font-weight": "700"}}>Skills</h1>
    <h4 className="text-center">My Technical Level</h4>
<div className="row">
<div className="col   col-md-4">
  </div>

<div className="col   col-md-4">
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h1 className="accordion-header" style={{"fontSize":"30px"   }}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <i className="fa-solid fa-code"></i>    Frontend Developer
      </button>

    </h1>

    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">

      <div className="accordion-body">
      <h6>More Than 6 Months</h6>
      <div className="progress" style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "90%","color":"black","fontWeight":"900" ,}}>Html 90%  </div>
</div>
      <div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "80%","color":"black","fontWeight":"900"}}>CSS 80%  </div>
</div>
      <div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "70%","color":"black","fontWeight":"900"}}>Bootstrap 70%  </div>
</div>
      <div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "90%","color":"black","fontWeight":"900"}}>Javascript 90%  </div>
</div>
      <div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "80%","color":"black","fontWeight":"900"}}>React js 80%  </div>
</div>
      <div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "80%","color":"black","fontWeight":"900"}}>Git 80%  </div>
</div>

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     [    ] Backend Developer
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <h6>More Than 3 Months</h6>
        
      <div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "50%","color":"black","fontWeight":"900"}}>Node js 50%  </div>
</div>
      <div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "50%","color":"black","fontWeight":"900"}}>Express js 50%  </div>
</div>
<div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "80%","color":"black","fontWeight":"900"}}>Mongo DB js 80%  </div>
</div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <i className="fa-solid fa-code"></i>    Designer
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <h6>More Than 3 Months</h6>
      <div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "50%","color":"black","fontWeight":"900"}}>Photoshop 50%  </div>
</div>
      <div className="progress"  style={{"margin":"30px 0px"}} role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-danger" style={{"width": "50%","color":"black","fontWeight":"900"}}>Canva 50%  </div>
</div>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className="col   col-md-4"></div>
</div>

</div>
</section>   
   
  )
}

export default Skills