import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  signup(username, password, name) {
    return this.service
      .post("/signup", { username, password, name })
      .then((response) => response.data);
  }

  login(username, password) {
    return this.service
      .post("/login", { username, password })
      .then((response) => response.data);
  }

  loggedin() {
    return this.service.get("/loggedin").then((response) => response.data);
  }

  logout() {
    return this.service.get("/logout").then((response) => response.data);
  }

  // googleLogin(){
  //   return this.service.get("/auth/google")
  //   .then(response => response.data)
  // }

  

}

export default AuthService;