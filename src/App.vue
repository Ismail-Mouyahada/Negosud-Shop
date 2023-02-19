<template>
  <router-view>

  </router-view>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import "@/styles/scss/variables";
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: $themeWhite;
  font-family: $themeFont;
}
#app {
  overflow-x: hidden;
}

h1 {
  margin: 0;
  color: $themeWhite;
  font-size: 73px;
  font-weight: 700;
  line-height: 96px;
  @media (max-width: 576px) {
    font-size: 58px;
    line-height: 96px;
  }
}

h2 {
  margin: 0;
  color: $themeBlack;
  font-size: 53px;
  font-weight: 400;
  line-height: 80px;
}

h3 {
  margin: 0;
  color: $themeWhite;
  font-size: 42px;
  font-weight: 400;
  line-height: 72px;
}

h4 {
  margin: 0;
  color: $themeWhite;
  font-size: 34px;
  font-weight: 400;
  line-height: 60px;
}

h5 {
  margin: 0;
  color: $themeWhite;
  font-size: 28px;
  font-weight: 400;
  line-height: 60px;
}

p {
  margin: 0;
  color: $themeWhite;
  font-size: 18px;
  font-weight: 100;
  line-height: 32px;
}

.btn-reset {
  border: none;
  background: transparent;
  cursor: pointer;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-out;
}
.fade-fast-enter-from,
.fade-fast-leave-to {
  opacity: 0;
}
.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.3s ease-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(300px);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: 0.7s ease-out;
}
.grow-in-enter-from,
.grow-in-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
.grow-in-enter-active,
.grow-in-leave-active {
  transition: 0.3s ease-out;
}
.grow-out-enter-from,
.grow-out-leave-to {
  opacity: 0;
  transform: scale(1.5);
}
.grow-out-enter-active,
.grow-out-leave-active {
  transition: 0.3s ease-out;
}

input{
  position: relative;
    display: block;
    width: 100%;
    padding: 1.5em 2em;
    color: #747474;
    border: none;
    background-color: #fff;
    border-radius: 1em;
    background-clip: padding-box;
    font-family: "Comfortaa", serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.12px;
    text-transform: uppercase;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
