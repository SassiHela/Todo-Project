const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

dotenv.config();
//Connect DB
connectDB();

const startApolloServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server running on localhost ${port}`);
  });
};

startApolloServer();
