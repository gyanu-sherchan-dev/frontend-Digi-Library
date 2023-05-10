import axios from "axios";

const baseApiUrl = "http://localhost:8000/api/v1";
const userApiUrl = baseApiUrl + "/user";

//create user
export const postNewUser = async (userData) => {
  try {
    const { data } = await axios.post(userApiUrl, userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login user
export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userApiUrl + "/login", userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
