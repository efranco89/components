<template>
  <div id="app">
    <post-example/>
  </div>
</template>

<script>
  import PostExample from './components/Posts'
  export default {
    name: 'App',
    components:{
      PostExample
    }
  }
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
