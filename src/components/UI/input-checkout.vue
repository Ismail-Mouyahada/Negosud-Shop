<template>
  <input class="input-checkout" required />
</template>

<script>
export default {
  name: "input-checkout",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.input-checkout {
  position: relative;
  display: block;
  width: 384px;
  padding: 0.6em 1em;
  color: $themeGreyAlt;
  background-color: $defaultWhite;
  border: 1px solid $lightGrey;
  border-radius: 0;
  background-clip: padding-box;
  font-family: $themeFont;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border-color: $themeBlack;
    color: $themeBlack;
    outline: none;
    box-shadow: none;
  }
  @media (max-width: (576px)) {
    width: 100%;
  }
}
</style>
