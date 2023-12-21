import axios from "axios";

export const useCheckNewUser = async () => {
  const token = localStorage.getItem("Authorization");
  let isNewUser = true;

  const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/protected/mosque/check`;
  try {
    const response = await axios.post(
      API_ENDPOINT,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    isNewUser = false;
  } catch (error) {
    console.error("Error during login", error);
    if (error.response) {
      console.error("Response status", error.response.status);
      console.error("Response data", error.response.data);
    }
    isNewUser = true;
  }

  return { isNewUser };
};
