import React from 'react';
import '../App.css';

const Todo = (props) => {
  <div className="todos">
    {`${props.data.todos_name} created on ${props.data.time}`}
  </div>
}

export default Todo;
