const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
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

    message: {
      type: String,
      required: true
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    validTill: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("notices", noticeSchema);
