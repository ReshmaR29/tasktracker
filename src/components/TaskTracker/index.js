import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TaskItem from '../TaskItem'
import { CiCirclePlus } from "react-icons/ci";
import './index.css'

const TaskTracker = () => {
   const [taskList, setTaskList] = useState([])
   const [title, setTitle] = useState('')
   const onChangeTitle = event => setTitle(event.target.value)
   const addTask = () => {
      const newTask ={
         id: uuidv4(),
         title: title,
         strike: false
      }
      setTaskList(prevState => [newTask, ...prevState])
      setTitle('')
   }
   const deleteTask = id => {
      setTaskList(prevState => prevState.filter(each => each.id !== id))
   }
   const strikeTask = id => {
     
      setTaskList(prevState => prevState.map(each => {
         if(each.id === id){
          return({
            ...each,
            strike: !each.strike
          })
         }
         else{
            return each
         }
      })
   )  
   }
   return(
    <div className='bg-container'>
        <div className='app-container'>
           <h1 className='heading'>Task Tracker</h1>
           <div className='input-and-button-container'>
            <input type="text" className='input-box' value={title} onChange={onChangeTitle} placeholder='Enter the Task...'/>
            <button type="button" className='button' onClick={addTask}>
               <div className='btn-txt'>
               <CiCirclePlus className='add-icon'/>
              <p className='text'> Add Task </p></div>
               </button>
              
           </div>
           <ul className='list-container'>
            {taskList.map(each => <TaskItem key={each.id} taskDetails={each} deleteTask={deleteTask} strikeTask={strikeTask}/>)}
           </ul>
        </div>
    </div>
   )
}

export default TaskTracker