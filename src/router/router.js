import {createWebHashHistory, createRouter} from 'vue-router';

import News from '../views/News.vue';
import NewsCard from '../views/NewsCard.vue';
import controlNews from '../views/controlNews.vue';
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
        path: '/controlNews',
        name: 'controlNews',
        component: controlNews,
      },
  
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;