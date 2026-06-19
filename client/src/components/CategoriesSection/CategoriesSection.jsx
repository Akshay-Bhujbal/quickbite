import React from 'react'
import "./CategoriesSection.css"

function CategoriesSection() {
  return (
		<section className='categories'>
			<h2>Categories</h2>

			<div className='categories-list'>
				<p className='category-card'>Pizza</p>
				<p className='category-card'>Burger</p>
				<p className='category-card'>Indian</p>
				<p className='category-card'>Chinese</p>
				<p className='category-card'>Desserts</p>
			</div>
		</section>
  )
}

export default CategoriesSection;