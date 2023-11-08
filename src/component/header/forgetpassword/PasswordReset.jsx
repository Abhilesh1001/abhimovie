import React, { useState } from 'react'
import './style.css'
import {useSelector} from 'react-redux'
import axios from 'axios'
import Loading from '../../loading/Loading'

const PasswordReset = () => {
    const {baseurl} = useSelector((state)=>state.user)
    const [password ,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [message,setMessage] = useState()
    const [nonfielderror,setNenoFieldError] = useState()
    const [error,setError] = useState()
    const [loading,setLoading] = useState(false)
     
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const data = {
            password : password,
            password2 : password2
        }
        // console.log(data)
        try {
            
            let token = localStorage.getItem('token')
            const res =  await axios.post(`${baseurl}cus/changepassword/`,data,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            setLoading(false)
            setMessage(res.data.msg)
            setPassword('')
            setPassword2('')
        }catch(error){
            setNenoFieldError(error?.response?.data?.errors?.non_field_errors)
            setError(error?.response?.data?.errors)
            setLoading(false)
        }
    }
  return (
    <div className='bg-[rgb(104,171,203)] w-full h-[500px] flex justify-center relative top-[50px] md:top-[60px]'>
        <div className='pageforgetpass'>
            <div className='flex justify-center w-full'>
         {loading && <Loading /> }
            </div>
         {nonfielderror && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{nonfielderror[0]?.charAt(0).toUpperCase() + nonfielderror[0].slice(1)}</div>}
        {message && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-green-700">{message}</div>} 
        <form onSubmit={handleSubmit}>
        {error?.password && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{error?.password}</div>}
        <label className="form-label my-2" >Password</label>
         <input type='password' value={password} className="form-control" onChange={(e)=>setPassword(e.target.value)}  />
         {error?.password2 && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{error?.password2}</div>}
        <label className="form-label my-2">Confirmed Password</label>
         <input value={password2}  type="password" onChange={(e)=>setPassword2(e.target.value)}  className="form-control"  />
         <button className='btn btn-primary my-2'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PasswordReset