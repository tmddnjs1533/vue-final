<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname:</label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">회원가입</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { registerUser } from "../api/index";

export default Vue.extend({
  name: "SignupForm",
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    async submitForm() {
      console.log("폼 제출");
      try {
        const response = await registerUser({
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        });
        this.$router.push({ path: "/login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>

<style scoped></style>
