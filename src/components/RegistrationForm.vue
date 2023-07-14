<template>
  <form class="registration-form" @submit.prevent="register">
    <h2>Registration</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" placeholder="Name" required />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Email"
        required />
    </div>
    <div class="form-group">
      <label for="contact">Contact:</label>
      <input
        type="tel"
        id="contact"
        v-model="contact"
        placeholder="Contact"
        required
        pattern="[0-9]{10}"
        title="Please enter a valid 10-digit contact number" />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Password"
        required
        minlength="6"
        title="Password must be at least 6 characters long" />
    </div>
    <div class="form-group">
      <label for="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        v-model="confirmPassword"
        placeholder="Confirm Password"
        required
        :pattern="password"
        title="Passwords do not match" />
    </div>

    <button type="submit">Register</button>
  </form>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      name: "",
      email: "",
      contact: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        Swal.fire({
          title: "Password Do not match !!",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      const formData = {
        name: this.name,
        email: this.email,
        contact: this.contact,
        password: this.password,
      };

      axios
        .post("http://localhost:8081/register", formData)
        .then((response) => {
          console.log(response.data.message);
          // Reset the form
          Swal.fire({
            title: "Successfully Registered !!",
            icon: "success",
            confirmButtonText: "OK",
          });
          this.name = "";
          this.email = "";
          this.contact = "";
          this.password = "";
          this.confirmPassword = "";
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error(
            "An error occurred during registration:",
            error.response.data
          );
          Swal.fire({
            title: "User already exists !!",
            icon: "error",
            confirmButtonText: "OK",
          });
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style scoped>
h2 {
  color: brown;
  text-align: center;
}
.registration-form {
  max-width: 500px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: brown;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: lightcoral;
  color: black;
}
</style>
