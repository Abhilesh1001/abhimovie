import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Login from './login/Login'
import NewCOmponent from './NewCOmponent'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getQuery } from '../../features/home/homeSlice'
import { useSelector } from 'react-redux'
import { getShow } from '../../features/home/homeSlice'
import useWindowWidth from '../../hooks/useWindowWidth'
import { getUser } from '../../features/userauthentication/userSlice'

const userDetails = localStorage.getItem('user')

const Navbar = () => {
  const { user } = useSelector((state) => state.user)
  const [isHovered, setIsHovered] = useState(false)
  const [query, setQuery] = useState('')
  const { show } = useSelector((state) => state.home)
  const [drop, setDrop] = useState("none")
  const navigate = useNavigate()
  const [display, setDisplay] = useState("none")
  const { width, height } = useWindowWidth()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getQuery(query))
    navigate('/search')
  }

  useEffect(() => {
    dispatch(getUser(JSON?.parse(userDetails)))
  }, [])

  // console.log(isHovered)

  const mobdismenu = () => {
    // console.log(display)
    setDisplay(`${display === "none" ? "flex" : "none"}`)
  }
  const handleLogout = () => {
    console.log('ok')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch(getUser(null))
  }
  const handleReset = () => {
    // console.log('ok')
    // console.log(drop)
    setDrop(`${drop === "none" ? "flex" : "none"}`)
  }

  const hanndleClickResetpassword = ()=>{
    console.log('ok')
  }


  return (
    <div>
      <div className=' bg-blue-800  text-white flex p-1 relative cursor-pointer'>
        <Link to={'/'} className='after:content-["BESTMOVIEAPP"] after:text-red-400 after:flex after:flex-col after:text-sm text-lg pl-5'>ABHIMOVIES</Link>
        {/* Navshrin */}
        <ul className='flex  flex-wrap justify-center items-center relative navshrink'>
          <Link to={'/'} className='mx-2  hover:bg-blue-200 p-2 rounded hover:text-black'>Home</Link>
          <Link to={'/tvshows'} className='mx-2 hover:bg-blue-200 p-2 rounded hover:text-black' onClick={() => dispatch(getShow('tv'))}>TV-SHOWS</Link>
          <Link to={'/movieshows'} className='mx-2  hover:bg-blue-200 p-2 rounded hover:text-black' onClick={() => dispatch(getShow('movie'))}>MOVIES</Link>
          <li className='mx-2  hover:bg-blue-200 p-2 rounded hover-container hover:text-black' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {show.charAt(0).toUpperCase() + show.slice(1)} GENRES</li>

          {isHovered && <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><NewCOmponent /></div>}
        </ul>


        {/* for mobile view */}
        <ul className='flex pl-[50px] flex-wrap flex-col justify-start  absolute top-[55px] z-20 bg-blue-800 w-[250px]  mobileView' style={{ display: `${width > 1000 ? "none" : display}` }} >
          <Link to={'/'} className='mx-2  hover:bg-blue-200 p-2 rounded hover:text-black'>Home</Link>
          <Link to={'/tvshows'} className='mx-2 hover:bg-blue-200 p-2 rounded hover:text-black' onClick={() => dispatch(getShow('tv'))}>TV-SHOWS</Link>
          <Link to={'/movieshows'} className='mx-2  hover:bg-blue-200 p-2 rounded hover:text-black' onClick={() => dispatch(getShow('movie'))}>MOVIES</Link>
          <li className='mx-2  hover:bg-blue-200 p-2 rounded hover-container hover:text-black' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {show.charAt(0).toUpperCase() + show.slice(1)} GENRES</li>


          {/* search menubar mobile menu */}

          <div className={`mobilemenubar pl-[50px] absolute bg-blue-800 right-[0px] top-[160px]`} style={{ display: `${display}` }}>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <input type="text" className='rounded-lg w-30 h-10 space-x-40 m-auto p-2 text-black' onChange={(e) => setQuery(e.target.value)} />
              <div><button type='submit' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black' >Search</button></div>

              {user === null ? <div className='flex flex-col'><Link to={'/login'}><button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black'>Login</button></Link>
                <Link to={'/signup'}><button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black'>Signup</button></Link></div> : <div><div className='ml-4'>{user.name}</div><button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black' onClick={handleLogout} >Logout</button><div></div></div>}
            </form>

          </div>
          {isHovered && <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><NewCOmponent /></div>}
        </ul>
        {/* search bar desktop  */}

        <div className='marginleftall'>
          <form onSubmit={handleSubmit} className='flex'>
            <input type="text" className='rounded-lg w-30 h-10 space-x-40 m-auto p-2 text-black' onChange={(e) => setQuery(e.target.value)} />
            <button type='submit' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black' >Search</button>


            {user === null ? <div className='flex'><button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black'><Link to={'/login'}>Login</Link></button> <button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black'><Link to={'/signup'}>Signup</Link></button></div> : <div className='flex items-center'><div>{user?.name} <i className="ri-arrow-drop-down-line relative" onClick={handleReset}> <div className=' bg-blue-500 w-[149px] p-2 flex justify-center rounded absolute right-[-20px] top-[40px]' style={{ display: `${drop}` }} onClick={hanndleClickResetpassword}>Password Reset</div></i></div> <div><button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black' onClick={handleLogout} >Logout</button></div></div>}


          </form>
        </div>
        <div className='w-[40px] h-[35px] bg-blue-500 absolute p-2 right-[80px] top-[13px] rounded sm:right-[30px] md:right-[20px] menubar' onClick={mobdismenu}>
          <div className='flex justify-center menubar mt-1' >
            <div className='h-[2px] w-[20px] bg-white absolute mt-2'></div>
            <div className='h-[2px] w-[20px] bg-white absolute '></div>
            <div className='h-[2px] w-[20px] bg-white absolute mt-1'></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar