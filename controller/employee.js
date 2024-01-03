const employeeService = require("../service/employee");

const getAllEmployee = (req, res) => {
  employeeService.getAllEmployees()
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getEmployee = (req, res) => {
    const employee = employeeService.getEmployee(req.params.id)
    employee.then((data) => {

        res.status(200).json(data);
    }).catch(error => {
        res.status(500).json({ message: error.message });
    })
};

const postEmployee = (req, res) => {
  console.log(req.body);
  const { firstName, lastName, age } = req.body;
  const newEmployee = employeeService.createEmployee({
    firstName,
    lastName,
    age,
  });
  res.status(201).json(newEmployee);
};

const putEmployee = (req, res) => {
    const employeeId = req.params.id;
    const updatedData = req.body;
    const updateEmployee = employeeService.updateEmployee(employeeId, updatedData);
    res.status(200).json(updateEmployee);
};

const deleteEmployee = (req, res) => {
  const employeeId = req.params.id;
  res.status(204).json(employeeService.deleteEmployeeById(employeeId));
};

module.exports = {
  getAllEmployee,
  getEmployee,
  deleteEmployee,
  postEmployee,
  putEmployee,
};
