const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const webTemplateSchema = new Schema({
  username: String,
  password: String
});

const template = mongoose.model("webtemplate", webTemplateSchema);

module.exports = template;
