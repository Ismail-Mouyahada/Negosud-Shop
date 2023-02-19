<template>
  <div class="follow">
    <div class="follow-content">
      <div class="follow-content_mood">
        <h2>Vous êtes professionnel ? </h2>
        <p>
          Si vous êtes des professionel, vous pouvez nous contacter pour prendre officialiser le partenariat
        </p>
        <btn-white>Devenir partenir ( reduction 10% )</btn-white>
      </div>
      <div class="follow-content_social">
        <p>Suivez-nous, partager le moment et deguster Negosud !</p>
        <div class="follow-content_social-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowUs",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.follow {
  padding: 5em 0;
  width: 100%;
  background-image: url("@/assets/background_4.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: (576px)) {
    padding: 5em 1em;
  }

  &-content {
    margin: 0 auto;
    max-width: 1320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3em;

    &_mood {
      padding: 2em 5em;
      width: fit-content;
      text-align: center;
      background-color: $themeBlackAlt;
      @media (max-width: (576px)) {
        display: flex;
        flex-direction: column;
        gap: 1em;
        box-shadow: $shadowDefault;
      }

      & > h2 {
        margin: 0;
        color: $themeWhite;
        font-weight: 400;
        font-size: 53px;
        line-height: 80px;
      }

      & > p {
        color: $themeWhite;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
      }
    }

    &_social {
      padding: 2em 5em;
      width: fit-content;
      text-align: center;
      background-color: $themeBlackAlt;

      & > p {
        margin: 0 0 1em;
        color: $themeWhite;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
      }

      &-links {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        &> a {
          color: $whiteClear;
          text-decoration: none;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      }
    }
  }
}

.flex {
  display: flex;
  justify-content: space-evenly;
}
</style>
