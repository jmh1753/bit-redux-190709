import React from 'react';
import '../assets/css/App.css';
import Footer from './Footer.jsx';
import AddTodo from '../containers/AddTodo.jsx';
import TodoList from '../containers/TodoList.jsx'

const App=()=> (
    <div className="App">
      <AddTodo/>
      <TodoList/>
      <Footer/>
    </div>
  );

export default App;
