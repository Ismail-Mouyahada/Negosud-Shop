<template>
  <HeaderFooterLayout>
    <div class="authorization">
      <form @submit.prevent="login">
        <div class="authorization-section">
          <h3 class="authorization-section_title">Portail connexion</h3>
          <p class="authorization-section_info">Veuillez vous connecter</p>
          <input type="email" placeholder="Email" name="email" v-model="email" required autocomplete  />
          <input type="password" name="motDePasse" placeholder="Mot de passe" v-model="motDePasse" required autocomplete />
          <BtnBlack type="submit">Se connecter</BtnBlack>
          <div class="authorization-more">
            <router-link :to="{ name: 'register' }" class="authorization-more_item">
              <div>S'inscrire</div>
            </router-link>
            <router-link :to="{ name: 'forgot-password' }" class="authorization-more_item">
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
import BtnBlack from "@/components/UI/button-black.vue";
import axios from "axios";

export default {
  name: "Authorization",
  components: { HeaderFooterLayout, InputAuthorization, BtnBlack },
  data() {
    return {
      email: "",
      motDePasse: "",
    };
  },
  methods: {


    async login() {
      let token = localStorage.getItem("token");
      let email = this.email;
      let motDePasse = this.motDePasse;
      if (token != null) {
        this.$router.push("/authorization");
      }
      try {
        const response = await axios.post("http://195.154.113.18:8000/api/auth", {
          email,
          motDePasse,
        }).then((response) => {
          localStorage.setItem("token", response.data.access_Token);
          const token = response.data.access_Token;
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          this.$router.push("/account");
          return Ok;
        });

      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/styles/scss/variables";

input {
  margin: 1em 0;
}

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
      color: #9d94c5;
    font-weight: 100;
    padding: 1em;
    line-height: 17px !important;
    }
  }
}
</style>
