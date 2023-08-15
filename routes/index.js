const express = require("express");
const {
  addStaff,
  addClass,
  getAllClasses,
  addStream,
  getAllStaff,
  getClassStreams,
  addDepartment,
  addDepartmentHead,
  getAllDepartments,
  getDepartmentHeads,
} = require("../controllers");

const router = express.Router();

//write all our routes

//staff routes
router.post("/staff/add", addStaff);
router.get("/staff/get-all", getAllStaff);

//class
router.post("/class/add", addClass);
router.get("/class/get-all", getAllClasses);

//streams
router.post("/stream/add/:class_id", addStream);
router.get("/stream/class-streams/:class_id", getClassStreams);

//departmets
router.post("/department/add", addDepartment);
router.post("/department/add-head", addDepartmentHead);
router.get("/department/get-all", getAllDepartments);
router.get("/department/heads/:dep_id", getDepartmentHeads);

module.exports = router;
