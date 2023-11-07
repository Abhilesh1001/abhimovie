import React, { useEffect } from 'react'
import Header from './component/header/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './component/home/Home'
import Login from './component/header/login/Login'
import Footer from './component/footer/Footer'
import {useDispatch} from 'react-redux'
import { fetchDataFromApi } from './utils/api'
import {getApiConfiguration} from './features/home/homeSlice'
import Signup from './component/header/signup/Signup'
import Search from './component/search/Search'
import Playcom from './component/playcomponent/Playcom'
import Tvmovies from './component/tvshows/Tvmovies'
import MovieShow from './component/tvshows/MovieShow'
import {getGeneres} from './features/home/homeSlice'
import Genre from './component/genre/Genre'
import PasswordReset from './component/header/forgetpassword/PasswordReset'
import ResetForgetPassword from './component/header/forgetpassword/ResetForgetPassword'
import ResetPasswordWithUidToken from './component/header/forgetpassword/ResetPasswordWithUidToken'



const MainAapp = () => {
  const dispatch = useDispatch()
  

  useEffect(()=>{
    fetApiConfi()
    movitvcall()
  },[])

  const fetApiConfi =()=>{
     fetchDataFromApi("/configuration")
     .then((res)=>{
      const url = {
        backdrop : res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
     })
  }

  // genre dispatch 
  const movitvcall = async ()=>{
    let promises = []
    let endPoint = ['tv','movie']
    let allGeneres = {}

    endPoint.forEach((show)=>{
      promises.push(fetchDataFromApi(`/genre/${show}/list`))
    })
    const data = await Promise.all(promises)
    // console.log(data)
    const newdata=data.map(({genres})=>{
      return genres.map((item)=>(allGeneres[item.id]=item))
    })
   
    dispatch(getGeneres(allGeneres))
  }




  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/search' element={<Search />} />
    <Route path='/playcom/:mediaType/:id' element={<Playcom />} />
    <Route path='/tvshows' element={<Tvmovies />} />
    <Route path='/movieshows' element={<MovieShow />} />
    <Route path='/genre' element={<Genre />} />
    <Route path='/resetpassword' element={<PasswordReset />} />
    <Route path='/resetforgetpassword' element={<ResetForgetPassword />} />
    <Route exact path="resetpassworduidtoken/:id/:token" element={<ResetPasswordWithUidToken />} />
    {/* <Route exact path="resetpassworduidtoken" element={<ResetPasswordWithUidToken />} /> */}
      </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default MainAapp