<template>
  <div>
    <mt-header :title="title">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
  </div>
</template>

<script>

export default {
  name: 'db-nav',
  data(){
    return {
        
    }
  },
  props:{
    title:{
      type:String,
      default:"属于你的漫画APP"
    }
  },
  methods:{
    showMenu(){
      alert(1);
    } 
  }
}
</script>

<style lang="scss" scope>

</style>
