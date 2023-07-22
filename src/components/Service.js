import React from 'react'

const Service = () => {
  return (

<section className="service" id="service">

<div className="container">
<h1 className="text-center page-header" style={{"font-weight":"700"}}> Service</h1>
    <h5 className="text-center" style={{"font-weight": "700","font-family": 'Crete Round'}}>What I Offer

</h5>
<div className="row">
<div className="col">
<div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Frontend Developer</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <i className="fa-brands fa-css3" style={{"font-size": "50px"," margin-left": "10px","color":"darkorange"}}></i>
      <h3> Frontend Developer</h3>
      <h5><i className="fa-sharp fa-solid fa-circle-check"></i> I create responsive webpage. </h5>
      <h5 style={{"marginRight":"60px"}}> <i className="fa-sharp fa-solid fa-circle-check"></i> Optimized for Mobile.</h5>
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Backend Developer</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <i className="fa-brands fa-node" style={{"font-size": "50px"," margin-left": "10px" ,"color":'green'}}></i>
      <h3>Backend Developer</h3>
      <h5 ><i className="fa-sharp fa-solid fa-circle-check"></i> 
      Well Designed and Functional
      
      </h5>
    <h5 style={{"marginRight":"155px"}}> <i className="fa-sharp fa-solid fa-circle-check"></i> Easy to Use.</h5>
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Visit Our Services</button>
</div>

</div>


</div>


</section>
  )
}

export default Service