var mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },items : {
       type : Array ,
        "default" : [] 
    }
},{collection: 'Carts'}
);

mongoose.model('Cart', cartSchema);
