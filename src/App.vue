<template>
  <div class="container">
    <app-header/>
    <post-example/>
    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from './components/Header';
  import PostExample from './components/Posts';
  import AppFooter from './components/Footer';
  export default {
    name: 'App',
    components:{
      AppHeader,
      PostExample,
      AppFooter
    }
  }
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
