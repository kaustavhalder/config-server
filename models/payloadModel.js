const mongoose = require("mongoose");

const payloadSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: [true, "A file name must be provided for config loading"],
  },
  repoUri: {
    type: String,
    required: [true, "GitHub URI must be provided for API to work "],
  },
});

const payloadModel = new mongoose.Model("payload", payloadSchema);

module.exports = payloadModel;
