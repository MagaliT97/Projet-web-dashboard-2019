const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Depense = new Schema({
    categorie: {
      type: String
    },
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
      collection: 'depense'
  });

module.exports = mongoose.model('DatabaseDepense', Depense);


