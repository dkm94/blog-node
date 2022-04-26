const mongoose = require('mongoose');   
const Post = require('../models/Post');

exports.allPosts = (req, res) => {
    Post.find({})
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(400).json( err ))
}

exports.postId = (req, res) => {
    Post.findById({ _id: req.params.postId })
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json( err ))
}

exports.newPost = (req, res) => {
    let post = new Post(req.body);
    post.save()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json( err ))
}

exports.updatePost = (req, res) => {
    req.body.updatedAt = Date.now();
    Post.updateOne(
        { _id: req.params.postId },
        req.body, {new: true})
    .then(status => res.status(200).json(status))
    .catch(err => res.status(400).json( err ))
}

exports.deletePost = (req, res) => {
    Post.deleteOne({ _id: req.params.postId })
    .then(post => res.status(200).json({ message: "Post successfully deleted"} ))
    .catch(err => res.status(400).json( err ))
}