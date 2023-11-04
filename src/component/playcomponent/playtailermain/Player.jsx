import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import ReactPlayer from "react-player/youtube";
import './style.css'

const Player = ({media,mediaId}) => {
    // console.log(media,mediaId)
    const { data: vidieo, loading: loadVidieo } = useFetch(`/${media}/${mediaId}/videos`)
    // console.log('vidieo',vidieo)
    

  return (
    <div>
        <div className='text-white ml-10 text-xl'>Official Vidieos</div>
        <div className='flex flex-wrap'>
            {
                vidieo?.results?.slice(0,10).map((ividieo,index)=>{
                    // console.log(ividieo)
                return <div key={index} className='ml-10 rounded'>
                    <div className='playstyle' >
                    <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${ividieo.key}`}
                    controls
                    width="100%"
                    height="100%"
                />
                    </div>
                       
                <div className='my-2 text-white w-auto h-auto'>{ividieo.name.slice(0,70)}</div>
                </div>
                })
            }

        </div>
    </div>
  )
}

export default Player