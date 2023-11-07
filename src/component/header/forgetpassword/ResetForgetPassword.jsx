import React, { useState } from 'react'
import axios from 'axios'
import Loading from '../../loading/Loading'
import {useSelector} from 'react-redux'

const ResetForgetPassword = () => {
    const {baseurl} = useSelector((state)=>state.user) 
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const handleSubmit = async (e)=>{
        setLoading(true)
        e.preventDefault()
        // console.log('ok')
        const data = {
            email : email 
        }
        try{
            const response = await axios.post(`${baseurl}cus/send-reset-password/`,data)
        const res = response?.data 
         setMessage(res?.msg)   
        // console.log(res)
        setLoading(false)
            
        }catch(error){
            // console.log(error)
            setError(error?.response?.data?.errors?.non_field_errors)
            setLoading(false)
        }
        
    }

  return (
    <div className='bg-[rgb(104,171,203)] backgroundlogin relative top-[50px] md:top-[55px]'>

    <div className='loginpage pl-[15px] pr-[15px]'>
       <div className='flex justify-center w-full'>
      {loading && <Loading />}
      </div> 
       {error && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{error}</div>}
      {message && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-green-700">{message}</div>}       
      <form onSubmit={handleSubmit}>
      <label htmlFor="email" className='form-label'>Enter Email</label>
        <input type="email" value={email} className="form-control my-2" onChange={(e) => setEmail(e.target.value)} required />      
       <button className='btn btn-primary my-2'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default ResetForgetPassword