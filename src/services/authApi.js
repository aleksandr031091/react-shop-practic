import axios from "axios";

const KEY = "AIzaSyAnqgsGtBH7sxi0sdsviPd-tsDuUvL83A4";

const registrUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`;

const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`;

export const registration = async (user) => {
  try {
    const response = await axios.post(registrUrl, {
      ...user,
      returnSecureToken: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post(loginUrl, {
      ...user,
      returnSecureToken: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
