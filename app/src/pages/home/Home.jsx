// src/pages/home/Home.js
import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'

function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  }, [])
  const [task, setTask] =useState()
  const handleAdd = () => {
    axios.post('http://localhost:3000/add', {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div className={styles.home}>
      <p>hello world!!</p>
      <h2>Todo</h2>
      <div>
        <input type='text' placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>
        <button type='button' onClick={handleAdd}> Add</button>
      </div>
      {
        todos.length === 0
        ?
        <div><h2> No Record</h2></div>
        :
        todos.map(todo => (
          <div className={styles.task}>
            {todo.task}
          </ div>
        ))
      }
    </div>
  )
}

export default Home
