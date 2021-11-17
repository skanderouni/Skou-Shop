const express = require('express');
const {
  ShowAllProduct,
  ShowProduct,
  addProduct,
  editProduct,
  deleteProduct,
  addReview,
} = require('../controllers/product.controller.js');
const router = express.Router();
router.get('/products', ShowAllProduct);
router.get('/:id', ShowProduct);
router.post('/add', addProduct);
router.patch('/edit/:id', editProduct);
router.delete('/delete/:id', deleteProduct);
router.put('/review/:id', addReview);

module.exports = router;
