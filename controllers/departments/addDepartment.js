const { Staff, Class, Department } = require("../../models");

const addDepartment = async (req, res) => {
  const { name, staff_id } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ error: "Department name is required" });
    }

    let existingStaff;
    if (staff_id) {
      existingStaff = await Staff.findByPk(Number(staff_id));
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
    }

    const newDepartment = await Department.create({
      name,
      staffId: existingStaff?.id || null,
    });
    res
      .status(201)
      .json({
        message: "department created successfully",
        data: newDepartment,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = addDepartment;
