<template>
  <div>
    <p v-for="ask in ask" v-bind:key="ask">
      <a :href="ask.url">{{ask.title}}</a>
      <small>{{ask.time_ago}} by {{ask.user}}</small>
    </p>
  </div>
</template>

<script>
import {
  mapState, 
  // mapGetters
  } from 'vuex';

export default {
  computed:{
    // 아래 내용은 위에서 변수명을 this.$store.state.ask 를 간략표기방법

    // #4 (getter 배열 표기법)
    // ...mapGetters([
    //   'fetchedAsk'
    // ]),

    // #3 (getter 객체 표기법)
    // ...mapGetters({
    //   fetchedAsk : 'fetchedAsk'
    // })

    // #2 (mapState 사용법)
    ...mapState({
      ask: index => index.asks
    })

    // #1 (함수 사용법)
    // ask(){
    //   return this.$store.state.ask;
    // } 
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  },
} 
</script>

<style>

</style>