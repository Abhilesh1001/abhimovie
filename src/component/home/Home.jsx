import React, { useEffect, useState } from 'react'
import './home.css'
import Moviedis from './moviedisplay/Moviedis'
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux'

const Home = () => {
  const { data, } = useFetch("/movie/upcoming")
  const [background, setBackground] = useState("")
  const [backgroundImg, setNBackgroundImg] = useState([])
  const [currentBackground, setCurrentBackground] = useState(null)

  const { url } = useSelector((state) => state.home)
  // console.log(currentBackground)
  const [desc, setDesc] = useState("")
  const [title, setTitle] = useState('')
  const [relsease, setRelse] = useState('')
  const [rating, setRating] = useState('')


  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImg.length);
    return backgroundImg[randomIndex];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomBackground = getRandomBackground();
      setCurrentBackground(randomBackground);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentBackground]);


  useEffect(() => {

    const bgData = data?.results[Math.floor(Math.random() * 20)]
    const bg = url.backdrop + bgData?.backdrop_path
    setNBackgroundImg(data?.results?.slice(0, 10))
    setBackground(bg)
    setTitle(bgData?.title)
    setDesc(bgData?.overview)
    setRelse(bgData?.release_date)
    setRating(bgData?.vote_average)
  }, [data])





  return (
    <div className='backgroundcolor top-[50px] xl:top-[60px] pb-2'>
      <div className="container1  bg-slate-200 relative rounded cursor-pointer" style={{ backgroundImage: `url(${currentBackground === null || currentBackground === undefined ? background : url?.backdrop + currentBackground?.backdrop_path})`, backgroundSize: 'cover', transition: 'background-image 2s ease-in-out' }}>
        <div className='w-80 h-full opacity-80 p-0 bg-cover' >
          <div className='mydiv'>
            <div className=' bg-slate-500 p-2'>
              <div className='contaier text-4xl p-4 font-bold text-white'>
                {currentBackground === null || currentBackground === undefined ? title : currentBackground?.title}
              </div>
              <div className='text-white text-xl'>
                {currentBackground === null || currentBackground === undefined ? desc : currentBackground?.overview
                }
              </div>
              <div className='bg-slate-600 w-60 h-17 m-2 p-2 text-white'>
                <div>Realease : {currentBackground === null || currentBackground === undefined ? relsease : currentBackground?.release_date} </div>
                <div>Rating : {currentBackground === null || currentBackground === undefined ? rating :Math.round( currentBackground?.vote_average)}</div>
              </div>
              <div className='m-2 h-2'>

              </div>
            </div>


          </div>

        </div>


      </div>
      <div className='flex justify-center items-center text-white ml-10 text-2xl font-extrabold'>ABHIMOVIES - WATCH FREE MOVIES ONLNE</div>
      <div>
        <div >
          <Moviedis />
        </div>
        <div className='h-4'>

        </div>
      </div>
    </div>
  )
}

export default Home