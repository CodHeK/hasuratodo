import React from 'react';
import '../App.css';

const Todo = (props) => (
  <div className="todos jumbotron">
    <h2>{`${props.data.todo_name}`}</h2>
    <h5>{`created on ${props.data.time}`}</h5>
  </div>
)

export default Todo;
