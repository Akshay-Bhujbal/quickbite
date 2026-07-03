import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getFoodById, updateFood } from '../../services/foodService';


function EditFoodPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const categories = [
    "Burger",
    "Pizza",
    "Drink",
    "French Fries",
    "Veggies",
  ];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    try {
      const data = await getFoodById(id);

      if (!data) {
        alert("Food not found");
        return;
      }

      setFormData({
        title: data.title,
        description: data.description,
        category: data.category,
        price: data.price,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value} = e.target;

    setFormData((prev) => ({
      ...prev, [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateFood(id, formData);

      alert(response.message);

      navigate("/foods")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='add-food-page'>
      <h1>Edit Food</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Food Name</label>

          <input 
            type="text" 
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            {categories.map((category) => (
              <option 
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Price</label>

          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type='submit'>
          Update Food
        </button>
      </form>
    </div>
  )
}

export default EditFoodPage