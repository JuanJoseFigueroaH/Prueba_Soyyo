import { Request, Response, NextFunction } from 'express';
import BaseController from './_base.controller';

class EntityController extends BaseController {
  public filter = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let entity:any = [];
    res.status(201).send(entity);
  };
}

export default EntityController;