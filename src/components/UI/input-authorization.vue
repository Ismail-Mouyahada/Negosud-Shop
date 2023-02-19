<template>
  <input class="input-authorization" required />
</template>

<script>
export default {
  name: "input-authorization",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.input-authorization {
  position: relative;
  display: block;
  width: 100%;
  padding: 1.6em 1em;
  color: $themeGreyAlt;
  background-color: $defaultWhite;
  border: 1px solid $themeBlack;
  border-radius: 0;
  background-clip: padding-box;
  font-family: $themeFont;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
