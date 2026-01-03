const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema(
  {
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

    slotNumber: {
      type: String,
      required: true
    },

    vehicleNumber: {
      type: String,
      required: true
    },

    vehicleType: {
      type: String,
      enum: ["2W", "4W"],
      required: true
    },

    status: {
      type: String,
      enum: ["occupied", "vacant"],
      default: "occupied"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("parkings", parkingSchema);
