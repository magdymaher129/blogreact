import React from 'react'
import Footer from '../components/Footer'
const Signup = () => {
  return (
    <div>
      <>
    <div className="container d-float mt-4">
    <form className="Auth-form float-end mt-4 ">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="form-group mt-3">
        <div className="form-group mt-3">
          <label>Name </label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter Name..."
          />
        </div>






          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
   
  </div>
     <Footer />
     </>
    </div>
  )
}

export default Signup