const mongoose = require("mongoose");

const LoginLogSchema = mongoose.Schema(
  {
    User: {
      type: String,
      required: [true, "user is required to log"],
    },
    IP: {
      type: String,
      required: [true, "IP is required"],
    },
  },
  {
    timestamps: true,
  }
);

const LoginLog = mongoose.model("LoginLog", LoginLogSchema);
module.exports = LoginLog;
