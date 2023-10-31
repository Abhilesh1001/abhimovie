import React from 'react'
import {useSelector} from 'react-redux'

const TopCast = ({crewDetails}) => {
    const { url } = useSelector((state) => state.home)
  return (
    <div className='bg-blue-600 text-white flex flex-wrap pl-10 pb-4 mt-4'>
    <div>
    <div>Top Cast</div>
    
    <div className='flex flex-wrap'>
    {crewDetails?.map((crew,index)=>{
    //  console.log('crew',crew)
     const Image = url?.backdrop + crew?.profile_path
    //  console.log(Image)
     return <div key={index} className='ml-10'>  
         <div className='w-20 h-24 rounded  bg-black'>
             <img src={`${Image}`} className='w-20 h-24 rounded' alt="" />
         </div>
         {crew?.name}
      </div>
             
    })}
    </div>
    
     
     </div> 
    
</div>
  )
}

export default TopCast