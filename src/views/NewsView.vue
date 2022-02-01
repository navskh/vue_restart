<template>
  <div>
    <p v-for="item in this.$store.state.news" v-bind:key="item">
      <a v-bind:href=item.url>{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>


export default {
  computed(){
    console.log(this.$store.state.news);
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');
  },

}
</script>

<style>

</style>