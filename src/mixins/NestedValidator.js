import EventBus from '../EventBus';

export default {
  mounted() {
    EventBus.$on('validate', (errorBag) => {
      this.$validator.validateAll();
      this.errors.items.forEach((error) => {
        errorBag.add(error);
      });
    });
  },
};
