<template>
  <div class="mobile-hero" v-if="mobileWidth">
    <div class="mobile-hero_title">
      <h1>Pour les passionés des petits plaisirs !</h1>
    </div>
    <p class="mobile-hero_description">
      Explorez l'art de la dégustation avec notre sélection de vins blancs et rouges
    </p>
    <router-link :to="{ name: 'catalog' }">
      <a class="btn btn-success cart-side" href="/catalog">Commandez maintenant</a>
    </router-link>
  </div>
  <div class="hero" v-else>
    <div class="hero-text">
      <h1 class="hero-text_title">Dégustez l'excellence vinicole</h1>
      <p class="hero-text_description">Chez Negosud, nous sommes animés par la passion du vin et l'engagement envers la qualité
      </p>
      <router-link :to="{ name: 'catalog' }">
        <a class="btn btn-success cart-side" href="/catalog">Commandez maintenant</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
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
@import "@/styles/scss/variables";

.hero {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-image: url('@/assets/background_4.jpg');
  background-color: #413d4e;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-origin: border-box;
  background-position: center;
  background-size: cover;
  height: 100vh;
  flex-direction: column;

  &-background {
    &_image {
      height: 100%;
    }
  }

  &-text {
    margin: 15em 0 6em;

    &_title {
      margin: 0 0 1.2em;
    }

    &_description {
      margin: 0 0 1em;
    }
  }
}

.mobile-hero {
  position: relative;
  padding: 6em 1em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(17, 17, 17, 0.7) 100%), url('@/assets/background.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &_title {
    padding: 1em;
    margin-bottom: 1.4em;
    background-color: $primaryClearAlt;
    box-shadow: $shadowDefault;
    opacity: .8;
    text-align: center;

  }

  &_description {
    text-align: justify;
  }

  &_button {
    background-color: $themeWhite;
  }
}</style>
