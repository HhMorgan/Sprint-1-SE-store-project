var mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },items : 
            {
              name: String,
              price: Number, 
              addedAt: {
                type: Date,
                default: Date.now
              }, 
              seller:  String,
  } ,
        
},{collection: 'Carts'}
);

mongoose.model('Cart', cartSchema);
