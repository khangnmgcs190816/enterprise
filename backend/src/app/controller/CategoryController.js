const Category = require('../model/Category');
const {mongooseToObject} = require('../../util/mongoose');
class CategoryController {

    //[Get] /Category/show
    show(req, res, next) {
        Category.find({})
            .then(category => {
                res.json(category);
            })
            .catch(next);
    }
    
    //[Post] /Category/create
    create(req,res, next) {
        const category = new Category(req.body);
        category
            .save()
            .then(() =>
                res.json(category))
            .catch(next);
    }

    //[Get] /Category/:id
    read(req, res, next) {
        Category.findById(req.params.id)
            .then((category) => res.json(category),
            )
            .catch(next);
    }

    //[Put] /Category/:id/update
    update(req, res, next) {
        Category.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.json(req.body))
            .catch(next)
    }

    //[Delete] /Category/:id/delete
     delete(req, res, next) {
        Category.deleteOne({ _id: req.params.id})
            .then(() => res.json({
                message: 'Category successfully deleted',
                _id: req.params.id
            }),
            )
            .catch(next);
    }

 
}

module.exports = new CategoryController();