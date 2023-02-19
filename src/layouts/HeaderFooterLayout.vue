<template>
  <HeaderCustom />
  <div class="HeaderFooter-layout">
    <slot>
      
    </slot>
  </div>
  <FooterCustom />
</template>

<script>
import HeaderCustom from "@/components/content/HeaderCustom.vue";
import FooterCustom from "@/components/content/FooterCustom.vue";
export default {
  name: "HeaderFooterLayout",
  components: {
    HeaderCustom,
    FooterCustom
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.HeaderFooter-layout {
  padding-top: 5em;
}
</style>
