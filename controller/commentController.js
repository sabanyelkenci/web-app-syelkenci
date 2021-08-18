const commentStore = require("../data/comments");
const commentManager = require("../business-logic/comments");

function getAllComments (req,res){
 res.send (commentStore.getAllComments());

};

function getCommentsForPost(req,res){
const postId = req.params.postId;
const comments = commentManager.getCommentsForPost(postId); 

res.send(comments);

};


module.exports = {

    getCommentsForPost,
    getAllComments
    
}