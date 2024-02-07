import axios from "axios";

const PostAPI = async (url, postData) => {
  let config = {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  };
  try {
    let response = await axios.post(url, postData, config);
    return response;
  } catch (error) {}
};

export default PostAPI;