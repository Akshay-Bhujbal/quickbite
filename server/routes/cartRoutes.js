const express = require("express");

const {
	addToCart,
	getCart,
	updateQuantity,
	removeItem,
} = require("../controllers/cartController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
	"/add",
	authMiddleware,
	addToCart
);

router.get(
	"/",
	authMiddleware,
	getCart
);

router.put(
	"/update",
	authMiddleware,
	updateQuantity
);

router.delete(
	"/remove/:foodId",
	authMiddleware,
	removeItem
);

module.exports = router;