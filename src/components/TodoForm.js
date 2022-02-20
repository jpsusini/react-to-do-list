import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoForm = ({ addTodo }) => {
    const[todo, setTodo] = useState({
        id: uuidv4(),
        task: '',
        completed: false,
    });

    const handleTaskInputChange = e => {
        setTodo({...todo, task: e.target.value});
    }
    
    const [warning, setWarning] = useState(false);
    let warningMessage = warning && <Alert variant="outlined" severity="warning">Vous devez remplir le formulaire !</Alert>

    const handleSubmit = e => {
        e.preventDefault();
            if(todo.task !== '') {
                warning && setWarning(false);
                addTodo({...todo, id: uuidv4() });
                setTodo({...todo, task: '' }); // permet de vider le formulaire avec une chaîne de caractère vide
            }else if(todo.task === '') {
                setWarning(true);
            }
    }  
    
    return(
        <div>
         <form className='todo-form' onSubmit={handleSubmit} >
            <TextField
            color='success'
            size='small' 
            type='text'
            value={todo.task} 
            onChange={handleTaskInputChange} />
            
            <Button className='button' 
            variant="outlined"
            color='success'
            size='small' 
            type='submit'>Submit
            </Button>
         </form>
         {warningMessage}

        </div>
    ); 
}

export default TodoForm;