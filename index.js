const express = require("express");
let postCounter = 3;
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

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

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/posts", function (req, res) {
  res.send(posts);
});

app.post("/posts", function (req, res) {
  const data = req.body;
  posts.push({
    id: postCounter++,
    userId: data.userId,
    title: data.title,
    body: data.body,
  });
  res.send(posts);
});

app.get("/posts/:postId", function (req, res) {
  const postId = req.params.postId;
  const thePost = posts.find((p) => p.id === parseInt(postId));
  res.send(thePost);
});

app.put("/posts/:postId", function (req, res) {
  const postId = req.params.postId;
  const thePost = posts.find((p) => p.id === parseInt(postId));
  const data = req.body;
  thePost.title = data.title;
  thePost.body = data.body;

  res.send(thePost);
});

app.delete("/posts/:postId", function (req, res) {
  const postId = req.params.postId;
  posts = posts.filter((p) => p.id !== parseInt(postId));

  res.send(posts);
});

app.listen(3000);
