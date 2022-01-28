<template>
  <div>
    <div v-for="user in users" v-bind:key="user" > {{user.title}} </div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js';

export default {
  data(){
    return{
      users: []
    }
  }, 

  created(){
    console.log(this);
    // 여기서 this를 바인딩해줘야 지금 여기 컴포넌트를 가리킬 수 있다.
    // call back 하고 가르키면 axios.get 을 가르키게 된다.
    fetchAskList()
    .then(response =>{
      this.users = response.data
      console.log(this);
    })
    .catch(error => console.log(error))
  },
} 
</script>

<style>

</style>