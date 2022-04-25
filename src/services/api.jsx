import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const REACT_APP_BASE_URL = "http://localhost:4000"

async function createUser(user) {
    await axios.post(`${REACT_APP_BASE_URL}/sign-up`, user);
}

async function login(user) {
  return await axios.post(`${REACT_APP_BASE_URL}/sign-in`, user);

}


const api = {createUser, login}


export default api

