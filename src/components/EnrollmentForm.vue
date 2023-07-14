<template>
  <div class="modal" @click="closeModal">
    <div class="modal-content">
      <slot></slot>
      <button class="close-button" @click="closeModal">X</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Add your custom styles for the modal component */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 9999; 
}


.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
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
  color: white;
  background-color: red;
}
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  width: 100%;
  height: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
