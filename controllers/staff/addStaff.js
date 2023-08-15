const { Staff } = require("../../models");

const addStaff = async (req, res) => {
  const { name, number, type, position } = req.body;
  try {
    if (!name || !number || !type) {
      return res.status(400).json({ error: "missing required parameters" });
    }
    const validTypes = ["TEACHING", "NON-TEACHING"];

    if (!validTypes.includes(type)) {
      return res.status(400).json({ error: "Invalid staff type" });
    }
    if (type === "NON-TEACHING" && !position) {
      return res
        .status(400)
        .json({ error: "Position required for Non teaching staff" });
    }

    const newStaff = await Staff.create({
      name: name,
      number: number,
      type: type,
      position: position || "teacher",
    });
    res
      .status(201)
      .json({ message: "staff created successfully", data: newStaff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = addStaff;
