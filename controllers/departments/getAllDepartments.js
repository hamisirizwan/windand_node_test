const { Class, Staff, Stream, Department } = require("../../models");

const getAllDepartments = async (req, res) => {
  try {
    const allDepartments = await Department.findAll({
      include: [{ model: Staff, as: "head" }],
    });
    res
      .status(201)
      .json({
        message: "departments fetched successfully",
        data: allDepartments,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllDepartments;
