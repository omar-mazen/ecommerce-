import { getCookie } from "../util/helper";
import axios, { axiosPrivate } from "./axios";

export async function getUserById(id) {
  try {
    const { data } = await axios.get(`/User/${id}`);

    if (data?.errMass) throw new Error(data.errMass);

    return data.user;
  } catch (error) {
    throw new Error(error.response.data.errMass);
  }
}

export async function updateUser({ userName }) {
  try {
    const { data } = await axiosPrivate.put("/user/updateProfile", {
      userName,
    });
    if (data?.errMass) throw new Error(data.errMass);
  } catch (error) {
    throw new Error(error.response.data.errMass);
  }
}

export async function updatePassword({ oldPassword, password, cPassword }) {
  try {
    const data = await axiosPrivate.patch(`/user/updatePassword`, {
      oldPassword,
      password,
      cPassword,
    });
    if (data?.errMass) throw new Error(data.errMass);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateProfilePicture(image) {
  try {
    const { data } = await axios.patch("/user/ProfilePic", image, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Hamada__${getCookie("refresh_token")}`,
      },
    });
    if (data?.errMass) throw new Error(data.errMass);
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function deleteProfilePicture() {
  try {
    const { data } = axiosPrivate.patch("/user/deleteProfilePic");
    if (data?.errMass) throw new Error(data.errMass);
  } catch (error) {
    throw new Error(error.message);
  }
}
