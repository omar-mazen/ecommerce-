import axios from "./axios";

export async function getAllCategories() {
  let data;
  try {
    const response = await axios.get("/category/");
    data = response.data;
    if (data?.errMass) throw new Error(data.errMass);
  } catch (error) {
    throw new Error(error.response.data.errMass);
  }
  return data.categories;
}
export async function getCategoryById({ id }) {
  let data;
  try {
    const response = await axios.get(`/category/${id}`);
    data = response.data;
    if (data?.errMass) throw new Error(data.errMass);
  } catch (error) {
    throw new Error(error.response.data.errMass);
  }
  return data;
}
