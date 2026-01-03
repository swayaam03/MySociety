const mongoose = require("mongoose");

const societySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    address: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    pincode: {
      type: String,
      required: true
    },

    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("societies", societySchema);
