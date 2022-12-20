const express = require('express');

const {
  getAllProduct,
  addProduct,
  deleteProduct,
  updateProduct,
  oneProduct,
  getAllClothes
} = require('../controller/product');

const router = express.Router();

router.get('/', getAllProduct);
router.get('/oneProduct', oneProduct);
router.get('/:category', getAllClothes);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

module.exports = router;
