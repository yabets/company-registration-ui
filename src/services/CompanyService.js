import axios from "axios";

const BASE_URL = "http://localhost:8080/company";

const getCompany = () => {
  return axios.get(BASE_URL);
};

const createCompany = (data) => {
  return axios.post(BASE_URL, data);
};

const updateCompany = (id, data) => {
  return axios.put(`${BASE_URL}/${id}`, data);
};

const deleteCompany = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export default {
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
};
