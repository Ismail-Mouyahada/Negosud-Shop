<template>
  <div>
    <h1>Devenir</h1>
    <form @submit.prevent="register">
      <label for="nomUtilisateur">Nom Utilisateur:</label>
      <input type="text" id="nomUtilisateur" v-model="nomUtilisateur" />

      <label for="nom">Nom:</label>
      <input type="text" id="nom" v-model="nom" />

      <label for="prenom">Prénom:</label>
      <input type="text" id="prenom" v-model="prenom" />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />

      <label for="tel">Tel:</label>
      <input type="tel" id="tel" v-model="tel" />

      <label for="isBusiness">Professionnel:</label>
      <input type="checkbox" id="isBusiness" v-model="isBusiness" />

      <label for="siren">Nom Utilisateur:</label>
      <input type="text" id="siren" v-model="siren" />

      <label for="motDePasse">Mot de passe:</label>
      <input type="password" id="motDePasse" v-model="motDePasse" />

      <button type="submit">Soumettre</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nomUtilisateur: "",
      nom: "",
      prenom: "",
      email: "",
      tel: "",
      motDePasse: "",
      role: 0,
      isBusiness: null,
      siren: "",
    };
  },
  methods: {
    register() {
      axios
        .post("http://195.154.113.18:8000/api/Register", {
          nomUtilisateur: this.nomUtilisateur,
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          tel: this.tel,
          motDePasse: this.motDePasse,
          role: this.role,
          isBusiness: this.isBusiness,
          siren: this.siren,
        })
        .then((response) => {
          console.log("Inscrit avec succès !");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
