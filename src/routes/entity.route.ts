import { Router } from 'express';
import EntityController from '../controllers/entity.controller';
import EntityValidator from '../validators/entity.validator';
import { validateRequest } from '../middlewares';

const entityRoute = Router();
const entityController = new EntityController();
const entityValidator = new EntityValidator();

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
 *       400:
 *         description: Bad request
 *         examples:
 *           application/json: {
 *              "errors": [
 *                  {
 *                    "message": "Start Id es requerido",
 *                    "field": "startId"
 *                  }
 *              ]
 *           }
 *       404:
 *         description: Bad request
 *         examples:
 *           application/json: {
 *              "errors": [
 *                  {
 *                    "message": "Error no se encuentra para rango especificado",
 *                  }
 *              ]
 *           }
 */
entityRoute.post(
  '/filter',
  entityValidator.validateFields,
  validateRequest,
  entityController.filter
);

export default entityRoute;
