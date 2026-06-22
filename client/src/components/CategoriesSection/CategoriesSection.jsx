import React from 'react'
import "./CategoriesSection.css"

function CategoriesSection() {
  return (
		<section className='categories-section'>
			<h2>Categories</h2>

			<div className='categories-section-list'>
				<p className='category-card'>Burger</p>
				<p className='category-card'>Pizza</p>
				<p className='category-card'>Drink</p>
				<p className='category-card'>French Fries</p>
				<p className='category-card'>Veggies</p>
			</div>
		</section>
  )
}

export default CategoriesSection;