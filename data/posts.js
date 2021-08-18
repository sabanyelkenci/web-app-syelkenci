let postCounter = 3;
let posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

function getAllPosts() {
  return posts;
}

function getPost(id) {
  return posts.find((p) => p.id === parseInt(id));
}

function addPost(post) {
  post.id = postCounter++;
  posts.push(post);
}

function removePost(id) {
  posts = posts.filter((p) => p.id !== parseInt(id));
  // return removePost;
}

function updatePost(postId, title, body) {
  const thePost = getPost(postId);
  thePost.body = body;
  thePost.title = title;
  // return thePost;
}

module.exports = {
  addPost,
  getAllPosts,
  getPost,
  removePost,
  updatePost,
};
