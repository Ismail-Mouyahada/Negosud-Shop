<template>
  <header class="navigation">
    <div class="navigation-flex">
      <router-link :to="{ name: 'catalog' }" class="navigation-item">
        <div>catalogue</div>
      </router-link>
      <a href="#" class="navigation-item">Carte fédilité</a>
      <a href="#" class="navigation-item">Boutique</a>
    </div>
    <div class="logo">
      <Loading v-if="isLoading"></Loading>
      <router-link to="/" class="navigation-item">
        <img src="@/assets/logo-negosud.png" class="navigation-item logo-mobile" alt="negosud logo" />
      </router-link>
    </div>
    <div class="navigation-flex">
      <a href="#" class="navigation-item">Newsletter</a>
      <router-link :to="{ name: 'authorization' }" class="navigation-item">
        <div>Compte</div>
      </router-link>
      <router-link :to="{ name: 'Cart' }" class="navigation-item cart-side">
        <div>
          Panier <span class="cart-items">({{ CART.length }})</span>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "@/components/loading.vue";
export default {
  props: {
  },
  name: "MenuDesktop",
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.navigation {
   
  position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background-color: #413d4e;
    z-index: 100;
    align-content: center;
    align-items: center;
 

  &-flex {
    display: flex;
  }

  &-item {
    text-decoration: none;
    color: #fcfbf7;
    border-color: initial;
    text-decoration-color: initial;
    height: 3em;
    background-color: #352f42;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 2em;
    border-radius: 1em;
    font-family: comfortaa;

    &:not(:last-child) {
      margin-right: 3em;
    }
  }
}

.cart-side{
  background-image: linear-gradient(23deg, #acc102, #d6eb31);
  text-transform: uppercase;
}

.cart-items {
  font-size: 14px;
  font-weight: 700;
}

 
</style>
