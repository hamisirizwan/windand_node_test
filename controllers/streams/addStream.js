const { Staff, Class, Stream } = require("../../models");

const addStream = async (req, res) => {
  const { name, abbreviation, staff_id } = req.body;
  const { class_id } = req.params;
  try {
    if (!name || !abbreviation || !staff_id || !class_id) {
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
        .json({ error: `only TEACHING staff allowed to head streams` });
    }
    const existingClass = await Class.findByPk(Number(class_id));
    if (!existingClass) {
      return res
        .status(400)
        .json({ error: `Class with id ${class_id} does not exist` });
    }

    const newStream = await Stream.create({
      name,
      abbreviation,
      staffId: existingStaff.id,
      classId: existingClass.id,
    });
    res
      .status(201)
      .json({ message: "stream created successfully", data: newStream });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = addStream;
