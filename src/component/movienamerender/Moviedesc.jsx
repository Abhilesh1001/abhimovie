import React from 'react'

const Moviedesc = ({title,desc,date,rating}) => {
  // console.log('title',title)
  return (
    
    <div style={{position:'relative',zIndex:'100'}} >
         <div className='absolute left-10 bg-white rounded p-2' style={{bottom:'-20px', width:'300px',border:'1px solid blue'}}>
            <div className='text-2xl text-blue-400'>{title}</div> 
            <div className=' bg-blue-50 p-1'><span className=' bg-yellow-300 p-1 rounded'>Rating : {rating}</span></div>
            <div>{desc?.slice(0,100)}.....</div>
            <div className=' bg-blue-50 p-1'><span className=' bg-yellow-300 p-1 rounded'>Relese Date : {date}</span></div>
            <button className='w-full bg-blue-500 p-2 my-2'>Watch</button>
         </div>
    </div>
  )
}

export default Moviedesc