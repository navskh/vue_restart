<template>
  <div>
    <div v-for="job in jobs" v-bind:key="job" > {{job.title}} </div>
  </div>
</template>



<script>
import {fetchJobsList} from '../api/index.js';

export default {
  data(){
    return{
      jobs: []
    }
  }, 

  created(){
    var vm = this; // 여기서 this를 바인딩해줘야 지금 여기 컴포넌트를 가리킬 수 있다.
    // call back 하고 가르키면 axios.get 을 가르키게 된다.
    fetchJobsList()
    .then(function(response) {
      vm.jobs = response.data;
    })
    .catch(function(error){
      console.log(error);
    })
  },
}
</script>

<style>

</style> 