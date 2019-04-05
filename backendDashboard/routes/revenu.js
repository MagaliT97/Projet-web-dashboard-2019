const express = require('express');
const RevenuRoutes = express.Router();

// Require Revenu model in our routes module
let Revenu = require('../ModelRevenu');

// Defined store route
RevenuRoutes.route('/add').post(function (req, res) {
  let revenu = new Revenu(req.body);
  revenu.save()
    .then(Revenu => {
      res.status(200).json({'Revenu': 'revenu is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
RevenuRoutes.route('/').get(function (req, res) {
    Revenu.find(function(err, revenues){
    if(err){
      console.log(err);
    }
    else {
      res.json(revenues);
    }
  });
});

// Defined get sum data route
RevenuRoutes.route('/sum').get(function (req, res) {
  Revenu.aggregate([
    {
        $group: {
            _id: null, 
            total: {$sum: "$montant"}
        }
    }
],function (err, result) {
  if (err) {
      next(err);
  } else {
      res.json(result);
  }
})});

// Defined total depense per month
RevenuRoutes.route('/montantPerMonth').get(function (req, res) {
  Revenu.aggregate([
    {
        $group: {
            _id: { $substr: [ "$date", 5, 2] },
            total: {$sum: "$montant"},
        }
    }
],function (err, result) {
  if (err) {
      next(err);
  } else {
      res.json(result);
  }
})});

// Defined edit route
RevenuRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Revenu.findById(id, function (err, revenu){
      res.json(revenu);
  });
});

//  Defined update route
RevenuRoutes.route('/update/:id').post(function (req, res) {
    Revenu.findById(req.params.id, function(err, revenu) {
    if (!revenu)
      res.status(404).send("data is not found");
    else {
        revenu.categorie = req.body.categorie;
        revenu.description = req.body.description;
        revenu.montant = req.body.montant;
        revenu.date=req.body.date;

        revenu.save().then(Revenu => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
RevenuRoutes.route('/delete/:id').get(function (req, res) {
    Revenu.findByIdAndRemove({_id: req.params.id}, function(err, Revenu){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = RevenuRoutes;