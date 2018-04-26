<template>
  <div>
     <db-nav></db-nav>
     <div class="container">
        <db-book v-for="item in list" :title="item">
        </db-book>
     </div>
     <db-footer></db-footer>
  </div>
</template>

<script>
import nav from '../components/nav/nav'
import book from '../components/book/book'
import footer from '../components/footer/footer'
export default {
  name: 'App',
  data(){
    return {
       list:["1","2"] 
    }
  },
  components:{
    'db-nav':nav,
    'db-book':book,
    'db-footer':footer
  }
}
</script>

<style lang="scss" scope>
.container{
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
  width:100%;
  margin-top:2rem;
}
</style>
