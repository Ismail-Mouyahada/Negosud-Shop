<template>
    <button class="btn-reset button-close" type="button" />
  </template>
  
  <script>
  export default {
    name: "button-close",
  };
  </script>
  
  <style lang="scss" scoped>
  .button-close {
    width: fit-content;
    background-image: url("@/assets/close-white.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
  </style>