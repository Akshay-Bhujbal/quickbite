const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
		title: {
			type: String,
			required: true,
		},

		description: {
			type: String,
			required: true,
		},

		category: {
			type: String,
			required: true,
		},

		price: {
			type: Number,
			required: true
		},

		image: {
			type: String,
			default: "default-food.png",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Food", foodSchema);