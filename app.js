const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");
const setupController = require("./controllers/setupController");

const port = process.env.PORT || 3000;

app.use("/", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString());
setupController(app);

app.listen(port);
