const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/',categoryController.getAll);
router.get('/type/:categoryId',categoryController.getOne);
router.post('/add',categoryController.insertCategory);
router.patch('/update/:id',categoryController.updateCategory);



module.exports=router;