const { model, Schema } = require("mongoose");

const postSchema = new Schema(
  {
    title: String,
    content: String,
    owner: String
  },
  {
    timestamps: true
  }
);

module.exports = model("Post", postSchema);