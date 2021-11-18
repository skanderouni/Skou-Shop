const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ProdctSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [
    {
      _id: Schema.Types.ObjectId,
      title: { type: String,},
      rating: { type: Number, default: 0 },
      comment: { type: String,},
    },
  ],
});

module.exports = Product = model('Product', ProdctSchema);
