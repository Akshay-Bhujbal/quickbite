import "./MenuPage.css"
import FoodCard from '../../components/FoodCard/FoodCard'
import { useState, useEffect } from 'react';
import { getAllFoods } from '../../services/foodService';

function MenuPage() {
  const [foods, setFoods] = useState([]);

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

  return (
    <div className='menu-page'>
      <h1>Our Menu</h1>

      <div className="food-grid">
        {foods.map((food) => (
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