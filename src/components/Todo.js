import React from 'react';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { ListItem, Typography } from "@material-ui/core";


const Todo = ({ todo, removeTodo, toggleComplete }) => {
    function handleIconClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }
 
    return (
     <ListItem className='list-item'>
            {todo.completed ? <CheckCircleIcon color={'success'} onClick={handleIconClick} /> : 
            <CircleOutlinedIcon  onClick={handleIconClick}/>}
                <Typography
                style={{
                    textDecoration: todo.completed ? 'line-through' : null
                    }}
                    >
                    {todo.task}
                </Typography>
            <DeleteOutlinedIcon className='delete-icon' onClick={handleRemoveClick}
            sx={{
                "&:hover": {
                    color: "green",
                    cursor: "default"
                    } 
            }}
            />
    </ListItem>
 );
}

export default Todo;