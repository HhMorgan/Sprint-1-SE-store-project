var mongoose = require('mongoose'),
moment = require('moment'),
Validations = require('../utils/Validations'),
User = mongoose.model('User');


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
