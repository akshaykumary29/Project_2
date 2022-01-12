import Employee from '../models/emp.model';

export const addEmployeeService = async (req, res) => {
    let newEmployee = new Employee({
        firstName: req.firstName,
        lastName: req.lastName,
        gender: req.gender,
        department: req.department,
        company: req.company,
        salary: req.salary,
        startdate: req.startdate
    })
    return await newEmployee.save()
};

