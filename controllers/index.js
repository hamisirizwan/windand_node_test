const addClass = require("./classes/addClass");
const getAllClasses = require("./classes/getAllClasses");
const addDepartment = require("./departments/addDepartment");
const addDepartmentHead = require("./departments/addDepartmentHead");
const getAllDepartments = require("./departments/getAllDepartments");
const getDepartmentHeads = require("./departments/getDepartmentHeads");
const addStaff = require("./staff/addStaff");
const getAllStaff = require("./staff/getAllStaff");
const addStream = require("./streams/addStream");
const getClassStreams = require("./streams/getClassStreams");

module.exports = {
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
};
