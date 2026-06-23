const API_URL = "http://localhost:5000/api/cart";


export const addToCart = async ( foodId, quantity ) => {
	const token = localStorage.getItem("token")

	const response = await fetch(
		`${API_URL}/add`,
		{
			method: "POST",

			headers: {
				"Content-Type": "application/json",

				Authorization: `Bearer ${token}`
			},

			body: JSON.stringify({
				foodId, quantity
			}),
		}
	);

	return await response.json();
};



export const getCart = async () => {
	const token = localStorage.getItem("token");

	const response = await fetch(
		`${API_URL}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	return await response.json();
}



export const updateCartQuantity = async (foodId, quantity) => {
	const token = localStorage.getItem("token")

	const response = await fetch(
		`${API_URL}/update`,
		{
			method: "PUT",

			headers: {
				"Content-Type": "application/json",

				Authorization: `Bearer ${token}`,
			},

			body: JSON.stringify({foodId, quantity}),
		}
	);

	return await response.json();
};


export const removeCartItem = async (foodId) => {
	const token = localStorage.getItem("token");

	const response = await fetch(
		`${API_URL}/remove/${foodId}`,
		{
			method: "DELETE",

			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	return await response.json();
}
