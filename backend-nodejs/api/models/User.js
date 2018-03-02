
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
  required: false
},
  cart:{
    type: Array,
    "default":[]
  }
},{collection: 'Users'}
);

mongoose.model('User', userSchema);