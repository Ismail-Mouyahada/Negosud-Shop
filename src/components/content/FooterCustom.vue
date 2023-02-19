<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-container_item footer-newsletter">
        <h3 class="footer-newsletter_title">Restez festifs</h3>
        <p>
          Abonnez-vous et rester au courant de toute l'actualité de nos produits. Negosud, on vous ramene le soliel de sud.
        </p>
        <div class="footer-newsletter_form">
          <input type="mail" class="input-mail" placeholder="your mail" />
          <button type="submit" class="button-submit" value="submit">
            submit
          </button>
        </div>
      </div>
      <div class="footer-container_item footer-navigation">
        <p class="footer-navigation_title">Explorer</p>
        <a href="#">Accueil</a>
        <a href="#">Boutique</a>
        <a href="#">Abonnement</a>
        <a href="#">Notre histoire</a>
        <a href="#">FAQ</a>
        <a href="#">Envoyer à un ami</a>
        <a href="#">Promos & Cadeaux</a>
        <a href="#">Carte fidilité</a>
      </div>
      <div class="footer-container_item footer-socials">
        <p class="footer-socials_title">Nous suivre</p>
        <a href="#">Instagram</a>
        <a href="#">Spotify</a>
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
      </div>
    </div>
    <div class="footer-copyrights">
      <p class="footer-copyrights_item">© Negosud  2023</p>
      <p class="footer-copyrights_item">Nous contacter</p>
      <p class="footer-copyrights_item">Politques</p>
      <p class="footer-copyrights_item">Confidenitalité</p>
      <p class="footer-copyrights_item">Termes et Conditions</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterCustom",
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.footer {
  background-color: $themeBlackAlt;
  width: 100%;

  &-container {
    margin: 0 auto;
    padding: 5em 0;
    max-width: 1320px;
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
    @media (max-width: (576px)) {
      padding: 3em 0;
    }
  }

  &-newsletter {
    flex: 2 2 auto;

    &_title {
      margin: 0 0 1em;
    }

    & > p {
      margin: 0 0 0.8em;
    }

    &_form {
      display: flex;
      border: 1px solid $whiteClear;
      width: fit-content;
    }
  }

  &-socials {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    gap: 1.2em;

    &_title {
      margin: 0 0;
      color: $themeWhite;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      text-transform: uppercase;
    }

    & > a {
      color: $whiteClear;
      text-decoration: none;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  &-navigation {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    gap: 1.2em;

    &_title {
      margin: 0 0;
      color: $themeWhite;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      text-transform: uppercase;
    }

    & > a {
      color: $whiteClear;
      text-decoration: none;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  &-copyrights {
    margin: 0 auto;
    max-width: 1320px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 3em;
    @media (max-width: (576px)) {
      gap: .8em;
    }

    &_item {
      color: $whiteClear;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      &:first-child {
        color: $themeWhite;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
      }
    }
  }
}
.input-mail {
  padding: 1em;
  background-color: transparent;
  color: $themeGrey;
  appearance: none;
  border: none;
  border-radius: 0;
  outline: 0;
  outline-offset: 0;
  font-weight: 400;
  font-size: 9px;
  line-height: 14px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
}
.button-submit {
  background-color: transparent;
  border: none;
  color: $themeWhite;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
