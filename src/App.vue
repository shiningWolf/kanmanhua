<template>
  <div id="app">
  	<db-nav></db-nav>
    <router-view/>
    <db-footer></db-footer>
  </div>
</template>

<script>
import nav from '@/components/nav/nav'
import footer from '@/components/footer/footer'
export default {
  name: 'App',
  components:{
    'db-nav':nav,
    'db-footer':footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
