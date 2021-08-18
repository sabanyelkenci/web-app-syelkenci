const express = require("express");

var bodyParser = require("body-parser");

const postController = require("./controller/postsController");
const commentsController = require("./controller/commentController");
const { getAllComments } = require("./data/comments");

const app = express();
app.use(bodyParser.json());


app.get("/posts", postController.getAllPosts );

app.post("/posts", postController.addPost );

app.get("/posts/:postId", postController.getPost );

app.put("/posts/:postId", postController.updatePost );

app.delete("/posts/:postId", postController.removePost );

app.get("/posts/:postId/comments", commentsController.getCommentsForPost);
app.get('/comments',commentsController.getAllComments);

app.listen(3000);
