import React from 'react'
import Header from '../../components/header'
import "./style.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Select from '../../components/select';
import ToDoList from '../../components/toDoList';

const Home = () => {
    return (
        <div className="main">
            <Header />
            <div className="genre">
              <Select />
              <AddCircleOutlineIcon className="add_circle_outline_icon" fontSize="small" />
            </div>
            <div className="contents">
              <ToDoList />
            </div>
        </div>
    )
}

export default Home
