import axios from "axios";
export const loginController = async (email, password) => {
  const data = await axios.post(`https://entegrenity.com/api/users/login`, {
    email,
    password,
  });

  return data;
};

export const checkUser = async (token) => {
  const data = await axios.post(`https://entegrenity.com/api/users/checkuser`, {
    clientToken: token,
  });
  return data;
};
