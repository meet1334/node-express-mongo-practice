// import Joi from 'joi';
// import { joiCommon } from './common.validation';
// import { errorMessage } from './validation.constants';

// const emailValidation = joiCommon.joiString
//   .email({ ignoreLength: true })
//   .min(8)
//   .max(100)
//   .label('Email')
//   .messages({ ...errorMessage, 'string.email': '{#label} must be a valid email' })
//   .lowercase();

// export const getUsersSchema = Joi.object({
//   role: joiCommon.joiString.optional(),
//   order: joiCommon.joiString.optional(),
//   type: joiCommon.joiString.optional(),
//   sortBy: joiCommon.joiString.optional(),
//   search: joiCommon.joiString.optional(),
//   status: Joi.boolean(),
//   limit: Joi.number().integer(),
//   page: Joi.number().integer(),
// }).options({
//   abortEarly: false,
// });

// export const createUserSchema = Joi.object({
//   profileImage: Joi.any(),
//   name: joiCommon.joiString.required(),
//   email: emailValidation.required(),
//   roleId: joiCommon.joiObjectId.required(),
//   status: joiCommon.joiBoolean.required(),
// }).options({
//   abortEarly: false,
// });

// export const updateUserSchema = Joi.object({
//   id: joiCommon.joiObjectId.required(),
//   profileImage: Joi.any(),
//   avtarIsDeleted: joiCommon.joiBoolean,
//   name: joiCommon.joiString,
//   email: emailValidation,
//   roleId: joiCommon.joiObjectId,
//   status: joiCommon.joiBoolean,
// }).options({
//   abortEarly: false,
// });
