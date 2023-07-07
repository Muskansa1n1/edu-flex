<template>
  <div class="modal" v-if="isOpen" @click.self="closeModal">
    <div class="modal-content">
      <!-- Modal content here -->
      <button class="close-button" @click="closeModal">X</button>
      <h3>{{ course.name }}</h3>
      <p>{{ course.description }}</p>
      <p>{{ course.whatYouWillLearn }}</p>
      <p class="para-bold"><span>Agenda: </span>{{ course.agenda }}</p>
      <p class="para-bold"><span>Course Fee: </span>Rs. {{ course.courseFee }}</p>
      <p class="para-bold"><span>Duration: </span>{{ course.duration }}</p>
      <button class="enroll-button" @click="enroll">Enroll</button>
    </div>
  
  </div>
</template>

<script>
export default {
  props: {
    course: Object, 
    isOpen: Boolean, 
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    enroll() {
      // Perform the logic to enroll in the course
      // Example: Make an API request to enroll the user in the course
      alert("Enrolled in course:", this.course.name);
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
.para-bold{
  font-weight: 500;
}
.para-bold span{
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

.close-button:hover{
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
</style>