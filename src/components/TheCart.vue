<template>
  <div class="mobile-cart__container">
    <h3 class="title">Cart</h3>
    <div class="content">
      <div class="cart-item" v-if="cartItem.items.length">
        <!-- cart-item__container -->
        <div
          v-for="(item, index) in cartItem.items"
          :key="index"
          class="cart-item__container"
        >
          <!-- cart-item__content -->
          <div class="cart-item__content">
            <div class="thumbnail">
              <img src="@/assets/images/image-product-1-thumbnail.jpg" alt="" />
            </div>
            <div class="description">
              <h4>{{ item.name }}</h4>
              <h4>
                {{ `$${item.price}.00` }} * {{ item.count }}
                <span>${{ item.count * item.price }}.00</span>
              </h4>
            </div>
          </div>
          <!-- end cart-item__content -->
          <div @click="removeProductToCart(index)" class="cart-item__delete-action">
            <IconDelete />
          </div>
        </div>
        <!-- end cart-item__container -->
        <button class="btn"><span>Checkout</span></button>
      </div>
      <p v-else>Your cart is empty.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconDelete from "@/components/icons/IconDelete.vue";
import { useCart } from "@/composables/useCart";

const { cartItem, removeProductToCart } = useCart();
</script>
