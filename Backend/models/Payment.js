const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    societyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "societies",
      required: true
    },

    maintenanceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "maintenances",
      required: true
    },

    paidBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    amount: {
      type: Number,
      required: true
    },

    paymentMode: {
      type: String,
      enum: ["upi", "card", "cash", "netbanking"],
      required: true
    },

    transactionId: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["success", "failed"],
      default: "success"
    },

    paymentDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("payments", paymentSchema);
