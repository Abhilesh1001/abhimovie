import { useState } from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { getUser } from '../features/userauthentication/userSlice'


//user login 
export const useCusfetch = (data,dispatch) => {
    const [logindata, setLoginData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [errordata, setError] = useState('')
    const disptch = useDispatch()
    const {baseurl} = useSelector((state)=>state.user)
    const handleSubmit = async (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        try {
            const res = await axios.post(`${baseurl}cus/authlogin/`, data)
            // console.log(res.data.token.access)
            // console.log(res.data.msg)
            localStorage.setItem('token', res.data.token.access)
            setLoginData(res.data.msg)
            setError(null)
            setLoading(false)
            dispatch({type:'EMAIL',value : ""})
            dispatch({type:'PASSWORD',value : ""})
        } catch (error) {
            setLoginData(null)
            setError("Email Id or Password Wrong")
            setLoading(false)
            // console.log('error', error.message)
        }

        Profile()
    }

    const Profile = async () => {
        let token = localStorage.getItem('token')
        try {

            let response = await axios.get(`${baseurl}cus/authuserpro`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            let res = response.data
            disptch(getUser(res))
            localStorage.setItem('user',JSON.stringify(response.data))
            console.log('responsedata',res)
            dispatch({type:'EMAIL',value : ""})
            dispatch({type:'PASSWORD',value : ""})
        } catch (error) {
            console.log(error)
        }
    }

    return { handleSubmit,logindata,errordata }
}

// export default useCusfetch
