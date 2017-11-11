<template>
  <div>
    <div>
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="member.name"
        v-validate="'required'"
      >
    </div>
    <div>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="member.email"
        v-validate="'required|email'"
      >
    </div>
    <div>
      <label for="tel">Tel</label>
      <input
        type="tel"
        name="tel"
        id="tel"
        v-model="member.tel"
        v-validate="'required'"
      >
    </div>
    <div>
      <label for="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        v-model="member.address"
        v-validate="'required'"
      >
    </div>
  </div>
</template>
<script>
  export default {
    name: 'member-form',
    props: [
      'member',
    ],
  };
</script>
