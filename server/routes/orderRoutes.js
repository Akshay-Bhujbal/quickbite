const express = require("express");

const {
	placeOrder,
	getMyOrders,
	getAllOrders,
	updateOrderStatus,
} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authMiddleware");

const adminMiddleware = require("../middleware/adminMiddleware")

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
	adminMiddleware,
	getAllOrders
);

router.put(
	"/status/:id",
	authMiddleware,
	adminMiddleware,
	updateOrderStatus
);

module.exports = router;