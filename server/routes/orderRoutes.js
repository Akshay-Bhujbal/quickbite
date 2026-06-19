const express = require("express");

const {
	placeOrder,
	getMyOrders,
	getAllOrders,
	updateOrderStatus,
} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
	"/place",
	authMiddleware,
	placeOrder
);

router.get(
	"/my-orders",
	authMiddleware,
	getMyOrders
)

router.get(
	"/all-orders",
	authMiddleware,
	getAllOrders
);

router.put(
	"/status/:id",
	authMiddleware,
	updateOrderStatus
);

module.exports = router;