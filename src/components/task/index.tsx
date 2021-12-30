import React from 'react'
import Select from '../select'
import "./style.css"

const Task = () => {
  return (
    <div className="task" style={{ backgroundColor: "white" }}>
      <span className="task_date">2020-11-28</span>
      <div className="task_text_contents">
        <h3 className="task_title">タイトル</h3>
        <p className="task_sentence">内容</p>
      </div>
      <div className="task_input_contents">
        <Select />
      </div>
    </div>
  )
}

export default Task
