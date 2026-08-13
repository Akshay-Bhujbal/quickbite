const express = require("express");

const {
	addFood,
	getAllFoods,
	updateFood,
	deleteFood,
} = require("../controllers/foodController");

const upload = require("../utils/multer");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.post(
	"/add",
	authMiddleware,
	adminMiddleware,
	upload.single("image"),
	addFood
);

router.get("/all", getAllFoods);

router.put(
	"/update/:id",
	authMiddleware,
	adminMiddleware,
	updateFood
);

router.delete(
	"/delete/:id",
	authMiddleware,
	adminMiddleware,
	deleteFood
);

module.exports = router;