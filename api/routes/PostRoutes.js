module.exports= (app) => {
    let postController = require('../controllers/PostController');

    app.route('/post')
        .get(postController.allPosts)
        .post(postController.newPost);

    app.route('/post/:postId')
        .get(postController.postId)
        .put(postController.updatePost)
        .delete(postController.deletePost)
}