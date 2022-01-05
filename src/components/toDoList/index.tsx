import React, { useState } from 'react'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import MenuIcon from '@mui/icons-material/Menu'
import "./style.css"
import Task from '../task'
import FormModal from '../modal'

const ToDoList = () => {
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
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}

export default ToDoList
