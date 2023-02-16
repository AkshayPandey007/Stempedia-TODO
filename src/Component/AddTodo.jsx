import React, { useState } from 'react'
import styles from "../Styles/AddTodo.module.css"
import {  useDispatch } from 'react-redux'
import { addTodoSuccess } from '../Redux/action'

const AddTodo = () => {
    const[todo,setTodo]=useState("")
    const dispatch = useDispatch()


    const handleChange=(e)=>{
        setTodo(e.target.value)
    }


    const handleAdd=()=>{
        dispatch(addTodoSuccess(
            {
                   title:todo,
                    id:todo.length+Date.now(),
                    status:false
            }
        ))
        setTodo("")
    }
  return (
    <div>
        <h1 style={{color:"blueviolet"}}>ADD TASK</h1>
        <div className={styles.InputBox}>
            <input type="text" placeholder='Type Anything...' value={todo} onChange={(e)=>handleChange(e)}/>
            <button onClick={handleAdd} className={styles.AddBtn}>ADD</button>
        </div>
    </div>
  )
}

export default AddTodo