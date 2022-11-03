import { Router } from 'express';
import EntityController from '../controllers/entity.controller';

const entityRoute = Router();
const entityController = new EntityController();

entityRoute.post(
  'filter',
  entityController.filter
);

export default entityRoute;