const express = require("express");
const controler = require("../controlers/productControler");

const productRouter = express.Router();

productRouter.get('/', controler.getAllProducts);
productRouter.get('/:id', controler.getProductById);
productRouter.post('/', controler.createProduct);
productRouter.patch('/:id', controler.updateProduct);
productRouter.delete('/', controler.deleteProduct);

module.exports = productRouter;
