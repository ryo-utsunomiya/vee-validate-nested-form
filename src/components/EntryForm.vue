<template>
  <form action="">
    <div>
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="name"
        v-validate="'required'"
      >
    </div>
    <div>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        v-validate="'required|email'"
      >
    </div>
    <div>
      <label for="tel">Tel</label>
      <input
        type="tel"
        name="tel"
        id="tel"
        v-model="tel"
        v-validate="'required'"
      >
    </div>
    <div>
      <label for="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        v-model="address"
        v-validate="'required'"
      >
    </div>
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
      <input type="text"
             name="shippingAddress"
             id="shippingAddress"
             v-model="shippingAddress"
             v-validate="'required'"
      >
    </div>
    <div v-show="errors.any()">
      <p v-for="error in errors.collect()">{{ error }}</p>
    </div>
    <input type="submit" value="submit" @click.prevent="doValidation">
  </form>
</template>
<script>
  /* eslint-disable no-console */

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
    methods: {
      doValidation() {
        this.$validator.validateAll();
        if (this.errors.any()) {
          console.log('cancel submission');
        } else {
          console.log('do submission');
        }
      },
    },
  };
</script>
