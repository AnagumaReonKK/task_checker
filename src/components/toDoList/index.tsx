import React from 'react'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import MenuIcon from '@mui/icons-material/Menu'
import "./style.css"
import Task from '../task'

const ToDoList = () => {
  return (
    <div className="task_list">
      <div className="section">
        <MenuIcon className="section_ele" fontSize="small"/>
        <span className="section_ele">ToDo</span>
        <AddCircleOutline className="add_circle_outline_icon" fontSize="small"/>
      </div>
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
