import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);


export const router = new VueRouter({
    // # (해시값이) url에 붙는 경우가 있는데 거슬림 지워버리는 코드
    mode: 'history', 
    routes:[
        {
            path: '/',
            redirect:'/news',
        },
        {
            // path : url 에 대한 정보 (주소)
            path: '/news',
            // component : url 주소로 갔을 때의 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path:'/user',
            component: UserView,
        },
        {
            path:'/item',
            component: ItemView,
        },
    ]
})