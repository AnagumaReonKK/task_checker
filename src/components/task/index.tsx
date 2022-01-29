import React from 'react'
import Select from '../select'
import "./style.css"
import { TaskType } from '../../interfaces/TaskType'

interface Props {
  task: TaskType
}

const Task = (props: Props) => {
  return (
    <div className="task">
      <span className="task_date">{props.task.deadlineDate}</span>
      <div className="task_text_contents">
        <h3 className="task_title">{props.task.name}</h3>
        <p className="task_sentence">{props.task.explanation}</p>
      </div>
      <div className="task_input_contents">
        <Select />
      </div>
    </div>
  )
}

export default Task
