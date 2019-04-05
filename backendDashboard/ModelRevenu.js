const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Revenu = new Schema({
    description: {
      type: String
    },
    montant: {
      type: Number
    },
    date: {
        type: Date
      }
  ,
    recurrent: {
      type: Boolean
    }
  },{  
      collection: 'revenu'
  });

module.exports = mongoose.model('DatabaseRevenu', Revenu);