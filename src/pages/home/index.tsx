import React, { useState } from 'react'
import Header from '../../components/header'
import "./style.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Select from '../../components/select';
import ToDoList from '../../components/toDoList';
import FormModal from '../../components/modal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false)
  };

  return (
      <div className="main">
          <Header />
          <div className="genre">
            <Select />
            <AddCircleOutlineIcon 
              className="add_circle_outline_icon" 
              fontSize="small"
              onClick={handleOpen}               
            />
            <FormModal 
              handleClose={handleClose} 
              isOpen={isOpen}
              body="genreBody" 
            />
          </div>
          <div className="contents">
            <ToDoList />
          </div>
      </div>
  )
}

export default Home
