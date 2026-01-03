const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    societyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "societies",
      required: true
    },

    flatNumber: {
      type: String,
      required: true
    },

    floor: {
      type: Number,
      required: true
    },

    flatType: {
      type: String,
      enum: ["1BHK", "2BHK", "3BHK", "4BHK"],
      required: true
    },

    ownership: {
      type: String,
      enum: ["owner", "tenant"],
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

module.exports = mongoose.model("flats", flatSchema);
