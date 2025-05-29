import axios from "axios";

const base_url = "http://localhost:8080/users/";

// Helper to extract a clean error message
const extractErrorMessage = (error: any, defaultMsg: string) => {
  return error?.response?.data?.errorMessage || defaultMsg;
};

const registerUser = async (user: any) => {
  try {
    const result = await axios.post(`${base_url}register`, user);
    return result.data;
  } catch (error: any) {
    throw new Error(extractErrorMessage(error, "Registration failed."));
  }
};

const loginUser = async (login: any) => {
  try {
    const result = await axios.post(`${base_url}login`, login);
    return result.data;
  } catch (error: any) {
    throw new Error(extractErrorMessage(error, "Login failed."));
  }
};

const sendOtp = async (email: any) => {
  try {
    const result = await axios.post(`${base_url}sendOtp/${email}`);
    return result.data;
  } catch (error: any) {
    throw new Error(extractErrorMessage(error, "Failed to send OTP."));
  }
};

const verifyOtp = async (email: any, otp: any) => {
  try {
    const result = await axios.get(`${base_url}verifyOtp/${email}/${otp}`);
    return result.data;
  } catch (error: any) {
    throw new Error(extractErrorMessage(error, "OTP verification failed."));
  }
};

const changePass = async (email: string, password: string) => {
  try {
    const result = await axios.post(`${base_url}changePass`, {
      email,
      password,
    });
    return result.data;
  } catch (error: any) {
    throw new Error(extractErrorMessage(error, "Password change failed."));
  }
};

export { registerUser, loginUser, sendOtp, verifyOtp, changePass };
