const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Budget = new Schema({
    StartDate: {
      type: String
    },
    EndDate: {
      type: String
    },
    montant:{
      type:Number
    }
    },{
        collection: 'budget'
    });

module.exports = mongoose.model('DatabaseBudget', Budget);