import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(4).max(30).required(),
    lastName: Joi.string().min(4).max(30).required(),
    gender: Joi.string().max(6).required(),
    department: Joi.string().alphanum().min(2).max(20).required(),
    company: Joi.string().max(30).required(),
    salary: Joi.number().integer().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
