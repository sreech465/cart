import React from 'react';
import './App.css';
import TodoForm from './components.js/TodoForm';
import TodoList from './components.js/TodoList';

function App() {
  return (
    <div className='todo-app'>

       <TodoForm />
      <TodoList />
     
    </div>
  );
}

export default App;
