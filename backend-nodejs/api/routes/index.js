var express = require('express'),
  router = express.Router(),
  ProductController = require('../controllers/ProductController'),
  UserController = require('../controllers/UserController');


//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', ProductController.getProducts);
router.get('/product/getProduct/:productId', ProductController.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  ProductController.getProductsBelowPrice
);
router.post('/product/createProduct', ProductController.createProduct);
router.post('/auth/login', UserController.userlogin);
router.post('/user/create', UserController.userCreate);


router.patch('/product/updateProduct/:productId', ProductController.updateProduct);
router.delete('/product/deleteProduct/:productId', ProductController.deleteProduct);

module.exports = router;
