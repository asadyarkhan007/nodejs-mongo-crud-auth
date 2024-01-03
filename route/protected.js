const express = require("express");
const employeeController = require("../controller/employee.js");
const router = express.Router();
const {
  getAllEmployee,
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
} = employeeController;


router
  .route("/employees")
  .get(getAllEmployee)
  .post(postEmployee)
router.route("/employees/:id")
.get(getEmployee)
.delete(deleteEmployee)
.put(putEmployee)

module.exports = router;
