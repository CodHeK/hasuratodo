import React, { Component } from 'react';
import $ from 'jquery';
import { Mutation } from "react-apollo";
import { FetchAllQuery, MarkCompletedQuery, getCompletedQuery } from '../queries/Queries';
import '../App.css';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  completedTask(id, mark, e) {
    $("#" + id + " h3").css({ 'text-decoration': 'line-through'});
    console.log(id);
    mark({
      variables: { id: id },
      refetchQueries: [{ query: FetchAllQuery }, { query: getCompletedQuery }]
    })
  }

  render() {
    return (
      <Mutation mutation={MarkCompletedQuery}>
        {
          (mark, { data }) => (
            <div className="todos" onClick={this.completedTask.bind(this, this.props.data.id, mark)} id={this.props.data.id}>
              <i className="fas fa-times-circle cross"></i>
              <h3>{`${this.props.data.todo_name}`}</h3>
            </div>
          )
        }
      </Mutation>
    )
  }
}

export default Todo;
