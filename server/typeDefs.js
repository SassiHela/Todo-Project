const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type List {
    id: ID
    title: String
    todos: [String]
  }

  type Query {
    hello: String
    getAll: [List]
    getList(title: String): List
  }

  type Mutation {
    createList(title: String): List
    updateList(title: String, todos: [String]): List
  }
`;
module.exports = typeDefs;
