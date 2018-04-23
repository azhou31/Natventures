let Product = require('../models/products');

module.exports = {
    index: (req,res) =>{
        Product.find({}, (err, products) => {
            if(err) {
                return res.status(401).json(err);
            }
            console.log("found products");
            return res.json(products);
        });
    },
}