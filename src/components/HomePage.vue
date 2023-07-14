<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">
        Welcome to <span>EduFlex</span> Training Academy
      </h1>
      <p class="hero-subtitle">
        Unlock your potential with our online training programs
      </p>
      <router-link to="/courses" class="hero-button">Browse</router-link>
    </div>
    <div class="content-img">
      <img :src="imgUrl" alt="Content-img" />
    </div>
    <div class="featured-courses">
      <h2 class="section-title">Featured Courses</h2>
      <div class="course-list">
        <!-- Course Item -->
        <div class="course-item">
          <img
            src="../assets/course2.jpg"
            alt="Course Image"
            class="course-image" />
          <h3 class="course-name">Web Development Fundamentals</h3>
          <p class="course-description">
            Learn the basics of web development and build your own websites.
          </p>
          <router-link to="/courses" class="hero-button">Browse</router-link>
        </div>

        <!-- Course Item -->
        <div class="course-item">
          <img
            src="../assets/course3.jpg"
            alt="Course Image"
            class="course-image" />
          <h3 class="course-name">Introduction to Data Science</h3>
          <p class="course-description">
            Get started with data science and explorer the power of data
            analysis.
          </p>
          <router-link to="/courses" class="hero-button">Browse</router-link>
        </div>

        <!-- Course Item -->
        <div class="course-item">
          <img
            src="../assets/course1.jpg"
            alt="Course Image"
            class="course-image" />
          <h3 class="course-name">Mobile App Development with React Native</h3>
          <p class="course-description">
            Build native mobile apps for iOS and Android using React Native.
          </p>
          <router-link to="/courses" class="hero-button">Browse</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("../assets/main-img.jpg"),
    };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}

.hero {
  padding: 40px;
  border-radius: 10px;
}
.hero h1 {
  color: brown;
}
.hero h1 span {
  color: black;
}
.hero-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 40px;
}

.hero-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: brown;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s;
}

.hero-button:hover {
  background-color: lightcoral;
  color: black;
}
.content-img {
  width: 100%;
  height: 500px;
}
.content-img img {
  height: 500px;
}
.featured-courses {
  margin-top: 40px;
}

.section-title {
  font-size: 1.8rem;
  color: brown;
  margin-bottom: 20px;
}

.course-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.course-item {
  width: 400px;
  margin: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.course-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.course-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.course-name {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.course-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.course-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: brown;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.course-button:hover {
  background-color: lightcoral;
  color: black;
}
</style>
