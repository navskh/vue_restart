<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import {
//   mapState, 
//   // mapGetters
//   } from 'vuex';

import ListItem from '../components/ListItem.vue'


export default {
  components:{
    ListItem,
  }
  // computed:{
  //   // 아래 내용은 위에서 변수명을 this.$store.state.ask 를 간략표기방법

  //   // #4 (getter 배열 표기법)
  //   // ...mapGetters([
  //   //   'fetchedAsk'
  //   // ]),

  //   // #3 (getter 객체 표기법)
  //   // ...mapGetters({
  //   //   fetchedAsk : 'fetchedAsk'
  //   // })

  //   // #2 (mapState 사용법)
  //   ...mapState({
  //     ask: index => index.asks
  //   })

  //   // #1 (함수 사용법)
  //   // ask(){
  //   //   return this.$store.state.ask;
  //   // } 
  // },
  // created(){
  //   this.$store.dispatch('FETCH_ASK');
  // },
} 
</script>

<style>

</style>