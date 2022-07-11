import React from 'react'
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <>

<div className="container py-4 w-50 border my-4">


  <form id="contactForm" className=' px-5 py-2'>


    <div className="mb-3">
      <label className="form-label" htmlFor="name">Name</label>
      <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
    </div>


    <div className="mb-3">
      <label className="form-label" htmlFor="emailAddress">Email Address</label>
      <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
    </div>


    <div className="mb-3">
      <label className="form-label" htmlFor="message">Message</label>
      <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height: "10rem"}} ></textarea>
    </div>


    <div className="d-grid">
      <button className="btn btn-primary btn-lg" type="submit">Submit</button>
    </div>

  </form>

</div>


    <Footer />
    </>
  )
}

export default Contacts