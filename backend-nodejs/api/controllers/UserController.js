var mongoose = require('mongoose'),
moment = require('moment'),
Validations = require('../utils/Validations'),
User = mongoose.model('User');


module.exports.userlogin = function(req, res, next) {
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
    User.findOne({ username:{ $eq: req.body.username } , password:{ $eq: req.body.password } }, function(err, user){
      if (err)
        throw err;
      if (user == null){
        res.status(201).json({
          err: null,
          msg: 'Auth login Failed Wrong Username Or Password.',
          data: null
        });
      } else {
        res.status(201).json({
          err: null,
          msg: 'Auth login Successful.',
          data: user
        });
      }
    });
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
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'user (String) and cart (Array) are required fields.',
      data: null
    });
  }
  User.findOneAndUpdate( req.body.username ,
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

