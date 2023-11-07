import React, { useState } from 'react'
import './movieplay.css'
import { useSelector } from 'react-redux'
import useFetch from '../../../hooks/useFetch'
import Moviedesc from '../../movienamerender/Moviedesc'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getIndex,getProductData} from '../../../features/home/homeSlice'
import useWindowWidth from '../../../hooks/useWindowWidth'


const Moviedis = () => {
    const {genres} = useSelector((state)=>state.home)
    const { url } = useSelector((state) => state.home)
    const { data, loading} = useFetch('/trending/all/day')
    const {width} = useWindowWidth()
    const [divheight,setDivheight] = useState(0)
    const [divWidth,setDivWidth] =useState()
    // console.log(data)
    const [isHovered, setIsHovered] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick =(index,item) =>{
        // console.log(index,item)
        dispatch(getIndex(index))
        dispatch(getProductData(item))
        navigate(`/playcom/${item}/${index}`)
    }

    const handleMouseEnter = (event,index)=>{
        
        // console.log(window.innerWidth)
        setDivWidth(event.clientX)
        setDivheight(event.clientY)
        setIsHovered(index)

    }
    // console.log(divWidth,divheight)
    const newdimention  = width-divWidth


    return (
        <div>
            <button className='ml-20  hover:bg-sky-100 bg-blue-300 w-40 h-10 rounded'>MOVIES </button>
            <button className='mx-2  hover:bg-sky-100 hover:rounded p-2'>TRENDING</button>
            <button className='mx-2  hover:bg-sky-100 rounded p-2'>MOSTVIEWED</button>
            <button className='mx-2 hover:bg-sky-100 p-2 rounded'>Top IMDB</button>
            <div className='ml-20'>
                <button className='mx-2 my-2 p-2 hover:bg-sky-100 rounded'>TVSERIES</button>
            </div>
            <div className='flex flex-wrap items-center justify-center cursor-pointer'>

                {
                    !loading && data?.results?.map((item, index) => {
                        const ImageUrl = url.backdrop + item.poster_path                       
                        return <div key={index} className='moviCart m-2 relative' onClick={(e)=>handleClick(item.id,item.media_type)} id={index} onMouseEnter={(event) => 
                            handleMouseEnter(event,index)} onMouseLeave={() => setIsHovered(null)}>                           
                            <img src={`${ImageUrl}`} className='h-full w-full absolute rounded-md hover:filter hover:contrast-75'  alt="" />
                            <div className='flex mx-2 flex-wrap relative' style={{top:'200px'}}>

                            {/* adding genere here ...... */}
                            {item.genre_ids.slice(0,2).map((g,index1)=>{
                                // console.log('genres',genres[g].name)
                                return <div key={index1} style={{position:'relative',display:'flex'}} className='mx-1'>
                                    <div className=' rounded  bgcolorgrad' style={{fontSize:'14px'}}>{genres[g]?.name}</div>
                                    </div>
                            })}
                            {/* end here...  */}
                            </div>
                            {/* hover effect starts here  */}
                            <div style={{position:'relative', top:`${divheight<400?"300px":'0px'}`,right:`${newdimention<300 ? "200px":"0px"}` }} >
                            {isHovered === index && <Moviedesc title={item.media_type==="movie"?item.title:item.name}  date={item.release_date} desc={item.overview
                            } rating={item.vote_average} />}

                            </div>
                            
                        </div>
                    })
                }


            </div>
        </div>
    )
}

export default Moviedis