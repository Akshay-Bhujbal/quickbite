import "./FoodCard.css"
import { addToCart } from "../../services/cartService";


function FoodCard( {food} ) {

	const handleAddToCart = async () => {
		try {
			const response = await addToCart(food._id, 1);
			
			alert(response.message);
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <div className='food-card'>
			<div className='food-image'>
				Food Image
			</div>

			<h3>{food.title}</h3>

			<p>{food.category}</p>

			<h4>{food.price}</h4>

			<button onClick={handleAddToCart}>
				Add to Cart
			</button>
    </div>
  )
}

export default FoodCard;