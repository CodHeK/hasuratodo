import gql from "graphql-tag";

export const FetchAllQuery = gql`
  {
    todos {
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
