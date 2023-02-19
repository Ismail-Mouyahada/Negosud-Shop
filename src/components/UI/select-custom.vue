<template>
  <div class="select-custom">
    <p class="select-custom_title">Filtrer par:</p>
    <p @click="areOptionsVisible = !areOptionsVisible" class="select-custom_selected">
      {{ selected }}
    </p>
    <div class="select-custom_options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="select-custom_options-item"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "select-custom",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.select-custom {
  position: relative;
  cursor: pointer;
  border: none;
  border-radius:  1em;
  width: 100%;
  @media (max-width: (576px)) {
    width: 100%;
  }
  &_title {
    margin: 0 0 1em;
    color: $themeBlack;
  }
  &_selected {
    color: $themeBlack;
  }
  &_options {
    position: absolute;
    left: 0;
    padding: 0.7em;
    width: 100%;
    border: 1px solid $themeBlack;
    background-color: $defaultWhite;
    z-index: 10;
    &-item {
      color: $themeBlack;
    }
  }
}
</style>
