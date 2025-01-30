import axios, { axiosPrivate } from "./axios";
export async function signup({ userName, email, password, cPassword, phone }) {
  try {
    await axios.post("/auth/signup", {
      userName,
      email,
      password,
      cPassword,
      phone,
    });
  } catch (error) {
    throw new Error(error.response.data.errMass);
  }
}
export async function login({ email, password }) {
  try {
    const response = await axios.post("/auth/signin", { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.errMass); // Throw the error to be caught elsewhere if needed
  }
}
export async function sendForgetCode({ email }) {
  try {
    return await axios.patch("/auth/sendCode", { email });
  } catch (error) {
    throw new Error(error.response.data.errMass);
  }
}
export async function forgotPassword({ email, code, password, cPassword }) {
  try {
    return await axios.patch("/auth/forgetPassword", {
      email,
      code,
      password,
      cPassword,
    });
  } catch (error) {
    throw new Error(error.response.data.errMass);
  }
}
export async function createAccount({ userName, email, phone, role }) {
  try {
    await axiosPrivate.post("/auth/createAccount", {
      userName,
      email,
      phone,
      role,
    });
  } catch (error) {
    throw new Error(error.response.data.errMass);
  }
}
