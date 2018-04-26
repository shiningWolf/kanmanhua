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
  </div>
</template>

<script>

export default {
  name: 'nav',
  data(){
    return {
        
    }
  }
}
</script>

<style lang="scss" scope>
.navline{
  overflow:hidden;
}
.nav{
  display:inline-block;
  height:1.6rem;
  line-height: 1.6rem;
}
.title{
  display:inline-block;
  float:left;
  margin-left:1rem;
  line-height: 1.6rem;
  color: #00b600;
}
</style>
