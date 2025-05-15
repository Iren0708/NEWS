import {createWebHashHistory, createRouter} from 'vue-router';

import News from '../views/News.vue';
import NewsCard from '../views/NewsCard.vue'
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
  
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;