const express = require('express');
const depenseRoutes = express.Router();

// Require depense model in our routes module
let Depense = require('../ModelDepense');

// Defined store route
depenseRoutes.route('/add').post(function (req, res) {
  let depense = new Depense(req.body);
  depense.save()
    .then(depense => {
      res.status(200).json({'depense': 'depense is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
depenseRoutes.route('/').get(function (req, res) {
    Depense.find(function(err, depenses){
    if(err){
      console.log(err);
    }
    else {
      res.json(depenses);
    }
  })
});

// Defined get sum data route
depenseRoutes.route('/sum').get(function (req, res) {
  Depense.aggregate([
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
depenseRoutes.route('/montantPerMonth').get(function (req, res) {
  Depense.aggregate([
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
depenseRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Depense.findById(id, function (err, depense){
      res.json(depense);
  });
});

//  Defined update route
depenseRoutes.route('/update/:id').post(function (req, res) {
    Depense.findById(req.params.id, function(err, depense) {
    if (!depense)
      res.status(404).send("data is not found");
    else {
      depense.categorie = req.body.categorie;
        depense.description = req.body.description;
        depense.montant = req.body.montant;
        depense.date=req.body.date;

        depense.save().then(depense => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
depenseRoutes.route('/delete/:id').get(function (req, res) {
    Depense.findByIdAndRemove({_id: req.params.id}, function(err, depense){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


/*Updating percentages in PieChartCategory : sum by category*/

depenseRoutes.route('/piechart').get(function (req, res) {
  Depense.aggregate([
    {$group: {_id: "$categorie", total: {$sum: "$montant"}}},
    {$sort: {_id: 1}} //ordre alphabétique

], 
function(err, result){
  if(err){
    console.log(err);
  }
  else {
    res.json(result);
    console.log('Successfully counted');
  }
});

});
      
    module.exports = depenseRoutes;
