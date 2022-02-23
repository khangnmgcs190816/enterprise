const express = require('express');
const router = express.Router();
const categoryController = require('../app/controller/CategoryController');

router.post('/create', categoryController.create);
router.get('/:id', categoryController.read);
router.put('/:id/update', categoryController.update);
router.delete('/:id/delete', categoryController.delete);
router.get('/', categoryController.show);

module.exports = router;