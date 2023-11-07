import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../../loading/Loading'

const ResetPasswordWithUidToken = () => {
    const { baseurl } = useSelector((state) => state.user)
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading,setLoading] = useState(false)
    const { id, token } = useParams()
    // console.log(id,token)
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        // console.log("ok")

        const data = {
            password: password,
            password2: password2
        }
        try {
            const response = await axios.post(`${baseurl}cus/send-reset-password/${id}/${token}/`, data)
            const res = response.data.msg
            // console.log('response', res)
            setPassword('')
            setPassword2('')
            setMessage(res)
            setLoading(false)
        }

        catch (error) {
            // console.log('error', error?.response?.data?.errors?.non_field_errors)
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
                    <label htmlFor="password" className='form-label'>New Password</label>
                    <input type="password" value={password} className="form-control my-2" onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="password" className='form-label'>Confirm Password</label>
                    <input type="password" value={password2}  className="form-control my-2" onChange={(e) => setPassword2(e.target.value)} required />
                    <button type='submit' className='btn btn-primary bg-blue-600'>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default ResetPasswordWithUidToken