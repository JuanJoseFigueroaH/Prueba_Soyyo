import { Router } from 'express';
import entityRoute from './entity.route';

const mainRoute = Router();

mainRoute.use('/entities', entityRoute);

export default mainRoute;
