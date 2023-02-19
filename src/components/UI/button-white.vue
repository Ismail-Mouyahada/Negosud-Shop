<template>
  <button type="button" class="btn-white">
    <slot>
        
    </slot>
  </button>
</template>

<script>
export default {
  name: "btn-white",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.btn-white {
  padding: 1.5em 4em;
  background: $themeWhite;
  border: 1px solid $themeWhite;
  border-radius: 0px;
  font-size: 12px;
  font-weight: 400;
  font-family: $themeFont;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: $themeBlackAlt;
  cursor: pointer;
}
</style>
