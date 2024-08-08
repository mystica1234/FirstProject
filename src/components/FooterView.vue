<template>
  <footer>
    <p>{{ footerText }}</p>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
  data() {
    return {
      footerText: "Copyright 2024",
    };
  },
};
</script>

<style scoped>
footer {
  background-color: rgb(0, 0, 0);
  padding: 10px;
  height: 50px;
  width: 100%;
  text-align: center;
  color: white;
  bottom: 0;
  position: fixed;
}
</style>
