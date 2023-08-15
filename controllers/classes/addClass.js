const { Staff, Class } = require("../../models");

const addClass = async (req, res) => {
  const { name, abbreviation, staff_id } = req.body;
  try {
    if (!name || !abbreviation || !staff_id) {
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
        .json({ error: `only TEACHING staff allowed to head classes` });
    }
    const newClass = await Class.create({
      name,
      abbreviation,
      staffId: existingStaff.id,
    });
    res
      .status(201)
      .json({ message: "class created successfully", data: newClass });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = addClass;
