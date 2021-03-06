import React, { useState, useEffect } from 'react'
import Header from '../../components/header'
import Select from '../../components/select';
import ToDoList from '../../components/toDoList';
import FormModal from '../../components/modal';
import taskRequest from '../../requests/taskRequest';
import genreRequest from '../../requests/genreRequest';
import { useDataReducer } from "../../hooks/useDataReducer"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./style.css"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, dispatch] = useDataReducer();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false)
  };

  useEffect(() => {
    const fetchData = async () => {
      const genres = await genreRequest('fetchGenres')
      const tasks = await taskRequest('fetchTasks')
      dispatch({ type: "genresUpdate", payload: {genre: genres}})
      dispatch({ type: "tasksUpdate", payload: {task: tasks}})
      
    }
    fetchData()
  },[])

  useEffect(() => {
    console.log(data)
  },[data])

  return (
      <div className="main">
          <Header />
          <div className="genre">
            <Select genres={data.genresData} />
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
            <ToDoList tasks={data.tasksData}/>
          </div>
      </div>
  )
}

export default Home
