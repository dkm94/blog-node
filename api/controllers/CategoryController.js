const mongoose = require('mongoose');   
const Category = require('../models/Category');

exports.allCategories = (req, res) => {
    Category.find({})
    .then(categories => res.status(200).json(categories))
    .catch(err => res.status(400).json( err ))
}

exports.categoryId = (req, res) => {
    Category.findById({ _id: req.params.categoryId })
    .then(categorie => res.status(200).json(categorie))
    .catch(err => res.status(400).json( err ))
}

exports.newCategory = (req, res) => {
    let category = new Category(req.body);
    category.save()
    .then(category => res.status(200).json(category))
    .catch(err => res.status(400).json( err ))
}

exports.updateCategory = (req, res) => {
    req.body.updatedAt = Date.now();
    Category.updateOne(
        { _id: req.params.categoryId },
        req.body, {new: true})
    .then(status => res.status(200).json(status))
    .catch(err => res.status(400).json( err ))
}

exports.deleteCategory = (req, res) => {
    Category.deleteOne({ _id: req.params.categoryId })
    .then(category => res.status(200).json({ message: "Category successfully deleted"} ))
    .catch(err => res.status(400).json( err ))
}