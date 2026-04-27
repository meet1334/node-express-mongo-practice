import Joi from 'joi';

export const errorMessage = {
  'string.base': '{#label} should be a type of text',
  'string.min': '{#label} should have a minimum length of {#limit}',
  'string.empty': '{#label} is not allowed to be empty',
  'string.max': '{#label} should be maximum {#limit} characters..',
  'string.pattern.base': 'Please enter valid {#label}',
  'any.required': '{#label} is a required field',
};

export const joiCommon = {
  joiString: Joi.string()
    .trim()
    .messages({ ...errorMessage }),
  joiNumber: Joi.number().messages({ ...errorMessage }),
  joiBoolean: Joi.boolean().messages({ ...errorMessage }),
  joiObjectId: Joi.string().regex(/^[0-9a-fA-F]{24}$/, 'object Id').messages({ ...errorMessage }),
  joiDate: Joi.date()
    .iso()
    .messages({ ...errorMessage }),
  joiArray: Joi.array().messages({ ...errorMessage }),
  joiObject: Joi.object().messages({ ...errorMessage }),
  // ** For Pagination **
  joiPage: Joi.number()
    .messages({ ...errorMessage })
    .allow('', null),
  joiLimit: Joi.number().messages({ ...errorMessage }),
  joiFields: Joi.string()
    .messages({ ...errorMessage })
    .allow('', null),
  joiExclude: Joi.string()
    .messages({ ...errorMessage })
    .allow('', null),
  joiSort: Joi.object().messages({ ...errorMessage }),
  joiEmail: Joi.string()
    .messages({
      ...errorMessage,
      'string.email': '{#label} must be a valid email',
    })
    .email({ ignoreLength: true })
    .trim()
    .lowercase()
    .options({ convert: true }),
};

const passwordRegEx = '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$';
const numberRegex = '^[0-9]{9,10}$';
const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/



export const commonValidation = {
  passwordCommon: Joi.string()
    .min(8)
    .required()
    .pattern(new RegExp(passwordRegEx))
    .messages({
      ...errorMessage,
      'string.pattern.base': '{#label} shoud be  6 characters 1 uppercase, 1 lowercase and 1 special character'
    }),
  no: Joi.string()
    .required()
    .pattern(new RegExp(numberRegex))
    .min(9)
    .label('Phone Number')
    .messages({ ...errorMessage, 'string.pattern.base': `{#label} must be number 9 or 10 digit` })
};

export const emailValidation = joiCommon.joiString
  .email({ ignoreLength: true })
  .min(8)
  .max(100)
  .label('Email').regex(emailRegex)
  .messages({ ...errorMessage, 'string.email': '{#label} must be a valid email' })
  .lowercase()