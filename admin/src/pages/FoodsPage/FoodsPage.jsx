import React from 'react'
import { useState, useEffect} from 'react'
import { deleteFood, getAllFoods } from '../../services/foodService';
import "./FoodPage.css"
import {Link} from "react-router-dom"

function FoodsPage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, [])

  const fetchFoods = async () => {
    try {
      const data = await getAllFoods();

      console.log(data)

      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (foodId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food?"
    );

    if (!confirmDelete) return;

    try {
      const response = await deleteFood(foodId);

      alert(response.message);

      fetchFoods();
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <div className='food-management'>
      <h1>Food Management</h1>

      <div className='food-list'>
        {foods.map((food) => (
          <div className='food-item' key={food._id} >

            <h3>{food.title}</h3>

            <p>{food.category}</p>

            <p>₹{food.price}</p>

            <Link to={`/edit-food/${food._id}`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => handleDelete(food._id)}>
              Delete
            </button>

          </div>
        ))}
      </div>
      
    </div>
  )
}

export default FoodsPage;