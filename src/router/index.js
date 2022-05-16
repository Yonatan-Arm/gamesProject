import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import gameDetails from '../views/game-details.vue'



const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'active',

    routes: [{
        path: '/',
        name: 'home',
        component: homePage
    },
  {
        path: '/game/:gameId',
        name: 'details',
        component: gameDetails
    },





    ]
})

export default router