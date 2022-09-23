<template>
  <header>
    <router-link to="/login">로그인</router-link>
    |
    <router-link to="/signup">회원가입</router-link>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppHeader",
});
</script>

<style scoped></style>
