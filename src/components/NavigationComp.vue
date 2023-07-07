<template>
  <div class="conatiner-fluid">
    <nav class="navbar">
      <div class="navbar-brand">
        <!-- Logo -->
        <img :src="image" alt="Logo" class="navbar-logo" />
      </div>
      <div class="navbar-menu">
        <!-- Links -->
        <router-link to="/" class="navbar-link">Home</router-link>
        <router-link to="/courses" class="navbar-link">Courses</router-link>
        <router-link to="/notifications" class="navbar-link"
          >Notifications</router-link
        >
        <div v-if="isLoggedIn" class="navbar-dropdown">
          <!-- Profile dropdown -->
          <button class="navbar-link navbar-dropdown-toggle">
            {{ userName }}
          </button>
          <div class="navbar-dropdown-content">
            <router-link to="/profile" class="navbar-dropdown-item"
              >Edit Profile</router-link
            >
            <a @click="logout" class="navbar-dropdown-item">Logout</a>
          </div>
        </div>
        <router-link v-else to="/login" class="navbar-button"
          >Login/Register</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default{
    data() {
      return {
        image: require("../assets/logo_transparent.png"),
        isLoggedIn: true, 
        userName: "Muskan Saini", 
      };
    },
  methods: {
    logout() {
      // logout logic
      this.isLoggedIn = false;
      // Redirect to login page
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #f2f2f2;
  padding: 10px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  width: 200px;
  height: 100px;
}

.navbar-logo {
  width: 100%;
  margin-right: 10px;
}

.navbar-menu {
  display: flex;
  align-items: center;
}
.navbar-link{
  font-family: 'Lucida Sans', 'Lucida Sans Regular';
  font-weight: bold;
  margin-right: 20px;
  color: #333;
  text-decoration: none;
}
.navbar-link:hover{
  color: brown;
}
.navbar-link:active{
  color: brown;
}
.navbar-button {
  padding: 8px 16px;
  background-color: brown;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
}

.navbar-dropdown {
  position: relative;
}

.navbar-dropdown-toggle {
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
}

.navbar-dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: none;
  z-index: 10;
}

.navbar-dropdown .navbar-dropdown-toggle:hover,
.navbar-dropdown .navbar-dropdown-toggle:focus {
  color: brown;
}

.navbar-dropdown:hover .navbar-dropdown-content {
  display: block;
}

.navbar-dropdown-item {
  display: block;
  padding: 8px 10px;
  color: #333;
  text-decoration: none;
}
.navbar-dropdown-item:hover {
  background-color: brown;
  color: white;
}
</style>
