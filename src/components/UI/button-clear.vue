<template>
  <button class="btn-clear">
    <slot>
        
    </slot>
  </button>
</template>

<script>
export default {
  name: "btn-clear",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.btn-clear {
  padding: 1.5em 2em;
  background: $themeWhite;
  border: 1px solid $themeBlack;
  border-radius: 0px;
  font-family: $themeFont;
  font-size: 15px;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: $themeBlack;
  cursor: pointer;
}
</style>
