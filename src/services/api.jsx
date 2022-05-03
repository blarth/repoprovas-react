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
async function getDisciplinesByName(token, searchBarText) {
  return await axios.get(`${REACT_APP_BASE_URL}/tests/disciplines/${searchBarText}`, createConfig(token));
}
async function getTeachers(token) {
  return await axios.get(`${REACT_APP_BASE_URL}/tests/teachers`, createConfig(token));
}
async function getTeachersByName(token, searchBarText) {
  return await axios.get(`${REACT_APP_BASE_URL}/tests/teachers/${searchBarText}`, createConfig(token));
}


const api = {createUser, login, getDisciplines, getTeachers, getDisciplinesByName, getTeachersByName}


export default api

