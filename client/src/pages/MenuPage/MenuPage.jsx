import "./MenuPage.css"
import FoodCard from '../../components/FoodCard/FoodCard'
import { useState, useEffect } from 'react';
import { getAllFoods } from '../../services/foodService';

function MenuPage() {
  const [foods, setFoods] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const data = await getAllFoods();

      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  }

  const categories = [
    "All",
    "Burger",
    "Pizza",
    "Drink",
    "French Fries",
    "Vegies",
  ];

  const filteredFoods = foods.filter(
    (food) => {
      const matchesCategory =
        selectedCategory === "All" ||
        food.category === selectedCategory;

      const matchesSearch =
        food.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      return (
        matchesCategory &&
        matchesSearch
      )
    }
  )

  return (
    <div className='menu-page'>
      <h1>Our Menu</h1>

      <input 
        type="text" 
        placeholder="Search foods..."
        value={searchTerm}
        onChange={(e) => 
          setSearchTerm(e.target.value)
        }
      />

      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => 
              setSelectedCategory(category)
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="food-grid">
        {filteredFoods.map((food) => (
          <FoodCard
            key={food._id}
            food={food}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuPage;