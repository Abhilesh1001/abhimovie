import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import homeSlice from '../features/home/homeSlice'

export default configureStore({
    reducer : {
        counter : counterSlice,
        home : homeSlice
    }
})