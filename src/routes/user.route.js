import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// route to register user
router.post('/register', userController.registerUser);

// route to login user
router.get('/login', userController.loginUser);

export default router;
