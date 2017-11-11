<template>
  <div>
    <div>
      <label for="shipToDifferentAddress">Ship to different address</label>
      <input
        type="checkbox"
        name="shipToDifferentAddress"
        v-model="option.shipToDifferentAddress"
        id="shipToDifferentAddress"
      >
    </div>
    <div v-show="option.shipToDifferentAddress">
      <label for="shippingAddress">Shipping Address</label>
      <input
        type="text"
        name="shippingAddress"
        id="shippingAddress"
        v-model="option.shippingAddress"
        v-validate="'required'"
      >
    </div>
  </div>
</template>
<script>
  export default {
    name: 'option-form',
    props: [
      'option',
    ],
  };
</script>
