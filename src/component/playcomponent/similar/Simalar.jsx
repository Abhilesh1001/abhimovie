import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Mainshow from '../../mainshowcontent/Mainshow'

const Simalar = ({media,mediaId}) => {
    // console.log(media)
    const {data,loading} = useFetch(`/${media}/${mediaId}/similar`)
    // console.log('data',data)
    
  return (
    <div className='pb-4 text-xl'>
        <div className=' text-white ml-10 pb-2'>Similar {media} Shows</div>
            <Mainshow show={media} data={data} type='similar' loading={loading} />
    </div>
  )
}

export default Simalar