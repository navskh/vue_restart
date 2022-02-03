import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import { store } from "../store/index.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  // # (해시값이) url에 붙는 경우가 있는데 거슬림 지워버리는 코드
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // path : url 에 대한 정보 (주소)
      path: "/news",
      // component : url 주소로 갔을 때의 컴포넌트
      name: "news",
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            bus.$emit("end:spinner");
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      },
      // component: createListView('NewsView'),
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      },
      // component: createListView("AskView"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            bus.$emit("end:spinner");
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      },
      // component: createListView("JobsView"),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
