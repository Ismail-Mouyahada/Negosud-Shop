<template>
  <header class="navigation">
    <div class="navigation-flex">
      <router-link to="/" class="navigation-item">
         <div> <i class="fa fa-home"></i></div>
      </router-link>
      <a href="#" class="navigation-item"> Carte fédilité</a>
       <a href="/catalog" class="navigation-item"> Boutique</a>
    </div>
    <div class="logo">
      <Loading v-if="isLoading"></Loading>
      <router-link to="/" class=" ">
        <img src="@/assets/logo-negosud.png" class="navigation-item logo-mobile" alt="negosud logo" />
      </router-link>
    </div>
    <div class="navigation-flex">
      <a href="#" class="navigation-item"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Newsletter</a>
      <router-link :to="{ name: 'authorization' }" class="navigation-item">
        <div><i class="fa fa-user"></i></div>
      </router-link>
      <router-link :to="{ name: 'register' }" class="navigation-item">
        <div><i class="fa fa-key"></i></div>
      </router-link>
      <router-link :to="{ name: 'Cart' }" class="navigation-item cart-side">
        <div>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span class="cart-items ">({{ CART.length }})</span>
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
    background-color: #03040433;
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
    height: 39px;
    background-color: #ed0c59de;
    z-index: 100;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    font-weight: 700;
    border-radius: 5px;
    font-size: 14px;
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
  font-size: 11px;
  font-weight: 700;
}

img.navigation-item.logo-mobile {
    background: none;
}
</style>
