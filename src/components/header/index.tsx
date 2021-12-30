import React from 'react'
import DoneAllIcons from '@mui/icons-material/DoneAll';
import "./style.css"

const Header = () => {
  return (
    <div className="header">
      <DoneAllIcons className="header_icon" fontSize="large"></DoneAllIcons>
      <span className="header_title">Task Checker</span>
    </div>
  )
}

export default Header
