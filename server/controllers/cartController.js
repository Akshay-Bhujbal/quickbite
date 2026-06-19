const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  try {
		const { foodId, quantity } = req.body;

		let cart = await Cart.findOne({
			userId: req.user.id,
		});

		if (!cart) {
			cart = await Cart.create({
				userId: req.user.id,
				items: [
					{
						foodId,
						quantity,
					},
				],
			});
		} else {
			const existingItem = cart.items.find(
				(item) => 
					item.foodId.toString() === foodId
			);

			if (existingItem) {
				existingItem.quantity += quantity;
			} else {
				cart.items.push({
					foodId,
					quantity,
				});
			}

			await cart.save();
		}
		
		res.status(200).json({
			message: "Item added to cart",
			cart
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

// get cart

const getCart = async (req, res) => {
	try {
		const cart = await Cart.findOne({
			userId: req.user.id,
		}).populate("items.foodId");

		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
 };


// update quantity

const updateQuantity = async (req, res) => {
	try {
		const { foodId, quantity } = req.body;

		const cart = await Cart.findOne({
			userId: req.user.id,
		});

		const item = cart.items.find(
			(item) =>
				item.foodId.toString() === foodId
		);

		if (!item) {
			return res.status(404).json({
				message: "item not found",
			});
		}
			
		item.quantity = quantity;

		await cart.save();

		res.status(200).json({
			message: "Quantity Updated",
			cart,
		});	 
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};


// remove item

const removeItem = async (req, res) => {
	try {
		const { foodId } = req.params;

		const cart = await Cart.findOne({
			userId: req.user.id,
		});

		cart.items = cart.items.filter(
			(item) =>
				item.foodId._id.toString() !== foodId
		);

		await cart.save();

		res.status(200).json({
			message: "Item removed",
			cart,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = {
	addToCart,
	getCart,
	updateQuantity,
	removeItem,
};