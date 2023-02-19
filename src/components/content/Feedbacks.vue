<template>
  <div class="mb-feedbacks" v-if="mobileWidth">
    <Carousel :items-to-show="1">
      <Slide v-for="slide in 3" :key="slide">
        <div class="mb-feedbacks-item">
          <p class="mb-feedbacks-item_title">
            "Ce que nous avez adoré avec Negosud, c'est sa qualité."
          </p>
          <img src="@/assets/food-and-wine.svg" alt="nouriture et vin" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  <div class="feedbacks" v-else>
    <div class="feedbacks-item">
      <p class="feedbacks-item_title">
        "Notre equipe celebre avec des boutielles de Negosud."
      </p>
      <img src="@/assets/food-and-wine.svg" alt="nouriture et vin" />
    </div>
    <div class="feedbacks-item">
      <p class="feedbacks-item_title">
        “Mon restaurant a eu beaucoup de succès grâce à notre vin Negosud.”
      </p>
      <img src="@/assets/new-yourk-times.svg" alt="nouriture et vin" />
    </div>
    <div class="feedbacks-item">
      <p class="feedbacks-item_title">
        “Très savoreux, pas très alcolisé et une arôme incoyable”
      </p>
      <img src="@/assets/bon-appetit.svg" alt="nouriture et vin" />
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  name: "Feedbacks",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    mobileWidth: false,
  }),
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.mobileWidth = window.innerWidth <= 576;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.feedbacks {
  margin: 0 auto;
  padding: 3.4em 0;
  max-width: 1320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12em;

  &-item {
    text-align: center;

    &_title {
      margin-bottom: 1.6em;
      color: $themeBlack;
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
    }
  }
}
.mb-feedbacks {
  padding: 2em;
  &-item {
    text-align: center;

    &_title {
      margin-bottom: 1.6em;
      color: $themeBlack;
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
    }
  }
}
</style>
