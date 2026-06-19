const Food = require("../models/Food");

const addFood = async (req, res) => {
	try {
		const {
			title,
			description,
			category,
			price
		} = req.body;

		

		const image = req.file
  			? req.file.filename
  			: "default-food.png";

		const food = await Food.create({
			title,
			description,
			category,
			price,
			image
		});

		res.status(201).json({
			message: "Food added successfully",
			food
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const getAllFoods = async (req, res) => {
	try {
		const foods = await Food.find();

		res.status(200).json(foods);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const updateFood = async (req, res) => {
	try {
		const  updatedFood = await Food.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);

		res.status(200).json({
			message: "Food Updated",
			updatedFood,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

const deleteFood = async (req, res) => {
	try {
		await Food.findByIdAndDelete(req.params.id);

		res.status(200).json({
			message: "Food Deleted",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};


module.exports = {
	addFood,
	getAllFoods,
	updateFood,
	deleteFood,
};