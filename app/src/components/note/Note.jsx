import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdDelete, MdOutlineCheckBox,MdOutlineEditCalendar} from 'react-icons/md'

import './note.css'
function Note() {

  //tasks
  const [toDo, setTodo] = useState([
  ]);

  //temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //add task
  const addTask = () => {
    if(newTask){
      let num= toDo.length +1;
      let newEntry ={id: num, title: newTask, status: false}
      setTodo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  //delete task
  const deleteTask = (id) => {
    let newTasks =toDo.filter(task => task.id != id)
    setTodo(newTasks);
  }

  //mark task completed 
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if(task.id === id){
        return ({...task, status: !task.status})
      }
      return task;
    })
    setTodo(newTask);
  }

  //cancel update 
  const cancelUpdate = () => {
    setUpdateData('');
  }

  //Change task for update
  const changeTask = (e) => {
    let newEntry={
      id:updateData.id,
      title: e.target.value,
      status:updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //update task
  const updateTask = () => {
    let filterRecords= [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject= [...filterRecords, updateData]
    setTodo(updatedObject);
    setUpdateData('');
  }
  return (
    <div className='container App'>
      <br/><br/>
      <h2>Todo App</h2>
      <br/><br/>

      {/*update task*/}
      {updateData && updateData ? (
        <>
        <div className='row'>
            <div className='col'>
              <input 
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
              className='form control form-control-lg' />
            </div>
            <div className='col-auto'>
              <button
              onClick={updateTask}
              className='btn btn-lg btn-success mr-20'>Update</button>
              <button 
              onClick={cancelUpdate}
              className='btn btn-lg btn-warning'>Cancel</button>
            </div>
      </div>
      <br/>
        </>
      ) : (
        <div className='row'>
          <div className='col'>
            <input  
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='form control form-control-lg'/>
          </div>
          <div className='col-auto'>
            <button 
            onClick={addTask}
            className='btn btn-lg btn-success'>
              Add Task
            </button>          
          </div>
      </div>
      )}
      

      {/*Display ToDos */}
      {toDo && toDo.length ?'': 'No Tasks...'}

      {toDo && toDo
        .sort((a,b) => a.id> b.id ? 1 : -1)
        .map((task,index) => {
          return(
            <React.Fragment key={task.id}>

            <div className='col taskBg'>
              <div className={task.status ? 'done' :''}>
                <span className='taskNumber'>{index +1}</span>
                <span className='taskText'>{task.title}</span>
              </div>
              <div className='iconsWrap'>
                <span title='done' onClick={(e) => markDone(task.id)}>
                  <MdOutlineCheckBox className='check'/>
                </span>

                {task.status ? null : (
                  <span title='edit'
                  onClick={() => setUpdateData({
                    id : task.id,
                    title: task.title,
                    status: task.status ? true: false })}>
                  <MdOutlineEditCalendar className='edit' />
                  </span>
                )}
                
                <span title='delete' onClick={() => deleteTask(task.id)}>
                  <MdDelete className='delete'/>
                </span>
              </div>
            </div>
              
            </React.Fragment>
          )
        }
      )}
    </div>
  )
}

export default Note
