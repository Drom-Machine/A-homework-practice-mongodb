const express = require("express");
const router = express.Router();

const productController = require("./controller/productController");

//------------------------------------------------------------get----//get-all-products

router.get('/get-all-products', function (req, res) {
    productController.getAllProducts(function (err, payload) {
        if (err) {
            res.status(500).json({ message: "Error", error: err });
        } else {
            res.json({ message: "Great Success", data: payload});
        }
    })
});

//------------------------------------------------------------get----//get-product-by-id

router.get('/get-product-by-id/:id', function (req, res) {
    productController.getProductByID(req.params.id, function (err, payload) {
        if (err) {
            res.status(500).json({ message: "Error", error: err });
        } else {
            res.json({ message: "Great Success", data: payload });
        }
    })
});


//------------------------------------------------------------post----//create-product

router.post('/create-product', function (req, res) {
    productController.createProduct(req.body, function (err, payload) {
        if (err) {
            res.status(500).json({ message: "Error", error: err });
        } else {
            res.json({ message: "Great Success", data: payload});
        }
    })
});

//------------------------------------------------------------put----//update-product-by-id

router.put('/update-product-by-id/:id', function (req, res) {
    productController.updateProductByID(req.params.id, req.body, function (err, payload) {
        if (err) {
            res.status(500).json({ message: "Error", error: err });
        } else {
            res.json({ message: "Great Success", data: payload});
        }
    })
});

//------------------------------------------------------------delete----//delete-product-by-id

router.delete('/delete-product-by-id/:id', function (req, res) {
    productController.deleteProductByID(req.params.id, function (err, payload) {
        if (err) {
            res.status(500).json({ message: "Error", error: err });
        } else {
            res.json({ message: "Great Success", data: payload});
        }
    })
});


module.exports = router;