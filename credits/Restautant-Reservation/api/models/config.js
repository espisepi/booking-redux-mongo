var mongoose = require("mongoose");
const tableSchema = require("./table").schema;

var configSchema = new mongoose.Schema({
  tablesDefault: [tableSchema]
});
var Config = mongoose.model("Config", configSchema);

module.exports.model = Config;
module.exports.schema = configSchema;
