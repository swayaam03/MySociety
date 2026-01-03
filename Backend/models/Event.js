const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    societyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "societies",
      required: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    eventDate: {
      type: Date,
      required: true
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    status: {
      type: String,
      enum: ["upcoming", "completed", "cancelled"],
      default: "upcoming"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("events", eventSchema);
