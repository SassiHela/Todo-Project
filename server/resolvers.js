const List = require("./models/listModel");

const resolvers = {
  Query: {
    hello: () => {
      return "hello world! GOOD Hela";
    },

    getAll: async () => {
      return await List.find();
    },

    getList: async (parent, args, context, info) => {
      return await List.findOne({ title: args.title });
    },
  },
  Mutation: {
    createList: async (parent, args, context, info) => {
      const title = args.title;
      const list = await new List({ title }).save();
      return list;
    },

    updateList: async (parent, args, context, info) => {
      const { title, todos } = args;
      const list = await List.findOneAndUpdate(
        { title },
        { todos },
        { new: true }
      );
      return list;
    },
  },
};

module.exports = resolvers;
