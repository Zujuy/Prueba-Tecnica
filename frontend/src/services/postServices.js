import axios from "axios";

export default class PostService {
  baseUrl = "http://localhost:3000";
  service = axios.create({
    baseURL: this.baseUrl,
    withCredentials: true
  });
  getPosts() {
    return this.service.get("/posts");
  }
  createPost(postData) {
    return this.service.post("/posts", postData);
  }
}
