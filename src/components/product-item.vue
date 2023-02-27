<template>
  <div class="product">
    <div class="product-brand">
      <p class="product-brand_title">{{ product.region }}</p>
    </div>
    <div class="product-name">
      <p class="product-name_title">{{ product.nomProduit }}</p>
    </div>
    <div class="product-attribute">
      <p class="product-attribute_title">{{ product.description }}</p>
    </div>
    <div class="product-price">
      <p class="product-price_value">{{ product.prix_unitaire }}€</p>
    </div>
    <div class="product-image">
      <img v-bind:src="product.imagePrincipal" class="catalogue-img" alt="product image" />
    </div>
    <btn-black @click="addToCart">Ajouter au panier</btn-black>
  </div>
</template>

<script>
export default {
  name: "product-item",
  props: {
    product: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";

.product {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  width: 300px;
  background-color: #ebebeb;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgb(29 30 65 / 25%);
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-between;


  &-brand {
    text-align: center;
    background-color: #bcd114;
    width: 100%;
    border-radius: 5px;
    color: white;
    margin: 0 0 1em 0;

    &_title {
      margin: 0.6em 0 0.8em;
      color: inherit;
      font-size: 22px;
      font-weight: 700;
    }
  }

  &-name {
    text-align: center;

    &_title {
      margin: 0 0 2em;
      color: $themeBlack;
      font-size: 17px;
      font-weight: 400;
    }
  }

  &-attribute {
    min-height: 12em;
    text-align: center;
    padding: 1em;
    font-size: 5px !important;
    width: 100% !important;
    color: #fff;
    background: #c1114a;

    &_title {
      margin: 0 0 0.8em;
      color: inherit;
      font-size: 12px;
      font-weight: 400;
      font-family: revert;
      line-height: revert;
      padding: 2em;
    }
  }

  &-price {
    text-align: center;

    &_value {
      margin: 1em 0;
      color: #fff;
      font-size: 19px;
      font-weight: 700;
      background-color: #5c5b55;
      padding: 1em;
      border-radius: 50%;
    }
  }
 

&-image {
  margin: 1em 0;
  height: 17em;

  background-color: transparent;
}
}

img.catalogue-img {
  height: inherit;
}
</style>
