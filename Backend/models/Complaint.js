const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    societyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "societies",
      required: true
    },

    raisedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    flatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "flats",
      required: true
    },

    category: {
      type: String,
      enum: ["plumbing", "electricity", "cleaning", "security", "other"],
      required: true
    },

    description: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["open", "in_progress", "resolved"],
      default: "open"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("complaints", complaintSchema);
