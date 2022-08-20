import * as Joi from 'joi';

export const JoiValidation =  Joi.object({
    MONGO_URI : Joi.required(),
    PORT : Joi.number().default(8080),
    DEFAULT_LIMIT : Joi.number().default(10),
    JWT_SECRET : Joi.string().required(),
});