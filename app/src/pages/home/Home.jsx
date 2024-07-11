// src/pages/home/Home.js
import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';

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
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }

const handleEdit = (id) => {
  axios.put('http://localhost:3000/update/'+id)
  .then(result => {
    location.reload()
  })
  .catch(err => console.log(err))
}

const handleDelete = (id) => {
  axios.delete('http://localhost:3000/delete/'+id)
  .then(result => {
    location.reload()
  })
  .catch(err => console.log(err))
}

  return (
    <div className={styles.home}>
      <h1>Add a todo to get started</h1>
      <div>
        <input type='text' placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>
        <button type='button' onClick={handleAdd}> New Todo</button>
      </div>
      {
        todos.length === 0
        ?
        <div><h2> No Record</h2></div>
        :
        todos.map(todo => (
          <div className={styles.task}>
            <div className={styles.CheckBox} onClick={() =>handleEdit(todo._id)}>
              {todo.done ? 
              <CheckBoxIcon className={styles.icon}></CheckBoxIcon>
              :  <CheckBoxOutlineBlankIcon className={styles.icon} />
              }
              <p className={todo.done ? styles.line_through : ""}>{todo.task}</p>
            </div>
            <div>
              <span><DeleteIcon className={styles.icon} 
                  onClick={() => handleDelete(todo._id)}/></span>
            </div>
          </ div>
        ))
      }
    </div>
  )
}

export default Home
