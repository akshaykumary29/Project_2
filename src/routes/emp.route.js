import express from 'express';
import * as employeeController from '../controllers/emp.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// route to add new employee
router.post('/addEmp', userAuth, employeeController.addEmployee);

// route to get employee
router.get('/getEmp', userAuth, employeeController.getEmployee);

// route to update employee
router.put('/updateEmp', userAuth, employeeController.updateEmployee);

// route to delete employee
router.delete('/deleteEmp', userAuth, employeeController.deleteEmployee);

module.exports = router;
