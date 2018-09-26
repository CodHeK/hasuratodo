import React, { Component } from 'react';
import { Query } from "react-apollo";
import { FetchAllQuery, AddTodoQuery } from '../queries/Queries';
import { Mutation } from "react-apollo";
import '../App.css';

class AddTodo extends Component {
  addnewTodo(addTodo, e) {
    if(e.which === 13) {
      addTodo({
        variables: { todo_name: e.target.value },
        refetchQueries: [{ query: FetchAllQuery }]
      });
    }
  }
  render () {
    return (
      <Mutation mutation={AddTodoQuery}>
        {
          (addTodo, { data }) => (
            <div>
              <input type="text" className="form-control inp-todo" placeholder="add your todo..." onKeyPress={this.addnewTodo.bind(this, addTodo)} />
            </div>
          )
        }
      </Mutation>
    );
  }
}

export default AddTodo;
