import { validate } from './validationMiddleware';
import { check } from 'express-validator';

export const validateTask = [
  check('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long'),
  check('completed').isBoolean().withMessage('Completed field must be a boolean'),
  validate,
];
