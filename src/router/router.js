import {createWebHashHistory, createRouter} from 'vue-router';

import News from '../views/News.vue';
import NewsCard from '../views/NewsCard.vue'
import Uprav from '../views/Uprav.vue'
const routes = [
    {
        name: 'News',
        path: '/',
        component: News
    },
    {
        name: 'NewsCard',
        path: '/news/:newsId',
        component: NewsCard
    },
    {
        name: 'Uprav',
        path: '/news/uprav',
        component: Uprav
    },
  
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;