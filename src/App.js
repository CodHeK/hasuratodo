import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Todos from './components/Todos';
import './App.css';

const client = new ApolloClient({
  uri: "https://hasuratodo.herokuapp.com/v1alpha1/graphql",
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App container">
          <h1 className="title">todos</h1>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <input type="text" className="form-control inp-todo" placeholder="add your todo..." />
            <Todos />
          </div>
          <div className="col-md-2"></div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
