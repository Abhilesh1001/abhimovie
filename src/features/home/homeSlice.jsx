import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url : {},
    genres : {},
    index : 0,
    productData : {},
    query :''
  },
  reducers: {
    getApiConfiguration : (state,action)=>{
        state.url = action.payload
    },
    getGeneres :(state,action)=>{
        state.genres = action.payload
    },
    getIndex :(state,action)=>{
      state.index = action.payload
    },
    getProductData :(state,action)=>{
      state.productData = action.payload
    },
    getQuery : (state,action)=>{
      state.query = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGeneres,getIndex,getProductData,getQuery } = homeSlice.actions

export default homeSlice.reducer