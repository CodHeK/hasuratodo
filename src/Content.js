import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import CompletedTodos from './components/CompletedTodos';
import Navbar from './components/Navbar';
import './App.css';

const client = new ApolloClient({
  uri: "https://hasuratodo.herokuapp.com/v1alpha1/graphql",
})


class Content extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      isAuthenticated() && (
      <ApolloProvider client={client}>
        <div className="App container-fluid">

          <h1 className="title">todos</h1>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <AddTodo />
            <Todos />
            <CompletedTodos />
          </div>
          <div className="col-md-2"></div>
        </div>
      </ApolloProvider>
      )
    );
  }
}

export default Content;
