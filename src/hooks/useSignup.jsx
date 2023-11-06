import { useState } from "react"
import axios from "axios"
import {useSelector} from 'react-redux'


//signup 
export const useSignup =(data,dispatch)=>{
    const [signdata,setSignData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [nonfielderror,setNonFieldError] = useState(null)
    const [error,setError] = useState(null)
    const {baseurl} = useSelector((state)=>state.user)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const res = await axios.post(`${baseurl}cus/authreg/`,data)
            // console.log(res) 
            setSignData(res.data.msg)
            dispatch({type:'NAME',value:""})
            dispatch({type:'EMAIL',value:""})
            dispatch({type:'PASSWORD',value:""})
            dispatch({type:'PASSWORD2',value:""})
            dispatch({type:'CHECKED',value:false})
            setLoading(false)
        }catch(err){
            // console.log(err)
            // console.log(err.response.data.errors.non_field_errors)
            setNonFieldError(err.response.data.errors.non_field_errors)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
            dispatch({type:'NAME',value:""})
            dispatch({type:'EMAIL',value:""})
            dispatch({type:'PASSWORD',value:""})
            dispatch({type:'PASSWORD2',value:""})
            dispatch({type:'CHECKED',value:false})
            setLoading(false)
        }

    }

    return {handleSubmit,signdata,loading,error,nonfielderror}
}