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

async function getDisciplines(token) {
  return await axios.get(`${REACT_APP_BASE_URL}/tests/disciplines`, createConfig(token));
}
async function getTeachers(token) {
  return await axios.get(`${REACT_APP_BASE_URL}/tests/teachers`, createConfig(token));
}


const api = {createUser, login, getDisciplines, getTeachers}


export default api

