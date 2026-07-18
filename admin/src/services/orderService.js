const API_URL = "http://localhost:5000/api/order";

export const getAllOrders = async () => {
  const token = localStorage.getItem("token");

	const response = await fetch(
		`${API_URL}/all-orders`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	return await response.json();
};


export const updateOrderStatus = async ( orderId, status) => {
	const token = localStorage.getItem("token");

	const response = await fetch(
		`${API_URL}/status/${orderId}`,
		{
			method: "PUT",

			headers: {
				"Content-Type": "application/json",

				Authorization: `Bearer ${token}`,
			},

			body: JSON.stringify({ status }),
		}
	);

	return await response.json();
}