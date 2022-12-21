const express = require('express');

const {
  getAllProduct,
  addProduct,
  deleteProduct,
  UpdateProduct,
  oneProduct,
  getAllClothes,
  getAllShoes,
} = require('../controller/product');

const router = express.Router();

router.get('/', getAllProduct);
router.get('/oneProduct', oneProduct);
router.get('/:category', getAllClothes);
router.get('/:category', getAllShoes);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', UpdateProduct);

module.exports = router;
