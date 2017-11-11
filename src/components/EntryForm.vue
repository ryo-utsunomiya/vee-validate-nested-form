<template>
  <form action="">
    <member-form :member="member"></member-form>
    <option-form :option="option"></option-form>
    <div v-show="errors.any()">
      <p v-for="error in errors.collect()">{{ error }}</p>
    </div>
    <input type="submit" value="submit" @click.prevent="submit">
  </form>
</template>
<script>
  /* eslint-disable no-console */
  import EventBus from '../EventBus';
  import MemberForm from './MemberForm';
  import OptionForm from './OptionForm';

  export default {
    name: 'entry-form',
    components: {
      MemberForm,
      OptionForm,
    },
    data() {
      return {
        member: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        option: {
          shipToDifferentAddress: false,
          shippingAddress: '',
        },
      };
    },
    methods: {
      submit() {
        this.errors.clear();
        this.$validator.validateAll();
        EventBus.$emit('validate', this.errors);

        if (this.errors.any()) {
          console.log('cancel submission');
        } else {
          console.log('do submission');
        }
      },
    },
  };
</script>
