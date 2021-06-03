const Product = require("../model/Product");

module.exports = {
    //--------------------------------------------------------------createProduct
    createProduct: function (body, callback) {
        let newProduct = new Product({
            productName: body.productName
        });
            newProduct.save(function (err, payload) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, payload);
            }
        });
    },
    //--------------------------------------------------------------getAllProducts  
    getAllProducts: function (callback) {
        Product.find({}, function (err, payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload);
            }
        });
    },
    //--------------------------------------------------------------getProductByID
    getProductByID: function (id, callback) {
        Product.findById({ _id: id }, function (err, payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload);
            }
        });
    },
    //--------------------------------------------------------------updateProductByID
    updateProductByID: function (id, body, callback) {
        Product.findByIdAndUpdate({ _id: id }, body, function (err, Payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, Payload);
            }
        });
    },
    //--------------------------------------------------------------deleteProductByID
    deleteProductByID: function (id, callback) {
        Product.findByIdAndDelete({ _id: id }, function (err, Payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, Payload);
            }
        });
    },
};