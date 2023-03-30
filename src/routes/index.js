const express = require("express");
const productRoutes = require("./productRoutes.js");

const apiRouter = express.Router();

apiRouter.use('/product', productRoutes);

apiRouter.get('/', (req, res) => {
 res.send('Hola World!')
 })

module.exports = apiRouter;
