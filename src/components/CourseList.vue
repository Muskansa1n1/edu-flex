<!-- eslint-disable vue/no-dupe-keys -->
<template>
  <div class="course-list">
    <div class="search-bar">
    <input type="text" v-model="searchKeyword" placeholder="Search courses">
   <button class="search-button" @click="searchCourses">Search</button>

    </div>
    <div class="course-container">
      <div
        v-for="course in filteredCourses"
        :key="course.id"
        class="course-item">
        <div class="course-info">
          <h3 class="course-name">{{ course.name }}</h3>
          <p class="course-description">{{ course.description }}</p>
          <button @click="showDetails(course)" class="details-button">
            Show Details
          </button>
        </div>
      </div>
    </div>
    <course-modal
      :course="selectedCourse"
      :isOpen="isModalOpen"
      @close="closeModal"
    ></course-modal>
  </div>
</template>

<script>
import axios from "axios";
import CourseModal from "./CourseModal.vue";

export default {
  components:{
    CourseModal
  },
  data() {
    return {
      courses: [],
      searchKeyword: "",
      filteredCourses:[],
      selectedCourse: null, 
      isModalOpen: false,
    };
  },
  mounted() {
    this.fetchCourses();
  },
  methods: {
    fetchCourses() {
      axios
        .get("http://localhost:3000/courses")
        .then((response) => {
          this.courses = response.data;
          this.filteredCourses = this.courses;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    searchCourses() {
      const keyword = this.searchKeyword.toLowerCase().trim();
      this.filteredCourses = this.courses.filter((course) => {
        const nameMatch = course.name.toLowerCase().includes(keyword);
        const descriptionMatch = course.description
          .toLowerCase()
          .includes(keyword);
        return nameMatch || descriptionMatch;
      });
    },
    showDetails(course) {
      this.selectedCourse = course;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedCourse = null;
    },

  },
};
</script>

<style scoped>
.course-list {
  padding: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.search-bar input {
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.search-button {
  padding: 10px 20px;
  background-color: brown;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: lightcoral;
  color: black;
}

.course-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.course-item {
  width: 300px;
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

.course-info {
  text-align: center;
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

.details-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: brown;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.details-button:hover {
  background-color: lightcoral;
  color: black;
}
</style>
