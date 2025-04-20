import { MdOutlineDeleteOutline } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import './index.css'

const TaskItem = props => {
    const {taskDetails, deleteTask, strikeTask} = props 
    const {id, title, strike} = taskDetails
     return(
        <li className="task-item">
            <div className="title-and-checkmark-container">
            <TiTickOutline className="checkmark" onClick={()=> strikeTask(id)}/>
            <h5 className={strike?"title strike":"title"}>{title}</h5>
            </div>
            <MdOutlineDeleteOutline onClick={()=> deleteTask(id)} className="delete-icon"/>
        </li>
     )
}

export default TaskItem