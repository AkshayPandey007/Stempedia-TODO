import {  ADD_TODOS_SUCCESS, DELETE_TODO_SUCCESS } from "./action.type"



 

export const  addTodoSuccess = (payload)=> {
    return {
        type:ADD_TODOS_SUCCESS,payload
    }
}

