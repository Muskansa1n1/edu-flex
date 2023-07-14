<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <!-- Login form fields -->
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Login</button>
    </form>
    <div>
      <p>
        Not registered yet? <router-link to="/register">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      axios,
    };
  },
  methods: {
    ...mapMutations(["setLoginStatus", "setUserName"]),
    login() {
      const formData = {
        email: this.email,
        password: this.password,
      };

      axios
        .post("http://localhost:8081/login", formData)
        .then((response) => {
          console.log(response.data.message);
          if (response.status === 200) {
            this.setLoginStatus(true);
            // After successful login
            sessionStorage.setItem('isLoggedIn', 'true');

            // this.setUserName(response.data.name);
            Swal.fire({
              title: "Successfully Login !!",
              icon: "success",
              confirmButtonText: "OK",
            });
            this.$router.push("/");
          } else if (response.status === 401) {
            // Invalid credentials
            Swal.fire({
              title: "Invalid User !!",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
          this.email = "";
          this.password = "";
        })
        .catch((error) => {
          console.error("An error occurred during login:", error);
        });
    },
  },
};
</script>
<style scoped>
.login-form {
  max-width: 400px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: brown;
}

.login-form form label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.login-form form input[type="email"],
.login-form form input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
}

.login-form form button[type="submit"] {
  background-color: brown;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.login-form form button[type="submit"]:hover {
  color: black;
  background-color: lightcoral;
}
.link-router {
  color: brown;
}
.login-form div p {
  margin-top: 16px;
}

.login-form div p a {
  color: brown;
  text-decoration: none;
}

/* Add more styles as needed */
</style>
