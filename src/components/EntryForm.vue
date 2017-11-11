<template>
  <form action="">
    <div>
      <label for="name">Name</label>
      <input type="text"
             name="name"
             id="name"
             v-model="name">
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email"
             name="email"
             id="email"
             v-model="email">
    </div>
    <div>
      <label for="tel">Tel</label>
      <input type="tel"
             name="tel"
             id="tel"
             v-model="tel">
    </div>
    <div>
      <label for="address">Address</label>
      <input type="text"
             name="address"
             id="address"
             v-model="address">
    </div>
    <div>
      <label for="shipToDifferentAddress">Ship to different address</label>
      <input type="checkbox"
             name="shipToDifferentAddress"
             v-model="shipToDifferentAddress"
             id="shipToDifferentAddress">
    </div>
    <div v-show="shipToDifferentAddress">
      <label for="shippingAddress">Shipping Address</label>
      <input type="text"
             name="address"
             id="shippingAddress"
             v-model="shippingAddress">
    </div>
    <input type="submit" value="submit">
  </form>
</template>
<script>
  export default {
    name: 'entry-form',
    data() {
      return {
        name: '',
        email: '',
        tel: '',
        address: '',
        shipToDifferentAddress: false,
        shippingAddress: '',
      };
    },
  };
</script>
