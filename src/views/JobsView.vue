<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" v-bind:key="job" class="post">
        <div class="points">
          {{ job.points || 0}}
        </div>
        <div>
          <p class="news-title">
            <a :href="job.url">{{job.title}}</a>
          </p>
          <small class="link-text">
            {{job.time_ago}}, 
            <a :href="job.url"> {{job.domain}} </a>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
// import bus from "../utils/bus";
import ListMixin from "../mixins/ListMixin";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
};
</script>

<style></style>
