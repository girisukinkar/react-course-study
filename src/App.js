import React, { useState, useRef, useEffect } from 'react';
import Todos from './components/Todos';

const LOCAL_STORAGE_KEY = 'todoApp.todos';
function App() {

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos)

    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);


  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete
    setTodos(newTodos);
  }


  function handleAddTodo(e) {

    const name = todoNameRef.current.value;
    if (name === '') {
      return
    }

    setTodos(prevTodos => {
      return [...prevTodos, { id: Math.floor(Math.random() * 1000) + 1, name: name, complete: false }]
    })


    console.log(name);
    todoNameRef.current.value = null;

  }


  function clearCompletedTodos(){

    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }


  return (
    <>
      <Todos todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add Todo</button>
      <button onClick={clearCompletedTodos}> Clear Completed Todos</button>
      <div> {(todos.filter(todo => !todo.complete).length)} left todo</div>
    </>
  )
}

export default App;
