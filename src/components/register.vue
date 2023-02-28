<template>
  <HeaderFooterLayout>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="font-normal text-dark">Se connecter</h5>
            <form @submit.prevent="login">
              <label for="nomUtilisateur">Nom Utilisateur:</label>
              <input type="text" id="nomUtilisateur" v-model="nomUtilisateur" />

              <label for="motDePasse">Mot de passe:</label>
              <input type="password" id="motDePasse" v-model="motDePasse" />

              <button class="btn btn-success p-3 " type="submit">Soumettre</button>
            </form>

          </div>
          <div class="col-md-6">
            <h5 class="text-normal text-dark">Devenir Client</h5>
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

              <button class="btn btn-success p-3 " type="submit">Soumettre</button>
            </form>
          </div>
        </div>
      </div>
    </section>





  </HeaderFooterLayout>
</template>

<script>
import axios from "axios";



export default {
  name: "register",
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

<style scoped>
section {
  padding: 100px 0;
}

form {
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
}

label {
  display: block;
  margin: 10px 0;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {

  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}

@media screen and (max-width: 600px) {

  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}

@media screen and (max-width: 600px) {

  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}

@media screen and (max-width: 600px) {

  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}</style>
