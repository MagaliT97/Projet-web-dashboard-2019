const express = require('express');
const BudgetRoutes = express.Router();

// Require Revenu model in our routes module
let Budget = require('../ModelBudget');

// Defined store route
BudgetRoutes.route('/add').post(function (req, res) {
  let budget = new Budget(req.body);
  budget.save()
    .then(Budget => {
      res.json(budget);
      res.status(200).json({'Budget': 'budget is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
BudgetRoutes.route('/').get(function (req, res) {
    Budget.find(function(err, budget){
    if(err){
      console.log(err);
    }
    else {
      res.json(budget);
    }
  });
});

// Defined edit route
BudgetRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Budget.findById(id, function (err, budget){
      res.json(budget);
  });
});

//  Defined update route
BudgetRoutes.route('/update/:id').post(function (req, res) {
  Budget.findById(req.params.id, function(err, budget) {
  if (!budget)
    res.status(404).send("data is not found");
  else {
      budget.montant = req.body.montant;
      //budget.StartDate=req.body.StartDate;
      //budget.EndDate=req.body.EndDate;

      budget.save().then(Budget => {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});

// Defined delete | remove | destroy route
BudgetRoutes.route('/delete/:id').get(function (req, res) {
  Budget.findByIdAndRemove({_id: req.params.id}, function(err, Budget){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = BudgetRoutes;