import axios from "axios";
import { Toast } from "components";

const isEmailValid = email => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email) ? true : false;
};

const isPhoneValid = phone => {
  return phone.length === 10;
};

const validateUser = email => {
  if (!isEmailValid(email)) {
    return {
      email: "Enter a valid email id",
    };
  }
  return {
    email: "",
  };
};

export { isEmailValid, isPhoneValid, validateUser };

const createUser = async (
  signupForm,
  setUserErr,
  setSignupForm,
  dispatchUser,
  navigate,
  location
) => {
  const userErrors = validateUser(signupForm.email);
  setUserErr(userErrors);
  if (userErrors["email"]) {
    return;
  }
  try {
    const response = await axios.post("api/auth/signup", signupForm);
    if (response.status === 201) {
      setSignupForm({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: "",
      });
      setUserErr({ email: "", phone: "" });
      dispatchUser({
        type: "SIGNUP_SUCCESS",
        payload: response.data.createdUser,
      });
      localStorage.setItem("userToken", response.data.encodedToken);
      navigate(location?.state?.from?.pathname, { replace: true });
      Toast({
        message: "Sign up successful.",
        type: "success",
      });
    } else {
      Toast({
        message: "Signup failed. Please try again.",
        type: "error",
      });
    }
  } catch (err) {
    if (err.response && err.response.status === 422) {
      Toast({
        message: "Email already exists, use different one.",
        type: "error",
      });
    } else
      Toast({
        message: "Signup failed. Please try again.",
        type: "error",
      });
  }
};

const loginUser = async (loginForm, dispatchUser, navigate, location) => {
  try {
    const response = await axios.post("api/auth/login", loginForm);
    if (response.status === 200) {
      localStorage.setItem("userToken", response.data.encodedToken);
      dispatchUser({
        type: "SET_USER_LOGIN",
        payload: response.data.foundUser,
      });
      navigate(location?.state?.from?.pathname, { replace: true });
      Toast({
        message: "Signed in successfully.",
        type: "success",
      });
    } else {
      Toast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });
    }
  } catch (err) {
    Toast({
      message: "Invalid credentials. Please try again.",
      type: "error",
    });
  }
};

const signoutUser = dispatchUser => {
  localStorage.removeItem("userToken");
  dispatchUser({ type: "LOGOUT_USER" });
  Toast({
    message: "Signed out successfully.",
    type: "success",
  });
};

export { createUser, loginUser, signoutUser };
