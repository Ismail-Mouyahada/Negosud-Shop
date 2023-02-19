<template>
  <button type="button" class="btn-grey">
    <slot>
        
    </slot>
  </button>
</template>

<script>
export default {
  name: "btn-grey",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.btn-grey {
  width: 100%;
  padding: 1.5em 4em;
  background-color: $greyClear;
  border: 1px solid $lightGrey;
  color: $themeBlack;
  font-family: $themeFont;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: $greyClearAlt;
    color: $themeBlack;
    outline: none;
    box-shadow: none;
  }
}
</style>
