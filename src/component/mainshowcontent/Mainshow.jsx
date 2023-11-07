import React, { useEffect, useState } from 'react'
import './main.css'
import { useSelector } from 'react-redux'
import Moviedesc from '../movienamerender/Moviedesc'
import {useNavigate} from 'react-router-dom'
import {getProductData,getIndex} from '../../features/home/homeSlice'
import {useDispatch} from 'react-redux'
import useWindowWidth from '../../hooks/useWindowWidth'
// import Simalar from '../playcomponent/similar/Simalar'

const Mainshow = ({ show,data,loading,type}) => {
    // console.log('error',data)
    const {width} = useWindowWidth()
    // console.log(width,height)

    const [divheight,setDivheight] = useState(0)
    const [divWidth,setDivWidth] =useState()
    // console.log(divWidth,divheight)
    const newdimention  = width-divWidth
    
    const [len,setLen] = useState(20)   
    // console.log(data)
    useEffect(()=>{
        if(type==="similar"){
            setLen(10)
        }else{
            setLen(20)
        }
    },[type])
    
    const handleMouseEnter = (event,index)=>{
        
        // console.log(window.innerWidth)
        setDivWidth(event.clientX)
        setDivheight(event.clientY)
        setIsHovered(index)

    }
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    
    const [isHovered, setIsHovered] = useState(null)
    //   console.log('data',data?.results)
    const { url } = useSelector((state) => state.home)
    // console.log('diff',newdimention)
    const handleClick =(index,item,media) =>{
        // console.log('ok')
        dispatch(getProductData(item))
        dispatch(getIndex(index))
        navigate(`/playcom/${media === undefined ? show : media}/${item}`)
    }
    return (
        <div>
           
            <div style={{ display: 'flex', alignItems:'center',justifyContent:'center', flexWrap: 'wrap' }} >
                {
                    !loading && data?.results?.slice(0,len)?.filter((items)=>items?.poster_path!==null)?.filter((another)=>another?.poster_path!==undefined)?.map((item, index) => {
                        const ImageUrl = url.backdrop
                        
                        return <div key={index}  className='cursor-pointer mainbox' onMouseEnter={(event) =>
                            handleMouseEnter(event,index)} onMouseLeave={() => setIsHovered(null)} onClick={()=>handleClick(index,item.id,item.media_type)}>
                            <img src={`${ImageUrl}${item.poster_path}`}  alt="Image not found" className='mainbox1'/>
                        <div style={{position:'relative', top:`${divheight<500?"100px":'-200px'}`,right:`${newdimention<300 ? "200px":"0px"}` }}>
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