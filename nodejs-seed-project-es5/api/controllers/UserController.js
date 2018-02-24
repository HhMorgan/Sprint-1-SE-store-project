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
    User.findOne({ user:{ $eq: req.body.user } , password:{ $eq: req.body.password } }, function(err, user){
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