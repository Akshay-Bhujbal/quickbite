const API_URL = "http://localhost:5000/api/food";

export const getAllFoods = async () => {
  const response = await fetch(`${API_URL}/all`);

	return await response.json();
};

export const addFood = async (formData) => {
	const response = await fetch(
		`${API_URL}/add`,
		{
			method: "POST",
			body: formData,
		}
	);

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


export const getFoodById = async (foodId) => {
	const response = await fetch(
		`${API_URL}/all`
	);

	const foods = await response.json()

	return foods.find((food) => food._id === foodId)
}


export const updateFood = async (foodId, updatedFood) => {
	const response = await fetch(
		`${API_URL}/update/${foodId}`,
		{
			method: "PUT",

			headers: {
				"content-type": "application/json",
			},

			body: JSON.stringify(updatedFood),
		}
	);

	return await response.json();
};