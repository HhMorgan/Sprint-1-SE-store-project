var mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  }, name: {
    type: String,
    required: true,
    trim: true
  },
  price:{
    type: Number,
    required: true,
    trim: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }, 
  seller:  {
    type: String,
    required: true,
    trim: true
  },
        
},{collection: 'Carts'}
);

mongoose.model('Cart', cartSchema);
