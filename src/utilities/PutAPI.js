import axios from "axios";
import { BASE_URL } from "../utilities/URL";

export const PutAPI = async (url, featureId, putData) => {
  let config = {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  };
  try {
    const res = await axios.put(
      BASE_URL + url + `?featureId=${featureId}`,
      putData,
      config
    );
    return res;
  } catch (err) {}
};
