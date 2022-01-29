import React, { useState } from 'react'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import MenuIcon from '@mui/icons-material/Menu'
import "./style.css"
import Task from '../task'
import FormModal from '../modal'
import { TaskType } from "../../interfaces/TaskType" 

interface Props {
  tasks: TaskType[]
}

const ToDoList = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className="task_list">
      <div className="section">
        <MenuIcon className="section_ele" fontSize="small"/>
        <span className="section_ele">ToDo</span>
        <AddCircleOutline 
          className="add_circle_outline_icon" 
          fontSize="small"
          onClick={handleOpen}
        />
      </div>
      <FormModal
        handleClose={handleClose}
        isOpen={isOpen}
        body="taskBody"
      />
      <div className="task_field">
        {props.tasks.map((task: TaskType) => {
          return <Task task={task} key={task.id} />
        })}
      </div>
    </div>
  )
}

export default ToDoList
