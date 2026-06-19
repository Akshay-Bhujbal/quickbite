const express = require("express");

const {
	addFood,
	getAllFoods,
	updateFood,
	deleteFood,
} = require("../controllers/foodController");

const upload = require("../utils/multer");

const router = express.Router();

router.post(
	"/add",
	upload.single("image"),
	addFood
);

router.get("/all", getAllFoods);

router.put("/update/:id", updateFood);

router.delete("/delete/:id", deleteFood);

module.exports = router;