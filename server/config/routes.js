let products = require('../controllers/products.js');

module.exports = (app) =>{
    app.get('/products', products.index);

    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve('./client/eCommerce/dist/index.html'))
    });
}