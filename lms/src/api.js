// src/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signup = async (username, email, password) => {
  return await axios.post(`${API_URL}/signup`, { username, email, password });
};

export const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};
