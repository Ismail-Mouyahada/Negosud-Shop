<template>
  <MenuMobile v-if="mobileWidth" />
  <MenuDesktop v-else />
</template>

<script>
import Loading from "@/components/loading.vue";
import MenuDesktop from "@/components/menu/MenuDesktop.vue"
import MenuMobile from "@/components/menu/MenuMobile.vue"
export default {
  name: "HeaderCustom",
  components: {
    Loading,
    MenuDesktop,
    MenuMobile
  },
  data: () => ({
    mobileWidth: false,
  }),
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
        this.mobileWidth = window.innerWidth <= 576;
    }
  }
};
</script>

<style lang="scss" scoped>


</style>
