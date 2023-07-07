<template>
    <div class="registration-form">
      <h2>Registration</h2>
      <form @submit.prevent="register">
        <!-- Registration form fields -->
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="contact">Contact:</label>
        <input type="tel" id="contact" v-model="contact" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required>
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      register() {
        if (!this.validateForm()) {
        return;
      }else{
    const formData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    // Send the HTTP POST request to the server
    axios.post('http://localhost:3000/register', formData)
      .then(response => {
        // Handle the response from the server
        console.log('Registration successful');
        this.$router.push('/');
      })
      .catch(error => {
        // Handle the error
        console.error('Registration failed:', error);
        alert("Registration Failed !!")
      });
       
      }
       
      },
      validateForm() {
  if (this.password !== this.confirmPassword) {
    alert("Passwords don't match");
    return false;
  }
  if (!this.name.trim()) {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!this.email.trim() || !emailRegex.test(this.email.trim())) {
    return false;
  }
  const contactRegex = /^\d{10}$/;
  if (!this.contact.trim() || !contactRegex.test(this.contact.trim())) {
    return false;
  }
  if (this.password.length < 8) {
    return false;
  }
  return true;
},
    },
  };
  </script>
  
  <style scoped>
  .registration-form {
    max-width: 400px;
    margin: auto;
    margin-top:40px;
    margin-bottom: 40px;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .registration-form h2 {
    margin-bottom: 20px;
    text-align: center;
    color: brown;
  }
  
  .registration-form label {
    display: block;
    margin-bottom: 8px;
  }
  
  .registration-form input[type="text"],
  .registration-form input[type="email"],
  .registration-form input[type="tel"],
  .registration-form input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 12px;
  }
  
  .registration-form button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: brown;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  