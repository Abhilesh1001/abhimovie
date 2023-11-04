import React from 'react'

const Signup = () => {
  return (
    <div className='bg-[rgb(104,171,203)] backgroundlogin relative top-[50px] md:top-[55px]'>
    <div className='loginpage'>
    <label className="form-label my-2">Name</label>
       <input type="text" className="form-control" />
      <label className="form-label my-2">Email</label>
       <input type="email" className="form-control" />
      <label className="form-label my-2">Password</label>
       <input type="text" className="form-control" />
      <label className="form-label my-2">Confirmed Password</label>
       <input type="text" className="form-control" />
       <button className='btn btn-primary my-2'>Submit</button>
       
    </div>
    </div>
  )
}

export default Signup