const { Class, Staff, Stream } = require("../../models");

const getAllStaff = async (req, res) => {
  try {
    const allStaff = await Staff.findAll({
      include: [{ model: Stream }, { model: Class }],
    });
    res
      .status(201)
      .json({ message: "staff fetched successfully", data: allStaff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllStaff;
