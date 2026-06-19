const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const authMiddleware = require("./middleware/authMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);

app.use("/api/food", foodRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/order", orderRoutes);

app.get("/", (req,res) => {
  res.send("QuickBite API Running")
});

app.get("/api/test", authMiddleware, (req, res) => {
	res.json({
		message: "Protected route accessed",
		user: req.user,
	});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
