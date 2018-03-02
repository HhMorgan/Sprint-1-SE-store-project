
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
},{collection: 'Users'}
);

mongoose.model('User', userSchema);