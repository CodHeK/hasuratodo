import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Todo from './Todo';
import '../App.css';

const Todos = () => (
  <Query
    query={gql`
      query fetchTodoQuery {
        todos {
          id
          todos_name
          time
        }
      }
    `}
  >
  {
    ({ loading, error, data }) => {
      if(loading)
        return <p>Loading...</p>;
      if(error)
        return <p>Error </p>;

      return data.todos.map((todo) => (
        <div key={todo.id}>
          <Todo data={todo} />
        </div>
      ))
    }
  }
  </Query>
);

export default Todos;
