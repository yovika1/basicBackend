const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    // category: {
    //     type: String,
    //     ref:"category"
    // },
    // image: {
    //     type: String,
    //     required: true
    // },
    // user:{
    //     type:String,
    //     ref:"user"
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
