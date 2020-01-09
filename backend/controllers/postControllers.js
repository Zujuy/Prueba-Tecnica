const Post = require("../models/Posts");
const User = require("../models/User");

exports.getPosts = async (req, res) => {
  const { _id } = req.user
  const posts = await Post.find()
  const userposts = await Post.find({ owner: _id })
  res.status(200).json({ posts });
};



// exports.getPost = async (req, res) => {
//   const { id } = req.params;
//   const post = await Post.findById(id).populate("posts");
//   res.status(200).json({post});
// };

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const { user } = req;

  const post = await Post.create({
    title,
    content,
    owner: user.name
  });

  res.status(201).json(post);
};