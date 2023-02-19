<template>
  <div class="intro" v-if="desktopWidth">
    <div class="intro-item">
      <img src="@/assets/background.jpg" />
    </div>
    <div class="intro-item intro-text">
      <div>
        <h2>Intro aux apéritifs</h2>
      </div>
      <div class="intro-text_description">
        <p>
          Découvrez notre sélection de vins blancs et rouges soigneusement choisis pour offrir une expérience gustative unique. Rejoignez notre communauté en ligne pour échanger des conseils, avis et anecdotes avec d'autres amateurs de vin. Plongez dans l'univers envoûtant du vin dès maintenant !
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroToAperol",
  data: () => ({
    desktopWidth: false,
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
        this.desktopWidth = window.innerWidth >= 576;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.intro {
  margin: 0 auto;
  padding: 2em 0;
  max-width: 1320px;
  display: flex;
  flex-direction: column;

  &-text {
    padding: 2em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8em;

    &_description {
      text-align: justify;
      
      & > p {
        margin: 0;
        color: $themeBlack;
      }
    }
  }
}
</style>
