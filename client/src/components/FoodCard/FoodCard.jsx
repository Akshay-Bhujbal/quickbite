import "./FoodCard.css"

function FoodCard( {food} ) {
  return (
    <div className='food-card'>
			<div className='food-image'>
				Food Image
			</div>

			<h3>{food.title}</h3>

			<p>{food.category}</p>

			<h4>{food.price}</h4>

			<button>Add to Cart</button>
    </div>
  )
}

export default FoodCard;