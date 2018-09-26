import gql from "graphql-tag";

export const FetchAllQuery = gql`
  {
    todos {
      id
      todo_name
      time
      completed
    }
  }
`;
