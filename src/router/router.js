import {createWebHashHistory, createRouter} from 'vue-router';

import News from '../views/News.vue';

const routes = [
    {
        name: 'News',
        path: '/',
        component: News
    },
  
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;