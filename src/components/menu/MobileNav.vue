<template>
  <TransitionGroup name="fade" mode="out-in">
    <nav v-if="showSidebar" @click.stop="hideMenu" class="nav">
      <div class="nav-top">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/logo-negosud.png" class="mobile-logo" alt="negosud logo" />
        </router-link>
        <button-close class="nav-top_button" @click.stop="hideMenu" />
      </div>
      <div class="nav-list">
        <router-link :to="{ name: 'catalog' }" class="nav-list_item">
          <p>catalogue</p>
        </router-link>
        <p class="nav-list_item">Abonnement</p>
        <p class="nav-list_item">Notre histoir</p>
        <p class="nav-list_item">newsletter</p>
        <router-link :to="{ name: 'authorization' }" class="nav-list_item">
          <p>Compte</p>
        </router-link>
        <router-link :to="{ name: 'Cart' }" class="nav-list_item">
          <p>Panier ({{ CART.length }})</p>
        </router-link>
      </div>
    </nav>
  </TransitionGroup>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MobileNav",
  props: {
    showSidebar: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    hideMenu() {
      this.$emit("update:showSidebar", false);
    },
    onClickOpenAuthModal() {
      this.$store.commit("modals/setIsOpenedAuth", true);
    },
    ...mapActions(["ADD_TO_CART"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.nav {
  position: fixed;
  top: 0;
  background-color: #20132e;
  overflow: hidden;
  min-width: 100%;
  min-height: 100vh;
  padding: 1em;
  z-index: 200;
  &-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
    padding-bottom: 1em;
    border-bottom: 2px solid $whiteClear;
  }
  &-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4em;
    &_item {
      text-decoration: none;
      text-transform: capitalize;
      cursor: pointer;
    }
  }
}


.mobile-logo {
    height: 5em;
}
</style>
