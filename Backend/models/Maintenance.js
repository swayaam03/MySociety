const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema(
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

    month: {
      type: String,
      required: true
      // Example: "September-2026"
    },

    amount: {
      type: Number,
      required: true
    },

    dueDate: {
      type: Date,
      required: true
    },

    status: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("maintenances", maintenanceSchema);
