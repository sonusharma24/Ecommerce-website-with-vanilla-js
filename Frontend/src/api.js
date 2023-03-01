import { apiUrl } from "./config.js";

export const getProduct = async (id) => {
  console.log(id);
  try {
    const response = await fetch(`${apiUrl}api/products/${id}`);
    if (!response.ok) {
      throw new Error(`data is not comming from the server`);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    alert(`error ${error.message}`);
    return { error: error.message };
  }
};
