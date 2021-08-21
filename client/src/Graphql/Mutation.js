import { gql } from "@apollo/client";

export const CREATE_LIST = gql`
  mutation createList($title: String) {
    createList(title: $title) {
      id
      title
    }
  }
`;

export const UPDATE_LIST = gql`
  mutation updateList($title: String, $todos: [String]) {
    updateList(title: $title, todos: $todos) {
      id
      title
      todos
    }
  }
`;
