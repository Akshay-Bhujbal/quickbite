const API_URL = "http://localhost:5000/api/food";

export const getAllFoods = async () => {
	const response = await fetch(
		`${API_URL}/all`
	);

	return response.json();
}