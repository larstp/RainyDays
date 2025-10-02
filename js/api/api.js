const API_URL = "https://v2.api.noroff.dev/rainy-days";

/**
 * Fetch all products from the API
 * @returns {Promise<Array>} Array of product objects
 */
export async function fetchAllProducts() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.data;
}

/**
 * Fetch a single product by ID from the API
 * @param {string} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export async function fetchProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data.data;
}
