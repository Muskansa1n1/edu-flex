<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <!-- Login form fields -->
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        
        <button type="submit">Login</button>
      </form>
      <div><p>Not registered yet? <router-link  to="/register">Register</router-link> </p>
</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        
      };
    },
    methods: {
      login() {
        // Perform login logic here
        // Example: Authenticate the user with the provided credentials
  
        // Clear the form fields after login
        this.email = '';
        this.password = '';
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
  .login-form form button[type="submit"]:hover{
    color: black;
    background-color: lightcoral;
  }
  .link-router{
    color: brown;
  }
  .login-form div p {
    margin-top: 16px;
  }
  
  .login-form div p a {
    color: #428bca;
    text-decoration: none;
  }
  
  /* Add more styles as needed */
  </style>
  
  