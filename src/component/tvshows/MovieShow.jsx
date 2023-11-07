import React, { useState } from 'react'
import './style.css'
import Mainshow from '../mainshowcontent/Mainshow'
import useFetch from '../../hooks/useFetch'

const MovieShow = () => {
  const [page,setPage] = useState(1)
  const { data:maindata, loading } = useFetch(`/movie/popular?&page=${page}`)

  const pageNo = maindata?.total_pages-3
  // console.log('pageNo',page)
  const handlePrevious = ()=>{
    // console.log('Previous')
    setPage(Math.max(1,page-1))
  }
  const handleNext =()=>{
    // console.log('next')
    setPage(page +1)
  }
  const handlePage1 = (value)=>{
      //  console.log(value)
      setPage(parseInt(value))
  }


  return (
    <div className=' bg-blue-200 bgset relative top-[50px] xl:top-[60px] 2xl:pl-10 2xl:pr-10 xl:pl-6 xl:pr-6 lg:pl-4 lg:pr-4 md:pl-2 md:pr-2 pl-1 pr-1'>
      <button className=' bg-blue-500 p-2 relative top-4 rounded hover:bg-white hover:text-black cursor-pointer'>MovieShows</button>

      <div className='maincss'>
                <div className='flex'>  
                    <button className='box' onClick={handlePrevious}>Prev</button>
                    <div className='box' style={{backgroundColor:'green'}} onClick={(e)=>handlePage1(e.target.innerText)} >{page}</div>
                    <div className='box' onClick={(e)=>handlePage1(e.target.innerText)} >{page+1}</div>
                    <div className='box' onClick={(e)=>handlePage1(e.target.innerText)} >{page+2}</div>
                    <div className='box' >{pageNo}</div>
                    <button className='box' onClick={handleNext}>Next</button>
                </div>
      </div>
      <Mainshow show='movie' data ={maindata} loading={loading}  />
      <div className='maincss'>
                <div className='flex'>  
                    <button className='box' onClick={handlePrevious}>Prev</button>
                    <div className='box' style={{backgroundColor:'green'}}  onClick={(e)=>handlePage1(e.target.innerText)} >{page}</div>
                    <div className='box' onClick={(e)=>handlePage1(e.target.innerText)} >{page+1}</div>
                    <div className='box' onClick={(e)=>handlePage1(e.target.innerText)} >{page+2}</div>
                    <div className='box' >{Math.max(pageNo-10)}</div>
                    <button className='box' onClick={handleNext}>Next</button>
                </div>
      </div>
      
    </div>
  )
}

export default MovieShow