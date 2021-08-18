const postStore = require("../data/posts");

function getAllPosts(req, res) {
  res.send(postStore.getAllPosts());
}

function addPost(req, res) {
  postStore.addPost(req.body);
  res.send(postStore.getAllPosts());
}

function getPost(req, res) {
  const postId = req.params.postId;
  // const thePost = postStore.getPost(postId);
  res.send(postStore.getPost(postId));
}

function updatePost(req, res) {
  const postId = req.params.postId;
  const data = req.body;

  postStore.updatePost(postId, data.title, data.body);

  res.send(postStore.getPost(postId));
}

function removePost(req, res) {
  const postId = req.params.postId;
  postStore.removePost(postId);

  res.send(postStore.getAllPosts());
}

module.exports = {
  getAllPosts,
  getPost,
  updatePost,
  removePost,
  addPost
};
