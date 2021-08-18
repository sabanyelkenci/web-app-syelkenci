const commentStore = require("../data/comments");

function getCommentsForPost (postId){

    return commentStore.getAllComments().filter(c => c.postId === parseInt(postId))
    
};


module.exports = {

    getCommentsForPost
}