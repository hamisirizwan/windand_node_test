const db = require("./sequelize")

db.sync()
  .then(() => {
    console.log("Database tables created successfully");
  })
  .catch((error) => {
    console.error("Error creating database tables:", error);
  });