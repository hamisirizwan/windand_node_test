const { Class, Staff, Stream } = require("../../models");

const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll({
      include: [{ model: Staff, as: "head" }],
    });

    let classWithStreams = [];
    for (const item of classes) {
      const classStreams = await Stream.findAll({
        where: {
          classId: item.id,
        },
      });
      console.log(item.dataValues);
      classWithStreams.push({ ...item.dataValues, streams: classStreams });
    }
    res
      .status(201)
      .json({
        message: "classes fetched successfully",
        data: classWithStreams,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllClasses;
