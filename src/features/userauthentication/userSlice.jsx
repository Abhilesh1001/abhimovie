import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userslice',
  initialState: {
    user : null,
    // baseurl : 'https://abhilesh.pythonanywhere.com/' 
    baseurl : 'http://127.0.0.1:8000/'
  },
  reducers: {
    getUser : (state,action)=>{
        state.user = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { getUser } = userSlice.actions

export default userSlice.reducer