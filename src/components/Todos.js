import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Todo from './Todo';
import '../App.css';

const Todos = () => (
  <Query
    query={gql`
      {
        todos {
          id
          todo_name
          time
          completed
        }
      }
    `}
  >
  {
    ({ loading, error, data }) => {
      if(loading)
        return <p className="todo-list">Loading...</p>;
      if(error)
        return <p className="todo-list">Error </p>;

      return data.todos.map((todo) => (
        <div key={todo.id} className="todo-list">
          <Todo data={todo} />
        </div>
      ))
    }
  }
  </Query>
);

export default Todos;
