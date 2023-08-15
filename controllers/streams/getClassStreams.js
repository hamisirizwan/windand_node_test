const { Class, Staff, Stream } = require("../../models");

const getClassStreams = async (req, res) => {
  const class_id = parseInt(req.params.class_id);
  try {
    const allClassStreams = await Stream.findAll({
      include: {
        model: Staff,
        as: "teacher",
      },
      where: {
        classId: class_id,
      },
    });
    res
      .status(201)
      .json({ message: "data fetched successfully", data: allClassStreams });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getClassStreams;
