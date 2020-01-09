import axios from "axios";

export default class AuthService {
  baseUrl = "http://localhost:3000";
  service = axios.create({
    baseURL: this.baseUrl,
    withCredentials: true
  });
  login(userData) {
    return this.service.post("/api/auth/login", userData);
  }
  signup(userData) {
    return this.service.post("/api/auth/signup", userData)
  }
}
