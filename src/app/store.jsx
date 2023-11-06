import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import homeSlice from '../features/home/homeSlice'
import userSlice from '../features/userauthentication/userSlice'

export default configureStore({
    reducer : {
        counter : counterSlice,
        home : homeSlice,
        user : userSlice
    }
})