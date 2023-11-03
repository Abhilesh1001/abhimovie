import React from 'react'
import './style.css'

const Login = () => {
  return (
    <div className='bg-[rgb(104,171,203)] backgroundlogin relative top-[50px] md:top-[60px]'>
      <div className='loginpage'>
        <label className="form-label my-2">Email</label>
         <input type="text" className="form-control" />
        <label className="form-label my-2">Password</label>
         <input type="text" className="form-control" />
         <button className='btn btn-primary my-2'>Submit</button>
         
      </div>
      </div>
  )
}

export default Login