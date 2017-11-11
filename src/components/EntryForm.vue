<template>
  <form action="">
    <member-form
      :name="name"
      :email="email"
      :tel="tel"
      :address="address"
    ></member-form>
    <shipping-form
      :ship-to-different-address="shipToDifferentAddress"
      :shipping-address="shippingAddress"
    ></shipping-form>
    <div v-show="errors.any()">
      <p v-for="error in errors.collect()">{{ error }}</p>
    </div>
    <input type="submit" value="submit" @click.prevent="submit">
  </form>
</template>
<script>
  /* eslint-disable no-console */
  import MemberForm from './MemberForm';
  import ShippingForm from './ShippingForm';

  export default {
    name: 'entry-form',
    components: {
      MemberForm,
      ShippingForm,
    },
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
      submit() {
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
