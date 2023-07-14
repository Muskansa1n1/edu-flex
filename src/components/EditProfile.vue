<template>
  <div>
    <form @submit.prevent="updateProfile" class="edit-profile-form">
      <h1>Edit Profile</h1>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <label for="name">Update Name:</label>
      <input type="text" id="name" v-model="name" required />
      <label for="password">Update Password:</label>
      <input type="password" id="password" v-model="password" required />
      <label for="contact"> Update Contact:</label>
      <input type="tel" id="contact" v-model="contact" required />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      contact: "",
    };
  },
  methods: {
    updateProfile() {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        contact: this.contact,
      };

      axios
        .put("http://localhost:8081/profile", formData)
        .then((response) => {
          console.log(response.data.message);
          // Redirect to the profile page or show a success message
          Swal.fire({
            title: "Profile Updated !!",
            icon: "success",
            confirmButtonText: "OK",
          });
          this.name = "";
          this.email = "";
          this.password = "";
          this.contact = "";
          this.$router.push("./");
        })
        .catch((error) => {
          console.error("An error occurred during profile update:", error);
        });
    },
  },
};
</script>

<style scoped>
.edit-profile-form {
  max-width: 400px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.edit-profile-form label {
  display: block;
  margin-bottom: 8px;
}

.edit-profile-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}

.edit-profile-form button {
  padding: 8px 16px;
  background-color: brown;
  color: white;
  border: none;
  cursor: pointer;
}

.edit-profile-form button:hover {
  background-color: lightcoral;
}
</style>
