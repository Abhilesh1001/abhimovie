import React from 'react'
import './search.css'
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Mainshow from '../mainshowcontent/Mainshow'


const Search = () => {

  const {query} = useSelector((state)=>state.home)
  const {data:maindata,loading} = useFetch(`/search/multi?query=${query}`)
  console.log(maindata)
  return (
    <div className=' bg-blue-200 bgset  pl-10 pr-10 relative top-[50px] md:top-[55px]'>
      <button className=' bg-blue-500 p-2 relative top-4 rounded hover:bg-white hover:text-black cursor-pointer'>Multi Shows</button>
      <div className='mt-4'>
      <Mainshow show='tv' data ={maindata} loading={loading}  />
      </div>
      <div className='w-[10px] h-[25px]'>
        
      </div>
    </div>
  )
}

export default Search