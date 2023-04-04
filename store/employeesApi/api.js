import axios from "axios";
const employeesApi = axios.create({
  baseURL: "https://dummy.restapiexample.com/api/v1/employees",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function employeesapi_get_employees_list(payload) {
  return employeesApi.get(`/employees`);
}

export const apiService = {
  employeesapi_get_employees_list
};