export const intialtState ={
    name : '',
    email : '',
    password :'',
    password2 : '',
    tc : false,
}

export const reducer =(state,action)=> {

    switch(action.type){
        case 'NAME':
            return {
                ...state,
                name : action.value
            }
        case "EMAIL":
            return {
                ...state,
                email : action.value
            }
        case "PASSWORD":
            return {
                ...state,
                password : action.value

            }
        case "PASSWORD2":
            return {
                ...state,
                password2 : action.value
            }
        case "CHECKED":
            return {
                ...state,
                tc : action.value
            }
    }
}