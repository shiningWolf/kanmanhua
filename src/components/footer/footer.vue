<template>
  <ul class="footer">
    	<li>
    		<router-link :to="{name:'home'}">
    			<i class="fa fa-home icon"></i>
    			<span>首页</span>
    		</router-link>
    	</li>
    	<li>
    		<router-link :to="{name:'upload'}">
    			<i class="fa fa-cloud-upload icon"></i>
    			<span>图片管理</span>
    		</router-link>
    	</li>
    	
  </ul>
</template>

<script>
export default {
  name: 'db-book',
  data(){
    return {
        
    }
  }
}
</script>

<style lang="scss" scope>
.footer{
	position:fixed;
	bottom:0;
	left:0;
	display: -webkit-flex; /* Safari */
  	display: flex;
  	height:2rem;
  	justify-content: space-around;
  	width:100%;
}
.icon{
	display:block;
}
</style>
