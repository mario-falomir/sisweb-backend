import { Router } from 'express';
import productRoutes from './productRoutes.js';

const apiRouter = Router();

apiRouter.use('/product', productRoutes);

apiRouter.get('/', (req, res) => {
 res.send('Hola World!')
 })

export default apiRouter;
