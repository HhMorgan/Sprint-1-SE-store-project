var mongoose = require('mongoose'),
moment = require('moment'),
User = mongoose.model('User');
Product = mongoose.model('Product'),
Validations = require('../utils/Validations');

module.exports.userlogin = function(req, res, next) {
  var valid =  req.body.username && Validations.isString(req.body.username) &&
    req.body.password && Validations.isString(req.body.password);
    console.log(req.body);
    console.log(valid);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'user (String) and password (String) are required fields.',
      data: null
    });
  }
  else{ User.findOne({ username:{ $eq: req.body.username }}, function(err, user){
    if (err){
      throw err;
    }
    if (user == null){
      res.status(201).json({
        err: null,
        msg: 'Auth login Failed Wrong Username Or Password.',
        data: null
      });
    } else  if (JSON.parse(JSON.stringify(user))['type']==='admin') { 
      res.status(201).json({
        err: null,
        msg: 'Auth login Successful admin',
        data: user
      });
    }
    else  if  (JSON.parse(JSON.stringify(user))['type']==='user') {
      res.status(201).json({
        err: null,
        msg: 'Auth login Successful user',
        data: user
      });
    }
    else  if (JSON.parse(JSON.stringify(user))['type']==='manager') {
      res.status(201).json({
        err: null,
        msg: 'Auth login Successful manager',
        data: user
      });
    }
  });}
 
};
module.exports.userCreate = function(req, res, next) {
  var valid =  req.body.username && Validations.isString(req.body.username) &&
    req.body.password && Validations.isString(req.body.password);
    console.log(req.body);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'user (String) and password (String) are required fields.',
      data: null
    });
  }
  User.findOne({ username:{ $eq: req.body.username } }, function(err, user){
    if (err)
      throw err;
    if (user == null){
      User.create(req.body, function(err, createduser) {
        if (err) {
          return next(err);
        }
        res.status(201).json({
          err: null,
          msg: 'User was created Successfully.',
          data: createduser
        });
      });
    } else {
      res.status(201).json({
        err: null,
        msg: 'Username Already Exist',
        data: null
      });
    }

  });
};

module.exports.addToCart = function(req, res, next) {
  var valid =  req.body.username && Validations.isString(req.body.username) &&
    req.body.productId && Validations.isObjectId(req.body.productId);
    console.log(req.body);
    console.log(valid);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'user (String) and cart (Array) are required fields.',
      data: null
    });
  }
  User.findOneAndUpdate( { username:{ $eq: req.body.username } } ,
    {
      $push: { cart: req.body.productId }
    }
  ).exec(function(err, updatedCart) {
    if (err) {
      return next(err);
    }
    if (!updatedCart) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product could not be added to cart.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product was added successfully to the cart.',
      data: updatedCart
    });
  });
};

module.exports.viewCart= function(req, res, next) {
  User.findOne( {username:{ $eq: req.params.username }} ).exec(function(err, user) {
    if (err) {
      return next(err);
    }
    if (user == null) {
      return res.status(200).json({
        err: null,
        msg: 'Unable To load Cart',
        data: null
      });
    }
    Product.find({_id:{ $in:  user.cart }}).exec(function(err, cart) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg: 'Cart retrieved successfully.',
        data: cart
      });
    })
  });
};

module.exports.checkout = function(req, res, next) {
  var valid =  req.body.username && Validations.isString(req.body.username) 
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'user (String) is a required field.',
      data: null
    });
  }
  User.findOneAndUpdate( { username:{ $eq: req.body.username } } ,
    {
      $set: { cart: [] }
    }
  ).exec(function(err, cart) {
    if (err) {
      return next(err);
    }
    if (!cart) {
      return res
        .status(404)
        .json({ err: null, msg: 'Products could not be deleted.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Products were deleted successfully from the cart.',
      data: cart
    });
  });
};
