<template>
  <div><SignupForm /></div>
</template>

<script lang="ts">
import Vue from "vue";
import SignupForm from "../components/SignupForm.vue";

export default Vue.extend({
  name: "SignupPage",
  components: { SignupForm },
});
</script>

<style scoped></style>
