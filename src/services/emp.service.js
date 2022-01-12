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

export const updateEmployee = async(req, res) => {
    let empData = await Employee.findById({ _id: req._id });
    if (empData) {
        let employee = {
            firstName: req.firstName ? req.firstName : empData.firstName,
            lastName: req.lastName ? req.lastName : empData.lastName,
            gender: req.gender ? req.gender : empData.gender,
            department: req.department ? req.department : empData.department,
            company: req.company ? req.company : empData.company,
            salary: req.salary ? req.salary : empData.salary,
            startdate: req.startdate ? req.startdate : empData.startdate,
        }
        return Employee.updateOne({ _id: req._id }, employee)
    }
    else {
        return empData
    }
};