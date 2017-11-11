<template>
  <div>
    <div>
      <label for="shipToDifferentAddress">Ship to different address</label>
      <input
        type="checkbox"
        name="shipToDifferentAddress"
        v-model="shipToDifferentAddress"
        id="shipToDifferentAddress"
      >
    </div>
    <div v-show="shipToDifferentAddress">
      <label for="shippingAddress">Shipping Address</label>
      <input
        type="text"
        name="shippingAddress"
        id="shippingAddress"
        v-model="shippingAddress"
        v-validate="'required'"
      >
    </div>
  </div>
</template>
<script>
  export default {
    name: 'shipping-form',
    props: [
      'shipToDifferentAddress',
      'shippingAddress',
    ],
  };
</script>
