import { reactive } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return reactive({
      isLoggedIn: false,
      userName: "Muskan",
    });
  },
  mutations: {
    setLoginStatus(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    // setUserName(state, userName) {
    // state.userName = userName;
    // },
  },
});

export default store;
