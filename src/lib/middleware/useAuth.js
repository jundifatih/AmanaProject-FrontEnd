import axios from "axios";

export const useAuth = async () => {
  const token = localStorage.getItem("Authorization");
  let isAuthenticated = false;

  if (!token) {
    return { isAuthenticated: false };
  }

  const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/protected/check-login`;

  try {
    const response = await axios.post(
      API_ENDPOINT,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    isAuthenticated = true;
  } catch (error) {
    console.error("Error during login", error);
    if (error.response) {
      console.error("Response status", error.response.status);
      console.error("Response data", error.response.data);
    }
    isAuthenticated = false;
  }

  return { isAuthenticated };
};
