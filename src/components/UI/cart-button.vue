<template>
  <router-link :to="{ name: 'Cart' }">
    <div class="cart-button"></div>
  </router-link>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "cart-button",
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.cart-button {
  position: fixed;
  right: 1em;
  bottom: 1em;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: $greyClear;
  background-image: url("@/assets/cart.svg");
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: $greyClearAlt;
  }
}
</style>
