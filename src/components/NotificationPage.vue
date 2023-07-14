<template>
  <div class="notification-page">
    <h2 class="section-title">Notifications</h2>
    <div class="notification-list">
      <div
        v-for="notification in displayedNotifications"
        :key="notification.id"
        class="notification-item">
        <h3>{{ notification.title }}</h3>
        <p>{{ notification.message }}</p>
      </div>
      <router-link
        v-if="shouldShowMoreLink && !showAllNotifications"
        :to="moreLink"
        class="more-link"
        @click="showAllNotifications = true"
        >More</router-link
      >
      <router-link
        v-if="shouldShowLessLink"
        :to="lessLink"
        class="more-link"
        @click="showAllNotifications = false"
        >Less</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      notifications: [],
      maxDisplayedNotifications: 5,
      showAllNotifications: false,
    };
  },
  computed: {
    displayedNotifications() {
      if (this.showAllNotifications) {
        return this.notifications;
      }
      return this.notifications.slice(0, this.maxDisplayedNotifications);
    },

    shouldShowMoreLink() {
      return (
        !this.showAllNotifications &&
        this.notifications.length > this.maxDisplayedNotifications
      );
    },

    moreLink() {
      return this.shouldShowMoreLink ? "#" : "";
    },

    shouldShowLessLink() {
      return this.showAllNotifications;
    },
    lessLink() {
      return this.shouldShowLessLink ? "#" : "";
    },
  },
  created() {
    this.fetchNotifications();
  },
  methods: {
    fetchNotifications() {
      axios
        .get("http://localhost:3000/notifications")
        .then((response) => {
          this.notifications = response.data;
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  color: brown;
}
.notification-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.notification-list {
  border: 1px solid #ccc;
  padding: 20px;
}

.notification-item {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.notification-item h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.notification-item p {
  font-size: 14px;
  color: #666;
}

/* Add any additional styles as needed */
</style>
