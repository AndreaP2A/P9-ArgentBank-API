const API_URL = "http://localhost:3001/api/v1/user";

/**
 * Handles the response from a fetch request.
 *
 * @param {Response} response - The response object from the fetch request.
 * @returns {Promise<Object>} The parsed JSON data from the response.
 * @throws Will throw an error if the response is not ok.
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};

/**
 * Logs in the user with the provided credentials.
 *
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.email - The user's email.
 * @param {string} credentials.password - The user's password.
 * @returns {Promise<Object>} The response data.
 * @throws Will throw an error if the fetch operation fails.
 */
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

/**
 * Fetches the user profile from the API.
 *
 * @param {string} token - The authentication token.
 * @returns {Promise<Object>} The user profile data.
 * @throws Will throw an error if the fetch operation fails.
 */
export const getUserProfile = async (token) => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await handleResponse(response);
    console.log("User profile response:", data);
    return data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

/**
 * Updates the user profile with the provided new name.
 *
 * @param {string} token - The authentication token.
 * @param {Object} newName - The new name to update the profile with.
 * @returns {Promise<Object>} The response from the API.
 * @throws Will throw an error if the update fails.
 */
export const updateUserProfile = async (token, newName) => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newName),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
