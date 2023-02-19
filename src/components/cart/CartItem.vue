<template>
  <div class="cart-item">
    <div class="cart-item_head">
      <div>
        <p class="brand-title">{{ cart_item_data.nomProduit }}</p>
        <p>{{ cart_item_data.nomProduit }}</p>
      </div>
      <button @click="deletFromCart" class="cart-item_head-button"></button>
    </div>
    <div class="cart-item_body">
      <img
        :src="cart_item_data.imagePrincipal"
        class="cart-item_image"
        alt="product image"
      />
      <p class="product-price">{{ cart_item_data.prix_unitaire }} €</p>
      <div class="product-qty">
        <p class="product-qty_title">Quantité:</p>
        <div class="product-qty_value">
          <button @click="qtyMinus" type="button" class="product-qty_value-btn">-</button>
          <span class="product-qty_value-total">{{ cart_item_data.quantity }}</span>
          <button @click="qtyPlus" type="button" class="product-qty_value-btn">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deletFromCart() {
      this.$emit("deletFromCart");
    },
    qtyMinus() {
      this.$emit("minus");
    },
    qtyPlus() {
      this.$emit("plus");
    },
  },
  mounted() {
    this.cart_item_data.quantity = 1;
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.cart-item {
  width: 600px;
  margin: 0 auto 1em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 10px;
  box-shadow: $shadowDefault;
  box-shadow: 0px 4px 4px rgb(29 30 65 / 25%);
  background-image: linear-gradient(
    180deg,
    #c0d70cfc 30%,
    #abc104fc 70%
  );
  color: #fff;

  &_head {
    display: flex;
    justify-content: space-between;
    &-button {
      position: relative;
      height: 36px;
      width: 36px;
      background-color: transparent;
      border: none;
      border-radius: 0px;
      cursor: pointer;
      &:after {
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        background-image: url("@/assets/close.svg");
        background-repeat: no-repeat;
        background-position: center;
        transform: translate(-50%, -50%);
        cursor: pointer;
      }
    }
  }
  &_body {
    display: flex;
    justify-content: space-between;
    height: 150px;
  }
  &_image {
    max-height: 140px;
  }
}
.brand-title {
  margin: 0 0 0.8em;
  color: $themeBlack;
  font-size: 24px;
  font-weight: 700;
}
.product-price {
  margin: 0;
}
.product-qty {
  &_title {
    margin: 0 0 1em;
  }
  &_value {
    display: flex;
    align-items: center;
    gap: 0.6em;

    &-btn {
      padding: 0.4em;
      background-color: $greyClear;
      border: none;
      color: $themeBlack;
      font-family: $themeFont;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.1s;
      &:hover {
        background-color: $greyClearAlt;
        color: $themeBlack;
        outline: none;
        box-shadow: none;
      }
    }
    &-total {
      font-size: 14px;
      font-weight: 700;
    }
  }
}

 
</style>
