import React from 'react';
import loader from '../assets/puff.svg';
import '../App.css';

const TodoLoader = () => (
  <div className="todo-loader">
    <img src={loader} />
  </div>
)

export default TodoLoader;
