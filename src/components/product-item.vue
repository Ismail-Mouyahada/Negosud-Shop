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
      <img
        v-bind:src="product.imagePrincipal"
        class="catalogue-img"
        alt="product image"
      />
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
  padding: 2em;
  width: 300px;
  background-color: $themeWhiteAlt;
  border-radius: 10px;
  box-shadow: $shadowDefault;

  &-brand {
    text-align: center;
    &_title {
      margin: 0.6em 0 0.8em;
      color: $themeBlack;
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
    text-align: center;
    &_title {
      margin: 0 0 0.8em;
      color: $themeBlack;
      font-size: 17px;
      font-weight: 400;
    }
  }

  &-price {
    text-align: center;
    &_value {
      margin: 1em 0;
      color: $themeBlack;
      font-size: 19px;
      font-weight: 700;
    }
  }

  &-image {
    margin: 1em 0;
    height:17em;

    background-color: transparent;
  }
}

img.catalogue-img {
    height: inherit;
}
</style>
