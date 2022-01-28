<template>
  <div class='header'>
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>|
      <router-link to="/item">Item</router-link>|
      <router-link to="/user">User</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped> 
  /* 해당 컴포넌트안에서만 사용가능 */

  .header{
    color: white;
    display: flex;
    background: #42b883;
    padding: 8px;
  }

  .header .router-link-exact-active {
    color : #35495e
  }

  .header a {
    color: white;
  }
</style>