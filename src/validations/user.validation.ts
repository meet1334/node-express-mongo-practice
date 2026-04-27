import Joi from 'joi';
import { joiCommon, emailValidation, commonValidation } from './common.validation';

export const createUserSchema = Joi.object({
  email: emailValidation.required(),
  first_name: joiCommon.joiString.min(2).max(50).required(),
  last_name: joiCommon.joiString.min(2).max(50).required(),
  password: commonValidation.passwordCommon.required(),
  username: joiCommon.joiString.min(2).max(50).required(),
}).options({
  abortEarly: false,
});

export const updateUserSchema = Joi.object({
//   id: joiCommon.joiObjectId.required(),
  avatar: Joi.any(),
  first_name: joiCommon.joiString.min(2).max(50),
  last_name: joiCommon.joiString.min(2).max(50),
  username: joiCommon.joiString.min(2).max(50),
  email: emailValidation,
  age: joiCommon.joiNumber.label('Age').integer().min(0),
  phone: commonValidation.no,
}).options({
  abortEarly: false,
});
