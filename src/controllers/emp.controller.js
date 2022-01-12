import HttpStatus from 'http-status-codes';
import * as EmpService from '../services/emp.service';

/**
 * Controller to add Employees
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addEmployee = async (req, res, next) => {
    try {
        const data = await EmpService.addEmployeeService(req.body, res);
        if (data) {
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Employee added Successfully'
            });
        }
        else {
            res.status(HttpStatus.FORBIDDEN).json ({
                code: HttpStatus.FORBIDDEN,
                data: "",
                message: 'Employee already added'
            })
        }
    } catch (error) {
        next(error);
    }
};

/**
 * Cotroller to get employees
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {function} next 
 */
 export const getEmployee = async (req, res, next) => {
    try {
        const data = await EmpService.getEmployee(req.body, res);
        if (data) {
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Employee Details found'
            });
        }
        else {
            res.status(HttpStatus.NOT_FOUND).json({
                code: HttpStatus.FORBIDDEN,
                data: "",
                message: 'Employee Details not found'
            });
        }
    } catch (error) {
        next(error);
    }
};


/**
 * Controller to update employees
 * @param {object} req - request object
 * @param {object} res - request object
 * @param {function} next 
 */
export const updateEmployee = async (req, res, next) => {
    try {
        const data = await EmpService.updateEmpService(req.body, res);
        if (data) {
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Employee Details Updated'
            });
        } else {
            res.status(HttpStatus.NOT_FOUND).json({
                code: HttpStatus.NOT_FOUND,
                data: "",
                message: 'Employee Details not Found'
            });
        }
    } catch (error) {
        next(error);
    }
};
