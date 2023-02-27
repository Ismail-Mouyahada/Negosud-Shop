<template>
  <HeaderFooterLayout>
    <div class="cart">
      <div class="cart-navigation">
        <router-link :to="{ name: 'catalog' }" class="cart-navigation_link">
          <div>Retourner à la boutique</div>
        </router-link>
      </div>
      <form class="wrapper">
        <div class="cart-item_shipping">
          <div class="checkout-section">
            <div class="login-section">
              <h3 class="shipping-section_title">E-mail</h3>
              <input id="email" v-model="email" name="email" type="email" placeholder="votre adresse mail" />
            </div>
            <div class="shipping-section">
              <h4 class="shipping-section_title">Adresse de livraison</h4>
              <div class="shipping-section_inputs">
                <input v-model="nom" id="nom" name="nom" type="text" placeholder="Nom" />
                <input v-model="prenom" id="prenom" name="prenom" type="text" placeholder="Prénom" />
                <input v-model="pays" id="pays" name="pays" type="text" placeholder="Pays" />
                <input v-model="ville" id="ville" name="ville" type="text" placeholder="Ville" />
                <input v-model="region" id="region" name="region" type="text" placeholder="Region" />
                <input v-model="codePostal" id="codePostal" name="codePostal" type="text" placeholder="Code postal" />
                <input v-model="tel" id="tel" name="tel" type="number" placeholder="tel : 02 00 00 00 00" />
                vous êtes un professionnel ?
                <input class="col-4" v-model="isBusiness" type="checkbox" name="isBusiness" id="isBusiness"
                  :checked="isBusiness" />
                <input v-model="Siren" v-if="isBusiness" id="Siren" name="Siren" type="text"
                  placeholder="siren(facultatif)" />
              </div>
            </div>
            <div class="shipping-method-block">
              <h4 class="shipping-method-block_title">Mode d'achat</h4>
              <p class="shipping-method-block_text">
                Il faut compter 1-3 jour pour la liviraison. 24h pour un rayon de 100km
                autour de l'ensigne.
              </p>
            </div>
            <div>
              <btn-grey type="submit" class="buttonProceedToPayment" value="submit-shipping"
                @click.prevent="payment">Coninuer pour payer</btn-grey>

              <!-- Set up a container element for the button -->
            </div>
            <div class="shipping-help">
              <h4 class="shipping-help_title">
                une erreur est survenue leur de paiment ?
              </h4>
              <p class="shipping-help_text">
                Veuillez verifier que tous les informations fourni, sont correcte avant de
                soumettre la commande.<br />Applez nous sinon
                <a href="tel:+33000000000" class="shipping-help_text-link">+33 (06) 000 - 000</a>
                pour vous assister.
              </p>
            </div>

          </div>
        </div>
        <div class="cart-item_products">
          <div class="checkout-order-summary">
            <h4 class="checkout-order-summary_title">Récapétulation de la commande</h4>
            <p v-if="!CART.length">la panier est vide</p>
            <div class="checkout-order-summary_total">
              <div class="checkout-order-summary_total-tax">
                <span class="summary-label">Taxe appliqué sur l'achat : </span><span class="append">{{ (cartTotalCost *
                  20) / 100 }} € </span>
              </div>
              <div class="checkout-order-summary_total-grand">
                <span class="summary-label">Somme total à régler : </span><span class="append">{{
                  Math.round(cartTotalCost + (cartTotalCost *
                    20) / 100) }}€</span>
              </div>
            </div>
            <CartItem v-for="(item, index) in CART" :key="item.nomProduit" :cart_item_data="item"
              @deletFromCart="deletFromCart(index)" @plus="plus(index)" @minus="minus(index)" />
          </div>
        </div>
      </form>
    </div>
  </HeaderFooterLayout>
</template>

<script>
import CartItem from "@/components/cart/CartItem.vue";
import { mapActions, mapGetters } from "vuex";



export default {
  name: "Cart",
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      monnie: "eur",
      isBusiness: false,
      email: "",
      nom: "",
      prenom: "",
      pays: "",
      ville: "",
      region: "",
      codePostal: "",
      tel: "",
      dateCommande: new Date('2023-02-01'),
      Siren: "",

    };
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.prix_unitaire * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          let result = sum + el;
          return result;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART", "QTYMINUS_CART_ITEM", "QTYPLUS_CART_ITEM"]),
    deletFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    plus(index) {
      this.QTYPLUS_CART_ITEM(index);
    },
    minus(index) {
      this.QTYMINUS_CART_ITEM(index);
    },
    payment(e) {
      if (this.email == "" || this.nom == "" || this.prenom == "" || this.pays == "" || this.ville == "" || this.region == "" || this.codePostal == "" || this.tel == "" || this.dateCommande == "") {
        alert("Veuillez remplir tous les champs")
      } else if (this.cartTotalCost === 0) {
        alert(" le panier des produits est vide")

      } else {
        let monnie = this.monnie;
        let datelivraison = new Date(this.dateCommande.getFullYear(), this.dateCommande.getMonth(), this.dateCommande.getDay() + 5, this.dateCommande.getHours(), this.dateCommande.getMinutes(), this.dateCommande.getSeconds());
        let dateCommande = new Date(this.dateCommande.getFullYear(), this.dateCommande.getMonth(), this.dateCommande.getDay(), this.dateCommande.getHours(), this.dateCommande.getMinutes(), this.dateCommande.getSeconds());
        let tax = 0.2;
        confirm(`
        -----------------------------------------------------------
         Félicication ! Votre commande est en cours de traitement
        -----------------------------------------------------------
        
        Tax appliqué sur la commande: ${(this.cartTotalCost * 20) / 100} €  
        Total à régler : ${this.cartTotalCost * tax} € TTC
        
        Adresse de livraison :
        ${this.nom} ${this.prenom}
        ${this.ville} ${this.codePostal}
        ${this.region} ${this.pays}
        
        information d'utilisateur : 
        ---------------------------
        Nom               : ${this.nom}
        Prenom            : ${this.prenom}
        Email             : ${this.email}
        Tel               : ${this.tel}
        Siren             : ${this.Siren}
        Date de commande  : ${dateCommande}
        Date de livraison : ${datelivraison}
        Mode de paiement  : ${monnie}
        `)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";

input#isBusiness {
  width: 50%;
}

.cart {
  padding: 2em;

  &-navigation {
    max-width: 1600px;
    margin: 0 auto;
    padding-bottom: 2em;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: (576px)) {
      padding: 0 1em 2em;
    }

    &_link {
      position: relative;
      padding-left: 1.6em;
      color: $themeBlack;
      font-size: 18px;
      text-decoration: none;

      &:before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        background-image: url("@/assets/arrow-left.svg");
        background-repeat: no-repeat;
        background-position: center;
        left: 0;
        transform: translateY(30%);
        cursor: pointer;
      }
    }
  }

  &-item {
    &_shipping {
      max-width: 800px;
    }

    &_products {
      background-color: #fff;
      margin: 1em;
      padding: 1em;
      border-radius: 1em;

      @media (max-width: (576px)) {
        order: -1;
      }
    }
  }
}

.wrapper {
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  gap: 2em;

  background: #efefef;
  padding: 2em;
  border-radius: 1em;

  @media (max-width: (576px)) {
    padding: 0 1em;
    flex-direction: column;
    justify-content: center;
  }
}

.login-section {
  margin-bottom: 1em;

  &_title {
    margin: 0 0 0.6em;
    color: white;
    font-weight: 400;
    font-size: 30px;
    line-height: 44px;
  }
}

.shipping-section {
  margin-bottom: 1em;

  &_title {
    margin: 0 0 0.6em;
    color: $themeBlack;
    font-weight: 400;
    font-size: 30px;
    line-height: 44px;
  }

  &_inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 1em 2em;
  }
}

.shipping-method-block {
  &_title {
    margin: 0 0 0.6em;
    color: $themeBlack;
    font-weight: 400;
    font-size: 30px;
    line-height: 44px;
  }

  &_text {
    color: $themeBlack;
    font-size: 18px;
    font-weight: 600;
    line-height: 32px;
  }
}

.checkout-order-summary {
  &_title {
    margin: 0 0 0.6em;
    color: $themeBlack;
    font-weight: 400;
    font-size: 24px;
    line-height: 44px;
  }

  &_total {
    margin-bottom: 1.4em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;

    &-tax,
    &-grand {
      display: flex;
      justify-content: space-between;
      color: $themeBlack;
    }
  }
}

.summary-label {
  flex: 1 1 auto;
}

.append {
  font-size: 20px;
  font-weight: 600;
}

.shipping-help {
  margin: 1em 0;

  &_title {
    margin: 0 0 0.6em;
    font-weight: 400;
    font-size: 30px;
    line-height: 44px;
    color: $themeBlack;
  }

  &_text {
    margin: 0;
    color: $themeGreyAlt;
    font-size: 18px;
    font-weight: 600;
    line-height: 32px;

    &-link {
      color: $themeBlack;
    }
  }
}
</style>
