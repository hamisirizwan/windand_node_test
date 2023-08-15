const { Staff, Class, Department, DepartmentHead } = require("../../models");

const addDepartmentHead = async (req, res) => {
  const { department_id, staff_id } = req.body;
  try {
    if (!department_id || !staff_id) {
      return res.status(400).json({ error: "missing required parameters" });
    }
    const existingStaff = await Staff.findByPk(Number(staff_id));
    if (!existingStaff) {
      return res
        .status(400)
        .json({ error: `staff with id ${staff_id} does not exist` });
    }

    if (existingStaff.type !== "TEACHING") {
      return res
        .status(400)
        .json({ error: `only TEACHING staff allowed to head departments` });
    }

    const existingDepartment = await Department.findByPk(Number(department_id));
    if (!existingDepartment) {
      return res
        .status(400)
        .json({ error: `department with id ${department_id} does not exist` });
    }

    if (existingDepartment.staffId) {
      if (existingDepartment.staffId === Number(staff_id)) {
        return res.status(400).json({
          error: `Staff already heads the ${existingDepartment.name} department`,
        });
      }

      const departmentHeadHistory = await DepartmentHead.create({
        start_date: existingDepartment.updatedAt,
        end_date: new Date().toISOString(),
        departmentId: existingDepartment.id,
        staffId: existingDepartment.staffId,
      });

      const updatedDepartment = await existingDepartment.update({
        staffId: Number(staff_id),
      });

      // console.log(departmentHeadHistory)
      return res.status(201).json({
        message: "department head set successfully",
        data: updatedDepartment,
      });
    }

    const updatedDepartment = await existingDepartment.update({
      staffId: Number(staff_id),
    });

    return res.status(201).json({
      message: "department head set successfully",
      data: updatedDepartment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = addDepartmentHead;
