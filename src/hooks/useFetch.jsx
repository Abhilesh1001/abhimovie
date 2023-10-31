import { useEffect,useState } from "react"; 
import {fetchDataFromApi} from '../utils/api'

const useFetch = (url)=>{
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(null)
    const [error,setError] = useState(null)
    
    useEffect(()=>{
        setLoading('Loading....')
        setData(null)
        setError(null)
        fetchDataFromApi(url)
        .then(res=>{
            setLoading(false)
            setData(res)
        })
        .catch(eror=>{
            setLoading(false)
            setData('SOmeting went Wrong')
        })
    },[url])
    

    return {data,loading,error}

}
export default useFetch