<template>
  <div class="navline">
    <h1 class="title">
      <router-link :to="{ name: 'HomeView'}">
        豆瓣
      </router-link>
    </h1>
    <ul class="nav">
    	<li>
    		<router-link style="color: #2384E8" :to="{ name: 'MovieView'}">
	          电影
	        </router-link>
    	</li>
    	<li>
    		<router-link style="color: #9F7860" :to="{ name: 'BookView'}">
	          图书
	        </router-link>
    	</li>
    	<li>
    		<router-link style="color: #E4A813" :to="{ name: 'StatusView'}">
	          广播
	        </router-link>
    	</li>
    	<li>
    		<router-link style="color: #2AB8CC" :to="{ name: 'GroupView'}">
	          小组
	        </router-link>
    	</li>
    </ul>
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
  methods:{
    showMenu(){
      alert(1);
    } 
  }
}
</script>

<style lang="scss" scope>

</style>
