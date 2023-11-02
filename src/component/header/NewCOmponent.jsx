import React from 'react'
import './new.css'
import useFetch from '../../hooks/useFetch';
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router'
import {getGenreFilterId,getGereType} from '../../features/home/homeSlice'


const NewCOmponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {show} = useSelector((state)=>state.home)
  const { data: genresData } = useFetch(`/genre/${show}/list`);
  const handleClick = (itemid,name)=>{
    dispatch(getGenreFilterId(itemid.toString()))
    dispatch(getGereType(name))
    navigate('/genre')
  }

  return (
    <>
    <div className='newComponent p-2 flex'>
        <div className='flex-col flex-wrap'>
          
          {
            genresData?.genres?.map((item,index)=>{
              // console.log(item)
              return <div key={index} onClick={(e)=>handleClick(item.id,item.name)} className='ml-2'>{item.name}</div>
            })
          }

        </div>
    </div>
    </>
  )
}

export default NewCOmponent