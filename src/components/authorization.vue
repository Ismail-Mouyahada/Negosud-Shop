<template>
  <HeaderFooterLayout>
    <div class="authorization">
      <form>
        <div class="authorization-section">
          <h3 class="authorization-section_title">Portail connexion</h3>
          <p class="authorization-section_info">Veuillez vous connecter</p>
          <input-authorization
            type="email"
            placeholder="email"
            required
            v-model="email"
          />
          <input-authorization
            type="password"
            placeholder="Mot de passe "
            required
            v-model="password"
          />
          <btn-black>Se connecter</btn-black>

          <div class="authorization-more">
            <router-link :to="{ name: 'register' }" class="authorization-more_item">
              <div>S'inscrire</div>
            </router-link>
            <router-link
              :to="{ name: 'forgot-password' }"
              class="authorization-more_item"
            >
              <div>Mot de passe oublié ?</div>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </HeaderFooterLayout>
</template>

<script>
import HeaderFooterLayout from "@/layouts/HeaderFooterLayout.vue";
import InputAuthorization from "@/components/UI/input-authorization.vue";
import axios from "axios";

export default {
  name: "authorization",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://195.154.113.18:8000/api/Auth", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: [HeaderFooterLayout, InputAuthorization],
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.authorization {
  width: 100%;
  display: flex;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: nowrap;

  &-section {
    border-radius: 1em;
    box-shadow: rgb(45 46 66 / 12%) 0 0 11px 2px;
    padding: 2em;
    min-width: 36%;

    &_title {
      margin: 0 0 0.4em;
      color: $themeBlack;
      font-size: 20px;
      font-weight: 700;
      line-height: 96px;
      opacity: 90%;
    }
    &_info {
      margin: 0;
      color: $themeBlack;
      font-size: 18px;
      font-weight: 100;
      line-height: 32px;
    }
  }
  &-more {
    display: flex;
    justify-content: space-between;
    &_item {
      margin: 0;
      color: $themeBlack;
      font-size: 18px;
      font-weight: 100;
      line-height: 32px;
    }
  }
}
</style>
