const API_URL = "http://localhost:5000/api/food";

export const getAllFoods = async () => {
  const response = await fetch(`${API_URL}/all`);

	return await response.json();
};

export const deleteFood = async (foodId) => {
	const response = await fetch(
		`${API_URL}/delete/${foodId}`,
		{
			method: "DELETE",
		}
	);

	return await response.json();
}