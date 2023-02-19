<template>
  <div id="loading">
    <img class="img" src="../assets/loading.gif" alt="loading..." width="200" />
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
#loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background-color: white;
}
.img {
  position: absolute;
  top: 40%;
  left: 45%;
}
</style>
