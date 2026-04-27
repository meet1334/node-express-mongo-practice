import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { HttpCode } from '../exceptions/AppError';
import { errorMessage } from '../constants/error.constants';

export const validationMiddleware = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false, // show all errors
    allowUnknown: false, // disallow extra fields
    stripUnknown: true, // remove unknown fields
  });

  if (error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      message: errorMessage.VALIDATION_ERROR,
      errors: error.details.map((err) => err.message),
    });
  }

  req.body = value; // sanitized data
  next();
};
