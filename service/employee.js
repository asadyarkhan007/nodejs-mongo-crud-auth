const {Employee} = require("../model/employee");

async function getAllEmployees() {
  try {
    const employees = await Employee.find().select('firstName lastName age');
    return employees;
  } catch (error) {
    throw error;
  }
}

async function getEmployee(id) {
    try {
      const employee = await Employee.findById(id)
      return employee;
    } catch (error) {
      throw error;
    }
  }
  

async function createEmployee(employeeData) {
  try {
    const newEmployee = new Employee(employeeData);
    await newEmployee.save();
    return newEmployee;
  } catch (error) {
    throw error;
  }
}

async function updateEmployee(id, employeeData) {
    try {
      const updateEmp= await Employee.findByIdAndUpdate(id, employeeData);
      return updateEmp;
    } catch (error) {
      throw error;
    }
  }
  

async function deleteEmployeeById(employeeId) {
    try {
        const deletedEmployee = await Employee.findOneAndDelete(employeeId);
        return deletedEmployee;
      } catch (error) {
        throw error;
      }
  }

module.exports = {
  getAllEmployees,
  getEmployee,
  createEmployee,
  deleteEmployeeById,
  updateEmployee
};
