const express = require("express");
const router = express.Router();

//models
const Product = require("../model/Product");

// routings

router.get("/all", (req, res) => {
  Product.find().select('_id name price color features date').sort({date: -1}).then(products => {
    res.json(products);
  })
});


router.post("/", (req, res) => {

    if(req.body.name.length === 0) {
        res.status(400).json({
            error: "Name is required"
        });
    }
  
    let productFields = {};

    if(req.body.name) productFields.name = req.body.name;
    if(req.body.price) productFields.price = req.body.price;
    
    if(typeof req.body.color !== 'undefined')
    {
        productFields.color = req.body.color.split(',');
    }

    if(typeof req.body.features !== 'undefined')
    {   
        productFields.features = req.body.features.split(',');
    }

    let newProductField = new Product(productFields);

    newProductField.save().then((products) => {
        res.status(200).json({
            message: 'Product saved successfully',
            data : products
        });
    }).catch(err => {
        res.status(400).json({error : "Error occured please try again later"})
    });

});

router.get("/search/:features", (req, res) => {

    const body = req.params.features;

    Product.find({ features : new RegExp(body,'i')}).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });

});


module.exports = router