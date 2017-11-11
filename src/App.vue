<template>
  <div id="app">
    <entry-form/>
  </div>
</template>

<script>
  import EntryForm from './components/EntryForm';

  export default {
    name: 'app',
    components: {
      EntryForm,
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
