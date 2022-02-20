import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import StaticTimePickerLandscape from './components/StaticTimePickerLandscape';
import './App.css';

const local_Storage_key = "react-todo-list";

const App = () => {
  const [todos, setTodos] = useState([]);


  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const toggleComplete = (id) => {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed 
            };
          }
          return todo;
        })
      )
  }

    function removeTodo(id) {
      setTodos(todos.filter(remove => remove.id !== id));
    }

    //json parse and local storage side effect 
    useEffect(() => {
      const storageTodos = JSON.parse(localStorage.getItem(local_Storage_key));
        if (storageTodos) {
          setTodos(storageTodos);
        }
    }, []);
    
    useEffect(() => {
      localStorage.setItem(local_Storage_key, JSON.stringify(todos));
    }, [todos]);
    
    
    return (
      <div className="App" >
        <main className='main-container' >
          <StaticTimePickerLandscape />
            <h1>Todo List</h1>
              <TodoForm 
              addTodo={addTodo} />
                <TodoList 
                  todos={todos}
                  removeTodo={removeTodo} 
                  toggleComplete={toggleComplete} />
        </main>
      </div>
  );
}

export default App;
