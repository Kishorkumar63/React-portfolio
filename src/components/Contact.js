import React from 'react'
import "./css/contact.css"
const Contact = () => {
  return (
<section id="Contact">
    <h1 className="text-center page-header" style={{"font-weight": "700"}}>Contact</h1>
    <h5 className="text-center" style={{"font-weight": "700"}}>Get In Touch</h5>
    <div className="container">
        <div className="row">
      <div className="col-md-6 col" data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500" >

        <div className="call">

          <h3  style={{"textAlign":"start"}}>           <i style={{"font-size": "25px","color": "rgb(0, 183, 255)"}} className="fa-sharp fa-solid fa-phone-volume"></i> Call Me</h3>
          <h5 style={{"textAlign":"start"}}>+91 6369363573</h5>
        </div>
        <div className="mail">

          <h3 style={{"textAlign":"start"}}>          <i style={{"font-size": "25px","color": "rgb(0, 183, 255)"}} className="fa-solid fa-envelope"></i> Email</h3>
          <h5 style={{"textAlign":"start"}}>kishorkumar200313@gmail.com</h5>
        </div >
        <div className="location">

          <h3 style={{"textAlign":"start"}}>          <i style={{"font-size": "25px","color": "rgb(0, 183, 255)"}} className="fa-solid fa-location-dot"></i> Location</h3>
          <h5 style={{"textAlign":"start"}}>Viruthachalam , Tamilnadu - India</h5>
        </div>

      </div>

      <div className="
      col-md-5 col" data-aos="fade-up"
      data-aos-duration="3000">
        <form>
<div className="mb-3">
  <label style={{"float":"left"}}  for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
</div>
<div className="mb-3">
  <label style={{"float":"left"}}  for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Mail" />
</div>
<div className="mb-3">
  <label style={{"float":"left"}}  for="exampleFormControlTextarea1" className="form-label">Your Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button  style={{"float":"left"}} className='btn btn-outline-success ms-auto px-4 rounded-pill'><i className="fa-solid fa-paper-plane"></i> Submit</button>
</form>
      </div>
    

    </div>
    
</div>
  </section>

  )
}

export default Contact