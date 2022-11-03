import { body } from 'express-validator';
import BaseValidator from './_base.validator';

class EntityValidator extends BaseValidator {
  public validateFields = [
    body('startId')
      .notEmpty()
      .withMessage('Start Id es requerido')
      .isNumeric()
      .withMessage('Start Id no es un número'),
    body('endId')
      .notEmpty()
      .withMessage('End id es requerido')
      .isNumeric()
      .withMessage('End id no es un número')
  ];
}

export default EntityValidator;
