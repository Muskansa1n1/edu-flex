<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img :src="imgUrl" alt="EduFlex Logo" class="logo-image" />
      </div>
      <div class="footer-links">
        <a href="/about" class="footer-link">About</a>
        <a href="/contact" class="footer-link">Contact</a>
        <a href="/privacy" class="footer-link">Privacy Policy</a>
        <a href="/terms" class="footer-link">Terms of Service</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-text">© 2023 EduFlex. All rights reserved.</span>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require("../assets/logo_transparent.png"),
    };
  },
};
</script>
<style scoped>
.footer {
  background-color: #f7f7f7;
  padding: 5px;
  text-align: center;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-right: 10px;
}
.footer-links {
  display: flex;
  justify-content: center;
}

.footer-link {
  margin: 0 10px;
  font-size: 15px;
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: brown;
}

.footer-bottom {
  font-size: 0.8rem;
  color: #666;
}
</style>
