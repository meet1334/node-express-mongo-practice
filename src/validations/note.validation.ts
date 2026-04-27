import Joi from 'joi';
import { joiCommon } from './common.validation';

export const createNoteSchema = Joi.object({
  title: joiCommon.joiString.min(2).required(),
  content: joiCommon.joiString.min(5).required(),
  attechments: joiCommon.joiString.optional(),
  createdBy: joiCommon.joiObjectId.required(),
});

export const updateNoteSchema = Joi.object({
  title: joiCommon.joiString.min(2),
  content: joiCommon.joiString.min(5),
  attechments: joiCommon.joiString,
  createdBy: joiCommon.joiObjectId,
});
