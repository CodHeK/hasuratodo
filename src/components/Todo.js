import React from 'react';
import '../App.css';

const Todo = (props) => (
  <div className="todos">
    <i className="fas fa-times-circle cross"></i>
    <h3>{`${props.data.todo_name}`}</h3>
  </div>
)

export default Todo;
