import React from 'react'
import { useState, useRef } from 'react'
import { addFood } from '../../services/foodService'
import { useNavigate } from "react-router-dom"
import "./AddFoodPage.css"

function AddFoodPage() {
  const categories = [
    "Burger",
    "Pizza",
    "Drink",
    "French Fries",
    "Veggies",
  ]

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: null,
  });

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("price", formData.price);

      if (formData.image) {
        data.append("image",formData.image);
      }

      const response = await addFood(data);

      alert(response.message)

      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        image: null
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
       }

      navigate("/foods")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='add-food-page'>
      <h1>Add New Food</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Food Name</label>

          <input 
            type='text' 
            name='title'
            placeholder='Enter food name'
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
            <option value="">
              Select Category
            </option>

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
            type="number"
            name='price'
            placeholder='Enter Price'
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea 
            name="description"
            placeholder='Enter description'
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Food Image</label>

          <input 
            ref={fileInputRef}
            type="file"
            name='image'
            accept='image/*'
            onChange={handleChange}
            required
          />
        </div>

        <button type='submit'>
          Add Food
        </button>

      </form>
    </div>
  )
}

export default AddFoodPage