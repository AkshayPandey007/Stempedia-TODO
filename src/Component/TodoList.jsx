import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../Styles/TodoList.module.css"


const TodoList = () => {
    const todosList = useSelector((store)=>store.todos)

   
  return (
    <div className={styles.ListBox}>
        {todosList.map((el)=>(
            <div key={el.id} className={styles.ListEachBox}>
            <p style={{color:'blueviolet'}}>{el.title}</p>
            </div>
        ))}
    </div>
  )
}

export default TodoList