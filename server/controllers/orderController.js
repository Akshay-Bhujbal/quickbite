const Order = require("../models/Order");
const Cart = require("../models/Cart");

const placeOrder = async (req, res) => {
  try {
		const { address, totalAmount} = req.body;

		const cart = await Cart.findOne({
			userId: req.user.id,
		});

		if (!cart || cart.items.length === 0) {
			return res.status(400).json({
				message: "Cart is empty",
			});
		} 

		const order = await Order.create({
			userId: req.user.id,
			items: cart.items,
			address,
			totalAmount,
		});

		cart.items = [];

		await cart.save();

		res.status(201).json({
			message: "Order placed successfully",
			order,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};


const getMyOrders = async (req, res) => {
	try {
		const orders = await Order.find({
			userId: req.user.id,
		}).populate("items.foodId");

		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};



const getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find()
			.populate("userId")
			.populate("items.foodId");

			res.status(200).json(orders);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};



const updateOrderStatus = async (req, res) => {
	try {
		const { status } = req.body;

		const order = await Order.findByIdAndUpdate(
			req.params.id,
			{ status },
			{ new: true }
		);

		res.status(200).json({
			message: "Order status updated",
			order,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};


module.exports = {
	placeOrder,
	getMyOrders,
	getAllOrders,
	updateOrderStatus,
};