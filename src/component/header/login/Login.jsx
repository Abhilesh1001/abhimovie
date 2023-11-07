import React,{useReducer} from 'react'
import './style.css'
import {reducer,initialState} from './reducer'
import axios from 'axios'
import { useCusfetch } from '../../../hooks/useCusfetch'
import {useNavigate} from 'react-router-dom'
import Loading from '../../loading/Loading'

const Login = () => {
  const [data,dispatch] =useReducer(reducer,initialState)
  const {handleSubmit,logindata,errordata,loading} =useCusfetch(data,dispatch)
  const navigate = useNavigate()
  const handleResetPassword = () =>{
      navigate('/resetforgetpassword')
  }
  return (
    <div className='bg-[rgb(104,171,203)] backgroundlogin relative top-[50px] md:top-[55px]'>

      <div className='loginpage pl-[15px] pr-[15px]'>
        <div className='flex justify-center w-full'>
        {loading && <Loading />}
        </div>
        {errordata && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{errordata}</div>}
        {logindata && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-green-700">{logindata}</div>}
        
        <form onSubmit={handleSubmit}>
        <label className="form-label my-2">Email</label>
         <input type="email"  value={data.email} onChange={(e)=>dispatch({type:'EMAIL',value : e.target.value})} className="form-control" required />
        <label className="form-label my-2">Password</label>
         <input type="password" value={data.password} onChange={(e)=>dispatch({type:'PASSWORD',value : e.target.value})} className="form-control" required />
         <div className='flex justify-between items-center text-white cursor-pointer flex-wrap'>
         <button className='btn btn-primary my-2'>Submit</button>
            <div onClick={handleResetPassword}>Forget Password?</div>
         </div>
        </form>
      </div>
      </div>
  )
}

export default Login