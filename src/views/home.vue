<template>
  <div>
     <div class="container">
        <db-book v-for="item in list" :title="item.name" :src="resolve(item.png)">
        </db-book>
     </div>
  </div>
</template>

<script>
import book from '../components/book/book'
export default {
  name: 'App',
  data(){
    return {
       list:[{
        name:'一拳超人',
        png:'1.jpg'
       },{
        name:'七大罪',
        png:'2'
       }] 
    }
  },
  components:{
    'db-book':book
  },
  methods:{
    resolve(name){
      return 'src/assets/'+name
    }
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
