import React from 'react'
import { useState, useEffect} from 'react'
import { deleteFood, getAllFoods } from '../../services/foodService';

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
    <div>
      <h1>Food Management</h1>

      {foods.map((food) => (
        <div key={food._id} >

          <h3>{food.title}</h3>

          <p>{food.category}</p>

          <p>₹{food.price}</p>

          <button onClick={handleDelete(food._id)}>
            Delete
          </button>

        </div>
      ))}
    </div>
  )
}

export default FoodsPage;