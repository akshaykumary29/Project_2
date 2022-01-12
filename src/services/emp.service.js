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

export const getEmployee = async(req, res) => {
    let empData = await Employee.findById({ _id: req._id });
    return empData;
};