import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:7275/api/';

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Cars = {
  getAllCars: () => requests.get('Cars'),
  getCarById: (id) => requests.get(`Cars/${id}`),
  createCar: (body) => requests.post('Cars', body),
  updateCar: (id, body) => requests.put(`Cars/${id}`, body),
  deleteCar: (id) => requests.delete(`Cars/${id}`),
};

const Rents = {
  getRents: () => requests.get('Rentals'),
  getRentsById: (id) => requests.get(`Rentals/${id}`),
  createRent: (body) => requests.post('Rentals', body),
  createRentUser: (body) => requests.post('Rentals/RentalUser', body),
  updateRent: (id, body) => requests.put(`Rentals/${id}`, body),
  deleteRent: (id) => requests.delete(`Rentals/${id}`),
};

const Users = {
  getUsers: () => requests.get('Users'),
  getUserById: (id) => requests.get(`Users/${id}`),
  createUser: (body) => requests.post('Users', body),
  updateUser: (id, body) => requests.put(`Users/${id}`, body),
  deleteUser: (id) => requests.delete(`Users/${id}`),
};

const Login = {
  login: (body) => requests.post('Auth/Login', body),
};

const Elsa = {
  documentApproval: (body) => {
    return axios.post('https://localhost:5001/v2/rentals', body);
  },
};

const service = {
  Cars,
  Rents,
  Users,
  Login,
  Elsa,
};

export default service;
