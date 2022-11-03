import { Request, Response, NextFunction } from 'express';
import BaseController from './_base.controller';
import axios from 'axios';
import { BadRequestError } from '../errors/bad-request-error'

class EntityController extends BaseController {
  public filter = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const entity:any = [];
    for (let i = req.body.startId; i <= req.body.endId; i++) {
      const result = await axios.get(`https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/${i}`);
      if (!result.data.data) {
        entity.push({
          entityId: result.data.data.entityId,
          name: result.data.data.name,
          identificationNumber: result.data.data.identificationNumber,
          expirationDate: result.data.data.expirationDate,
          contactName: result.data.data.contactName,
          contactEmail: result.data.data.contactEmail,
          logo: result.data.data.logo
        });
      } else {
        throw new BadRequestError('Error no se encuentra para rango especificado')
      }
    }
    res.status(200).send(entity);
  };
}

export default EntityController;
