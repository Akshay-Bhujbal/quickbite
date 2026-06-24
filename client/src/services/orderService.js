const API_URL = "http://localhost:5000/api/order"

export const placeOrder = async (orderData) => {
  const token = localStorage.getItem("token");

	const response = await fetch(
		`${API_URL}/place`,
		{
			method: "POST",

			headers: {
				"Content-Type": "application/json",

				Authorization: `Bearer ${token}`
			},

			body: JSON.stringify(orderData),
		}
	);

	return await response.json();
};


export const getMyOrders = async () => {
	const token = localStorage.getItem("token");

	const response = await fetch(
		`${API_URL}/my-orders`,
		{
			headers: {
				Authorization: `Bearer ${token}`
			},
		}
	);

	return await response.json();
}