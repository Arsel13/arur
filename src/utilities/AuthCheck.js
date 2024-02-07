import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { info_toaster } from "../utilities/Toaster";

export const setLoginStatus = (data) => {
  try {
    localStorage.setItem("loginStatus", data);
  } catch (err) {}
};

export const AuthCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem("loginStatus") ||
      !localStorage.getItem("featureData") ||
      !localStorage.getItem("accessToken")
    ) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("loginStatus");
      localStorage.removeItem("featureData");
      localStorage.removeItem("userName");
      navigate("/sign-in");
      info_toaster("Please login first !");
    }
  }, [navigate]);
};
