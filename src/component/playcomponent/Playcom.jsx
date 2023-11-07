import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import TopCast from './topCast/TopCast'
import ReactPlayer from "react-player/youtube";
import Player from './playtailermain/Player'
import Simalar from './similar/Simalar'
import {useNavigate} from 'react-router-dom'

const Playcom = () => {
    const { url } = useSelector((state) => state.home)
    const { mediaType, id } = useParams()
    const { data: productData,  } = useFetch(`/${mediaType}/${id}`)
    const {user} = useSelector((state)=>state.user)
    // console.log('user',user)
    // console.log(productData)
    const navigate = useNavigate()
    const { data: vidieo,  } = useFetch(`/${mediaType}/${id}/videos`)
    // console.log(vidieo)
    const { data } = useFetch(`/${mediaType}/${id}/credits`)
    // console.log(data)
    const crewDetails = data?.cast?.slice(0, 8).filter((f) => f?.known_for_department === "Acting")
    const director = data?.crew?.filter((f) => f?.known_for_department === "Directing")
    // console.log('director',director)
    const handlleClick =() =>{
        navigate('/login')
    }
    return (
        <div className='bg-[rgb(104,171,203)] backgroundcol relative top-[50px] md:top-[55px]'>
            {user===null ?<><div className='fixed w-full h-full bg-black opacity-40'></div>
            <div className='fixed top-[50%] left-[35%] w-full h-full z-[1000] text-white' onClick={handlleClick}>
                    <p className=' bg-blue-600 flex justify-center rounded cursor-pointer p-2 w-56 text-lg'>Please login for Access</p>
            </div></>:''}
            <div className='backgroundsecond'>
                <div className='ml-15 pt-2 pb-2 flex'>
                    <div>Home / </div>
                    <div>{mediaType === "movie" ? productData?.title : productData?.name}</div> 
                </div>
                <div className='flex flex-wrap'>
            {
                vidieo?.results?.slice(0,1).map((ividieo,index)=>{
                    // console.log(ividieo)
                return <div key={index} className='  playstyle1 rounded'>
                       <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${ividieo.key}`}
                    controls
                    width="100%"
                    height="100%"
                />
                </div>
                    
                })
            }

        </div>
                <div className='conatainet2 bg-blue-600 text-white flex flex-wrap'>
                    <div className='image'>
                        <img src={`${url.backdrop}${productData?.poster_path
                            }`} alt=""  className='w-full rounded' />
                    </div>
                    
                    {/* movie name ,genera name and other details  */}

                    <div className='relative left-10 top-4 widthset'>
                        <div className='text-2xl'>{mediaType === "movie" ? productData?.title : productData?.name}</div>
                        <div className='w-80 sm:w-4/5'>{productData?.overview}</div>
                        <div className='flex flex-wrap mt-1'>
                            <div className='w-80'>
                                <div className='flex'>
                                    Genre : <pre> </pre>{productData?.genres.slice(0, 2).map((item, index) => {
                                        // console.log(item)    
                                        return <div key={index} className='flex'>
                                            <pre> </pre>{item?.name}
                                        </div>
                                    })}
                                </div>
                                <div className='flex'>
                                    Actor <pre> </pre>: <pre> </pre> <div className='flex flex-wrap' >{crewDetails?.map((actor, index) => {
                                        return <div className='ml-2' key={index}>{actor?.name},</div>
                                    })}</div>
                                </div>

                                <div className='flex flex-wrap'>Director <pre> </pre>: <pre> </pre>{director?.map((director, index) => {
                                    return <div className='ml-2' key={index}>{director?.name},</div>
                                })}</div>
                                <div className='flex flex-wrap'>Country :{productData?.origin_country || productData?.production_countries
                                    ?.map((county, index) => {
                                        return <div className='ml-2' key={index} >{county?.name}</div>
                                    })}</div>
                            </div>
                            <div className='ml-10'>
                                {mediaType !== "tv" && <div>Duration : {productData?.runtime} min </div>}
                                <div>Quality : HD</div>
                                {mediaType !== "tv" && <div>Release :{productData?.release_date
                                } </div>}
                                <div>Rate: {productData?.vote_average}</div>
                                {mediaType !== "movie" && <div>Total Season :{productData?.number_of_seasons
                                } </div>}
                                {mediaType !== "movie" && <div>Total Episode :{productData?.number_of_episodes

                                } </div>}
                            </div>
                        </div>
                    </div>


                    {/* crew start here  */}
                    <div>
                    <TopCast crewDetails={crewDetails} />
                    </div>                    
                </div>
                    <div className='bg-blue-600 pr-[10px]'><Player media={mediaType} mediaId = {id} /></div>
                    <div className='bg-blue-600'><Simalar media={mediaType} mediaId = {id} /></div>
            </div>

        </div>
    )
}

export default Playcom