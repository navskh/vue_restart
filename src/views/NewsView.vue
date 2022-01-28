<template>
  <div>
    <div v-for="news in newses" v-bind:key="news">{{news.title}}</div>
  </div>
</template>

<script>
import {fetchNewsList} from '../api/index.js'


export default {
  data(){
    return{
      newses: []
    }
  },

  created(){
    var vm = this; // 여기서 this를 바인딩해줘야 지금 여기 컴포넌트를 가리킬 수 있다.
    // call back 하고 가르키면 axios.get 을 가르키게 된다.
    fetchNewsList()
    .then(function(response) {
      console.log(this);
      console.log(vm);
      vm.newses = response.data;
    })
    .catch(function(error){
      console.log(error);
    })
  },

}
</script>

<style>

</style>