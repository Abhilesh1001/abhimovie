import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../../utils/api'
import {useSelector} from 'react-redux'
import Mainshow from '../mainshowcontent/Mainshow'
import ErrorBoundary from '../error/ErrorBoundary'


const Genre = () => {
  const [page,setPage] = useState(1)
  const {genreFilterId} = useSelector((state)=>state.home)
  const {show} = useSelector((state)=>state.home)
  const {genreType} = useSelector((state)=>state.home)
  const [maindata,setMaindata] = useState([])
  const [loading,setLoading] = useState(true)
  
  // console.log('filterid',genreFilterId)
   // with_genres
  //  console.log(page)

 useEffect(()=>{
  // console.log('iddetails',genreFilterId)
  fetchDataFromApi(`/discover/${show}?page=${page}`,{with_genres:genreFilterId}).then((res=>{
    setMaindata(res)
    setLoading(false)
    // console.log('res',res)
  }))
 },[genreFilterId,page])

 

 const pageNo = maindata?.total_pages-3
//  console.log('pageNo',page)
 const handlePrevious = ()=>{
  //  console.log('Previous')
   setPage(Math.max(1,page-1))
 }
 const handleNext =()=>{
  //  console.log('next')
   setPage(page +1)
 }
 const handlePage1 = (value)=>{
      // console.log(value)
     setPage(parseInt(value))
 }

  return (
    <div className='top-[50px] xl:top-[60px] relative bg-blue-200 bgset pl-10 pr-10'>
      <button className=' bg-blue-500 p-2 relative top-4 rounded hover:bg-white hover:text-black cursor-pointer text-lg uppercase'>{show} TAGGED WITH {genreType}</button>
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
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
       <Mainshow show='tv' data ={maindata} loading={loading}  />
      </ErrorBoundary>
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

export default Genre