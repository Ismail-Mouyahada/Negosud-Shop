<template>
  <button type="submit" class="btn-black">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "btn-black",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.btn-black {
    padding: 1.5em 3em;
    background-image: linear-gradient(336deg, #acc102, #dcf323);
    border-radius: 5px;
    font-size: 13px;
    font-weight: 700;
    font-family: "Comfortaa", Arial;
    line-height: 1em;
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
}
</style>
