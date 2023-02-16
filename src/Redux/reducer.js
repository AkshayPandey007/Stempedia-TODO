import { ADD_TODOS_SUCCESS, DELETE_TODO_SUCCESS } from "./action.type"

const initialState={
    todos:[],
}

export const reducer = (state=initialState , action)=>{

    const{type,payload} = action
    switch(type)
    {
        

        case ADD_TODOS_SUCCESS:{
           return {...state,todos:[...state.todos,payload]}
    }



        default:
           return state
    }
}