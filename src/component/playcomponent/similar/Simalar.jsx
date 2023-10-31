import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Mainshow from '../../mainshowcontent/Mainshow'

const Simalar = ({media,mediaId}) => {
    console.log(media)
    const {data,loading} = useFetch(`/${media}/${mediaId}/similar`)
    console.log('data',data)
    
  return (
    <div className='ml-10 text-xl'>
        <div className=' text-white'>Similar {media} Shows</div>
            <Mainshow show={media} data={data} type='similar' loading={loading} />
    </div>
  )
}

export default Simalar