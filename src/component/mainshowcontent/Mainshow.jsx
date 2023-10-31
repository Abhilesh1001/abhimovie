import React, { useEffect, useState } from 'react'
import './main.css'
import { useSelector } from 'react-redux'
import Moviedesc from '../movienamerender/Moviedesc'
import {useNavigate} from 'react-router-dom'
import {getProductData,getIndex} from '../../features/home/homeSlice'
import {useDispatch} from 'react-redux'
// import Simalar from '../playcomponent/similar/Simalar'

const Mainshow = ({ show,data,loading,type}) => {
    
    const [len,setLen] = useState(20)
    // console.log(data)
    useEffect(()=>{
        if(type==="similar"){
            setLen(10)
        }else{
            setLen(20)
        }
    },[type])

    const navigate = useNavigate()
    const dispatch = useDispatch() 
    
    const [isHovered, setIsHovered] = useState(null)
    //   console.log('data',data?.results)
    const { url } = useSelector((state) => state.home)
    const handleClick =(index,item,media) =>{
        dispatch(getProductData(item))
        dispatch(getIndex(index))
        navigate(`/playcom/${media === undefined ? show : media}/${item}`)
    }
    return (
        <div>
           
            <div style={{ display: 'flex', alignItems:'center',justifyContent:'center', margin: '10px 10px 0px 10px', flexWrap: 'wrap' }} >
                {
                    !loading && data?.results.slice(0,len).filter((items)=>items?.poster_path!==null).filter((another)=>another?.poster_path!==undefined)?.map((item, index) => {
                        const ImageUrl = url.backdrop
                        
                        return <div key={index} style={{ width: '180px', height: '250px', margin: '6px' }} className='cursor-pointer' onMouseEnter={() =>
                            setIsHovered(index)} onMouseLeave={() => setIsHovered(null)} onClick={()=>handleClick(index,item.id,item.media_type)}>
                            <img src={`${ImageUrl}${item.poster_path}`} style={{ width: '180px', height: '250px',borderRadius:'4px' }} alt="Image not found" />
                        <div style={{position:'relative', top:'-200px'}}>
                            {isHovered === index && <Moviedesc title={"movie" === `${show}` || item.media_type === "movie" ? item.title : item.name} date={item.release_date} desc={item.overview
                            } rating={item.vote_average} />}
                            </div>

                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default Mainshow