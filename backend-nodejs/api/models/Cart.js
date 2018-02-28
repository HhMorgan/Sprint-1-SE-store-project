var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
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

mongoose.model('Cart', productSchema);
