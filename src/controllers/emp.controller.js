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

