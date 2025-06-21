// backend/models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: String,
  itemType: String,
  description: String,
  coverImage: String,
  images: [String],
});

module.exports = mongoose.model('Item', itemSchema);
