import { gql } from "@apollo/client";

export const getAll = gql`
  {
    getAll {
      id
      title
      todos
    }
  }
`;

export const GET_LIST = gql`
  query getList($title: String) {
    getList(title: $title) {
      id
      title
      todos
    }
  }
`;
