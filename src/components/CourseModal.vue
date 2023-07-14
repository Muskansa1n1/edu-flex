<template>
  <div class="modal" v-if="isOpen" @click.self="closeModal">
    <div class="modal-content">
      <!-- Modal content here -->
      <button class="close-button" @click="closeModal">X</button>
      <h3>{{ course.name }}</h3>
      <p>{{ course.description }}</p>
      <p>{{ course.whatYouWillLearn }}</p>
      <p class="para-bold"><span>Agenda: </span>{{ course.agenda }}</p>
      <p class="para-bold">
        <span>Course Fee: </span>Rs. {{ course.courseFee }}
      </p>
      <p class="para-bold"><span>Duration: </span>{{ course.duration }}</p>
      <button
        v-if="isLoggedIn"
        @click="openEnrollmentForm(course)"
        class="enroll-button">
        Enroll
      </button>
      <router-link v-else to="/login" class="login-button"
        >Login to enroll</router-link
      >
      <enrollment-form
        v-if="showEnrollmentFormModal"
        @close="closeEnrollmentForm">
        <!-- Enrollment form content -->
        <h3 id="enroll-heading">Enrollment Form</h3>
        <p class="enroll-para">
          Course: <span>{{ selectedCourse }}</span>
        </p>

        <form @submit.prevent="submitEnrollmentForm" class="enrollment-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              @click.stop />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              @click.stop />
          </div>

          <div class="form-group">
            <label for="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              v-model="form.phone"
              required
              @click.stop />
          </div>

          <div class="form-group">
            <label for="address">Address:</label>
            <textarea
              id="address"
              v-model="form.address"
              required
              @click.stop></textarea>
          </div>
          <div class="form-group">
            <label for="education">Highest Education:</label>
            <select
              id="education"
              v-model="form.education"
              required
              @click.stop>
              <option value="">Select an option</option>
              <option value="High School">High School</option>
              <option value="High School">Intermediate</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <button type="submit" class="enroll-submit-button" @click.stop>
            Enroll
          </button>
        </form>
      </enrollment-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import EnrollmentForm from "./EnrollmentForm.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  components: { EnrollmentForm },
  data() {
    return {
      showEnrollmentFormModal: false,
      selectedCourse: "",
      form: {
        name: "",
        email: "",
        phone: "",
        address: "",
        education: "",
      },
    };
  },
  props: {
    course: Object,
    isOpen: Boolean,
  },
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    openEnrollmentForm(course) {
      this.selectedCourse = course.name;
      this.showEnrollmentFormModal = true;
    },

    closeEnrollmentForm() {
      this.showEnrollmentFormModal = false;
    },
    submitEnrollmentForm() {
      const enrollmentData = {
        course: this.selectedCourse,
        ...this.form,
      };

      axios
        .post("http://localhost:8081/enroll", enrollmentData)
        .then((response) => {
          console.log(response.data.message);
          this.closeModal();
          this.closeEnrollmentForm();
          Swal.fire({
            title: "Successfully Enrolled !!",
            icon: "success",
            confirmButtonText: "OK",
          });
        })
        .catch((error) => {
          console.error("An error occurred during form submission:", error);
          // Handle the error and display an appropriate message
          error.response.data;
          this.closeModal();
          this.closeEnrollmentForm();
          Swal.fire({
            title: "User not found !!",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
#enroll-heading {
  text-align: center;
}
.enroll-para {
  margin: auto;
  padding: 10px;
  font-weight: bold;
}
.enroll-para span {
  color: brown;
}
.modal-content {
  position: relative;
  width: 500px;
  max-width: 90%;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}
.para-bold {
  font-weight: 500;
}
.para-bold span {
  font-weight: 500;
  color: brown;
}
.close-button {
  width: 30px;
  height: 30px;
  border: none;
  color: #333;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-button:hover {
  background-color: red;
  color: white;
}
.modal-body {
  margin-bottom: 20px;
}

.modal-body p {
  margin: 0;
}

.enroll-button {
  padding: 10px 16px;
  background-color: brown;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.login-button {
  text-decoration: none;
  text-align: center;
  background-color: brown;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  size: 20px;
}
.enrollment-form {
  /* Add your custom styles for the form */
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 700px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.form-group label {
  /* Add your custom styles for the form labels */
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  /* Add your custom styles for the form inputs */
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
}

.form-group textarea {
  /* Add your custom styles for the textarea */
  resize: vertical;
}

.enroll-submit-button {
  /* Add your custom styles for the Enroll submit button */
  padding: 12px 16px;
  background-color: brown;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.enroll-submit-button:hover {
  background-color: lightcoral;
}
</style>
