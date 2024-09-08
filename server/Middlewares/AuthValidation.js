import Joi from 'joi';

const signupSchema = Joi.object({
    name: Joi.string().min(3).max(80).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(80).required()
});

const signupValidation = (req, res, next) => {
    const { error } = signupSchema.validate(req.body);
    
    if (error) {
        return res.status(400).json({
            message: "Validation error",
            details: error.details
        });
    }
    next();
};

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(80).required() 
});

const loginValidation = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    
    if (error) {
        return res.status(400).json({
            message: "Validation error",
            details: error.details
        });
    }
    
    next();
};

export { signupValidation, loginValidation, signupSchema, loginSchema };
