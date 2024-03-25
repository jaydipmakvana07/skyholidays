import Joi from 'joi';
import { validateReq } from '../helpers/validation.helper';
import { CommonValidationFilter } from '../helpers/validation.helper';

export const loginValidation = (req, res, next) => {
    const loginSchema = Joi.object({
        data: Joi.object({
            email: Joi.string().email().required(),
            password: new CommonValidationFilter().password(),
        }),
    });
    validateReq(req, next, loginSchema);
};
export const signupValidation = (req, res, next) => {
    const loginSchema = Joi.object({
        data: Joi.object({
            email: Joi.string().email().allow('',null),
            password: Joi.string().required(),
            name: Joi.string().required(),
            phone: Joi.string().required(),
            role: Joi.string().valid('0','1','2','3','4').required(),
        }),
    });
    validateReq(req, next, loginSchema);
};
