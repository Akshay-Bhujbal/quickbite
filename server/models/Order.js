const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},

		items: [
			{
				foodId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Food",
					required: true,
				},

				quantity: {
					type: Number,
					required: true,
				},
			},
		],

		address: {
			type: String,
			required: true,
		},

		totalAmount: {
			type: Number,
			required: true,
		},

		status: {
			type: String,
			enum: [
				"Pending",
				"Preparing",
				"Out for Delivery",
				"Delivered",
			],
			default: "Pending",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Order", orderSchema);