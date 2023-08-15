const { Department, DepartmentHead, Staff } = require("../../models");

// const  = require("../../models/classModel")

const getDepartmentHeads = async (req, res) => {
  const department_id = Number(req.params.dep_id);
  try {
    const existingDepartment = await Department.findByPk(Number(department_id));
    if (!existingDepartment) {
      return res
        .status(400)
        .json({ error: `department with id ${department_id} does not exist` });
    }

    if (!existingDepartment.staffId) {
      return res
        .status(400)
        .json({
          error: `${existingDepartment.name} has no head at the moment`,
        });
    }

    const currentHead = await Staff.findByPk(existingDepartment.staffId);
    const depHeadHistory = await DepartmentHead.findAll({
      where: {
        departmentId: department_id,
      },
      include: {
        model: Staff,
        as: "head",
      },
    });

    const respData = {
      currentHead,
      pastHeads: depHeadHistory,
    };
    res
      .status(201)
      .json({
        message: "departmentHeads fetched successfully",
        data: respData,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDepartmentHeads;
