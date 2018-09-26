import gql from "graphql-tag";

export const FetchAllQuery = gql`
  {
    todos (
      where: { completed: { _eq: false }},
      order_by: id_desc
    ) {
      id
      todo_name
      completed
    }
  }
`;

export const AddTodoQuery = gql`
  mutation addTodo($todo_name: String!) {
    insert_todos(objects: [
      {
        todo_name: $todo_name
      }
    ]) {
      returning {
        id
        todo_name
      }
    }
  }
`;

export const MarkCompletedQuery = gql`
  mutation mark($id: Int!) {
    update_todos(
      where: {id: { _eq: $id }},
      _set: { completed: true }
    ) {
      affected_rows
    }
  }
`;

export const getCompletedQuery = gql`
  {
    todos(
      where: { completed: {_eq: true }},
      order_by: id_desc
    ) {
      id
      todo_name
      completed
    }
  }
`;

export const deleteQuery = gql`
  mutation del($id: Int!) {
    delete_todos(
      where: {id: { _eq: $id }}
    ) {
      affected_rows
    }
  }
`;
