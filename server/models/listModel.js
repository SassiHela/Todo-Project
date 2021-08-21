const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    todos: [String],
  },
  { timestamps: true }
);

module.exports = List = mongoose.model("list", ListSchema);
