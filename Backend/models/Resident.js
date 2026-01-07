const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    societyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "societies",
      required: true
    },

    flatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "flats",
      required: true
    },

    residentType: {
      type: String,
      enum: ["owner", "tenant"],
      required: true
    },

    moveInDate: {
      type: Date,
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

module.exports = mongoose.model("residents", residentSchema);
