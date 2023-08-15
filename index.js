const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const db = require("./DB/sequelize");
const ROUTER = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

//test db connection
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// db.sync({ alter: true})
//   .then(() => {
//     console.log("Database tables created successfully");
//   })
//   .catch((error) => {
//     console.error("Error creating database tables:", error);
//   });

app.use("/api/v1", ROUTER);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
