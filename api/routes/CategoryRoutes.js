module.exports= (app) => {
    let categoryController = require('../controllers/CategoryController');

    app.route('/category')
        .get(categoryController.allCategories)
        .post(categoryController.newCategory);

    app.route('/category/:categoryId')
        .get(categoryController.categoryId)
        .put(categoryController.updateCategory)
        .delete(categoryController.deleteCategory)
}