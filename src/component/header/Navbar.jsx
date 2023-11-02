import React,{useState} from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import Login from './login/Login'
import NewCOmponent from './NewCOmponent'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {getQuery} from '../../features/home/homeSlice'
import {useSelector} from 'react-redux'
import {getShow} from '../../features/home/homeSlice'




const Navbar = () => {
  const [isHovered,setIsHovered] = useState(false)
  const [query,setQuery] = useState('')
 const {show} = useSelector((state)=>state.home)
  const navigate = useNavigate()
  const [display,setDisplay] = useState("none")
  // console.log(display)
  // console.log(query)
  const dispatch =useDispatch()
  const handleSubmit=(e)=>{
    // console.log('ok')
    e.preventDefault()
    // console.log(query)
    dispatch(getQuery(query))
    navigate('/search')
  }
  // console.log(isHovered)

  const mobdismenu =()=>{
    // console.log(display)
    setDisplay(`${display==="none"?"flex":"none"}`)
  }

  return (
    <div>
        <div className=' bg-blue-800  text-white flex p-1 relative cursor-pointer'>          
        <div className='after:content-["BESTMOVIEAPP"] after:text-red-400 after:flex after:flex-col after:text-sm text-lg'>ABHIMOVIES</div>
        {/* Navshrin */}
        <ul className='flex  flex-wrap justify-center items-center relative navshrink'>
            <Link to={'/'} className='mx-2  hover:bg-blue-200 p-2 rounded hover:text-black'>Home</Link>
            <Link to={'/tvshows'} className='mx-2 hover:bg-blue-200 p-2 rounded hover:text-black' onClick={()=>dispatch(getShow('tv'))}>TV-SHOWS</Link>
            <Link to={'/movieshows'} className='mx-2  hover:bg-blue-200 p-2 rounded hover:text-black' onClick={()=>dispatch(getShow('movie'))}>MOVIES</Link>
            <li className='mx-2  hover:bg-blue-200 p-2 rounded hover-container hover:text-black' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
               {show.charAt(0).toUpperCase() + show.slice(1)} GENRES</li>
              { isHovered && <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}><NewCOmponent /></div>}
        </ul>


        {/* for mobile view */}
        <ul className='flex flex-wrap flex-col justify-center items-center absolute top-[55px] z-20 bg-blue-800 w-[200px]  mobileView' style={{display:`${display}`}} >
            <Link to={'/'} className='mx-2  hover:bg-blue-200 p-2 rounded hover:text-black'>Home</Link>
            <Link to={'/tvshows'}  className='mx-2 hover:bg-blue-200 p-2 rounded hover:text-black'>TV-SHOWS</Link>
            <Link to={'/movieshows'} className='mx-2  hover:bg-blue-200 p-2 rounded hover:text-black'>MOVIES</Link>
            <li className='mx-2  hover:bg-blue-200 p-2 rounded hover-container hover:text-black' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            {show.charAt(0).toUpperCase() + show.slice(1)} GENRES</li>
              { isHovered && <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}><NewCOmponent /></div>}
        </ul>


        {/* search bar  */}

         <div className='marginleftall'>
        <form onSubmit={handleSubmit}>
         <input type="text" className='rounded-lg w-30 h-10 space-x-40 m-auto p-2 text-black' onChange={(e)=>setQuery(e.target.value)}/>
          <button type='submit' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black' >Search</button>
          <button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black'><Link to={'/login'}>Login</Link></button>
          <button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black'><Link to={'/signup'}>Signup</Link></button>
          </form>
         </div>

          {/* search menubar mobile menu */}

          <div className={`mobilemenubar z-20 absolute bg-blue-800  top-[210px]`} style={{display:`${display}`}}>
        <form className='flex flex-col' onSubmit={handleSubmit}>
         <input type="text" className='rounded-lg w-30 h-10 space-x-40 m-auto p-2 text-black' onChange={(e)=>setQuery(e.target.value)}/>
        <div><button type='submit' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black' >Search</button></div>

        <Link to={'/login'}><button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black'>Login</button></Link>
          <Link to={'/signup'}><button type='button' className='bg-blue-500 m-2 p-2 rounded hover:bg-slate-100 hover:text-black'>Signup</button></Link>
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