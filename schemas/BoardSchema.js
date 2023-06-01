const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  title: String,
  content: String,
});
module.exports = BoardSchema;

const BoardModel = mongoose.model("board", BoardSchema);
module.exports = BoardModel;
