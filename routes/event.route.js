const express = require('express');
const app = express();
const eventRoutes = express.Router();

// Require Product model in our routes module
let Event = require('../models/Event');

// Defined store route
eventRoutes.route('/refreshLastSeason').post(function (req, res) {
  // let product = new Product(req.body);
  // product.save()
  //   .then(product => {
      res.status(200).json({'Product': 'Product has been added successfully'});
    // })
    // .catch(err => {
    // res.status(400).send("unable to save to database");
    // });
});

module.exports = eventRoutes;