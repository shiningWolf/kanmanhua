<template>
  <div class="book">
     <img class="bookImg" :src="src" @click="goMenu"/>
     <label>{{title}}</label>
  </div>
</template>

<script>
export default {
  name: 'db-book',
  data(){
    return {
        
    }
  },
  props:{
  	title:String,
    src:String
  },
  created(){
  	
  },
  methods:{
    goMenu(){
      this.$router.push('/menu');
    }
  }
}
</script>

<style lang="scss" scope>
.book{
	width:40%;
	margin-left:1rem;
	height:8rem;
}
.bookImg{
	width:100%;
	height:6rem;	
}
</style>
