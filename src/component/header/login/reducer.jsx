
export const initialState ={
    email : '',
    password : ''
  }

  
export const reducer = (state,action)=>{

    
    switch(action.type){
      case 'EMAIL':
        return {
          ...state,
          email : action.value
        }
      case 'PASSWORD':
        return {
          ...state,
          password : action.value
        }
    }

}