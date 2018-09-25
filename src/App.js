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
          <h1>Add your todos</h1>
          <Todos />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
