import { Router } from 'express';
import EntityController from '../controllers/entity.controller';

const entityRoute = Router();
const entityController = new EntityController();

/**
 * @swagger
 * /entities/filter:
 *  post:
 *    description: "Filtrar listado entidades ordenadas alfabeticamente"
 *    tags:
 *      - Entities
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        type: object
 *        properties:
 *          startId:
 *           type: number
 *           example: 2
 *          endId:
 *           type: number
 *           example: 10
 *    responses:
 *       200:
 *         examples:
 *           application/json: [{
 *              "entityId": 0,
 *              "name": "string",
 *              "identificationNumber": "string",
 *              "expirationDate": "string",
 *              "contactName": "string",
 *              "contactEmail": "string",
 *              "logo": "string",
 *           }]
 */
entityRoute.post(
  '/filter',
  entityController.filter
);

export default entityRoute;
